import demoData from "@openeuropa/bcl-landing-page/data.js";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";
import footer from "@openeuropa/bcl-data-footer/data.js";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

const dataLanding = {
  content_type: "landing-page",
  header: headerDataUCPKN,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Compositions/Landing Page",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/N0nAH22yz5vfDL6yx8yemr/UCPKN-Mockup?node-id=1024%3A125486",
      },
    ],
  },
};

export const Default = () => landingPage(correctPaths(dataLanding));
