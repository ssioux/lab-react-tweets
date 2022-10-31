import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"
import Message from "./Message"; 
import Actions from "./Actions"

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

   
      </div>

      <Actions />

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
