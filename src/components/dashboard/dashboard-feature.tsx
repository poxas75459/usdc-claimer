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
    "25HgutNWj3q11KT1LDaUfLZEh3mC7dEKGNQsrHWSLkR5dZqe7sexioF7pVpbbJhDBwR1FknVikvftkr15a8V8E3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZBneGbCvdXq1tx7kvw23h6n8rvnk6jjeGCJ4BB5haNuc12Z79sniv4eRjffaaPRdrCQvLEAFGM3uC8jHoB7kRg",
  "key1": "ueUATBZSdfgHUyiAT92hRyTTgYVMY73cyrtQYTLZG2BFc3LoLSFX4NbjDJHzHMXgcGfmMKKd6szxUYBK2zWukqL",
  "key2": "4UCKYgSEe8GBDLS8mQtJsh55Rca5QeuSCMxwSDEMVxuRit59QvQg4DSFGQcqJ1RVD14b9wrVzM4FTvdC7fmohzRw",
  "key3": "568ST3kF68CMhmoAG4ZLxuJGqnDqcrVoddwQZYKZU1HMwUXk21VyFRvWpdwqBEvmMKdrV5frCTF7JB8Bwwg7nWX6",
  "key4": "4m67CiXTUWXiUuj7xJAshLgCZc1pxK4XEobq3gPbTJW6cvt8a5K8NkpsbAgxcaozfKevgBdM7P3TBZroUu1waQoa",
  "key5": "4gruzy697Qjh7fJQCTvW2gMSxeAFsgUtYSxRzFYAgbwk6dcvHAEHRJ6bvUoQ5PRrKALaqw9ssUT1GwVokZdwU5si",
  "key6": "27XcL2Efs6qVESc8FZV5gv7ym4kuC59fZeUQL7qkbhfqPMourBk1cRcHidDfBuHNxF19TxQ2Ha6A6wxM1z3sDBeB",
  "key7": "E3aEuhDi4LzojghfiYv1ZwQe5yGdizhGs8D3oTSYTfdtEWoXKebjtQHYx8xitwDmFCkttm4338PQVx8AFy5TKix",
  "key8": "43NFeAdQBRoeXeS3cYtML3CpcRvG8dSH2jdUj9VszFT3qAHB5pggfxCW6W9q8HfTKyKMmSfdePcPbE9VGjhCV4wf",
  "key9": "2aJu3nuiBnmk8LRgLrPFEYo7Xcu567VCaUAg6gwKCR3RVnmtoN6P2EdHgtyKffYCoRW7oLoJt4a8ZHjzDWV5wQMb",
  "key10": "3wUzA5BfG9f6naMsuvSUrXQrCYuwBHTjoKJhwwKThsr7EXjtffdGsHVhuhxqBEvtFvsKQchG2zxNahiFsJPsH3mo",
  "key11": "5z6yvhVCz8cy7X4DJBxq69KUnctJ4Zttq89RJ1LixJc3bKSHad5hvT9rqdGEK2sVqAPCe3KcJjPAUE4boSZojFD",
  "key12": "LUMiep2kfpobWmPMvhej5297aKeXnXnKSxbc4cmewSWDVGjeD7zTxXxUa8qPhLSBMxN9LBK2yhTv67jU4XUGAsy",
  "key13": "2AC8cgnB2eGSUtDLVhhoKfhFW5NJfm94cSBRJeh6tqfBeS1r1SZasXkhntRyWfjDMJjdk79219he3pZXC9d4z61P",
  "key14": "2X6q9kRsKkWHgNTbH7X8e51WnrAxG9fNtt8sUAngAs1DASkLLDLbRCvMJ5SXApJvKLV2FnCusfGvTEfk1WWZSHpo",
  "key15": "5KRsi5C9iCTrbupsc58Z8uG3EXxFkugBLxz22NZSkScY2bP2pU45whgvgykJXH6PqG1auQTwSrcV14PQc9WT5MEi",
  "key16": "5hLDxR4WaWYvVQ3KzsJnECQrLCb8ATpSHdTb9m9TtfXCrn2ZHA4L4gWShpsWzLs1pTdtDwetcbkq4cLFyRu8ypAy",
  "key17": "YJguypStUMzPWVFPXq48f3ZyJoD6JXHvdcwqNp4msRWqTn8EWmPMVjoXa11xYjezdABBACz1aKe7z8b8iVNKaQ4",
  "key18": "4NxWnF1T1yPTMLEApjgogGC5VTyVgY4LvzX2ptbsW8195QwVYZPsR3hLe1MSvXn9mbYQZPpQwJPR9eseBg4X7eGZ",
  "key19": "39zdi9ggk1ajXUps36G5viiUEhyN8f8cRVQqSZETRd1yphx7qkNg3BRf6QcKXoLJY94V55wVxDoBA3gFyD8z3EeL",
  "key20": "iaNfWPJauH1B2oANXRE6oLH6QK8KvDRWyGgiLoMw5T5ePpWDnTdSgSpGEEnDKdr5g2D8N8GagpW16KWuAWKZq4S",
  "key21": "2VtUPdKg37Tk51Kj7aeqodoJJso6fythUbVBUmRNzRjHZHZPKKDjQVZRYbBkKwt12yCkb5ciiL7YviKQharhxshd",
  "key22": "5BmqmyzykjwHXAJ7euupPwtxJuLukVRgRiw6RssKLqLu8rdobXK5jrxUk5QpENaxjcfSKgYH5hUXqeiR5CtjcR6f",
  "key23": "26R94dhgRg8MamGBuznfkm1gSjDvAtH1HUeXF3Vtce3BWuxHa1tAEw7K9DLKiRKretkKnyFigyUpBFn1ySLAAAWG",
  "key24": "5xJvsCgQwTPJmXThfYsjqLgNXULJj36JhUn2tXbmUekLWZKKab26UKKtyxGupASXbxTPZAJpdUYvioupJ6HDwMH4",
  "key25": "3tUDnop3CDHWfTsUTbMkLCSYgjkHHPPQff2sGqGKbEPyFvxKr4i7dykhzN9C5WwM9PYsrqVurXQUbnvNxwTLaEat",
  "key26": "5mwTLBjj3rzmYogCiqJfBhuQL58hFbz1rLjyTVk4bXdJEQtXWdgLzPxE2oCSh8yHP1FKZr9yqxrw6rqbQ1GULKQ5",
  "key27": "58vAPdnLzg5uPsQmLV2iHzDuaxzchNVK76h9gRs4eKUN4Q9rkrHjpEC3wM2GypZajy13WDtG97aGKYAjJm81meDz",
  "key28": "3X5qhvkVJx34KteprtoMFgjuZXF5yShcBXvvCU6q5eMyWsjLCZzrbamrcGgJ6nT5N8nrR9sfER6PuNC2ErBFrBMv",
  "key29": "423r4e5GqXreJZDrCHNB29DHxiHFSXD5qLKn1cXPk2UdRN3cxRRTR5q5AgxjJZjiTnALEcpvRB83ud3oFemMPxaq",
  "key30": "Cxw3TMmua7oKK4XHsNMaqe2PzBGZoHASjBd6FUjxKwAUf5L4XqRn4w4aA7jL4jPuzRwGD7bDwBUDtdvPnh3kNWm",
  "key31": "23t4bTH12K6RZKSukqViVh7HNba77E9PsrCaB5tUNWYKLG2rrzViHv1xrpv12i7iZpLfkn8iN8qfUUUv1PiQ7KYR",
  "key32": "5E7ZqwfzrzC52BCBmxvhKRujkQhm1HqzToHWd5qfASkzEm4DqZydmXAJgGowo6NtGrQvszNcwNi2K83D3Wu38WBo",
  "key33": "5DtLARYvsCKgVfApt6xSQpSL42j6dc729PSqt9Fov7bXY1tF4b29e7L8wXQapig778Hr733Gkrsmcp3hGK9FN5o6",
  "key34": "2uQ8eLbXtAumV3P2s8YWwCVtHXTi4hyGTwDYWoFG2RiYrjs8o9J5Lfbwg7PY1J1DFYNj4th6Jmcocr4zTggsBRKD"
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
