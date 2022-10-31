function Message(props){
    console.log(props)
    return (

        <p className="message">{props.comment}</p>
    )
}

export default Message