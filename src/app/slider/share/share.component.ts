import { animate, style, transition, trigger } from "@angular/animations";
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgTemplateOutlet } from "@angular/common";
import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'app-share',
    standalone: true,
    templateUrl: './share.component.html',
    styleUrl: './share.component.scss',
    animations: [
        trigger('toggle', [
            transition(':enter', [
                style({opacity: 0, transform: 'scale(0.9)'}),
                animate('150ms ease-in-out', style({
                    opacity: 1, transform: 'scale(1)'
                }))
            ]),
            transition(':leave', [
                animate('150ms ease-in-out', style({
                    opacity: 0, transform: 'scale(0.9)'
                }))
            ])
        ])
    ],
    imports: [ NgTemplateOutlet, ClipboardModule ]
})
export class ShareComponent {
    message = input.required<string>();
    protected messageVisible = signal(false);
    protected copied = signal(false);
}