Parse.Cloud.job("jobPushNotification", function (request, response) {
    Parse.Push.send({
        channels: ["Your Channel name here"],
        data: {
            title: "Hello!",
            message: "Hello from the Cloud Code",
        }
        }, {
        success: function () {
            // Push was successful
            console.log("The job notification is running!");
            response.sucess("push sent");
        },
        error: function (error) {
        // Push was unsucessful
            console.log(error);
            response.sucess("error with push: " + error);
        },
        useMasterKey: true
   });
});