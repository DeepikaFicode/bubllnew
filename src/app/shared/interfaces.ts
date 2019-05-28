import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ISettingsEmail {
    id: number;
    email: string;
    fromPage:number;
    toPage:number;

}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
