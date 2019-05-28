import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {

  property: string = null;
  direction = 1;
  constructor() { }

  sort(collection: any[], prop: any) {
    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;

    collection.sort((a: any, b: any) => {
      let aVal: any;
      let bVal: any;

      // Handle resolving complex properties such as 'state.name' for prop value
      if (prop && prop.indexOf('.') > -1) {
        aVal = this.resolve(prop, a);
        bVal = this.resolve(prop, b);
      } else {
        aVal = a[prop];
        bVal = b[prop];
      }

      // Fix issues that spaces before/after string value can cause such as ' San Francisco'
      if (this.isString(aVal)) { aVal = aVal.trim().toUpperCase(); }
      if (this.isString(bVal)) { bVal = bVal.trim().toUpperCase(); }

      if (aVal === bVal) {
        return 0;
      } else if (aVal > bVal) {
        return this.direction * -1;
      } else {
        return this.direction * 1;
      }
    });
  }

  isString(val: any): boolean {
    return (val && (typeof val === 'string' || val instanceof String));
  }

  filter<T>(items: T[], data: string, props: string[]) {
    return items.filter((item: T) => {
      let match = false;
      for (const prop of props) {
        if (prop.indexOf('.') > -1) {
          const value = this.resolve(prop, item);
          if (value && value.toUpperCase().indexOf(data) > -1) {
            match = true;
            break;
          }
          continue;
        }

        if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
          match = true;
          break;
        }
      }
      return match;
    });
  }

  resolve(path: string, obj: any) {
    return path.split('.').reduce((prev, curr) => {
      return (prev ? prev[curr] : undefined);
    }, obj || self);
  }
}
