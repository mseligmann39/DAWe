package actividades;

	import java.util.Scanner;

	public class Actividad6camel {
	    public static void main(String[] args) {
	        // Crear un objeto Scanner para leer la entrada del usuario
	        Scanner scanner = new Scanner(System.in);

	        // Pedir la frase al usuario
	        System.out.print("Introduce una frase: ");
	        String frase = scanner.nextLine();

	        // Convertir la frase a formato Camel Case
	        String camelCase = convertirACamelCase(frase);

	        // Mostrar el resultado
	        System.out.println("Resultado en Camel Case: " + camelCase);

	        // Cerrar el scanner
	        scanner.close();
	    }

	    // Método para convertir una frase a Camel Case
	    public static String convertirACamelCase(String frase) {
	        // Dividir la frase en palabras
	        String[] palabras = frase.split("\\s+");
	        StringBuilder camelCase = new StringBuilder();

	        // Procesar cada palabra
	        for (String palabra : palabras) {
	            // Convertir la primera letra a mayúscula y el resto a minúscula
	            String palabraCamel = palabra.substring(0, 1).toUpperCase() + palabra.substring(1).toLowerCase();
	            camelCase.append(palabraCamel);
	        }

	        // Devolver el resultado
	        return camelCase.toString();
	    }
	}


