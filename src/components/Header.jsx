import styled from "styled-components";
import * as token from "../../designToken";

function Header({ selectedUniv }) {
  return (
    <Container>
      <Logo src="/Noti.svg" alt="로고" />
      <Title>노티</Title>
      <School>{selectedUniv}</School>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  background-color: ${token.colors.main};
`;

const Logo = styled.img`
  width: 80px;
`;

const Title = styled.span`
  color: white;
`;
const School = styled.span``;
