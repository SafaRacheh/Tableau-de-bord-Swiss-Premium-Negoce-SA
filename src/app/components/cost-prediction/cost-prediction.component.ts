import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cost-prediction',
  templateUrl: './cost-prediction.component.html',
  styleUrls: ['./cost-prediction.component.css']
})
export class CostPredictionComponent {

  year!: number;
  month!: number;
  predictedCost!: number;

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    const apiUrl = 'http://127.0.0.1:5000/predict-cost';
    const data = { year: this.year, month: this.month };
    
    this.http.post<{ predicted_cost: number }>(apiUrl, data)
      .subscribe(result => {
        this.predictedCost = result.predicted_cost;
      });
  }
}
