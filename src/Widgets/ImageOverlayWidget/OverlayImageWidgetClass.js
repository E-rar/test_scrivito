import * as Scrivito from "scrivito";

const OverlayImageWidget = Scrivito.provideWidgetClass("OverlayImageWidget", {
  attributes: {
    image: "reference",
    overlayImage: "reference",
    alignment: ["enum", { values: ["topLeft", "topRight", "bottomLeft", "bottomRight"] }],
    width: ["enum", { values: ["15", "25", "35", "45"] }],
    rounded: ["enum", { values: ["5", "10", "15", "50"] }],
    offset: ["enum", { values: ["5", "10", "15", "20"] }],
  },
});

export default OverlayImageWidget;
