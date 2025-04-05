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
    "2MXvnpJmTCMN5e7Hv5vwicEtWFA2H6vKXq1ob58ViwdHFHzSanFGcbVvbvesGKkGrWjqeTKgkHMm98fm9oyFyW3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1RviUJmAASiwbUdbb4QBaje49MFQtBVJGpfxpX2VzvBvLueE4vt4vK8pLMZ7QiYo95b5uBHgvzFcgFNaX5vGw1",
  "key1": "3Ud3p7UJ6GroBMB916cPUfzcmEdgmeF6TdTUTXqBdcmXC768AWYZM6iLtQtzaR7srXVVCQSyhueG1dPhtWeydDdw",
  "key2": "PW5LFKo3zP8mMBDVcEkb6o1D93S8rT7eBgf1cnRj6XghtDhzgCUUqLS7LzHuPLsHiNg6MEY3HV6tUcUacw8J8Zk",
  "key3": "YKq2tjdSxw74aN2SjpyzKznZ7LUTJqgNbaFeYb5An6Vc85BtmxmMyGfUFGNT2zq4mScW4qK4NjP7Tru4mEAxYmz",
  "key4": "5x4oZujjQJvgBrYKvKPMwc7wYPrVdSKiQtnQ2wHkvyBr3kmCHoHgWf2yC1B3kURRga3SxsKW768M8W7LkTP7u3S3",
  "key5": "Ghb6UUozKG8UiDGzcLEe3sJgfe7bHL4jeka4TyQGAK2cRxhB1sBVFLWksxDC1nR1DWBnTJcEqZszj31i3hyriAH",
  "key6": "4EXhfp88tTUPoVbZfZ6JLyPck9bTzWyyzEnuoSgGwjjbGZRDPUpPz6SSF4xmtoJPW5DZwEKK7r4Xpqpq5mntJuE6",
  "key7": "32Qnvw3jF9oHLSw688hFZWePEtteoNSoD6ze7XnmtJdT4RCWTVQxHuhVpGk3SGXGJA9X1j6u3djRVZz24LidL75f",
  "key8": "48KWTb6M36GDPHqYcRG6tsXEeBNX7ETcJT6HSwb6iKcvBScCPa7XfqsXMBvMyemGUAQkkRYBsRc6SHzyitj9EeP8",
  "key9": "3RjikmAZse6qYXEfaWut2LqqE7vrZeihZHJt86KcCEBAm2qzNr4VwFNRF3sG5qrZJ3P7NtsEyJ81ZYqgb7n5HSkJ",
  "key10": "2FkphzThjgoLEut79K5z3E1ChH5oU7fMKQQYtG3xJbYATNwgeeNYcBLNmZctsqt2ZEqSb9JT55dcsRxWidAs4Frp",
  "key11": "kLZtuqWPqHnNBCx6EsBqNjtYsYyH4kxhaM3KUTvF6XyFmckJsjFHgcyWndZXN1yUXEKYKsWMrLqDNt8gfY746Wb",
  "key12": "4UsFx8iBDeT34pcF2hEXCaFoXZYh5M5f3WcMDnuNpuVPUXiYvaFjLXGMj2xSkZQr2n8kmrfUJc64hovKTReLusG8",
  "key13": "4XJNCYjGWqLEFvTcFw179AF1X1MxjPtR3cFYb8v8zDbHQFarF3xSBh2iK66bR7SeUeSnKJ3vFGwz1UsUg9SNEegW",
  "key14": "Z84PFHSsFzCdkTbiU6VHP4DKiHjz4JSTLCyvSbj9mrWueZNknhfwjAdYmqkXHZyLzChb9H4BZaaWsqWj5oSWdxw",
  "key15": "2B4gP64KtwynwhkCwQmuq4rKWfgonyqqMS8pMZm9ed5KKYH9QXbfbP8ASVoVcH7jjSirmNPa8cgcMnB5kNPP6CgE",
  "key16": "4VobZfj2X9J8QjdPhqUjkdeuU7ZQ7HTfLx96ddyXNQ8jxwaNRkWqz7u24bhKrQGvmtMbe4RDJmaqAbqtvJdkfaqS",
  "key17": "2ZLGCEnFC7vm8wvZmKRd43H4SKPovtzoH4Bf59cMKbiUooVu87UjuQWkJanDmD42CNyAybzoPjtc61JsBE8kka9y",
  "key18": "3B5cFNiKsrNfakH4ztrkMLpyhtgCiw5jV6BzwPz6kd76C56YPBR2ci8i1tshwR1bTYYBsNDyMSqsLjDRDpAFL7fr",
  "key19": "7gvxxJ7YfVsRsP4Z6CgNJAhb5ZgfEf3tNsE2ysdA7j5j8hM7t3gsLBSGaLUN5AqHjq7QXRxC4QQCfVtj99Q12jp",
  "key20": "2evzvBUG5VonUuK5hhtyqGmvPmuqsqF5braC9CfCzFtq5q5rdR8sbaQCoXHYv3GsKiNXrWfPSN9ZoHmUWrXUKFuP",
  "key21": "32iktX7pCwzHowTd4NQY1X99BkiwwG78AACivB1o96jBrur7ADjgjcNvKgzVQBdVEFF1NL4Gcen7PPLVct1VicSc",
  "key22": "4kkcxzH1rnjrJsfGoWSG2yKPZWj4AU3w79PkGSkzmjRfN5XodCb7RCbbtVEKmmWE6hzngXwKWRRV8MzUco9E4fFc",
  "key23": "2qZqdzvvPTE1KfiRh49oYkv535Phe8kJLERTAARVN8eXP138W7dYZrY2gzsnBKZMSqLV15CoDW9Yi4H4STBswaxK",
  "key24": "33a6B2ZowRtSPLtVTR9cLv2zfEYziMXEAjUigyTq16UP3jtxc5U9HE69rhUn4QX2JJACGDoTherV32UMG9MXViSq",
  "key25": "4HbSQfdrUrbarbxYviA8E7LAsqtJbBpVHVmSo1gcajQMCrFg3QPcDV19WDDUfh424Zk1RLk2zwBMfg5qaCKLeBuk",
  "key26": "cZwQo3TtWWfZ4f82e99891qNoEZiGLDaz4WaGJzrzYZRHehBMRWs8eJ8JEgh42xP5di37Lq2rkNiLUNHNSJtHuU",
  "key27": "2ZqZctSCEnznqktNPG3PhmwtrEhqmUq9RhMpuT4AC7qMWs47kqbU6vQTSHaCpKLLwcx2G7XeH6qDseYPssH4ZxPW",
  "key28": "3dscx6JYVpoYiQ71Asg8EZsjxaztdF4vjfmzrTqGZ8Urs8GZH7WMi1aXb1cvRSg3LgDi4E3GrcTMTmmJnNDKC3sS",
  "key29": "2FJduByrNX3ME2WA1QcP77e9s7VLRk1hxGU3WWr2EPhJN3KwBortQBS1DQHCwypWDdusLrXiknvvtnhPjWX5o3tX",
  "key30": "5z8NnvF3QjwWwwsvh3Jr1hxraWVxKWCJkpHFB9r9Fxq98f49kxk8EKAm4UoE2k6aw4A1p27DPRWytzJNBny529xK",
  "key31": "AvKSL8yawZuGrwJq1ALWbwaTSmLjqZyjbJ7D9ZgfEqvmMNAFo56grt3v8hZ8TFGFt8EL3v7cHwNNc5MR68Bhjjg",
  "key32": "2i6KGae4FZ2qhMGiqmR8rMEQABRYcHccCrjkBUoXQmBsx5o1BHsRRVzvEGP1ZUhty6rJ8G3ctKMZ1oQBa7oFH1Ww",
  "key33": "3RXM83fHkHQaDzBzbp2X9fXcP5aZtG49ufpN91324uiwHF1MeGWj6NzkNKkEWB2MhFnN9p8iaAKRd4s6Cd7jJZo9",
  "key34": "34v8MaYTb6ucGJRbuBJASKMxTV39Q7DcZDb83B3zLpW1nnT8N22GCWhG2MUco4N2ZYSMzfjsDPdg2iK6yP6uKtcx",
  "key35": "3pMh3NcRo7MaaA6BGVGqesnRnNCwWMu6iEc3pi2gffRH59Yz8zrbKvUaHbfhUjoBGDX1Uh1e22J5qv9PWhD8PfwY",
  "key36": "5u1TR3NA7Z4ipUHKhrwnH7LfMVHRKvCUGVbyKvLENpwC9pPzTnRRA1dWRiz2dpvJP8DMiCYxT9d2BtLKQ3aevCC4",
  "key37": "3hwEBDsG1phtqwqyTipoPzmyQRiR719UbovcgjPNBjDS6GvsCqSzEHi2WUbpDBzJdZRjW4AiJYoW3uXZgYL45oa9"
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
