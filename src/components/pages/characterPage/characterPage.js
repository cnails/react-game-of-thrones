import React, { Component } from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 200
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={(item) => item.name}/>
        )
        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={(id) => this.gotService.getCharacter(id)}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
