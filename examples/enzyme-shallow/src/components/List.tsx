import * as React from 'react';
import { IPerson } from '../models/person';
import './List.css';

export interface IListProps {
    people: IPerson[];
    onSelect?: (selected: string) => void;
}

export const List = (props: IListProps) => {

    const _onSelected = (selected: string) => {
        if (props.onSelect) {
            props.onSelect(selected);
        }
    };

    return (
        <ul>
            {props.people?.map((p, i) => <li key={i} onClick={() => _onSelected(p.name)}>{p.name}</li>)}
        </ul>
    )
};

export default List;