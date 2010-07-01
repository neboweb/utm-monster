//  Returns an object of the utm cookie values
//
//  Usage Exmaples:
//  source      : $.utm.umtcsr
//  campaign    : $.utm.utmccn
//  medium      : $.utm.utmcmd
//  keyword     : $.utm.utmctr
//  ad_content  : $.utm.utmcct
// 

jQuery.utm = function() {
  if (document.cookie && document.cookie != '')
  {
    var utm_vals = {}
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++)
    {
      var cookie = decodeURIComponent($.trim(cookies[i]));
      if (cookie.substring(0, 7) == "__utmz=")
      {
        $.each(cookie.match(/utmc[a-z]*=\(?[a-z]*\)?/g), function(i, part)
        {
          var pieces = part.split('=');
          var name =pieces[0];
          var value = pieces[1];
          utm_vals[name] = value;
        })
      }
    }
  }
  return utm_vals;
}