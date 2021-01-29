/*
script by zackmark29
https://github.com/zackmark29
v1.0 | 01/23/2021
*/
(function () {
    var c = playerObject.package.engine.movieinfo.current.vidl;
    c.forEach(function (i) {
        if (i.m3u8) {
        var m3u8Content = i.m3u8;
        var t = GetTitle("intl-play-title");
        var s = FormatBytes(i.vsize);
        //var d = FormatTime(i.duration);
        var r = `${i.realArea.width}x${i.realArea.height}`;
        var f = `${t}.${r}.H264.[${s}].m3u8`;

        SaveToFile(m3u8Content, f);
        }
    });

    function SaveToFile(text, filename) {
        var b = new Blob([text], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.download = filename;
        a.style.display = "none";
        a.click();
    }

    function GetTitle(className) {
        return (document.getElementsByClassName(className)[0].innerText.replaceAll(" ", "."));
    }

    function FormatBytes(size) {
        var e = (Math.log(size) / Math.log(1e3)) | 0;
        return (+(size / Math.pow(1e3, e)).toFixed(2) + ("kMGTPEZY"[e - 1] || "") + "B" );
    }

    function FormatTime(sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    }
})();