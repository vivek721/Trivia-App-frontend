import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { AppComponent } from "./app.component";
import { SummaryComponent } from "./summary/summary.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "quiz", component: QuizComponent },
  { path: "summary", component: SummaryComponent },
  { path: "history", component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
