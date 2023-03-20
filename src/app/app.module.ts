import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { WhyComponent } from './why/why.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CtaComponent } from './cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    WhyComponent,
    AchievementComponent,
    TestimonialComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
