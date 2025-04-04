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
    "3SA1brMWP2vtbpprNpwHKYndefTTxSWMsYf2EcHSqdBd75hKytgXG5e3778vdUpHaHqnKxekVyvB3uoBg4JgenLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNZSms4MhJbNUdPFFCbGXmvYNio36c9KTYgAwbEqzkiChbYGC9JxUTGhvnmQ7oDyubwxm58qzs22u36zV9VY3ia",
  "key1": "2dMBtGAxmnswMmrGPjnYD3nzu99YH2h7T12cmoWerXqeL8VYTDT77LQWGuYU9pfa6TF4QmgMZB8wBq835ZVvBUVn",
  "key2": "3P4eJryRty5Rvm3HJ6DHeydvB5GbhoNNjSwc2CHPRaKomdmoXxoi26nVzTnNgiG33Aas6qtco7thbpg1oYbPZgmc",
  "key3": "5Ns78A9w2HsXVe3ghc2YkpEKjhPXdREnp4VgRQpLkq52HbqXp5zbW1CYvexwFcqHjpaMKvAHHnUuqnsgkindN8mU",
  "key4": "2qJQQWDFfucZwJ3pd3KX99FWYniedYbF8M69nTQgcDcaxxbarjnAGrcpi74oKxPKFqu26ydn8qydt4tjHU5nKSAs",
  "key5": "YrPvJx5Pp519Wz5MoCnBzjdQc1tqDogCDfc1Pbt298iaEaFwj2ctjwkPJcZ735JJNdBhw4NciMaDw3Fvu6ZQqbN",
  "key6": "5QgPctAPZgW499DBM5idw8U3Kg8xMUosuWCD3kkoqpLYUcAQJgXDCvB18u6zwD1HDV7cUEyRxnjpjJGr5ihHSULQ",
  "key7": "5a3cZisHNkAmt5TRYnDytgaGvushRi9XZuPftSyGfJTMuVCY5y5MU786eeSd2embqZyd2n4hbkeDJVDYhGLDMMRZ",
  "key8": "5mfB7qtkZW8794uVtbHz5U1ggfEQDaCZRhwrrYStB6PujacJRooi1rc2cxZgZQNitCY7heXbUzmqGzaAmAmXdGii",
  "key9": "5YAT99T68QrGiMAJ4QN6T5ZRkfRwcH3bUUDVGdtDohfHoznGFbBJJ6dNmm2bdpE2sCSuqG2bHK9HPGgEyaQ6VuaF",
  "key10": "62goApWotzRBh8LdGWkqx6xgpVoa89PWWU7F3MTuY1WEqn1Fow8PUsRXwzDo2cNZqteeMZMjDWtuLEnV3Nxeouwg",
  "key11": "27S9cXi5dfunbT7Uc9V8rs7RdxZdj94LRwqJz21r5FX74PxmHvVGYa79nYdjAVCPr737CZUw6aXwMeh9nTGAR9E7",
  "key12": "5HzQ1SDH4iSstdiKSzmXqE9L44ZMCHEj7rfjHk4QXYaiG7eYssAS8rgAKL4AhJMtdK6cD1DB1EMdZvkK7mz623eE",
  "key13": "ToAdSZFNKU1X5WUEfsSxwXWiSBd9CSvLT98pKJUG1aKQNNfpfChgAdyETkbA2J7iG5fNhH6wiaUHP7SCSAJWuKq",
  "key14": "2azZDw2UZWfAg71mNeEk7myHK3AYGa6BvcnvkViArKX3riVci82ERYwUAFpmAsQvi9VrVZkiJqzVQbB22EDkMNVL",
  "key15": "34uHqgiDuAoycJh1hfRAk8hLufLHzWtuWgLSxkDHhAWcsLWcrwwFukZs72cr2V9U8rFGpVc1uMrPYP2nTP3vS45",
  "key16": "4gX7hvjtpm6sZLB6kNbt2cDkJsng3vYtKRSR6xRD2TxesSex6a66ZdGAffvjAhdDEkLj9YRCBq4VbLoA1kBvgqD2",
  "key17": "Ny3t36XwJf83EA5K2u331GHtHvgHQL9x6pAHv2bQXhJbSy2bD3VCfQGKcdV9kBkFmRD4gTjV4cyynQ7TkLMjTxY",
  "key18": "2cx9xdBPXcft655qjebgmtKTRTVShH2H2BQg4qaM3y6M4e8vbEDAi6iEg4JBvEn2DR1f7Ymj4G2DvLjN1iG3b9JG",
  "key19": "2a2mYwMavv4w1c1Gvuub43eYDzAntVELXFFDnFoCfyTLndsdGYWx1kYVAGj3FgA8PpKmKzRZBdEmpKz2r3g2UZof",
  "key20": "3EXF8dugnUi6GFBNPjWY5jcHFov4Tq7JKJrZz2AYTvJr6WXEZeiu2gSqeDfLoversycpm5ApqwNoqxBDCtgnApGN",
  "key21": "3bvqXEZczuJt3ah6s2EbXNG1sqnrdQRrwDv17UrwmCvZoKVWMQsgveQzFoC3LcYoiWwf2wCLmGVfEyfT5Wzmb366",
  "key22": "4KBndNT7T9ApVj9XrLsxcbCgcEz3FEfgWw4JzmXXeVX333zg1UssbfGJ8718As2h4qGCRgpvWPWcgreUmMSZLPQF",
  "key23": "2Bvuxb9waJJCZXo4drbFVcPnthkRv5UyLDQ6EgjWW96zZazV6rWfwiq7L4M48N5NWXMHopiKZvKFD684tezfecEj",
  "key24": "4jL3trN7qw7RhuukD9yPrDAJCVESoVhFTYnL6FT5GddVbWpaM4h9yUWEsdiCMQ57eY6WEpEddpEe8dvgXHyYLJ24",
  "key25": "32rfg8tPj5hVaqG3RPmKNAQDt6Mfq57EfaALVahDsVJSn9EHE2JNoZMTnTVvEtZtiSbQuXUeKs6KbN8PTUFZgasE",
  "key26": "3xcGuwMEbKtenKJjUXrgVcKmihtn3SvGtyjhyeUZMWvRikAhGCZ1jsxSMDkDWHqaWAgu4vCxg3C4kQWdLQy6uhYL",
  "key27": "4JfWmSGjzZ6SgP8qXHPrUjsEXwnATexouUEdwBP1hpeNxqnLPTMENWCuEdzPuJKYHm6b3b4sc3QBxKjsVELX1isZ",
  "key28": "2brf9XNbpHFYgk5oFMnTtf9f6yYDgXmFVYnjXDbivMwvJn1ncTysrpoiZTgnCjTdxgYqSqZt2xMGtqeJNaQoVJzv",
  "key29": "37VF6dSHX4NP8hi1rwoifti7GYtrNDw3ezH4WuD1dDXxQ81Fm89vmCU4XHnLh1TCZTqesRgR7NmCtpFn3t7n2gpB",
  "key30": "4sbhUpvH8bWzuqCoHHm9vJQZCR9e8mATUnAZAcSZvNz8XjMBJ7gZ5snRRNgNruYKkoC2xnLDWMipqstZsJqnh4s5",
  "key31": "dRwozs4dvktQw1r2NKh69sdwVM9cpW1uUxdBLmpD16EuEddD5ErqDiFFzRR9aGUSrepsvUcbwMwE9RWC9s8BL9w",
  "key32": "2XcSQjjj3bUAwGpRwpVgEvLmdWxtEedvcjAc3Zawuaen5aoc6VCimCbM8WN4ubo3M2LDfEMQXA8CwZjQqXSFWunt",
  "key33": "ESccZAs1mK1VAtE4rwGNejJxDJP8TypRMJaPLB9jmVXLAD8N4uhwQPnf6n4aKcgGjwHmghPeWvx3ZavVDQEWkYG",
  "key34": "2AkZaMMkDBargU2ioogsDPdRKphhdRvR2WcqHC689MoZ4XcM4AVG4bKBSStkHeJKbqDiQ3Gfhb5hQZJbTNnZcWMt",
  "key35": "4Wtt6DNk8c3Q2dxzrF1Sy4D7ZVbVWaWv97MiWwrdRBCZXjH5EL5erqCFkvHFcPYsLfhYjpdSahepMMbf2wAUbB8T",
  "key36": "tuyyuUhZrSL352wLk5wxo2zdY4N6Rdw1PhAd3btTavfWT228SmRPoq4x26WBErVQC3mPPXBB2BtNfSSYUxxmcD1",
  "key37": "5dnA2grXTreksntVfKqLNG6MxjyrJ1SqmFPCvNBYo2rvqjsbRiNvDhK6e3MgLfa2BFu97D7fyh2xb5kQvhXxWt1t",
  "key38": "NCAvcAnv8SUZsLyEA7SJH7qAWb5YW5p9osNkcBztiVnvxDVSwGLe88sUhqxVmEBF1TsoTVWDVqK7HJcfgMsQTnZ",
  "key39": "3cQ2rEybhSLZrVMbf2aV791fPhhtP266TnSKmxuRbwbNMNXLRDitbSpKgJzaBLybykNBYK6odwZDiSLWLXLcDhPA"
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
