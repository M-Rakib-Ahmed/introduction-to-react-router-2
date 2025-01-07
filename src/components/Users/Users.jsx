import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData()
   
    
    return (
        <div>
           <h1>Thsi is users page</h1> 
           <h1>Users Us{users.length}</h1>
           <div className="grid">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
           </div>
        </div>
    );
};

export default Users;