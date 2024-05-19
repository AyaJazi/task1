// items.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item.model';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [GetApiService]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private itemService: GetApiService) {}

  ngOnInit() {
      this.itemService.getItems().subscribe({
          next: (data) => {
              this.items = data;
              this.loading = false;
          },
          error: (err) => {
              this.error = err.message;
              this.loading = false;
          }
      });
  }
}
