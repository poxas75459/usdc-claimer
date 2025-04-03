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
    "38JtJtcc9DdfBf7Aeh23CzrJDp1FhNSCfcVykoRPhV7VkdddKPoY5H9RcXiFqwGR8ueGLCcmZffNRB1KCoYNoNtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52wzKz2tRqNvYMissTUzp95A86nXVRD39asea6RAJjRaXDoiViCv6eJDKxJ3JUcxmF1uTxxAVf77bxroZghyN4D3",
  "key1": "3JiPRURRDudmdDNTrM4i1atZU8tggPhbnqfof8VQvgq7ZS8giuuEmDqUZWECFCDqFqNrfYyQAaF4JoL2mcgiyu8Z",
  "key2": "656WHEBCqyRjPUYRu2Z1xBf4kh6AvwGgEwo6vPWoMJKW9pDdwBUYd7iShYa7HkS8uWcQ2f1gJkvx3Dy1MtPifYco",
  "key3": "5txEFZ85Hm32tCfuLTxmZbvcvxGJPHRaXbQtn7k5AUTL1nsCFivEWA1Rx2PXB2J5H8vr6STSWaF7SzNApyn29vGh",
  "key4": "3QsFymQj2QqWyJ7oY2ffSUUTUWa2FhuXjk4kRtMFQuKjLLrcP2P7N54CZKduyomF4C6HUXmfZpaGfMsC9GzSccFN",
  "key5": "3ZGnh99n9Dtg9T3CiyMRMZRQQ1U4pyLg7dwvgdqRU2snRhyyP4NnftqiQr7izzeuWew1TScjKmS26cY3hFZba3dc",
  "key6": "29YPNRCPjuDBKDGVq1QwjFmvvBzvHZmbBLM25c6bbUcpFHpfP6p5EhY91qdt1gQznt4PPCq76WtFqEwqmDvLfEVg",
  "key7": "TqdrLy8XzhTyKDFR4xnoZrunWrUPkuZxyfVdZzBJW9ax2mFy17Ln2TLE6JEMyrYqDGR5MaoigfmeREGQVV2PoLS",
  "key8": "5ss1YX9qi6sinnDRQRHJZD5tXfbqP5jaqg1qYRS1kNSY8vBPnnbHL1Q7en4XjUoFkwrZjZ9r76xtXSDR7Jp9HwDx",
  "key9": "2eyktjd9uvihem2zjdvp1AvZL11voo6g9C7xFQCDFpb69zXaCPaQ6GEkHPe9S6p9FpTwtoBbPbyvvKs1YGTEumYL",
  "key10": "56RwNHBSkqDFEsUxi5tqwA7Mm6imqSLxGBKpSJYGBgrs45VtsniuANjgusD2eky7xkpD4dEw5doWZ8QZ4szwhoB5",
  "key11": "4voQYrZXQQL6GDX6tBXY9HmQaTKvgyD5kinLfG57iDLTr894Cjo1L1UCJhxDhsSiWUKhVdKMsByyNiatMgosMAFJ",
  "key12": "2kL6fyDoMP6eV6YsCA6JcLn9hjo8TprqorGGBL7uaoNU1UC7dFQBYQsrpfht7DuEtjS6jyYJVjkRZYkkygWX7PPi",
  "key13": "2Q7j32wHiUBaJBi9LuQqLFgJD4rJZHKrQAgPtoz4NVyHJVcoxsPaUqyQuts9XKohxqnRKR3KMdgzRnZfswS86BXJ",
  "key14": "5udUcJZkD5uZ9GiwcryKvQktBnGBnJn6zqryQuvyGQmrNsockFVCcJ3jAy9YGUW9kXPDuALkK84DLAE6G5KKx8TR",
  "key15": "39HASvwh5W5yv2XfCqcJtFj36d5wYXpXVNJwUe48yiyKfw9XZwvtK53CbXwv3cZtG8umAew4e8h5tJ1pxpz13fPq",
  "key16": "2FLs35LNbyamWNoVNEsbeS2H7kbs5GUDUS4e8NXa3nmh4SMQSqBBxsEdZhDsiVNci3NQZnCPuQ6yos6V3STpPCQK",
  "key17": "5AZjvhCxwzERmkEKey64nUU63ikzJVwtF3Rx4ai6UqcTRymULg22uEReQCSkFnFH5YyPNG4kCg9HzYgxtHsULGba",
  "key18": "2DUENcaJjQB7cEHZzKJaxZXuMybu9QvwHMeRWYqzVBW445oNiNcf18xayx64aEgMeqjqc4UWkJv5qiqqAdpWc6X7",
  "key19": "2Qwe9oJiUYxsxNX4WZy1f86cQ7bX18XzhKihcZtFAt6b3jDAZbSj5fouP5spfDYBJqBvHU5g9ncRttHoZgLUyG8f",
  "key20": "5jvuVLUDFTRCGS6AbHnzWZHHjCpHmPzua4PPz2Jy3ihy3qgDwwPAq16AUwfPJdCs8SBmaEyQcHm7zJ2jgbxYgbCT",
  "key21": "rCZYEnLhNQa4mC335JThA2eH6hYa9hYbj8Fa5BwGRnA7g46uJ3r2btR13qX7pnFWqEWgZkhdFzCXjpPK4SND6Xo",
  "key22": "2TVWB1o8gkyaf6YRSK8BXYjHiNz94vXgeyFkd5kmBtCkjXWHkZdh4fu2ix5JMCNELfrGQ4gZG3UCivoDCFZQeDci",
  "key23": "5ccAJLwNDkzNKoWF4HJ3D4Etsro2f6nzqFtqzMkDDckuKnP6Vh2R5jZfkWqN98fn7N4E2aGzWxhqqp9b4fcz7X3n",
  "key24": "5gF5xipdSvSQ43wr7rD9kZ1iXV5vE8CCiaYNQG9UkKwHnuUf8N1tsc7FyaYwJfAhzB5Q5hKxZuPZ4c5it6F9uV1E",
  "key25": "5vs7SnFLZ5ziT1wRXp1g3Zpaf9tbGGpkfwHfWHyVdTEizF34ZJB7KAg9mWDwisYqr8J1N1GA2ztcxYWvxDFCRbRa",
  "key26": "5Q1iQmVkUrZGbwmxFcGjfWewPnUAYDYu3LX4Miz3sa9HHCsEtn6jknmmXrpXfgzZxwAxSskz4QzZZCu7FoSsJQHD",
  "key27": "2m1ZXLheLpZdtxokscrsP3ErLnxpnnZNLzkfhWzbiZ9PaE9fw5vmNm8GKKe6cUtEMKxnpCw4FJBMwsbaWMZb5kB6",
  "key28": "3T1Q2HRCoGGRRDK8sjEhDjykyTaTV4AnGpaKFBdLfgkbSfmBbzvJfYSy4gkbdUhNe31jNMGbf3Aipy9iB6Q6VxQi",
  "key29": "3SWyw9ryWip3Ds5XKjyeua1Gm5ctZjV2Xg4cVeD7i4Xfy6FwmMtkVNWP4E5nATTg89gvNyxru3cXfoWq7LsUsPY5",
  "key30": "Vg5TeK3KVwBKh5mhT1VUvbaoRg6QLJtm7mmBirnpYbh28SaQJ5kqVEkDJTHSUS9rd5W3gGmbJkvKR1pFPBQuuTd",
  "key31": "2cGxk21McJn3yKJUxrYzJyBNJyGD5iV2de1yGQ5AoMnF4MDQP4gXMQsQn1xSFmgFW9MFKZYMNkPeGqyZSsHNJzey",
  "key32": "3p4F5943Cx1kvFA88MCsm2FY2Ac1AuivzEauP5g5WUZ2Ln4bbhsNeHrMdBVAZeR9mVDHPUxji5Epx2QsM81JsHZ7",
  "key33": "2FaqX8esuYDCLfEmj4mx7DrA5ZseXcKDza1LpRfZxbhRg35Z5748mdMTtJuQ7y3AGbNS2rjy8TVPof3cc4y7fXhj",
  "key34": "4TvJvjgRuytXfaLf4pgaaBhY8aMEsx2KH76Xqxr1NzSnyyiiMCnTAGktdzXNWwfeVJtNXottu19paXzgzgCW38K",
  "key35": "RPkJrV7ChTXGvDifzFX3KwxrtAWFHuFC5V5Buu2pdof9K1aRvjAUnKdZ1tLMSFrMKAL1Q7vFYkQoWqUDcBwxksN",
  "key36": "3DabAYQWH6m5jXFsktDBdhon1RYn7Z2sSUpW5ebj8fqtDMDLiXcWFVpiCTozBTY9DtgLQAbqmb9ZaoFeAtj58Tem",
  "key37": "5yRWUDpYvCbbsC7n9tcvrHH3uh5AuHxoLNwBT8H3qAVwYmGE5czqZH6m1PmbSap5JYHgioczmYuCAdT8MTqWQYix",
  "key38": "41sFVVCZfaehB8brCRBfBcEwdwG2D4KLDhSDh8ebAksQ3jz1DtWvs67UWiLrJL8EiwA1VNhfo59xBEXKPN96F39w",
  "key39": "3SbH69Z6sViCeo2j5gGkCknXUAQBUnpBuwEuexcKQQKgfZwcozjgTKQuajQeRDLoqA7J4fbxrBSMmzk2XbpxtVsq"
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
