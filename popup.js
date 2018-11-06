;(function() {
  var walker = function(dom, func) {
    [].slice.call(document.querySelectorAll(dom), 0).forEach(function(ele, index) {
      func(ele, index)
    });
  };

  walker('a', (ele, index) => {
    const href = ele.getAttribute('href')
    if (href === null) {
      return
    }
    if (href.startsWith('javascript:;')) {
      return
    }
    if (href.startsWith('#')) {
      return
    }
    ele.setAttribute('target', '_blank')
  })
})()