import * as React from "react";
import * as Scrivito from "scrivito";


const Overlay = () => {
    const sectionClassNames = [];
  const sectionStyle = {};

  let backgroundColor = widget.get("backgroundColor") || "white";

  const backgroundImage = widget.get("backgroundImage");
  if (backgroundImage) {
    backgroundColor = "dark-image";
    sectionStyle.background = [
      {
        image: "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
      },
      { image: backgroundImage },
    ];
  }


  return (
    <Scrivito.BackgroundImageTag
      tag="section"
      className={'overlay'}
      style={sectionStyle}
    >
   
    </Scrivito.BackgroundImageTag>
  );

}
 
export default Overlay;