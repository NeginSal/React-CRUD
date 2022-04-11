import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
const AddUser = () => {
    return (
        <Form>
            <FormGroup>
                <label>Name</label>
                <Input type='text' palaceholder="Enter Name"></Input>
            </FormGroup>
            <Button type='submit'className='bg-success '>Submit</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
           
        </Form>
    );
}

export default AddUser;
