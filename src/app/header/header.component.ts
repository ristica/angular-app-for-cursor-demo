import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, signal } from "@angular/core";
import { slideAnimation } from "../animations/slide.animation";
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [NavComponent],
    animations: [
        trigger('slideToggle', [
            transition('* => *', [
                useAnimation(slideAnimation)
            ])
        ])
    ]
})
export class HeaderComponent {
    protected showMenu = signal(false);
}
