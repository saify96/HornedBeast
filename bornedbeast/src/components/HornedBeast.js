import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast';



class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }
    voting = () => {
        let count = this.state.votes;
        this.setState({ votes: count += 1 })
        this.props.setModalShow();
        this.props.setModalContent(this.props.title, this.props.image_url, this.props.description);
    }

    // Example() {
    //     const [show, setShow] = useState(false);
      
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
    // }
    render() {
        return (
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.voting} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>

                        <Button onClick={this.voting}> &hearts; {this.state.votes}</Button>
                    </Card.Body>
                </Card>
                {/* <h1>{this.props.title}</h1>
                <img src={this.props.image_url} onClick={this.voting} />
                <p>{this.props.description}</p>
                <p>&hearts; {this.state.votes}</p> */}
                <SelectedBeast />

            </div>
        )
    }
}

export default HornedBeast;
