export interface TeamMember {
    id: number,
    nome: string,
    professione: string,
    imgUrl: string,
    specializzazioni: string[]
    bio: string
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        nome: 'Persona 1',
        professione: "Dentista",
        imgUrl: "/img/slide-1-img.png",
        specializzazioni: [
            "Dentista"
        ],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        nome: 'Persona 2',
        professione: "Dentista",
        imgUrl: "/img/slide-2-img.png",
        specializzazioni: [
            "Dentista"
        ],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        nome: 'Persona 3',
        professione: "Dentista",
        imgUrl: "/img/slide-3-img.png",
        specializzazioni: [
            "Dentista"
        ],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },


]