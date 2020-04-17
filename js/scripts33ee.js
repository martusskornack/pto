(function ($) {

    $(function () {
        dowykonania();

    });
    $(window).resize(function () {
        dowykonania();
        
    });
    var div;
    var div2;
    var div3;
    var div4;


    $(document).ready(function() {
        
        if ($('#block-views-block-slider-block-1 .view-slider > div').hasClass('view-content')){
        
            $("#block-views-block-slider-block-1").animate({left: (($(window).width() - $("#block-views-block-slider-block-1").width())/ 2)}, 1500);
            if (!div3)
            div3 = $("#block-views-block-slider-block-1").prepend($('<div>').addClass('zamknij-baner'));
            if (!div4)
            div4 = $("#block-views-block-slider-block-1").prepend($('<div>').addClass('wysun-baner'));
            $(".wysun-baner").hide();
            $(".zamknij-baner").show();

            $(".zamknij-baner").click(function(){
                $("#block-views-block-slider-block-1").stop().animate({left: 40 - $("#block-views-block-slider-block-1").width() }, 800);
                $(".zamknij-baner").hide();
                $(".wysun-baner").show();
            });
            $(".wysun-baner").click(function(){
                $("#block-views-block-slider-block-1").animate({left: (($(window).width() - $("#block-views-block-slider-block-1").width())/ 2)}, 1500);
                $(".zamknij-baner").show();
                $(".wysun-baner").hide();
            });

        }
        
    }); 

    
    

    function dowykonania() {
                
        
    
        
        /*************block search************/
        if (!div)
            div = $('#block-viamedica-search').prepend($('<div>').addClass('otworz'));
        if (!div2)
            div2 = $('#block-viamedica-search').prepend($('<div>').addClass('zamknij'));
        

        $("#search-block-form").hide();
        $(".zamknij").hide();

        
        var timeout;
        $("#block-viamedica-search").hover(function () {
            clearTimeout(timeout);
        }, function () {
            timeout = setTimeout(function () {
                $("#search-block-form").hide();
                $(".otworz").fadeIn('slow');
                $(".zamknij").hide();
                $("#block-viamedica-search").removeClass('otwarty');
            }, 1500);
        });
        $(".otworz").click(function(){
            $("#block-viamedica-search").addClass('otwarty');
            
            $("#search-block-form").fadeIn('slow');
            $("#edit-keys").focus();
            $(".zamknij").fadeIn('slow');
            $(".otworz").hide();
        });
        $(".zamknij").click(function(){
            $("#block-viamedica-search").removeClass('otwarty');
            $("#search-block-form").hide();
            $(".zamknij").hide();
            $(".otworz").fadeIn('slow');
        });


        if( $('body').hasClass('lang-en')) {
            $('.see-details').text('See details');
            $('#edit-submit-kalendarz-wydarzen').text('Search');
            $(".view-kalendarz-wydarzen #edit-combine").attr("placeholder", "Enter the search word");
            $('.path-ksiazki .breadcrumb li:last-child').text('Books');
            $('.path-konferencje .breadcrumb li:last-child').text('Conferences');
            $('.path-serwisy-edukacyjne .breadcrumb li:last-child').text('Educational services');
            $('.path-serwisy-towarzystw-naukowych .breadcrumb li:last-child').text('Scientific society services');
            $('.path-aplikacje .breadcrumb li:last-child').text('Mobile applications');
            $('.path-aktualnosci .breadcrumb li:last-child').text('News');
            
            
        }
        
        
        $(".newsletter .block-content").addClass('container');

        /***************************/
        $('.navbar-nav .dropdown-toggle').removeClass('dropdown-toggle').removeAttr('data-toggle').removeAttr('data-target');
        $('.menu-left .dropdown-toggle').removeClass('dropdown-toggle').removeAttr('data-toggle').removeAttr('data-target');
        
        if ($(window).width() > 768) {
             $('.navbar-nav li.expanded').hover(function(){
                 $(this).addClass('open');
             },function(){
                 $(this).removeClass('open');
             });
         
        }
         

           $(".page-node-type-boxsg .bs-region").click(function() {
               var target = $(this).find("a").prop('target');
               var url = $(this).find("a").attr("href"); 
               if(target == '_blank'){
                    window.open(url, target);
               } else {
                    window.location = url;
               }
                return false;
           });
        /*************************/
       // if( $('body').hasClass('konferencje-archiwum')) {
         //   
          //  $('.menu--menu-specjalizacje li').each(function(){
          //      var link = $(this).find("a").attr('href');
          //      var newlink = link.replace('/konferencje/',"/konferencje/konferencje-archiwum/");
          //      $(this).find("a").attr('href', newlink);
          //  })
            //var li_ = $('.menu--menu-specjalizacje li');
            //var link = $(li_).find("a").attr('href');
            //var newlink = link.replace('/konferencje',"/konferencje-archiwum");

            //$(li_).find("a").attr('href', newlink);
            
    //    }
//
    }
     

    
}(jQuery))