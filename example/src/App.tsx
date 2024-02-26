import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { print, printTest } from 'react-native-gs300-print';

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
      <TouchableOpacity onPress={printTest} style={styles.button}>
        <Text>Print Text</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={printT} style={styles.button}>
        <Text>Print</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          print(
            [
              {
                text: 'Hello World \n second line',
                size: 32,
                align: 0,
                bold: false,
                line: 1,
                width: 80,
                height: 0,
                type: 'text',
              },
            ],
            { lineEnd: 2 }
          );
        }}
        style={styles.button}
      >
        <Text>Simple text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          print(
            [
              {
                text: 'https://www.gertec.com.br',
                size: 200,
                align: 1,
                type: 'qrcode',
              },
            ],
            { lineEnd: 2 }
          );
        }}
        style={styles.button}
      >
        <Text>QRCode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          print(
            [
              {
                text: '1234567890',
                type: 'barcode',
                symbology: 2,
                height: 100,
                width: 2,
                align: 1,
                textPosition: 0,
              },
            ],
            { lineEnd: 2 }
          );
        }}
        style={styles.button}
      >
        <Text>BarCode</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});
