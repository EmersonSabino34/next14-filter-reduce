export default interface Aula {
    id: string;
    nome: string;
    curso: string;
    duracao: number;
    status: 'publicado' |  'rascunho' |  'desativada';
}