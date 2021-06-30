import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-offcanvas/data.js";
import offCanvas from "./offcanvas.html.twig";

const getArgTypes = (data) => {
  return {
    id: {
      type: { name: "string" },
      description: "Id attribute of the offcanvas",
      defaultValue: data.id,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title: {
      type: { name: "object" },
      description: "Title of the offcanvas",
      defaultValue: data.title,
      table: {
        type: { summary: "object" },
        category: "Content",
      },
    },
    body: {
      type: { name: "string" },
      description: "Content of the offcanvas",
      defaultValue: data.body,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    with_close: {
      name: "close button",
      type: { name: "boolean" },
      description: "Enable the close button",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    placement: {
      type: { name: "select" },
      description: "Position of the offcanvas",
      defaultValue: data.placement,
      control: {
        type: "select",
        options: ["bottom", "top", "start", "end"],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Behaviour",
      },
    },
    with_backdrop: {
      name: "enable backdrop",
      type: { name: "boolean" },
      description: "Enable backdrop",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behaviour",
      },
    },
    with_body_scroll: {
      name: "enable body scrolling",
      type: { name: "boolean" },
      description: "Enable body scrolling",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behaviour",
      },
    },
  };
};

const offCanvasTrigger = (story, controls) => {
  const demo = story();
  return `<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Toggle offcanvas
          </button>${demo}`;
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Offcanvas",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=3405%3A0",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=3501%3A5602",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/offcanvas/",
      },
    ],
  },
};

export const Default = (args) => offCanvas(applyArgs(demoData, args));

Default.storyName = "Default";
Default.argTypes = getArgTypes(demoData);
Default.decorators = [offCanvasTrigger];