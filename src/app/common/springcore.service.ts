import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringcoreService {

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


    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "Project Config Files and Hello Spring REST API",
        "DESC" : `Project Config Files and Hello Spring REST API`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "4 - Configuration file web xml and spring servlet xml    How to update config files for spring mvc", 
                "YOUTUBE_LINK" : `https://youtu.be/CvST6UshMDs`,
            },

            {  
                "ID":2, "TITLE": "5 - Spring configuration update   Add annotation support in spring servlet xml", 
                "YOUTUBE_LINK" : `https://youtu.be/7fgXfLF1wfI`,
            },

            {  
                "ID":3, "TITLE": "6 - Write and run first #Spring #REST API   Hello Spring REST API", 
                "YOUTUBE_LINK" : `https://youtu.be/sh7_yuNVkjY`,
            },

            {  
                "ID":4, "TITLE": "7 - Resolve View in MVC using RestController Annotation", 
                "YOUTUBE_LINK" : `https://youtu.be/M_XfUgFwNR8`,
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Create first REST API in Spring"},
        ]
    };
    CARD_LIST.push(cardDay2);


    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Spring Project Setup & MAVEN Fundamental",
        "DESC" : `Spring Project Setup & MAVEN Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "1 - Create and Run #DynamicWebProject in #Eclipse using #tomcat", 
                "YOUTUBE_LINK" : `https://youtu.be/CvST6UshMDs`,
            },

            {  
                "ID":2, "TITLE": "2 - Convert #DynamicWebProject to #Maven Project and Add #Spring core dependencies in #Eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/jkVN83Mp82o`,
            },

            {  
                "ID":3, "TITLE": "3 - Add Spring MVC dependencies using maven in eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/n8yieV9-A5o`,
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Create SPRING Project in Eclipse."},
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
