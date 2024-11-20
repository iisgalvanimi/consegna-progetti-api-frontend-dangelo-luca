import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  datiCarta: any;
  caricamento = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const NomeCarta = params.get('name')!;
      this.fetchdatiCarta(NomeCarta);
    });
  }

  fetchdatiCarta(NomeCarta: string): void {
    this.caricamento = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${NomeCarta}`; // Usare backticks
    this.http.get(url).subscribe(
      (data) => {
        this.datiCarta = data;
        this.caricamento = false;
      },
      (error) => {
        console.error('Carta non trovata', error);
        this.caricamento = false;
      }
    );
  }

}

