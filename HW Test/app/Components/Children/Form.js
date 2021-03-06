// Include React 
var React = require('react');

// This is the form component. 
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  // React created
  getInitialState: function(){
    return {
      term: ""
    }
  },

  // This function will respond to the user input 
  // Custom (developer created)
  handleChange: function(event){

      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details: 
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

  // When a user submits... 
  // Custom (developer created)
  handleClick: function(){

    console.log("CLICK");
    console.log(this.state.term);
    
    // Set the parent to have the search term
    this.props.setTerm(this.state.term);

  },

  // Here we render the function
  render: function(){

    return(

     
              <div className="form-group">
              <label htmlFor="search">Search Term:</label>
              <input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
                
              
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button> 
  
             </div>


    )
  }
});

// Export the component back for use in other files
module.exports = Form;