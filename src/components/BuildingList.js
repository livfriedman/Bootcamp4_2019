import React from 'react';
import RemoveBuilding from "./RemoveBuilding";

class BuildingList extends React.Component {
    selectedUpdate(id) {
        this.props.selectedUpdate(id);
    }

    render() {
        //console.log('This is my directory file', this.props.data);
        const { data, filterText } = this.props;

        const buildingList = data
            .filter(directory => {
                return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })

            .map(directory => {
            return (
                <tr key={directory.id}>
                    <button onClick = {() => this.selectedUpdate(directory.id)}>
                    <td>{directory.code} </td>
                    <td> {directory.name} </td>
                        <td>
                            <RemoveBuilding
                                id = {directory.id}
                                removeBuilding = {this.props.removeBuilding.bind(this)}/>
                        </td>
                    </button>
                </tr>
            );
        });

        return (
            <div>
                {buildingList}
            </div>
        );

    }
}
export default BuildingList;