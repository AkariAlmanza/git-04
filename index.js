const post = [
    {
      userId: 1,
      id: 1,
      title: 'Uno',
      body: 'Uno'
    },
    {
      userId: 1,
      id: 2,
      title: 'Dos',
      body: 'Dos'
    },
    {
        userId: 3,
        id: 3,
        title: 'Tres',
        body: 'Tres'
    },
    {
        userId: 2,
        id: 4,
        title: 'Cuatro',
        body: 'Cuatro'
    },
    {
        userId: 5,
        id: 5,
        title: 'Cinco',
        body: 'Cinco'
    },
    {
        userId: 4,
        id: 6,
        title: 'Seis',
        body: 'Seis'
    },
    {
        userId: 1,
        id: 7,
        title: 'Siete',
        body: 'Siete'
    },
    {
        userId: 6,
        id: 8,
        title: 'Ocho',
        body: 'Ocho'
    },
    {
        userId: 2,
        id: 9,
        title: 'Nueve',
        body: 'Nueve'
    },
    {
        userId: 6,
        id: 10,
        title: 'Diez',
        body: 'Diez'
    }
]

const findPostById = id => {
    //const post = posts.find((item) => item.id === id)
    return new Promise((resolve, reject) => {
      /*
        if (post) {
            resolve(post)
        } else {
            reject(`No se encontro el post con id: ${id}`)
        }
     */
      setTimeout(() => {
        const post = posts.find((item) => item.id === id)
        post  ? resolve(post) : reject(`No se encontro el post con id: ${id}`)
      }, 5000)
    })
}

const buscar = async () => {
    //const post1 = await findPostById(3)
    //const post2 = await findPostById(4)
    //const post3 = await findPostById(1)
    const allPost = await Promise.all([findPostById(3)], [findPostById(2)], findPostById(9))
    console.log('@@ post => ', post1, post2, post3)
}

buscar()