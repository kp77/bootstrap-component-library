import dataDefault from "@openeuropa/bcl-timeline/dataDefault.js";
import timeline from "@openeuropa/bcl-timeline/timeline.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    from: data.hide.from,
    to: data.hide.to,
  };
};

const getArgTypes = (data) => {
  return {
    from: {
      type: { name: "number" },
      name: "hide from",
      description: "Item index after which to start hiding timeline items",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Display",
      },
    },
    to: {
      type: { name: "number" },
      name: "hide to",
      description: "Item index after which to resume displaying timeline items",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Display",
      },
    },
    title: {
      type: { name: "string" },
      description: "Title of the block",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title_tag: {
      type: { name: "string" },
      description: "Tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h4" },
        category: "Content",
      },
    },
  };
};

const applyArgs = (data, args) => {
  if (data.icons_path) {
    data.icons_path = defaultSprite;
  }
  data.hide.from = args.from;
  data.hide.to = args.to;

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Timeline",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6017%3A70268",
      },
    ],
  },
};

export const Default = (args) => timeline(applyArgs(dataDefault, args));

Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);