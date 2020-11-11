import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, 'A.B .Peter', '"The Sun is Also a Star🤔."', new Date(2020, 10, 8) ),
      new Quote(2, 'B.C .Abdul', '“i love Earth.”', new Date(2020, 10, 8) ),
  


    toogleDetails(index){
        this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
    }

    addNewQuote(quote){
        let quoteLength = this.Quotes.length;
        quote.id=quote.Length+1
        quote.completeDate = new Date(quote.completeDate)
        this.Quotes.push(quote)

    }

    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
            
            if(toDelete){
                this.Quotes.splice(index,1)
            }
        }
    }

  constructor() { }

  ngOnInit() {
  }

}