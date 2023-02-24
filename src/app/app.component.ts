import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alios';
  imagemProfile: string = "/assets/profile.jpg"
  btnFlag: boolean = false
  faCircle = faCircle


}
