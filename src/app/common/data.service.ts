import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-demo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];


    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "DAY 3",
        "HEADING" : "Encapuslation, Member Function and Access Modifier",
        "DESC" : `Encapuslation, Member Function and Access Modifier`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Securing data member applying Encapuslation. (Data Security, Data Hiding, Appling logic on member function.)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example1`,
                "YOUTUBE_LINK": `https://youtu.be/T5tqP3eu8Jw`
            },

            {  
                "ID":2, "TITLE": "Create Calculator class with add, subtract, multiply, division method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example2`,
                "YOUTUBE_LINK": `https://youtu.be/h8Sndrbakz0`
            },

            {  
                "ID":3, "TITLE": "Working with function overloading, and variable number of parameters into function.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example3`,
                "YOUTUBE_LINK": `https://youtu.be/mllLtnGxqgE`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Working with static member and static method of class."},
            {"ID":2, "TITLE": "Accessing static member/method from different instance of class as global variable."},
            {"ID":3, "TITLE": "Explaing public static void main()"},
            {"ID":4, "TITLE": "Accessing static member from Member function."},
            {"ID":5, "TITLE": "Accessing data member from Static Fucntion. (Not allowed)."},
            {"ID":6, "TITLE": "Accessing static member/method using instance of class(Not Recommended)"},
            {"ID":7, "TITLE": "Convert the Calculator class method to Static method."},
            {"ID":8, "TITLE": "Working with constructor, Default Constructor and Zero Constructor."},
            {"ID":9, "TITLE": "Parametrized and Overloaded constructor."},
            {"ID":10, "TITLE": "Super Constructor and Constructor Chaining."},
        ]
    };
    CARD_LIST.push(cardDay3);

    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "Encapsulation, Member Function and Access Modifier",
        "DESC" : `Encapsulation, Member Function and Access Modifier`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Securing data member applying Encapuslation. (Data Security, Data Hiding, Appling logic on member function.)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example1`,
                "YOUTUBE_LINK": `https://youtu.be/T5tqP3eu8Jw`
            },

            {  
                "ID":2, "TITLE": "Create Calculator class with add, subtract, multiply, division method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example2`,
                "YOUTUBE_LINK": `https://youtu.be/h8Sndrbakz0`
            },

            {  
                "ID":3, "TITLE": "Working with function overloading, and variable number of parameters into function.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/example3`,
                "YOUTUBE_LINK": `https://youtu.be/mllLtnGxqgE`
            },

            
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Working with Member function signature. (AccessModifer, NonAccessModifer, ReturnType, FunctionName, InputParam, ExceptionHandling)"},
            {"ID":2, "TITLE": "Securing data member applying Encapuslation. (Data Security, Data Hiding, Appling logic on member function.)"},
            {"ID":3, "TITLE": "Create Calculator class with add, subtract, multiply, division method."},
            {"ID":4, "TITLE": "Update Calcuator functionlity by reading input interactively."},
            {"ID":5, "TITLE": "Working with access modifier. (public, protected, default and private)"},
            {"ID":6, "TITLE": "Working with function overloading, overload the add() method of Calculator class."},
            {"ID":7, "TITLE": "Working with variable number of parameter. "},
            {"ID":8, "TITLE": "Working with overloading and variable number of parmater together."},
        ]
    };
    CARD_LIST.push(cardDay2);

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
