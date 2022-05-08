window.onload = function () {
    var url = new URLSearchParams(window.location.search);
    var page = url.get('i');
    console.log(page);
    var iframe = document.createElement("iframe");
    if (page == null) {
        window.location.href = "404.html";
    } else if (page == "d") {
        //create a iframe
        console.log("dddd");
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        iframe.src = "/discord";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
        var div = document.getElementById("content")
        div.appendChild(iframe);
        setTimeout(function () {
            window.location.href = "https://discord.gg/shJd3u8drr";
        }, 2000);
    } else if (page == "app") {
        //create a iframe
        var iframe = document.createElement("iframe");
        iframe.src = "/application";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
        setTimeout(function () {
            window.location.href = "/application/show";
        }, 2000);
    } else {
        window.location.href = "404.html";
    }
}