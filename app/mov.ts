export interface tab{
  BasicPrice:number;
  MovieName:string;
  Rows:Array<row>
}
export interface row{
  row:number;
  Start:number;
  End:number;
  AlreadyBooked:Array<number>
}

export interface col{
  id:number
}
