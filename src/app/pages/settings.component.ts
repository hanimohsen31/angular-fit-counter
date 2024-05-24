import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { modules } from "../shared/shared/shared.module";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-triceps",
  standalone: true,
  imports: [CommonModule, FormsModule, ...modules],
  template: `
    <div class="container mt-3 text-center">
      <h1 class="text-white">Sync Data For Your App</h1>
      <label class="text-white">Enter your Exact username</label>
      <input
        class="form-control my-2"
        [(ngModel)]="usernameBinding"
        ngModel
        #username="ngModel"
        name="username"
        type="text"
        placeholder="Enter Username"
        required
      />
      <p class="text-white">
        Please Note that if the username is different you will not get any data
      </p>
      <h6
        *ngIf="claimer"
        class="alert my-2"
        [class.alert-danger]="!status"
        [class.alert-success]="status"
      >
        {{ claimer }}
      </h6>
      <button
        class="btn btn-primary mt-3 d-block mx-auto"
        (click)="retriveData()"
        [disabled]="!username.valid || !username.touched"
      >
        Retrieve Data
      </button>
      <button
        class="btn btn-primary mt-3 d-block mx-auto"
        (click)="updateDate()"
        [disabled]="!username.valid || !username.touched"
      >
        Update Date
      </button>
      <button
        class="btn btn-primary mt-3 d-block mx-auto"
        (click)="downloadBackup()"
        [disabled]="!username.valid || !username.touched"
      >
        Download Date
      </button>
    </div>
  `,
  styles: [
    `
      input::placeholder {
        color: #ffffff61;
      }
    `,
  ],
})
export class SettingsComponent {
  username = "";
  usernameBinding = "";
  claimer = "";
  status = false;

  constructor(private HttpClient: HttpClient) {}

  updateDate() {
    let url = `https://fit-counter-default-rtdb.firebaseio.com/users/${this.usernameBinding}.json`;
    let data: any = localStorage.getItem("excercises");
    let parsed = JSON.parse(data);
    this.HttpClient.put(url, parsed).subscribe({
      next: (res: any) => {
        this.claimer = "Data Updated";
        this.status = true;
        console.log(res);
      },
      error: (err: any) => {
        this.claimer = "Couldn't Update";
        this.status = false;
      },
    });
  }

  retriveData() {
    let url = `https://fit-counter-default-rtdb.firebaseio.com/users/${this.usernameBinding}.json`;
    console.log(url);
    this.HttpClient.get(url).subscribe({
      next: (res: any) => {
        if (res) {
          this.claimer = "Data Retrieved And Set";
          this.status = true;
          console.log(res);
          let stringified = JSON.stringify(res);
          localStorage.setItem("excercises", stringified);
        } else {
          this.claimer = "Empty Data";
          this.status = false;
        }
      },
      error: (err: any) => {
        this.claimer = "Couldn't Retrieve";
        this.status = false;
      },
    });
  }

  downloadBackup(): void {
    let data: any = localStorage.getItem("excercises");
    let filename: string = this.usernameBinding;

    const blob = new Blob([data], { type: "application/json" }); // Create a Blob from the JSON string
    const url = window.URL.createObjectURL(blob); // Create a URL for the Blob

    const a = document.createElement("a"); // Create an anchor element
    a.href = url; // Set the href attribute to the Blob URL
    a.download = `${filename}.json`; // Set the download attribute with the desired file name
    a.click(); // Programmatically click the anchor to trigger the download

    window.URL.revokeObjectURL(url); // Revoke the Blob URL to free up resources
  }
}
