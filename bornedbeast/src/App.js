import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

import 'bootstrap/dist/css/bootstrap.min.css';


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
  }

  render() {
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
