import React from 'react';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ' , values);
    }

    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Col>
                <Card title = "Login" style = {{width: '50vh'}}>
                    <Form
                        name = "normal_login"
                        className = "login-form"
                        initialValues = {{
                        remember: true,
                        }}
                        onFinish = {onFinish}
                    >
                        <Form.Item
                            name = "username"
                            rules = {[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required : true,
                                    message : 'Please input your Username!'
                                }
                            ]}
                        >
                            <Input prefix = {<UserOutlined className = "site-form-item-icon" />} placeholder = "Username" />
                        </Form.Item>

                        <Form.Item
                            name = "password"
                            rules = {[
                                {
                                    required : true,
                                    message : 'Please input your password'
                                }
                            ]}
                        >
                            <Input prefix = {<LockOutlined className = "site-form-item-icon" />} type = "password" placeholder = "Password" />
                        </Form.Item>
                        
                        <Form.Item>
                            <Form.Item name = "remember" valuePropName = "checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className = "login-form-forgot" href = "#">Forgot Password</a>
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <Link to = "/signup">registor now!</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}

export default LoginForm;