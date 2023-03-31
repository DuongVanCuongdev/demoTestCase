


const app = require('./app')

describe('Đây là nhóm test case dành cho hàm Login()', () => {
    test('TC01: Tên đăng nhập hoặc mật khẩu bị bỏ rỗng', () => {
        expect(app.login("", "12345")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!" })
        expect(app.login("khachuong", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})

    })

    test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(app.login("khachuong", "12345")).toMatchObject({ isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!" })
    })


    test('TC03: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(app.login(123, "1234567")).toMatchObject({ isSuccess: false, message: "Sai định dạng dữ liệu!" })
    })

    test('TC04: Đăng nhập khi tài khoản trùng với mật khẩu', () => {
        expect(app.login("khachuong", "khachuong")).toMatchObject({ isSuccess: false, message: "Tài khoản không được trùng với mật khẩu" })
    })

    test('TC04: Đăng nhập khi mật khẩu sai', () => {
        expect(app.login("khachuong", "123453333")).toMatchObject({ isSuccess: false, message: "Đăng nhập không thành công!" })
    })

    test('TC06: Tài khoản không tồn tại', () => {
        expect(app.login("khasjsjsjs", "123456778")).toMatchObject({isSuccess: false, message: "Tài khoản đăng nhập không tồn tại"})
    })

    test('TC07: Tài khoản chứa kí tự đặc biệt', () => {
        expect(app.login("kh#$@", "123456778")).toMatchObject({isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!"})
    })

    test('TC08: Đăng nhập khi mật khẩu có khoảng trống', () => {
        expect(app.login("khachuong", "1234 56778")).toMatchObject({isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!"})
        expect(app.login("kha chuong", "123456778")).toMatchObject({isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!"})
    })

    

    test('TC10: Đăng nhập đúng thông tin', () => {
        expect(app.login("khachuong", "12345678")).toMatchObject({isSuccess: true, message: "Đăng nhập thành công!"})
    })
})


describe('Đây là nhóm test case dành cho hàm SignUp()', () => {
    test('TC01: Tên tài khoản, mật khẩu hoặc số điện thoại bị bỏ rỗng', () => {
        expect(app.signUp("", "12345", "0238924748")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!" })
        expect(app.signUp("khachuong", "", "0238924748")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!"})
        expect(app.signUp("khachuong", "12345678", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!"})
    })

    test('TC02: Nhập mật khẩu hoặc tên tài khoản không > 6 ký tự', () => {
        expect(app.signUp("khachuong", "12345", "0823059750")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu phải lớn hơn 6 ký tự"})
        expect(app.signUp("kha", "12345687", "0823059750")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu phải lớn hơn 6 ký tự"})
    })

    test('TC03: Nhập số điện thoại không đúng 10 số; số điện thoại không phải số 0 ở đầu và phải là dạng số', () => {
        expect(app.signUp("khachuong", "123454444", "0823059")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})
        expect(app.signUp("khachuong", "12345678", "82305911111")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})
        expect(app.signUp("khachuong", "12345678", "jahsjsg")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})

    })

    test('TC04: Tên đăng nhập hoặc số điện thoại đã được đăng ký', () => {
        expect(app.signUp("khachuong", "12345678", "0823059759")).toMatchObject({isSuccess: false, message: "Tên đăng nhập đã được đăng ký"})
        expect(app.signUp("khachuon", "12345678", "0823059750")).toMatchObject({isSuccess: false, message: "Số điện thoại đã được đăng ký"})
    })

    test('TC05: Chứa các ký tự đặc biệt', () => {
        expect(app.signUp("khachu//ong", "123 45999", "0823059750")).toMatchObject({isSuccess: false, message: "Các trường không được chứa ký tự đặc biệt"})
    })

    test('TC06: Không chứ khoảng trắng', () => {
        expect(app.signUp("khachu//ong", "123 45999", "0823059750")).toMatchObject({isSuccess: false, message: "Các trường không được chứa ký tự đặc biệt"})
    })

    test('TC07: Đăng ký thành công', () => {
        expect(app.signUp("duongkien", "12345678", "0823059756")).toMatchObject({isSuccess: true, message: "Đăng ký thành công"})
    })

    test('TC08: Tài khoản và mật khẩu trùng nhau', () => {
        expect(app.signUp("duongkien", "duongkien", "0823059756")).toMatchObject({isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau"})
    })

    test('TC09: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(app.signUp(123, "12345678", "0823059756")).toMatchObject({ isSuccess: false, message: "Sai định dạng dữ liệu!" })
    })
})


describe('Đây là nhóm test case dành cho hàm changePassword()', () => {
    test('TC01: Tên tài khoản, mật khẩu hoặc mật khẩu mới bị bỏ rỗng', () => {
        expect(app.changePassword("", "12345", "44444444")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!" })
        expect(app.changePassword("khachuong", "", "0238924748")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!"})
        expect(app.changePassword("khachuong", "12345678", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!"})
    })

    test('TC02: Nhập mật khẩu, tên tài khoản hoặc mật khẩu mới không > 6 ký tự', () => {
        expect(app.changePassword("khachuong", "12345", "0823059750")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mâth khẩu mới phải lớn hơn 6 ký tự"})
        expect(app.changePassword("kha", "12345687", "0823059750")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mâth khẩu mới phải lớn hơn 6 ký tự"})
        expect(app.changePassword("kha", "12345687", "0823")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mâth khẩu mới phải lớn hơn 6 ký tự"})

    })

    test('TC03: Tên đăng nhập không tồn tại', () => {
        expect(app.changePassword("khactuan", "12345678", "0823059759")).toMatchObject({isSuccess: false, message: "Tài khoản không tồn tại"})
    })

    test('TC04: Chứa các ký tự đặc biệt', () => {
        expect(app.changePassword("khachu//ong", "123 45999", "0823059750")).toMatchObject({isSuccess: false, message: "Các trường không được chứa ký tự đặc biệt"})
    })

    test('TC05: Có chứa khoảng trắng', () => {
        expect(app.changePassword("khachu//ong", "123 45999", "0823059750")).toMatchObject({isSuccess: false, message: "Các trường không được chứa ký tự đặc biệt"})
    })

    test('TC06: Đổi mật khẩu thành công', () => {
        expect(app.changePassword("duongcuong", "12345678", "0823059756")).toMatchObject({isSuccess: true, message: "Đổi mật khẩu thành công"})
    })

    test('TC07: Tài khoản và mật khẩu mới trùng nhau', () => {
        expect(app.changePassword("duongcuong", "12345678", "duongcuong")).toMatchObject({isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau"})
    })

    test('TC08: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(app.changePassword(123, "12345678", "0823059756")).toMatchObject({ isSuccess: false, message: "Sai định dạng dữ liệu!" })
        expect(app.changePassword("duongcuong", 985394347, "0823059756")).toMatchObject({ isSuccess: false, message: "Sai định dạng dữ liệu!" })
    })

    test('TC06: Đổi mật khẩu không thành công', () => {
        expect(app.changePassword("duongcuong", "123456784545", "0823059756")).toMatchObject({isSuccess: true, message: "Đổi mật khẩu không thành công"})
    })
})