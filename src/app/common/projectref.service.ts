import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectrefService {

  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-demo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

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
            {"ID":4, "TITLE": "Object Initialization for UserDefine Class using `new` keyword."},
            {"ID":5, "TITLE": "Access Data Member of user define class using dot operator."},
            {"ID":6, "TITLE": "Working with default value of data member of User defined class and local member of function."},
            {"ID":7, "TITLE": "Read an input from command line."},
            {"ID":8, "TITLE": "Print Right triangle star."},
        ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    FEATURED_LIST.push(featured1);



    /** FEATURE LIST ANGULAR */
    const featuredAngular1= { "ID" : 1,"TITLE" : "Generate Bill", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/RcAT4qAnni0`};
    FEATURED_ANGULAR_LIST.push(featuredAngular1);

    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
