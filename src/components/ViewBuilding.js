import React from 'react';

class ViewBuilding extends React.Component {
    getBuilding(id){
        return this.props.data.find(building => {
            return building.id === id;
        });
    }
    getLongitude(longitude){
        return this.props.data.find(building => {
            return building.longitude === longitude;
        });
    }
    Building(props){
        return (
            <div class="Building">
                <div>
                    <class> Code </class>: {props.outputDetails.code}
                </div>
                <div>
                    <class> Name </class>: {props.outputDetails.name}
                </div>
                <div>
                    <class> Coordinates </class>
                    Latitude: {props.outputDetails.coordinates.latitude},
                    Longitude: {props.outputDetails.coordinates.longitude}
                </div>
                <div>
                    <class> Address </class>: {props.outputDetails.address}
                </div>
            </div>
        );
    }
    render() {
        var buildingDetails = <i>Click a building name to view more information!</i>;
        var outputDetails = this.getBuilding(this.props.buildingId);

        if(outputDetails) {
            buildingDetails = <this.Building outputDetails = {outputDetails}/>
        }

        return(
            <div>
                <p>
                    {' '}
                    {buildingDetails}
                </p>
            </div>
        );

    }
}
export default ViewBuilding;