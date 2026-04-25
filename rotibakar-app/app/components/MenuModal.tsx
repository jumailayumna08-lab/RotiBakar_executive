"use client";

interface MenuItem {
  nama: string;
  harga: number;
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: MenuItem[];
}

export default function MenuModal({ isOpen, onClose, title, items }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {items.map((item, idx) => (
            <div key={idx} className="modal-menu-item">
              <span className="nama">{item.nama}</span>
              <span className="harga">Rp {item.harga.toLocaleString('id-ID')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}