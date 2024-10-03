from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_data(data, key):
    cipher_suite = Fernet(key)
    return cipher_suite.encrypt(data.encode())

def decrypt_data(encrypted_data, key):
    cipher_suite = Fernet(key)
    return cipher_suite.decrypt(encrypted_data).decode()