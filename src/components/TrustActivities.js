import React from 'react';
import './TrustActivities.css';

const TrustActivities = () => {
  return (
    <div className="trust-activities-container">
      <h2 className="trust-activities-title">Trust Activities</h2>
      <div className="trust-activity-cards-container">
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/237/400/300" alt="Trust Activity 1" />
            <p className="trust-activity-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue vitae elit lacinia vehicula ut vel mi. Proin euismod, magna eget efficitur tempor, orci odio vestibulum purus, non tempor est magna eu tortor.</p>
        </div>
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/238/400/300" alt="Trust Activity 2" />
            <p className="trust-activity-card-description">Nullam in nunc vel mauris pharetra egestas eu ut augue. Suspendisse ultricies metus eu velit congue molestie. Proin porta neque ac efficitur eleifend. Nam luctus vestibulum magna, quis gravida magna. </p>
        </div>
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/239/400/300" alt="Trust Activity 3" />
            <p className="trust-activity-card-description">Vestibulum finibus erat id nibh congue tristique. Aenean at risus a magna mollis lobortis. In lobortis augue nisl, vel imperdiet libero vestibulum eu. Nulla facilisi. Mauris vitae sapien leo.</p>
        </div>
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/240/400/300" alt="Trust Activity 4" />
            <p className="trust-activity-card-description">Curabitur facilisis euismod erat a venenatis. Pellentesque blandit est at erat porttitor, nec dictum dolor iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/241/400/300" alt="Trust Activity 5" />
            <p className="trust-activity-card-description">Duis feugiat urna eu risus dictum commodo. Morbi sit amet turpis at mi auctor bibendum quis eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
        <div className="trust-activity-card">
            <img src="https://picsum.photos/id/242/400/300" alt="Trust Activity 6" />
            <p className="trust-activity-card-description">Duis feugiat urna eu risus dictum commodo. Morbi sit amet turpis at mi auctor bibendum quis eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>
    </div>
  )
}

export default TrustActivities;
