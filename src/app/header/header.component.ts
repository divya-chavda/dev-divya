import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public menuItems = [
    {
      menuTitle: "Resume",
      menuLink: "",
    },
    {
      menuTitle: "Contact",
      menuLink: "",
    },
  ];
  isMobile = false;
  ngOnInit() {
    if (window.screen.availWidth < 690) {
      this.isMobile = true;
    }
  }
}
