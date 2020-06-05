import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

// extends component = extend (adding) to component
// consturctor method (function) : method that’s automatically called during the creation of an object from a class
// render method (function) happens after everything is rendered
export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
      this.state = {
         isFavoritesChecked: false,
         allFuncs: uiData,
         displayedFuncs: uiData,
      };
   }

   filterFuncs(e) {
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked; // favorites is checked
      console.log(isFavoritesChecked);

      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      const allFuncs = [...this.state.allFuncs];

      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true }); // isFavoritesChecked is label(key) for obj not variable
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite; // all funcitons that are filterd
         });
         // filter takes callback of func and evalutes to T/F. if T then its put into new array (filteredFuncs)
         // func = obj
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.toLocaleLowerCase().indexOf(searchInput) >= 0;
         });
         const orderedFuncs = orderBy(filteredFuncs, "name", "desc");
         this.setState({ displayedFuncs: orderedFuncs }); // displays all the filtered fuctions
      } else {
         this.setState({ isFavoritesChecked: false }); // isFavoritesChecked is label(key) for obj not variable
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderedFuncs = orderBy(filteredFuncs, "name", "desc");
         this.setState({ displayedFuncs: orderedFuncs }); // displays all functions w/o filter
      }
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
                        id="viewModeAll"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked} // ! means opp of.
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }} // e = event
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewModeAll"
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
                        <select className="form-control">
                           <option>Most recent</option>
                           <option>Oldest</option>
                           <option>A - Z</option>
                           <option>Z - A</option>
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
