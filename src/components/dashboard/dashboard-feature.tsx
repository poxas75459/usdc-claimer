/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ra29gRSddCKcMbi3pDiqngxDCwnTLqqMD2JdcBkfEhFMBk9GvUJXZzbYfX7SrfYyCcCiNy69PwDYDVgiyHsLrnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAmgBqbYTbTDMiWrhpevALFR4W5gsMgmusVrBC3uCZ5jGj6cMh2v7PkqA2vthvjJe1AES8g66U8vjsW6sUzEcgA",
  "key1": "3T21QhdedsWZQcNJZGStx557n6BUShytGNR2iJb6ET7WAcYsPM6UUih7xXt14UNp8M6EFEE5dkmr7136BPe14t26",
  "key2": "2AR36ULDdgy4JE317i4ZheSv4dAjHvujb8pBvQpuxkd4e4LrR2XgREXSRuDJ5k7Ji2bBgPXjm9v8KwGwJH4tE2Qt",
  "key3": "4EXz7oxSUuemDaZR42nAUqm2hZMJDwyHc4Rv83qHcSe3ddXdw9So8GsBgXMaEGkbKVe1QsT8SEXHutUmLtjzAK24",
  "key4": "4tDfvt8cV4QJ4ntYGDdYukiBXfj25V9zmhPSUFY45FhzMhBGpT39jpi3weVLYuDdx1B7jsnSqLjkKv3r2zV1Maxd",
  "key5": "jHBBmjK2CTfsMMfRb9ubBJ8qT3mRJnDbjJVdtqG4Ehy2UkNKF2pn2sw79KPYGR6iKtQNQNP26X4nCfNBQNn4MaY",
  "key6": "4Xm9hLP6yoHuvATJDKSSjmsiqYNBPiyfeosgsW8GLCr4peVArBgjzr1oC61jQHg4zTVvd7rRjwqZyC67fk2wYa4x",
  "key7": "5ByHqeqqQ9NTuueZ78JqRXcGBE1NmVa1SCynqzBGQ9syjmWTtty3RQYMnQsxhJhVv4R4VvXqJnx5v8o2hWT7pePC",
  "key8": "B61TsWh8H2L3dVjFNDB8AM3J2tfTiZsxgUy7tYswhBJkkwkMf6Rtz4ffCRQcHr9chnzc2kJCVNf9prsuWwqJbLN",
  "key9": "57VnGVbg1MZQdAmLVfzTfxKNCTWXuu5bPc5qT5k8Ht17VQqBsZC9ucpU1WYnysBd8FiHD5rpMyHjrpeAU6omkDfY",
  "key10": "28UkaqWcGxARPa2MUo5xNLLTSnrUaq6WyqreVqd1TBtGEzuyGzCvx9qF4L74RP5rLFeprrBiGn52ySER3CvYBmgx",
  "key11": "5j3oXdpMjaHKALuwTri5yMtLQYkrnikGUQ1gbp2aqK2UGjztTyPbWP3oyFYqB9tR1vvSFYvdhSG524VxxqH5M5a1",
  "key12": "5cxifhQcynpWr2PRZ3bL8zTCz2B9EfGSzuK3xrR6JS6qzzfqGBhdusAoj4trjVTSZbzMi9GnVnDrhyJsvx25LWa7",
  "key13": "2QLmLxsLp5Gw5H2KPBWfX7jmjAWzLGY8QjpiHQ9EUpAw9uf2KeB1WPF8CxzSZiR6PT8NiMtw5kF9cGFfV7CoRMFM",
  "key14": "47teqYAvD43nNtYJHFjMU9885YPam69vxhnuu3FeCewaB2oGdGRLEoHG5pjjYKDgdZyj5GVLyJy9xf8NtXZWgDvu",
  "key15": "322pTUAG2Yu7qNAMvDc5g2sxZtowaPieciZhoSQdvjBuDuAnkzmWKzxRLptceNuf31bjRZRK1prA8rJ11QdszaJ7",
  "key16": "3PhSJ9v7u7y9ac2DLtUSH66CMankAfdsmRVcuGW2RmkTuUhFrA3jch8B2wpcuoZXYVJsHJCxp7k8bUM2FabHPjJS",
  "key17": "rKAmLDK5EQVwMQisv24BHVVgPNGKGmD8Yw1rg7aDJe3SSsnZRuUhDS8tRZwUzsNTaCrkrP6aQwbQndgvHo4r8gF",
  "key18": "wFrm4VqxL48ccLzCvYxz4N1uEZ5sk49gmeQHjBBDx6Pqn5gjkB9pRjB8chhn6HARoAzfEf2A1HE4szSsBzUu4ho",
  "key19": "4onT8xUbZp9Q9c6mvGdF4c4h8DWxvwSkmHbQCzqNmBXWVqdLeG6YnFocUGKneCqQkgTtrH3cAmk5uBLUWTHuxYAE",
  "key20": "4CPh95joPRnGTg6nx5DBfDrQEn1KWgAb2SbENvexxQVHSS5aJyufQQxsLJVHzHftJiqgSu45fWoCN6vaVBMs4Fs3",
  "key21": "5c7xTMftks2Wop54MPa4r1b8k6ymEjyUAXEBFFQ9KPYMWeMy3Rq7di2GcABcWU7hXLvTPLrDsbwQn8WrPBasZg4Y",
  "key22": "4p484XYVaQpP6LWXHNH9EVXj2bv1zMbqR5ZmshrJgYA1EuZSYvN69eQDAex3BfyfREdgEtCzqmvNmXZLa2H2pxMR",
  "key23": "4s3qVxaZnYnVifS5dmmjA8aq4x4mYmXbr6dc2bNnSjpHcLZZMTfgPnEc4F4KsdN5HnDM22ogse85jekYTPiefD87",
  "key24": "4xMgE6MyyKEU5EcE2Gc2PoVJ1wqXtE9P3VpnEeYbQwjqPDRw1KXgaM7NgRF94YnUPYn1gdk4wockLcECvo9F8KZx",
  "key25": "3UXh6pz85kmCQK8j5eVJDgiYtatZoBqXbaD9MZEpP9C4Sub6g2Na9Kwdibpq26xYpSTL9VMwKr7of6YFurhjkWoJ",
  "key26": "22wuVdwFurf8yvxES9ejSKCz7T7XoEtSUPtLpothZGfr3U1vB1whG6utNk289RzaqGPy2V7okmPhHTUSLsJRmndt",
  "key27": "18qKqMjD28ZnxbBVyZX6o9csadL8unq8NPCSfUmZVLNQnDnhyduRnSymyn12enLkx4k5groMSdjo73nCuXDVVXT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
