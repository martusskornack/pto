(function ($) {
    Drupal.behaviors.date_picker = {
        attach: function (context, settings) {
            var $view = $('.view-kalendarz-wydarzen');
            if($('.view-kalendarz-wydarzen .views-exposed-form').length == 0) return;
            var dayNames = ["Nd", "Po", "Wt", "Śr", "Czw", "Pt", "So"];
            var monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

            var $view = $('.view-kalendarz-wydarzen');
            var $form = $view.find('.views-exposed-form');
            if ($form.data('date_picker_processed')) {
                return;
            }
            $form.data('date_picker_processed', true)
            var datepicker_div = $('<div class="form-item calendar-item col-sm-6"><div id="daterange-picker"></div><div id="dp1"></div></div>');
            $view.find('.view-filters').before(datepicker_div);
            $view.find('.view-filters').addClass('col-sm-6');


            var $date_range_picker_element = $('#daterange-picker');
            var $search_input = $form.find('[name="combine"]');
            var $date_start_input = $form.find('[name="field_termin_value"]');
            var $date_end_input = $form.find('[name="field_termin_end_value"]');
            var $submit_button = $form.find('[type="submit"]');
            var $clear_button = $('<button class="button button-clear btn btn-default btn-grey">Wyczyść</button>');
            var $clear_button_en = $('<button class="button button-clear btn btn-default btn-grey">Clear</button>');
            
            if( $('body').hasClass('lang-en')) {
                $submit_button.after($clear_button_en);
            }
            else{
                $submit_button.after($clear_button);
            }

            $date_start_input.attr('autocomplete', 'off');
            $date_end_input.attr('autocomplete', 'off');

            $clear_button.click(function (event) {
                event.preventDefault();
                $date_start_input.val('');
                $date_end_input.val('');
                $search_input.val('');

                $submit_button.click();
            })

            var do_search = function () {
                //$submit_button.click();
            };

            var init_daterange_picker = function () {
                // Get date or now
                var get_date = function ($element) {
                    if ($element.val()) {
                        return moment($element.val(), "DD-MM-YYYY");
                    } else {
                        return moment();
                    }
                }

                var termin_start = get_date($date_start_input);
                var termin_end = get_date($date_end_input);

                if (termin_end.isBefore(termin_start)) {
                    termin_end = null;
                    $date_end_input.val('');
                }


                var locale = {};
                // If page language is polish then load locale
                if ($('html').attr('lang') == 'pl') {
                    locale = {
                        daysOfWeek: dayNames,
                        monthNames: monthNames,
                        firstDay: 1
                    };
                }

                // Init daterangepicker
                var daterangepicker = $date_range_picker_element.daterangepicker({
                    locale: locale,
                    parentEl: "#dp1",
                    autoApply: true,
                    format: 'DD-MM-YYYY',
                    opens: 'right',
                    startDate: termin_start,
                    endDate: termin_end,
                    showCustomRangeLabel: false
                }, function (start, end) {


                    $date_start_input.val(start.format('DD-MM-YYYY'));
                    // Check same date
                    end.set('hour', 0).set('minute', 0).set('second', 0);
                    if (start.isSame(end)) {
                        $date_end_input.val('');
                    } else {
                        $date_end_input.val(end.format('DD-MM-YYYY'));
                    }
                    do_search();
                });

                // Show daterangepicker
                daterangepicker.data('daterangepicker').show();
            }


            var init_datepicker = function ($element) {
                $element.datepicker({
                    dateFormat: 'dd-mm-yy',
                    dayNames: dayNames,
                    monthNames: monthNames,
                    onSelect: function (dateString, element) {
                        $date_range_picker_element.data('daterangepicker').remove();
                        init_daterange_picker();
                        do_search();
                    }
                })
            }

            init_daterange_picker();
            init_datepicker($date_start_input);
            init_datepicker($date_end_input);
        }
    };
}(jQuery))