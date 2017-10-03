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

        // Defines the channels this should listen to
        LinkedList<String> channels = new LinkedList<String>();

        // Pushes channelName
        channels.push("channelName");

        // Defines ParseInstallation
        ParseInstallation installation = ParseInstallation.getCurrentInstallation();

        // Adds the Firebase Sender Key
        installation.put("GCMSenderId", "<Your Firebase Sender Key>");

        // Adds the channel list to the installation
        installation.put("channels", channels);
        installation.saveInBackground();
    }
}
