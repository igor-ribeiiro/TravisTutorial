
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!KWEFBBKEKBEFKBKRBJ");
});


Parse.Cloud.job("pushtest", function(request, response) {
    Parse.Push.send({
        channels: [ "" ],
        data: {
            alert: "Pushtest From Job"
        }
        }, {
        useMasterKey: true,
        success: function() {
            console.log("Pushed");
        // success!
        }, error: function(err) {
            console.log(err);
        }
    });
});