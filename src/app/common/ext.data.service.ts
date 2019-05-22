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

    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "Day 2",
        "HEADING" : "Applying the learning of HTML and CSS",
        "DESC" : `Applying the learning of HTML and CSS`,

        "DEMO_LIST" : [
            {  
                "ID":10, "TITLE": "Link external javascript with HTML and call js function onclick of button.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/7.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/7.html`,
                "YOUTUBE_LINK": `https://youtu.be/XmaEYvyKf5o`
            },

            {  
                "ID":9, "TITLE": "Create a web application with header and body section with multiple static block.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/6.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/6.html`,
                "YOUTUBE_LINK": `https://youtu.be/GHO0cmBJDO4`
            },

            {  
                "ID":8, "TITLE": "How to use CSS #overflow Property?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/OtmGDiXzg_A`
            },

            {  
                "ID":7, "TITLE": "How to add text block over an Image as background?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/rKeSpZ-rDIE`
            },

            {  
                "ID":6, "TITLE": "How to use linear-gradient for background color?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/41.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/41.html`,
                "YOUTUBE_LINK": `https://youtu.be/2S8g151kd-g`
            },

            {  
                "ID":5, "TITLE": "How to use #background, #background-color, #linear-gradient and #background-image?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/2S8g151kd-g`
            },

            {  
                "ID":4, "TITLE": "Create and design #register page at the center of screen.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/vi9wjE5gSZw`
            },

            {  
                "ID":3, "TITLE": "How to fit an image within parent container and make image element interactive?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/4LcdLboFn-k`
            },

            {  
                "ID":2, "TITLE": "How to center align an image in HTML?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/1s7a-jETKqg`
            },

            {  
                "ID":1, "TITLE": "Why doesn't height: 100% work to expand divs to the screen height?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ZKOabqA3xDc`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Link HTML and Javascript"},
            {"ID":2, "TITLE": "Create applicatoin with Header and Body with static blocks"},
            {"ID":3, "TITLE": "How to use CSS Overlow"},
            {"ID":4, "TITLE": "How to add text block over an Image as background?"},
            {"ID":6, "TITLE": "How to use #background, #background-color, #linear-gradient and #background-image?"},
            {"ID":7, "TITLE": "Create and design #register page at the center of screen."},
            {"ID":8, "TITLE": "How to fit an image within parent container and make image element interactive?"},
            {"ID":9, "TITLE": "How to center align an image in HTML?"},
        ]
    };
    AWEBP_CARD_LIST.push(cardDay2);
    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "Day 1",
        "HEADING" : "Designing layout using Html and CSS",
        "DESC" : `Designing layout using Html and CSS`,

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
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/TvWV_W7LzVQ`
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