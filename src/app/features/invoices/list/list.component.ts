import { Component, OnInit } from '@angular/core';
import { CrudInvoicesService } from '../services/crud-invoices.service';
import { DetailComponent } from '../detail/detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  invoices: any[] = [];
  charging: boolean = true;
  chargingSuccessfully: boolean = false;

  constructor(
    private invoiceService: CrudInvoicesService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchInvoices();
  }

  async fetchInvoices(): Promise<void> {
    this.invoiceService.getAll().subscribe({
      next: (data) => {
        this.invoices = data;
        this.chargingSuccessfully = true;
      },
      error: (error) => {
        this.chargingSuccessfully = false;
        console.error('Error al obtener datos de facturas', error);
      },
      complete: () => {
        this.charging = false;
        console.log('Fetch invoices complete');
      }
    });
  }

  openDetailDialog(invoiceId: number): void {
    this.dialog.open(DetailComponent, {
      width: '90vw',  // 90% del ancho de la pantalla
      height: '100vh', // 90% del alto de la pantalla
      data: { id: invoiceId }
    })
  }

  create(): void {
    this.router.navigate(['/invoices/create']);
  }
}
