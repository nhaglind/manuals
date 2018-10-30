import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/data.json')
    .then(response => response.json())
    .then(cars => {
      this.setState({ cars })
    })
  }

  filter(e){
    this.setState({filter: e.target.value})
  }

  filterCar(e){
    this.setState({filterCar: e.target.value})
  }

  filterMake(e){
    this.setState({filterMake: e.target.value})
  }

  filterModel(e){
    this.setState({filterModel: e.target.value})
  }

  filterYear(e){
    this.setState({filterYear: e.target.value})
  }

  render() {
    let cars = this.state.cars;
    if(this.state.filterMake){
      cars = cars.filter( car =>
      car.make
      .includes(this.state.filterMake))
    }
    if(this.state.filterModel){
      cars = cars.filter( car =>
      car.model
      .includes(this.state.filterModel))
    }
    if(this.state.filterYear){
      cars = cars.filter( car =>
      car.year
      .includes(this.state.filterYear))
    }

    return (
      <div className="search-bar">
        <select onChange={this.filterMake.bind(this)} value={this.state.filterMake}>
          <option value="">All Makes</option>
          <option value="Honda">Honda</option>
          <option value="Tesla">Tesla</option>
          <option value="Acura">Acura</option>
          <option value="Toyota">Toyota</option>
        </select>
        <select onChange={this.filterModel.bind(this)} value={this.state.filterModel}>
          <option value="">All Models</option>
          <option value="Honda">Honda</option>
          <option value="Tesla">Tesla</option>
          <option value="Acura">Acura</option>
          <option value="Toyota">Toyota</option>
        </select>
        <select onChange={this.filterYear.bind(this)} value={this.state.filterModel}>
          <option value="">All Years</option>
          <option value="Honda">2018</option>
          <option value="Tesla">2017</option>
          <option value="Acura">2016</option>
          <option value="Toyota">2015</option>
          <option value="Toyota">2014</option>
          <option value="Toyota">2013</option>
          <option value="Toyota">2012</option>
          <option value="Toyota">2011</option>
        </select>
      <div className="container">
        {cars.map(car => {
          return <React.Fragment key={car.id}>
            <div className="grid-item">
              <span className="grid-item-make">{car.make}</span>
              <span className="grid-item-model">{car.model}</span>
              <span className="grid-item-year">{car.year}</span>
              <span className="grid-item-type">{car.type}</span>
              <span className="grid-item-link"><a href="#">Reference Manual</a></span>
            </div>
          </React.Fragment>
        })}
      </div>
      </div>
    );
  }
}

 
export default Grid;


