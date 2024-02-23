import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { print } from 'react-native-gs300';

export default function App() {
  function printT() {
    print(
      [
        {
          text: 'Hello World',
          size: 32,
          align: 0,
          bold: false,
          line: 1,
          width: 80,
          height: 0,
          type: 'text',
        },
        {
          text: 'Douglas',
          size: 32,
          align: 0,
          bold: false,
          line: 1,
          width: 80,
          height: 0,
          type: 'text',
        },
        {
          text: 'teste',
          size: 32,
          align: 0,
          bold: true,
          line: 1,
          width: 80,
          height: 0,
          type: 'text',
        },
      ],
      { lineEnd: 2 }
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Print" onPress={printT} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
