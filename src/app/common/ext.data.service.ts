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
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-webdemo`;
    const AWEBP_CARD_LIST = [];
    const AWEBP_FEATURED_LIST = [];
    const AWEBP_FEATURED_ANGULAR_LIST = [];

    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "Html and CSS Overview",
        "HEADING" : "Html and CSS Overview",
        "DESC" : `Html and CSS Overview`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "HTML Tags Basics", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`
            },

            {  
                "ID":2, "TITLE": "CSS Styling - Inline, Internal & External", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/2.html`
            },

            {  
                "ID":3, "TITLE": "Center Align Element reference to window screen.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`
            },

            {  
                "ID":4, "TITLE": "Vertically divide screen into two sections, and center align children", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`
            },

            {  
                "ID":5, "TITLE": "Horizontall divide screen into two sections, and center align children", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`
            },

            {  
                "ID":6, "TITLE": "CSS Transition", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/TvWV_W7LzVQ`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Html Tags Fundatmental - Blocking and Non-Blocking."},
            {"ID":2, "TITLE": "Html Tags Fundatmental - Form Elements and Non - Form Elements."},
            {"ID":3, "TITLE": "CSS Styling - Inline, Internal, External"},
            {"ID":4, "TITLE": "Center align elements"},
            {"ID":5, "TITLE": "Vertical division of screen"},
            {"ID":6, "TITLE": "Horizonatal division of screen"},
            {"ID":7, "TITLE": "Divide screen into four blocks, horizontally first then vertically"},
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
    const featuredAngular1= { "ID" : 1,"TITLE" : "Horizonal Blocks", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/TvWV_W7LzVQ`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular1);

    

    this.AWEBP_CARD_LIST = AWEBP_CARD_LIST;
    this.AWEBP_FEATURED_LIST = AWEBP_FEATURED_LIST;
    this.AWEBP_FEATURED_ANGULAR_LIST = AWEBP_FEATURED_ANGULAR_LIST;
  }
}