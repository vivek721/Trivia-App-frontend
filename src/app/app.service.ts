import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  userName: String;
  answerChoice: any;
  userData: { userName: any; answerChoice: any };
  baseURL = "http://localhost:3000/trivia";
  constructor(private http: HttpClient) {}

  getQuiz() {
    return this.http.get(`${this.baseURL}/getAllQuiz`);
  }

  getUserName() {
    return this.userName;
  }
  setUserName(userName: string) {
    this.userName = userName;
  }

  saveUserAnswer(userName, answerChoice, answerList) {
    this.userData = {
      userName: userName,
      answerChoice: answerChoice
    };
    const params = new HttpParams()
      .set("userName", userName)
      .set("answerList", answerList);
    console.log(answerList);
    return this.http.post(`${this.baseURL}/addHistory`, params);
  }
  getUserAnswer() {
    return this.userData;
  }

  getHistory() {
    return this.http.get(`${this.baseURL}/getAllHistory`);
  }
}
