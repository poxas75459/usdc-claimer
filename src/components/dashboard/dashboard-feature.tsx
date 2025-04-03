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
    "Y3q7qd4HuHPkr6KVn5UNxPHTkAMPSpGWtoZ9ed5xZyCSaGBKTsnStSZkPQQc5cgNGGRq8seVzEQwtjpMhYiX65m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3tqAdog2uS34dHm9UWgP6vfmuH2f1EXMzZQMYUu8i7mgaDZ9SuADX45XNgZniug87UXaKxDpL6ECKr2uDhfmSo",
  "key1": "4Lhq6Tq77R7ouxMDcmw2w39ZGJ7CH9m3xwhDRKQWuf1eL8U8mWEEeAPXLCkxS5V9nLP3ojBhAcJt6SBjhGebojgu",
  "key2": "5kAb3MD1PkYUtrBZuKwYsamXoyiBurKy7VTzJtb7WdroEh8uyy6mFPcRnZ7eSguax5Tb5A3TaGWi2eexxiCLN183",
  "key3": "WvBwZiVq4VWAZGzkEMvhnN21EDCstmu1bJKcdYk5Up976Z8RDSfZCXX8Zv7H1zy9xx3oYpQwV6JdqjscvZMVuTF",
  "key4": "3MEo4MXX9jfPDxAKrxcojSqd6pErH2SzfK8FQBBLnouRdvh4P8ADZ2THz94ErrEMh83SkvxqmbYMzdwvvhNULHzm",
  "key5": "3Fu3apG7o36zYkzVZ8ZvwP4YimtnajA7Zbq2yWhCQZg8BKo4tHScjCgUPVEn68FgVqSJtkrYeyugVQyVBcJry29F",
  "key6": "2Ski4YSzXesj95sQGzNFo4RpDdn4n7iRm5x61q2meuR4QrfTHEKF2qJJuaG8dAxVa8EiEG9UvTdxqyqrwNygBH9U",
  "key7": "2AVHszQkZcUDwutmF65eh845zJkG8BRMvPXzPFi12JtAA1sEQs2LBy4bjpe8VaetDmQQWnm5wphkqzom2pzAJ6uQ",
  "key8": "34dbM7aPc2ubSnuU8THBwQ3r4QRYowG5A7Ew4rhuuBjuwuvQtTDjjr2DyGKecfpdgME6xqgR42bJRDdR77N6nYm",
  "key9": "2oFbBk1k8F79BjD1kpeDMiUSmhdFsVZQDBVVxKX1aBxujs94SF9ifDLXykKWm1G5SE6RZmJeeiSqRF4YfA5738JB",
  "key10": "4ZZHD2HP9Mv9HF43m4KPR2GcaxFho8r24FJe1useEazJiRh3fQupv6msHcXmvs68wrJTwJA9nzpev5VcE6ZgwAh6",
  "key11": "4Jzy5fmBCGsTwUUEXvNUQRh2GEgjca4GG2sYN1mZ5jPjrsQBrQka4tuUBNVB5LcuGtxbABJdtXa9s9SyS5eirG68",
  "key12": "mhf2u18edMvn7ru7s41ZRxaoGF5uLe6NoAYeVFEEvzXJv9h5gz5NFqJ1tnMCM4whsHUNhKs312F3kqL6zTtjo6o",
  "key13": "Jq1DDNUGfEoYrK6g5adD8aHe75VyhhitAXn1Qk7BbD5tQ7hyxEnmmrEjKZkbiMfH1yNrHNhppsN1BvQn1jPCigp",
  "key14": "53g2FDsnfC9TLjGCeFxV4PpSvaZbbnEQBud6NwdENPVFtBzkw5YZ5EPDycSVgfiZiAtS5rz39LXgxNdviktz8RSj",
  "key15": "jtUxD5ZJomkTyRccC6fTr2w5snf7xUbBkr5qDEk5MLeJFNuuUgnorekGRnsN8TwYU3EQ7yUvZYWefZyv4YH5e5Z",
  "key16": "5xuDSP9n7ECbtaS47g3GHciNTLdAxi3oEuujrRgUgtQjYvftCNkMQU8B4BrcRD4aiottie2MsDCc78ziAq72xXHS",
  "key17": "2CUfR3yLNMTteazfFAbTSBh1KMUxZhbQVYtLMsVVebvh82YHzHN5WjZi2Ui93dTnkdHWJd5zbKzvS2m7BGKr7kzv",
  "key18": "5f6uGcUYZRaDYB34Esy28MV4hAi514HEjY6XfgVhf2vbrNw9dzVgujSAFfHGNXAjjKix6yN66cxMFW5YDy6ayCys",
  "key19": "2bvxJ1xo4ixms5NfoeXqQRdizyCS9evBSSzs2z5pdTwsNdJeBUZeZVCmJ279n34v96NvwqyLaunG4QJvQngqo1Bu",
  "key20": "5igT72vRmcRAyEQ973MWPHtviWUiK45vY4GnDcZCfvjLTGGpLsMANT7bddQUsLw4BtNdzECLVzgvdedTDL3yqpqC",
  "key21": "2Bn2wKHJPpEWVyosHru5wq7ugubHXfMCP2h89YYmPnebyb34Dm5b8bGnK2hkgtMshGJcBdqiFi1PTqp1jXfWXVc2",
  "key22": "51D1pKCXVVMueRiPUTbJSeYuFFVzeTQyQ8iZ1fnx2jPPhYxzTGoGPZmXwGUWtj3KVRLBeNpy1EHrAEwuUZALbStP",
  "key23": "2qazYY44S1Xj98YeEwpdVUesXopzuSZGxvdhoCHHdfM2LFsbYKPfeRXLYfRRXDUD3hz8jVw6smueuQLHeV63ehUD",
  "key24": "2agkTTQgUhjs7AkDsDp8Uuz2ryobmebPgU3NVE7Ei3ecuqJqxDKk6f96d8rd4Am4STcCyFTVfyMuLJd2hF6zBt86",
  "key25": "4cE1qKCKTENEwAUbTceFrNSEUyGTbMpfUyogHDX7L5YUwFdDYtV9N9bCWLn3bhQ66x48K29i6qKk97L1p1UW7ZKT",
  "key26": "iTxEWXSrNJHxp7D436w9bK8rJwC7wvpXxcpUbAdcj9VB5oEJZbz7JRFTDEfzvjdUwXXi4Hbc2QTV59a6QcKffzi",
  "key27": "49d9sstTsQnvLe8nCJtRGfFRishrpK586TzGEp6KEprSuez1cFJM4mVnVGp6r8H4gEAhaHStbA44vqkGeJNpgTDy",
  "key28": "2V6EFuD7wP9tB8816GMVD8GxDmH5caPH8x7LRTcedQeoXYvSfuL4E432Wz99D7SFAP3sxu5NARmGtRT8zyEZbJR8",
  "key29": "4x3xv8GqACpBck5gktboDF7fYYDSu7JtxQe3CM2UaaNoTxL3FNyhVfZeGB24KixzEn1uGEze7vhTg1zJy8MUFLVm",
  "key30": "3efdqVmQfMpxNtqQVC4HFA2fKHJEVeYfbZfBQyeRDRdy6wMBgD6wLgmMz7HiS1VVPMcGQNTAewaBxzWfJELL78yN",
  "key31": "5m2JmWuH7ryDdq83S2ScRCigtQPtpmGrnqCLYV3FwDhArvzcE5sfr7afp4E3Rsui6WKQFKxictJQdtAMQSTJHdD1",
  "key32": "5n5QN2uwFYUf85aiFALUusk1vYJQwzCeNifHhQiB8PiMrqmMhzYEY7wFgUuMC2TWNQkBK6JKixstZdZLe5cV1hzA",
  "key33": "49SMB5KUS3ixvYJEYv5D2nH9buXaergyGEgdnTzftzM6Dzewm2NQ9HFrBc3zTBD6ZnuMCHtvkeY6yyD16KYyjL92",
  "key34": "5n3omLHAbrDCHb3zov73Pu6mdtkJGCKGADAG7DM14DyJchNeEx6d3ea5poVwXMetjKon5AdxR9qTWoiZdpzr4egu",
  "key35": "4iM9ELurKXV34MeuvV45tiSdMac11EfJdGsKLGMMZ66s6GaPb3ZiReetcyYakKBYWATiQz275qtbMk1P1RBH1uy5",
  "key36": "2DxAHFJHRhupU9q9PQWoNsEKwjtUXqWJeNPoxkxt2muMmA7eGVKMFcqPoEVUzxDfZ97RJbAniBetYpqVeqjy7HWu",
  "key37": "2qpSoxFfPBXPTYcJ3nYpqxKf7T2rbrKCt1pYxEBrK6yRo4Pi4xnAzs1cgFhm5MskhUeRRxLNBXarvWCHz2qSH5EW",
  "key38": "uC6yGvWQUdAwzPR8BJTnXREo3pQPdwCtQdAp2Kuf3VxbeayRxi66WKkhcnMgWtmUqqsnz4P7hf9bBK3qeLWBPyq",
  "key39": "3yP15azaY6zoEbBwbVRh3CxjtZ2qYLntQ4vZo8657d32Rg9sgtTYC9PqqKMRLpMCprzya2U5znnm6WAr6Egc8Mme",
  "key40": "2dZXtGB7sk5pAnLHaMw6XSmXH4L8d1H8jAzsVXMs6zEVSSD13FhLEpkdaDWzVqVWwqKYXy918KQ775ia91HryF2P",
  "key41": "3fZKYqMNsKg7YGu6mBCxmDom72e6Wirih7kbEQrdJX35SSwzCvhwsi4LPmM1RZBNKcHd4WNwjyFvj16Dr6daPuaQ",
  "key42": "58f39QY8DrZM11WHrDtPER8aHmrqDTT5BsNKkuo1ysTRhGCfChmJGQ5HA3NU1sNkbfufD4PRGGdsZeKoaJ5HCGgQ"
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
