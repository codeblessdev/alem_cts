import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: "home",
        loadComponent: () => import('./componentes/home/home.component').then(
            (m) => m.HomeComponent,
        ),
    },
    {
        path: "obrascomerciales",
        loadComponent: () => import('./componentes/obras/obras-comerciales/obras-comerciales.component').then(
            (m) => m.ObrasComercialesComponent,
        ),
    },
    {
        path: "obrasindustriales",
        loadComponent: () => import('./componentes/obras/obras-industriales/obras-industriales.component').then(
            (m) => m.ObrasIndustrialesComponent,
        ),
    },
    {
        path: "obraspublicas",
        loadComponent: () => import('./componentes/obras/obras-publicas/obras-publicas.component').then(
            (m) => m.ObrasPublicasComponent,
        ),
    },
    {
        path: "obrasvarias",
        loadComponent: () => import('./componentes/obras/obras-particulares/obras-particulares.component').then(
            (m) => m.ObrasParticularesComponent,
        ),
    },
];