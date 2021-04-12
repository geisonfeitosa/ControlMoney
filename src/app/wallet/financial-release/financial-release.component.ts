import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-financial-release',
  templateUrl: './financial-release.component.html',
  styles: [
  ]
})
export class FinancialReleaseComponent implements OnInit {

  linhas$: Observable<any[]>;

  constructor( ) { }

  ngOnInit(): void { }

}