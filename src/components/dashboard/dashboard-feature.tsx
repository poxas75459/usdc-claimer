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
    "4KAgtA85iREVsBVh4KVQ3qpsyf3JUkZaHqnkqsJFgtEwEKSknNeZxbRNFVvb6Gnv8MgCwQUftHnWhReqDXZW9kB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cq9DybqWJ1dCX2fGHJTfHHHRaxxyQr7RWwv8RpWFaJZ1srU9Qt2Tm7Y1989hgTvom3PbB2FeS4NyphzKPPVfVum",
  "key1": "2KNZ4iDWVqsx3rWLTRD2PDD7T67CS4QRgkwovbsA44KEiHW4Mi5uw1GGUyESvRoje7dF9uhGnBiUbDxgRUoNbW78",
  "key2": "iFBQnedsVmpK7dm1PXaXuH4mjCG5D5UXR2681YzpjpsiT9SFSX9p3m6tmcPTmZdWkPbyiTnvhMNn97ZHLAJpLH6",
  "key3": "4EY8x7VwuUgmgzdTuZN1EojZ2StWW8t56VJpESfPAwPPc9WzJLKzWZWgT1awCgoUMaGQoozUfDyZSubU7Jc1fJyB",
  "key4": "43JhqUSViNK4wfNhyWjxZs8ZaTkkGeSLy2BQUa5EH8HipkT4RBz9Ufrh92SqtecuBqZsfc6r7qPPy33E1jE7or6n",
  "key5": "4bqSXzcFE6tNFVPSQqXeZUtfmB16hYUKAfaLpCdBjoKWzCRACe6EvTuC4qRK64LYww9LEsGRmcgEPXYC8FizBZeP",
  "key6": "2tkCKzuJwSQarffKffigo9QpC3kQhtKLdq8mQHqtt21F3fQ2N3qoZ5Qro5SXYsQnrL9GUVDfuvEp7f4TAZ9jEAAy",
  "key7": "5NkjYkLftcaZNUNVVy7a8GhoWmhZDQGvu4TpbRRyos9XTwMS34bkxPY8tgEnnf5zGnHFc8sQu81k4fMjmc1HQzCr",
  "key8": "UKf7HkvwUu3FCf2Bqr1i9wHW5bALhLxYx1Gu41MTHFASE5rTpqnaAj4qBhQrXcyK3j2U27YkdkSBfHKkT8kc5jH",
  "key9": "4QZxTdwrJ4W23g8iET7iRWNNh3FmzzXAXMe5gjDgjU3CetZWe4ioz3jdvDvNYDo8AoQjkouqau2WTHoMo9AsCUu1",
  "key10": "3WjdgSCHG3c6ZVz8o1Dzh4nsLGxX9yKv2X8GM4CSKFCHBHqfmETKKcjRC2qr3QVyKwkxMaUkHupEHpDzTd76uKGZ",
  "key11": "5ejA2nR6M6RsFVqjWP7iknZRrHCerTBiD3PkR6MJoJmsGcCTPXUFp8ctzsaf8u9rowh2rgozfijF5f3oMrUAJpVM",
  "key12": "5WakP12st1JaKgwu4w5UWA5vJ6vCH7iBBXmkD1rHJND1E1aVjPYQum4KYCJfRhqgSEdmJZPzwbqm17rzb4wfAcBX",
  "key13": "4oPvCxonkFeUH3cvGB9PHv7ASVxbHXyXzV7qCU3EUrPDSiVokVhgTceV4kSXYXv72wwSVwgS66GV6SbkLh4ph3Py",
  "key14": "4ty2JAFnM3siAFA2R2oeBeEN2NBJuBsSpwtG7cJFEeqXDUxMpUuMi6BrzATx4dFLKz8T4hJ3uQ8vSFnBqbGcaaY2",
  "key15": "5D2iBhuP4MdM5u3hq2mmDmUCZRNKpoDaoNwYUVTekkdocdo3bEkAuuwQMBHohLuujMqn3Zw9CdqyEsrSFwJG5fQU",
  "key16": "4569f2NtLSrVbNSyZCALztULc4EYXDi8djCGadRzdTx3j67msir1DLUBddHcG6Re3pf6iC4HrnMMCQz6uM9LAEjo",
  "key17": "3rGwgva3Yr8kUx7EALGstkdS18QEczfA1Tz2b148YmFVaQnUArnBRwYq7kMrGuyiai6xRmYPa78aHYZxSnWdowsr",
  "key18": "EwJnau1L3VLzh5ayYTZtgfTG5kSnRvv12W8DmmuWTL2aZKSUHy7tS6is6pTuRQGq9P2nAQDgKuZrbHqBeeqDnXR",
  "key19": "4iUvno2F5HJRCjpihUcsqvJCzfpdyYLhvLxPRf9v3ZwoZz5dTYn7vtuPzaBbt8J9FKfeRXcr4QPrqt3qJA74ZW6W",
  "key20": "3FmTf2sMAN8Li69AQmFeEZJ4x4QQ5upZQBpATxjPF8jx2PuaQhFUzvVTi5L2ch8UsuvWDyeFyVAJy8d3nrghqmPL",
  "key21": "4wVU9wcqGti8C6cTHy5gWBUmwsz6NSV5cWv24oMavd1k1d9PUU6HtyLWapG8KGrN6f3FTb7Ey9GgjaTQnpPQ9xwL",
  "key22": "5XA8Vx7NSJEDaJZcYDWjUxdx6j6vZpAbz1KzG6TmKxpMSfj1tyJWdxz5A1kLurrRwT1qpR6oBMsZ1g9CGWC9mdqR",
  "key23": "2aMBgN1115q65RAdLvqM9W5LKskBwSEutjnJPxfcb3boxX92yV1F4UPbApm38waUBNLgcvq7KYnfjEE2kHHSJEs3",
  "key24": "484Z2uCxmCtU9XTT6Hf8ySYUKD3nTirm33kbSSMzHhKchwXxoguyBRHRnRR5E1msVH4oGgrMfxYsN21W1k4GuBL2",
  "key25": "2XRhtbecndbJTbv98Py8ktc5Zc5TpMemg28vSbvXbJjQNyyUi3tzM9oybri1C8fZWUuCTtSUhaCG1a19qrR6qvpm",
  "key26": "3w6agNbEguadFBissovqRjJ6RNWmFTKLuvrtVauBYwh9fEykSbsTGwZzGFkq9xLd41Eih6VBZtPB4DNVLtZ2Tvrz",
  "key27": "cUV5QmiRkzi7QMVpzpXfCRDupKqmkqSutMNFUhkDXEtVz9D8kve96nz17nwv8NZjpoezEyDcEXvh6YoskkXB56e",
  "key28": "5oSwrFwgddEpUGCamUkExPGL8ZafbtkZwUsZjBSy6bghJxMboTQ6S6TawRmV7wiArJetP1bVdN3KE3EWtvVA9QmR",
  "key29": "4xmcVSn5S7yG8qV89eJW97t12F4L2fbZd3X9xXymcYDVrpJZfgoBcpfdqpCyFeYGDCM7XZjtb3ZUjrETFVsdXM4e",
  "key30": "21gLJJFSkX1g8TYgS5NASoxKkeAxXc4taFEx1TZFqwXvuFkJM6cUT9UZFYEkejLXZg4xxbBVsf4XYU2UPEB7WFZk",
  "key31": "3pBK31BjqgoVxq4ad96BUTHEkuvsErZXX3QDVWHBbxGxDy9Jabwcbv17WRzUKE8GYrkg9M7x8YHMgatHSknpRS1F",
  "key32": "5qQKFSrgPgsm2FMB9Am43spfD931bi6K16hDYu554Setq6svyyJc8zMmcPukSEDEctNrCk3SrJN4p6ake64jorAb",
  "key33": "3qG5z2jX2kVAziytXm128EP1SUd4Uw4ppbQi87J787fV6cLgnXbz4oJtPXExLhzzdmLY9GWURxzM1vQT2v7GLxE1",
  "key34": "3APm6ij7ihjwemXwLP1iGXQ9Cy72fvps7iQ2XQhUe6crRUBQ4DC9FAWzhRVNMGnvKkmrjr8Fo1PQr4kybVDH8Ny9",
  "key35": "28BahNRoFHEo4b7YvuSYiKWfZ6StcWY2RpEtCqekrxYSqtiJVfEY9CzrwgMAgJNfomq1Tx9qDTiteMf382G6WKF5",
  "key36": "2vytpkxFz9LbA7tmTNkJNpp1tZ3YDcRzA4ixnHC58m5Ab5rhhHoBS6JX5yJzrvKpXdCW6kXym92EW52yyLnGSc9U",
  "key37": "373UoPufF3kMaZkyRR5YBErYbpikF3hy9ynq2fWpMHetPbiiJvy8X31gEtEHJwCjBHY6VQVjjLTnCHyF694ZT6n8",
  "key38": "pr8ccNayWFwAdDD2PhAQFEiMY4uudenTGRDrbMkjDkP5wrTavJvUbL5cEHiG7NqdyHT9RZWyqVAoo6DTm2wG4Fe"
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
