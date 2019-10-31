import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      selectedBuilding: 0
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

  addBuilding(code, name, longitude, latitude, address){
    var Top = this.state.data[this.state.data.length - 1].id;
    newData.push({
      id: Top + 1,
      code: code,
      name: name,
      coordinates: {
        longitude: longitude,
        latitude: latitude
      },
      address: address
    });
    this.setState({
      data: this.state.data
      });
  }

  removeBuilding(id){
    var DataAdded = this.state.data.filter(building => {
      return building.id !== id;
    });
    this.setState({
      data: DataAdded
    });
  }

  render() {

    return (
        <div className="bg">
          <div className="row">
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
                  data={this.state.data}
                  buildingId={this.state.selectedBuilding}
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