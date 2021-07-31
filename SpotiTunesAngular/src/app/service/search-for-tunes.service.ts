import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tune } from '../common/tune';

@Injectable({
  providedIn: 'root'
})
export class SearchForTunesService {

  private baseUrl='http://localhost:8080/album';
  constructor(private httpClient:HttpClient) { }

  searchTunes(theKeyword:String):Observable<Tune>
  {
    const searchUrl=`${this.baseUrl}/${theKeyword}`;
   // return this.httpClient.get<Tune>;
  }
}
