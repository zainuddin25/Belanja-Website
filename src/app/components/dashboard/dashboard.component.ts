import { Component } from "@angular/core"
import { Chart } from "chart.js/auto"

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{

    public chart: any;
    
    createChart(){
  
        this.chart = new Chart("MyChart", {
            type: 'bar',
    
            data: {
                labels: ['Januari', 'Febuari', 'Maret','April', 'Mei', 'Juni', 'Juli','Agustus', 'September', 'Oktober', 'November', 'Desember' ], 
                datasets: [
                    {
                        label: "Penjualan",
                        data: ['100','102', '92', '193', '162', '200', '301', '203', '182', '162', '263', '125'],
                        backgroundColor: 'blue'
                    },
                ]
            },
            options: {
                aspectRatio:2.5
            }
        });
      }

      ngOnInit(): void {
        this.createChart();
      }

}