import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
const Main = () => {
    return (

    <div>

  <div className="article">
    <h1 align="center"><b><u>UseRef</u></b></h1>
    <h2 align="left">Introduction</h2>

    <p>React provides a bunch of hooks that allow you to add features to your components. These hooks make it <br/><br/>easier to encapsulate stateful behavior and side effects in your functional components in order to increase <br/><br/>readability and to use less code.</p><br/>
<br/>
<h2 align="left">What is the UseRef hook?</h2>

  <p align="left">The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue <br/>e.g. useRef(initialValue).<br/> The object can persist a value for a full lifetime of the component. </p>
  <h2 align="left">syntax:</h2>
  
    <p align="left" >const refContainer = useRef(initialValue);</p>
    <div className="code">
    <h1 align="left">code:</h1>
    <img src={image1} alt="useref" align="center"></img>
    <p align="left">Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
    <p align="left">useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable<br/> value around similar to how you’d use instance fields in classes.</p>
<p align="left">Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

</p>
<p>Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

</p>
</div>
  </div>
  
    <Sidebar />
    </div>
    )
};

export default Main;
