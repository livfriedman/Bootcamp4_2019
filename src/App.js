import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      buildings: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState( {
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState( {
      selectedBuilding: id
    })
  }

  addBuilding(building) {
    var BuildingList = this.state.buildings
    building.id = BuildingList.length + 1
    BuildingList.push(building);
    this.setState({buildings: BuildingList})
  }

  removeBuilding(id){
    var BuildingList = this.state.buildings
    let index = BuildingList.findIndex((el) => el.id ==id)
    BuildingList.splice(index, 1);
    this.setState({buildings: BuildingList})
  }

  render() {

    return (
        <div className="bg">
          <div className="row" >
            <h1>UF Directory App</h1>
          </div>

          <Search
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
          <main>
            <div className="row">
              <div className="column1">
                <div className="tableWrapper">
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                    />
                </div>
              </div>
              <div className="column2">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">
                      Building Details
                    </h3>
                <ViewBuilding
                    selectedBuilding = {this.state.selectedBuilding}
                    data={this.state.data}
                    removeBuilding={this.removeBuilding.bind(this)}
                />
              </div>
            </div>
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">
                      Add Building
                    </h3>
                    <AddBuilding addBuilding={this.addBuilding.bind(this)} />
                  </div>
                </div>
              </div>
            </div>
            <Credit />
          </main>
        </div>
    );
  }
}

export default App;