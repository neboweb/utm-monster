jQuery.gaVariables = function() {
 
  var _utmValues = _get_cookies();
 
  var _get_cookies = function()
  {
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
      return utm_vals;
    }
   
  }

  return {
    source : _utmValues
  }
}
