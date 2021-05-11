import { Layout as AntLayout } from 'antd';
import React from 'react';
import classes from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  console.log(1);

  return (
    <AntLayout className={classes.container}>
      {/* <AntLayout.Header className={classes.header}>1</AntLayout.Header> */}
      <AntLayout.Content className={classes.content}>{children}</AntLayout.Content>
    </AntLayout>
  );
};

export { Layout };
