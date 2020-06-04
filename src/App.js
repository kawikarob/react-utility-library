import React, { Component } from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";

// extends component = extend (adding) to component
// consturctor method (function) : method that’s automatically called during the creation of an object from a class
// render method (function) happens after everything is rendered
export default class App extends Component {
   constructor() {
      super();
      console.log(uiData);
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               {uiData.map((component) => {
                  return (
                     <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                        <p className="name">
                           <b>{component.name}</b>&nbsp;-&nbsp;{component.desc}
                        </p>
                        <pre style={{ display: "none" }}>
                           <code></code>
                        </pre>
                        <div className="actions float-right">
                           <input
                              type="text"
                              className="form-control inline-action"
                           />
                           <input
                              type="text"
                              className="form-control inline-action"
                           />
                           <button className="btn btn-primary inline-action">
                              Run
                           </button>
                        </div>
                        <div className="clearfix mb-3"></div>
                        <div
                           className="alert alert-primary"
                           style={{ display: "none" }}
                        ></div>
                        <div
                           className="alert alert-danger"
                           style={{ display: "none" }}
                        ></div>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
