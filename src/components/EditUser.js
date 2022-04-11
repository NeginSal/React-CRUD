import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const EditUser = () => {
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' palaceholder="Enter Name"></Input>
            </FormGroup>
            <Button type='submit' className='bg-success '>Edit Name</Button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>

        </Form>
    );
}

export default EditUser;
