import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [
      new Satellite('SiriusXM', 'Communication', '2009-03-21', 'LOW', true),
      new Satellite('Cat Scanner', 'Imaging', '2012-01-05', 'LOW', true),
      new Satellite('Weber Grill', 'Space Debris', '1996-03-25', 'HIGH', false),
      new Satellite('GPS 938', 'Positioning', '2001-11-01', 'HIGH', true),
      new Satellite('ISS', 'Space Station', '1998-11-20', 'LOW', true),
    ];
    this.displayList = [];
    const satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    // tslint:disable-next-line:only-arrow-functions
    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

        console.log(data);

        const fetchedSatellites = data.satellites;
        // TODO: loop over satellites
        // TODO: create a Satellite object using new
        // Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type,
        // fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
        // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
        let satellite: object;
        // TODO: loop over satellites
        for (const fetchedData of fetchedSatellites) {
          satellite = new Satellite(
            fetchedData.name,
            fetchedData.type,
            fetchedData.launchDate,
            fetchedData.orbitType,
            fetchedData.operational
          );
          this.sourceList.push(satellite);
          this.displayList = this.sourceList.slice();
        }


      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    const matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    // console.log(typeof searchTerm);
    console.log(searchTerm);
    console.log(searchTerm);
    console.log(searchTerm);
    console.log(searchTerm);
    console.log(searchTerm);
    for (const satellite of this.sourceList) {
      const name = satellite.name.toLowerCase();
      if (name.includes(searchTerm)) {
        matchingSatellites.push(satellite);
      }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;

  }
  // make a copy of the sourceList to be shown to the user
}
