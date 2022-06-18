import "./MealDetailsList.css";

function MealDetailsListItem({ label, value }) {
  return (
    <li className="e-two-meals-details-list-item">
      <strong className="e-two-meals-details-list-item__label">
        {label}:&emsp;
      </strong>
      {value}
    </li>
  );
}

export default function MealDetailsList({
  strArea,
  strCategory,
  strTags,
  strYoutube,
}) {
  return (
    <ul className="e-two-meal-details-list">
      <MealDetailsListItem label={`Country`} value={strArea} />
      <MealDetailsListItem label={`Category`} value={strCategory} />
      <MealDetailsListItem label={`Tags`} value={strTags} />  
    </ul>
  );
}
