import React from "react";
import Layout from "../components/Layout";
import { Form, Row, Col, Input } from "antd";

function ApplyDoctor() {
  return (
    <Layout>
      <div className="applydoctor p-4">
        <h1 className="page-title">Apply Doctor</h1>
        <Form layout="vertical">
          <h1 className="card-title mt-3">Personal information:</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="First Name"
                name="firstname"
                rules={[{ required: true }]}
              >
                <Input placeholder="First name" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Last Name"
                name="lastname"
                rules={[{ required: true }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Last Name"
                name="lastname"
                rules={[{ required: true }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Phone Number"
                name="phone-number"
                rules={[{ required: true }]}
              >
                <Input placeholder="Phone NO" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                label="Website"
                name="wevsite"
                rules={[{ required: false }]}
              >
                <Input placeholder="Website" />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="Address"
                name="address"
                rules={[{ required: true }]}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Layout>
  );
}

export default ApplyDoctor;
