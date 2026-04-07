export class Slug {
    public value: string;
    
    constructor(value: string) {
        this.value = value;
    }

    /**
     * Receives a string and normalizes it to create a slug.
     * 
     * Examples:
     * - "An example title" -> "an-example-title"
     *
     * @param text - The text to create a slug from
     */

    static createFromText(text: string) {
        const slugText = text
            .normalize("NFKD")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "")
            .replace(/_/g, "-");

        return new Slug(slugText);
    }
}