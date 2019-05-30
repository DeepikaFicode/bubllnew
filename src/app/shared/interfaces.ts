import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ISettingsEmail {
    // emails: { data: any; total: any; };
    data: any;
    id: number;
    total: number;
    email: string;
    fromPage: number;
    toPage: number;
}
export interface ISettingsEmails {
    data: Array<ISettingsEmail>;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface User {
    data: string;
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  }
export interface LanguageList {
    languageId: number;
    name: string;
    code: string;
    path: string;
    status: boolean;
    createdBy: string;
    createdDatetime: string;
  }
export interface CreateCompany {
  companyId: number;
  name: string;
  email: string;
  phone: number;
  contactPerson: string;
  allocatedLicencesPerSite: string;
  companyLicenseValidFrom: number;
  companyLicenseValidTo: number;
  logoImg: string;
  backgroundImg: string;
  isSupport: string;
  controllerChangeLimit: number;
  address1: string;
  address2: string;
  town: string;
  county: string;
  postalCode: string;
  language: number;
  languageId: number;
  languageName: number;
  defaultLanguageId: number;

  }

