import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";

storiesOf("Button", module)
  .add("basic", () => <Button onClick={action("clicked")}>Basic</Button>)
  .add("border", () => (
    <Button onClick={action("clicked")} border>
      With border
    </Button>
  ))
  .add("border color", () => (
    <Button onClick={action("clicked")} border borderColor="red">
      With border color
    </Button>
  ))
  .add("border color hover", () => (
    <Button
      onClick={action("clicked")}
      border
      borderColor="red"
      borderColorHover="green"
    >
      With border color on hover
    </Button>
  ))
  .add("underline", () => (
    <Button onClick={action("clicked")} underline>
      underline
    </Button>
  ))
  .add("background", () => (
    <Button onClick={action("clicked")} backgroundColor="red">
      background
    </Button>
  ))
  .add("background hover", () => (
    <Button
      onClick={action("clicked")}
      backgroundColor="red"
      backgroundColorHover="yellow"
    >
      backgroundHover
    </Button>
  ))
  .add("uppercase", () => (
    <Button onClick={action("clicked")} uppercase>
      uppercase
    </Button>
  ))
  .add("bold", () => (
    <Button onClick={action("clicked")} bold>
      bold
    </Button>
  ))
  .add("bold hover", () => (
    <Button onClick={action("clicked")} boldHover>
      boldHover
    </Button>
  ))
  .add("text color", () => (
    <Button onClick={action("clicked")} boldHover textColor="red">
      text color
    </Button>
  ))
  .add("text color hover", () => (
    <Button
      onClick={action("clicked")}
      boldHover
      textColor="red"
      textColorHover="blue"
    >
      text color hover
    </Button>
  ))
  .add("icon", () => (
    <Button onClick={action("clicked")} icon="undo">
      text with an icon
    </Button>
  ))
  .add("icon color ", () => (
    <Button onClick={action("clicked")} icon="undo" iconColor="red">
      icon color
    </Button>
  ))
  .add("icon right", () => (
    <Button onClick={action("clicked")} icon="undo" iconPosition="right">
      icon position
    </Button>
  ));
