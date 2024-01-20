function increaseWidth() {
    var contentDiv = document.getElementById('sider');
    contentDiv.style.left = '9px';
    contentDiv.style.width = '13rem'; // You can set ay desired width here
  }

  function decreaseWidth() {
    var contentDiv = document.getElementById('sider');
    
    contentDiv.style.width = '0rem';
    contentDiv.style.left = '-23px'; // You can set ay desired width here
  }