import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardData: any;
  searchName: string = ''; // Nome della carta da cercare

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    // Recupera il parametro "name" dalla route
    this.route.paramMap.subscribe((params) => {
      const cardName = params.get('name');
      if (cardName) {
        this.fetchCardData(cardName);
      }
    });
  }

  fetchCardData(cardName: string): void {
    this.cardService.getCardData(cardName).subscribe(
      (data) => {
        this.cardData = data;
      },
      (error) => {
        this.cardData = null; // Gestione di un nome non valido
        console.error('Carta non trovata:', error);
      }
    );
  }

  // Ricerca la carta quando l'utente preme il pulsante
  searchCard(): void {
    if (this.searchName.trim()) {
      this.router.navigate(['/card', this.searchName.trim()]);
    }
  }
}
