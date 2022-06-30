import { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import axios from "axios";

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {products : ""};
    }

    componentDidMount() {
      axios.get("http://localhost:3001/products").then(res => {
			  this.setState({ products: res.data });
		  });
    }

    render(){
      return(
        <div>
          <Header/>
          <hr/>
          <Monitor products={this.state.products}/>
          <Footer/>
        </div>    
      );
    }
}

export default Home;
