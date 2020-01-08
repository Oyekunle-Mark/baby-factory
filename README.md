# random-factory

A tiny demonstration of the factory design pattern.

Most of the code here is from the book `Mastering Typescript` by Nathan Rozentals.

## Business requirements

As an example, let's assume that our business analyst gives us the following requirements:

1. You are required to categorize people, given their date of birth, into three
different age groups—Infants, Children, and Adults.
2. Indicate with a true or false flag whether they are of a legal age to sign a contract.
3. A person is deemed to be an infant if they are less than 2 years old.
4. Infants cannot sign contracts.
5. A person is deemed to be a child if they are less than 18 years old.
6. Children cannot sign contracts either.
7. A person is deemed to be an adult if they are more than 18 years of age.
8. Only adults can sign contracts.
9. For reporting purposes, each type of person must be able to print their details.

    This should include the following:

    - Date of birth
    - Category of person
    - Whether they can sign contracts or not
