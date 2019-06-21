<template>
  <div
    class="proto-image"
    :style="{ width, height }"
  />
</template>
<script>
export default {
  name: 'ProtoImage',
  props: {
    width: {
      type: String,
      default: '48px'
    },
    height: {
      type: String,
      default: '48px'
    }
  }
}
</script>
<style lang="scss" scoped>
.proto-image {
  border: 4px solid black;
  background:
    linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 2px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 2px),
      rgba(0,0,0,0) 100%),
    linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 2px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 2px),
      rgba(0,0,0,0) 100%);
}
</style>
