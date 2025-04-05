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
    "2ng4nDjBVNUCTjmnaoB4VCtpXczmSekNXXcPsHooZF9vZc1NiTycp8YEfp84Q8FRGKLrGcLUTsVT76gw8mQhU1WM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpZCCc1JgJL59YZ4eUbhQWVDeDuj7MdniPg3J2WBYBevxJmnihNeUF5NnrFvvwNXnGDhRtFgUhz5qao1bmXKqzX",
  "key1": "wkRpz1gKkTjg6qTd4Eb8dfBT5SzJDEaTniVzGEw6svEcfLfiUK1BDurgqWXPJfA1Mx5rNcQ7qgucsjhgsrKtNx8",
  "key2": "56DPu3ZhQ4XjgBBRPhMsShiqRuL58qoeJsmujwu4iuYQAoPxuAvM7t8CUWnngzNGfnh21aGN1zTYoj6AV4W5HaiN",
  "key3": "4VwHc7TD9ic6Gs8KmfEfNzwTxw9skGQ1ePEj2TeWq4XFqYtErhjmhWUeGBCa9AUtj8YZTEbsZG368Kq3p3bvKo5U",
  "key4": "eZL4uu5jjPED6eUFUeQvBz9Vfyy2XK3ArJKogsHjzmKpEaDCMZ8Q7F7LXiZok3edUNumDxJoCCMt19ktzWQMKhj",
  "key5": "2q23h1YBKHAB3t6yMMLgW6rqoHQMysFazx9V229Nk96ztetHSUmYzDsYqdPRBqGJjUEUz1TKkRspvr9rDGNMPwVS",
  "key6": "5Fe3XbjYXF5RYTyFGA6UwrnQku3aqRmqzWijS4nYt2JvNbEBKSWEJ5QgaeXwzTb63MkUYYzafj41GSQmmM4UQWEy",
  "key7": "3ubgZv1zoyKEvkmJS6iugzC7aq5UvZEtoufCD34Aw2M5r1vTwBxTZaxqVrHWDNKNxsKTsLso7ZtJmg2Dj5YTQQba",
  "key8": "5BuiozVnMBvyxXenkdT6qVENeY49fnbANehWMvwcJVs98Ua5NG74zWuNoj9a6hr6q95zmHMriCfsr45ADMvchvo1",
  "key9": "4fTw3iEu6BWGauhof58MJkRkUNFfFQ7AegVMyDVjP4Pwk5Z29zHcMt1CzyPd1k3MRAuzmcMMs164Ca8owNNNc347",
  "key10": "3vVMNMszYTm6VgAYZU5c7jgt7pog76X2QXVFDqanz3HAdDDGcg4opAjUmhRJcWEcvKTuTSNyTiWgQnRt4DU7Ei9n",
  "key11": "3FCDRfoBdXFZkCVVWTtNyStY5Afxkn4h1rDafNXYD3Q18CHeYKoBchTA9xoiHnpcwmBvSxmu35RS5Yb7C8bQ2tcX",
  "key12": "4SmPNMuWRJum3RwNTu7cxohzezkXjAjZ5wVMJS7E43Fp1WHXZPaC8Maxwq95XBJaPbzR7xghzngLcuJwEHxqWqgq",
  "key13": "5NdNf3TXJHNVQzVyBYfBrxZwedfcZuxFD7SfXnkUfZx8YhEC8TX964j5wfpKtRsqJMK45oab1tM1wL5eycpdhTFt",
  "key14": "2VWYEgmXN5jT7nGrykBJ1TNKxwQhD4XXz8YLmwVszEED9FQrRVd7iocwNXJyrdL28PrgNRQQgNzPGYpTkD8sUsrM",
  "key15": "5hhEEZc3r9SLCfLdSxFBekSvMiELqGK5PVi7ZqL6Yw6ZrDc4QNLxqHmx8cq9UBDVbdAJ8j3uuNeAK4o4NoABkFJk",
  "key16": "2WT12LgGMFVMSXeQVpyVNRVE3oNp56NKwgfwuEBMcDEoebrdK3JWrQsVdhyxA6GpTtovzyCfkPEXeYDjApfyqFuW",
  "key17": "52xMchTKQ6BL4TYes6beWPWJxwHHFWHMruAGWgG4hGo46eVo6eiVqFhqZX7TFcpRh8vBu4oC4wcF7MyyRVyjLmGV",
  "key18": "2mctFQnL61BqvYX8JXRDKX41DLunEAMieL5ZsFUCmDfR1kwWu4RPii6j6YjXsEZp1LnUDabTeUzMfLtgjeKnKqpk",
  "key19": "2ezUCdFYrkeBTh22pbUfopUkwT6QGGoVpPcLyweuUwE6xUT2Z7nCsbwLSZDr9Q7jwthBRwmCL9HqpdkeMvpgRybU",
  "key20": "3sjLSMYjjVnENY6g7YoWQmjoQDTY9nNiFF6CANQdQxZ3dGcxjqe4CLV1sGW2vVuq29bg5SChwaL6y8fUAdcdtx6a",
  "key21": "AmKuqtJzfixoNKBNksSoxxUJxN2nhR7CoHC4buZaQmdYt4sTnsQwWQCBinrMAGSCT8BPjTTP64BHr3Qh7YYCjDU",
  "key22": "3vUrqseSqXrq548YY495aaR2qVKzg5cmjCPLcPS9EeiVaGTUL99sFdV3qMzKrZkPvi7jAMna3hBCnaakpYEwdpbM",
  "key23": "2u6VAiD9gSo8bWJN8mV4mGT1WmKwikuozH12vebQZpYTQLsmfyrjxPPtUbsbUbfdyQBft6PjKXxExMrW47rUMpLS",
  "key24": "3b5Xy1LwWnyT5s6bdajo9aEXhxRNHmS9S1gc49JuA28LkcnEY44DYn7JRG7b3WQU8XPbrp4SqB3EqVXTywaPPY47",
  "key25": "4tfLsZvyL7xkyzxnwqji2UtBU14KfnGajWJvHr678WX6QRXghAXCXPYLUy97D9qvmhCztmkorpZrC4sHJXfDTC7q",
  "key26": "2t7JZiGB9G8bmebNxcmhoVLNeVCVMHjdv54jBX33JeFN6nZfTi4nx3YCrjDQ32K9jc2pC7fnoRAXYZpoTad289rY",
  "key27": "gTcHg6ZDrBMNekF45hMsEbEfnWLKKJ3mDCHuTqv9v1EKkbTQZvGj1GijWzuYLT7ATCKTm3nQNgUKx1z1dh2oMsB",
  "key28": "rLmmUX7aTpTBPN294P1mKEDcqPpNaugE5AGmnvFcqL2uikcXyHLfMJ68st4HuiJev1ea76FF9N8xzTVYUBpTVJV",
  "key29": "5mELMiKQnvBm65pXV4tdckaquTqkBci9SpJcL7Xw6tqhyXq8RGB92NXMF7iTLizdZQ6DawApbFbNUDs3sDzWxR4h",
  "key30": "2dYBjwF6T1TSVNGVBGj4S1EHjLnjhCLGwyopq22ikJ8PAJe3wvVFvfM86tBqN3frEHchodSEjeb2V9JZ5DVdKthv",
  "key31": "s9NFJkPmmGetSH8xU7dvYyQt9jXiai6zPixq7Ujh4AwGEG5rHq5dGEakk2CjY6ULXQ7yr1NduQUZMULrnjMNskd",
  "key32": "5zjDtsvNmhre5kiZZZLjJMU3bwpm8pMzDPM4YjUNuojthKvQktHrtwHLyUFntijmLuKm11jtiRGob9iMYD9SKfji",
  "key33": "3AhWkVs5uwutjyNFGTs9S1o8vjYF8qChw6m5osDphjGBRTPEHWpmgtWE2patbCftvzqQwdWMDVMFvL9nwQ3zGQAn",
  "key34": "44Gv1r8F5B2f8x8QnvaX2tsyLYCDG26DGFiyeET2SetDhopSnDCmexHWK9utVAru7farzsahMm9dhsThDyRMDrC8",
  "key35": "bcCsE7FqpSmxDg9qUMobwDhcHfTYXGZmvWdKGoQmkoaULoyazc8T9iPy2BK5Q65Jo9hnoQUGdn6RtpmhwfB5Hhc",
  "key36": "2VL2MtGDXnc3E1BKcUPpptFRNJJ2Tt7GRdfbyQG2MLWcQS1tLkVhvxMu1Y8exGDmXU1iwwLhWrVJiyuaxvPGs2SX",
  "key37": "2oiBD8KjhKskUiXoAjFegKvHup7Fo8xsCQ1fe3MmzW1x7RTrsa3pwsHjeGjKD7B6hbtr91m7tSGo6NkXZab9BKfA",
  "key38": "2Rg5GwmqqwFE8NCziB3v1NbR9Me3X2v86NHg9NDaZVFeuqU6QcyGvSFZYj2bkferKmHW1rTPyCeCB1LUzY3gXKZv",
  "key39": "45igLrz9mriLDoVyLxcGiEk3RSFSQmoC6RTEvNVF5UpukcfJjQWFrR7vcoJ52dzYQvTQA9rkJox7Z8w8R3tupwiF",
  "key40": "4W9XkHejZ28vtJCXYRTPotD654kWDRBi4f2keWnbQQgdwV2zarTBUpmeEuTAJfYQA9mF2MDnucq6jXFuHsnciMKd",
  "key41": "3876wnLSBxqjz1VsxNTPu9qGwxPn3CgGH7U5GrLXy9aEEzf63djhcDMVZS8RD7mQ2Z3be84TMp1tp4KaZjsgmR2J"
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
