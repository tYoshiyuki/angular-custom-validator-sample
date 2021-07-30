import { Injectable } from '@angular/core';
import { ValidatorFn } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  /**
   * コントロールの値が一致しているかどうかを検証するためのバリデータを取得します。
   * @param c1 対象となるフォームコントロールの名称1
   * @param c2 対象となるフォームコントロールの名称2
   */
  public GetMatchFieldValidator(c1: string, c2: string): ValidatorFn {
    return (control) => {
      const val1 = control.get(c1)?.value;
      const val2 = control.get(c2)?.value;
      if (val1 === val2) {
        return { matchField: true }
      }
      return null;
    };
  }
}
