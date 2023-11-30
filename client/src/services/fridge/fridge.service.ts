import { Injectable } from '@angular/core';
import { Ingredient } from '@interfaces';
import { Observable } from 'rxjs';
import { HttpClientService } from './../http-client/http-client.service';

/**
 * Service for managing the fridge.
 */
@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  public apiIngredientsList: Ingredient[] = [];

  constructor(private httpClientService: HttpClientService) {}

  /**
   * Retrieves the list of ingredients from the API.
   * @returns An Observable that emits an array of Ingredient objects.
   */
  getIngredientsData(): Observable<Ingredient[]> {
    return this.httpClientService.get<Ingredient[]>('fridge');
  }

  /**
   * Retrieves the locally stored ingredients from the browser's localStorage.
   * @returns A Set containing the names of the locally stored ingredients.
   */
  getLocallyStoredIngredients(): Set<string> {
    const localIngredients = localStorage.getItem('userIngredients');
    if (localIngredients != null) {
      return new Set<string>(localIngredients.split(','));
    } else {
      return new Set<string>();
    }
  }
}
