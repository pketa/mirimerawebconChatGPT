import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ProcesarFormulario")
public class ProcesarFormulario extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String nombre = request.getParameter("nombre");
        String email = request.getParameter("email");
        String contacto = request.getParameter("contacto");
        String mensaje = request.getParameter("mensaje");

        response.setContentType("text/html;charset=UTF-8");
        try {
            response.getWriter().println("<!DOCTYPE html>");
            response.getWriter().println("<html>");
            response.getWriter().println("<head>");
            response.getWriter().println("<meta charset='UTF-8'>");
            response.getWriter().println("<title>Formulario Enviado</title>");
            response.getWriter().println("</head>");
            response.getWriter().println("<body>");
            response.getWriter().println("<h1>Formulario Enviado</h1>");
            response.getWriter().println("<p>Nombre: " + nombre + "</p>");
            response.getWriter().println("<p>Correo Electrónico: " + email + "</p>");
            response.getWriter().println("<p>Número de Contacto: " + contacto + "</p>");
            response.getWriter().println("<p>Mensaje: " + mensaje + "</p>");
            response.getWriter().println("</body>");
            response.getWriter().println("</html>");
        } finally {
            response.getWriter().close();
        }
    }
}