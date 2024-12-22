import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  combinedSkills = [
    "java",
    "spring",
    "angular",
    "sql",
    "kafka",
    "openshift",
    "nodejs",
    "express",
    "js",
    "ts",
    "html",
    "css",
    "github",
    "bitbucket",
    "materialui",
    "npm",
    "mongodb",
    "leetcode",
    "jquery",
  ];
  lengths = {
    skills: 9,
    midSkills: 6,
    secondTopSkills: 3,
    topSkill: 1,
  };
  skills: String[] = [];
  midSkills: String[] = [];
  secondTopSkills: String[] = [];
  topSkill: String[] = [];
  isMobile = false;
  ngOnInit() {
    if (window.screen.availWidth < 690) {
      this.isMobile = true;
    }

    const shuffledSkills = [...this.combinedSkills].sort(
      () => Math.random() - 0.5
    );
    if (!this.isMobile) {
      this.skills = shuffledSkills.splice(0, this.lengths.skills);
      this.midSkills = shuffledSkills.splice(0, this.lengths.midSkills);
      this.secondTopSkills = shuffledSkills.splice(
        0,
        this.lengths.secondTopSkills
      );
      this.topSkill = shuffledSkills.splice(0, this.lengths.topSkill);
    } else {
      this.skills = shuffledSkills;
    }
  }
}
