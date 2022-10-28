import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PostService } from 'src/app/post.service';


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

  }

  ngOnInit(): void {

    this.fetchPosts();


    new Chart(this.elemento.nativeElement, {
      type:'doughnut',
      data:{
        labels: ["Janeiro", "Fevereiro"],
        datasets: [{
          backgroundColor: ['#0A2C5B', '#126CFB'],

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
              },
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
                  display: true,
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
              data: [43.568, 202.751, 266.194, 193.459, 224.604, 294.426, 249.728],

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
                },
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
