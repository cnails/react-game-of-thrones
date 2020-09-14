import React, { Component } from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 3
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {
        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={(item) => item.name}/>
        )
        const housesDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={(id) => this.gotService.getHouse(id)}>
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='coatOfArms' label='Coat of arms'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={housesDetails}/>
        )
    }
}
