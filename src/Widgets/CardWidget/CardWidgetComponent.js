import * as React from 'react';
import * as Scrivito from 'scrivito';


Scrivito.provideComponent('CardWidget', ({ widget }) =>{
    // const sectionStyle = {};
    // const backgroundImage = widget.get("backgroundImage");
    // if (backgroundImage) {
    //   backgroundColor = "dark-image";
    //   sectionStyle.background = [
    //     {
    //       image: "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
    //     },
    //     { image: backgroundImage },
    //   ];
    // }
    if(widget.get('alignment')=='Bottom'){
    return (
    
    <div className={widget.get('alignment')||'Bottom'}>

    <a className='cardLink'href="#" onclick="return false;">
        {/* //===========IMAGE============= */}
        {widget.get('alignment')=='overlay'?null:     
        <div className="imgContainer">
            <Scrivito.ImageTag
            content={widget}
            attribute="image"
            className="img"
            />
        </div>}
   

        <article>
            {/* //===========HEADLINE============= */}
                <Scrivito.ContentTag
                tag={"h3"}
                content={widget}
                attribute="headline"
                className='headline'
            />
             {/* //===========TEXT============= */}
                <Scrivito.ContentTag
                tag="div"
                className="text"
                content={widget}
                attribute="text"
                />
            {/* //===========BUTTON============= */}
            <div className="buttonContainer">
                <a href="#" className='btn btn-primary'>Click here!
                <i className="fa fa-angle-right fa-4 " aria-hidden='true'></i></a>
            </div>
            
        </article>
        </a>
     </div>
    
    )}
    else{
    {/* //===========Overlay============= */}
    return(
        <div className="overlay">
        <a className='cardLink'href="#" onclick="return false;">
        <Scrivito.ImageTag
        content={widget}
        attribute="image"
        className="overlayImg"
        
        
        />
            <article className="articleOverlay">
            {/* //===========HEADLINE============= */}
                <Scrivito.ContentTag
                tag={"h3"}
                content={widget}
                attribute="headline"
                className='headline'
            />
             {/* //===========TEXT============= */}
                <Scrivito.ContentTag
                tag="div"
                className="text"
                content={widget}
                attribute="text"
                />
            {/* //===========BUTTON============= */}
            <div className="buttonContainer">
                <a href="#" className='btn btn-primary'>Click here!
                <i className="fa fa-angle-right fa-4 " aria-hidden='true'></i></a>
            </div>
            
        </article>
        </a>
        
        </div>
    )
    }
});
