import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  fullHistory;
  answerList: any = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getHistory().subscribe(data => {
      this.fullHistory = data;
      let temp = [];
      console.log(this.fullHistory);
      this.fullHistory.forEach(history => {
        history.answerList.forEach(answer => {
          temp = answer.split(",");
        });
        this.answerList.push(temp);
      });
      console.log(this.answerList);
      for (let i = 0; i < this.fullHistory.length; i++) {
        this.fullHistory[i].answerList = this.answerList[i];
      }
      console.log(this.fullHistory);
    });
  }
}
