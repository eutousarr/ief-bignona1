import { prisma } from "@/app/utils/db";


const seedContacts = async () => {
  const count = await prisma.contact.count();
  if (count === 0) {
    await prisma.contact.createMany({
      data: [
        { prenom: "Contact 1", nom: "NomContact 1", email: "contact1@gmail.com", phone: "77 530 03 61" , adresse: "contact1 home" },
        { prenom: "Contact 2", nom: "NomContact 2", email: "contact2@gmail.com", phone: "77 530 03 62" , adresse: "contact2 home" },
        { prenom: "Contact 3", nom: "NomContact 3", email: "contact3@gmail.com", phone: "77 530 03 63" , adresse: "contact3 home" },
      ],
    });
  }
};

// Run seed if needed
seedContacts();

export async function getContacts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.contact.findMany({
      where: {
        OR: [
          { prenom: { contains: query } },
          { nom: { contains: query } },
        ],
      },
    });
  }
  seedContacts()
  return prisma.contact.findMany();
}

export async function getContact(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.contact.findUnique({
    where: { id },
  });
}

export async function addContact(
  prenom: string,
  nom: string,
  email: string,
  phone: string,
  adresse: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.contact.create({
    data: { prenom, nom,email, phone, adresse },
  });
}

export async function updateContact(
  id: number,
  prenom: string,
  nom: string,
  email: string,
  phone: string,
  adresse: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.contact.update({
    where: { id },
    data: { prenom, nom,email, phone, adresse },
  });
}

export async function deleteContact(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.contact.delete({
    where: { id },
  });
}
