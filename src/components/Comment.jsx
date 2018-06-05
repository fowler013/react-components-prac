//this is a preactice run with the video//
import React from 'react'; // I will always type in import React from react
import UserInfo from './UserInfo';

const Comment = (props) => {
    return (
        <div className="Comment">
           <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {/*{formatDate(props.date)}*/}
            </div>
        </div>
    );
}

export default Comment;