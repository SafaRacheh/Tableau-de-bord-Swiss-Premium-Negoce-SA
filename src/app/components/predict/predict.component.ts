import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent	 {

  input1!: number;
  input2!: number;
  input3!: number;
  input4!: number;
  input5!: number;

  predictionResult!: number;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const inputs = [this.input1, this.input2, this.input3, this.input4, this.input5];
    this.http.post<any>('http://127.0.0.1:5000/predict', { inputs })
      .subscribe(
        (response) => { 
          this.predictionResult = response[0];
        },
        error => {
          console.error(error);
        }
      );
  }

}
