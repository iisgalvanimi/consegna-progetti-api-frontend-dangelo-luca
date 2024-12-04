import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'https://api.scryfall.com/cards/named?exact=';

  constructor(private http: HttpClient) {}

  getCardData(cardName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${cardName}`);
  }
}