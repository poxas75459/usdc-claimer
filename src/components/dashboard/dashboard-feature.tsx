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
    "2zP1bWRkqcfBd6KE4s8Q6U944kt54QyxywcFtEKSZs2qcG3myroXHfyGY5hZtNxfnEVpiUNEhwnRjHr1AHspDqSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hALHRzA4dri5i3GG625nK5UxHMf29CCZHQKvXZA5o2BUbdQeDD1MU7FCrdUxRfBFyPbxqhEgpiyizUv3atVkzC",
  "key1": "2EKg7Qoom3H7DX5ycv7cfvv4VBg6meNXPpGtVuVBJoc4VWM1ifwN2FgqyMxg2gvPVpDG43zFnLANxrsjz5ZUrRQ4",
  "key2": "5NYwWvZiYRya6QxpHwFMmUaH3P5ER3TZ8udyHEXWsYoA66DueZCckCjtwRAJgcFzGFFiq2fftz5Sn8zNh39Xkesd",
  "key3": "2qN2gnjwetfyKaJ6tD3R4zuNqi1YPnqGKUGa69MTxPqEqnp3diFRTyMZND723Tp1yCw7RAzB2pv4qmgakFhb5tqm",
  "key4": "3aYJmAR8Q4z4DxaAfKoiqJZadE1SEiA3kw8Fos9v3ccFB5qzdq4TiqWi16xSKpq9MHrjW8STvyqn5ANzGCh58vuu",
  "key5": "4jDWfEsFVrscpNQD2SCaJ3impKG5Dd8ehE1fKzC4YxD4piLQUkhM7NicsD4G3qRtJjSp6SC7Zk7ekuXUfoep3bc2",
  "key6": "2PRngJqURGAod9cqFXHJcDHvFGibg1h1kmetznKdA8cAAam9bbpt5xaHZdU7NfbSNxw9LbFs4Sgeh56xHvp6FKwE",
  "key7": "5ou8HAXnc8GcynECMRqwLbWXrb8qLMwEajenz3LampQ7Cd9PGMCdGCiFo6jPs9YgWjrXHSd86q3M6gNiVKDgjEKV",
  "key8": "22HQTKT6fgbMcvf8RQMdrjsKdb7knRKoWMSyNSDMChZiawByEGkfnViao4CcXLTbNtaHb31akc8Sg49nb3J4H3My",
  "key9": "3ywc96wauQGSrJukdBMh8vtwvbb9woxHdVy466WEwvuQeZh7wgkBqjUYc6D384sXGfN6wfzkNGpKRmYPJUjKMZfh",
  "key10": "3SxSiLhMFwWifZtqE6mbFwpEPvd66cxKgGpper6Q81GP49FABbRJrEwKLn7TXjCMrobdhZoFdLUkCgauth8vtXmd",
  "key11": "5nPa8EHfGVxowFXFkWs5d8WeyXwR1832mSmQ9dNAKREKE7g6pMjsNEgvHASdDWHVqikHD84NSuHmMLexYt72FjRe",
  "key12": "59gQzcrpFZDDWNwtvPbRHUffPPEePySygZAT9SQaUmFXAU5tHanQkMVerLazK1258WaTGCxLrct8xUNaGNefLa6M",
  "key13": "5VFg1E7ptx6STyta3oLUPsm8Q1AbEwLKseygdNVWzF8XXYKFAZbUJ16S4NFxLKChbYmn8KE4rMVUX8EZrRJCxo9S",
  "key14": "4V7SgFo6xiLQKYQJJ4u377Xbp7VFp6GTDg8Qd1k8J4vyYPRUndDhp1uyyS6kbNTZ9vz9kyZ231fAcNdPcQQaHoxV",
  "key15": "5fYgCB3phNZqdMUKaQXe96dRoNtHQkRwWT2q5ZQwAaUeXXdymmmqfA6itRNxfM8oGGxBDmViwxvSMQmXPHRfL6Bm",
  "key16": "32WKDToBmAMteyWuitDdBpxpscX78QTVsJYRp1NhfYJpijKMtF1LecFqmm19JGhNXwAY4gDV12ptqAqdnu9h3MUM",
  "key17": "2WWmTX7BAhzjQW2BFxV8dS4f8HfdM5sQ5LTycgNRfg2SR6T7hkzMhf3m5LUMWNpmHzcvBiGQueLfgqSLWruLWZGL",
  "key18": "A2qrb1DKEKEFSzfy2PUxEg4NpoqpCsQFrttd2NdqwcbANMhmZFrcZJrbhQ4RH7xdWPDNX5V4htv6j83PacVVARt",
  "key19": "2sHipi4FNq2EMi28kp4EgAJ6SK8PPG8yzgY7ffgSaQ3Xky9dcj14EDWinYpAiY3zQixhvs2resLYnUtxz7HZsgod",
  "key20": "2XsKQbAwtgbUH8cudseHnsGQsJzubqZ132FZwjuAtwTxYsuK5oa2QEVoEPPZtEkZN2Empt7mczztfEstDvuG3LMo",
  "key21": "2JsSUGRSoTGphuaarYoM5qQHj9a8LjthVXdU21GV4gxcQvtXm6GAcWANPALSpM3qHfrfE8FDPgf14ufxkHda4HbG",
  "key22": "5SU7G1gh6aNCamFCp4Jf2VpHzCqAWqNkBe3G3fAzXGcTf6Q2w2sspZxnw7kSfDpUZM5n5CjLwSkxRpCEaX4iKTMv",
  "key23": "2c9pi2xDqD4sHxScYKp14UnAWiNhjNVmoSKYBiwB88WZTYxrV88FX6e7xww5V63q7bH9qF8K4ePk9Vo5QfV6xZBg",
  "key24": "iGpbjn3SYnbdqHiE97XnzzAubprm3MUar9JHmvb94neQSwzmLFeSGQMXq5KRGMh6aP3iaD8eaPCRJ34Zv4nTWtm",
  "key25": "4d1D4C6o7VW2z9TUzQ9Y1iPJSbXdcdqDEaTCxGPTbTgyFwAdHH9tpiarspkyefv7pdqtFV9weCFeB2GkJXsiJpjK",
  "key26": "5sZY8LZs7u9UsQuvEqRL3VnkDpnoVH9bTXeggG32z6hZJK1tnB4rnTeywsDnYpLbNfFqYb7HPNAYwRcNJi5LQgyd",
  "key27": "4dnJJXToyKMZGBXuQyJawVH4RbVRDwBaiuPUV9CFVatwmXhjk7RkeFdQ9Mgz3ZCsWzqB92prowmxBx9dkPyAgF6N",
  "key28": "3oBmKUXbnbmTh2kabhmDvsqf7XPTDGtStwj2d4N6bL4Lsq3H1fjiR1scncpyB91nUNAxbqsBFzEaLpWD2HNbJNRR",
  "key29": "5JquGYhmUJh42bTYfqMxA8HTNBFRFxTPdNv5U9n8eVCaFEz8EBvn7usxdbQDnw22gUU4yhserRrz3Bungsfa8opV",
  "key30": "3VcWT6sDcHKkheVtGbU21NHXca8mFLAsDL37o45FgqQQ1G9ZUbte7NFAEGrHqxdkzBzo7hyJ4tgUYHxMHxRMbC28",
  "key31": "5PW4PmKVqH1JuUuAWH3QBSZC7aYXuBwpPUeFhNNHQ1BSx5HxuQsSZg5MupnYGMebSWAq2JNHoYAEHd94esMdrpeA",
  "key32": "4xVgLVTouwzhvZYQsRG8kuxcFSNrowmENbRU9NkrPrDsA4AjBsemDKT4zwvgKf87PvJwhdUqTxqcqS7oAZQqhsZU",
  "key33": "5ew5JDs6s59EdWpjxL1f1qztxN5VKCYQ6QT4GGoG8m4j7Gs7jMFybCM6BRmvvveBNums41vwX1zzXn7MzjtAbMUs",
  "key34": "2YgvkxwhTGK5jLAWrsbmQyBC1i9yNesexbMmYVWXQTZxDB19dfTH93D8dHSeJAvZoDUpVb3UyhevKSgUwktnS7FS",
  "key35": "5ddqgwiDtLP6goSvVEY2aQcwUzbZMMndFsCGBUSYn4NafV5nAXt5nqRGjgeT2YvM85yCbUDtD71uAU1tcaC2HjFL"
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
