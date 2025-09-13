

const key = import.meta.env.WHATSAPP_CLOUD_KEY;
export const sentMessageToWhatsapp = async (phone: string) => {
    const request = await fetch(
        "https://graph.facebook.com/v22.0/811804988675585/messages",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + key,
            },
            body: JSON.stringify({
                messaging_product: "whatsapp",
                to: "1" + phone,
                type: "template",
                template: {
                    name: "template_kelvin",
                    language: {
                        code: "en",
                    },
                    components: [
                        {
                            type: "header",
                            parameters: [
                                {
                                    type: "image",
                                    image: {
    
                                        link:
                                            "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1900&dpr=2&s=none&crop=none",
                                    },
                                },
                            ],
                        },
                    ],
                },
          
            }),
        },
    );
    const response = await request.json();

    return response;
};
