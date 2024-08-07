import React from "react";
import "./ReviewSection.css";

export const ReviewSection = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "These perreo dance classes are amazing! The instructors are fantastic and the atmosphere is great.",
      rating: 5
    },
    {
      name: "Jane Smith",
      review:
        "I have learned so much and made great friends here. Highly recommended!",
      rating: 4
    }
    // Add more reviews here
  ];

  return (
    <section className="review-section">
      <h2>What Our Students Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
