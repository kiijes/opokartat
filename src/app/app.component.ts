import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ohjauksen kartat';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
      // Vaihda JAMK-logoon
      this.matIconRegistry.addSvgIcon(
        "jamkhome",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/jamk_fi_tunnus_sininen.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "jkl",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/jkl.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "online",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/online.svg")
      );
    }
  
}
