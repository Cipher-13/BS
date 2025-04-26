import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../Shared/Layout/header/header.component";
import { NavComponent } from "../../../../Shared/Layout/nav/nav.component";
import { SharedModule } from '../../../../Shared/Modules/shared/shared.module';
import { LastArticleComponent } from "../last-article/last-article.component";
import { FooterComponent } from "../../../../Shared/Layout/footer/footer.component";
import { NewReleasesComponent } from "../new-releases/new-releases.component";
import { CategoriesComponent } from "../categories/categories.component";
import { FeaturedComponent } from "../featured/featured.component";
import { SaleComponent } from "../sale/sale.component";
import { SubscribtionComponent } from "../subscribtion/subscribtion.component";
import { PrefaceComponent } from "../preface/preface.component";

@Component({
  selector: 'app-master',
  imports: [HeaderComponent, NavComponent, SharedModule, LastArticleComponent, FooterComponent, NewReleasesComponent, CategoriesComponent, FeaturedComponent, SaleComponent, SubscribtionComponent, PrefaceComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
