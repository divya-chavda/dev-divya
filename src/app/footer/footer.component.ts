import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public menuItems = [
    {
      menuTitle: "Resume",
      menuLink: "",
    },
    {
      menuTitle: "Email",
      menuLink: "",
    },
    {
      menuTitle: "LinkedIn",
      menuLink: "",
    },
    {
      menuTitle: "X",
      menuLink: "",
    },
  ];
}
