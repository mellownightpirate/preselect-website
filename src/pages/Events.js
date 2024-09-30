import React from 'react';
import './Events.css';
import PastEventImage1 from '../assets/event1.jpg';
import PastEventImage2 from '../assets/event2.jpg';
import UpcomingImage from '../assets/upcoming.jpg';

const Events = () => {
  return (
    <div className="events-container">
      {/* Upcoming Events Section */}
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-card">
          <img src={UpcomingImage} alt="Preselect 3" className="event-image" />
          <div className="event-details">
            <h3>Preselect 3</h3>
            <p><strong>Date & Time:</strong> Saturday, 26 October 2024, 19:00 - Sunday, 27 October 2024, 00:00</p>
            <p>Step into a world of mystery and innovation at our exclusive Halloween-themed Preselect event on October 5th, 2024, from 7pm to midnight. Join fellow tech professionals in a darkly elegant setting, where costumes meet creativity, and eerie cocktails flow. The night promises curated networking with a twist—connect with key industry players while indulging in a night of intrigue and surprise. Professional photos will capture your unforgettable evening. Apply for membership to gain access to this thrilling experience and secure your spot at future exclusive events.</p>
          </div>
        </div>
      </div>

      {/* Past Events Section */}
      <div className="past-events">
        <h2>Past Events</h2>
        {/* Event 1 */}
        <div className="event-card">
          <img src={PastEventImage1} alt="Preselect 2" className="event-image" />
          <div className="event-details">
            <h3>Preselect 2</h3>
            <p><strong>Date & Time:</strong> Saturday, 24 August 2024, 19:00 - Sunday, 25 August 2024, 00:00</p>
            <p>Join us for an exclusive cocktail party at Chiltern Firehouse's private dining room on September 14th, 2024, from 7pm to midnight. Enjoy curated introductions in a luxurious setting with a cocktail dress code, while expanding your social and professional circles. Capture the evening with professional photos, connect with like-minded innovators, and explore growth opportunities over bespoke cocktails and fine dining.</p>
          </div>
        </div>
        {/* Event 2 */}
        <div className="event-card">
          <img src={PastEventImage2} alt="Preselect 1" className="event-image" />
          <div className="event-details">
            <h3>Preselect 1</h3>
            <p><strong>Date & Time:</strong> Saturday, 3 August 2024, 18:00 - Sunday, 4 August 2024, 00:00</p>
            <p>Join us at The Little Yellow Door in Notting Hill on August 30th, 2024, for a night of exclusive networking from 6pm to midnight. Enjoy luxurious surroundings, tailored introductions, and curated connections, with professional mixologists guiding you to the right conversations. Capture the evening with professional photos and videos, and expand both your social and professional circles in a high-end atmosphere designed for growth and collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;