import React from 'react';
import './comment.scss';
import { CommentType } from '../Content';
import markedIcon from '../../images/checkmark.svg';

interface propsTypes {
  comment: CommentType;
}

const Comment: React.FC<propsTypes> = ({ comment }) => {
  return (
    <div className={`comment ${comment.type ? 'answer-comment' : ''}`}>
      <div className="user">
        <div className="avatar">
          <img src={comment.user.avatar} alt="avatar" />
        </div>
        <article>
          <div style={{ marginBottom: '-8px' }}>
            <span className="name">{comment.user.name}</span>
            {comment.user.marked && (
              <span style={{ marginLeft: '10px' }}>
                <img src={markedIcon} alt="icon" />
              </span>
            )}
            <br />
            <div className="text-wrapper">
              <span className="text">{comment.text}</span>
            </div>
          </div>
          <article className="ansewer">
            <span>{comment.createdAt}</span>
            <h3>Ответить</h3>
          </article>
        </article>
      </div>
    </div>
  );
};

export default Comment;
