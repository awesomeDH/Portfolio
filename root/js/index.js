//index.js
$(function(){
    var $wrap = $('.wrapper'),
        $preview = $wrap.find('.preview'),
        $btnAbout = $wrap.find('.about button'),
        $btnSummary = $wrap.find('.sumImg button'),
        $navList = $wrap.find('.plist nav'),
        $navSummary = $wrap.find('.summary nav'),
        flag = true;
    
    $btnSummary.on('click', function(){
        if(flag){
        $preview.stop().animate({left : '-20%'});
        flag = false;
        }else{
            $preview.stop().animate({left : 0});
            flag = true;
        }
    });
    $navList.on('click', function(){
        if(flag){
        $wrap.stop().animate({left : '-50%'});
        flag = false;
        }else{
            $wrap.stop().animate({left : '-100%'});
            flag = true;
        }
    });
    $btnAbout.on('click', function(){
        if(flag){
        $wrap.stop().animate({left : '-50%'});
        flag = false;
        }else{
            $wrap.stop().animate({left : 0});
            flag = true;
        }
    });

    var $sumGroup = $wrap.find('.sumGroup');
    $sumGroup.css({top : '-100%'}).children(':last').prependTo($sumGroup);
    $navSummary.on('click', function(){
        $sumGroup.stop().animate({top: '-200%'}, function(){
            $sumGroup.css({top : '-100%'}).children(':first').appendTo($sumGroup)
        });
    });
});