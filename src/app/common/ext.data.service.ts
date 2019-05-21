import { Injectable } from "@angular/core";
import { DataService } from "src/app/common/data.service";

@Injectable({
    providedIn: 'root'
})
export class ExtDataService extends DataService {
    AWEBP_CARD_LIST:any[];
    AWEBP_FEATURED_LIST:any[];
    AWEBP_FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    super(); 

    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-demo`;
    const AWEBP_CARD_LIST = [];
    const AWEBP_FEATURED_LIST = [];
    const AWEBP_FEATURED_ANGULAR_LIST = [];

    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Java Fundamentals and Data Type",
        "DESC" : `Java Fundamentals and Data Type`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello World, File and Public class Naming Convention And Basics of Main Method", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/example1`,
            },

            {  
                "ID":2, "TITLE": "User defined class concept, Object initialization, Accessing data member of class, Default value for data memeber and local variable ", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/example2`,
            },

            {  
                "ID":3, "TITLE": "Day-1 Classroom Recording", 
                "YOUTUBE_LINK" : `https://youtu.be/FpIjy7fi0H0`,
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Hello World and Java Program with one public class."},
            {"ID":2, "TITLE": "Hello World and Java Program with more than one class."},
            {"ID":3, "TITLE": "User Define Class, Concept, Data Member / Instance Member"},
        ]
    };
    AWEBP_CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    AWEBP_FEATURED_LIST.push(featured1);


    /** FEATURE LIST ANGULAR */
    const featuredAngular1= { "ID" : 1,"TITLE" : "Generate Bill", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/RcAT4qAnni0`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular1);

    const featuredAngular2= { "ID" : 2,"TITLE" : "Buffered Reader Demo","SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/GeZ1LvESO-o`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular2);


    this.AWEBP_CARD_LIST = AWEBP_CARD_LIST;
    this.AWEBP_FEATURED_LIST = AWEBP_FEATURED_LIST;
    this.AWEBP_FEATURED_ANGULAR_LIST = AWEBP_FEATURED_ANGULAR_LIST;
  }
}