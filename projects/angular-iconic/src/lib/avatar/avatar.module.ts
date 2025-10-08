import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconicAvatar } from './avatar';

@NgModule({
    imports: [CommonModule, IconicAvatar],
    exports: [IconicAvatar]
})
export class IconicAvatarModule {}