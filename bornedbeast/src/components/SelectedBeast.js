import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import HornedBeast from './HornedBeast'





class SelectedBeast extends React.Component {

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img} alt='' style={{ width: '100%', height: '100%'}} />
                        <p>
                        {this.props.description}
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;


