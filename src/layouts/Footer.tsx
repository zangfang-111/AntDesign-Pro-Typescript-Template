import React, { Fragment } from 'react'
import { Layout, Icon } from 'antd'
import { GlobalFooter } from 'ant-design-pro'

const { Footer } = Layout
export default function FooterView () {
  return <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro Ant Design',
          title: 'Pro Ant Design',
          href: 'https://pro.ant.design',
          blankTarget: true
        }, {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true
        }
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type='copyright' /> {new Date().getFullYear().toString()} ...
        </Fragment>
      }
  />
  </Footer>
}
