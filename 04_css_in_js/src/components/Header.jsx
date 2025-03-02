import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Mini-Blog</h1>
    </HeaderWrapper>
  );
}

export default Header;
