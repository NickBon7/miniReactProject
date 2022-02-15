import MealCard from "../Meals/MealCard";
import { Container, Row, Col } from "react-bootstrap";

function Desserts() {
  return (
    <div>
      <Container className="container-style">
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg"
              mealName="Pancakes"
              mealDesc="Soft pancakes with honey and fruits."
              price="7"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/47013/pexels-photo-47013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              mealName="Chocolate Cheesecake"
              mealDesc="Filled with a rich and creamy chocolate."
              price="8"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Desserts;
