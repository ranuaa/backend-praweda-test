Select
a.User_id,
b.Company_id,
a.Nama,
a.Email, 
a.Telp,
b.Company_code,
b.Company_name 
from User a
left join Company b on a.id = b.User_id
where 
a.id != null and a.id != ""