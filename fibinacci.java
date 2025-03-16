import java.util.Scanner;

public class fibinacci {

    static int fib(int n) {
        if (n <= 1)
            return n;
        else {
            return fib(n - 1) + fib(n - 2);
        }
    }


    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("enter number");
        int n = input.nextInt();
        int ans = fib(n);
        System.out.println("value is " + ans);
        /*
        System.out.println("Enter value");
        int n = input.nextInt();
        int count = 2;
        int a = 0, b = 1;
        while (count <= n) {
            int temp = b;
            b = b + a;
            a = temp;
            count++;
        }
        System.out.println("value is " + b);
        */


    }

}
