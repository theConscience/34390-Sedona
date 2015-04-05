document.addEventListener('DOMContentLoaded', function(){


// SVG calendar
var SVGcalendar = document.querySelectorAll('.svg-calendar');

for (i = 0; i < SVGcalendar.length; ++i) {
SVGcalendar[i].innerHTML = '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="19.875" height="21.916" viewBox="0 0 19.875 21.916"><path d="M17.04 2h-2.08V0h-2v2H6.916V0h-2v2h-2.08C1.275 2 0 3.275 0 4.835V19.08c0 1.56 1.275 2.836 2.835 2.836H17.04c1.56 0 2.835-1.275 2.835-2.835V4.837C19.875 3.276 18.6 2 17.04 2zm.835 17.08c0 .454-.383.836-.835.836H2.835c-.452 0-.835-.382-.835-.835V4.837C2 4.382 2.383 4 2.835 4H17.04c.452 0 .835.382.835.835V19.08z"/><path d="M4.917 6.958h2v2h-2zm8.043 0h2v2h-2zm-4.022 0h2v2h-2zm-4.02 4h2v2h-2zm8.042 0h2v2h-2zm-4.022 0h2v2h-2zm-4.02 3.984h2v2h-2zm8.042 0h2v2h-2zm-4.022 0h2v2h-2z"/></svg>  ';
}


// SVG plus
var SVGplus = document.querySelectorAll('.svg-plus');

for (i = 0; i < SVGplus.length; ++i) {
SVGplus[i].innerHTML = '<?xml version="1.0" encoding="utf-8"?>  <!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">  <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    width="9.917px" height="9.917px" viewBox="0 0 9.917 9.917" enable-background="new 0 0 9.917 9.917" xml:space="preserve">  <polygon points="9.917,4 5.917,4 5.917,0 4,0 4,4 0,4 0,5.917 4,5.917 4,9.917 5.917,9.917 5.917,5.917 9.917,5.917 "/>  </svg>  ';
}


// SVG minus
var SVGminus = document.querySelectorAll('.svg-minus');

for (i = 0; i < SVGminus.length; ++i) {
SVGminus[i].innerHTML = '<?xml version="1.0" encoding="utf-8"?>  <!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">  <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    width="9.917px" height="1.917px" viewBox="0 0 9.917 1.917" enable-background="new 0 0 9.917 1.917" xml:space="preserve">  <rect width="9.917" height="1.917"/>  </svg>  ';
}


});