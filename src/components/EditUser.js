import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import React, { useContext, useState, useEffect } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


const EditUser = () => {

    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: ""
    })
    const { users, editUser } = useContext(GlobalContext)
    const navigate = useNavigate()

    const { currentUserId } = useParams();

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => String(user.id) === userId);
        if (selectedUser) {
            setSelectedUser(selectedUser);
        }
    }, [currentUserId, users]);
    // const { currentUserId } = useParams();
    // useEffect(() => {
    //     const userId = currentUserId;
    //     const selectedUser = users.find(user => user.id === parseInt(userId));
    //     setSelectedUser(selectedUser);
    // }, [currentUserId, users])

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        navigate('/');
    };

    // const handleOnChange = (userKey, newValue) => {
    //     setSelectedUser({ ...selectedUser, [userKey]: newValue })
    // };
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser(selectedUser => ({
            ...selectedUser,
            [name]: value
        }));
    };


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                {/* <Input type='text' palaceholder="Enter Name"
                    value={selectedUser.name} name="name"
                    onChange={(e) => handleOnChange("name", e.target.value)}
                ></Input> */}
                <Input
                    type='text'
                    palaceholder="Enter Name"
                    value={selectedUser?.name ?? ""}
                    name="name"
                    onChange={handleOnChange}
                />
            </FormGroup>
            <Button type='submit' className='bg-success '>Edit Name</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>

        </Form>
    );
}

export default EditUser;
