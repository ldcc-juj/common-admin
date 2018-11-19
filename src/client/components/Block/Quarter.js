import React, { Component, Fragment } from 'react';
import { PaginationLink, PaginationItem, Pagination, Table, Container, Row, Col, Badge, Button, Card, CardHeader, CardTitle, CardSubtitle, CardText, CardBody, CardFooter, Label, Input, FormGroup, FormFeedback, Form, ListGroup, ListGroupItem, InputGroup, InputGroupText, InputGroupAddon, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Block.css';

class Quarter extends Component {
    constructor(props){
        super(props);

        this.state = {
            blocks: [],
            prev: {
                id: "",
                name: ""
            },
            next: {
                id: "",
                name: ""
            }
        }

        this.removeQuarter = this.removeQuarter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let data = [];

        data = [
            {
                id: "@49238423",
                parent: null,
                tree: 0,
                name: '웰컴 블록',
                type: "welcome",
                parametertype: ["none", "text"]
            }, {
                id: "@58027010",
                parent: null,
                tree: 0,
                name: '폴백 블록',
                type: "fallback",
                parametertype: ["unknown"]
            }, {
                id: 0,
                parent: null,
                tree: 0,
                name: 'block_1',
                type: "custom",
                parametertype: ["text"]
            }, {
                id: 1,
                parent: null,
                tree: 0,
                name: 'block_2',
                type: "custom",
                parametertype: ["confirm"]
            }, {
                id: 2,
                parent: null,
                tree: 0,
                name: 'block_3',
                type: "custom",
                parametertype: ["button"]
            }, {
                id: 3,
                parent: null,
                tree: 0,
                name: 'block_4',
                type: "custom",
                parametertype: ["text", "button"]
            }
        ];

        if(this.props.intent_name === "new"){
            this.setState({
                blocks: data,
                prev: {
                    id: "",
                    name: ""
                },
                next: {
                    id: "",
                    name: ""
                }
            });
        }
        else{
            // db api
            this.setState({
                blocks: data,
                prev: {
                    id: 3,
                    name: 'block_2'
                },
                next: {
                    id: 2,
                    name: 'block_3'
                }
            });
        }
    }

    removeQuarter(name) {
        let nextState = {};
        nextState[name] = {
            id: "",
            name: ""
        };

        this.setState(nextState);
    }

    handleChange(e, block){
        if (e.target.value === "none") {
            if (this.state.prev.id === block.id) {
                return this.setState({
                    blocks: this.state.blocks,
                    prev: {
                        id: "",
                        name: ""
                    },
                    next: this.state.next
                });
            }
            if (this.state.next.id === block.id) {
                return this.setState({
                    blocks: this.state.blocks,
                    prev: this.state.prev,
                    next: {
                        id: "",
                        name: ""
                    }
                });
            }
        }
        let nextState = {};
        nextState[e.target.value] = {
            id: block.id,
            name: block.name
        };

        this.setState(nextState);
    }

    render(){
        const { blocks, prev, next } = this.state;
        const lastTdWidth = { width: '150px' };
        const blockList = blocks.map(
            (block, index) => (
                <Fragment>
                    { this.props.intent_name !== block.id.toString() ? 
                        <tr key={ block.id }>
                            <td>{ index + 1 }</td>
                            <td>{ block.name }</td>
                            <td>{ block.type }</td>
                            <td style={ lastTdWidth }>
                            <FormGroup>
                                <Input 
                                    type="select" 
                                    bsSize="sm" 
                                    name="select" 
                                    id="blockKind" 
                                    onChange={ () => this.handleChange(event, block) } 
                                    value={ prev.id === block.id || next.id === block.id ? prev.id === block.id ? "prev":"next" : "none" }>
                                        <option value="none">----------</option>
                                        <option value="prev">이전 블록</option>
                                        <option value="next">다음 블록</option>
                                </Input>
                            </FormGroup>
                            </td>
                        </tr> 
                        : null }
                </Fragment>
            )
        );

        return (
            <Fragment>
                <Row>
                    <Col sm="12" className="padding-none">
                        <Card body>
                            <CardTitle>블록 연결 설정</CardTitle>
                            <CardSubtitle>
                                <code>
                                    화행 입력 전후에 호출할 블록을 선택할 수 있습니다.
                                </code>
                            </CardSubtitle>
                            <CardText>
                                <p>
                                    <Row>
                                        <Col sm="12">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-arrow-right-circle icons d-block"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="이전 블록" name="prev" value = { prev.id !== "" ? prev.name : "" } />
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-arrow-left-circle icons d-block"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="다음 블록" name="next" value = { next.id !== "" ? next.name : "" } />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </p>
                                <Row>
                                    <Col xs="9">
                                        <i className="icon-menu icons"></i>&nbsp;블록 목록
                                    </Col>
                                    <Col xs="3">
                                        <InputGroup>
                                            <Input name="search" />
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <a href="#" className="transparent-a"><i className="icon-magnifier icons d-block"></i></a>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>블록명</th>
                                            <th>블록 타입</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { blockList }
                                    </tbody>
                                </Table>
                                <Row col="12">
                                    <Col xs="4"></Col>
                                    <Col xs="4">
                                    <Pagination listClassName="justify-content-center">
                                        <PaginationItem>
                                        <PaginationLink previous tag="button"></PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                        <PaginationLink next tag="button"></PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                    {/*
                                    <Row>
                                        <Col xs="6" className="text-center">
                                            <h5>이전 블록</h5>
                                            <ListGroup className="text-left">
                                                {prev.id !== ""? <ListGroupItem><Row><Col xs="9">{prev.name}</Col><Col xs="3" className="padding-none text-right"><Button color="link" size="sm" onClick={() => this.removeQuarter("prev")}><i className="icon-close icons"></i></Button></Col></Row></ListGroupItem> : <ListGroupItem>미지정</ListGroupItem>}
                                            </ListGroup>
                                        </Col>
                                        <Col xs="6" className="text-center">
                                            <h5>다음 블록</h5>
                                            <ListGroup className="text-left">
                                                {next.id !== ""? <ListGroupItem><Row><Col xs="9">{next.name}</Col><Col xs="3" className="padding-none text-right"><Button color="link" size="sm" onClick={() => this.removeQuarter("next")}><i className="icon-close icons"></i></Button></Col></Row></ListGroupItem> : <ListGroupItem>미지정</ListGroupItem>}
                                            </ListGroup>
                                        </Col>
                                    </Row>*/}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Quarter;