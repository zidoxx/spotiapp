import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  loading:boolean = false;
  artista:any = {};
  tracks:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { 
    this.activatedRoute.params.subscribe((artist:any) => {
      this.getArtista(artist['id']);
      this.getTopTracks(artist['id']);
    });
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe( (data:any) => {
      this.tracks = data;
      console.log(this.tracks);
      
    })
  }

  getArtista(id:string){
      this.loading=true; 
      this.spotifyService.getArtist(id)
                         .subscribe( (data:any) => {
                           this.artista = data;
                           this.loading = false;
                         })
  }

}
