import React from "react";
import Layout from "../components/Layout";
import { Tabs } from "antd";

function Notification() {
  return (
    <Layout>
      <h1 className="page-title p-1">Notifications</h1>

      <Tabs>
        <Tabs.TabPane tab="unseen">
          <h2>Unseen</h2>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Seen">
          <h2>Seen</h2>
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

export default Notification;
