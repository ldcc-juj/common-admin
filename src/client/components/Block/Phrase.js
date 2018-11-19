import React, { Component } from 'react';
import { Container, Row, Col, Badge, Button, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter, Label, Input, FormGroup, FormFeedback, Form, ListGroup, ListGroupItem, InputGroup, InputGroupText, InputGroupAddon, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Phrase extends Component {
    constructor(props){
        super(props);

        this.state = {
            trainingPhrases: [],
            newTrainingPhrase: ''
        };

        this.handlePhrase = this.handlePhrase.bind(this);
        this.removePhrase = this.removePhrase.bind(this);
    }

    currentPhraseId = -1;

    componentDidMount() {
        if(this.props.intent_name === "new"){
            this.currentPhraseId = -1;
        }
        else{
            // db에서 화행 읽어와서 currentPhraseId와 setState 설정 
        }
    }

    removePhrase(id) {
        this.setState({
            trainingPhrases: this.state.trainingPhrases.filter(phrase => phrase.id !== id),
            newTrainingPhrase: this.state.newTrainingPhrase
        });
    }

    handlePhrase() {
        let newPhrase = {
            id: ++this.currentPhraseId,
            value: this.state.newTrainingPhrase
        }

        let newPhraseList = [
            ...this.state.trainingPhrases,
            newPhrase
        ]

        this.setState({
            trainingPhrases: newPhraseList,
            newTrainingPhrase: ''
        });
    }

    

    render(){
        const { trainingPhrases } = this.state;
        const { handleKeyPress, handleChange } = this.props;
        const trainingPhrasesList = trainingPhrases.map(
            ({ id, value }) => (
            <ListGroupItem key={ id }>
                <Col sm="9" className="display-inline padding-none">{ value }</Col>
                <Col sm="3" className="text-right display-inline padding-none">
                    <Button 
                        color="ghost-success" 
                        onClick={ () => this.removePhrase(id) }>
                        <i className="icon-trash icons"></i>
                    </Button>
                </Col>
            </ListGroupItem>)
        );

        return (
            <Row>
                <Col sm="12" className="padding-none">
                    <Card body>
                        <CardTitle>화행 입력</CardTitle>
                        <CardText>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-speech icons d-block"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input 
                                    name="newTrainingPhrase" 
                                    onChange={ () => handleChange(event, this) } 
                                    value={ this.state.newTrainingPhrase } 
                                    onKeyPress={ () => handleKeyPress(event, this.handlePhrase) }/>
                            </InputGroup>
                            <ListGroup flush>
                                { trainingPhrasesList }
                            </ListGroup>
                        </CardText>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Phrase;