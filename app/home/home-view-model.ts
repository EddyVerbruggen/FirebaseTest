import { Observable } from "tns-core-modules/data/observable";
import * as firebase from "nativescript-plugin-firebase";

export class HomeViewModel extends Observable {
    constructor() {
        super();

        //init firebase
        console.log(firebase.initialized);
        if (!firebase.initialized) {
            firebase.init({
                //additional configuration
            }).then(() => {
                console.log('firebase init');
                this.logEvent();
            }, (err) => { console.log(`firebase init error: ${err}`); });
        } else {
            this.logEvent();
        }
    }

    logEvent() {
        firebase.analytics.setScreenName({
            screenName: 'Login_Screen'
        });

        firebase.analytics.logEvent({
            key: "awl_launch",
            parameters: [ // optional
                {
                    key: "userId",
                    value: "12345"
                },
                {
                    key: "userName",
                    value: "Daniel_Dragnev"
                }]
        }).then(() => { console.log("Firebase Analytics awl_launch event logged."); });
    }
}
