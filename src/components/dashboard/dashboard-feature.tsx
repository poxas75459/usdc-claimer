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
    "nGfch9vmHRH2hBmc7vmZrWDnTxdUktg2doKdBvJM6ss1XgzTpDSpMJ3NPQfmGRwevTFjzkLtmnxnok4Gu5xEkrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtnX3ASxAwsLm2kKPh6o6qJ9YcsnepmefmwaLvPjJWxKXdVNrKTmFuMdFZQKQLgN2BEGCEivT1FhnMhF1NHbvzu",
  "key1": "5mR7SkRukTqqbBS8CYKdkEmNdnmnrhGt4NyMoRAg349ryePiqB6DsAzz6JdvYXDmMYpPErNoNBukqQveAtQnnkGY",
  "key2": "3CpE3gQBDEX3psZaUDxZfZRqAYnEGbowx3oZYEqyEcLxAujVs36kcaJiJroGftVG3DKYdRiWhGwv4gAy3hDrWhzC",
  "key3": "125LY3ivTevTnYUzzUo1X6YAUrimRpHx6jLyf3tNGqaroHRAqCGjzWoq1R6LyoxuhxgYc9fMk1FU4K9iYdjdwTHF",
  "key4": "3Dn8VAPagcG5x8xD6sTdvpX9cJ3zdpZosgWAGqFpurCh9GedK2A1hz8j63aJi7teqF6eSceaGWVbPb5QmwKsw28L",
  "key5": "3pxbTncMQ3oTBJqtbsF62K48gr4bVbgiRx1Uug71ZUCMLRbJzcknv4akQuxWm86iEbUFQWg8moVXNChAwNFqW8wj",
  "key6": "43pa31AHZB9DBc6ymt42o4kRPKWre2WyQXgKt7MAaCcppBX8AJWanuWGZVnBaBjy61yDuXwNNBfLHhyGugS964Qa",
  "key7": "4YaubsFDcpFRcajEhnTVsHiUpAWxr4y4QZMdaXK4pc7a2rB74jvVcaCkg15EakwBtJE2xTGaQCrWGWpmyUArFq7K",
  "key8": "41eThZ4hVR1A3jvemukdF2wimGt77U6Zw9nuFTweyUAVF2wivmMbsvwwHYtj9AadEKFMy8TtgYnj6aoTePPBLs41",
  "key9": "NBU4qLcS5tsaPCjr1t7CMeQEVAPxnvwo4rHPqJ3kAD81bwAVPTt6wouKLJSXnCkbaVS3SMWdJsp7mgenkAnEorx",
  "key10": "2xN6HQPHzvm3bAMdhCSAPBnEYhtnKv9YyF3t1kbfz6ea14d6LNhse4bWh8vM5yHMJk6fLAc5vEG89RSbj94Go3L7",
  "key11": "FPKFP9KfV32KmWzqTA9h96Z21EReXa6adXmWQW74PFUU6EZbeNvfTTwUS3f2Dwpq3aPRM8vrxu7ttfoDRJJqm5L",
  "key12": "2fmhJhDEU3F7AoSDJJf7pX8rcjxn8VKCEzogo8iPCK7TMt58ufsfsjVdPPzT3xCySjEMsJeGyN6ymtE15ZqmNe1E",
  "key13": "1JrfVpewNFPGTjAboSVQbr4hGkp7QRqsbb96dyoiaP27r2EwJgkz6C8sCnK2DEi98mBBDLDJLsFzEMtseTntQPr",
  "key14": "3ucjnKV5sqn5oeZNxoBtqV951cR5Vw1USUTZCpeJxxrvgq6ix4UF8obrEEHEdRfiXVZ6TXPnR87h8bV1fzKSEdZQ",
  "key15": "2Rh3GmHXDUSGNwvHjTBdXrLeucaUMecDwvxmB1o2qirqEEL1CdLrisxDFrobwCcAmiWbUf2HE8YfBJQgophod61A",
  "key16": "41nQfasjwrV9rEZq7gmqSAc2ZPbNjJky8Z4Q8aAZ8d4NDZzjmRHQyp3U8Mv5vJZanG3RCS12iMva3vRceDKkRcPv",
  "key17": "36Rui5fjbZU6seSd1woe5SPixopxA5zKYWwBn8pjm1Lx1N6bLyQWPS3Su5QDhhCXtk4cQUMwtG2LhaocEDD9y47y",
  "key18": "2mrV9NNqhC2Z6Zc6wDCWnHqtVsQTnNdVDE8xhEzCwqokLDxyYdn4bFR8DTpdcCaAYVvw25H88pUSLU1SV5UaCdtz",
  "key19": "4zxRWawa3CptnJhsoLbz4gXTdwRwhcWS59Dsdiqh7tDcVY89oRf9xdpywTXWsRzeU7Z4zGXELwEk3xe7HioQRcBb",
  "key20": "4NT18umMaLUcc5B3xM5sBnKHu3TzQzPKXKhCanB2uf6YPmRtsGt6yL8TJbVXgLLzMeFUgqcnfE4ayvT7Kzn9yd9J",
  "key21": "53JPPieTiuyE599X7HRwWytA9CHgWdnVe17CLQhYZvuJGD8SZaATRKMjE45Ad9NZ9kaFGuVLmkfZ7G8AYNbJooPY",
  "key22": "3TBYqphQrScJjshQqevi6zPkf3QnLxhaWU3kPWK6nEt8Mj3g3K9JFxifDCs5ZAKUJ8MwcWHX1cquC2qPo12PmweJ",
  "key23": "4bSzagNr3HY6Rvom9YFr1vTm2RyrPCxj669hFkoV7nX7GpevgcM1SBU3gquuUBw2LNu3bCMYWkAtCWhch39X6bP1",
  "key24": "wmgNRjtjhH7Drrux4PmF6fYRp2MerXhzmjVrt3TmfhVMPLXJRNiYDgyGMYbL9HbtxDgTP1U6PKsyM9kCJZis2im",
  "key25": "272xZSnnGShmDRnnRsJFbjkjZEKett9kWk5bXxcDLZz2DscKHfpaFE3GECXYpe9fDaySoCSisefcKhfmYHJxU5SF",
  "key26": "24NeQeSYh7Y928WtB5iBMgdXvnEitJmYbRkdQrgyPt8GzvUwR8xymMKwJwZf2v1fAcc4M8qdNZseQoG6DfxPfbVY",
  "key27": "46aSBvPw6x2b56xYiZ99iKbzX6PpuEXbM8r24NMyvSfvHwvCGS9byvomy9S4FgyVadKfugi9EAUqkChRjLy3yeWo",
  "key28": "BhS3VgTqi5QXb3MvtDQVxEbLfTqCNQYG5bGRNcBEbhqJo89zwYa7nvKgyYuYezBKEU3K63R15ApqdTTBHM37EHP",
  "key29": "3N7Ne3h9tAY99CqnkrJdiNgE67HFsHMNaVmH3p5kmPdMEde6Sn9URtdMwaUHv5CgmriWLPFk6iEwN1edn6mkhgZ1",
  "key30": "EgQ4eySut81co2e8Tc3y2edXh4BhZ9muNCTipXuJENYYmow4wXtjJNqG3zrMQ6rWhPn7PLwzc4KnKje2XSaTN8W",
  "key31": "2Wi5xMEpKeHuFPiLjVsaxYhy3RvfzFuhXDemQ3J3F5ui75TcCScjef7uyEBvmZ88RRo9fkn3ePRNHupkX3dGh6Ji",
  "key32": "3bxce63NwVUYQjCCzBSksLVxv57mSETQnSbtH4Tr5uKketzV5KHAwmcjDFoXrK9Wax9cBFoe1HU9eAfgVXV6ogdD",
  "key33": "5srK2B43SXMhm76ojB1habFxzRr5zzFFXkmV4wJe6mHMrK7jqQhF8HWp4Smj2kZKvcA8FyCPehpyKqbMuGjCV1cZ"
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
