import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalForm from './components/AnimalForm';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        modalShow : false,
        modalTitle : '',
        modalImg : '',
        modalDescription : '' 
    }
  }

  setModalShow = (boolean) => {
    this.setState({
      modalShow: boolean,
    })
  }

  setModalContent = (title, img, description) => {
    this.setState({
      modalTitle : title,
      modalImg : img,
      modalDescription: description
    })

  chooseNumOfHorns = (event) => {
    this.setState({
      numberOfHorns: event.target.value
    })
    event.preventDefault();
  }

  render() {
    console.log(this.state.numberOfHorns);
    return (
      <div>
        <Header />
        <Main
        how={this.state.modalShow} 
        onHide={() => this.setModalShow(false)}
        setModalShow={() => this.setModalShow(true)}
        setModalContent={this.setModalContent}
        Data={Data}
        />
        <SelectedBeast show={this.state.modalShow} 
        onHide={() => this.setModalShow(false)}
        title={this.state.modalTitle}
        img={this.state.modalImg}
        description={this.state.modalDescription}
        <AnimalForm
          chooseNumOfHorns={this.chooseNumOfHorns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
