import React from 'react';
import './App.css'
import NewComp from './Components/NewComp';

class App extends React.Component {

        costumestyles = { 
       fontStyle : "bold",
       color: "blue",
               };
        

   render() {
   return (
         <div className="App">
         <h1  style = {this.costumestyles}>Welcome to my Project Props</h1>
         <NewComp/>
         </div>
       );
            }
}

export default App;
