import React from 'react';
import { Text } from 'react-native';
import Padrao from '../../estilo/Padrao';

export default props => (   
          <Text style={Padrao.txtG}>
               {props.nome} {props.sobrenome}
          </Text>
)