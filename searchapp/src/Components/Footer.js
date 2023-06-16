import { Container } from "react-bootstrap";
import "../style.css";

const Footer = () => {
  return (
    <div>
      <footer className="fixed-bottom mt-auto py-3 text-center" style={{backgroundColor:'#E8E8E8'}}>
        <Container>
          <p>© 2023 Search App. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
