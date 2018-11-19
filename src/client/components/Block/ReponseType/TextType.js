import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Input, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';

class TextType extends Component {
    render() {
        const { response, addText, removeText, handleResponseTextChange } = this.props;

        return (
            <Card>
                <CardHeader>
                    <i className="icon-pencil icons font-2xl"></i>텍스트 형식
                </CardHeader>
                <CardBody>
                    {response.text.length > 0 ? response.text.map(
                        (text, index) => (
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        { index + 1 }
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="텍스트 응답을 작성하세요." 
                                    value={ text } 
                                    onChange={ () => handleResponseTextChange(event, response.id, index) } 
                                    name={ `new_response_${index}` }/>
                                <InputGroupAddon addonType="append">
                                    <Button color="link" onClick={ () => removeText(response.id, index) }>
                                        <i className="icon-close icons"></i>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        )
                    ) : <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>1</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="텍스트 응답을 작성하세요." 
                                name="new_response_0" 
                                onChange={ () => handleResponseTextChange(event, response.id, 0) }/>
                            <InputGroupAddon addonType="append">
                                <Button color="link" onClick={ () => removeText(response.id, 0) }>
                                    <i className="icon-close icons"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    }
                </CardBody>
                <CardFooter className="text-right">
                    <Button color="primary" size="sm" onClick={ () => addText(response.id) }>
                        텍스트 추가
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

export default TextType;