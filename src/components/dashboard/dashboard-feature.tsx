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
    "2CnYb7u1rH4Zt6B3wQWmP4WVxUUDR4aatJ1ecLUKNrVcfRD17C9RU3CVZRA9pQjQYMhPuxMZEEDaiRibimJMxb9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wech7s5PeuWoFi4XPdqBcbiF5v6mR99hSTCVGyvzfqDGdBkyzTvqT4CoM4dseFdnv1Mi57nFezv4zJSLRXKM43c",
  "key1": "36mWuqKmmA5ZG4D8qbZhMPmyDTUgo7Bm3RBseESUxzH3n5Je73CWkvsvXveKbEZzE5ShnWPFeAYyMZgdjwFHzV7R",
  "key2": "4spKMsFvFcUjV4gXrTiihxE1ENcWHx3oXhyEk1VuFitsCeKFUEWx8PiCwnCTJhjwwzng9azWebo4RxKVF3yq53kt",
  "key3": "33cofu3EQecdxXN6KFoT1sp9cWsGoY4f4yL1rUdm5ZsYrxj3bJroJPjHGFApeFVitbAq1kXLjw3JDqtDQ2guoLCZ",
  "key4": "4s2mzv9RXvqF5yVkW2VdRxkdjgrnEu3HETNchMBTHXaG2ReXtjCDLiDHPSiMDCbPzuk8KbeQokexTgNDqYo3uFeA",
  "key5": "5bpa8c2hRLDS5rx6e5pZHJrFNHpzVGAawUmEARgeRDj8ZqzZMuz4so2h6t1z2YfLpuMTmfcYZD1nZK3ypjFYftbt",
  "key6": "3hJsp944ZhhWZcvTokx496so469qLTEnirgoeQ8BD4QTFnrUfTdV9grz8Dat5or6WxHrjXvMfEriknTpAfBAoDDn",
  "key7": "5GAR2d3nE7JaH8W11JpuJZVAmGVfN3Lq8PVUEX4p6bmFVfvrZvo4xYgtBYArikwEGN5qaaQmHFWFDdqK7NJMu9iF",
  "key8": "JR3VKD7qPAmPEnNMdrJPZaUjQif3LZWPuZ5xEARVnXHBgWFgsYKobGoHMTBfSUPVUCMFTYJtzVKur7T3kutpChq",
  "key9": "4vMuSTweqQ1bMY8hSzUPtSaHbAQk4denBhwNUAJ4DcU2JxrRK5js5kjVM6bNZS7yqZkaou2kXbkhQjZMyP5LVWi1",
  "key10": "grYBn1crnqsMkRNEdyKTrt9PPF2vuewXTLanqyTDkfujH8CQxvqHxpRy5fYUrTbyhzBAuvx93sh6YAN31TTVfK4",
  "key11": "5GMyA7ek99HuFvuuo7vwR8FTsKbiYLjgdabJkz244aWAr4ZDB2BDMNAdQ3RtdSxwj1kTDSrzDr1PRT5undqub54A",
  "key12": "21nK1R8QDa4iX9EXSU5ASn3KPCMFNSs7sBkQjuw5iQwdhnCXFeqKAnPJysMPAf2cPfp5NEB3FLtmSoHSdUC5p7nZ",
  "key13": "46Vz2csjz6aKEP5DcbmUvekXkJQfeUa7PSQesYjk32Tgxu8rUZNNRea6se1CsumSJoJbKqsVYoTW1LDzerhSdyoh",
  "key14": "5FbNjLmZR9KSSrw7a3qLtR5Zrv9ZPgGKk9hoPdk4dNLo3cemFe4vixr79GDPt3Qd1TFASAwgmWf274fvLHXzRxaD",
  "key15": "2H7HaVzxURV3FBs8ogeQHkXxQbNu3NWMb6Kyr5RQgMiuXx529ghb58kxehXdN8drfe9SacF84uBawVm3uyJ9ckxN",
  "key16": "4iLpnrds7LZPLXzmfuD7fWkvhxDdbiDtHHSyd3NTAsq3ajpLk9pXNZaz1gazW7Wrthg45qDjuC183r1SgEkC3SPD",
  "key17": "RVwVtWuwXXJA6MFhwR5SGS1tTvsKr9zFiGzEL45DPiBW9r7Q7b958DnJaupSJpsuVm6yTJe2zSW6xELTLsDBdn3",
  "key18": "12E7WWpPTS4ZQGtUPqtLCjhgFWHnTevYdRNY2nco5kbvs6fUzcMBboaC1dW5veAe4oiCNBjZwyqaoxTN34tLqpn",
  "key19": "mKjxHWov2s6xpARysZqj2wyMzPRQ5AmPUPGg79BcPGCqgSP3o9MyqF63bt5bGVjhaK71WVdNWg4MCxE9GCU5Aw9",
  "key20": "4E1rQEApq3kRu6JDdM1gXoaap85w8FgYNBWzqyK2hdphR4zBjo1CYsH4m8JfwMRHSTDP8bLrg4HC59nD8KEfAWJ3",
  "key21": "y5u2QZ2yr1bbW1HGBq5iTFi8yy4zbKugca3TosNt9KqwWa1gERUGLRU7XiWtrJ9oFA5UFkNAci68x7tNrYxDm4P",
  "key22": "3ehfnM7zxmZgcg1djjNCBEGn5U1ixo1oUd8AUHYoPSSC9VhuaKyY5P2j4JfZsA1iRq9MLwMxgBu37RLps8zyf63f",
  "key23": "5rGYzD712nksK6SdMC3R7NpcMkpT62mgaUtZhRF4WzR6ZjhZ91ZE1x8WZz7HucPeTY6tnnGfQnksLdVwQCffFAo3",
  "key24": "3xENx5bbRxr8fQW5gN2uHgLcxGQ591ped1hRU1xMdbatcFjfgnhzB9En4Cvo2FBzc8imhzYFBmKHFHCGJARUNZdY",
  "key25": "4if6apSYsbLhpbXSpbdbds9rxgFoSFwNuMZxLnk6j6DUanTHXc8egNbLTkZUXecouEW999n5NNYi9mexf5ZGGKXF",
  "key26": "3WLD5EeUSdZ6UwpHiVhAB6dR5rPTdtJidfTuSuVaVGePW2JnrCwj23xFxniqU8RLaJhExumYUSUyeNiQnWMPq2m7",
  "key27": "2ZMnDDnYZQEhjWtyZvgz9F23JMjcpfdvf3K31MuKoXU9y3HphyEHFrcSkcfLzQmHipvFTmkCYQLWi4qf1zdoq2sU",
  "key28": "jDGAUFdnzjsvu7XCvCdsc4ucS9w8E1zTUibY4p6Dt6p39RwYH7EXeqwrGaGvttQ89V94cu8QebRZy3CQr2L1Vt3",
  "key29": "5rCjFBktCUYTiyZ7quuBwjQFwweMkgAL4JQYZLSHYr9DPhWHvbKApjSxmfBpSgcJG6mPzeNSMcTn2x2zheT5EPje",
  "key30": "4DLdEFFu7R4UAcYEjTNiXZNTYjjvaSzsrC6wUYVJkjTdWQU7mXCcjjtHDR3D3XMKhHXhVu6QN5w5kcskAB2qXo4T",
  "key31": "2FQtHzBwhxw7c6ifGTQ4jrD5bKbq2uFYQ3bwHmDmCKZTgsMvm8JdfB2j8dECSoqkvcMBe5uEMxW9zQx5ZVVHkTa6"
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
