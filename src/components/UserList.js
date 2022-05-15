import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

const UserList = () => {

    const { users, removeUser } = useContext(GlobalContext)

    return (
        <ListGroup className='mt-4'>
            {users.length > 0 ? (
            <>
                {users.map((user) =>
                    <ListGroupItem className='d-flex' key={user.id}>
                        <strong>{user.name}</strong>
                        <div className='ms-auto'>
                            <Link className='btn btn-warning me-1'
                                to={`/edit/${user.id}`}>Edit</Link>
                            <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
                        </div>
                    </ListGroupItem>
                )}
            </>
            )
             : (<h4 className='text-center'>No User</h4>)}

        </ListGroup>
    );
}

export default UserList;