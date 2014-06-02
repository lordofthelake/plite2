var Alite = (function() {

    function response(req) {
        var isJson = req.responseText &&
            req.responseText[0] == '{' ||
            req.responseText[0] == '[';

        return {
            status: req.status,
            request: req,
            data: isJson ? JSON.parse(req.responseText) : req.responseText
        };
    }

    function ajax(httpMethod, url, params) {
        var promise = Plite();

        var req = new XMLHttpRequest();

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status >= 200 && req.status < 300) {
                    promise.resolve(response(req));
                } else {
                    promise.reject(response(req));
                }
            }
        }

        req.open(httpMethod, url);
        req.setRequestHeader('content-type', 'application/json');
        req.send(params ? JSON.stringify(params) : undefined);

        return promise;
    }

    return {
        get: function (url) {
            return ajax('GET', url);
        },

        'delete': function (url) {
            return ajax('DELETE', url);
        },

        post: function (url, data) {
            return ajax('POST', url, data);
        },

        put: function (url, data) {
            return ajax('PUT', url, data);
        }
    };
})();