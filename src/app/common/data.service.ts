import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-19-demo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Dynamic blocks",
        "DESC" : `HTML Fundamentals and basic tags`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello World", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/1.html`,
            },

            {  
                "ID":2, "TITLE": "Heading Tags", 
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`,
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/blob/master/day1/3.html`,
            }
        ],

        "ASSIGNMENT_LIST" : [
            {  
                "ID":1, 
                "TITLE": "Hello World", 
            },
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
    const featuredAngular1= {
        "ID" : 5,
        "TITLE" : "SPA using Angular",
        "SHOW" : true,
        "DEMO_LINK" : `https://koderoom.github.io/hello-angular/`
    };
    FEATURED_ANGULAR_LIST.push(featuredAngular1);



    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
