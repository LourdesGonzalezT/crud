import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-5' >
            <Container>
                <Navbar.Brand href="#home">FESTIVALES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/listado">Lista de Festivales</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/crear">Crear Festival</Link>
                        </Nav.Link>
                        <NavDropdown title="Área personal" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/registro">Registro</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/iniciar-sesion">Inicio Sesión</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/registro">Salir</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




export default Navigation