import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>DUNKIN DONUT SHOP</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              nostrum magni voluptatem perferendis dolorum nisi architecto
              maxime voluptas exercitationem. Omnis, iure laudantium eveniet
              voluptas corrupti deserunt minima. Omnis dolore unde, esse magnam
              animi nesciunt velit impedit eveniet voluptates beatae libero
              laboriosam soluta dolorem odio delectus nisi suscipit quaerat
              repudiandae ratione? Cum fugit inventore porro, ipsum quas
              voluptas? Optio assumenda ut rem totam ea, sequi consequuntur eos
              magnam asperiores fugiat repudiandae dolor rerum praesentium a
              deleniti doloribus exercitationem officiis odio iure quis minus
              omnis quisquam cumque aperiam. Dolorum sed fugit voluptates vel
              quia sit molestias. Voluptas sint at maxime saepe, fuga
              exercitationem incidunt eveniet esse laudantium itaque dolores
              reiciendis nihil quia iste minus minima quas ut doloremque
             .
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/d4.jpg"
              style={{ width: "100%", height: "70%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
