import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from "@angular/core";
import Chart from "chart.js/auto";

@Component({
  selector: "app-stats-unit",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stats-unit.component.html",
  styleUrl: "./stats-unit.component.scss",
})
export class StatsUnitComponent {
  @Input() data: any = {};
  @Input() id: any = 100;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;

  chart: any;
  weights: any = [];
  counts: any = [];
  unit = "";
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.unit = this.data?.counter[0]?.unit;
    this.arraymaker();
  }

  ngAfterViewInit() {
    this.createChart();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  arraymaker() {
    this.data?.counter?.map((elm: any) => {
      this.weights.push(elm?.c3 || 0);
      this.counts.push(elm?.g3 || 0);
    });
  }

  // chart
  createChart() {
    const canvasElement: any = document.getElementById('chart_' + this.id);
    this.chart = new Chart(canvasElement, {
      type: "line",
      data: {
        labels: this.counts,
        datasets: [
          {
            label: "weight/counts",
            data: this.weights,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  }
}
