enum PersonCategory {
    Infant,
    Child,
    Adult
}

interface IPerson {
    Category: PersonCategory;
    canSignContract(): boolean;
    printDetails(): void;
}
