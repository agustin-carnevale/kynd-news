import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Article extends Component{

    render(){
        const i = this.props.currentArticle;
        return (
        <div className="article">
            <h2>{this.props.articles[i].title}</h2>
            <p>{this.props.articles[i].body}</p>

            <button onClick={()=>{this.props.showTitles()}}>Go Back</button>
        </div>);
    }
}   

function mstp(state){
    return {
      articles:state.articles,
      currentArticle: state.currentArticle
    };
}
  
export default connect(mstp,actions)(Article);

