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
            response.sucess("push sent");
            console.log("The job notification is running!");
        },
        error: function (error) {
        // Push was unsucessful
            response.sucess("error with push: " + error);
            console.log(error);
        },
        useMasterKey: true
   });
});