import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/components/icon.css";

const StyledButton = styled.button`
   line-height: 35px;
   background: ${({ backgroundColor }) => backgroundColor || "none"}
   border: ${({ border }) => (border ? "1px solid" : "none")}   
   border-color: ${({ borderColor }) => (borderColor ? borderColor : "black")}
   border-radius: 4px;
   color: ${({ textColor }) => textColor || "black"}
   text-decoration: ${({ underline }) => (underline ? "underline" : "none")}
   text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")}
   font-weight: ${({ bold }) => (bold ? "bold" : "normal")}
 
   :hover {
      color: ${({ textColor, textColorHover }) =>
        textColorHover || textColor || "black"}
      background: ${({ backgroundColor, backgroundColorHover }) =>
        backgroundColorHover || backgroundColor || "none"}
      border-color: ${({ borderColor, borderColorHover }) =>
        borderColorHover ? borderColorHover : borderColor || "black"}
      font-weight: ${({ bold, boldHover }) =>
        bold || boldHover ? "bold" : "normal"}
        
       i { 
        color: ${({ iconColor, iconColorHover }) =>
          iconColorHover || iconColor || "black"} 
      }
   }
   
   :focus {
    outline: none
   }
   
   i {
    color: ${({ iconColor }) => iconColor || "black"}
    margin: 0 10px;
   }
`;

const Button = ({
  textColor,
  textColorHover,
  icon,
  iconColor,
  iconColorHover,
  iconPosition = "left",
  backgroundColor,
  backgroundColorHover,
  border,
  borderColor,
  borderColorHover,
  children,
  underline,
  uppercase,
  bold,
  boldHover
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    backgroundColorHover={backgroundColorHover}
    border={border}
    borderColor={borderColor}
    borderColorHover={borderColorHover}
    underline={underline}
    uppercase={uppercase}
    bold={bold}
    boldHover={boldHover}
    textColor={textColor}
    textColorHover={textColorHover}
    iconColor={iconColor}
    iconColorHover={iconColorHover}
  >
    {icon && iconPosition === "left" ? <Icon name={icon} /> : null}
    {children}
    {icon && iconPosition === "right" ? <Icon name={icon} /> : null}
  </StyledButton>
);

export default Button;
