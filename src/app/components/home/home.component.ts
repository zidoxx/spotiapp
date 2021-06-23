import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  loading:boolean = true;
  nuevasCanciones:any[] = [];
  error:boolean = false;
  mensaje:string = '';

  constructor(private spotifyService:SpotifyService) {
      this.spotifyService.getNewReleases()
          .subscribe( (data:any) => {
            this.nuevasCanciones = data;
            this.loading = false;
          }, (err:any)=> { this.mensaje = err.error.error.message; this.error = true;this.loading = false; }
          );
} }
