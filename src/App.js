import React from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>
          <div className="wrapper">
            <Header />
            <div className="content">
              <Route path="/zidgmundfreid.PizzaReact-Redux.github.io/" render={() => <Home items={this.props.items} />} exact />
              <Route path="/cart" component={Cart} exact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
