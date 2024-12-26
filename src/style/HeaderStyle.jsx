import styled from "styled-components";
import * as token from "../../designToken";

export const Container = styled.div`
  font-family: "Pretendard";
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  margin-bottom: 60px;
  padding: 0 12px;
  background-color: ${token.colors.main};
`;

export const Logo = styled.img`
  width: 80px;
`;

export const Title = styled.span`
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin-left: 4px;
`;

export const School = styled.span`
  font-size: 20px;
  margin-right: 16px;
  color: white;
`;

export const SchoolLogo = styled.img`
  margin-right: 16px;
`;
