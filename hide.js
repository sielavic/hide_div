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





$(document).on('click','#icon-pencil_' + card_id,  function () {
            var targetId = $(this).attr('id');
            var cardId = targetId.replace(/[^0-9]/g, "");
            $('#show_quick_card_' + cardId).hide();
            $('.portlet-body').css('background', '#0009');
            $('#card_reaload_' + <?= $card->macrotasknote->parent_id ?> +' '+ '#window_' + cardId).removeClass("hide").addClass("show-modal-card");
            $('#card_reaload_' + <?= $card->macrotasknote->parent_id ?> +' '+ '#window_button_' + cardId).removeClass("hide").addClass("show-modal-card");
      });
      $(document).on('click','#close_card_' + card_id, function () {
            $('.portlet-body').css('background', '');
            var targetId = $(this).attr('id');
            var cardId = targetId.replace(/[^0-9]/g,"");
            $('#card_reaload_' + <?= $card->macrotasknote->parent_id ?> +' '+ '#window_' + cardId).removeClass("show-modal-card").addClass("hide");
            $('#card_reaload_' + <?= $card->macrotasknote->parent_id ?> +' '+ '#window_button_' + cardId).removeClass("show-modal-card").addClass("hide");
            $('#show_quick_card_' + cardId).show();
      });
