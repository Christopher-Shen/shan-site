export function CitySidebar({ cities, activeCity, onCityChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <p className="sidebar-title">Cities</p>
        <p className="sidebar-subtitle">Filter by location</p>
      </div>

      <div className="city-list" role="list">
        <button
          className={`city-chip ${activeCity === "All Cities" ? "is-active" : ""}`}
          onClick={() => onCityChange("All Cities")}
          type="button"
        >
          <span className="city-icon" aria-hidden="true">
            ◎
          </span>
          All Cities
        </button>

        {cities.map((city) => (
          <button
            key={city}
            className={`city-chip ${activeCity === city ? "is-active" : ""}`}
            onClick={() => onCityChange(city)}
            type="button"
          >
            <span className="city-icon" aria-hidden="true">
              ▦
            </span>
            {city}
          </button>
        ))}
      </div>
    </aside>
  );
}
