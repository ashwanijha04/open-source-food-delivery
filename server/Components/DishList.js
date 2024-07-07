import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getDishesByRestaurant } from '../services/dishService';

const DishList = () => {
  const { restaurantId } = useParams();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await getDishesByRestaurant(restaurantId);
        setDishes(data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, [restaurantId]);

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Dishes</h1>
      <Row>
        {dishes.map(dish => (
          <Col key={dish._id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text>Price: ${dish.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DishList;
