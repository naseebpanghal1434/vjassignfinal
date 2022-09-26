import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ShowItemsComponent } from './show-items/show-items.component';
import { VoiceApiComponent } from './voice-api/voice-api.component';

// import { MatSelectModule } from "@angular/material/select";
// import {MatButtonModule} from '@angular/material/button'
// import {MatTableModule} from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    ItemsTableComponent,
    ShowItemsComponent,
    VoiceApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatTableModule,
    // MatFormFieldModule,
    //MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
