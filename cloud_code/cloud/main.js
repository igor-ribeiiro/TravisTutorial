Parse.Cloud.job("jobNotification", function(request, response) {
    Parse.Push.send({
        success: function() {
            console.log("The job notification is running!");
        // success!
        }, error: function(err) {
            console.log(err);
        }
    });
});