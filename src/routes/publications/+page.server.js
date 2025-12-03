import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import { resolve } from 'path';

export async function load() {
    // Use process.cwd() to get the project root during build
    const yamlPath = resolve(process.cwd(), 'src/lib/data/publications.yaml');
    const yamlContent = readFileSync(yamlPath, 'utf-8');
    const publications = yaml.load(yamlContent);

    return {
        publications
    };
}

export const prerender = true;
