import * as Scrivito from "scrivito";
import imageWidgetIcon from "../../assets/images/image_widget.svg";

Scrivito.provideEditingConfig("OverlayImageWidget", {
  title: "Overlay Image",
  thumbnail: imageWidgetIcon,
  attributes: {
    alignment: {
      title: "Overlay alignment",
      description: "Default: Top right",
      values: [
        { value: "topLeft", title: "Top left" },
        { value: "topRight", title: "Top right" },
        { value: "bottomLeft", title: "Bottom left" },
        { value: "bottomRight", title: "Bottom right" },
      ],
    },
    width: {
      title: "Overlay width",
      description: "Default: 25 %",
      values: [
        { value: "15", title: "15 %" },
        { value: "25", title: "25 %" },
        { value: "35", title: "35 %" },
        { value: "45", title: "45 %" },
      ],
    },
    borderRadius: {
      title: "Overlay border radius",
      description: "Default: 0",
      values: [
        { value: "5", title: "5 %" },
        { value: "10", title: "10 %" },
        { value: "15", title: "15 %" },
        { value: "50", title: "50 %" },
      ],
    },
    offset: {
      title: "Overlay border offset",
      description: "Default: off",
      values: [
        { value: "5", title: "5 %" },
        { value: "10", title: "10 %" },
        { value: "15", title: "15 %" },
        { value: "20", title: "20 %" },
      ],
    },
  },
  properties: ["alignment", "width", "borderRadius", "offset"],
  initialContent: {
    alignment: "topRight",
    width: "25",
  },
});