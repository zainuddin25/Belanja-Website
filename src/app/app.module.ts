import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextComponent } from './contact/contect.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProdukComponent } from './produk/produk.component';
import { TokoComponent } from './toko/toko.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ContentComponent,
    ProdukComponent,
    TokoComponent,
    ContextComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
