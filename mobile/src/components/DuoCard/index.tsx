import React from 'react';
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Diego Fernandes" />
      <DuoInfo label="Nome" value="Diego Fernandes" />
      <DuoInfo label="Nome" value="Diego Fernandes" />
      <DuoInfo label="Nome" value="Diego Fernandes" colorValue="#198031" />
    </View>
  );
}
