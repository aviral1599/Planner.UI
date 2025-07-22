// app/register/page.tsx
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { AuthForm } from "@/components/auth/AuthForm";
import { OAuthButton } from "@/components/auth/OAuthButton";
import { LoginForm } from "@/components/login-form";

export default function RegisterPage() {
  return (
    <Container>
      <LoginForm type="register" />
    </Container>
  );
}
