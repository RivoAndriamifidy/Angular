import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  public title = 'Listes hotels';
  public hotels: any[] = [
    {
      hotelId: 1,
      hotelName: 'Radisson club',
      description: 'Belle vue au bord de ranomaimbo',
      price: 40,
      imageUrl: 'assets/img/hotel1.webp'
    },
    {
      hotelId: 1,
      hotelName: 'Radisson club',
      description: 'Belle vue au bord de ranomaimbo',
      price: 40,
      imageUrl: 'assets/img/hotel1.webp'
    },
    {
      hotelId: 2,
      hotelName: 'Radisson club',
      description: 'Belle vue au bord de ranomaimbo',
      price: 40,
      imageUrl: 'assets/img/hotel1.webp'
    },{
      hotelId: 3,
      hotelName: 'Radisson club',
      description: 'Belle vue au bord de ranomaimbo',
      price: 40,
      imageUrl: 'assets/img/hotel1.webp'
    },{
      hotelId: 4,
      hotelName: 'Radisson club',
      description: 'Belle vue au bord de ranomaimbo',
      price: 40,
      imageUrl: 'assets/img/hotel1.webp'
    },
];
}
