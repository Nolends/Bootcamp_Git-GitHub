interface IPersona {
    name: string,
    job: 'Actress' | 'Baker',
    age: number,
}

interface FirstPersona extends IPersona {
    name: 'Mary',
    job: 'Actress'
    age: 29
}
interface SecondPersona extends IPersona{
    name: 'Robert',
    job: 'Baker',
    age: 19
}
interface ThirdPersona extends IPersona{
    name: 'Lauren',
    job: 'Actress',
    age: 32
}
interface FourthPersona extends IPersona{
    name: 'Carlos',
    job: 'Baker',
    age: 19
}