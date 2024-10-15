import { CurrencyPipe } from "@angular/common";
import { Component, computed, input } from "@angular/core";

@Component({
    selector: 'app-purchase-form',
    standalone: true,
    templateUrl: './purchase-form.component.html',
    styleUrl: './purchase-form.component.scss',
    imports: [
        CurrencyPipe
    ]
})
export class PurchaseFormComponent {
    price = input.required<number>();
    protected shipping = computed(() => this.price() * 0.085);
    protected total = computed(() => this.price() + this.shipping());
}