import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 15px auto;

  svg {
    width: 25px;
    height: 23px
  }
`;

export const HeaderTitle = styled.p`
  font-size: 25px;
`;

export const Total = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 8px;
`;