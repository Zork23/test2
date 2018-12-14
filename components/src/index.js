import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
    <CommentDetail author="Sam" timeAgo="Today at 4:43pm" commentContent="Great blog post, dude!" />
    <CommentDetail author="Alex" timeAgo="Today at 2:45pm" commentContent="Interesting and informative read." />
    <CommentDetail author="Jane" timeAgo="Yesterday at 5:43am" commentContent="9/11 was an inside job." />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
