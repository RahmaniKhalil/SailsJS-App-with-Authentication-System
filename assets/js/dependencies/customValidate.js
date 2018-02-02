$(document).ready(function () {
    $(".addUserForm").validate({
        rules : {
            email : {
                email : true
            },
            secretkey : {
                minlength: 5,
                equalTo : "#accesskey"
            }
        },
        success: function (element) {
            element.text('Right entries ! Create !').addClass('valid');
        }
    });
});