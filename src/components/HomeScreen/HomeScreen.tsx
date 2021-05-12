import React from 'react';
import { Button, Col, Layout, Content, Row, Space, Typography } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import styles from './HomeScreen.module.css';
import { Canvas } from './Canvas';

type Props = {
  fullpageApi: any;
}

const HomeScreen: React.FC<Props> = (props) => {
  const { fullpageApi } = props;
  const inlineStyle: {[p: string]: React.CSSProperties} = {
    title: {
      fontSize: 48
    },
    lead: {
      fontSize: 18
    }
  }

  return (
    <Layout className={'layout'}>
      <Layout.Content className={'content'}>
        <div className={styles.bg}/>
        <Row className={'row'}>
          <Col span={8}>
            <Space direction={'vertical'} size={'large'}>
              <Space direction={'vertical'}>
                <Typography.Title style={inlineStyle.title}>Life IT Meetup'21</Typography.Title>
                <Typography.Text style={inlineStyle.lead}>Классный митап с классными спикерами на классные темы.</Typography.Text>
              </Space>
              <Space size={'large'}>
                <Button type="primary" shape="round" icon={<ArrowDownOutlined />} size={'large'} onClick={() => fullpageApi.moveSectionDown()}>
                  Программа
                </Button>
                <Button type="link">F.A.Q</Button>
              </Space>
            </Space>
          </Col>
          <Col span={16} style={{ height: '100%', position: 'relative' }}>
            <Canvas disabledAnimation/>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export { HomeScreen }