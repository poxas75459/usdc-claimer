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
    "4KJFUG4Vg6tUEik7Ba12o5JQpv68eBCq4uZ8eCuLmjQuvVyVnGQgRQ5frXG3XfRV769Em9S9FdecUGUp2WYydgvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ude9mASVRjeMSHRrUPEdVWUbCeLXcHpEjjv9zV87GmgG2WFF2kw4TMG2hdNWsxfw8SuyLQpvQ4ZS7upEeafnjJj",
  "key1": "2YBy4LDPm6h8zdxQmYetbvbCEGEmcSQ1KtzCy9Viqpd1brCg7kKaxFMRNx8RwVRboL4HAqZqp9NCte9JUHnc5pYd",
  "key2": "5mKabyvNHa7jdPRjaXo2aRn3HTh3zQa8c5A8mWXvavhbTkfYFutkWgjHYTWK7mThATgm4co7vxvD3HfDSzecqJTS",
  "key3": "a7SjDHdzd1inTi8TfwTFVu9KwmbASkdjSZXUcG5iDTjY2fFUGykm9DtFU2Groa7byEG9MpcxAb7DqeMxpTsVFZp",
  "key4": "4mxsdsVwS97UbZeu8Rc8DqG4pLL5XxhMzXKQqp48x8FzMegDPaA4WeXy2AF42FekR9iF6aaH2hUo3oZLmznNYmdQ",
  "key5": "5jooGqTsCh66z8fob71ypgcpx95iT6MeAk3z12xcQuBZhe79STWK9dduFzJpuRjxdsV8EwMsC2y5PMKy3yq22A2Q",
  "key6": "3G24M2ME2W7i9zBnzvvW8sdLjmKstD1c2mGFL1YYg7fnT6PCvAkuaAHLFgQJgexcuhRagmDKCE7EA9DcWVbHeMcp",
  "key7": "38wsrX4gK3JgaoYQScheUF3UvYark7GPGd1tTvL2mKFU7oYDZS1FJot1Rc4xSF4HVpG7XYjwZ7xGr4eRSB8mDNXk",
  "key8": "3ZkzCnhWooCHG8XSEt6KHGKAwM1GDaiareg5FJv77BtrE5WdgA3D9WTDLgCEbGa85UFUT8veL3L2WzNS9FfraarK",
  "key9": "593Re3CAH4MAXCVr3VBouhMo3gxY2qN2zzfWemj5orfywJ7tvKP5SoT1BnsMZu5LbAJKQNjWx16AfyqUtyTVigUD",
  "key10": "fFCQa9utJPzg2q6EGx9gbvUPovM4Hp78tSc62F7Dktz8m2R54uVUckC2LJxW1NJ5mezoBaFbrgiAYUgPremwoVa",
  "key11": "c3gpARGusAfCgM961W5DJ8gbMKWRsJsGHg767xhJiw9YfBM39S1pcZnqQpKfXYBL31ps8n88UuVfmpLLw1rWd73",
  "key12": "4wkJhw2ANeMNN97T9aYNcWbMbVmMSnoPnBs5SQ83AJ2eTHfEy5mkkqs4asmqFRN89ZgJBvkweyYPK1YPUPupkXsm",
  "key13": "5HuXLqnhCKVhHwMR4CgaoDxLUjLouS3kgqY1PiBe796ooPWE7ujiKfjoVZBTE1L8qj1ELp7KTkunb6SFcBQu4Ap4",
  "key14": "CffoMRZWRZnueBQCkFn6qMsDoiai1A73JPikv2VXzYw3F5UmwF58WqLhgRJPywsJR267sgVkRgEXXbpAsCurSZh",
  "key15": "RDJiFLsz4gjxhjPs4LyvnRfauSxePBgHAN2ZMJv49U6qFxrGoqiPP41YhuP3Xu9S24fBFemkmgHv2hjXBxK6uL9",
  "key16": "5LyFqoivU7qtrvzMH6AqrZocwMYspvnyfG6qM4s7kjgLHL4oiJfhSDitsRYLoG5Ltmz8C1oekTbTJNxp19CAyeZJ",
  "key17": "21UmwDJrwVqp3tzHszkB3y44fNjVB4fzUnewVNWHpKdMEN4vkscQi2UZhsA2f2uPF6Ufiz2DjKXBQ1BBQ9rcb7WC",
  "key18": "3XYeBuLjRgoYaikEND8a4UU6Egq83MDztV6ikgJC6akQqyZobEuJp26ckY197NncUnfnpPA6bGikMuHotcskKsEo",
  "key19": "58T5xoD81v6jWwZwLcFqhXLcQogfQ8AuiRx1LWQ5PK6xa7nNwDG8PNMDsTvgsXJ2r5X8vgyBEDRuHyjAW8hGKjgh",
  "key20": "5yjQWyDYynVGomry9yhPt6UfNHDHxh5kX8veSkFzx2uEztfWb8zDFuzeiQvhzqCJip1Gr2iLNkac2iTvAy8CBqQP",
  "key21": "4qtxZA2HEXTj3FPgYo5XHr3wkN5MYnNC5RRsQsJB2yQNf4GqEUK3ZdmdL8ihVYS3kSKjPZjwfQgovr26oLqp9FbW",
  "key22": "4acjuDJvhJdP1SXUnB4V9RUTUnKGsx7gWWyuyLw6gscbPrgxtMM6WAngu81VjokfCVba1o2PqNJYWpya5Ega3iS7",
  "key23": "5wQAsZ1PoB7iNWtWQvZgwQ5biESKfYVSAaqr9rRsrrgqzacfMhRHu2JNouZeUrduB6115Y9YdpzTSjjNNbFwBYqC",
  "key24": "5DGJ6bUSyiFghkmKXq1FiwEx36eBgWjHcnGwjwrK9XnXaEWvZBm9J1aCvzLrimXFGHZ6P3XCevRAv1Dm7DcfgU7C",
  "key25": "kUEM8HBGx9VygSadyh854EVetsUMczRSBF3iTjBQqkz3dgKwqDnYycpg5hD3Q11WhYbHRQykagj3XZiGdJZFxiD",
  "key26": "3afejnT3sTWoAzk4737LNxwwkYZgZBbBnNPhvtePhoD5DPaXgEeQLT8jdiXswLRGvKbN5XgGzEgxfz825xYnzWi8",
  "key27": "3c56LPWH3jQbxJ64bCcM3EvLxhfPUbcBjKKY8hCHSzDpk59mt3x92McBKUUjbDH25edsroK4zyro77kn375JLiGk",
  "key28": "RECe4iBVDK85nzAMyNErNYbTGkqxz5eihEnP4Qo7AeUePfotEzEwHqHdk7WiBAXrVeTGrgjJ4aFd2RXUVjmc3s5",
  "key29": "37k7Er6m3DaXVk54tZA3gmGe5taQN9Koz4sa6j9uHfaQsVwsGjpM8eteKVhd6ogz5by5YY7uKQ5iiu8rJrcdZMbx",
  "key30": "4cVSFN1wegZgVqBUbGaBBShULYLYfa9kqMyPVYb2nsr9ZVbZVbmxvskq8NBdbB98sZRyrtLFidJEaeuNCxZGXX6k",
  "key31": "53YD2vnpAc6yK1QmJMPKXbmcvDoVNbbSDxuqkEaesGHkN1arVAW32h95sMpvLEvuzrLZ3QDCcD4sw75SmDGWnSd2",
  "key32": "52gWhQ11t6iPxitLtJjk4gMesnJpkWsZpH8YHU7EKwwAJbqYvUGm17Sgsi15f5P37NMw2Uv6veTqRHoNEqjZ1GSF",
  "key33": "3Pjoio7zaYU79Ts4obnavJjU16531B39wiVjirf94qe4nSL2LDfgRwwsBdgDgBfKThrfijXgyVwZzDThgcVqptsb",
  "key34": "4mzgz5Bm4qLt5vroBQLETSj6Gfz592uiZGVezaNm9PmAXkZDsub6eWGtq2MgF7QtHUkFmya1MzxhFx679MT5hmSG"
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
