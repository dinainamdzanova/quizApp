import styled from "styled-components";

const Div = styled.div`
  min-width: 350px;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: column;
  min-height: 600px;
  background-color: #fff;
  border-radius: 24px;
  padding: 20px;
`;
const Space = styled.div`
  margin-left: ${(props) => props.x}px;
  margin-right: ${(props) => props.x}px;
  margin-top: ${(props) => props.y}px;
  display: inline-block;
  margin-bottom: ${(props) => props.y}px;
`;
const Text = styled.p`
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
const Img = styled.img`
  width: 84px;
  height: 54px;
  background: url(image.png);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
`;
const Button = styled.button`
  text-align: left;
  padding: 0 20px;
  min-width: 400px;
  min-height: 56px;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  color: rgba(96, 102, 208, 0.8);
  transition: 0.4s ease;
  font-size: 18px;
  &:hover {
    border-color: #f9a826;
    background: #f9a826;
    color: #fff;
    cursor: pointer;
    transition: 0.4s ease;
  }
`;

export { Div, Text, Space, Button, Img };
