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
        "HEADING" : "AWEBP Day 1",
        "DESC" : `AWEBP Day 1`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Demo 1", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/example1`,
            },

            
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Assignment 1"},
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
    const featuredAngular1= { "ID" : 1,"TITLE" : "DEMO 1", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/RcAT4qAnni0`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular1);

    

    this.AWEBP_CARD_LIST = AWEBP_CARD_LIST;
    this.AWEBP_FEATURED_LIST = AWEBP_FEATURED_LIST;
    this.AWEBP_FEATURED_ANGULAR_LIST = AWEBP_FEATURED_ANGULAR_LIST;
  }
}