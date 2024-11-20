import { Component } from '@angular/core';
import mermaid from 'mermaid';

interface Field {
  id: number;
  name: string;
  key_type: string;
  field_id: number | false;
  table_id: number | false;
  required: boolean;
  apperance: string;
  multiple: boolean;
  position_x: number;
  position_y: number;
  size_w: number;
  size_h: number;
  final_value?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-chart-test';

  data: Field[] = [
    // Paste your data here

    {
      "id": 1,
      "name": "Hospital",
      "key_type": "field",
      "table_id": false,
      "field_id": false,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20
    },
    {
      "id": 2,
      "name": "Hospital Name",
      "key_type": "label",
      "field_id": 1,
      "table_id": false,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Hospital Name"
    },
    {
      "id": 3,
      "name": "Bangkok Hospital",
      "key_type": "value",
      "field_id": 1,
      "table_id": false,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Bangkok Hospital"
    },
    {
      "id": 4,
      "name": "Billing Table",
      "key_type": "table",
      "field_id": false,
      "table_id": false,
      "required": true,
      "apperance": "always",
      "multiple": true,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Bangkok Hospital"
    },
    {
      "id": 5,
      "name": "Item No",
      "key_type": "table_field",
      "table_id": 4,
      "field_id": false,
      "required": false,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20
    },
    {
      "id": 6,
      "name": "Item No",
      "key_type": "label",
      "field_id": 5,
      "table_id": 4,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Item No"
    },
    {
      "id": 7,
      "name": "1",
      "key_type": "value",
      "field_id": 5,
      "table_id": 4,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "1"
    },
    {
      "id": 8,
      "name": "Item Name",
      "key_type": "table_field",
      "table_id": 4,
      "field_id": false,
      "required": false,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20
    },
    {
      "id": 9,
      "name": "Item Name",
      "key_type": "label",
      "field_id": 8,
      "table_id": 4,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Item No"
    },
    {
      "id": 10,
      "name": "Paracetamol 500mg",
      "key_type": "value",
      "field_id": 8,
      "table_id": 4,
      "required": true,
      "apperance": "always",
      "multiple": false,
      "position_x": 0,
      "position_y": 10,
      "size_w": 100,
      "size_h": 20,
      "final_value": "Paracetamol 500mg"
    }

  ];



  diagram: string = '';

  ngAfterViewInit(): void {
    this.diagram = this.generateMermaidDiagram();
    mermaid.initialize({ startOnLoad: true });
  }

  generateMermaidDiagram(): string {
    let diagram = 'graph LR;\n';

    this.data.forEach(field => {
      // If the field has a `field_id` (i.e., it's a label or value for another field)
      if (field.field_id) {
        diagram += `  ${field.field_id} --> ${field.id}[${field.name}];\n`;
      } else {
        // Otherwise, it's a standalone field
        diagram += `  ${field.id}[${field.name}];\n`;
      }
    });

    return diagram;
  }


}
