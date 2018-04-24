(function () {
    
    var card = $('#card'),
        faces = $('.face'),
        msg1 = $('#msg1'),
        msg2 = $('#msg2'),
        msg3 = $('#msg3'),
        msg4 = $('#msg4');
    
    msg1.show();
    
    var tl = new TimelineMax({repeat:2})
            
        .add( TweenLite.to(card, .25, {rotationX:'+=90', delay: 2}) )
        .add(function () {faces.hide(); msg2.show(); })
        .add( TweenLite.to(card, .25, {rotationX:'+=90'}) )
                
        .add( TweenLite.to(card, .25, {rotationX:'+=90', delay: 2}) )
        .add(function () {faces.hide(); msg3.show(); })
        .add( TweenLite.to(card, .25, {rotationX:'+=90'}) )
                
        .add( TweenLite.to(card, .25, {rotationX:'+=90', delay: 2}) )
        .add(function () {faces.hide(); msg4.show(); })
        .add( TweenLite.to(card, .25, {rotationX:'+=90'}) )

        .add( TweenLite.to(card, .25, {rotationX:'+=90', delay: 2}) )
        .add(function () {faces.hide(); msg1.show(); })
        .add( TweenLite.to(card, .25, {rotationX:'+=90'}) )




}());