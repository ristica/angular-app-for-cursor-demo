import { transition, trigger, useAnimation } from '@angular/animations';
import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import { Component, afterNextRender, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { slideAnimation } from "../animations/slide.animation";
import { DescriptionFormComponent } from "./description-form/description-form.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { ShareComponent } from "./share/share.component";

export interface Image {
  id: number;
  description: string;
  shareMessage: string;
  shareLink: string;
  price: number;
}

type AccountType = 'none' | 'free' | 'paid';

@Component({
    selector: 'app-slider',
    standalone: true,
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    imports: [ NgTemplateOutlet, ShareComponent, AsyncPipe, PhotoDetailsComponent, DescriptionFormComponent ],
    animations: [
        trigger('slideToggle', [
            transition('* => *', [
                useAnimation(slideAnimation)
            ])
        ])
    ]
})
export class SliderComponent {
    protected images: Image[] = [
        {
            id: 1,
            description: 'A neon frog',
            shareMessage: 'Hey, check out this cool image of a neon frog',
            shareLink: 'https://stackblitz.com/edit/stackblitz-starters-xetajy?file=src%2Fslider%2Fdescription-form%2Fdescription-form.component.html',
            price: 99.99
        },
        {
            id: 2,
            description: 'A dog on a surfboard',
            shareMessage: 'Hey, check out this cool image of a dog on a surfboard',
            shareLink: 'https://stackblitz.com/edit/stackblitz-starters-xetajy?file=src%2Fslider%2Fdescription-form%2Fdescription-form.component.html',
            price: 104.99
        },
        {
            id: 3,
            description: 'A chinchilla with sunglasses',
            shareMessage: 'Hey, check out this cool image of a chinchilla with sunglasses',
            shareLink: 'https://stackblitz.com/edit/stackblitz-starters-xetajy?file=src%2Fslider%2Fdescription-form%2Fdescription-form.component.html',
            price: 89.99
        },
        {
            id: 4,
            description: 'A cool cat wearing a jacket',
            shareMessage: 'Hey, check out this cool image of a cool cat wearing a jacket',
            shareLink: 'https://stackblitz.com/edit/stackblitz-starters-xetajy?file=src%2Fslider%2Fdescription-form%2Fdescription-form.component.html',
            price: 94.99
        }
    ];
    protected selectedImageId = signal(1);
    protected $selectedImage = new BehaviorSubject(this.images[0]);
    protected selectedImage = signal<Image>(this.images[0]);
    protected animationDirection = signal<'right' | 'left'>('right');
    protected animationDisabled = signal(true);
    protected isAnonymous = false;
    protected accountType: AccountType = 'paid';

    constructor() {
        afterNextRender(() => {
            if (this.animationDisabled()) {
                this.animationDisabled.set(false);
            }
        });
    }

    protected previous() {
        if (this.selectedImageId() > 1) {
            this.animationDirection.set('left');
            this.selectedImageId.set(this.selectedImageId() - 1);
            this.setSelectedImage();
        }
    }

    protected next() {
        if (this.selectedImageId() < 4) {
            this.animationDirection.set('right');
            this.selectedImageId.set(this.selectedImageId() + 1);
            this.setSelectedImage();
        }
    }

    protected animationEvent(state: 'start' | 'done') {
        // console.log(`slideToggle: ${state}`);
    }

    private setSelectedImage() {
        const selectedImage = this.images.find(i => i.id === this.selectedImageId());
        if (selectedImage) {
            this.$selectedImage.next(selectedImage);
            this.selectedImage.set(selectedImage);
        }
    }
}
