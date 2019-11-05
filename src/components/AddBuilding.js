import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            code: '',
            name: '',
            coordinates: {
                latitude: '',
                longitude: ''
            },
            address: ''
        };
    }

    changeName(){
        this.setState({name: this.name.value})
    }
    changeCode(){
        this.setState({code: this.code.value})
    }
    changeLongit(){
        this.setState({coordinates: {latitude: this.state.coordinates.latitude, longitude: this.newlongit.value}})
    }
    changeLatit(){
        this.setState({coordinates: {latitude: this.newlatit.value, longitude: this.state.coordinates.longitude}})
    }
    changeAddr(){
        this.setState({address: this.addr.value})
    }
    Add(){
        if(this.state.name && this.state.code){
            this.props.addBuilding(this.state)
            this.setState({id: '',
            code: '',
            name: '',
            coordinates: {
                latitude: '',
                longitude: ''
            },
            address: '',})
        }
    }

    render() {
        return(
            <div>
                <input
                    placeholder="Name: "
                    value={this.state.name}
                    ref={(value) => {this.name = value}}
                    onChange={this.changeName.bind(this)}
                    type = "text"
                />
                <input
                    placeholder="Code: "
                    value={this.state.code}
                    ref={(value) => {this.code = value}}
                    onChange={this.changeCode.bind(this)}
                    type = "text"
                />
                <input
                    placeholder="Longitude: "
                    value={this.state.coordinates.longitude}
                    ref={(value) => {this.newlongit = value}}
                    onChange={this.changeLongit.bind(this)}
                    type = "text"
                />
                <input
                    placeholder="Latitude: "
                    value={this.state.coordinates.latitude}
                    ref={(value) => {this.newlatit = value}}
                    onChange={this.changeLatit.bind(this)}
                    type = "text"
                />
                <input
                    placeholder="Address: "
                    value={this.state.address}
                    ref={(value) => {this.addr = value}}
                    onChange={this.changeAddr.bind(this)}
                    type = "text"
                />
                <button onClick={this.Add.bind(this)}>Add</button>
            </div>
        );
    }
}
export default AddBuilding;