url = window.location.href;
len = url.length;
id = '';
for(i=6;i>=1;i--) {
  id += url[len-i]
}
alert(id);
