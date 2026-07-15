import { Component } from '@angular/core';
import { EXTERNAL_LINKS } from '../../config/external-links';

@Component({
  selector: 'app-download-app',
  imports: [],
  standalone: true,
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.css'],
})
export class DownloadAppComponent {
  playStoreUrl = EXTERNAL_LINKS.playStore;
  appPublished = EXTERNAL_LINKS.appPublished;
}
