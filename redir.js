var urlmain = document.URL;
var md = document.URL.split("/")[3];
var id = document.URL.split("/")[4];
var key = '_A0A2BZ';

if (md == 'd') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://www.aliexpress.com/item/'+id+'';
} else {
  var redir = 'https://s.click.aliexpress.com/e/'+key;
}

setTimeout(
  function(){
    window.location = redir
  },
2000);
