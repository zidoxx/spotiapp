import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  busqueda:any[] = [];
  loading:boolean = false;
  constructor(private spotifyService:SpotifyService) {
   }

  buscar(termino:string){
    this.loading = true;
     this.spotifyService.getArtists(termino)
                        .subscribe((data:any) => {
                          this.busqueda = data;
                          this.loading = false;
                        })
  }
}
