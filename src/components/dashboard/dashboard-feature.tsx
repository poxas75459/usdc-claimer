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
    "21NFHgqPy5yA3ehzoiDFsDx13gUvVgtTTuvp889qjLp4FRFvnjs3YhVk8a4n2s7PGQQ7Tci7DeBVA95Nz2LH3Sio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wmCNJBBsgF3SqM9FEcUjk9t3nirDu9TJAopYw3udmBnCjUSDwvWNhrL5u9kJZqJpZys9FKgpXz62gx9WHsN1fM7",
  "key1": "5VmnhEuw1WiShHmka7MatNZJM7ztWFSbkz62abUX5p233bfvJnmxh4r1mbSUk2utDSsK14fTe5cyLnMHM16jv4NC",
  "key2": "4cnzbtP5zhAa8J52oXgVnzTkikZ9ee3iQe3sH8FmcMv6UHb8gQbAVG1WgEVVpScNx32ZwLLbUAoPMjDzgerxn941",
  "key3": "4V4fF1uXwXCSVMpwZy9b6ZWey3sRm21EDXy96srBqhswwq7pZ1oJjNaodw7fmHLx32ZRau7zheUKs2gv4oVhHVS9",
  "key4": "5dnq2Re8mz33saCH9zM3rAkKTgb9aUUfcVMtw1c4T44bJTVVvJYdu4dxchsxnz4MYcSCjVzhmfdw9BZcHucaEvQH",
  "key5": "5oEqTThxqGyghZRimmoG9YwAzDRbmNRU5AcCR76MuGCucHcoY2uojeVbfMGYJMEnn9e8n4vz8ZmndHK9nm7hRxtG",
  "key6": "5gmn87npNXt4rZ9w2MxjhDoHckhyE7UzAfjjKMUwY1wshXQgxJdNxC8zRGFMCxngCZJDPeHTkK6g3u2jiRCwKNms",
  "key7": "vt2p29cdhsrBYxHMRscRM3boE3tUwhnLWrdJDGpuXopSjWGu9xf8HqDiD3KvEFRXEKdMxnPkQiW3LZaSD6rnnzF",
  "key8": "2cJtWFMLRKRdTWGBrq7W9Nj3yQY5S8MRGyzvmgm3kHNijYyPpcwZ8zdh2TdyiAJ89jLjUiNrPCnmfKjQhEH9F6Pk",
  "key9": "44boG3XdFGuhDLKG4qELZw7X6YwNayNRV9jxES98nfXNrJW8tyzHpGPUL22F5BUB7vx7YkjG3hFfPoBWq4cSMctG",
  "key10": "624XHCPdgMRSUubWJoheuu9niBQtG79tGE2unGdtQGSGcgw2nYxrgGpns9V2gR2e3oPAGnU4veghYr8wZkiymFyU",
  "key11": "5mSVgWu622gEs1at3dgDHWxFzjQNr4X5tGsXsVchP9g62MZgKaLcVBQtbCCBPWkATm5PvagAaj96qAiVDJVaTmhG",
  "key12": "5pCvfVcfb6iuYw6P9tCAxjPoXXQ4mmbLEdhNgFs3bhxohGzuwi8r4BbKc3JGBCewzepG1SH8zgj7sgJjQ1au2EEG",
  "key13": "4oMnCoxsVfmr7MyC6gkPKrw5c6UxgcqSEauYuKPSW8ycN3bRatWD1vUR9Vxt4s41cHkzp4EYRqNYcvPYVq1U87xm",
  "key14": "4ubU5dotv4WhkCyeYF8Kue8iQNkDUPWKgHaCXZSrGkT5X8ahBxEZLKyog9X5eW6fn8xbjrDzKuuadeEGzw25Dqp",
  "key15": "r4zTytBCYBDeBQNnN5kdwV5Gzxpa5fjgwvBYgLwHtCqdZksUhx4imZrEE5amuNji9YKUps7xSAAsrhE8wD466w7",
  "key16": "wXmRd8DBfyoWzg2g6ko7uRttD54h6ApnLoD1przjrB9FG2S1gycD3ruVBxHYNXmgkyKBKj9fwVpLrwepNBuY7kH",
  "key17": "5zsCp331pS9gFauaNTuTzzMUutx6o5ECmjTQPvCTaPrirJMAGptqNGZgeAok48y9Vm5aF4JynfupqTRgksxf2U6R",
  "key18": "UmUUqgeDfWhphvFkpKo4bnuCtXZUbee9qALtLCdJo8gnWscgyC47TugqbSfL4aVk7XQvmscPciP9KBvAuNd3Aaq",
  "key19": "4DDqyVvZUS1Rwyz53aLTfgAop1QypbjJYsWkaeRjjPWJGnaKSpAe7YYLkkZTEJCLubPhZrxZGqebUwr3hsL5Hqjf",
  "key20": "313uEtLpwMJeMNCSHCbksAJ5NDfCb1TkKyuZf2dBMAh6RDTnwhEUJFSUeuWfLZgvKp3HrKGHUS1XHpg3CEcixqnq",
  "key21": "3pJCwwDNxEXZ2HF1veLUinRyQwktAbrV5x9gGHdVipWz1GVF6ZgEYFiTQ239gfPGZxp51fecTrc7tQf4REBfN1Yn",
  "key22": "23hsk74j3aoEstWKJ8nxRZhHGJXJqSLSQkuNTJ8GzCEynZhejRdEGd7pbNbEZdCpFr8YefRaGvNjjKSPWLg5PVzc",
  "key23": "2Dg8xLf6xmn44sRSz8RvCew2C9U1eLexzBuXHy1rmb4XKojFP5oPmrSCBJeFa562XYb1dE4ENbRCjsNNVQWcbm3i",
  "key24": "4bKjfQEbT6vZp9pb47LFQUSsb5z1WZo9yeg61H5acRrbCDKjk3MqTKCTvVkw63SqRxjsqjyQVnm2UNM5Qicuk5up",
  "key25": "4nKj3VpBxSy9mvNgAUKaT5TUNNgHEjcDzEiMYMCq9pUdvZsxiLxYKBiNuwHQjDuGpAnQZaTpJvWxwCwDhgsVQNxG",
  "key26": "UFaJRgCyEp4dzLXVtc7nWwct4TMJZF3E47gZsd4JSBm7sj83pw2gRYkWNoHRzU9MbKyPYszXkP9mK3FHbcxyUpy",
  "key27": "QAG6SAfph6SfvDfzGpbdMWmbRiAiDqmkzWTtErPEL9oZ9Yz8xyH7xTz2ZYx3FK4pYDUweb5JR1Aeh7ERFbXysLw",
  "key28": "uvcR7rPfKBV3w1FG67SVTqf8kZePsLr8o9HH1tATcKrhFDcLViPTDPV2Xa6aRqsGorLVwyjPVYxMsoosog8TDgx",
  "key29": "2PGxQdah4CiaSmWTHJqbDBG8PmPJHQc1NAA8Pq3r3wdz8cM6dtRgoGjvaRE56kkzCrwJcxbx954w5bZv6MMADzLt",
  "key30": "5LKYoo48jE3a9d2Np4WUU4V3eEeKNXwGQiEjxKZMD2PYfqXMJfy9sc2jkFGTFv4QDpn44okZLgcDj8gKSZ2YsLnN",
  "key31": "fbXdCgvpyCb8bL8tp1GUXY8vSfPpwc53e3VaJVbsx3kUjVtdP29ofkvsHy4GkRd5YAESoPda1cL5UJvDLgETx5S",
  "key32": "4n6jcLQjBWCoEnroWAv5pBEWTeFbm5pFgiYJcTXq5wJpFMVS2rCgK1YkmMFdtvkTr5bkGpF2ZVvNLGYXRHzhAimS",
  "key33": "3G88u7tPnrdJ1s1yB6NV2hWKWt6cvSjW3VssVP5KbKAKJ2T29HKokwrpCRzMF9P7yUPXsw8ajoQeKmpFUeK9u43m"
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
