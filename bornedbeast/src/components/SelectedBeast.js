import React from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import HornedBeast from './HornedBeast'





class SelectedBeast extends React.Component {

    render() {
        return (
            <div >

                <Modal show={this.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <img variant="primary" src={this.props.image_url} onClick={this.handleShow} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default SelectedBeast;


