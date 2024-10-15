import { Component, output } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true
})
export class NavComponent {
    close = output<void>();
    items = [
        'Home',
        'About',
        'Blog',
        'All Gallaries',
        'More Collections',
        'Community',
        'Support'
    ];
}