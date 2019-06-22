<template>
  <button
    class="proto-button"
    :class="[
      type ? 'proto-button--' + type : '',
      size ? 'proto-button--' + size : ''
    ]"
    :style="{ width, height, fontSize }"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
<script>
export default {
  name: 'ProtoButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'text', 'icon', 'image'].indexOf(val) > -1
      }
    },
    size: {
      type: String,
      default: '',
      validator (val) {
        return ['smaller', 'larger'].indexOf(val) > -1
      }
    },
    width: {
      type: String,
      default: '36px'
    },
    height: {
      type: String,
      default: '36px'
    },
    fontSize: {
      type: String,
      default: '1.2em'
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../src/assets/font.css');
.proto-button {
  font-family: 'Nanum Pen Script', cursive;
  font-size: 18px;
  background: none;
  &.proto-button--smaller {
    font-size: 1em;
  }
  &.proto-button--larger {
    font-size: 1.5em;
  }
  &.proto-button--default, &.proto-button--icon {
    border: 4px solid black;
    box-shadow: 2px 2px #aaaaaa;
    &:hover, &:active {
      background: lightblue;
    }
  }
  &.proto-button--icon {
    width: 36px;
    height: 36px;
    padding: 0px;
    &.proto-button--smaller {
      width: 28px;
      height: 28px;
    }
    &.proto-button--larger {
      width: 40px;
      height: 40px;
    }
  }
  &.proto-button--text {
    border: none;
    box-shadow: none;
    color: royalblue;
    text-decoration: underline;
    &:hover, &:active {
      color: lightblue;
    }
  }
  &.proto-button--image {
    width: unset;
    height: unset;
    padding: 0;
    box-shadow: 2px 2px #aaaaaa;
    &:hover, &:active {
      background: lightblue;
    }
  }
}
</style>
