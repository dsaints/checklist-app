import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: ' aa-bb-cc-dd' },
  { name: 'Saúde', guid: ' aa-bb-cc-dd' },
  { name: 'Trabalho', guid: ' aa-bb-cc-dd' },
  { name: 'Outros', guid: ' aa-bb-cc-dd' },
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public editCategory(category: Category) {
    console.log('Edit new category clicke');
  }

  public deleteCategory(category: Category) {
    this.dialog
      .open(DialogComponent, {
        disableClose: true,
        data: {
          dialogMsg: 'Você tem certeza que gostaria de apagar a categoria ?',
          leftButtonLabel: 'Cancelar',
          rightButtonLabel: 'Sim',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          console.log('Categoria apagada com sucesso');
        } else {
          console.log('Categoria não apagada');
        }
      });
  }

  public createNewCategory() {
    console.log('Create new category clicke');
  }
}
