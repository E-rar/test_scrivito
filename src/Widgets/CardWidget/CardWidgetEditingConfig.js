import * as Scrivito from 'scrivito';
import boxWidgetIcon from "../../assets/images/box_widget.svg";

Scrivito.provideEditingConfig('CardWidget', {
  title: 'CardWidget',
  thumbnail: `/${boxWidgetIcon}`,
  description: 'A frequently asked question.',

  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Bottom",
      values: [
        { value: "Bottom", title: "Bottom" },
        { value: "Overlay", title: "Overlay" },
      ],
    },
    headline: {
      title: 'Headline',
      description: 'The H3 Headline',
    },
    text: {
      title: "Text",
      description: "The actual source code of this text",
    }
  },



  properties: ['alignment', 'headline','text','backgroundImage'],
});

