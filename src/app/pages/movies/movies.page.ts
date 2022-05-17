import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ApiResult } from 'src/app/models/apiResult';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  imageBaseUrl = environment.images;
  currentPage = 1;
  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'loading...',
      spinner: 'bubbles'
    });

    loading.present();

    this.movieService.getTopRateMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies.push(... res.results);
      event?.target.complete();
      if(event){
        event.target.disabled = res.total_pages === this.currentPage;
      }
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadMovies(event);
  }

}
