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

    ask(question: string): Observable<AskResponse> {
        return this.http.post<AskResponse>('http://localhost:8080/api/oracle/ask', { question });
    }
}
