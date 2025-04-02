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
    "2b1Mw8ngtRZNkST8Sx9uH4yJh1aawtVVCeJ4DawNFRCkgPGZkpEN8EgrTxBADukbFE7KrE8XkQeQJvNVJZKBKrfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbrSVyb4KeRc2vUdGvvAFEnY1c3DbgQpxZs1fPBqunj4jLdmRPLMGWU4DdmQgXRfmJCq7S8AB4nw8LpNP9SCKbq",
  "key1": "3wSpHtBio3PC8hrNA2JuqSxgac3BZCFszcJhw6WJkwo7qb3qGYA1hZPhRLRiG416PskGWiaqqqdVY2GLN7NVcYXM",
  "key2": "ewKBfaW4ebKDdHkzk4U1QKS2t7AbGuHtr3kCg3tcmsz3e6nRC9hPYXkoq8TEwXGS8SgKqYuXWAzbU7RQZK6dfHf",
  "key3": "4ERzijyE3eAJ1ijVZfeC1hPPcpDAucnpfvutTPqRSiZrts9JhKTEhxH68uUrTHs6ivXqpLTbVsnW33giH9J6XmaD",
  "key4": "b77hn1vvPBcFNAHjo8NGhuxCe4iMxspAu9t1n7gsmE3eZDNXErDHYHysKa5YZxG2CboHui7RRDLKDMr9U1DogLx",
  "key5": "W3Z63UJEVkZoCc66KufTkvFieL36mcX5nGNHv6Hdahsj6jJxQxBN2uDo57gaNdouL6ndw129W348Yq2Si2yKdzv",
  "key6": "4AwdSoNasaK9iHn8aArLfCF9zYAVmbZcKDJdjRe44Sjhn166uupvWLNtF3b8c256uirE3wHwmYwTXkzy4USif94F",
  "key7": "6C5N7H4EfALyNd2cEeWtUHHduTdKHancLDofi5An3PJ7J85UgWqSCwvAvegCQ6RLZNKTKzeWvb3NPMghXfFwfgi",
  "key8": "2Zw1nAcYxoPFHP6agzgWmdW9oGSBcedfKbE2gPc39t9TMMp1cgf1LKR8MccPuaWXe6gVYXZtuYWQRzaf5miBqDVn",
  "key9": "453JUrHYXEYzPNYB1BZKcd6zv3azm9dGiPcaVUph9a8nGD6eqspFMS8qLWi87GYKACiL4TtGH8mrpXeV768eJjaY",
  "key10": "4AwbqNNSPJNFv5Fz9tbVQEQFhtmAFgkBCYt1wj73oW7HP42Up5Sdh2vEnVJn9YuzpWPCsc3Yj9MvBmZg1ZDZmr1M",
  "key11": "34ZoWgWT3eWEpHUtwrzzFitC2LCiy2EvUUqAGgxEsLG25XmAofyXgoFLnEjLTebmPFC2WhrWaCto5yTuhXxTQTok",
  "key12": "5frB67ihSz8ppFhm5wPJcxWPabdHEyLZMszdDDDa8LDM1KRBgv8tKYKbqdvi2Yr5SgDg9JPFdt9Sn8QvkXMN5shi",
  "key13": "NP1xobesyqPzmpivoN5G39ZEnuBzmSMyMNBu5pEgmR7qxaFwDV87MFowEkfcZEfmTGkrEs8oy8cfxT9D81h4Vq2",
  "key14": "61zTYbx5X6mcz74vgKWbfEDhbvJX1yNwRZ8beCb3fYKvzxJGVCi8uqym95YbFnLRQ2fB2CEnRXaPJTRfVW8Soaa9",
  "key15": "2id2fQ6cE7MhibfDYLzQ3mk2sDsK3pb58SDGn87yzsn85soua7FycLX5e1fsRepwuH4wjNwWZzjMeAL1HBaZBwJS",
  "key16": "sB48otTn4h8SbeRrngwPnS6dcSoCfuGHq2q8evpcPHKYfb5WReJWN9LHVoneTNXcnp7YGwt4Ay1tuR6ccxCYxPE",
  "key17": "rLw8XvTSz45EPosxNJiyr2ATBKkQednrTH4HZzP62w5AGnwhaLAMQtyJLyv4c4pA5Z7wXtWZ24j4vjHXsct7BWj",
  "key18": "47sj1XpPFRnjLPbx94SKztEkMdTyLMjAAyrKbZdsXaHosM3YRN7KJSLF2WuSzDBA8MA19Ev9GRtvzb6KnuzuVx9L",
  "key19": "481BxzYu7VuVhCXW9kemFcgbdW3xpUuL2b6TM9YpVZZbZA7nqy466hcL4b7mhsBEDudJXV2NJJRF7cgwUVPbn8Vp",
  "key20": "2vBA41e3o85QBVJYVDuVY5MT8sLzoqu3rwiNcG4S4wwd6enDiAULCNv5CHD8GuEhVmqub4hWRJwaYbaNYKkkUkx",
  "key21": "48iSTzBjZdqMssNoGbCh1AG6F4XY2Sayz7pvVeRdXPfNcox7wdZ3keWVJL7qeJYNTqwpqgKR4NMJvM4qSbVixs7P",
  "key22": "4YkzQr7nomkJLeGAS4eN6hcPEVEnZ9NHoJrmX7k28z3ywHCdnS4mwFXF8pjG99AiC33hf9aNxhAVWJKrLGSHko6m",
  "key23": "3CiqMbNWcPmT97nHfyHtdS9SkVqx82yxhaJywWVmHAiKVMxsrGfvpLM6ma2kepBZSeRaYtDCUdthLyMf3YTHBd5y",
  "key24": "4Mf3mbEtzrpZCai5baio7y67XW7EuDoLpxYJV43ZaCjr4QkJLe1jGufti9FmNoQye91y33a5CNfTts2MRn7H3M7F",
  "key25": "5fVRXgPBsZzjgmicvQH3LMvXkDXzdkQL3WAVkiordtM4YgCbskyVJQ2aBBwGykAu65hMfwW6zbGY1exvMPJ6Demm",
  "key26": "5nzN1PwYA15rLGAesPTfBed4gZ8SYfYDvRdUv7PS466AWKP4TWNmoVQktwTuMnK6bPTmQeD52yBNs9Go9zxhqDgv",
  "key27": "eSYQ2dTjrFjSfEiggTUrushWUUkWqGbCGxdjEm1RcHqT2BFSawFfvPPsiHEKj9zqb8xoR2BbidguwKcKZ5R5PyP",
  "key28": "5YUzbnB8nMGqyMtMkQmB28dALBzWbesSrfNDZGeE79YEvKLno5bXhLrqgHu5KjjSyWLQhBr6LaUpvpT1wUJgcpTS",
  "key29": "2TQq3YyqGX4Ze4Tp3WL4LqkcicTR8K4EJfd4kHpvRV5XdoLQ26rUsLXTWCQ5s6Nz4pWCZRui3DJjqVVJ8j3J5syC"
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
