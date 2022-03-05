import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/app/core/models/art';
import { ArtsService } from 'src/app/core/services/arts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  artList: IArt[];
  filteredList: IArt[];
  constructor(
    private artService: ArtsService
  ) { }

  ngOnInit() {
  }

  search(event) {
    const value: string = event.target.value;
    if(value !== ''){
      this.filteredList = this.artService.search(value);
      console.log(this.filteredList);
    }
    else {
      this.filteredList = [];
    }
  }

}
