import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

// extends component = extend (adding) to component
// constructor = loads everything before everything is rendered
// consturctor method (function) : method that’s automatically called during the creation of an object from a class
// render method (function) happens after everything is rendered
export default class App extends React.Component {
   constructor() {
      super(); // madatory with constructor
      console.log(uiData);
      this.state = {
         // state datatype: obj
         isFavoritesChecked: false,
         allFuncs: orderBy(uiData, "order", "desc"),
         displayedFuncs: orderBy(uiData, "order", "desc"),
         orderBy: '["order", "desc"]',
      };
   }

   filterFuncs(e) {
      // isFavortieChecked datatype = boolean
      const isFavoritesChecked = document.getElementById("viewMode-favorites") // id of element to locate
         .checked; // favorites is checked
      // console.log(isFavoritesChecked);

      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      const allFuncs = [...this.state.allFuncs]; // gets the copy allFuncs array
      // console.log(searchInput); // the users input

      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true }); // isFavoritesChecked is label(key) for obj not variable
         // sets states of obj to true
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite; // all funcitons that are filterd. chekcing to see what is favorited in uiData
         });
         // filter takes callback of func and evalutes to T/F. if T then its put into new array (filteredFuncs)
         // func = obj
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.toLocaleLowerCase().indexOf(searchInput) >= 0; //filters the favorite according to what is typed in search
         });
         const orderArr = JSON.parse(this.state.orderBy);
         // JSON.parse converts JSON "string" array w/, into array
         // console.log("orderArr: ", orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr); // 2 separate string outside of array
         this.setState({ displayedFuncs: orderedFuncs }); // displays all the filtered fuctions
      } else {
         this.setState({ isFavoritesChecked: false }); // isFavoritesChecked is label(key) for obj not variable
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", ...orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr); // 2 separate string outside of array
         this.setState({ displayedFuncs: orderedFuncs }); // displays all functions w/o filter
      }
   }

   changeOrder(e) {
      // targeting the value (diff options) selected in drop down. changes the state of obj
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs(); //
      });
   }

   render() {
      const getFunctionsNum = () => {
         return uiData.length; // num of functions
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked} // ! means opp of.
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }} // e = event
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show All
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked} // not checked
                        onChange={(e) => {
                           // the event is being clicked
                           this.filterFuncs(e);
                        }} // e = event
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites{" "}
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                           onChange={(e) => {
                              this.filterFuncs(e); // keeping scope local. this = the whole class
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className="form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           <option value='["order", "asc"]'>Oldest</option>
                           <option value='["name", "asc"]'>A - Z</option>
                           <option value='["name", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
