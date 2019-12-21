import React from 'react';
import { Text, View, Button } from 'react-native';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>SignIn</Text>

      <Button
        title="Logout"
        onPress={() => navigation.navigate('SignIn')}
        color="red"
      />
    </View>
  );
}
