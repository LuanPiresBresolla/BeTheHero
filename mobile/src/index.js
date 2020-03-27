import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#13131a" />
      <Routes />
    </>
  );
}
