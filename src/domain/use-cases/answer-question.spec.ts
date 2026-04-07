import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question.js";
import { Answer } from "../entities/answer.js";
import type { AnswersRepository } from "../repositories/answers-repository.js";

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) =>{
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        instructorId: '1',
        questionId: '1',
        content: 'Answer content'
    })

    expect(answer.content).toEqual('Answer content')
})