import React, { useState } from 'react';
import { rows } from '../../mock/mockData';
import { DataType } from 'interfaces/home';
import MemberModal from 'components/modal/memberModal';
import styles from './styles.module.css';

const ValidateMember = () => {
    const [dni, setDni] = useState('');
    const [memberData, setMemberData] = useState<DataType | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (e: any) => {
        setDni(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = rows.find(row => row.dni.toString() === dni);
        setMemberData(data ?? null);
        setModalOpen(!!data);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.search}>
            <div className={styles.searchBox}>
                <div className={styles.searchField}>
                <input className={styles.input} value={dni} type="search" onChange={handleInputChange} placeholder="Ingresar DNI" />
                    <div className={styles.searchBoxIcon}>
                        <button className={styles.btnIconContent} onClick={handleSubmit}>
                        <i className={styles.searchIcon}>
                            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
                        </i>
                        </button>
                    </div>
                </div>
            </div>
            {memberData && (
            <MemberModal 
                open={modalOpen} 
                handleClose={handleCloseModal} 
                memberData={memberData} 
            />
            )}
        </div>
    );
};

export default ValidateMember;
