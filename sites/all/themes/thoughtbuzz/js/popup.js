/**
 * Created by bineks on 18.06.14.
 */
(function ($) {
  $(document).ready(function(){

     $('a.test_link').click(function(){
             $(this).parent('.field-content').parent().next('.views-field').children('.thoughtBuzz_desc').attr('id','thoughtBuzz_display')
             $('div#thoughtBuzz_display').append("<input type='button' id='thoughtBuzz_close' value='close'>");

         $("#thoughtBuzz_close").click(function(){
             $('#thoughtBuzz_close').remove();
             $('div#thoughtBuzz_display').removeAttr('id');
           });
         });

     $('.thoughtBuzz_team').click(function(){
           $(this).parent('.views-field').nextAll('.views-field').children('.thoughtBuzz_about').attr('id','thoughtBuzz_about')
           $('div#thoughtBuzz_about').append("<input type='button' id='thoughtBuzz_close' value='close'>");

         $("#thoughtBuzz_close").click(function(){
             $('#thoughtBuzz_close').remove();
             $('div#thoughtBuzz_about').removeAttr('id');
          });
        });

      $('#views_slideshow_cycle_teaser_section_buzz_slider-block img').css('width',$('html,body').width());
      $('#views_slideshow_cycle_teaser_section_buzz_slider-block').css('width',$('html,body').width());

     });
}) (jQuery);
