package com.example.root.travis;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.parse.Parse;
import com.parse.ParseInstallation;
import com.parse.ParseObject;
import com.parse.ParseUser;

import java.util.LinkedList;

public class MainActivity extends AppCompatActivity {

    public static final String APPLICATION_ID = "BesPSuSggd4ks2PUKfyjbHuH0C5pvRHovzZPGBvs";
    public static final String CLIENT_KEY = "BVkRuMPm0terRFju9nGuv2y0DBzmtJYO145zHMza";
    public static final String BACK4APP_API = "https://parseapi.back4app.com/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Parse.initialize(new Parse.Configuration.Builder(this)
                .applicationId(APPLICATION_ID)
                .clientKey(CLIENT_KEY)
                .server(BACK4APP_API).build()
        );

        // This is the installation part
        ParseInstallation installation = ParseInstallation.getCurrentInstallation();
        installation.put("GCMSenderId", "AAAAFQRw6x8:APA91bETvAkNELVDfEWG0v0HJ3gJMwei0VnIziClb9h0dvQHR17TBCKlo0HJ7qEg8HOC_BK95sm9rqZJ4ujbHj7w-MroXPdbCBnOqRXhh4vmaraKMwPxsonp8ZPO03Vx2r02PGvqaDHQ");
        installation.saveInBackground();
    }
}
