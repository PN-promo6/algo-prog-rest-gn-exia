import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../services/data-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private DataService: DataServiceService) { }

  ngOnInit() {
    this.DataService.getAlbums();
    this.DataService.getMembers();
    this.DataService.getConcertTours();
    this.DataService.getLabels();
  }
}