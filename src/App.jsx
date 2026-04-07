import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { CitySidebar } from "./components/CitySidebar";
import { RecommendationCard } from "./components/RecommendationCard";
import { RecommendationMap } from "./components/RecommendationMap";
import { recommendations } from "./data/recommendations";

function App() {
  const [activeCategory, setActiveCategory] = useState("restaurants");
  const [activeCity, setActiveCity] = useState("All Cities");
  const [activeView, setActiveView] = useState("list");
  const [selectedRecommendationId, setSelectedRecommendationId] = useState(
    recommendations[0]?.id ?? null
  );

  const cities = useMemo(
    () =>
      Array.from(new Set(recommendations.map((recommendation) => recommendation.city))),
    []
  );

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((recommendation) => {
      const matchesCategory = recommendation.category === activeCategory;
      const matchesCity =
        activeCity === "All Cities" || recommendation.city === activeCity;

      return matchesCategory && matchesCity;
    });
  }, [activeCategory, activeCity]);

  useEffect(() => {
    if (!filteredRecommendations.some((item) => item.id === selectedRecommendationId)) {
      setSelectedRecommendationId(filteredRecommendations[0]?.id ?? null);
    }
  }, [filteredRecommendations, selectedRecommendationId]);

  const selectedRecommendation =
    filteredRecommendations.find((item) => item.id === selectedRecommendationId) ??
    filteredRecommendations[0] ??
    null;

  return (
    <div className="app-frame">
      <Header
        activeCategory={activeCategory}
        activeView={activeView}
        onCategoryChange={setActiveCategory}
        onViewChange={setActiveView}
      />

      <div className="content-shell">
        <CitySidebar
          cities={cities}
          activeCity={activeCity}
          onCityChange={setActiveCity}
        />

        <main className="main-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Shan Recs</p>
              <h1>
                {activeView === "list"
                  ? "Saved spots worth sending to friends"
                  : "Map your recommendations across the city"}
              </h1>
            </div>
            <p className="result-count">
              {filteredRecommendations.length} spot
              {filteredRecommendations.length === 1 ? "" : "s"}
            </p>
          </div>

          {filteredRecommendations.length ? (
            activeView === "list" ? (
              <section className="card-grid">
                {filteredRecommendations.map((recommendation) => (
                  <RecommendationCard
                    key={recommendation.id}
                    recommendation={recommendation}
                    onClick={() => setSelectedRecommendationId(recommendation.id)}
                    isSelected={recommendation.id === selectedRecommendationId}
                  />
                ))}
              </section>
            ) : (
              <section className="map-layout">
                <RecommendationMap
                  recommendations={filteredRecommendations}
                  selectedRecommendation={selectedRecommendation}
                  onSelectRecommendation={setSelectedRecommendationId}
                />

                <div className="map-sidebar">
                  <div className="map-sidebar-header">
                    <p className="eyebrow">Pinned place</p>
                    <h2>{selectedRecommendation?.name ?? "No active recommendation"}</h2>
                    {selectedRecommendation ? (
                      <p className="map-sidebar-copy">
                        Zoomed to {selectedRecommendation.city}. Click another card or pin
                        to explore the rest of this filter set.
                      </p>
                    ) : (
                      <p className="map-sidebar-copy">
                        No recommendations match the current filters.
                      </p>
                    )}
                  </div>

                  {selectedRecommendation ? (
                    <RecommendationCard recommendation={selectedRecommendation} />
                  ) : null}

                  <div className="mini-list">
                    {filteredRecommendations.map((recommendation) => (
                      <button
                        key={recommendation.id}
                        className={`mini-list-item ${
                          recommendation.id === selectedRecommendation?.id ? "is-active" : ""
                        }`}
                        onClick={() => setSelectedRecommendationId(recommendation.id)}
                        type="button"
                      >
                        <span>{recommendation.name}</span>
                        <span>{recommendation.city}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )
          ) : (
            <section className="empty-state">
              <p className="eyebrow">No matches</p>
              <h2>No spots match that combination yet.</h2>
              <p>
                Try switching cities or categories. Once you add more recommendations,
                they will automatically show up in both the list and the map.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
