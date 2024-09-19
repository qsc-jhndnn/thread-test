import { expose } from "threads"
import sha256 from "js-sha256"

expose({
  hashPassword(password, salt) {
    return sha256(password + salt)
  }
})