<template>
  <cube-toolbar :actions="actions" @click="clickHandler"></cube-toolbar>
</template>

<script>
export default {
  data() {
    return {
      money: 10,
      actions: [
        {
          text: '完成订单',
          action: 'showText'
        },
        {
          text: '打车来接',
          checked: false,
          type: 'checkbox'
        },
        {
          text: '一口价<span class="orange">10元</span>',
          action: 'moreMoney'
        }
      ]
    }
  },
  methods: {
    showText(item) {
      this.$createToast({
        type: 'correct',
        txt: 'clicked ' + item.text,
        time: 1000
      }).show()
    },
    moreMoney(item) {
      this.money += 10
      item.text = '一口价<span class="orange">' + this.money + '元</span>'
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
}
</script>

