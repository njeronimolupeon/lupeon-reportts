import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import { PostService } from 'src/app/post.service';
// import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import plugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {

  @ViewChild('meuCanvasOne', {static:true }) elemento: ElementRef;
  @ViewChild('myChartLinha', {static:true }) myChartLinha: ElementRef;
  @ViewChild('myChartLinha2', {static:true }) myChartLinha2: ElementRef;
  @ViewChild('myChartColunas', {static:true }) myChartColunas: ElementRef;
  @ViewChild('myChartPizza', {static:true }) myChartPizza: ElementRef;
  @ViewChild('myChartColum2', {static:true }) myChartColum2: ElementRef;
  @ViewChild('myChartColum22', {static:true }) myChartColum22: ElementRef;
  @ViewChild('mapa', {static:true }) mapa: ElementRef;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private postService: PostService) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  // Doughnut
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //     { data: [ 350, 450, 100 ], label: 'Series A' },
  //   ];

  // public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  //   responsive: false,
  //   cutout: 50,
  //   plugins:{
  //     datalabels:{
  //       formatter: (value, ctx) => {
  //         let sum = 0;
  //         let dataArr: any[] = ctx.chart.data.datasets[0].data;
  //         dataArr.map((data: number) => {
  //           sum += data;
  //         });
  //         let percentage = (value * 100 / sum).toFixed(2) + "%";
  //         return percentage;
  //       },
  //     }
  //   }
  // };

  ngOnInit(): void {

    this.fetchPosts();

    // Doughnut


    new Chart(this.elemento.nativeElement, {
      type:'doughnut',

      data:{
        labels: ["Janeiro", "Fevereiro"],
        datasets: [{
          backgroundColor: ['#0A2C5B', '#126CFB'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          data: [300, 50],
        }],

      },
      options: {

        plugins: {
            filler: {
                propagate: false,
            },
            title: {
                display: false,
            },
            legend: {
                display: false,
            },

            datalabels:{
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr: any[] = ctx.chart.data.datasets[0].data;
                dataArr.map((data: number) => {
                  sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(2) + "%";
                return percentage;
              },
              color: 'white'
            },

        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        }
        },
    })

    const labelsLinha = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      ];

      const dataLinha = {
      labels: labelsLinha,
      datasets: [{
          backgroundColor: ['#0A2C5B'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          pointBorderColor: '#126CFB',
          pointBackgroundColor: '#126CFB',
          borderColor:'#126CFB',
          data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
    }]
    };

    new Chart(this.myChartLinha.nativeElement, {
      type: 'line',
      data: dataLinha,
      options: {
          plugins: {
              filler: {
                  propagate: false,
              },
              title: {
                  display: false,
              },
              legend: {
                  display: false,
                  labels:{
                    font:{
                      size: 9
                    }
                  }
              },
              datalabels:{
                font:{
                  size: 10,
                },
              }
            },
          interaction: {
              intersect: false,
          },
          scales: {
              x: {
                  display: false,
              },
              y: {
                  display: false,
              }
          }
        },
    })

    const labelsLinha2 = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      ];

      const dataLinha2 = {
      labels: labelsLinha2,
      datasets: [{
        backgroundColor: ['#0A2C5B'],
        hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
        hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
        pointBorderColor: '#126CFB',
        pointBackgroundColor: '#126CFB',
        borderColor:'#126CFB',
          data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],
    }]
    };

    new Chart(this.myChartLinha2.nativeElement, {
      type: 'line',
      data: dataLinha2,
      options: {
          plugins: {
              filler: {
                  propagate: false,
              },
              title: {
                  display: false,
              },
              legend: {
                  display: false,
              },
          },
          interaction: {
              intersect: false,
          },
          scales: {
              x: {
                  display: false,
              },
              y: {
                  display: false,
              }
          }
        },
    })



    const labelsColunas = [
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      ];

      const dataLinhas3 = {
          labels: labelsColunas,
            datasets: [{
              backgroundColor: ['#0A2C5B'],
          hoverBackgroundColor: ['#0A2C5B' ,'#126CFB'],
          hoverBorderColor: ['#0A2C5B' ,'#126CFB'],
          pointBorderColor: '#126CFB',
          pointBackgroundColor: '#126CFB',
          borderColor:'#126CFB',
              data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],

              fill:false
        }]
      };

      new Chart(this.myChartColunas.nativeElement, {
        type: 'line',
        data: dataLinhas3,
        options: {
            plugins: {

                filler: {
                    propagate: false,
                },
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                    labels:{
                      boxWidth: 6,
                      font:{
                        size:8.5
                      }
                    }
                },
                datalabels:{
                  formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr: any[] = ctx.chart.data.datasets[0].data;
                    dataArr.map((data: number) => {
                      sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                  },
                  color: '#66666'
                }
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: false,
                }
            }
          },
      })


      const labelsPizza = [
        'Sudeste',
        'Centro-Oeste',
        'Nordeste',
        'Sul',
        'Norte'
        ];

        const dataPizza = {
        labels: labelsPizza,
        datasets: [{
            backgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            // borderColor: '#136CFB',
            hoverBackgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            hoverBorderColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            data: [443.568, 266.194, 202.751, 193.459, 224.600],
        }]
        };

        new Chart(this.myChartPizza.nativeElement, {
          type: 'pie',
          data: dataPizza,
          options: {
              plugins: {
                  filler: {
                      propagate: false,
                  },
                  title: {
                      display: false,
                  },
                  legend: {
                      display: true,
                      position: 'bottom',
                      labels:{
                        boxWidth: 6,
                        font:{
                          size:8.5
                        }
                      }
                  },
                  datalabels:{
                    formatter: (value, ctx) => {
                      let sum = 0;
                      let dataArr: any[] = ctx.chart.data.datasets[0].data;
                      dataArr.map((data: number) => {
                        sum += data;
                      });
                      let percentage = (value * 100 / sum).toFixed(2) + "%";
                      return percentage;
                    },
                    color: 'white'
                  }
              },
              interaction: {
                  intersect: false,
              },
              scales: {
                  x: {
                      display: false,
                  },
                  y: {
                      display: false,
                  }
              }
            },
        })




        const labelsColum2 = [
          'Rodonaves',
          'Allied',
          'Hilti',
          'Dailus',
          'Clique'
          ];

          const dataColum2 = {
          labels: labelsColum2,
          datasets: [{
              backgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
              hoverBackgroundColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
            hoverBorderColor: ['#0A2C5B','#136CFB', '#5CC4FF', 'rgba(19, 108, 251, 0.2)', '#00FFC4'],
              data: [708.029, 419.743, 346.958, 243.000, 200.600],
          }]
          };


          new Chart(this.myChartColum2.nativeElement, {
            type: 'bar',
            data: dataColum2,
            options: {
                indexAxis: 'y',
                plugins: {
                    filler: {
                        propagate: false,
                    },
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                    }
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                    }
                }
                },
          })


  }

  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
