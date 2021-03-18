import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Select, Row, Col, Checkbox, Button, Card } from 'antd';
import { UserOutlined, LockOutlined, AimOutlined, PhoneFilled } from '@ant-design/icons';


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  
  return (
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      <Col>
        <Card title = "Signup" style = {{width: '100vh'}}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
        {...tailFormItemLayout}
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix = {<UserOutlined className = "site-form-item-icon" />} placeholder = "Email-id" />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input prefix = {<LockOutlined className = "site-form-item-icon" />} type = "password" placeholder = "Password" />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input prefix = {<LockOutlined className = "site-form-item-icon" />} type = "password" placeholder = "Confirm Password" />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
            },
          ]}
        >
          <Input prefix = {<UserOutlined className = "site-form-item-icon" />} placeholder = "Username" />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="residence"
          rules={[
            {
              required: true,
              message: 'Please select your residence!',
            },
          ]}
        >
          <Input prefix = {<AimOutlined className = "site-form-item-icon" />} placeholder = "Address" />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            prefix = {<PhoneFilled className = "site-form-item-icon" />}
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            placeholder = "Phone Number"
          />
        </Form.Item>

        <Form.Item
        {...tailFormItemLayout}
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register 
          </Button>
           <br /> <br />Or already registered user <Link to = "/">login</Link>
        </Form.Item>
      </Form>
    </Card>
    </Col>
    </Row>
  );
};

export default Signup;