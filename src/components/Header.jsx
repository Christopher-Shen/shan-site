import { categoryDefinitions } from "../data/recommendations";

export function Header({
  activeCategory,
  activeView,
  onCategoryChange,
  onViewChange,
}) {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <p className="brand-mark">Recs.</p>
        <p className="brand-subtitle">for friends, by city</p>
      </div>

      <nav className="category-nav" aria-label="Categories">
        {categoryDefinitions.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${
              category.id === activeCategory ? "is-active" : ""
            }`}
            onClick={() => onCategoryChange(category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div className="view-toggle" role="tablist" aria-label="View mode">
        <button
          className={activeView === "list" ? "is-active" : ""}
          onClick={() => onViewChange("list")}
          type="button"
        >
          List View
        </button>
        <button
          className={activeView === "map" ? "is-active" : ""}
          onClick={() => onViewChange("map")}
          type="button"
        >
          Map View
        </button>
      </div>
    </header>
  );
}
