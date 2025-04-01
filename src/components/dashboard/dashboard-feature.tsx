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
    "3fBTeFq45EqnSCpciVCh8Q6FEYCbezQErRjqXrZM7xcpmwesDUS5JR2FYGm7Mv6Vu1SrmSkmrvod6PjWof8nx2Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3hjz3LS9fHR8RsG3VGCsy37LjHXr2vkpVD4uqaAUCa7SpETN76X7GSWUZsFMeETQfpyTQh8oa6Z4abosUycg1w",
  "key1": "LkTamuf8FarJ2MMD42CMDHSHh19Vinj6QzvM3iBAgWAtgfSt9edh3HSuxZqpxSoXWvVccBRGQCL9EAF4JELY76j",
  "key2": "49Dxxjea2XkJiYJFZVDC4b9MraUD1AsqAB4MzvmqL1JrwDmJUQaERxzvDFq7MRL77AmgsvE5q44A2bYxtnkoKU1B",
  "key3": "5NfGALPebkcKFwBquH83RJai556KTJWmN8M1MkxyXUJFWLeZDxnvVktr5unLGaGZ4bshLa2TB5reejhJCWy4w2tL",
  "key4": "55uSDe2N46B5ZvvGiSm8UC5qvhpLfx3gtZWy9zXkmFdmeWxMdiz6fh4531uxNWYRzT7sBV82AmZwYnFcMjAip61x",
  "key5": "5Mnju4cwkXYgcaMytnnTY58eTxHgSD8TYbQCQGk7qCPUHBWrGdUygxt9hNE6EKp7dgzhUyUycR2KvmmzkXEfYdqT",
  "key6": "43PPA3EZnGA1eYfuomEsoXC9GW27md3bT5JFAgMU2g436A99Cgi8SDPP1ZNtGpfwKUBAKasw48Gtb671JAenfzcw",
  "key7": "NyrvQExYC4UBjELNQxWaBiDZ8S24DV7Vb5akUhF5sXqJHgWUqCmRiFxWFSTRkapciUEVbSxtzw2wdtYdjBk646W",
  "key8": "pkS6XsjVoiScWawV6cbBJkrTBEFVvg94kNU8acqfzsZX6AkSzSr7ShpXh9tmvHTgiFnreSYZXPbTqGzijHSR8FE",
  "key9": "5Pp54XbzXQwdEMQpnvGuSHfPGqRzFsAA5bXZoCvYuMXsk8K67ynpv6Hqyn8RANybcSiNFk1fLhXXDEVoG3hMnchP",
  "key10": "395H91hDMvQQNhYgiSAZYFqPG993W5RNXbjXA6TtkHnSRAN45jX5J5vWeFTXa9LLDR2nkaXT6q9FAMH6bwjyPkVv",
  "key11": "435iW6yqFVPc53ceBLXcKpJcK5TkL6f6XQMarvkxcrdu9TxDpZFjWHtaGkycSfQ9v7kEoPn2L4BqzV8m8TqGqAYV",
  "key12": "4eBvoVfTJTuWCC1spLL2VJ7tiMFTpmmoEBRXaVv7247LoqAooKs9rQQ2zYZT99kQQZ7DjTJC3wNhFVX2GqVE8LYW",
  "key13": "3uZ1LxYUMNGayhgxQrx2JjHpLWHmrpgt6QEseFXqGkhykMAHBWv8RrTaZmT1Gwgr1JmCLCwkna6SiscEZiHEAHdV",
  "key14": "aBUGkNWPjTeVGNb2EpV8FLSE4Y7JSDMffBcyxTuE5eqtevBnqFWhLGwJtQRcLjzh8UwubhPFZTLSzSKdMmkdXLP",
  "key15": "PGME4jetin1tCJMoye9gbhjGBELw4XmQ9scj9dbdzfuaaNVUijXKypyfmveZCTtkgUC8ZapyoXLMj9LHLpDcSGU",
  "key16": "22P42dcw7qRFpYxHoqdeorUorcpvPceR8BiXLjha26Aysb4pXwETWykdbVP1ccNCgfrvPNqDETxe8215hhkPZGPR",
  "key17": "4Hn7D8BJCFhmpkduJTf4JE4LpeaWNkTXrdjaNmBfCZesksUJN1gNPij9DFbtrVRMzcJmqFQ6HrGNZJjiXx8RUGgg",
  "key18": "5FAFia25W9rNHeHTAyFQ5R7dEGQxM8L7BjZUzRzwKpBEv9dX2n7ZNdyBcVc6k9Wx8rtTaeHzoAA5vPqSnoMjHyma",
  "key19": "5gKFJ1rg8X2a186ynPcBpw1CQPmJ9rHhiW5N2hLEcMb6hfzjhmPRH4kdrsMJosvf2opZFHFxp4E4Vxpc1MReneUd",
  "key20": "66C4gPMqh2tu5Y5eyx44ypKgLj8NZK83zdxe6FyYS8ruzWrfDK9ZS3TXBX1ehR912tsuSdghh8x3TKNS1PymQfkR",
  "key21": "2EqmBZETpux75gKfUy2hkJGRLRjZgDfmD2EPY9vxZHR3cTvLr4jUHi7qKxgkyxpQPERi8mrq8NoneiU6uUTzgAs1",
  "key22": "3473s4cFQKFyJrp6653s1ks7KWhFCsWWKJWWPNTzLXA6BrSoSyqNQ3zyhFxLNGqB54ZzqFLNAJPiUhLU7nLVprhr",
  "key23": "4xCGwm2XTMaXqg7AfvLqMoKFubRYhtk9TYd2L1hatqboqALzz44WBnGsQDasVxVaqJkyd1BfNTDk2zfDniVHcY3B",
  "key24": "jBDBff3mwexrYYinsrLnkEuox8Tvbz1mQfXmYVqpi2s9xBfQ3qudCdwXuftBV2FJZpNANnweSr41YA6Xo3P8etY",
  "key25": "628289mntRyEMCTTbKsR9y57jkY7zMV4iLqv1AkhUmN4yGDdDn6XcJwRRgrzT9kRmwKeFb68nc1Dmrh4nyDVUwVJ",
  "key26": "HfGNTPzsv9pZerY6inGUqkbiRh1qQoqSjBVhPnogRGD9RMLRMNw59HGnf525bRrM8eNc85eVjaPg2tNgEQabc6X",
  "key27": "BHyA1aZypEwG3zn122D8eFmrsftjVK6biinkqkcBMvXsPGqc9H4YxtMKj9VNJUBpzUxgTtGydjMER6iPZVcGhB1",
  "key28": "4J4knbHjQ9cpF8FyLwUmMtN12hgsB6j4sy6gXNG3NWH4R3t9cLP3BhcLeUK3iowdSzC3EArL58uQvHPJJtt4qnZy",
  "key29": "hfwUz8VhvKqVKasMAFE4Bc6NmyEo4XDKzSEqeHXBQmxsxnarFGoxuYWHKtHzawho7LZHkhmC11r7uVJczEx7qBQ",
  "key30": "4CebBsziWnXNPfdKDPxVGx1BQSv3Kj3hBDxtTxWA7aUFVrjyS8Qs5Bav3D5Uim2S9YRo3q5yD3NKwyf4NwWTqbMP",
  "key31": "29QSm2cSyX2ZfmjTbQgoUzZsbgKsiafTrXMs8sYEkfT2H1ZRW899R9gSepriij21JUpusfZsdjWpSjMsyfGwF1vv",
  "key32": "3VNmyVovNEeFazjbvk1dWdUXxbxW8b9evm2i1etQH5g5s9NqpRdTDyHesbGjXPLmVwguprAYMJZ5rc91vgj1fdvX",
  "key33": "3mNYcSojGCo4wivY3AuhMfwkg7j4MA2ivHoXkEGBFLuMqgcogLAqGwV5MQCpd7sBb2bbyDEUDiEMC4ncHKnkdgwM",
  "key34": "65k2ASxKQoHAaMiJkEVmaP8KRFkbqef7KPdXpcwGnCcREyrgeqQeynw275s4eabJs3jWwsGwH2LgkpBCJTPUefmj",
  "key35": "afGYFKsps68XwvCmYa9jgmJeWY2B6BNrMyefsyEqyYhGSnWXmcJokZp9QAmnpzLwKbPPgJkKsCqmuMxRWHmDSXa",
  "key36": "4SJa2uq7588bUcJuUMtgVLvhcbNMnVGQXPHmD9YYoRV8mgEVbfTiFKmYoK4223wUNP63H1UvMdxPrHDHyu7u9THA",
  "key37": "2Fz9Mr4aNXZzhZQjchBcseXp82TrcSBNGEb4dkEqMuTkxyTgMGeycSpBu2DWaHBLyP2rtbFR8E29S7usWxbmKhB",
  "key38": "71TXYMDTBrg5MxDD2FYKiRgAz8fJ3gLk2oFvc2djYFfPJmH9EjbkGhZLz3vHKfpSpRSR1mW4UQRF4ef8GzWkWac"
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
