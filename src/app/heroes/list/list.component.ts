import { Component } from '@angular/core';
import { StreamPriorityOptions } from 'http2';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
    public deleteHeroe? : string;
    removeLastHero():void{
       this.deleteHeroe =  this.heroNames.pop();

    }
}
