import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavbarBrand,
    Container
} from 'reactstrap'

const Heading = () => {
    return (
        <Navbar color='dark' dark>
            <Container>
                <Nav>
                    <NavbarBrand href='/'>My Team</NavbarBrand>
                    <Link className='btn btn-primary ms-auto' to='/add'>Add User</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Heading;