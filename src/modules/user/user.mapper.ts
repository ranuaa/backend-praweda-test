export const userMapper = (u : any) => {
    return {
            name: `${u.name.title}, ${u.name.first} ${u.name.last}`,
            location: `${u.location.street.number}, ${u.location.street.name}, ${u.location.city}, ${u.location.state}, ${u.location.country}`,
            email: u.email,
            age: u.registered.age,
            phone: u.phone,
            cell: u.cell,
            picture: [
              u.picture.large,
              u.picture.medium,
              u.picture.thumbnail,
            ]
    }
}