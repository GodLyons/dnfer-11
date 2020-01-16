import React from 'react'
import { Layout } from 'antd'
import moduleScss from 'style/Layout.module.scss'

const { Header, Sider, Content } = Layout
export function LayoutBox () {
  return (
    <Layout>
      <Sider className={moduleScss.siderBox}>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}
