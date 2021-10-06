import demoData from "@openeuropa/bcl-search-form/dataSearch";
import demoDataSubmittable from "@openeuropa/bcl-search-form/dataSearchSubmit";
import searchForm from "@openeuropa/bcl-search-form/search-form.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    pill: data.pill || false,
  };
};

const getArgTypes = () => {
  return {
    pill: {
      type: { name: "boolean" },
      description: "Display input as a pill",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

export default {
  title: "Compositions/Search Form",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3973%3A35941",
      },
    ],
  },
};

const resetAttrs = (data, args) => {
  if (!args.pill) {
    data.attributes.removeClass("rounded");
  }
};

const correctPaths = (data) => {
  if (data.submit) {
    data.submit.icon.path = defaultSprite;
  }

  if (data.icon) {
    data.icon.path = defaultSprite;
  }

  return data;
};

const applyArgs = (data, args) => {
  resetAttrs(data, args);
  correctPaths(data);
  return Object.assign(data, args);
};

export const Default = (args) => searchForm(applyArgs(demoData, args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Submittable = (args) =>
  searchForm(applyArgs(demoDataSubmittable, args));
Submittable.args = getArgs(demoDataSubmittable);
Submittable.argTypes = getArgTypes(demoDataSubmittable);
