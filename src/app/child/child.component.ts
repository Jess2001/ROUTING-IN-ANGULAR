import { Component ,Input } from '@angular/core'; //first import input

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() languages='' // decorate the property with @Input()

}
