import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    private overlayRef?: OverlayRef;

    constructor(private overlay: Overlay) {
    }

    open(portal: CdkPortal) {
        console.log(portal);
        this.overlayRef = this.overlay.create({ hasBackdrop: true });
        this.overlayRef.attach(portal);
        this.overlayRef.backdropClick().subscribe(() => {
            this.close();
        });
    }

    close() {
        this.overlayRef?.detach();
    }
}
