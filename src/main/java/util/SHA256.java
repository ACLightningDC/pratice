
package util;
import java.security.MessageDigest;

public class SHA256 {
	
	private static final String salt="임의값";
	
	public static String SHA256(String password) {
		String result ="";
		try {
			byte[] saltByte= salt.getBytes();
			byte[] passwordByte= password.getBytes();
			
			
			byte[] passwordSaltByte = new byte[saltByte.length + password.length()];
			
			System.arraycopy(saltByte, 0, passwordSaltByte, 0, saltByte.length);
			System.arraycopy(passwordByte, 0, passwordSaltByte, saltByte.length, passwordByte.length);
			
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			
			md.update(passwordSaltByte);
			
			byte[] passwordSaltByteDigest = md.digest();
			
			
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}
}
