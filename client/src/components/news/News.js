import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Article from './Article';

class News extends Component {

  componentDidMount(){
    this.props.fetchArticles();
  }

  renderHeadlines(){
    if(this.props.articles)
      return (
        <ul className="headlines-list">
          {this.props.articles.map((article,i) => 
            <li key={i} 
              className="headline"
              onClick={()=>{this.props.showArticle(i)}}>
                <h3>{article.title}</h3>
            </li>)}
        </ul>);
  }

  render() {
    return (
      <div >
       {this.props.currentArticle !=null &&  <Article/>}
       {this.props.currentArticle ===null && this.renderHeadlines()}
      </div>
    );
  }
}

function mstp(state){
  return {
    articles:state.articles,
    currentArticle: state.currentArticle
  };
}

export default connect(mstp,actions)(News);