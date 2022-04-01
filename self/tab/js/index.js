
class Tabs {
  constructor(selector) {
    this.selector = $(selector)
    this.init()
  }
  init() {
    this.selector.find('ol').eq(0).find('li').eq(0).addClass('active')
    this.selector.find('ol').eq(1).find('li').eq(0).addClass('active')
    this.selector.each(function(index, element) {
      $(element).find('ol').eq(0).on('click', 'li', function(e) {
        var _index = $(this).index()
        $(e.currentTarget).addClass('active').siblings().removeClass('active')
        $(element).find('ol').eq(1).find('li').eq(_index).addClass('active').siblings().removeClass('active')
      })
    })
  }
}
