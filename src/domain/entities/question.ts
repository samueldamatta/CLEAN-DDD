import type { Slug } from "./value-objects/slug.js";
import { Entity } from "../../core/entities/entity.js";
import type { UniqueEntityId } from "../../core/entities/unique-entity-id.js";

interface QuestionProps {
    title: string;
    content: string;
    authorId: UniqueEntityId;
    slug: Slug;
    bestAnswerId?: UniqueEntityId;
    createdAt: Date;
    updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {}