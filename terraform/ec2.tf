resource "aws_instance" "bookstore" {
  ami           = "ami-0b186c03eb0609250"
  instance_type = "t2.micro"
  key_name      = "bookstore-key"
  subnet_id     = aws_subnet.public-us-east-1a.id

  associate_public_ip_address = true
  vpc_security_group_ids      = [aws_security_group.bookstore.id]

  tags = {
    Name = "bookstore"
  }
}
