import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { SummaryComponent } from "./summary/summary.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [AppComponent, QuizComponent, SummaryComponent, HomeComponent, HistoryComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
