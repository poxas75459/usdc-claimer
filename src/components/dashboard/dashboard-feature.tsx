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
    "4BzudFvU6ZJ6epTDnBDanh783cv8eeCVfjU7E2BuPXBwca28mXGmQ7MqEcPQ4iudPGtxDFJLHdXmtquJA2wnhsho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J19KhbGTFMmh5BL2UwZ5VoFMWNxkagM9o1mbRAWFCy8kAZCKu6Lia5tEbCAWF1Lj8P9udGCbTctCYQKfjSBzXi1",
  "key1": "5mStKnzUZSkQuAMAJHvW4hJ2C2zVLUFMvc3Vx8c9X8TnJwj3aNkMLTUaEu5FiU9Ekdgxpc3eKqGX2VrNJGeVX8KS",
  "key2": "27WePh2VJkbKAr3fPUjCEyeu7qpafxTWv2dGNYBMEqNDmBB29FrrDqwxT79t7GSvSydtZ73nmuPW2vSi2c4PcBbH",
  "key3": "66TBMsHHh4mBsQrYwEsEJTzv8xX6K8qXB1nYKZ3n4d437zxfNNDkk41M98idK866aW3iABdXECrH4WTSFBAhNW9f",
  "key4": "3H5TJtbCqSP691LH93FHoCJAGZUmGipqPKmDQNf4WNtwFoUakDq8u3QqeME9S34EwJaYZvRm7Q8DWtU2P5RX939T",
  "key5": "5BaxuKtDdVViw3wHEEGEy6BEzew1h6uGrSj39LKc9Q4ww1H3js8RcqbGt7miZpyAqCoWjbyoenKLnWMbMcGUK5Xf",
  "key6": "2mTzJDdEY3rVWkZjHbkkMVWzSUgLKBWucBphypgphioTRwnUzx4iLB7bt5ahd7DLWUp3D9trrLvPoFkd5qHDfAto",
  "key7": "4yNQ5HqA2A9fPK8xfZqXGca1aZzk9UTHuZyjuxUEuyYzmg3UN7M4EudNSxj4dsd6f8dhqLrfiXcL8JMfmjyy88Mj",
  "key8": "4mjYau1vsBWxBaF2yhXUTxsZfqaJA3KgqC86SsWsGjZkoJh5VD4e9WUPv8qxperuRRSg9xmNzQC3QQGDtjTyBmeZ",
  "key9": "3zuqYrUBgv91LRtuvSohthbKyuX6diTmQB2YSBuFk7nsYiyj5cdE3kFB1yLxQAhRtYUBr52eWj2NXZCu9iZhrn5",
  "key10": "2Am7rgeSvRaXudWpLpnKTw7sGz4q2R3yPEqq5EXCedcvqhzBsCH5NtKjUqhUw5QMYVaatqvRNESrE8E56JuFbQr9",
  "key11": "32rNHKxZrD2PX6bdfJuoeiqD25TJvJYxJmJVqr9YBDTED5SK69A3cFZ1HTwMQtoKHVX7eHENXYCzK5yPjWmguEL",
  "key12": "hkBW4DmUV7qjQu6n6CZidkbEPz3FxevHzD4Dbg3hrM6hL5AD7GEFwHMxWMVfhSLa2ZwdAauivzGXfncnivzTXST",
  "key13": "4mPwArk4ZegJ7gVUfGYFokFATka9BKv5RE6qKF6QMvkxsXm45sKDCm8x3VnKZrx5fY4asWSHyMqfL3j2szWCMTLh",
  "key14": "22kK6kSz1fFpdU6Mw6KgnA4MqQuFtuawRB6tySCzUXmczUz6KJUiLUXeYnoBc1ZS58HgWrgqC7HgLMq55GqN52qW",
  "key15": "49nGZK9tpxDcES2YFae8NKDvrE4GvnZQxqxdqDvfUuSMTLU7HQbTdFN6zLY32by4Hkjk7hmiirQzhWMBtwNxjfBw",
  "key16": "3VF1gVFUt3RbyfPJ7YW7o5UMmToya7ZBKQtGqWeznwLrT5vZbrfsBcBwha9LzPYP2Yj8ghX8CifntgNgFHPxrVag",
  "key17": "34HAYH6uJszcbM3uptXTzGTRDzobQxByFQeW3EaT72qKCBH56zoYy8QkRnB2YAJSJMMSFWMxg8UgXXfQkyNRSgK9",
  "key18": "3egjdL7FCCFrPr8rj4kD1M7ShhZBih4GeQG1f6QDh29b3hsbfgbXbZCB1L3N471BHPKashBHV2ByThUpfzgRtt4y",
  "key19": "5BfHGQnt5dX3C3qYvJQQXJuZTY3Bx3SKAM8vsskXNwtpSDG2UoouSkRTtdpQQk7xggrUBvhYC12zdiXy9js23VhP",
  "key20": "23FQuGeHGTe29qRRTkH9Uhx4xU92qLsmrSop93adSd9ciXAGghtei9geK1ggJAYsYezDK9Q6xsjCukkwSDneh9h9",
  "key21": "4Wbw8Aytro5ghNSjhEA2TX64N7KVxp8EQ6KxGxyCBGKWnof64YdPUYqoGqcvNatREQbE73GgKZvnfMf1qHADbRuo",
  "key22": "zx95meuZbTRheqR9ZdCsSWve9DgcFv2hcMjPZnPKuje1WoZtZM1RLY8pVASFd6YFPSnKnFdRex6RAa3pAZNQr1z",
  "key23": "4XB96eBjSVpLbeFe5qz3hUdiFiLGCcgAuoeHHk33j9Q16oVyjeWPPEK8qbpz8Gkp3kNKgTbeiXMdFbXS2Erq7iPq",
  "key24": "2E3WRur2tSo2KVYWJRG3VBcaMmLtCYPuPqjuCAkGY1yTNUcfrTBUR8PRp1fVDFQUBEavzg9NFaKM28xPxjyEKebU",
  "key25": "2f6Q2byKh4xZWkd3N7aC95rkWzik24hATFgY1kjMscWj6c7uscXWChbocbcjUSQ7WNDJtLjpVrUWRKtExXz9JdR7",
  "key26": "5UviQoARHAJu436d89S8XjH3Wm3pEPyDFhWmtG1928Ge6n6K3iuVLMoHjFZXd5rk59jJ73Hzu6bw4RD6kFd3aJpM",
  "key27": "5PjZQ5kmA7X89w8NVPvUn1snaKXedLHRSeEiTbQ2K7RdEhYhHKmTuWUA44HoA3j85VNprXk1G1pSML2p8wZSnK6j",
  "key28": "4aXuqp5z55uZgddUsPkCisA1RoBM6ZqsP7Dbx8rd3tCee3HmzV2rawaMm4ZMX7AZZpdm6weuuAS2GCSPumgD2Xh9",
  "key29": "27c9uaUdQkMuFhNNXtfJDWc3FPckzUpqN5PpjDDC1P8RixGRFEhBwRj36qycmtGzxy8ePVo9RKCE8FBnp6A39XQA",
  "key30": "2bkAaqEdnU6QjJmm73rJxfWujKt4wJh6PGZc6RF8fUhbcBDGq2mLjC1zs8XtASFX4rhxwnU5xoUGPMHRrK63z67P",
  "key31": "gzUrVsdAUqaggcWVD4xwvR1d1C7KXgKyJjBVcgUybMv1H8BDMh4D9LNkmwSUUb3ikCv82WCrryC5iXG9EVNE3Wt",
  "key32": "3H3Nz9UQH2J9zgPi7ms7efcPm3qajH5k62NL6Hy7J5yV6MDMrzEZM6b9MvKsQABwZbu6WdEFojdRVohD3M39UyTo",
  "key33": "5Sw6f1rjxR39eEmwmJo8Kp6u5bWwT2Gobpkhysd2Fu9Kk3yXzCpasypzTnewGMzM31JCTvq1ffqERLjixiTUq82i",
  "key34": "59gAaZD9Ck6Z4knnVmo7JM1XDnG8fe6zszBn2LgZFjk2XGskcJHCRCsUMEyFXjfKxy2n5XYbfwT1nVxkowHsy4er"
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
