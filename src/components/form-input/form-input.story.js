import { withDesign } from "storybook-addon-designs";
import { getFormControls } from "@oe/story-utils";
import demoData from "@oe/data-form-input/data";
import formInput from "./form-input.html.twig";

const getArgTypes = (data, type) => {
  return {
    type: {
      type: { name: "select" },
      description: "Type of the text input",
      defaultValue: type,
      control: {
        type: "select",
        options: [
          "text",
          "email",
          "password",
          "radio",
          "checkbox",
          "file",
          "color",
          "date",
          "datetime-local",
          "search",
          "range",
          "tel",
          "time",
          "url",
          "week",
          "number",
          "month",
          "hidden",
        ],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
        category: "Content",
      },
    },
    ...getFormControls(data, type),
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

// Stories
export default {
  title: "Components/Forms/Form input",
  decorators: [withDesign],
};

export const FormInput = (args) => formInput(applyArgs(demoData, args));

FormInput.storyName = "text field";
FormInput.argTypes = getArgTypes(
  { ...demoData, placeholder: "text here" },
  "text"
);
FormInput.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
  },
};

export const Checkbox = (args) =>
  formInput(applyArgs({ ...demoData, type: "checkbox" }, args));

Checkbox.storyName = "checkbox";
Checkbox.argTypes = getArgTypes(demoData, "checkbox");
Checkbox.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
  },
};

export const Switch = (args) =>
  formInput(applyArgs({ ...demoData, type: "checkbox", switch: true }, args));

Switch.storyName = "switch";
Switch.argTypes = getArgTypes(demoData, "switch");
Switch.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
  },
};

export const Radio = (args) =>
  formInput(applyArgs({ ...demoData, type: "radio" }, args));

Radio.storyName = "radio";
Radio.argTypes = getArgTypes(demoData, "radio");
Radio.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
  },
};

export const File = (args) =>
  formInput(applyArgs({ ...demoData, type: "file" }, args));

File.storyName = "file";
File.argTypes = getArgTypes(demoData, "file");
File.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=53%3A24",
  },
};