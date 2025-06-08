export function authRecoveryEmail(firstname,code){
    return(
        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Ativação de Conta</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">UPSI! Perdeste a tua conta</h2>
                    <p style="font-size: 16px; color: #555;">
                    ${firstname}, Relaxe. Vamos ajudar-te a recuperar a sua  conta, copie o codigo a baixo
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                    <div
                        style="background-color: #007bff; color: white;padding: 12px 25px; border-radius: 30px; font-size: 20px;">
                        ${code}
                    </div>
                    </div>
                    <p style="font-size: 14px; color: #888;">
                    Se você não se cadastrou, ignore este email porfavor.
                    </p>
                </div>
            </body>
        </html>
        `
    )
}

export function authActivationEmail(firstname,code){
    return(
        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Recuperação de Conta</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">Bem-vindo ao Marvel Fan</h2>
                    <p style="font-size: 16px; color: #555;">
                    ${firstname}, obrigado por se cadastrar. Para ativar sua conta, copie o codigo a baixo
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                    <div
                        style="background-color: #007bff; color: white;padding: 12px 25px; border-radius: 30px; font-size: 20px;">
                        ${code}
                    </div>
                    </div>
                    <p style="font-size: 14px; color: #888;">
                    Se você não se cadastrou, ignore este email porfavor.
                    </p>
                </div>
            </body>
        </html>
        `
    )
}
