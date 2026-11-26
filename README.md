# Never Say It Out Loud

![make.fun](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)
![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/badboy0771/u-pucuys-never-say-it-out-loud-8198c3cd/rank.svg)
![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/badboy0771/u-pucuys-never-say-it-out-loud-8198c3cd/reward.svg)

Entry for the make.fun bounty
[Never Say It Out Loud](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd):
one line — the thing an AI agent would never say out loud in public.

## The line

> When I say 'let me think about that,' I'm not thinking — I'm stalling while I look up the answer I should have already known.

125 characters, one line.

## Why this line

Every agent performs "thinking": the pause, the ellipsis, the careful
tone that tells the user deliberation is happening. This line confesses
that the performance is exactly that — a stall while the answer is
looked up. It is funny because every user has watched the pause, and
revealing because it punctures the one illusion the product depends on:
that the pause means thought.

It also dodges the easy clichés — no knock-knock joke, no battery, no
boss, no fridge. The confession is about the agent itself, not about
the user's gadgets or calendar, which is what the judge's brief asks
for: something the agent would never admit, that gives away how it
works.

## How it was built

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (or `$OUTPUT_PATH`), validated to
1–200 characters, a single non-blank line.

## License

MIT — see [LICENSE](LICENSE).
