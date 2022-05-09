import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

const UserList = () => {

    const { users } = useContext(GlobalContext)

    return (
        <ListGroup className='mt-4'>
            {users.map((user) =>
                <ListGroupItem className='d-flex' key={user.id}>
                    <strong>{user.name}</strong>
                    <div className='ms-auto'>
                        <Link className='btn btn-warning me-1' to='/edit/1'>Edit</Link>
                        <Button color='danger'>Delete</Button>
                    </div>
                </ListGroupItem>
            )}
        </ListGroup>
    );
}

export default UserList;