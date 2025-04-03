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
    "4wbPdbaaGzP7L8oJBNEmzpdA5gi3oSYXkf6amN2ZqfY7UTDz7VRu32MdtLU9Ga9DvyQPqpMUYzhdQtgCqS9gXK9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RNfDMY5CBzWyVekU9mPP9EvXFz6Waqk7NvVYiC3n97XpLjxB1NVwGBPpqK77qCgPcfQig36ifDtYiUesdDByu3L",
  "key1": "z3NQUw6zVj7wb9eo6Q6XV6tYBGcVhezPvWfn5GiT1ecyUSFWcHNx5ZNKYxHR94N1dkVfKyV6DUvizjnuBhg954n",
  "key2": "3Y3HpnNgdGsoqEUkjVXVDUXZQuMdXvpxrKUBoSzNwha4tj2AjFyZb5ptoK5YFkA8Kv4RcGBpXjrvi6rtA5YSU7mq",
  "key3": "F4a7GnPFDbQb5KRHip5HvwUAhyLGvhuSuYNsMEKhFscBY4X5nGLdFfJRieEeJfQ2vaQ5ME5DVuNp8Qfpx7ZwyaX",
  "key4": "MWe27QP39W37CL3P8EE391rkSYfwadN1JXE9pve82kKDcGvNmhJDehugWUx5VmMMBtLNr395fW7H7NRoD5fidvb",
  "key5": "5MFB6ca3EGRkyNsrUHdbQcCThbPiAhHcHYYcKdL7ZXwDnpkKVzUBQJHLf7yWptCmnZnVwEwVbyZhE3PiXcvAF2x1",
  "key6": "2Q32M6HHvM4s1JmjGs65ZpzXszWFE3KYQMuF1rqpDmCxQcktxRAkJHdkzdfXsYHreWvaVupR6vXBSKfQ5SJF6Pp3",
  "key7": "hv7thDWZNHMx9GFk59EQsw1MWCQZ3CbZQkDrkEjRwMgcMugEXwu1iHQhxocNeGgLKi6YZEzExiDbiZ6UqvF9YcC",
  "key8": "2vKYgVcvcdUyJ8MWQ2oBbF7xuWo5uqaoPn2AnSFnDgL6EpT2mEcyXZBTpnZM634bwqrVVbbtRwXNoh49kGgLyP2J",
  "key9": "59naMqCe3DA2mYErHaTBfQYaaohh6kykMVV7wPzGsxqWT2V8mnv4zqYaWyfFKWFtyLYhqi4u64wwTTbzXCJ9k49q",
  "key10": "5vR2rTihu4E2CgEJqfnZtDwufLZpt4gNfqKHU2X75EesEArELcoHZpf4f8zapgPYYk6Pe1rWGUSBbUVpKxDp3N7i",
  "key11": "4CZVT15jDYGcz2BsWKCm9PufxmKTfNrTbBbin1Rf5XpHP11xmgHeLGL1ezjVa555mrGSTeCwbDJg5msPDEkDzc5L",
  "key12": "3hU2CS3LVB54ETKkvWz5TmF2BfX5AoNLVkJeUByss7rNr9AFCkSdoM9ewRPeepHs8nV97SUcYzqShQkFXQsjfLLT",
  "key13": "22EcHNxJRsqf6P3wdmfu2ybqxDU65zt5WNwDwNHDhFch1JAtHYkjzfuSxL2JZRZZMktSk12XtBi6y6aErbeAXmzK",
  "key14": "34JnnBXcdKzV5ptxAHRGheoKJHuRxXhfBshS7oAFgaFNn4oD9GXEL6bfXhm3XA7ECg4X6iKFsffmKFKPN2eXsgkB",
  "key15": "5tqcNXf81KSsAegTXDCoPMManN16S2UnWhDocgSbkghM9KCZpk4PW4h1uKUhbhquaseE2L3AE1uxonGnbBWo8AZV",
  "key16": "2mZJacNdAGxZkF6kpax386FvxfZKNtfyT7E3z5Sqa731msVbQNWdRRQTPX3jEVpu38sATHDvmhz4C1rYdAbGPUfo",
  "key17": "2arEMf5gpjBfZ5dLjJjYXm9Vg7H1A2ZDpgoh9WHzzKnMEM32imSXHc9B2RqJJEGVXCJkzwj8gbSm3DPM5aeu5546",
  "key18": "2RN2xAKbnmt3tyCnKdUEfNn7YtHNcsxmTRk96wPB4yE2n8idgYPwZ7dfYUS9Sw3BtH4JL3PwN9KG85kjvoBf56vG",
  "key19": "4oEZZCGy3DJqGueJTUvZEqDHHSXkAjJtttc1ns4XTwUxnjiVg4PRwRXfAYq5SnMN9P4seoCdLJt187RYfBtXfu9j",
  "key20": "xjMYze62wBVQtpsHLsEaRvNLiPJ9mjGc6HFAePbhTijEKrkhbvAB5gUKHcHCSjLq3f8n5mtHvNJmserh2HnL7FA",
  "key21": "2rAPw8PGB5J8KkJcwyLM5woZ1JLrymFiV7osykK18vSmAXmJ2tVQJNhBYM4JaWqF9LykHTL5DNwvsumDmTVoyyjD",
  "key22": "2UmLmfReRkvkUwu5Un4uoxdpnSPdxY94SJSuawvbbQ6mB7Ea5C7aX5Pmwr4BMxjra9U4K9ZeuUBSGCf5shfD3vj6",
  "key23": "Py6ZXaGu8y1FVkqpKiQwrF1zo9UBFVj2NdjLf4rFV7Tk7a8yrDfmsLBrVZBtWpmwCjUEhun3GCiUGqbstFxPsm3",
  "key24": "Bj9hExpEkfvFEFYVGGNgZXyGgog2MR6EZAPtBkWcvfGeZYSLawpxX75xTurcFXxrb71yfULJo1SRWBwzUdZJ1A7",
  "key25": "QGRbmxLR4JfbhCww1nfnkwzzuwCziKbwTVVcyeTML3JMwddPFQ73xNkHHoPChgFLT1Va16iimaq8X2g9BtrqsQY",
  "key26": "5zaHKVje2a3Xa2f8zKHPzBm4MtAD1vUT1nqKjPtCh1uevGer8Bj8raj1JKap3EHUhgTmc1viV86vpbe6ReGoPA3a",
  "key27": "ZvCTMJRyRbE8JGEkGm9WkEF9fxfCCVMUunE1tbyr8AZCMhZsxMaq6FMDVoNTh7YJdpUNiUawqu3icAmDUbHpKDd",
  "key28": "3PuNzNSYU6Men5vLUvjor9PyiAdcPaebzyBYQRfhmXptMQU1b7KWxzXTLPwtq6ww2am8kudCyyzMg3h3gzxp1wCj",
  "key29": "4YTtrAD9HqtD3B7JhXrmwgu2KBaTCBqVqfegV2amSP7MVAX9jnCpQRzLdxNm3eyTDQgcyKR7jECebCTB9iS3oK1p",
  "key30": "3Z6zTUNTC1jnqCT9DbREATQBxzs7rdnkTPqi4SqyE2KWoP8Yx71ueRCsT8fVFtKSfc7ZzMEnQmFTCi6o92rwnFS"
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
