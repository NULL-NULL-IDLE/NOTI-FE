import styled from "styled-components";
import * as token from "../../designToken";

export const Container = styled.div`
  font-family: "Pretendard";
`;

export const Select = styled.select``;

export const Search = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${token.colors.main};
  color: white;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:active {
    background-color: ${(props) => (props.disabled ? token.colors.main : token.colors.hover)};
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div``;

// export const Container = styled.div``;
// export const Container = styled.div``;
