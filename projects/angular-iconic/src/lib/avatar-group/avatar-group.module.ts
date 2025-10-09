import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconicAvatarGroup } from './avatar-group';

@NgModule({
    imports: [CommonModule, IconicAvatarGroup],
    exports: [IconicAvatarGroup]
})
export class IconicAvatarGroupModule {}