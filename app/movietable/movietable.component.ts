import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { col, tab } from '../mov';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})
export class MovietableComponent implements OnInit{

  constructor(private demo:MovieService){}
  moviedata={} as tab

  arr:Array<col>=[]
  obj={} as any

    ngOnInit(): void {
      this.demo.jsondata().subscribe(p=>{
        console.log(p);
        this.moviedata=p
        console.log(this.moviedata);

      })
    }

    rowfunc(start:number,end:number){
      for(let i = start;i<=end;i++){
          if(this.arr.findIndex(x=>x.id==i)==-1)
            this.arr.push({id:i})
// console.log(this.arr);


      }
    }

noofbooked:number=0
basepay:number=300
tax:number=0
totalamount:number=0
    change(i:number,row:any){
      if((document.getElementById(`${i}`) as HTMLTableElement).style.backgroundColor=='green'){
        (document.getElementById(`${i}`) as HTMLTableElement).style.backgroundColor='white'
      }
      else{
        (document.getElementById(`${i}`) as HTMLTableElement).style.backgroundColor='green'

      }
      this.obj=this.arr.find(p=>p.id==i)
      console.log(this.obj);
      if(row>3){

        this.noofbooked++;
        console.log(this.basepay);
        this.basepay=this.moviedata.BasicPrice+(50*(row-3))
        console.log(this.basepay);

          this.tax = (0.20*this.basepay*this.noofbooked);
          console.log(this.tax);
          this.totalamount=this.totalamount+this.basepay



        }
        else{
        this.noofbooked++;
        this.basepay=this.moviedata.BasicPrice
        this.tax=0.20*this.basepay*this.noofbooked
        this.totalamount=this.totalamount+this.basepay

      }





    }
}
