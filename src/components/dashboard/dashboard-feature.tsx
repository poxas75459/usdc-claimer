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
    "4w4YqC2nCKf4rRxS78x1ToRpR5QMfFq21SETBs1Q9pqjrpSQLgHmZQurRgz9mtEB3T6YoTNgY9wb9V5qrcxci7Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGvW1oqiapSCzAZXLHoNuwNMLhPDNF4UcWckuHbsQEBo485c6d2N9baQTWeMDYcD3CvSftavhaNz83XCFcGUv1A",
  "key1": "2nSoCupmVh29NRv9gEKVcEsGVjtAGgY3fQS7GdpJmJWRGwpmFQaS5HD37wvaPeoCknWM5fN6bN3VYnDxDLy3nSBK",
  "key2": "HFr1PtpuaCHwyvC68DCzKJUuA1MYJp5AYdsk7Y9uMercR6mvPBRn5XCEEb6XkS2rGu7BViJSnTQN4K12ffpNA1n",
  "key3": "3bnUpRPqehkdX1fnNTEJdNdo5MmZmz6KJDA9Fo13A3dGqfuQVvM2n1QKebSErPW1TnVAFGVZ5YBCF8e4tdA2HNRW",
  "key4": "4dM1mR3ya21jFLnDoJgoc2Bmn8uVkAjYu581FFWKbkx7bFnUYHUsJFpDirFJ16zCMwx6hz3mSn2JT6HxxcvfcDAQ",
  "key5": "5qcpYEvjWgtymQJQnzzqbHz33nCBWwozALUiqFBnCwiFpwt9xKWTABFg5ZmtrxYjerP2RUw5YcqLGjBjcWpGC5Gq",
  "key6": "2W3evdxqvohWS3kUuLKBxMRu44CByVgvsXJJa93krY1bt7kMnnZ6nMrSgynhXR7RGJQ6WVEirkZtV2i7mrvvKhaV",
  "key7": "26mdZudTb3ipv93cBoMHcF6vsphjSsUFcYbfyyVL2VbV1XSAnVSZas7vdGc82Vv8xwucbjkbaX84Gy8k6jRqca7s",
  "key8": "2m69erSvhPvDpY9WzWPFER7Ps9Gd1nqtQxJc5dSRm6qkKfdpgs21jAZvMi1xyUXTPyr82Pg7c4s8MPUoF9Y8ogFy",
  "key9": "2E9rb7rijUmkSebdqL9RBJypTPvUYWzQkLKZ51dKjF6CELHAKdWNE6k4JB3sWjMYRG5xtEZFHjk4TZnriJVdLM5r",
  "key10": "3dphPuKsrxgRnL5Yuta66iT2pePHhergPr57u1QLsMLeHZZvoicYMwY4bLe7dCErZXwxqnHckSZity2fkgTtYQPj",
  "key11": "2PRmLbYCdyKSSSo1vJc3kynkzoHQ9xF5fjFtBdRS2YugVivk1uJiRV2TejG6wk3khXdMMv6fVCgPoQbaMwvaUBGr",
  "key12": "3tfDUCgckdsZ7vLMfjU9u61coSPixTuG4gPRci96zusASgZusuvvBTR6hUnbEwGvmra5uzEowcxmFYBSXeJJEcuD",
  "key13": "2PsSTLtdwHJd1pvSg4Cv9r1cR1LDH5JohVMhYgZKAyKAFEJyvDhjsCm8J2BQP1gvCwKGR3G8KpsWNBBKbc7bYSfv",
  "key14": "5QV6gJKMgdsyCvDXzy3uucsxiTZ3ifHEuhNxfGczo4Z5t9pux8GmoveEFFJVRBNPiCmuc4PZGRE5jRfpVJPJJMHH",
  "key15": "2V9wEFVYWhL43rP8Cr4EpKewbvfdmMpGgD6J1oJ5J42TLfGdEuyeVB5nhWxoL3Hn6y4u5Hnr57HAhtL4S6qoGyqe",
  "key16": "4mB8s1iuyy5HxQ2P8Ajn48BHAe725Q7U2QzSk8Ymm3Pc8TrAVT9oSoW7R6RPRqrrE5RyaHmnTZyACAdAaqwGkDoJ",
  "key17": "2No5R4UoBB2rNJGa7q6wioPj4bCJUA4W9pzPq9X2RdVfA2fE9dPMeR6kKxjBXmDikKuFCcnqvJFKxrEhzFWg3vH1",
  "key18": "5GMXhVh5uQ5wcXiKKCoYm32CM9SQoS42kXmvMdXGVJLBTvQyXWmpZkLJUKqMT5dACHvq7bnuo1qpEJkc9jTh3Ytg",
  "key19": "5w8NUq86jWpqy4HCg1Rq33eWAehBi9Wx223BVffC2e5VNUrGpyAKkcq5CWQ1VxWfpwNZaogdBHYM5KrqvuqRD1Hw",
  "key20": "4vc1BLK5WjsmTiBnzWGzFFLHH5ztQkVthaCfjcQQftG2GkWnvg7w5jPQwjbewATHAtSPMKweourEY6HHFavmZzSD",
  "key21": "3d7eNuhB8VPha6DaxyLYzHZoDSbNzgDPbjHgTKjFBpcqJpPNA4VSvH9Bz1RWufw7YrBt9HQHWz7ikKNRdSpgxyDT",
  "key22": "3W1jVRchbzJsC4V8XdW95JVUh7ANJhaBNopYYZGwmEi7qPjQFutQZtteQU4wzeSRatFupYzzGoVuMPbcTQumrZ6V",
  "key23": "4qFbW3S4knNpjZrfWQFsCT21NHAEzqyFLg1jna38VYEqQWSApj9oce7PFSYv6MSALGDDLFC6gqniuthcSqUDSzzb",
  "key24": "2ANUG9CB4FmLJ7a52mA6rYFAREnKPY9nUNQPqacxLtYoQGHTgiPzszvrpAseRB5dTadQxje2czqdkFXC1jxQQLPC",
  "key25": "38zeyug3vsBBksN9XP3M5jyZPkzk94ZGVG2ga51uaW8RahMwGwovepyW5zBjzq2a7AyxqfdCs7i9rYLwcS4iq3Pj",
  "key26": "3RkrWvEn5BBJsN8X8TnjC7dadVudd2Dquo75LzRTC9tgnMsQxZDPqhQPSrTpektPBT5qR6mZqbpgWTXjNJtE68SP",
  "key27": "2xtiiAF1QGzQb6ubSe43bm4ZnZXVtQAntHkH64tDL94PjjrnJ5ooyzV3hfvPyzGdR9KgdntgtwhWpEBHNLJ5crmb",
  "key28": "3KzoxfxqxgK8RUEz5dAtZ5e2QW9aVTm6VrinkeaYdW8uXbAT1VwwNaYhhpzcwroLWW41VkQHWPwfqjrnRePLoz4M",
  "key29": "5pDkeh4DVEk5XGFXBxv7YPrFMgzuat5YBfdY9LBHgnL47YFbsY1Xh9LV9AFxoJf1G6paFT2ZcRjEzVNtBeZ98cPT",
  "key30": "3S3oFQsf3xgc5mpNphXAczEcbutJkJg3nTkxc42dpeMkfCmu2c9BZA7z9kH5M3PU1eQ272KRXrAFZZanDbGim3ai",
  "key31": "4iWssq3VxkUkAB6ExTc26X81QwwwGpSUKmvS9vctXS5BNR6N5aVkxpXf7T6cYwUADnUwJDj58d1EZBCpPRgx6pFi",
  "key32": "UW86LTo76rgM7CHSD4BK6CNKNW2wJH498KDxZ8ftMgsWjW4tYZqqzoc5Yz7zzuDsYWfVWDXvif1EmnVAhdjHvyi",
  "key33": "4QUSC7oeSNS3MM4vWmuef2c2ffwG3kGr7JYvRZr1UYngBDMHk5dSd2f3HbsQxuTs5zHpn1Ux5naKhTXpXgi5rKgm",
  "key34": "yGjvTvxiMGH4QirzYQcjvJFjqvFKAF2SbmpfQ5Aqbctq6Q7Kbz1TfB8Ysa3EnpVJCg9FcoWKygYBmWzWg3m5C67",
  "key35": "GSCFZhrWSoRwAM2Qm79RZP6Uo3jZse5zSDumHMBQVwYeaHkN5BGVCPmcHR24nF8VxgQwFR1KtkSfRR3gT9uw2if",
  "key36": "4L9EcYKNUEzV9rf9MRgCGvNHXjL83cZDd8oLYHcEGoBBwzWQJTDDuF9EY3vKBggXYGm4pxZah9ct7F7E4neXpjHT",
  "key37": "5weaF82NSDnCUTXG2fuSbvwovyrz2YEktoezfLSP1rg7RLDpL2CjWKLwFmtyG2QbXDNupHm2apJdW9CsoG6J4BhK",
  "key38": "5JR5ToZ8TKUa7GmfWq9qnxW1CyroJX117Fhgpggw6rb1UuY9srmqnwv9oMKzNqwc2aSYyFKfMQXfvj44Pm5nKRwN",
  "key39": "4fP4syHsw1zT2JvfhEWERRDtnoLr9mg296QqufLji7BccgzoYL2eBtuNG2dZPuyBuLEcSAX284M2rkm13WdTAwDh"
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
