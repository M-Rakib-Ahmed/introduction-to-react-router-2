

const Post = ({post}) => {
    const {id, title, body}= post;
    const userSyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userSyle}>
          
          <h4>Post of Id:{id}</h4> 
          <p>{title}</p>
        </div>
    );
};

export default Post;