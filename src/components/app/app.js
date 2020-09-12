import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';

export default class App extends Component {
    state = {
        visibleRandomChar: true,
    }

    toggleRandomChar = () => {
            this.setState({
                visibleRandomChar: !this.state.visibleRandomChar
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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};
