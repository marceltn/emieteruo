export const utils = {
  data () {
    return {
      isLoading: true,
      greenLight: '#d2f9be',
      greenDark: '#1e2a20'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.isLoading = false
    })
  }
}
