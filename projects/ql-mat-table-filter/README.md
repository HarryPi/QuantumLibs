## Filter input for Angular Material tables

### Installation
```npm install --save ql-mat-table-filter@latest```

A simple filter library for the angular material tables. Compatible with angular material colour 
schemes.

#### Required parameters

Takes a predicate function for filtering, the function must return a boolean value.
```action: <T>(data: T, filterValue: string) => boolean;```

Also a references to the MatTableDataSource must be passed as input
```
<ql-mat-table-filter  [dataSource]="dataSource">

</ql-mat-table-filter>
```

#### Optional parameters
Can customize the input form look based on the material form design.

```
<ql-mat-table-filter [appearance]="'fill' | 'outline' | 'standard'">
</ql-mat-table-filter>
```

A label can be provided like any other MatInput form
```
<ql-mat-table-filter [label]="'Type here to filter!'">

</ql-mat-table-filter>
```
