import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, filter, switchMap, take, throwError } from "rxjs";
import { AuthService } from "./service/auth.service";
import { request } from "http";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor{
    private isRefreshingToken = false;
    
    constructor(
        private inject: Injector, 
        private router: Router,
        private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }
}