<template>
  <div>
    <button @click="prepare">QR Scan</button>
    <p v-if="!isScanning">{{decodedString || ""}}</p>
  </div>
</template>

<script>
export default {
  name: "qrReaderCordova",
  data () {
    return {
      decodedString: "",
      isScanning: false
    };
  },
  methods: {
    prepare() {
      QRScanner.prepare(this.onPrepared);
    },
    onPrepared(err, status) {
      console.debug({err: err, status: status});
      if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
      }
      if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.
        this.onAutorized();
      } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
      } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
      }
    },
    onAutorized() {
      this.decodedString = "";
      this.isScanning = true;

      QRScanner.scan(this.displayContents);
      QRScanner.show(this.onShow);
    },
    displayContents(err, text) {
      console.debug({err: err, text: text});
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
      } else {
        // The scan completed, display the contents of the QR code:
        this.decodedString = text;
        QRScanner.pausePreview(this.onPausePreview);
      }
    },
    onShow(status) {
      console.debug({onShow: "", status: status});
    },
    onPausePreview(status) {
      console.debug({pausePreview: "", status: status});
      alert(this.decodedString);
      QRScanner.hide((status) => {console.debug({hide: "", status: status})});
      QRScanner.cancelScan((status) => {console.debug({cancelScan: "", status: status})});
      QRScanner.destroy(this.onDestroy);
    },
    onDestroy(status) {
      console.debug({status: status});
      this.isScanning = false;
    }
  }
};
</script>
