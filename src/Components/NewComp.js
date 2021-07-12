import React , {Component} from 'react'
import bellA from '../BellA.png'
import bellB from '../BellB.png'

class NewComp extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
               message: "Subscribe",
               sub: "subscribe",
               imageURL : bellB
        };
    }
       mystyles = { 
              color: "red",
                   };
   ButtonChange  = () => { 
       this.setState ({
           message: 'Hit the bell icon to never miss on update',
           sub: 'Subscribed'
       });

   };

   imageChange = () => {
       this.setState ({
        imageURL : bellA, 
        message : "ThankYou! Happy Learning"
       })
   }
 render() {
    return (
   <div className="App">
    {/* <img src={bell}/>  */}
   <h3 style = {this.mystyles}>{this.state.message}</h3> 
   <button onClick= {this.ButtonChange}>{this.state.sub}</button>
   < img 
     style = {{width: "30px", height : "30px"}} 
     src={this.state.imageURL}
     onClick={this.imageChange}
     alt='' />
   </div>
           ) 
 }

}
export default NewComp;