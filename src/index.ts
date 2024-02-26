import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-gs300' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Gs300 = NativeModules.Gs300
  ? NativeModules.Gs300
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function printTest(): void {
  return Gs300.printTest();
}

type PrintData = {
  text: string;
  size: number;
  align: number;
  bold: boolean;
  line: number;
  width: number;
  height: number;
  type: 'text';
};

type PrintBarcode = {
  text: string;
  symbology: number;
  height: number;
  width: number;
  align: number;
  textPosition: number;
  type: 'barcode';
};

type PrintQRCode = {
  text: string;
  size: number;
  align: number;
  type: 'qrcode';
};

type PrintSpace = {
  line: number;
  type: 'space';
};

type PrintCut = {
  type: 'cut';
};

type PrintStart = {
  type: 'start';
};

export type IPrint =
  | PrintData
  | PrintBarcode
  | PrintQRCode
  | PrintSpace
  | PrintCut
  | PrintStart;

type PrintConfig = {
  cutEnd?: boolean;
  lineStart?: number;
  lineEnd?: number;
};

export function print(i: IPrint[], config: PrintConfig = {}): void {
  if (i.length === 0) return;

  if (config.lineStart && typeof config.lineStart === 'number') {
    i.unshift({ type: 'space', line: config.lineStart });
  }
  if (config.lineEnd && typeof config.lineEnd === 'number') {
    i.push({ type: 'space', line: config.lineEnd });
  }

  if (config.cutEnd !== false) {
    if (i[i.length - 1]?.type !== 'cut') {
      i.push({ type: 'cut' });
    }
  }

  return Gs300.print(JSON.stringify(i));
}
