package actividades;

public class Actividad7b {

	public static void main(String[] args) {

		Actividad7a objeto = new Actividad7a("perro",12,2);
		
		System.out.println(objeto.getNombre()+ " disponibles: " + objeto.getCantidad() + " precio: " + objeto.getPrecio());
		
		objeto.setCantidad(38);
		objeto.setNombre("Remera ");
		objeto.setPrecio(12.2);
		
		System.out.println(objeto.getNombre()+ " disponibles: " + objeto.getCantidad() + " precio: " + objeto.getPrecio());
	
	}

}
