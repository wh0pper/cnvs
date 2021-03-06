import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2/database";
import { ActivatedRoute, Params } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  userUID: string;
  artistToDisplay: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userUID = urlParameters['id'];
    });
    this.artistService.getArtistById(this.userUID).subscribe(data => {
      this.artistToDisplay = data[0];
    })
  }

}
