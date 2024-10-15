import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appLongPress]',
    standalone: true
})
export class LongPressDirective {
    @HostListener('contextmenu', ['$event'])
    onMouseDown(event: MouseEvent) {
        event.preventDefault();
    }
}