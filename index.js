var change_scale = {
        "container": 500,
        "percent": 1,
        "function": function() {
            "use strict";
            if (change_scale.percent === window.devicePixelRatio) {
                var scale = document.documentElement.clientWidth;
                scale = scale / change_scale.container;
                scale = "scale(" + scale + ")";
                document.body.style.transform = scale;
            } else {
                change_scale.percent = window.devicePixelRatio;
            }
        }
    };
    (function() {
        "use strict";
        change_scale.function();
    }());
    window.addEventListener("resize", function(event) {
        "use strict";
        change_scale.function();
    });
