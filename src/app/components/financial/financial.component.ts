import { Component } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent {
  reportSectionId = '39b3c541b90d0db046'; // ID de la section de rapport par défaut

  changePage(pageName: string) {
    // Ici, vous pouvez implémenter la logique pour obtenir l'ID de section de rapport en fonction du nom de la page
    // Pour cet exemple, nous utilisons des ID de section de rapport statiques
    if (pageName === 'Page1') {
      this.reportSectionId = '39b3c541b90d0db046'; // ID de section de rapport pour la page 1
    } else if (pageName === 'Page2') {
      this.reportSectionId = 'your_report_section_id_for_page_2'; // ID de section de rapport pour la page 2
    }
    // Ajoutez d'autres conditions si nécessaire pour d'autres pages
  }
}
