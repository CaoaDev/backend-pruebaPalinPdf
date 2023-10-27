Validación de Texto - NestJS

Este es un endpoint de NestJS que permite validar un texto según un patrón específico y devuelve un mensaje correspondiente al resultado de la validación.
Uso
URL

    POST /validText

Parámetros de la solicitud

    text (cadena de texto, requerido): El texto que se va a validar.

Respuestas

    Código de estado 200 (Éxito)
        Respuesta:
            Tipo: JSON
            Ejemplo de respuesta:
{
  "message": "Su PDF ha sido procesado correctamente. ¡Felicidades!"
}
Código de estado 400 (Solicitud incorrecta)

    Respuesta:
        Tipo: JSON
        Ejemplo de respuesta:
{
  "message": "Revise su PDF, que no esté cifrado, que no contenga imágenes y que la fuente del texto no sea privada."
}
Descripción

Este endpoint permite validar un texto según un patrón específico definido en el servicio. El patrón se expresa mediante una expresión regular que verifica si el texto cumple con un formato determinado.
Controlador (ValidTextController)

    Ruta: POST /validText
    Método: validateText(@Body('text') text: string): Promise<string>
    Descripción: Valida el texto proporcionado y devuelve un mensaje de validación.

Servicio (ValidTextService)

    Método: validateText(text: string): string
    Descripción: Este método en el servicio realiza la validación del texto según una expresión regular. Si el texto cumple con el patrón, se devuelve un mensaje de éxito; de lo contrario, se devuelve un mensaje de error.

Ejemplo de Uso

Puedes utilizar esta API enviando una solicitud POST a la siguiente URL:
POST /validText

Cuerpo de la solicitud (ejemplo):

	{
	  "text": "ABC-12345-678-9"
	}

Respuesta exitosa (ejemplo):

	{
	  "message": "El dato ha sido procesado correctamente. ¡Felicidades!"
	}

Respuesta de error (ejemplo):

	{
	  "message": "Revise el formato, recuerde tiene que ser de tipo "AAA-23214-767-1""
	}

Esta documentación básica describe el endpoint, sus parámetros, respuestas, y cómo usarlo.
