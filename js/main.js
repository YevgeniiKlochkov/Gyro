;(function (){
    "use strict"


    const el = document.getElementsByClassName('content_text');

    for (let i=0; i<el.length; i++) {
        el[i].addEventListener('click', function (){
            if (el[i].classList.contains('content_text__full')) {
                el[i].classList.remove('content_text__full');
            } else {
                el[i].classList.add('content_text__full');
            }
        });
    }

})();