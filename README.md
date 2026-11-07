# Algorithms

This repo is to deeply learn about what makes code efficient, durable, and scalable. This includes data structures, too.

## Rules (AI-generated custom for me)

1. One timer: the 45-minute session

Set it before you open anything. Phone in another room; standing and pacing are fine. At 45 you stop, with one exception: if you are literally typing the last lines and know they’re right, finish (under five minutes). Otherwise stop even on the tip of your tongue, especially then. Leave one comment on the card: where you are and what you’d try next. Then gear-shift to whatever is next in the day.

2. The 25-minute stuck clock (not a timer)

It starts when the tests are written and you begin the solution function. Write the start time as a comment at the top of the file (// started 7:12). If 25 minutes pass with no working approach, you read the solution (rule 5). If you solve it sooner, the clock never mattered. Tests, runner hiccups, syntax errors, and warmups are all outside the clock.

3. Attempt before anything (active recall)

Blank function first, every problem. Five minutes of thinking before typing. Write the approach as a one-to-three-line comment at the top of the file, in your own words, before any code. Neetcode videos come after an attempt or after the stuck clock, never before.

4. Say it out loud

Approach and time/space big-O, spoken, before coding each problem. Not for warmups.

5. Reading a solution

Read it once. Close it. Write no more code on that problem this session. Commit what you have as <problem>: attempt 1 (read solution). Tomorrow: delete the function body and approach comment, keep the signature and tests, rewrite from memory. The redo is the work; the first attempt was reconnaissance. One line on the card about what tripped you, as data.

6. Tests first, three asserts, five minutes

Write the test before the function. Normal case: the problem’s own example, verbatim. Empty input: [], "", new Map(), with whatever the problem says it should return (if it doesn’t say, decide and write it in the comment). One edge case from this menu: single element, all the same, duplicates, negatives, answer at the first or last position. Watch it fail, then make it pass. If a test takes longer than five minutes, that’s a tooling problem; fix it without guilt and without the stuck clock.

7. One file per problem, git is the history

<pattern>/<problem>.js and <problem>.test.js, named and signed exactly like LeetCode (function twoSum(nums, target)) so the file pastes into LeetCode unchanged if you want its judge as a final check. Never a second file for the same problem. Unfinished at 45? Keep the file, continue next session. Commit once per problem, message = problem name plus what happened (two-sum: solved, two-sum: redo 7d clean).

8. Spaced repetition: 1 → 7 → 30

A problem is done after three clean redos: one day after first solving it (or after reading a solution), seven days after that, thirty days after that. Each is a Redo card with a due date. Redo mechanics are rule 5’s: body and approach comment deleted, tests kept, rewrite from memory. Clean means no peeking at anything, finished well under 25, tests green. Hesitation is fine; looking isn’t. Not clean → back to day 1.

9. One pattern at a time, Neetcode order, no skipping

Mediums in a pattern unlock only after its easies have passed their 7-day redo. This removes the “take the hardest thing to prove myself” option on purpose.

10. Interleave from the second pattern on

Redo cards don’t name the pattern (“Redo: Valid Palindrome”, not “Redo: Two Pointers”). Recognizing which tool to reach for is the interview skill; folders labeled by pattern hide it, so the redo has to bring it back.

11. One pattern card per folder

<pattern>/README.md, and only that. After each problem, one or two sentences in your own words: when to reach for this, what it looks like in code, the pitfall you hit. That’s the generalization step, and it’s where a writer has an unfair advantage. No per-problem markdown files; the solution file’s header comment is the problem-level note.

12. Three places, three jobs

Approach and start time → header comment in the solution file. Where I stopped, what tripped me, how long it took → card comments. Pattern generalizations → the pattern README.md. If you’re unsure where something goes, it’s a card comment.

13. Hints in tiers

When you ask me: (1) which warmup primitive this uses, (2) the problem restated to point at the shape, (3) the approach in words, (4) the solution. You stop me at the first one that unsticks you. Tier 4 counts as reading the solution (rule 5).

14. No streak guilt, no doubling up

A missed day means the next session is just the next session. Overdue Redo cards go first, that’s all. No second session to catch up, no widening the sprint goal.

15. Points are velocity, not a grade

3 of 5 → next sprint’s goal is 4. 5 with room to spare → 6. The number describes you; you don’t chase it.

## test

run `npm test` to test code
