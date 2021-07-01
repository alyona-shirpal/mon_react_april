import {Link, Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import PostDetail from "../posts/PostDetail";

export default function User({item}) {
    return (
        <div>
            {item.id} {item.name} - <Link to={'/users/' + item.id }> details</Link>
            {/*{item.id} {item.name} - <Link to={*/}
            {/*    {pathname: '/users/' + item.id, state: item}*/}
            {/*}> details</Link>*/}

        </div>
)
}
