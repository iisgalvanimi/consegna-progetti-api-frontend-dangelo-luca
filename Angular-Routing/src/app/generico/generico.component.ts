import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ANIMALS, Emoji, FRUITS } from '../models/emoji.model';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent {

  genVect : Emoji[]= [{name:"", emoji:""}]; 
  
  constructor(private route: ActivatedRoute){
  this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log (uri_param); //Stampo su console
      //this.service.getTrack()
    
    if (uri_param == 'fruits') this.genVect = FRUITS;
    if (uri_param == 'animals') this.genVect = ANIMALS;
  }
}

