import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

export default class FunctionUI extends React.Component {
   constructor() {
      super(); // required when there is a constructor
      this.state = {
         // both isResultDisplayed & isCodeDispplayed start with state of false (not being shown)
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "",
      };
   }

   toggleCodeDisplay() {
      // console.log("clicked!!!!"); //when name is clicked, toggle happens
      // state starts at false -not showing code, when clicked - it toggles down showing code, clicked again- hides code
      // setState - changes to the component state and tells React that this component and its children need to be re-rendered with the updated state
      if (this.state.isCodeDisplayed === false) {
         this.setState({ isCodeDisplayed: true });
      } else {
         this.setState({ isCodeDisplayed: false });
      }
   }

   getUserInput() {
      const props = this.props;
      // console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         const element = document.getElementById(`input-${props.name} - ${i}`);
         const value = element.value;
         const convertedValue = convertDataType(value); // convertedDataTypes is from helpers.js
         inputValues.push(convertedValue);
      }

      // console.log(inputValues); // the values that are passed are actually string
      const result = utils[props.name](...inputValues);
      console.log(result);
      this.setState({
         result: JSON.stringify(result), // JSON.stringify makes arr into a string, but shown as an arr after React renders it
         isResultDisplayed: true, // changes origninal state to true = shows result
      });
   }

   render() {
      const props = this.props;
      // console.log(utils.add(4, 5));
      // num is for the input
      const renderInputs = (num) => {
         const inputs = [];
         for (let i = 0; i < num; i++) {
            const id = `input-${props.name} - ${i}`; // template literal
            // console.log(`input-${props.name} - ${i}`); // dispalys the num of inputs for each component
            inputs.push(
               <input
                  type="text"
                  className="form-control inline-action"
                  key={id} // gives each input its own id
                  id={id}
               />
            );
         }
         return inputs;
      };

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               // pre bascially keeps the spacing as is. pre-formatted
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}

            <div className="actions float-right">
               {renderInputs(props.inputs)}

               <button
                  className="btn btn-primary inline-action"
                  onClick={() => this.getUserInput()}
                  // running a anon. fuction, thing that happens in the fuction is scoped to the original function ran in
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && ( //boolean
               // if false, it wont show anything.
               // if true, evalutes second part of && show result
               <div className="alert alert-primary">{this.state.result}</div>
            )}
         </div>
      );
   }
}
