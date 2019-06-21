<template>
  <div class="proto-text" :style="{ width, height: actualHeight, fontSize: `${fontSize}px` }">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida interdum semper. Fusce mollis ut felis a rutrum. Etiam auctor mi vitae sagittis imperdiet. Praesent placerat justo ligula, sed malesuada ligula ullamcorper non. Fusce scelerisque molestie maximus. Etiam at posuere nisl, at fringilla urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tristique nunc at elit pellentesque, non pharetra est pretium. Morbi semper finibus nisl, at tempor ante scelerisque ut. Nulla in magna vitae felis laoreet cursus. Sed aliquet elementum aliquam. Morbi pharetra nec quam vel suscipit. Nunc a elit nunc. Vestibulum sodales elit orci, maximus volutpat ligula mattis sed.

    Fusce sollicitudin quam iaculis, tincidunt arcu a, rhoncus elit. Curabitur consequat semper lacus. Morbi sit amet erat mattis, dignissim est quis, vehicula erat. Proin imperdiet feugiat mauris, pharetra tincidunt turpis viverra eu. Aliquam quam ipsum, pretium vitae luctus eu, suscipit in risus. Vestibulum venenatis nulla nec elit lobortis, eu iaculis metus dapibus. Sed at arcu augue.

    Etiam non mattis enim, ac semper augue. Vestibulum cursus pretium vulputate. Sed sit amet imperdiet sapien. In volutpat sagittis nibh a imperdiet. Fusce diam leo, ultrices sit amet tellus eu, dignissim egestas mi. Duis viverra leo non mollis scelerisque. Proin pellentesque facilisis mattis. Integer sagittis, massa vel sodales eleifend, nulla quam commodo nunc, eget mollis lacus turpis vel est. Pellentesque faucibus diam mi, at feugiat tellus viverra at. Phasellus venenatis id ante vel cursus.

    Sed ac diam sed sem pharetra porttitor dignissim sed magna. Ut auctor leo in auctor dictum. Nam metus sapien, fermentum in lacinia ut, pretium id nisi. Nam eget imperdiet arcu, eu porta lacus. Vestibulum est metus, viverra in erat sit amet, gravida vulputate lorem. Quisque non mi urna. Aliquam bibendum mattis velit, eget tempus lorem aliquet eu. Donec finibus pulvinar dolor vitae dapibus. Pellentesque malesuada eleifend mattis. Suspendisse sed pharetra nisi. Vestibulum consequat tellus sit amet lectus pretium, sit amet sagittis mi facilisis. Mauris tempor elementum massa ut lacinia. Suspendisse nec nulla tincidunt, tempor lorem et, rhoncus velit. Nullam ut malesuada tortor, id fringilla odio. Curabitur porttitor nibh at justo scelerisque, et varius mi eleifend. Donec at neque arcu.

    Suspendisse ornare erat at lacus ultricies, vitae auctor tellus pharetra. Quisque id aliquam tellus. Quisque et lacus sit amet magna vestibulum tincidunt ut ut massa. Vestibulum fermentum, velit non condimentum euismod, est metus fringilla sem, non vulputate ante magna nec neque. Nunc eu consectetur nulla. Integer varius, tortor a pulvinar malesuada, est felis pharetra erat, at blandit leo quam eget ipsum. Sed facilisis ligula sagittis viverra ultricies. Fusce vestibulum tortor sit amet dolor iaculis lobortis. Mauris tristique lorem quis massa lacinia, quis aliquet quam fermentum. Nunc vitae nisi sed nulla varius tincidunt. Nullam at venenatis massa.
  </div>
</template>
<script>
export default {
  name: 'ProtoText',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: '14px'
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  computed: {
    actualHeight () {
      switch (typeof this.height) {
        case 'number':
          return `${this.height * this.fontSize}px`
        default:
          return this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../src/assets/font.css');

.proto-text {
  overflow: hidden;
  line-height: 1;
  text-align: left;
  font-family: 'mumblegrumbleibb', Helvetica, Arial, sans-serif;
}
</style>
