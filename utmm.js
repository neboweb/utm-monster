jQuery.utm = function() {
  if (document.cookie && document.cookie != '')
  {
    var utm_vals = {}
    var cookies = document.cookie.split(';');
    $.each(document.cookie.split(';'), function(i, cookie)
    {
      cookie = decodeURIComponent($.trim(cookie));
      if (trim(cookie.substring(0, 7) == "__utmz="))
      {
        $.each(cookie.match(/utmc[a-z]*=\(?[0-9a-zA-Z:. ]*\)?/g), function(i, part)
        {
          var pieces = part.split('=');
          var name =pieces[0];
          var value = pieces[1];
          utm_vals[name] = value;
        })
      }
    })
  }
  return utm_vals;
}