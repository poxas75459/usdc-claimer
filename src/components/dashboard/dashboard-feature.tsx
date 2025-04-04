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
    "4kywDmub8Haye9BiT95ppn6JN9t6gxpNGwizb1dt9S4s2X34aandNEgUASY2rL3BPDF2pNwWbv1fZ7yFm41Rzxin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78Yd8D32s9dUr36oiAAmRQyvkFF6KfeYD6kdK7eM3QGKrk6SGE3eGHE25FeagRR9TMaF5Ni8on3DTEpKg8hWuiN",
  "key1": "5f1UBJckKf4zkwU1UNjE1jdXyWLSkaspcSiVvpDVioeySNThprxGvYPr5r8VJtFyonekMyY5uisTFFhiNPinYQ74",
  "key2": "4CbMzkPvRAfbX1nnd1estoTkVQNW197N5eXmPVfGRcyab13XURuUtyzkSXXCBTwjRUcZG1297jBumMWZgczxaHJz",
  "key3": "4YY7hqWeNcVbjhPAaYQ6qvCYnspvQ8Df7aXpSPntVYAtuLKkKyrgQhmycP2rmmTD1gMPE8YNYyEtu7FwpKDR8D4",
  "key4": "nDMurDG6LPmVhGyW4xyZGx5eyKNG2vUjYd6YxWeN5dD9aECiGib4AHZJQCzzE8PGMokAd8Dm6vVpYQfLfYmKssv",
  "key5": "UHzXLsLAn7zoZNTfSKo4K9UAJNZucPiF3kQeLjN6JZ3FBhAjZJnYhA2FiXHVtzPmaKFWnqQhcKt949RBhDdwGLN",
  "key6": "qi9vXzzzLKKFNHmUtskNGRz6u25xnTXnUn7AwcSnqR5AG2kfLEEmBkPP5stuyK61izvUpBmGfRqZsgx7kJ2Sefb",
  "key7": "263z9pUqZRxLLKwvWXwRp28Sc8HDG65asUXeii4bYhsodowjcmPxADPcW5XJ5yEr6eUZCLqbbz2gLcdscSBGZed6",
  "key8": "2Tj5Eijj1hSkKH4LKA7QP1iAkfZ1MBxLiy5tidvoDipydUXzLevoX89GoiiD2DixhTreDyM6gGJeZx7HxmuVBEzE",
  "key9": "5PffrwptyXrVCyedWZw9oPEpPatTakkeLZepKUhoW4rARY1JAtbrmgppJVLcPfpAQ25BJWnnhnN2ihYzNYsTkcbZ",
  "key10": "2Mkm8EiiZAvKR28LKrA9RERNKPTvmr13yugRtJvUSpjU131nrjZnzWdKzXBv4GATZDSU6Z64P6jiSkdoihrLNfrj",
  "key11": "64F8UT6JC36oh6eAwzs823CjPZzEW3vtfGmHk6chwDiRrEfWrKuGuG9EEvDi7e97sVECPG2fvApf6YtW12EhsvW7",
  "key12": "4hKStT8Qx9djKcCdqqMQVcbop1ehz3qrLLvVi5wVxcFGEZ9cq4D37GFb751T8D1x9qN7j3jsQ9rbNxbNeMRLTFvf",
  "key13": "uFBojC1EsrMqX1xjdXTeDBmastcAZmnXuMExXkTHKyab3RA3Jn8xhgneJiPjrBqFemeR4qVg4Q5ModnYSxsYUoT",
  "key14": "3vcXaM6L7kS83MC7NgdPsiUZu5W7aZHLouUBkaiRKgZgShKiuTHoLLF6LDXZbu9KkJNSS6RAa8sc67tduJMz9xft",
  "key15": "37UPZnDWRimkaLUiNtQLziqFkPdaS6deADpg3h4izNvZGpRXTXb1fo9W3UBtqvMWrztXhRrzUBP8x55UkViJnkpF",
  "key16": "4vGyyqVNdHPGjWcy4xBG92QyXkD8tTBSVWvAa5u69yQw7i2DRfwfUGqE7jvK9JXU5HM6DLw5nNhHQZrP8VSvvmpD",
  "key17": "3uPEd63ymuywSBcyt1hXdHv7roDcSd95RWjpWKhQN2qh5JaFBicVbumigywvn4HzyuyMbYYsVzHhFZr6tJpSvg4L",
  "key18": "65f5q98nZPcjitMRC1JQtgzMETyRC8SNcNaQ6TrRRbHTfXsQDRimvkL9Qd81h3JuY7sHuS1DER2ptnB3iM7L6ncQ",
  "key19": "2uxyQR2ZLUmYp6GEJkX1qoa3ezyG5y9sdP5Eon3hZF5mB8AChTwCankvJvYKL2TonVcnKgJdATQp8Qs9ByMfbx9b",
  "key20": "3Y67qWx6vYCAZ1gV9JV17iAmwpqNbLuW4NAmfaZBubokzo89oZvPxk1VCrVcs5oLM8sARFREEqyvCZE7ZvydHZxi",
  "key21": "5SNe6UUhDJzCaFJZURFh6yLdATLcgdBVFvUa25D8DnV5zsB7vDWjoNqZJyxik1wd767hB2EgJUmbJNxmZCyvSphe",
  "key22": "AA78b9CsDzr2hDrNFdAe3pZFnkMK22QF7uSLyTdHSx9szJzCso3PJjRgufZxp3Mvia7mFmLaMPZoQcvF2R5R8q9",
  "key23": "3B5m554R2PbCv7TLP7Cm8qmTpvfX1aUxZUZjhCBLyZu8iMHuKuCmWTx2ngkTDLiTZ7no9sAi1EDG1FWDMc1CrERD",
  "key24": "64nDpQBw3nQBnTLHbuUau9qRy98myDJgKFqvjV5Avs516Yu9QUwNsEjdhEF3KktU1EJgaTQHgz6usfMCpm7Jkz9s",
  "key25": "KastZzUbmdGvdoQsRd9PQkvGgHSscAPUwgiDnJbvTnb1MsH56LVB4gqMai87mUJHGmvCPjFfmiGLntBCCMTUZSw",
  "key26": "2BxRiBD9BQVBE1jSDN3sxrwEY2UNTLLsX1ohqzRKo9tRRRUYzxfh51Cp5yfxqJGeCNbS3diEX1xfDgR2K319G2PU",
  "key27": "4h9f4H1KLZ7BKHF3ew3L7ztE8U6ZKiE8f2GcfmQfcykbE1pNcEgpxtFFmdaAsk9Z3e7JYLT2if8KfbhBnXpWnzKN",
  "key28": "7kw64xvoLrYBigq1fm1SfrZX68Fk7EVBiYcUwaanHtdVpqX4sHB823ZrKgZWrAap5pM5pRjQTBrCZtpQ5qUWxHh",
  "key29": "iyPmbeR3fUFLst4CPXf6GxBgPCPZ7igHPcuZGxGXjT3RvpQXYeDzWPEMwwNNcw3VqSTcJ4ymJyYZPh6EAcTCbUY",
  "key30": "5hARcGgz8bkiUFBpqXRUNrEWjGLcAVM8NU6yTUUeZbW8iDQE7MSKcT5o89ULLURj8WLnVDXu2QKH7w2f6X8CJ35e",
  "key31": "3xHJKTfdfxRsUUzbGukrrymxvd2nDAJiGoXi6LESUCLq81WMeXCK1mcPCkmjaSBhgydsPQWXWSMatNpn1onuMUhY",
  "key32": "Ehm9jeUBf6Q52QvuWJCoa5ywEryfA3t79WAxfsUHh9scYW2i3LfaExpwrm8z8gwW4GrDberJ3xWLVF1t4AQRN4f",
  "key33": "36woF2JWQ7GfdraMb3USwDnTKQs1DnG3V8VXfy3MfRr9GPLCCL9RbkrxcDtfDJRNPmVwcryUzBZGtH1i1dUKkAU1",
  "key34": "61gXMUow4J4gY87Ly3zos4wfFzbgSaamqpV5AALhzyjNCDnjTGyYkuENwF5Y3X8dRs2QeephFzf4k1c2BJbHQusD",
  "key35": "4SQMzAYbYbTxuZ2o8URe24rbspqaWmcv5BVEp1sWzP2LtjHSLnz3rf9xwh1o85iNkaZ7aHcbXdJ89ae2v8djcmoG",
  "key36": "4YYSjueWQsw2RZd7iJQaURt88Hk6eiVZWVPz7uDWTDXuLbzVu3YxveRUD875QzPZ5GWFLZcLHyhpPgtHTfGNNhB",
  "key37": "3byVTc6QNT4pD7NN8nEoMFDhpoafr94NKtX6pSLeNLgo4Lna8L4AHnYCvyg6Cu8dRR5qq3oL7a2oeMRFTh74Jvdv",
  "key38": "562AsjtGMfCqfaY5yzSLG5aGhHcE3did7LKV2B1mXgHLgU89FA12wxLZEtTdajVHMfusPv93NY4HbHgpi4oPA7QM",
  "key39": "67qWacyjjWeMHgqWbAsXi72ykw7P3XYcaG9HPmuNxp3QLjz26zfnA6q935M3a9nRV4NU4vL1b4gyjSiMfJyq8fhZ",
  "key40": "4r3gffBbHtfVJw5fGgfaKixoouRiSxPNgLYGuDT7gs9bqsAJZazGoA5BVouFapBrAQSaJKr3n61mv32XsDWvQPXW",
  "key41": "CVqH4JK6ees6ZzpbdC8TpfAwjKbmKdULNPnjcrXu3hShBdqGNgcdTSGh1wzv8JdUKdQ7Q4Qf35BdmDncLJ5mh6U",
  "key42": "3YDzo9vqqHKWSTpe6z4hRojqDZTHt8G5J2Tg3tFrif2ddWkF9tRsxJLzGZeXS2mRfAgXWmcNZs5K5GCJosbhfGFG"
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
