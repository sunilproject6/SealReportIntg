
path = Report;

sealServer = ReportUrl;
render = false;
viewGUID = ''
outputGUID = ''

$("#bid").click(function () {

    function executeReport() {

        $.post(sealServer + "/SWILogin", {
            user: "userName", // The user name
            password: "password" // The password
        })
            .done(function (data) {
                var f = $('<form method="post" target="reportIframe" />').appendTo('body');
                f.attr('action', sealServer + "/SWExecuteReport");
                f.append($('<input>').attr('name', 'path').attr('value', path));  //the report path,  e.g. "/Samples/01-Simple list (Products).srex"
                f.children('input').attr('type', 'hidden');
                f.submit();
            });
        return false;

    }

    executeReport("/" + path);
});




