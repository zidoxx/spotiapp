import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient:HttpClient) {
   }

   getQuery(query: string){

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQBNDl45rPl3i0mcARdKNXYdl4ckFHCEbDGmYgh3EoH98e9faUSMDABmGXHgK-xqkFUcZh5TtpBIiFPfhZk"
    });

    const url = `https://api.spotify.com/v1/${ query }`;

    return this.httpClient.get(url, { headers });
    
   }

   getNewReleases():any{
    return this.getQuery("browse/new-releases?limit=20")
               .pipe( map( (data:any) => data['albums'].items));
   }

   getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
                .pipe( map( (data:any) => data['artists'].items ));
   }

   getArtist(id:any){
    return this.getQuery(`artists/${id}`);
   }

   getTopTracks(id:any){
     return this.getQuery(`artists/${id}/top-tracks?country=es`)
                .pipe( map( (data:any) => data['tracks'] ));
   }
}
