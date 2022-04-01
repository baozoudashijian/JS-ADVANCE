$(function() {
    $('.tabs').each(function(index, element) {
        $(element).find('ol').eq(0).on('click', 'li', function(e) {
          var _index = $(this).index()
          $(e.currentTarget).addClass('active').siblings().removeClass('active')
          $(element).find('ol').eq(1).find('li').eq(_index).addClass('active').siblings().removeClass('active')
          console.log($(element).find('ol').eq(1).find('li').eq(_index).html())
        })
      })
})
