import { defineAction } from "astro:actions";
import { z } from "astro:schema"; // Asegúrate de importar 'z' de 'astro:schema'
import { sentMessageToWhatsapp } from "../message.meta";

export const server = {
    WhatsappAction: defineAction({
        accept:'form',
        input: z.object({
            phone: z.string().min(10, { message: "El número de teléfono es demasiado corto." }),
        }),
        handler: async (input) => {

            const whatsapp = await sentMessageToWhatsapp(input.phone);
            console.log(whatsapp)
            return {
                message: `✔️ Teléfono ${input.phone} recibido con éxito.`,
                receivedPhone: input.phone,
            };
        }
    })
};