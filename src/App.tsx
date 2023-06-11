import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

export default function App() {
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
                <Form.Text className="text-muted">
                  We'll never share your email address, trust us!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" variant="secondary">
            Login
          </Button>
        </Form>
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/300/200" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of React Bootstrap cards</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Button</Button>
      </Container>
    </>
  );
}
