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
    }

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
                <SelectedBeast />

            </div>
        )
    }
}

export default HornedBeast;
