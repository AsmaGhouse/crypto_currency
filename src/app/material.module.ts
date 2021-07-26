import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
    imports:[MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatTableModule,MatInputModule,
        MatListModule,MatSelectModule,MatDialogModule],
    exports:[MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatTableModule,MatInputModule,
        MatListModule,MatSelectModule,MatDialogModule]
})

export class MaterialModule{

}