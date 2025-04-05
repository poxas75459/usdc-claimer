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
    "34uPRRzLip45JYXEsvi1oQMjwcZKXm8xkb6kPG5BBzb4xrrsw8ncZw9S6bM4Zeh87c5mmddKb9C6oRFWrcLFmsbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exCHhezXVDG5HWwkZaxRqmT2giRVs3kLDj148pAd8552mohSP9yTGY46W2ktXGDMZ641LY3uT8FL84TwcgLTs3p",
  "key1": "5gJ7mWdV6pFvQcQhi53ZF8GzrwLouSKzZD7jjpFqStLJFHGN5UJf2LYVUhWabV5Y83jngN1RYYbCJxUaWzW3ygZA",
  "key2": "5KAPZYbUDJ96VQTRCTF1nBV7LnHEcLoX3a2GGxo5wREcedGHRn9osig6ErA9nunhcGhuKWt9P4hmgG5H7FEgi6Wo",
  "key3": "21SJKJs8XtKgAyAbVki7a4p5Cvnf1B9UWWPHJFxsVbDVYEV9PpzfV3ng4GzZWJK8QMnVkoGY9Ecq9eyipGyemf6J",
  "key4": "2bWBKgheo9819bYsC5x6NjSVvrkpE4wVL5HF9Q7nxw4grokQ2YXaEKWDTV1LxjcCHn14LNKm5KaRU42XcVMJ6JyQ",
  "key5": "4A6pst3UMMHcs94PB9bZtKd6Drr1aYS8RAfhVt1eSHSQfsn5A4Ev1SgWAqQ5K6rRefdxuXhu59U8137k94JPQ1Wv",
  "key6": "5HWGNMXw2Vhs8F1jkrWdUfey1RSVk8Vu3vKrKJgs34eyL4QTMGEsYf18TWqC7zn5LFnWvYdBbAYBVvhfsD6kuGXU",
  "key7": "5joSHy8AW4DEZUCarnhe3LPhvhysVF5kXZMhXB4UGFf8HV1a63SQGTkPAj7E4rW47wBvEo22jAxpe2EMqpn2UvuZ",
  "key8": "51Q1onTCbxAb8AHgFCzk4anPjuopoCNyu4NhsF5YMrzaMQq3u3Ge41LTPcob2wyeT1ZoQ7u9bg2az8x2wnHd7iy3",
  "key9": "5FtcsiGY6PAv1VBxBT8rvWBkhCN3HfuGJrCVzX3WJv1XNit24VvjzkCnmzjd2sm4BUS5FPsUJyesxUCzkbWxYSe4",
  "key10": "3aTWkNuYMyZU2fYWJf57oyYmffCXFFJQdtHDku8Yed8RKWgsQfjBBxu3dGiJQxUfE5B19ej3EvVLp6otvHFCfono",
  "key11": "4q7imyVfHiB4GmNVzk8eRV6D5XQenbxjWGHRqSbNUZdxJvn3vqEtAJzXzdsJbw473hijeKtRrkFpVYFU7d8cADCK",
  "key12": "5dAQyc14nfEhL4D9tprw9gCMi2kXU1mLCoFg18yUg5pZ3VKjRRSRj4rSkj9526uHS5eHpgy6GiAxgvgmH8vwxGQs",
  "key13": "2nHkA6R9iDZnCfpJLLkpVcYatFQFw3Ri2npvYk1isTuKbRpqtL15zD4YJ3NkcfLv3jwuZULT4QMSPWJA4fs1vW9V",
  "key14": "52rSCSbmZGCFG8S6o4beP2xn3CYCQwfkxRjU72C55i5Dye6SZwUDcA9ugekTt1xNps6Kp8N1qkQzSoqiMmuVh4dF",
  "key15": "5XmBtXJfzUcjoNgs8oz5xtf5TVAaW2kGqMCjQBr7k71QPdbQDVUu3i8PvhKFpgVH7KTRN5kTp3crNuViFnG6bUUC",
  "key16": "67pGTbMX4DvArxCnshz38i1J5fXYVzEhKnAVyAPLUWhfDniLmaKMXgsRQbDruus6jyKZYw15d3dY7YTQa2mETdvD",
  "key17": "2DXawgGcXYveMKbxPyUSZfGEeDhXPxWu2ddy6scoDfZSUhugtAAwdSrhtj5ZUrfTfqWX5L5uKPUCw4QegiYAWYvF",
  "key18": "4jmBeGU3mbUQwg45deDkqpJdGSqPiVxYMhfKtH1zhBsRNoPtFv5eazrC32jJqe7RKihFtJhDmfRTsEYV4AWyAeSj",
  "key19": "3gfKRdX27EicvWPmewCLEpgCCQCxYiTutwYCSaxyuRCnSi9u749bUcUCdTrTJP9LavTZxiXSGsKpy5wRkqsF8dAB",
  "key20": "PY6JXHeeFWTQ5eoitj33ESjZuvpTsb1dAMz8QThX4F9RfMQzXzi2YPqQtJ88jDwwgiVTJBtZgbrWJWPSxvdYFtv",
  "key21": "4UQd68yvR7kAQeESeJfQzvHira8U5UizPFKpjkM86TJjDurv8ySxttKPBCSfEFo8NXuCMUjoZ1WFSGw8nCkje7S1",
  "key22": "3FsqYzq7cQLDoCX4a5Y1nZ5EFsXNFgc1WYLd4KU2zn3gbSu5ZVneE8Hx6yzRK5SgyoFHAxY4n41Pyxs36hHWn6pE",
  "key23": "4EmZX1CG1gttEUZw3jeT9KsueyHpmPr9Nfb82kJERU23geqzAv2WhEdbnNfc3mJFQNYUKTR4ZdZ7ceF9b3ppebjn",
  "key24": "5ide5K1fTWEqcG61sbJe49RXWtnkcGECbQ8Ym1GSe9damTemwMaFGiMttzYRvikReasPFFZiCwGhKoHDaXkHmkNc",
  "key25": "B3mdtQPW3eafydUieDUFhPYJVNA6A5jUcSmmkSLRGquGgvDEbX5YK2YFhhGsmXsamzkJWtAZd9eF4eQLMzNjvkz",
  "key26": "4yPdjcaR3dFJmq1TqS53pKzf6ehn7jsUbUQfJm96HPp7xaBUnbGeiJR4c3WAH96ioSHcjHqUAqqaWYjH1D73zX4p",
  "key27": "5Rnmnd6faHJoMmWuqbfuMvP5hhq5tV7A7SFbzCt4UUDJqQcWxfVbD1T35yxwehHHe5KqWS26xt7QZv5CwuC7qq57",
  "key28": "5ZFRKKiJDVVNFvUpm8Uura2YMp6KvCrjN5MnPVXRyqwcQAFTP2AF1JFWt3z3uqJ1aDuQvAJRjHEviCMKjBRLJfaU",
  "key29": "WwLDBNmMGSXbiJ4utv8JKSP17noijGxAiH3HT9CkeckaUMDuSsRcz6CEiBGV28wNsKaq4mRrHvcYxrGCxzFBt6F",
  "key30": "3LvpTe7mdGyooMHuhjYm6EzkpNDJihN7UAfGbd5LhnEwv9mjpPBeT4BsWCimCyBK4HRB7SZJMCYuvtZptaFVeibU",
  "key31": "8P5uiDLwb9djiS3cR3e2GUAcxRpan1BXfdQB9JAeoYUgDyvesZ3sDdQUi98ovwzwKtvdati9f2ZtF1Zwtv4cvkt",
  "key32": "22GnsEtAqkkQ7wm7FcHrCxUPXD5Ko8toq7Laetszv5ajRRPqyF2MsejZf9WHibwGmGAjcd2u2B2bZwc4aQtK4ac1",
  "key33": "2VH1dPrGwYmQFar3dDHjijrZzntd2unBvEZnW9pKHhE4qeFtfv4ED9SrQKQVfih6fUio2zWRuKcSnL3oEc3un9Fg",
  "key34": "3wEachUicXjDUKK2ZvrjesiYc9jo6wiS8kSwpGNQaV2kQ7s12WVSzfLESEZpxeowhqBzoz2a8zYhoV1uieNbbxV3",
  "key35": "3S2Scc2yipof9d7JZKsjHoCHnc9BCs1MqTjw6DmV7FSqyQshAkC6LPFKAstPZGzzd4swR49cjTypDW9a3trt94xw",
  "key36": "2xV8Gw61mVirxkGPTXdh9hwJMPZkFbz9PeAU43NhKqJ8CjktWTX69RKGn4FfoXQ4Dc6ow13mhXX2VVN2QB6RUrQx",
  "key37": "5fV7SiMUUaoumGK3VxMtyDqn3uYwyCogAi5i5EBFzEgsCp4pzZa9dVA68D9WrFmE2eac2gpAKzT3N4F55zYTchuH",
  "key38": "2677be8D9e6AiRtGNRt2wCEQNChEUs3q1DmJbeXS5QmNLS88XNpxdaay6xB2edjDPbTr1pqhMxNV5DkKGikzWLdJ",
  "key39": "1mCL1zM6kZXThjAeqCnxEs5hXCpxPhkeSVYJPcfHkKJmb3E51a7W71bJuG7yyoKCjhjN1RMuvFLzXRX3JKX5G3H",
  "key40": "51VCFfBT5qbomFMM2qVfKwMsh6wfe16i5XHejtoH9vMF92sGSk2yCLDdHCtTr7Ajys22q8WsppNFbvJP5n7abu5C",
  "key41": "5pMA7RrHcvy8Spnu1XEHJPtTAQ3U1YE3cwLuXb5SYF3DATiRs3GVYccLWu8cVRp4pdjUrBSzeWtDnVoc3KqnbLpK",
  "key42": "qjYfs63ot1AvpmjnqmHrVkZPtg18dwnnYxbuPoeq7715eAoQYXNbiWGW6X8gFd5RV56DyqmdThho5u2sfqzXVKW"
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
