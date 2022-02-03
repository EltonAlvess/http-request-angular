import { Customer } from "./customer.model";
import { AppTestService } from "./app-test.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "app-test";
  public status = "";

  constructor(private service: AppTestService) {}

  onPost() {
    let customer: Customer = {
      Id: 123,
      Name: "Ealves",
      Price: 10.0,
      Quantity: 1,
    };

    this.service.onPost(customer).subscribe((resp) => {
      this.status = resp.status === 200 ? "sucesso" : "falha";
    });
  }
}
