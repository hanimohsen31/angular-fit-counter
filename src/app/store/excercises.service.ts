import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  constructor() {
    this.getDataFromLocalStorage();
  }

  placeolderCounter: any = {
    ex: '',
    img: '',
    title: '',
    counter: [{ c1: 10, c2: 10, c3: 10, date: '20231230:5:52' }],
  };

  allListData: any = new BehaviorSubject([this.placeolderCounter]);
  allListData$ = this.allListData.asObservable();

  getDataFromLocalStorage() {
    let getLocalStorage = localStorage.getItem('excercises');
    if (getLocalStorage) {
      let parsed: any = JSON.parse(getLocalStorage);
      this.allListData.next(parsed);
    }
  }

  save(ex: string, element: any) {
    let curruntValue: any = this.allListData.getValue(); // [......]
    let list: any = [];
    let isExisted = curruntValue.find((elm: any) => elm.ex == ex);
    if (isExisted) {
      let index = curruntValue.findIndex((elm: any) => elm.ex == ex);
      curruntValue[index] = element;
      list = [...curruntValue];
    } else {
      list = [...curruntValue, element];
    }
    this.allListData.next([]);
    this.allListData.next(list);
    localStorage.setItem('excercises', JSON.stringify(list));
  }

  remove(ex: string, indx: number) {
    let curruntValue: any = this.allListData.getValue(); // [......]
    let list: any = [...curruntValue];
    let isExisted = curruntValue.find((elm: any) => elm.ex == ex);
    if (isExisted) {
      isExisted.counter.splice(indx, 1);
      let index = curruntValue.findIndex((elm: any) => elm.ex == ex);
      curruntValue[index] = isExisted;
      list = [...curruntValue];
    }
    this.allListData.next([]);
    this.allListData.next(list);
    localStorage.setItem('excercises', JSON.stringify(list));
  }
}
