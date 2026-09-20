# frozen_string_literal: true

require "webrick"

module ValueCompass
  module WEBrickRangeFix
    def do_GET(request, response)
      if request["range"] && (if_range = request["if-range"])
        stat = File.stat(@local_path)
        etag = format("%x-%x-%x", stat.ino, stat.size, stat.mtime.to_i)

        if if_range_matches?(if_range, stat.mtime, etag)
          request.header.delete("if-range")
        else
          request.header.delete("range")
          request.header.delete("if-range")
        end
      end

      super
    end

    private

    def if_range_matches?(validator, modified_at, etag)
      Time.httpdate(validator) >= modified_at
    rescue ArgumentError
      WEBrick::HTTPUtils.split_header_value(validator).include?(etag)
    end
  end
end

handler = WEBrick::HTTPServlet::DefaultFileHandler
handler.prepend(ValueCompass::WEBrickRangeFix) unless handler < ValueCompass::WEBrickRangeFix