import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  public allQuestions;
  public question;
  public option;
  public i: number = 0;
  quizlength: any;
  answerType: any;
  choices: any;
  answerChoice: {};
  selectedAnswer: any = [];
  summary: any = [];
  answerList: any = [];
  userName: String;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.userName = this.appService.getUserName();
    this.appService.getQuiz().subscribe(
      data => {
        console.log("logging data");

        this.allQuestions = data;
        console.log(data);
        this.question = this.allQuestions[0].question;
        this.option = this.allQuestions[0].answer;
        this.quizlength = this.allQuestions.length;
        this.i = 0;
        this.answerType = this.allQuestions[0].answerType;
      },
      error => {
        console.log("error occued");
        console.log(error.errorMessage);
      }
    );
  }

  /******************************************************** */
  next() {
    this.answerChoice = {
      question: this.question,
      answer: this.selectedAnswer
    };
    this.answerList.push(this.selectedAnswer);
    this.summary.push(this.answerChoice);
    this.selectedAnswer = [];
    console.log(this.summary);
    ++this.i;
    this.question = this.allQuestions[this.i].question;
    this.option = this.allQuestions[this.i].answer;
    this.answerType = this.allQuestions[this.i].answerType;
  }
  previous() {
    for (var member in this.answerChoice) delete this.answerChoice[member];
    this.summary = [];
    this.answerList = [];
    --this.i;
    this.question = this.allQuestions[this.i].question;
    this.option = this.allQuestions[this.i].answer;
    this.answerType = this.allQuestions[this.i].answerType;
  }

  check(e, str: string) {
    if (e.target.checked) {
      if (this.i == 0) {
        if (this.selectedAnswer.length > 0) {
          this.selectedAnswer = [];
        }
      }
      if (this.selectedAnswer.indexOf(str) == 0) {
        console.log(str);
      } else this.selectedAnswer.push(str);
    }
  }

  submit() {
    this.answerChoice = {
      question: this.question,
      answer: this.selectedAnswer
    };
    this.answerList.push(this.selectedAnswer);
    this.summary.push(this.answerChoice);
    console.log(this.answerList + " sadasdasd ");
    this.appService
      .saveUserAnswer(this.userName, this.summary, this.answerList)
      .subscribe(
        data => {
          console.log("Successfully added");
        },
        error => {
          console.log("error occured");
        }
      );
  }
}
