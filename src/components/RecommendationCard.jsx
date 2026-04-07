export function RecommendationCard({
  recommendation,
  onClick,
  isSelected = false,
}) {
  return (
    <article
      className={`recommendation-card ${isSelected ? "is-selected" : ""}`}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img
        className="recommendation-image"
        src={recommendation.image}
        alt={recommendation.name}
      />
      <div className="recommendation-body">
        <div className="recommendation-meta-row">
          <span className="pill">{recommendation.city}</span>
          <span className="meta-category">{formatCategory(recommendation.category)}</span>
        </div>

        <h2>{recommendation.name}</h2>
        <p className="recommendation-address">{recommendation.address}</p>

        <div className="recommendation-note">
          <p className="note-label">Recommendation</p>
          <p>{recommendation.note}</p>
        </div>
      </div>
    </article>
  );
}

function formatCategory(category) {
  switch (category) {
    case "coffee":
      return "Coffee Shop";
    case "shopping":
      return "Shopping";
    case "other":
      return "Other";
    default:
      return "Restaurant";
  }
}
