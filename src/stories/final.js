import React from 'react';
import { storiesOf } from "@storybook/react";

import Button from "../Button";

const A1 = "#242245";
const A3 = "#D3D3DA";
const B1 = "#5CB8B2";
const C1 = "#48747B";
const E = "#FFFFFF";

storiesOf("Result", module).add("Boutons d'action", () => (
  <div>
    <div>
      <Button
        backgroundColor={E}
        bold
        border
        borderColor={A3}
        borderColorHover={A1}
        icon="cog"
        iconColor={B1}
        iconPosition="right"
        textColor={A1}
        uppercase
      >
        Importer
      </Button>
    </div>
  </div>
)).add("Liens d'action secondaires", () => (
  <div>
    <div>
      <Button
        boldHover
        icon="copy"
        iconColor={B1}
        iconPosition="right"
        underline
      >
        Importer
      </Button>
    </div>
  </div>
)).add("Boutons de validation", () => (
  <div>
    <div>
      <Button
        backgroundColor={B1}
        backgroundColorHover={C1}
        bold
        icon="check"
        iconColor={E}
        textColor={E}
        iconPosition="right"
        uppercase
      >
        Importer
      </Button>
    </div>
  </div>
));
