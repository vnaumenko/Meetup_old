import React, { Suspense, useEffect, useRef } from 'react';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import { Canvas } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';

import styles from './HomeScreen.module.css';
import { Stars } from '../Stars';

export default function HomeScreen() {
  useEffect(() => {
    softShadows();
  }, []);

  return (
    <Row className={styles.screen}>
      <Col span={7} offset={1}>
        <Space direction="vertical">
          <div className={styles.heading}>
            <Typography.Title>Название митапа</Typography.Title>
            <Typography.Text strong>Тут краткий интересный текст</Typography.Text>
          </div>
          <Space>
            <Button type="primary" size="large">
              Программа
            </Button>
            <Button type="link">F.A.Q</Button>
          </Space>
        </Space>
      </Col>
      <Col span={16} style={{ height: '100%', position: 'relative' }}>
        {/* <div style={{ position: 'absolute', left: 80, top: 150 }}> */}
        {/*  <Image src="/bg.svg" /> */}
        {/* </div> */}
        <Canvas shadows camera={{ fov: 60, position: [-5, 2, 10] }}>
          <fog attach="fog" args={['white', 0, 40]} />
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </Col>
    </Row>
  );
}
