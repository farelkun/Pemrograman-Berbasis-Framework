import React, {Component} from "react";
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h1>Component dari class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Farel Putra Hidayat'/>
      </div>
    );
  }
}

export default App;