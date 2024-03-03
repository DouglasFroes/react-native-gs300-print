import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  onPrint,
  printImageBase64,
  printImageFile,
  printTest,
} from 'react-native-gs300-print';
import { imageBase64 } from './img64';

export default function App() {
  function printT() {
    onPrint(
      [
        {
          value: 'HELLO WORLD',
          size: 32,
          alignment: 0,
          isUnderLine: false,
          lineSpace: 1,
          textType: 0,
          paperWidth: 80,
          type: 'text',
        },
        {
          value: 'Douglas',
          size: 32,
          alignment: 1,
          isUnderLine: true,
          lineSpace: 1,
          paperWidth: 58,
          textType: 1,
          type: 'text',
        },
        {
          value: 'A Direita',
          size: 32,
          alignment: 2,
          isUnderLine: false,
          lineSpace: 1,
          paperWidth: 80,
          textType: 3,
          type: 'text',
        },
      ],
      { lineEnd: 6 }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={printT} style={styles.button}>
          <Text>Print Texto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPrint(
              [
                {
                  type: 'text',
                  value: 'Hello World \n second line',
                  size: 32,
                  textType: 0,
                  isUnderLine: false,
                  alignment: 0,
                  paperWidth: 80,
                  lineSpace: 0,
                },
              ],
              { lineEnd: 5 }
            );
          }}
          style={styles.button}
        >
          <Text>Simple text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            onPrint(
              [
                {
                  value: '1234567890',
                  type: 'barcode',
                  symbology: 2,
                  height: 100,
                  width: 380,
                  alignment: 1,
                  textPosition: 0,
                },
              ],
              { lineEnd: 6 }
            );
          }}
          style={styles.button}
        >
          <Text>BarCode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPrint(
              [
                {
                  value: 'https://www.gertec.com.br',
                  size: 200,
                  align: 1,
                  type: 'qrcode',
                },
              ],
              { lineEnd: 6 }
            );
          }}
          style={styles.button}
        >
          <Text>QRCode</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => {
            printImageFile(
              '/storage/emulated/0/Download/1709480973108_pdf.png',
              1,
              80,
              5,
              true
            );
          }}
          style={styles.button}
        >
          <Text>Image File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            printImageBase64(imageBase64, 1, 80, 5, true);
          }}
          style={styles.button}
        >
          <Text>Image Base64</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={printTest} style={styles.button}>
        <Text>Print printTest()</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    backgroundColor: '#3f276b58',
    padding: 20,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 500,
  },
});
