import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},  
    {path: 'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModel {

}