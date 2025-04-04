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
    "2aonRznZKcRuFMt9WSDgeGojDPb3BLR6wufDmtripdGEYN11Bau2w3wThCttkfcK34nuKjZTLrcuHpybdUys98HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ovT2BZjb1xvhUW37M1h5VM2Dd6JQETqRqRjLG91EtnPattbtBHUB484gv3ixU7DK28Kmz2SfMdtgiXz4pPCNgjB",
  "key1": "2C7L4d74NWk3oAWDCbpvWU6a3RP4XU7WdbFVVNGzCH1a3TUtaRDLnZpxG4MADaqLkEndQPa2PNb2ayUG8zFHLhtB",
  "key2": "3tMae9GnQVEduwrDKQXrc2pU6iJaQoeqbC431hFzpJd6jNgFX4371VxmbsL9JhA1jxcreS5LeXE25mdcAMDMiGCm",
  "key3": "3p2nCw8rxWa77R1xFektiJBx3fv47wgnum2GkmJbPHVMREZZDDRQoJeYhMsHQ9hqxmGxXPJpJFExmMNGkzEziuGE",
  "key4": "5euD2Rqmqtkh7YE9RWZkFZYD7REgBZrmeR75yuqUQMyNTsWXcyqBcQfgY3zy74W5bG2akGthrJxp7Gk5kNQ7WwpD",
  "key5": "44booNPpdjsjt1HJwpMmHeELEZmDQcJFNQueepLQP6KsoMHnJdBxeQDyYv4MiAsheMUpay9xFJY1M6QHa5txzuMs",
  "key6": "tgRUp1K9MmhnEnfkbSTQe1Vsfc5PkdoF6k6xZVHU4vTg5bsbMkEKWd3V1h3cPjzmte1fwWLmeXkpHV2KqKBNhxS",
  "key7": "5N9wdJX5fDDCPbEYEsPzW6Es7P2dL6dsVXPo4yUNVmvyDXg5BmidhoPTWZWeccgTgTKsFyn6oQJd8XuGm9ik3rML",
  "key8": "2HrKPStWe9jMA8dii1ZEkfeqnyCZKut1z8YvPQZPHmNT5TaobomSSpT5mqKm6tDUzeeLLj8GqpXqhMiVvS2jRdBm",
  "key9": "5GXBns8wK18cWSf2amXgRLVqA9t7CRcV215KJkWsRPahEDtdxF2MmgmsbTxVcXBstiJCgLsR3WcHnEbjBv4TkGzQ",
  "key10": "49bfCiY2qmZkZNSkmrmhJCbSmZLZwz9RPukKTwcgaeT8hPWq2rANYfBV2VDdaCNtmN5YrW4wccomVumGEHsjYzKW",
  "key11": "2LKwrLdjm7jumhWUiGgftTnQoGUMyqe9vKx2dQxkvugupk1bkaaUqQNFwE21RH4WA7GKj73XJtztwaigj8X9DAs4",
  "key12": "4ziMKHGogkqTRLkxuV9cEqbeAzngZk7YxpXUEwmasbqr2JLni9RGbRctDB4kFkjxR9qwC7UMZQ53JoVjLB9bNDKN",
  "key13": "5i9sE7k5VtCRpwgyADGwXu2xxfWqKVE3uFMtwVi3Z4T3JToCjigvGJmk937D9JmWhoWX9yULCxpt896qJBuLzwj1",
  "key14": "5uaAkEbHANKcttEaFcYxeof5sfTBfkF2M6khU4icvQZJ9djMJvLEJnTzYDXgvZ25jtKRvveACtGKcPypv871szpx",
  "key15": "3zV5e2kjQm5PuPzLQc4H8Zwtv67kg1kFSwJ7pf9HVW66oBiyLhywqhM843iDWLwNekRMjpGMZEQKjsF51KDqciGP",
  "key16": "22vP4FireZ2NHjwiECYRo6fpQqN6MCcMi5yfbAS6CVcoXpJbjhgpqkkB2a4dHWi51XLvLZgoYdAST4zPRbWwbk1n",
  "key17": "5meTTpJBX6af2THTUzSKdhQCE1JVn4w4S9prKmiaS7tGq8MdSEZCaQaa4yktPQhFLcQf55KAib48fSt1ew9uZs8A",
  "key18": "3cq1Ke1aJmoZbgkGMmdBhmg8vAC2ChK3ZQNduebtejtvGFxEi38eHiqFYHzNjhnJimSJGcr4RKj8WodD8Lo1jaiA",
  "key19": "b2M2GkeqLzqQcMLriFra8tJn1bujiQyAsoNJuNnKDpGDdWLBVvpEEwoCxPo9Mbj6J188nBCAXi2oqo3hgN42K6g",
  "key20": "5QZqCoTuiVLCYcUUct8DQ8AWMGyCfRb2XG3EuYLh8ovizFVKxxkHtDAUC9px1Hk1LZ6AxnZ2QsDdBp3dS5aAuUYF",
  "key21": "7okqAdYsmt927fcj444w97TkmyEHaczogDJAzTkpTtkf7C3EDyn79uWnqke91F4ZCjMmZsVCEwZJ6kEWzGzm345",
  "key22": "4abDECKGTCUnoDu3ZNWkfrGb6K8yiYLcx6bkNJdNVsF7T5RzhkEhbTsWFyit7UJp2EwWSH9idw3u3Wy5JwqU7Mud",
  "key23": "32MLS6FzXrDJK7tt4HSnFXM4dHFqjPVMZ1shEey9ThHqnUzvAUhJSZggMLWGyVY6AKgVuKmbUja14R4umbXicUL7",
  "key24": "4TDS21cCFyBsnoD4UcQe7bRFED3uH81BjTPNxqLwKJy48kiLWwPTEjBdyK5DWtcZ6ZYUV865SeuH8dmAtxzGRn1m",
  "key25": "MtbpEKBGEdEqkDgKhDA42qsuJfkxbrLgr2NZwPGsSNcNECaSBN8tSCB696rbhEnXHuoJTN841dtXVK59Si46nFT",
  "key26": "3kBVZxu34qDvDuUMGm3xEftUbK3VEnBmJ9fmoqFJJXmx85yDuWQWstxzXs3HtdaLwqPwt4zS2vkBLYxZsJX4t3Q7",
  "key27": "4A18VbNNoJPQ4VgXatDrWBzMTZrAMjrro9PMYLGzcXhTdRFvaq83J8cjUEuS64jcdD4ERuzTWWYLF1vze67aemp7",
  "key28": "4HwEPFC6Mp8WCYbLWxxAwVithwdDbJTf2h3SppcyRZsBuBuooSesDNwecjWJ6gnE7uz4qYd5bpMch6kqFYxYECti",
  "key29": "5Paz8pBtDfWm73CTHQ1Wt2qbtXpimBHajH8tug3puAyK5eBaezhBbFZvY6KX9iMv5tW6hmqWMs7XygisUSzeQ8KZ",
  "key30": "jVDMeKH2xaWxjqb7VZXbYbdx5wYvJMbgJrJ1GNLWz1d8DcMHTrpVwGx9xFeZWN4f7yse4iQyvyemb2eYW2Lf7mf",
  "key31": "3yZkR4o58Q9pupDvmm7z2VFiYDyKsh69Wa5xnLnrhVYUFEQeVjWXrdLk66ygc1nkaK5k5hz4316GKR5UWX6Ccgaj",
  "key32": "2hsDsPhe4ZtJ2SesxBtQSuAcYBynv5jUbfQRN4yce3JhAsRFQX5yhjFifQTYLSzvoYks7YY5F2aBpZ57FK2meamE",
  "key33": "4qpUq7d9b4z8QMdHM8UgwZWmyqrEFVAgiXnRnwSYjnEfUGQtT4WZfJ6AC9ycRkdmPHza6reMhEAGn27vzhR8UM4r",
  "key34": "3535vw6FC8iyDZu3bqnX35xg4NuQwQwU1LVMzFXCZD6N9aXL75zMjzd4PGE8xaJj9TC8jnKFBQSrzd2Q1UUdde2u"
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
