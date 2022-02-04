import * as Scrivito from 'scrivito';


Scrivito.provideWidgetClass('CardWidget', {
    attributes: {
      image: ["reference", { only: "Image" }],
      headline: "string",
      text: "html",
      button:'string',
      alignment: ["enum", { values: ["Bottom", "overlay",] }],
      backgroundImage: ["reference", { only: "Image" }],
    },
    
    extractTextAttributes: ["headline"],
  });

  