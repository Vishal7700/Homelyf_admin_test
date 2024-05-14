import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../service/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../../notifications/delete-alert/delete-alert.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SideNavbarComponent,
    DeleteAlertComponent,
  ],
  providers: [UserService, HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  vendorIds: number[] = [];
  displayedColumns: string[] = [
    'Sr.no',
    'name',
    'mobileNumber',
    'emailAddress',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getVendors();
  }

  getVendors() {
    this.userService.getAllVendors().subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource<any>(resp);
      this.vendorIds = resp.map((vendor: any) => vendor.id);
      console.log(this.vendorIds);
    });
  }

  FilterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  countVen(index: number): number {
    return index + 1;
  }

  deleteVendor(id: number) {
    console.log(id);
    if (this.vendorIds.includes(id)) {
      const dialogRef = this.dialog.open(DeleteAlertComponent);
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.userService.deleteVendorById(id).subscribe(
            (resp: any) => {
              console.log('Vendor deleted successfully');
            },
            (error: any) => {
              console.log('Failed to delete vendor');
            }
          );
        } else {
          console.log('Deletion canceled by user');
        }
      });
    } else {
      console.log('Invalid vendor ID');
    }
  }
}
