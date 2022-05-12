import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { v1 as uuid } from 'uuid'

const AddUser = () => {

    const [name, setName] = useState('')
    const { addUser } = useContext(GlobalContext)
    const navigate = useNavigate()

    const handleSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        navigate('/')
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' palaceholder="Enter Name"
                    value={name} onChange={(e)=>setName(e.target.value)}></Input>
            </FormGroup>
            <Button type='submit' className='bg-success'>Submit</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
        </Form>
    );
}

export default AddUser;
