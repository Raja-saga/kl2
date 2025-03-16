import javax.security.sasl.SaslClient;
import java.util.Scanner;

public class calculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int ans = 0;
        while (true) {
            System.out.println("Enter operation");
            char op = input.next().trim().charAt(0);
            if (op == '+' || op == '-' || op == '*' || op == '/' || op == '%') {
                System.out.println("Enter first number");
                int a = input.nextInt();
                System.out.println("Enter second number");
                int b = input.nextInt();

                if (op == '+') {
                    ans = a + b;
                }
                if (op == '-') {
                    ans = a - b;
                }
                if (op == '*') {
                    ans = a * b;
                }
                if (op == '/') {
                    if (b != 0) {
                        ans = a / b;
                    }}
                    if (op == '%') {
                        ans = a % b;
                    }
            }
            else if (op == 'x' || op == 'X') {
                break;
            } else {
                System.out.println("Invalid operator");
            }
            System.out.println("answer is " + ans);

                }
            }
        }

