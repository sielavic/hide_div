$(".js-attachment-list").each(function() {
            const show = 4;
            let spans = $(this).children("div");
            if (spans.length > show) {
                  spans.slice(show).hide();
                  // если нужно показать больше то добавляем код ниже который включит кнопку "показать еще"
                  const tpl = '<a href="#" class="add">Еще [num]</a>';
                  let a = tpl.replace("[num]", spans.length - show);
                  $(a).appendTo(this);
            }
      });
      $(".js-attachment-list").on('click', '.add', function(e){
            e.preventDefault();
            $(this).hide()
                    .prevAll('div')
                    .show();
      });
