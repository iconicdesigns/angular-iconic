import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconicBadge } from './badge';

@NgModule({
    imports: [CommonModule, IconicBadge],
    exports: [IconicBadge]
})
export class IconicBadgeModule {}