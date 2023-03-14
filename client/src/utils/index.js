import { surpriseMePrompts } from "../constants";
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // to avoid same prompt twice
    if (randomPrompt === prompt) {
        return getRandomPrompt(randomPrompt);
    }

    return randomPrompt;

}