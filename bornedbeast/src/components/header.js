import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


class Header extends React.Component {
    render() {
        return (
            <div >
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Horned Beast</Navbar.Brand>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Header;
