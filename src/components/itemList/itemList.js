import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    // gotService = new gotService();

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        // this.gotService.getAllCharacters()
        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, ind) => {
            const label = this.props.renderItem(item);
            return (
                <li
                    className="list-group-item"
                    key={ind}
                    onClick={() => this.props.onItemSelected(ind + 1)}>
                        {label}
                </li>
            )
        });
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}                
            </ul>
        );
    }
}