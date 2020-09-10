import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
    state = {
        visibleRandomChar: true,
        selectedChar: null
    }

    toggleRandomChar = () => {
            this.setState({
                visibleRandomChar: !this.state.visibleRandomChar
            })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const { visibleRandomChar } = this.state;
        const randomChar = visibleRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>

                <Button
                    color="primary"
                    onClick={this.toggleRandomChar}>
                        Toggle random char</Button>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
