import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, 'A.B .Peter', '"Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want."', new Date(2020, 10, 8) ),
      new Quote(2, 'B.C .Abdul', '“i love Earth.”', new Date(2020, 10, 8) ),
      // new Quote(3, '-Steve Jobs', “If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”', new Date(2020, 11, 8) ),
      // // new Quote(4, '-Rob Siltanen', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”', new Date(2018, 8, 15) ),
      // // new Quote(5, '-Eleanor Roosevelt', '"The future belongs to those who believe in the beauty of their dreams."', new Date(2018, 8, 15) ),
      // // new Quote(6, '-Don Zimmer', '“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.”', new Date(2018, 8, 15) ),
    ]


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