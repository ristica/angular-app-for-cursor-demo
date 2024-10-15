import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, effect, input } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-description-form',
    templateUrl: './description-form.component.html',
    styleUrl: './description-form.component.scss',
    standalone: true,
    imports: [ 
        TextFieldModule,
        ReactiveFormsModule,
        FormsModule 
    ]
})
export class DescriptionFormComponent {
    imageDescription = input<string | null>();
    protected description = new FormControl<string>('');

    constructor() {
        effect(() => {
            this.description.setValue(this.imageDescription()!);
        });
    }
}
