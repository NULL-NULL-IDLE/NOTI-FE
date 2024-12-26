import styled from "styled-components";
import * as token from "../../designToken";

function Header({ selectedUniv }) {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Logo src="/Noti.svg" alt="로고" />
        <Title>노티</Title>
      </div>
      <School>{selectedUniv}</School>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  font-family: "Pretendard";
  display: flex;
  width: 100vw;
  align-items: center;
  padding: 0 12px;
  background-color: ${token.colors.main};
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const Title = styled.span`
  color: white;
`;
const School = styled.span`
  padding: 16px;
  color: white;
`;
