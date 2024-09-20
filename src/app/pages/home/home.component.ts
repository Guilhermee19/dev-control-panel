import { Component } from '@angular/core';
import { SharedModule } from '../../components/shared.module';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, ButtonModule, TagModule, NgxMaskDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks = [
    {
      title: 'Memorial do Carmo',
      deadline: '2024-09-24',
      status: 'WAITING',
      price: 1800
    },
    {
      title: 'Memorial do Carmo',
      deadline: '2024-09-24',
      status: 'IN_PROGRESS',
      price: 1800
    },
    {
      title: 'Memorial do Carmo',
      deadline: '2024-09-24',
      status: 'CLOSED',
      price: 1800
    },
    {
      title: 'Memorial do Carmo',
      deadline: '2024-09-24',
      status: 'FINALISED',
      price: 1800
    }
  ]
}
