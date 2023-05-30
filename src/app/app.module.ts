import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './paginas/nav/nav.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { SectionComponent } from './paginas/section/section.component';
import { PrincipalComponent } from './pag/principal/principal.component';
import { RpgComponent } from './pag/rpg/rpg.component';
import { PersonagensComponent } from './pag/personagens/personagens.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SectionComponent,
    PrincipalComponent,
    RpgComponent,
    PersonagensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
