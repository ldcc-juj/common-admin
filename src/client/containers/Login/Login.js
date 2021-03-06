import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { loginRequest, getStatusRequest } from '../../actions/AuthActions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props){
      super(props);

      this.state = {
          account: "",
          password: ""
      };

      this.goRegister = this.goRegister.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // 세션 관리 부분
    /*this.props.getStatusRequest().then(_ => {

        if(this.props.valid){
            this.props.history.push('/home');
        }
    });*/
  }

  handleKeyPress(e) {
    if(e.charCode === 13){
      e.preventDefault();
      this.handleLogin();
    }
  }

  goRegister(){
    this.props.history.push('/register');
  }

  handleChange(e) {
      let nextState = {};

      nextState[e.target.name] = e.target.value;

      this.setState(nextState);
  }

  handleLogin() {
      console.log(this.state.account);
      return this.props.loginRequest(this.state.account, this.state.password).then(
          () => {

              if(this.props.status === "SUCCESS"){
                  
                  console.log(document.cookie);

                  this.props.history.push('/home');
                  return true;
              }
              else{
                  alert('로그인 실패');
                  return false;
              }
          }
      );
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="account" placeholder="Account" autoComplete="username" value={this.state.account} onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleLogin}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active onClick={() => {this.goRegister();}}>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.authentication.login.status,
      valid: state.authentication.status.valid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest: (account, password) => {
          return dispatch(loginRequest(account, password));
      },
      getStatusRequest: () => {
          return dispatch(getStatusRequest());
      }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
