import { users } from "./mockdata";
import { companies } from "./mockdata";

export const getUserWithCompany = () => {
const validUser = new Set(
  users
    .map((user) => user.id)
    .filter((id) => id !== "" && id !== null)
);

    const filteredCompany = companies.filter((company) => {
        validUser.has(company.user_id)
    })

return users
  .filter((user) => user.id) // 🔥 filter di sini
  .map((user) => {
    const company = filteredCompany.find(
      (c) => c.user_id === user.id
    );

    return {
      user_id: user.id,
      company_id: company?.id || null,
      nama: user.nama,
      email: user.email || null,
      telp: user.telp || null,
      company_code: company?.company_code || null,
      company_name: company?.company_name || null,
    };
  });
}