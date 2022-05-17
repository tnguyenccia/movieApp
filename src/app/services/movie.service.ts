import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/apiResult';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRateMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`);
  }

  getMovieDetails(id: string): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
