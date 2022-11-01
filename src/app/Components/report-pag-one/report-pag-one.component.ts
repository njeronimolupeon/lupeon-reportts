import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report-pag-one',
  templateUrl: './report-pag-one.component.html',
  styleUrls: ['./report-pag-one.component.css']
})
export class ReportPagOneComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private postService: PostService) { }

  fileName="ExcelRelatorio1.xlsx"

  ngOnInit(): void {

    this.fetchPosts();

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

  /////////////////////////////////

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
