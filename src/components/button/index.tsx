import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"

function Button({ children }: TouchableOpacityProps) {
  return <TouchableOpacity style={s.container}>{children}</TouchableOpacity>
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

Button.Title = Title
export { Button }