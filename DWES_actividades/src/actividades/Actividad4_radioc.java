package actividades;

import java.util.Scanner;

public class Actividad4_radioc {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		double pi = 3.1415;
		
		Scanner scanner = new Scanner(System.in);
				
		System.out.println("Introduzca un radio para calcular la circunferencia: ");
		double radio = scanner.nextDouble();
		
		scanner.close();
		
		System.out.println("La circunferencia de " + radio + " es " + 2*pi*radio);
	}

}
