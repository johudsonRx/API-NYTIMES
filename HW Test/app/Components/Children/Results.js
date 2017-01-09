// Include React
var React = require("react");

// This is the main component. It includes the banner and Results element.
var Results = React.createClass({
  // componentDidUpdate:function(){
  //   console.log("this is in results: ", this.props.address);
  // },
  // Here we render the function
  renderArticles: function(){
    return this.props.address.map(function(article, i){
        return(
            <li key={i}>
             <a href={article.web_url}> <h2>{article.headline.main} </h2></a>
            
             </li>
          )

    });
  },
  renderContainer:function(){
    return(
      <ul>
        {this.renderArticles()}
      </ul>

      )
  },
  render: function() {
      if(!this.props.address){

        return(
          <div className="article-area">

        
        <div className="post-preview">
           
            <h2 class="post-title">Articles go here...</h2>

                    </div>
        </div>


          )

      }
      return this.renderContainer();
  }
});



// Export the component back for use in other files
module.exports = Results;