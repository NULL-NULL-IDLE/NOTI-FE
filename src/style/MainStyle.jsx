import styled from "styled-components";
import * as token from "../../designToken";

export const Container = styled.div`
  font-family: "Pretendard";
  margin: 0 52px;
`;

export const Select = styled.select`
  margin: 0 12px 20px 0;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${token.colors.fontColor};
`;

export const Search = styled.button`
  border: none;
  margin-left: 32px;
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

export const ContentContainer = styled.div``;

export const QuestionWrapper = styled.div`
  margin-bottom: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: ${token.colors.fontColor};
`;

export const Arrow = styled.span`
  transform: ${(props) => (props.expanded ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

export const Answer = styled.div`
  padding: 16px;
  border-top: 1px solid #d9d9d9;
  font-size: 16px;
  color: #444;
`;

// export const Container = styled.div``;
// export const Container = styled.div``;
