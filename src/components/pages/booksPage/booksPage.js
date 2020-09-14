import React, { Component } from 'react';
import ItemList from '../../itemList';
import gotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {

    gotService = new gotService();

    render() {
        return (
            <ItemList
                onItemSelected={(itemId) => {
                    console.log(itemId);
                    this.props.history.push(`${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => item.name}/>
        )
    }
}

export default withRouter(BooksPage);
