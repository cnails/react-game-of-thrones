import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import BooksItem from '../pages/booksItem';
import HousesPage from '../pages/housesPage';
import styled from 'styled-components';

const DivApp = styled.div`
    min-height: 1000px;
`
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
            <Router>
                <DivApp> 
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
                        <Route path='/characters/' component={CharacterPage}/>
                        <Route path='/houses/' component={HousesPage}/>
                        <Route path='/books/' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <BooksItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </DivApp>
            </Router>
        );
    }
};
