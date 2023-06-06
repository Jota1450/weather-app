import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AnimatedCounterComponent } from './animated-counter/animated-counter.component';

@NgModule({
  declarations: [AutoCompleteComponent, AnimatedCounterComponent],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [AutoCompleteComponent, AnimatedCounterComponent],
})
export class AutoCompleteModule {}
