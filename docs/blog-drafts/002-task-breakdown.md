# Breaking Down a Figma-to-Next.js Project into Practical GitHub Issues

Before starting implementation, I decided to split the Wagou website project into smaller GitHub Issues.

The reason is simple: if I build the whole page at once, it becomes hard to review, hard to explain, and hard to learn from. Since this project is also intended as a portfolio piece, I want the GitHub history to show how the work was planned and delivered.

## What I focused on

I used one rule for task sizing:

> One issue should usually become one pull request.

That means each issue should have a clear result, a clear review point, and a clear way to verify it.

For example, instead of creating one large issue called "Implement the top page", I split the work into smaller parts:

- design tokens and asset strategy
- layout shell and fixed navigation
- first-view section
- concept section
- service section
- menu section and modal UI
- flow section
- supporting sections such as blog, media, access, and footer
- microCMS integration
- responsive QA and accessibility
- deployment and portfolio README

## Why this matters

This gives me a development flow that is closer to real work.

Each pull request can explain:

- which Figma frame was used
- what changed in the code
- how the result was checked
- what trade-offs were made

It also makes the project easier to write about. After each task, I can write a short note about what I learned rather than trying to remember everything at the end.

## What I learned

Task breakdown is not just project management. It is also a learning tool.

When the task is small, I can understand the design, implement it, verify it, and explain it. That cycle is much better than asking AI to generate a large amount of code all at once.

For this project, I want to use AI as a development partner, but I still want to understand each decision. Splitting the work into issues helps keep that balance.

## Next step

The next step is to create these issues in GitHub and start with the first implementation task:

```txt
feat: implement design tokens and asset strategy
```

This should give the project a strong visual and technical foundation before building the actual Figma sections.
