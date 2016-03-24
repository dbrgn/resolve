initSidebarItems({"fn":[["decode","Converts a single Punycode-encoded label to a unicode string."],["encode","Converts a single label of unicode characters to a Punycode-encoded ASCII string."],["host_to_ascii","Converts a hostname to its ASCII representation. Returns an error if the encoding operation failed."],["host_to_unicode","Converts a hostname to its Unicode representation. Returns an error if the decoding operation failed."],["starts_with_ascii_lowercase","Returns whether `s` begins with a given case-insensitive prefix. `prefix` is assumed to be ASCII and lowercase. `s` does not need to be either ASCII or lowercase."],["to_ascii","Converts a label to its ASCII format. If the string is already ASCII, it will be returned unmodified. If an error is encountered in encoding, `Err` will be returned."],["to_unicode","Converts a label to its Unicode format. If the string is not an internationalized domain name, it will be returned unmodified. If an error is encountered in decoding, `Err` will be returned."]],"struct":[["Error","Indicates an error in encoding or decoding Punycode data"]]});