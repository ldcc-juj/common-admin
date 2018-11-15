import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, CardTitle, Alert } from 'reactstrap';

class Setting extends Component {
    constructor(props){
        super(props);

        this.state = {
            botName: '',
            botDesc: '',
            apiUrl: ''
        }
    }

    componentDidMount(){
        this.setState({
            botName: 'bot_1',
            botDesc: '첫번째 봇',
            apiUrl: 'https://www.lotte.net'
        });
    }

    render(){
        const { botName, botDesc, apiUrl } = this.state;
        return(
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card body>
                            <CardTitle>기본 설정</CardTitle>
                            <Label for="bot-name">이름</Label>
                            <Input type="text" name="botName" id="bot-name" value={ botName }/>
                            <Label for="bot-desc">설명</Label>
                            <Input type="text" name="botDesc" id="bot-desc" value={ botDesc }/>
                            <Label for="bot-api-url">API URL (변경 불가)</Label>
                            <Input type="text" name="apiUrl" id="bot-api-url" disabled value={ apiUrl }/>
                            <Col sm="12" className="text-right padding-none">
                                <Button color="primary">저장</Button>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card body>
                            <CardTitle>봇 삭제</CardTitle>
                            <Alert color="danger">
                                <i className="icon-info icons"></i>&nbsp;&nbsp;한 번 삭제하면 다시 복구할 수 없습니다! 그래도 삭제하시겠습니까?
                            </Alert>
                            <Col xs="4" className="padding-none"><Button color="danger">영구 삭제</Button></Col>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Setting;