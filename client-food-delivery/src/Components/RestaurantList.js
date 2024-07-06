import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../services/restaurantService';
import { Card, Container, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUtensils, faStar } from '@fortawesome/free-solid-svg-icons';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Restaurants</h1>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant._id}
            className="restaurant-card"
            onClick={() => alert(`Clicked on ${restaurant.name}`)}
          >
            <div className="image-container">
              <Card.Img variant="top" src={restaurant.imageUrl} alt={restaurant.name} />
            </div>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {restaurant.address}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faUtensils} /> {restaurant.cuisine}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faStar} /> <Badge bg="warning">{restaurant.rating}</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default RestaurantList;
