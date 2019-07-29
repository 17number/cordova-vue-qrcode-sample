<!-- Notice!! This code is not work with cordova. -->
<template>
  <div>
    <h2>Notice!! This code is not work with cordova.</h2>
    <qrcode-capture @decode="onDecode" @detect="onDetect" />
    <h2>Decoded content</h2>
    <div>{{decodedString || "nothing"}}</div>
  </div>
</template>

<script>
export default {
  name: "qrReader",
  data () {
    return {
      decodedString: ""
    }
  },
  methods: {
    onDecode(decodedString) {
      this.decodedString = decodedString;
      console.debug({decodedString: decodedString});
    },
    async onDetect(promise) {
      try {
        const {
          imageData,
          content,
          location
        } = await promise;
        console.debug({imageData: imageData, content: content, location: location});
        this.decodedString = content || "nothing";
      }
      catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
