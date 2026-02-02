---
title: "Hello, World"
date: 2024-01-15
description: "A first post to test the blog setup."
---

This is the first post on this blog. A simple test to verify that everything is working correctly.

## Code Highlighting

Here's some TypeScript to test syntax highlighting:

```typescript
interface Post {
  title: string;
  date: Date;
  content: string;
}

function formatPost(post: Post): string {
  const formatted = `# ${post.title}
Published: ${post.date.toLocaleDateString()}

${post.content}`;

  return formatted;
}

const examplePost: Post = {
  title: "Hello, World",
  date: new Date(),
  content: "Welcome to the void."
};

console.log(formatPost(examplePost));
```

And some CSS:

```css
.void {
  background: #0a0a0a;
  color: #e8e4dc;
}
```

## Images

Images should render cleanly within the content width.

## Lists

Things that matter:

- Simplicity
- Negative space
- The weight of silence

## Blockquotes

> The void is not empty. It is full of potential.

That's it for now.
