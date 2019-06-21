<template>
  <span class="proto-badge">
    <slot />
    <sup
      class="proto-badge__content"
    />
  </span>
</template>

<script>
export default {
  name: 'ProtoBadge',
}
</script>
<style lang="scss" scoped>
.proto-badge {
  position: relative;
  display: inline-block;
  .proto-badge__content {
    content: '';
    position: absolute;
    top: -4px;
    right: -4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: tomato;
  }
}
</style>
