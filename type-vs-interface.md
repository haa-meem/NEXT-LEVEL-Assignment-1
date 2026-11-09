# What are the core differences between `type` aliases and `interface` in TypeScript?

The type and interface, both use for data stucture of typescript. They looks very identical. However, they have some important differences. These differences helps us to write better and organized code.

## Differences

A `type` alias is more flexible than `interface`. It can be used to define objects, unions, intersections, primitive types and tuples.

```typescript
type Status = "success" | "error" | "loading";

type Admin = { name: string } & { role: string };
```

An `interface` is mainly used to describe the structure of objects. We can also extend one interface by another.

```typescript
interface User {
  name: string;
  age: number;
}

interface Student extends User {
  studentId: number;
}
```

# When should one use one and when should one use the other?

When dealing with an object structure, I'm typically looking for `interface` and when I want to extend or inherit it, I like to use `type` for unions, intersections and more complex type combinations.
