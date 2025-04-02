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
    "37TQAa1g1vAffPrYiYk4Vvi9hpCfNp7AyyGZHUzX4CGQgXJMJnA8dzjTrB82EMjPkdgCvzadx7fgovt4PchJnLTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zb9GrdJBSAQecH6edyUg1qEWXfpuayt98ANheVMRwUmVpJDgaymcrPLhpoZzZje7dYHF8z6899cFqw7EGddmTDu",
  "key1": "5owtGQYHSWfzrN33vegUdB2gR2Sjy54Z4KzJcwBXBoYcXggybRHbC2wfJCgfLQWQtn8ZppW6XBkk7wXeSjctMPs1",
  "key2": "5ymkHXK17Ydc2A3mbeK4LAQ569Dh7VPyCuzdQSuVx9uzU9j4T5gt7aVEfZ9jVLzZ1UcXujL8eHrYgn4nev7sgPzD",
  "key3": "eQgRrUDGFXmt5KQBDC3YtEEhpGgiGdTjZQGhzv6EAL4TTExhsVTZJQfvytMmfmxcwKWX7dedNDkL19sRnVq7xdM",
  "key4": "5ogXSVwrkcunn7kB8F6RPHb7BZQ85wtuHMQ7Vz5w4efBPMYM7yitG2kzbZ8hFY5YeQQT6W6GopZChTX36r8u45Vo",
  "key5": "5d1nqbbcDeiSN2NxkrWiAQrFivhxJcuScgQo8atqNKMWnmw3ToTNiWWoGPzDnC5i8ZWrFskXkNpZ98vv6rGxvT7K",
  "key6": "3RPNJVqFmJywERnTzUBaCyMrispDbAHk1nS5xzaU8kqTXnjXSizuyXkCasGFMUKjvmpk98Ed5wkZCeYNUijTSKRU",
  "key7": "5ndfCt59AxKmGxSvvfygQcHcqhew7Qi51iweB8nBrsFWy4Lzjw7JFibPYFU55r63Cvd5o486DnxaVPRUzc7HkzTt",
  "key8": "2wqYGqrxb9oPd6qGh4TgCgkBWVHSoUD1g9NYYEpM5mJa35qmJfUw6hwv6YmdQqq1RDfUyhou3kDXuofAka2JeAk1",
  "key9": "5SuwhFiWoJZeKZsKZRHA3zPwhNYmGQxPYSe4hM6YU9sH8StL2ATzdRKeTdzrBV7tWB5pKS94Fj5njMmzWF5ZTNJ1",
  "key10": "4jnfTfG9u9KE9NZVukRL3nUrHf2bfQRb1oBWcSrhDcuEn7zuU45Gs3QJkJNv9dbcvPZjTS4dB7rfH37qF7BUt9xx",
  "key11": "3kWN4vHNNBXDSTNbNrXf86taP3Zixar4xaxP2aymSYEsj3khq4ezWAnKspFqYD1m4eTwEVe31VM5zKDhNTThtYcv",
  "key12": "2GTRrJvAKw3b1qfNE5WfDC5qZeK2WpfwZcDvW6E4xSmuSicSxRxt7siRujdyRbaAs58ZimohW97XymRu1iJLMLfH",
  "key13": "29Mb1Wn6UtZeL54zuP7aoVDJLKFGcBuK5UDKo5a7dLaHzDbNatPjK7ZqiMi2Yg2xaPjDeveE56MPVhU3Bpqprpkg",
  "key14": "mMvoyfwSuykmGoJrS3nptz9Mk6XXkRrasMyfxezd3QRiHmjvQwUnce2pT8UgLu6NAUv8Bsx2MYoP9aaXyigNktb",
  "key15": "5cyk8KMSVfw4Ue9YBZoAs75rcdHqas9oCSR2HmLPvhc8qFJ6QseHvi9Px8ADpvtvG5NzyXphvBbHJRGCJt1Gp5gb",
  "key16": "5p7oBRgYMRyH5YX6coSoqX48JAUKoBmx1KTSqD7u6Ri7KphN5QRbH9vfgabwFKePeBqgCv2THB4sCgTsaq5PRcUg",
  "key17": "BQ85qKTkzKYCzFVnY9WqTFT6s9vTgacBbuCQ78Rouhp1ktrnxdfUq61qUWYagtirX6Y6okTq5aVC2v4B4iP99F7",
  "key18": "3w6NhvB71Tk4L5R3jgLrBN1Q1mutndihzkZ3KVa56raFczoxbQmjMCzQBgdTnZKzeK97LySZuHyHWNYPSTox2kiN",
  "key19": "TRBNQ7Lmdiffou7ekiMCDLCo5PdrKWeu7vcDysCp3iZoSUgXr7e6QfBzjeKh7c1utW5K4CNskPJzQcFRFuAEJ7A",
  "key20": "3Hrr9Q4chLokmqErJ8ba2e1FKzMQtSrT56dUHED9wLymMwox3X1ByDjqh8MUe5XrE48eXnD2D1mDaGQ92T9r7vjr",
  "key21": "ZbLkX3YWju8bzzEezmJZk7T4ksi2Upjt8HuNKVxwMRzDRfmmJ2DpEnJPYH9k8RPKkhciNP3GfYmqdsqg2rmjk3h",
  "key22": "GVWv4Vg1n6W17iHpFfG21fHPp49NH45gEpxvt7Ekbi1AkDLfoQ45b4iT7jmDmEiQCy8L8cwjCnroScptGJQhvTH",
  "key23": "4fdxAjZApZHmpJvGZUWo54rtqrk1bSBpSjNd3LMVy9P2xhAbvL7N96oiAqDiQgb6oqv5i1xhUVJ5PPQYDh4L5t4Q",
  "key24": "cfQxVFtR1a2sx2jG6HVBd3BMEwfhp2tBTPezg9YjHoPEpQGCsnGAbXhCQvwijJ87CiPEMu93uZxjK3WBgb2Zi8R",
  "key25": "4Rd77P8tLf6dBLw225u1keZ62EnZRziNi7eXRiAxkUCrMAVktof1dB6QuZ5zkoHpoMnYPC2T1Tes3UCXbQpruvzX",
  "key26": "4bHYPvhAWDzB7T6LU9zr6CVS5kXvV4i2qCJ7gkHxirwyv9RWSMeqYiCmV2aFFqtFt8DtzJkrs9ngCr34NtWsKK6z",
  "key27": "64E4xdW6TQSrS1x1Ak8ji27JDtnB26Um2xyyC2T8yBbcyS2MC7PE33xNigoab74RkHDePRxCPmrrBu5q82UxtXYF",
  "key28": "oCNsvR7WjTP7ChFqan1XhtgnXgbeqMxjCe4kFtWP9tFJ1CZ8S4g5FBd92X45iNc4xDauNdEHi4nvoEcSYc6rpMi",
  "key29": "5GBtiScGaJQRMHY2ebUghs3ThutiqHiL2axsdcBefjdRRKxWMZiYqV69kpgaV7XbYNaWRUZwtg8jWFDxHipQiY8e",
  "key30": "4gJgpSdfjeiG1SP7rKsVRR6uKkSmdyq8hK7eDAWsDSrmgoHSu6y1p7r31cNJbXTGzF2Ux5dVz4zhajCAjnFKRrhJ",
  "key31": "2nmwc5svYBfQgxpmYnVhuBRavBoAtqhFmAWa7v7b73bcA1TebBn7fDxtMkQazxy8KuM5wzfNSQ3dJLdiXPZ4gasM",
  "key32": "3DYmbJZ3TkRLywoZPU9nZhqkev9pfgYgz9Hg8hv62Dga58iqSsW4h6dzAP4YR2yJ6BZPPQieE6vMZm7xHZqKD5Km",
  "key33": "5YSQFmzDfQE4x4yAPCm9disEw8ak5jCM5BY6RUmuWXXNiRp9tY37db5tXj5cYp3kyw5vkw1Sk9SpVXKeBPrchKtm",
  "key34": "2SXehj9cHXQjXsrgvQxkjbcTkgUdQ1CydVjxvBMC7iUnb4b3W4QBgPw7dw5iABEcXXyfTj4cHP139J7YNrLkqPaP",
  "key35": "43BjWZuD25KUakAeUyAXYNBtz3zMPyCEgfc6hKbUd2RYDyvL6tteP6Rjc1VjWBB52zvm3tGK1b8QWZZtTqPWcyUQ",
  "key36": "ngjXtNbRj4FN8p8RoJApfJ6NJ1qsLwm4PWXVDPWmY7qHqCLSQaWQQezmvjXRKzmDFruHcUgDtxCLEXRQhvhyY3M",
  "key37": "52KSuS7sdP2DcT6TVPeJ7gt4bDXsa5x84YprXu6KfHfF4ByVdYpaky87JzAkVauPUDLmbAaUEFvVxNTrK3FdbjWN"
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
