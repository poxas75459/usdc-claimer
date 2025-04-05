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
    "3VmiBRobEy8F8xZgHyA9df14DGprY5qVXZfvLWPs17sC7Wg2nAmbS87ji4jSbC8C97X6tC5zNg4tCWsEzFZqAfML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61V8HS4qJeLripUZRgEq9tygS9dFjLNEN689ckHFZSVSj3Xv4ymfqui665K7SKrHUW5evyAuFHFca7u68vRci9CF",
  "key1": "3GjG2bR43VftUriNLHDcE6ZMqARv5JqzfdyiCsYVpjfMqhLgD7qcXJ4vyAEyUi1DxX7s3C31oaQYhCyzXvUd3s87",
  "key2": "62VX5BwTYiPZC2KorjzzxaJKiMGtsod8BqKJvEKjcWp4h5RX2XRUNMcJtU8RnRHaayWvi9a71sPXPCQkd1b6zh9c",
  "key3": "26o2nY6cye4WZoVeDiJFNHvfvBKDCbnnyRuWPXusBKutMjZKu3hUChE2o2Aq8qnUcufYA9PbsX1MpWLuTdGnTRRC",
  "key4": "x6mfxXMn2bkX4vYUS66tsDgNnN9ES9UMfMXoX4LsckZkqmERPZ4dNEpUdbxYbnG6V2Z33DEJaacpv9aNX4ytKVf",
  "key5": "3mPBNGz3YCBeKVy9tc3VB5tX6p3a7br151zno3eviRs5Ery8KD5kVA33nPuDgZ3GPHRamF6mqCytuTNoikBzHQWs",
  "key6": "4BNvu5SkbHWDCPUPMcneDojNtYjQR7HgzBc5x7pcFG1KFnM5ufAcSzUuvNAeUi7cNVxswzRD8ZZMYBZN6HdpQRrZ",
  "key7": "5ouicNWsqcBzVmhgMMw1Q7WicTLfwCK9vdQp4XmFMmj1N9qA2B2RyfVFyEgQw9HudGY7vBs8KwBgUrLqHcJyBz16",
  "key8": "2Je3gHujapJF7gcgTm3XYiiGq6ZEx7cZkqVrZYS1Zzg5s7qiN4Wb3cWs6sVzgxD5EeoFUe1RH1uCn6Yj64AsXxGp",
  "key9": "4nx8tKkiUgqLf7997BDe6jW2WaErTWN1ynsV61C3g2Wtmf36JC5A1uiL47jHPkjyDnSZgVUVG9HRqZPBxpNPzSXU",
  "key10": "54g2mWTe5vjTAwaku3GcCqkJdT45uyJq2B7FB8mMfMNaUbjWsJZFmmLqZcvGgbVeYnKUXZW9hGCDiLwqVy2NV4f3",
  "key11": "3eGPK7AzyxXpVgvn34auWWA44tPaWTFhTmeVo7DdqeGxswqDtCKqKLGoA9xWuFiWzEmKMNS1mHMihxD3HTbowVxJ",
  "key12": "46kkuVej9dPPo4cFVC8RhgH5pesNerKTyw4U1mFWTgG8ijnZvZjjnULroTwozPax2tkJLEzFv8ryrqPi1pm3vZjS",
  "key13": "2as3iQXcVzT9JWAQcV2URBiwW1UcUEuvxsb4UA1EqHYTJAtfheBU7QN5KrboY2G653YMpyGHf29f6ejdiFFVaHPJ",
  "key14": "13zn43Z6QHseKrTJYwdTS2xdVFRfiafNJhi6Jmg5aL71iaghNzKKMQ2K2qqjukuvvWKnRzMg3P49S7kHN7YwbKA",
  "key15": "5E2JhnSxQ5fQZBBrLTCwuVm3iNWNgmyzrW1HXHG5BETcySNtJgWVtEtJUzENc7WxXLpLKxpMzgTAACPKyLusE3qQ",
  "key16": "3UuBKRvPAJSMMYoFXQ5BjSGGjcyf6smMfs46TxuwKHDkuw3KSXriGdDcaThTaXbcuQesLT9p6P1wKYgGjygUe5oM",
  "key17": "G9KJhoAYRccRm8V7xmJaXVyxYNn5AqC6h7XWh3vSEk8Pd1SqYbRHCEYCpERsGaDG5xWvhn2svG3nZPyFYBYfGWZ",
  "key18": "5vSnxurkE9iyRsBTTTRQTdTa11uFLmYpiG4TnvD9ZMVYvPrPKcUwLRzozRXKyJfHAXXqWkfk5oC1G6tUH4XeeL7F",
  "key19": "5S2K8VgXiqAvAjQKB5923ruezQiuRSjdhJiJ4GqDUrbphcqG4SYij88mX7SiQfrfefsNduCUKca1mtngW9kpB2QG",
  "key20": "PFGC9pnA7Nojzn7ncndadj8u3ZtxwonMPy2BEiZWYoU5vZz1jJJU49EjUS6MTxViZD3abzYZKccYFvWsDX7E67v",
  "key21": "4BrLMX1AFARczck8u4rkuNSs1TFz4btPP4Y6jecNxBm3Sa411EY4WheSHJrpw5QubrKsMy77LpUUcZLNJtuEFZ3m",
  "key22": "4JsXXGTAzkH91g63JbJ9PMB38DxAwoqqacwSW5JWmhZr1Pc9K2GjqgD5C3q5QwLkj9EjYReWApdYCEKEzw7U3zFD",
  "key23": "5Mn7YVkrgJpuzM27zjgfnLPPPam72CYhE1bRDGwr3iejeo9dyvix4iLfo4KiyxxunFh2Lmfa61mqFsbjVEHycSk9",
  "key24": "5utrGGW5h5pnftvdMgY5TrXXrQSCDDK6VVQKGQ86xRLSbp1UrXaEF1ew93Fqx6tRiDu1Y6EkK4utLWtSj4SjTfGi",
  "key25": "3peRp3QP4acDaMRJ9cThUMoha1sJDDWfr5A2D8kGMMt6sZYz63Tbtaj8o63f3bCVW9X5mV9QPbnxn9wF7nXCRo4x",
  "key26": "3f4e48Ev9vzBKdzywgnpMUUnkuKybAoMNWdBeCkQQfgwznqGhbMwsY5EpE8o1zdyRdP8rAsdQWHVqGy9rL4cEHna",
  "key27": "3TFSHEwqP8akZ1oHDNAqRcZGvz3dyj3fDekkroQ9PW8EDp6JtQYtWNAcgUED3FPZUs73BBWuogDRWQiBwTF694tP",
  "key28": "2q5yiPeennCKDtsFFY83beimd4WRF4CUeSJT8KFas63qJNXntQP7UfEkXFyszzhom6FbqEzc8N8kmHPcYtJUKzoS",
  "key29": "63yZVuZMAq2fqm3qw1374EuSEd3nBTuM3k1hUVAmGv7VDmCjKb7S3BQswCgYNofDxZE2voMXsJ8p6FG9iWACtVYB",
  "key30": "3o5QbiTwMrK7vs1hfEipSXBVH1qVj9r4ySwvY53s8CdRxLVDd5bmbXN1xJoQ6pSdYdV5LmQEkfrRWBbtgjkNZ2mu",
  "key31": "56qyf9H2ck5xmExWfVPMWuBH8JzP1BA1gEoquj2yRL9UVWcjSjTckpNqLzvag3MbNobdJ9YrAa161A1LpB3HovbM",
  "key32": "z7LKbw5BJ2Wvsh12hyfuamvH36LvqSYuTEJNPaaiGHw647WCH9atMWuc2bPoELdxj8eqWNNaTnBfNk4TmEqL7hG",
  "key33": "5Mzn1TNiMGSa7sJz4Dx9uwLbNfLoNZiD7SNsbRXcTA2xVv4HuLJfnRcYQa4HKMKvVqPsUr5p3neY3VBd9eES7YYr",
  "key34": "2jg6WyaKeoumicLzAXPStyprnF8NGvg6SkJBwnkrh6xYP64URhnu83LBbYQSkYijvtahMFrHQEjEKt4Av4cgR8Si",
  "key35": "4vuFqGNj8FpEbB8er8VbuQSfCTqY7b1FFGE2wawJYeMTthBbKneD4Tn3USJ4SNo1bQNtbGfeg3zUAUTV524ZQNzg",
  "key36": "5XGjtpfPfsm1eBKD8a27pDgHZ96CojciTpjgULLUDuAdBDE5uuSuSG1cGVXPBbcEsErFgwFC4Lut2823mtfJSCqf",
  "key37": "5VRBw6Jty73jWVGbN6un7pvrs8ZEYdrqW4Bouw2dMQT7U8fB2gtzmdnRGmPN8em7TvKdpB6YAv8EQXRyt6hnUt1H"
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
