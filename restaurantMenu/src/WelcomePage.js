import { Button, Card, Collapse } from "react-bootstrap";
import { useState } from "react";

function WelcomePage() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <div>
      <h2 className="display-3 mt-5 welcome-title">
        Welcome to our restaurant!
        <br />
        Enjoy your stay!
      </h2>
      <Button
        className="mb-2"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        About Us
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="aboutus">
            <Card body style={{ width: "100vw" }}>
              <p className="side-text">
                We are a small Restaurant at Glasgow City center.
                <br />
                Our goal is to have only satisfied customers!
              </p>
            </Card>
          </div>
        </Collapse>
      </div>

      <Button
        className="mb-2"
        onClick={() => setOpenContact(!openContact)}
        aria-expanded={openContact}
      >
        Contact
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={openContact} dimension="width">
          <div id="contact">
            <Card body style={{ width: "100vw" }}>
              <p className="side-text">
                Adress: 123 Street, G1ABC
                <br />
                Tel: 07123456789
                <br />
                Email: email@gmail.com
              </p>
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default WelcomePage;
