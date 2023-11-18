<script setup>
import ScanbotSDK from 'scanbot-web-sdk';

const LICENSE_KEY =
"XvH8K433wmZXnSqFYjFnUiTzWg8zXR" +
"ZzPFyu1LS9RhEWPUZrgPEvDXwN8FI2" +
"ooRy8a5BSozbdB++LJNXN+CsknHLcr" +
"urCRP/GpODql4SMedo0CqZWfvymmJR" +
"D2xp3DpVb6m4ptjyHcA7f6o4NOC+QG" +
"SG2vLlplZZObOepk04U5ySExA8BLCw" +
"YGmuSsxpiA4TnX5yqZFb/BdtOBgXg8" +
"ywXNrMAJQoVWGe5FxCMxLY5yXlgTJW" +
"vp+NpVUL5cu+h5g5NLRdpshblk/w2b" +
"f7OzvWQzmL9ymIWuFTPqx1RGrDFiYG" +
"PHvCt1lA4PwzYyu8Cb6AgEhgKXfN3j" +
"BmvCvS0H85bw==\nU2NhbmJvdFNESw" +
"psb2NhbGhvc3R8c2Nhbi5taWthY28u" +
"ZGUKMTcwMDk1Njc5OQo4Mzg4NjA3Cj" +
"g=\n";

const scanbotSDK = await ScanbotSDK.initialize({licenseKey: LICENSE_KEY});

onMounted(async () => {
  let scanner;
const configuration = {
    //  The `id` of the containing HTML element where the Barcode Scanner will be initialized.
    containerId: 'qrcode',
    container: document.getElementById('qrcode'),
    onBarcodesDetected: (result) => {
        // If you're happy with the result, dispose the scanner right away
        scanner.dispose();
        // Otherwise the scanner will continue scanning and delivering results
        const format = result.barcodes[0].format // The barcode's symbology
        const text = result.barcodes[0].text 
        navigateTo( `/products/product-${text}`);
    },
}
// @ts-ignore
scanner = await scanbotSDK.createBarcodeScanner(configuration);

})


</script>

<template>
  <div>
    <div id="container"></div>
    <div id="qrcode">

    </div>
  </div>
</template>