import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  userName: string;
  answers;
  questions;
  userData: { userName: any; answerChoice: any };
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.userData = this.appService.getUserAnswer();
    this.userName = this.userData.userName;
    this.questions = this.userData.answerChoice;
  }
}
