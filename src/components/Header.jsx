import styled from "styled-components";
import * as token from "../../designToken";

function Header() {
  return (
    <Container>
      <img src="/Noti.svg" alt="로고" />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  background-color: ${token.colors.main};
`;
