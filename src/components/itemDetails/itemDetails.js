import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './itemDetails.css';

const Field = ({item, field, label, formatData}) => {
    const data = formatData ? formatData(item[field]) : item[field];
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{data}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    state = {
        item: null
    }

    static propTypes = {
        itemId: PropTypes.number
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const {itemId, getData} = this.props;

        if (itemId === null) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select a character</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        );
    }
}
