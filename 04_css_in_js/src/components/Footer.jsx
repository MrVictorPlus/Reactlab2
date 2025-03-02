import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #222;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return <FooterWrapper>&copy;2025</FooterWrapper>;
}

export default Footer;
