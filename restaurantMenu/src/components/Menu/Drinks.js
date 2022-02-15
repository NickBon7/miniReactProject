import MealCard from "../Meals/MealCard";
import { Container, Row, Col } from "react-bootstrap";

function Drinks() {
  return (
    <div>
      <Container className="container-style">
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/8473117/pexels-photo-8473117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              mealName="Red Wine"
              price="5.5"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              mealName="Beer"
              price="4"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://images.pexels.com/photos/3645478/pexels-photo-3645478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              mealName="Whisky"
              price="7"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Drinks;
