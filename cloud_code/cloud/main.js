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

/**
 * Cloud Code Function
 * This function is a beautiful "Hello World".
 * Response "200" is called at the end.
 * @function hello
 * @alias hello
 * @example POST /functions/hello "{}"
 */
Parse.Cloud.define('hello', function (req, res) {
  var random = Math.floor(Math.random() * 10000000);
  var hello = 'world';
  res.success({
    random: random,
    hello: hello
  });
});