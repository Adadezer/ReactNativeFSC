import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text style={{ fontSize: 40}}>
          Olá Pessoal do FSC
        </Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;