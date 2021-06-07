import React from 'react';



class HornedBeast  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            votes: 0
        }
    }
    
    voting = () => { 
       let count = this.state.votes;
       this.setState({ votes: count += 1})
    }
    

    render(){
        return (
        <div >
            <h1>{this.props.title}</h1>
            <img src={this.props.image_url} onClick={this.voting} />
            <p>{this.props.description}</p>
            <p>{this.state.votes}</p>

        </div>   
        )
    }
}

export default HornedBeast  ;
