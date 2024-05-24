import { StatsUnitComponent } from "./../components/stats-unit/stats-unit.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { modules } from "../shared/shared/shared.module";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stats",
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules, StatsUnitComponent],
  template: `<div class="container div-beta d-flex flex-wrap mt-3">
    @for(elm of data;track $index){
    <app-stats-unit class="w-100" [data]="elm" [id]="$index"></app-stats-unit>
    }
  </div>`,
})
export class StatsComponent {
  data: any[] = [];

  ngOnInit() {
    let localstorage: any = localStorage.getItem("excercises");
    this.data = JSON.parse(localstorage).slice(1);
  }
}
