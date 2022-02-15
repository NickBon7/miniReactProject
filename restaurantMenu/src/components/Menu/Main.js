import MealCard from "../Meals/MealCard";
import { Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <div>
      <Container className="container-style">
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://food-images.files.bbci.co.uk/food/recipes/rib-eye_steak_with_61963_16x9.jpg"
              mealName="Ribeye Steak"
              mealDesc=" Medium rare ribeye with baby potatoes."
              price="18"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              mealName="Double Burger"
              mealDesc="Double Burger with cheese, bacon, lettuce, tomato, sauce and side fries."
              price="12"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              mealName="Lasagna"
              mealDesc="With basil, sausage, ground beef and three types of cheese."
              price="13.5"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://justcook.butcherbox.com/wp-content/uploads/2021/04/chicken-thighs-bone-in-recipe-500x375.jpg"
              mealName="Roasted Chicken"
              mealDesc="Juicy chicken with oven roasted potatoes and spicys."
              price="12"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
