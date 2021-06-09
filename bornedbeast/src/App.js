import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimalForm from './components/AnimalForm';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfHorns: '',
    }
  }

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
        <AnimalForm
          chooseNumOfHorns={this.chooseNumOfHorns}
        />
        <Main
          numberOfHorns={this.state.numberOfHorns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
