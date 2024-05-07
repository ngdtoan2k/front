import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { userservice } from './userservice.service';
import { FormsModule } from '@angular/forms';
import { UserdetailComponent } from './userdetail/userdetail.component';

@NgModule({
    declarations: [
        AppComponent
       
    ],
    providers: [userservice],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserListComponent,
        UserdetailComponent,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
