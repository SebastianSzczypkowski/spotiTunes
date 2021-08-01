import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tune } from 'src/app/common/tune';
import { SearchForTunesService } from 'src/app/service/search-for-tunes.service';

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.css']
})
export class TunesComponent implements OnInit {

  tunes: Tune[]=[];
  previousKeyword:string=null;

  constructor(private searchTunes:SearchForTunesService,private rout:ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(() => { this.listTunes(); });
  }
  listTunes() {
    const theKeyword: string = this.rout.snapshot.paramMap.get('keyword');
    this.searchTunes.searchTunes(theKeyword).subscribe(data=>{
      this.tunes=data;
    })
  }

}
