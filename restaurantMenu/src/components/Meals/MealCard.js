import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MealCard.css";

function MealCard(props) {
  return (
    <div>
      <Card style={{ width: "29rem" }}>
        <Card.Img className="pic" src={props.mealImg} />
        <Card.Body className="col-size ">
          <Card.Title>{props.mealName}</Card.Title>
          <Card.Text className="text-muted">{props.mealDesc}</Card.Text>
          <Card.Text> £ {props.price} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MealCard;
