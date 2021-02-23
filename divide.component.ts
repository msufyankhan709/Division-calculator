import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  constructor() { }
  public a:number;
  public b:number;
  public result:number;
  Divide()
  {
    return this.result=Number.parseInt(this.a.toString()) / Number.parseInt(this.b.toString());
  }
  Clear()
  {
    return this.result=this.a=this.b=0;
  }
   
  ngOnInit(): void {
  }

}
