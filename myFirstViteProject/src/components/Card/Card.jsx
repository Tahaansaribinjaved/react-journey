// 🔹 3. Creating Reusable Card Component (Mini Project)
// Build a simple Card component that takes props like title, description, and image.

// ✅ Sample:

// jsx
// Copy
// Edit
// function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.image} />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }
// 💪 Use this as a practice challenge:a

// Show 3 different cards with different props.

//! Example: Product, Profile, or Movie cards.


export default function CardContainer(props) {
  return (
    <div className={`card ${props.className}`}>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}