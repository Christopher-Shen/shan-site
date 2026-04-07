import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const defaultCenter = [34.25, 108.5];
const defaultZoom = 5;

export function RecommendationMap({
  recommendations,
  selectedRecommendation,
  onSelectRecommendation,
}) {
  return (
    <div className="map-shell">
      <MapContainer
        center={defaultCenter}
        className="leaflet-map"
        scrollWheelZoom={true}
        zoom={defaultZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitMapToRecommendations recommendations={recommendations} />
        <PanToSelectedRecommendation recommendation={selectedRecommendation} />

        {recommendations.map((recommendation) => (
          <Marker
            key={recommendation.id}
            position={[recommendation.lat, recommendation.lng]}
            eventHandlers={{
              click: () => onSelectRecommendation(recommendation.id),
            }}
          >
            <Popup>
              <div className="map-popup">
                <strong>{recommendation.name}</strong>
                <span>{recommendation.city}</span>
                <p>{recommendation.note}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function FitMapToRecommendations({ recommendations }) {
  const map = useMap();

  useEffect(() => {
    if (!recommendations.length) {
      map.setView(defaultCenter, defaultZoom);
      return;
    }

    const bounds = L.latLngBounds(
      recommendations.map((recommendation) => [
        recommendation.lat,
        recommendation.lng,
      ])
    );

    map.fitBounds(bounds, {
      padding: [60, 60],
      maxZoom: 13,
    });
  }, [map, recommendations]);

  return null;
}

function PanToSelectedRecommendation({ recommendation }) {
  const map = useMap();

  useEffect(() => {
    if (!recommendation) {
      return;
    }

    map.flyTo([recommendation.lat, recommendation.lng], 13, {
      duration: 0.6,
    });
  }, [map, recommendation]);

  return null;
}
