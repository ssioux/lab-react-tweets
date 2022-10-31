import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"
import Message from "./Message"; 

function Tweet(props) {
const {timestamp, message}= props.tweet
 
  return (
    <div className="tweet">
      {/* <img
        src={image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image={props.tweet.user.image}/>



      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span> */}

          <User userData={props.tweet.user}/>

          {/* <span className="timestamp">Nov 30, 2020</span> */}
          <Timestamp time={timestamp}/>
        </div>

      <Message comment={message}/>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
