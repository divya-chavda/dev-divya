import { Component } from "@angular/core";

@Component({
  selector: "app-client-feedback",
  templateUrl: "./client-feedback.component.html",
  styleUrls: ["./client-feedback.component.scss"],
})
export class ClientFeedbackComponent {
  recommendations = [
    {
      name: "Anjan Jakkireddy",
      profile: "",
      active: false,
      id: 0,
      role: "Staff Engineer at Moody’s Analytics",
      content:
        "I highly recommend Divya Chavda as Full stack engineer and would love to work together again. She was my " +
        "lead UI developer for one of my POD. <br /><br />Divya is talented and insightful when it comes to " +
        "problem solving and due diligence. She is clear thinker and handled angular upgrade and paypal integration nicely. <br /><br />Divy Chavda is great asset to any team",
    },
    {
      name: "Pooja Shah",
      profile: "",
      active: true,
      id: 1,
      role: "Co-Founder at Spreadd",
      content:
        "I’ve had the pleasure of knowing Divya for over a year now, during which we collaborated on several projects. Above all, I was impressed with Divya’s ability to adapt to change and learn new things at significantly good speed. And, of course, her love for pani-pur cannot be neglected. Divya would be a true asset for any positions requiring senior oversight or a tech lead and comes with my heartfelt recommendation.",
    },
    {
      name: "Macnath Ravichandran ",
      profile: "",
      active: false,
      id: 2,
      role: "Senior Quality Analyst at RBC",
      content:
        "It is been amazing working together with Divya Chavda. When you get to connect with her, you'll discover a fantastic person with exceptional skills! Divya is enthusiastic, self-motivated, methodical, and very capable. She showed a high level of confidence, critical thinking, dedicated technical skills and was a valuable contributor to our project. On account of her mature approach to her responsibilities, I often thought of Divya as a professional I could always rely upon to get the job done. I absolutely would recommend her as frontend developer who always gives a quick and valuable response to BA's and Testers especially like me.",
    },
    {
      name: "Raj Matariya ",
      profile: "",
      active: false,
      id: 3,
      role: "Exert in Blockchain",
      content:
        "I’ve had the pleasure of knowing Divya for over a year now, during which we collaborated on several projects. Above all, I was impressed with Divya’s ability to adapt to change and learn new things at significantly good speed. And, of course, her love for pani-pur cannot be neglected. Divya would be a true asset for any positions requiring senior oversight or a tech lead and comes with my heartfelt recommendation.",
    },
  ];
  activeFeedback = this.recommendations[1];
  changeActive(item: any) {
    this.activeFeedback = item;
  }
}
