package actividades;

import java.util.Scanner;

public class Actividad5_diasaños {

	public static void main(String[] args) {

		System.out.println("Introduzca numero de días para convertir a formato:");
		
		Scanner scanner = new Scanner(System.in);
		int dias = scanner.nextInt();
		scanner.close();
		
		int diasresto = dias;
		
		int años = diasresto/365;
		
		diasresto = diasresto - años*365;
		
		int meses = diasresto/30;
		
		diasresto = diasresto - meses*30;
		
		System.out.println(dias + " Cantidad de dias, es igual a " + años + " años, " + meses +" meses y " + diasresto + " dias.");
	}

}
