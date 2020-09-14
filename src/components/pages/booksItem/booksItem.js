import React, { Component } from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';
import moment from 'moment';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return(
            <ItemDetails
                itemId={this.props.bookId}
                getData={(id) => this.gotService.getBook(id)}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released' formatData={(data) => moment(data.split('T')[0], "YYYY-MM-DD").fromNow()}/>
            </ItemDetails>
        )
    }
}
