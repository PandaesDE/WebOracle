import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductDto {
    title: string;
    affiliateUrl: string;
    imageUrl: string;
}

export interface AskResponse {
    shortAnswer: string;
    longAnswer: string;
    recommendations: ProductDto[];
}

@Injectable({
    providedIn: 'root'
})
export class OracleService {
    private http = inject(HttpClient);
    private backendPort = 8080;

    ask(question: string): Observable<AskResponse> {
        return this.http.post<AskResponse>(`/api/oracle/ask`, { question });
    }
}
