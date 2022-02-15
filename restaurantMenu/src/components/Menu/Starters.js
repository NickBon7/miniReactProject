import MealCard from "../Meals/MealCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Style.css";

function Starters() {
  return (
    <div>
      <Container className="container-style ">
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://pinchandswirl.com/wp-content/uploads/2022/01/Wedge-Salad.jpg"
              mealName="Wedge Salad"
              mealDesc="Crunchy iceberg lettuce, crispy bacon and the quintessential wedge salad dressing: creamy-tangy blue cheese."
              price="6"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://www.simplyrecipes.com/thmb/shlrKTgpGTnShZNB5UGCgxyo7UU=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sweet-Potato-Fries-METHOD-LEAD-1-V-061fa434e5f34e0db427c171e429edca.jpg"
              mealName="Sweet Potato Fries"
              mealDesc="Sweet potato fries taste great with spices and seasonings."
              price="4"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <MealCard
              mealImg="https://recipefairy.com/wp-content/uploads/2020/01/onion-rings-burger-king.png"
              mealName="Onion Rings"
              mealDesc="Onion dipped in  bread crumbs and then deep fried."
              price="5"
            />
          </Col>
          <Col>
            <MealCard
              mealImg="https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18171435/roden-empanadillas-main.jpg"
              mealName="Tuna empanadillas"
              mealDesc="With tomatoes, peppers, and tuna."
              price="6"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Starters;
