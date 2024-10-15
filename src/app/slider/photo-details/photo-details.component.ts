import { CdkPortal } from '@angular/cdk/portal';
import { Component, input, viewChild } from "@angular/core";
import { ModalService } from "../../modal/modal.service";
import { PurchaseFormComponent } from "../../purchase-form/purchase-form.component";
import { Image } from "../slider.component";

@Component({
    selector: 'app-photo-details',
    standalone: true,
    templateUrl: './photo-details.component.html',
    styleUrl: './photo-details.component.scss',
    imports: [
        CdkPortal,
        PurchaseFormComponent
    ]
})
export class PhotoDetailsComponent {
    image = input.required<Image>();
    protected modalContent = viewChild.required<CdkPortal>(CdkPortal);

    constructor(protected modal: ModalService) {
    }
}