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
    "33jnM8yGU7TEpsTn1bNNhv5U7D2mcfatVK3RXsAqELd1E9Fz8iYmyiLU9Nf41giXNB9KABVgvYNaEuwuXhLFAGzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAuyAyj4s3tTtzj7vVRwMRLom2HJHrRh51g2jb6VCei8FdzEpoMg8ajsaS27G8csoxDnoxWGGTDKbsow1QPnsek",
  "key1": "EvGjX358ssWqzYQJ1JrBQPqF7Tkkaaxqrwz9JUz4iZU9EjWADqet5hoJX7EoywJowpYbrhidsQiiucW5Zfk5MPM",
  "key2": "2jEUoyUFMspjjGR56hXLVi9mD5aPcXAKZnDjpGX3oqkTfBn43BQKc7VBqAB2rDddKqKigCRJ8YRzw3Aq3C9NPBSh",
  "key3": "2AeAHQ4TY3GVz3GwxjAV2nP99Ew5WAzAub99MENCVA8n74C8xgsgjAwEeQzNnzh8K6Ai97vuyCms8MvNSMbSskVA",
  "key4": "5ZZwV7RaWErJp5FVxB8SPkwB1fj5yVjhvhg9B8j1amtmEr7BWkXSFFctp1rKh3SaqD3LBJXy9ARv5CTqmKyXXEvc",
  "key5": "dXCjy8qWk1PmpgeXvcGkAsVTqigoXWMmUf35H6mWoPTLYxPrg8zsyM3bq9ywum6pjBbHWD8jA9mqKj4vGrLNb4S",
  "key6": "Ahg6XrFcpwCcDqdHMu4SqfkidBxJQYnVhESHrrZxbersH6iY4XwGCVTvYN1mACzJJXBBrvKyZc2zn8n5Fv7epfS",
  "key7": "3LSZ6P4nVU6i5GVAKn25k8QtNjHDnYTSuFXBEHtqoekHFHvQd4KJhP5DZQQjdXx4JcgfxZsv4dMoPnqygQVcdoQa",
  "key8": "3vkWL1Up3yzh9n36JGYQYZ1toPMZ1zxHSQx8dDag5q2JDSeyW77k5yjSQyQYhQS65rLiF7yzURzBfCykYR6pedMa",
  "key9": "2JSPQ1nmU8Gc1d5SNu41LGVwZKJSKcLvKcqWYCUbk18yh3v7FpEJDPvqq6WH4ZzKPDqBN31YobhUxg1tBqeuwtA9",
  "key10": "47TPU8Jj9nXDcCMXUXZ6uxzQgBrr3RxJPWMggQD1C2hqADkJGcr2CbwSoP25VeQ75kQCze7Xb7YVhNm6AVcFVBqv",
  "key11": "WDMmGtpcXte8eenaTtAAgz2xAiUcbLQAhCFEweoduixYyT3TZkke5omePFc3wApgyro1eX6ReQeMNdcjn3SffoA",
  "key12": "zUUqscURVDVnvfnGoGv9R1d8kfofej5bo6AUDwZUfaCL4BAaUSstL6p9pww18947GZRheke3HAK25kSTAk9496M",
  "key13": "5pmoxG4g1ZHA3RFdf1VVm3iocmm73ECU3WmUXAEkrs89Gsz98hUfjm7i2WS88wF8kuhzs2xqrZgy2zDt5KyLRqtf",
  "key14": "nHNChstTsoavjga7RjiUCGwe31KKoFuVsu7qH6w2QDJKiBh9W5f2pp4Cr6g6QuuRQLMdUrZ24z6VvZqNZsaffoD",
  "key15": "FZEpszxM4YrcbBikuDKyGFdwov1fcb2uhWRvXNShASiBxLxnXTmZQBuvsLt285gFpkfrk2EfjoempbMDNDa4Mqd",
  "key16": "Y9mbMJj5BoALYmHSP2F8VpM91WyhH9VYnBR8Xs2E4sLYkAdBdhsEif51pDZNU5t2X6pFMB2f7XFk39oKgaAttN1",
  "key17": "5dTL9eQrpGqq6VgjNUWhoW19VHCkezSdWWbYy4p1yF9fHedqqXCHvqbUtT8QdvWSN8KsfyovhvW9H7kkSdz6qWpG",
  "key18": "4Pzk1q4a9eRAfqgjmt3wGMpr7TnMXRXpbsCTq9wmAHWnwytrZFaYQ1ZL3Ls7aJunVT73tkqpvHqJyFh9ApPgxWTS",
  "key19": "rb6B1K1W6QraUDRM1EpSjMVc1Hg7djZxHFVV3dv6yCFUYqHb4CSRCVckBXpR97N9Kma91UkdGTXC3xKsRV98CHY",
  "key20": "2zVP92zNFXz6GEs1aQoacMJYoLhJWtjQ2cMNFCaom1xSt1ZnRwSSSDBLxpVYUHgjmwKFLTu91Zyr8ZkLWBWDnKp4",
  "key21": "2S7yhaPhNMJiGpepRuJcDon8qSpgnHVCbCP9N9Ec5JResn3ZD7YNRrH25zS5QQmh7ZdnQCRJdV19tsbe6E5YVnyB",
  "key22": "25tsbxCAxQQdYFMpL46kzZZbbTuPyh7xiuUSCZLaUcyw3j87PJq7po3A3d1GL7A3Wetw2QqgWzsvddXTWuWgKi6C",
  "key23": "338Vd8pKtKis9xJGyVTSkquwGhZ6YNFhjVFyHGroPajkatGb84SwccGsUcdwvaiuuBg53dEzvDS64HstysrBBd6F",
  "key24": "4VvDWSBtNTBsqXSUTLTexipEXFw96ifvKiFMQ2ZWhy6sbJ8TNwXcb1DmcBQBh3UNPCtbkb6u7txwjTzT2BXb6YqR",
  "key25": "QAShJYFKWLkP4Pmi3Bp7L7P4YvnLjw5QVzGw6Sk3fAgzn3mohHxpNNTPeSaGe5kEYXw9yYPRwPttLoPKTXPae8A",
  "key26": "2mymyuPbx1xXMVsZASefzX3TnfZSJDBtKxPBL3fomKzLCQznEZsTU1PEYwTPJzSWqE16hW8siQ7RffGi8rHiL1vu",
  "key27": "4a7QjJvSG63BG5fXgKwGKr4HWCoCqcr2ggfBGZDqw7HroHafBN7xHH817kTm1HuztgHdi6PMFTDAbLBuckTg5Dwj",
  "key28": "5f7CnkCULafe2t3jDB3igpQmny5UYNay6VvCpMm4NmTTcG5TvcSHhMrCcRzaKTCdwm6VZxA2hgjyvjs9Mx7hQ5zU",
  "key29": "3TZ5gqk7bbZT6DkaCBJgMerHLhYcdkyczJdb3A8cqy1sAFAnhrr9Jc2EBJUaCQqpULh7gc9k8y3ZvNBeDJB9R8wP",
  "key30": "5iAZ2mAPEjPodrRzXrVGrUheTmDKLkQPbUR6pERHeR9dyS5JAAiPLSkzxysAXVvk38RoJF5T9ZwubzQR8geDgkRx"
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
