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
    "Emt5jS81LqvFEi7ZKhhvDrSYZFZjWzx4bWSxr9oAGZsTUt8Sj2QsxTWggh5VivRY6dM8FxT9PB7aUZ4yPZqFjXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iavffEdtrJ2eKt7poXVFrBXqJVKGd2TQr7wBWbz6Yu7gdpLDndYVvZUeqAo8nVz9NPJPsvXF7kmnyGAuLfhdtci",
  "key1": "3531ejs2KTzGHurLTzK7bfqz5rS5SmbYD3wwgJ2iq9ZQpBZpmx6pZjY9dNtDN8fjkfE7ag1prfXso84SLRi5Y7SL",
  "key2": "4KfgdwbEZRSr5CB4P2rhv17hZ3SWTHw49WG8wCT2y7Fk9287pE5c9n8jGTR9SWAKEu7vJ6fBGd15CK3knQALN7JN",
  "key3": "qqLSRyAaUNMiTGJ9uWreFpzx4o15zj5tG24bWNPTcb5yfHS8EU5XYvTDEdRuD6WCLvB8MfZRsY7vhQbVfRxna58",
  "key4": "2XkdqwaEk3neHaYbeznscaKhhhC4coWnFtJxhvoPt6kjiZAncUAkp6UoiZjkwtLDKcYs99Jk1s8Zjt4yj2xUfwyw",
  "key5": "3awPsGNdtDSyJVVN1i2QFMAv1pcNapmBQsSS4oCG6go1f7HvpD4vpvGfB4TahvpaEgXqpkWjjeqC1pVajzvP4iz6",
  "key6": "46s1BWaNrr99LvJXiMDeBMrrRU8Y4FWkJ85inkeeePbdd8fzBbHfQnfjgqQNj2msnJoB9XCDvYBTtpqeusK99JUL",
  "key7": "2DQ6YqXMexq2kEkfDU9M1ggqNKyyhRBkGE5YJfzqfFfXoL1cKRsi4dwLNquA6bTA1XW6EWcEnuoH4DCJFoN1o946",
  "key8": "34XvJ6Fk9rEWWEdE5WxxFxdsnwc1TRgCRNBHLpS4obRX6DtdD8R8UEr6de6qu2vzB3wP13kypUTf427ZDBxw3Drb",
  "key9": "3habEQ8mrYGjCESxUaBegRpq3vPzvzLVien6H51PPSEzC99ZQzGRCCvoyZkzi82TBNGenWSj33D5ZKMaUhofk6Zc",
  "key10": "2qJYpAtN82BBt42QvMQkVjM3UBpjdAQViXbJnAiPT3c2vSH96rFHsbVVzaLLf32NxPWXY9qqE5vXBRAXQUX4z8pS",
  "key11": "2RfQ4HjvTknGkgf5A4XsUgHS715QxLNjLwR9ks3iENU5wYSHc5YzsoMwbdDKnm82oggGBhLzESdkoh35Zt9x2oby",
  "key12": "gytPpuTdEsnQVXE3HWwZ3kihXZpTmQ9LJ3ji17BwevbZjFe8BSU2EpWTVGbgM5jYv3AMj1ohHbDAuc2ZpAD2oXR",
  "key13": "V3Ronk7k1CDvsiirrzHQDpogXf4guuxmEhgeVcibU18vEURaXqjGpveZ4DiiytbMTAG4CWKwD34mbeiSY8q8a3D",
  "key14": "21VPx7FRffN4QNAFPTD3T3sZ8bd36GiYDc6BG7xRwJWTcJ7BY6M9g9Bb653BYfXYjog5xj6yMLdSEUKpXxQ5BPTn",
  "key15": "2DQom6wcqngnbsstkpYoJ9UoMTwWcLtD3VCjPomFB6Kxh2yrmi5NvijXean2JKBWuwFxLf88joWL5dRKpT6aqdnq",
  "key16": "55asVtRDEfZKJoF2iKW4E8rkDTNTNkScjdYKMYmM6ozRsVyLVhjuvmkN1GFGd2NpD3Ft8GbSsmBwtWLi4PPeALn6",
  "key17": "3CfCRN3kheAUKJF6ywpj9Hh1KgsTBfjHmTGBV4GzAAKEw9MqWfDtc61XTfsUCi6sf6pjNWTLNyvwtgyQVj2JCmgB",
  "key18": "2WS5q8ePJy1Co2VcGoUEWGgmhT7J29bipCEn9hbXFLLp16WyY7RaQvfs5My9kd1n8bhVDVZuvoymQZk25kcAne1c",
  "key19": "3Wx9GU8LjMxTvccfvmcm7YBdneCMfHqUAz2PZZZ1RHrUbsdzE4XdeeCVKHd47iBTo5uQRAU4qcdrrFaRJkCMKSVC",
  "key20": "53Naag1PTN5aegZLBoHJJnYJmEyNsg49b6qcpKRK99Fw4cEG9dC2vdLSzU8hfwJQPEwfUXifLydXEfB1BdnG8Jsv",
  "key21": "4BT2FsqmSXrEJwv3iozJWkbHwphQzX72nYcLJk3h5gaCEpqycziRPin8r2BakyCo7a3LQHS6U8NzhfLSxHViuet2",
  "key22": "2rZAvBRMH4ssK51fxRem6yt89oSzEPN3Ceyu2XugBrt8mwVhEHnB8smMJM7S8sdWqaScYJNajQtqsfBEnRtFQ7T4",
  "key23": "3eiD4Zw3pDToCkqzCQGWdpyMDn5uLDVorNaYA1SkNhNpnTwmx44VdPA9Lm4V7aS8F298V6LXXss1TM2u1pta6Yp",
  "key24": "3eKZpcwhogd8jUvxLKnkKNom4h8aQ6Bb6jhdFxoyj4AZHojX6zLQB99PMNNLr5X7LLBxFYZJ2N5otWaJpZQfB7z5",
  "key25": "6RztXP3taaTbd5fjRuVS41QmckMVbtDvUsGkDLjR15vzFqyGQb4xCgNZyuy5tkbkrw3W9aWPRuJxef31bNqfUqY",
  "key26": "2BJ2Ves1KVfjLvj6kTNmyGAK48R9rJ3dpFZG5MczAUskqNYfVHkdrvQZTXyR5D7dbkw89BiY7UfvgjjmyEvRtffZ",
  "key27": "3iqPqWd5Ywjsmz96HZ1ZMQaVtdvU4jfzociQEKcp2fYb6DNCDfzu8d7fMyCofGU5Dd1swpKEzuXBdGjAsG5MwQ6v",
  "key28": "3GauXH4qT821idSdxS9p7jS3TNd6kVs8DP4eLfy3o1i88uvmcHRTYwJAZXKfchQtcUSL1asm2jCDmsdFEjewULjN",
  "key29": "4Ljs3mhALKiuVpp3yQcKqDX2AYh2FCcjg17MXobiSdwNvA4cNhpP5njrwUZohhzJpe4MxVPrTpvzVivT8yKrzpkY",
  "key30": "3PxHq4ynTSptX6FDEet54MPehHK3AqdZGQLwBuCcEELqp7nSsUBmc5SUKjNEjYfS16whcLU7RARettqfNpqeERB6",
  "key31": "4Z3wcysdfYjLoD3ukP6khgMTLZAe1fad4cJSDgDFjVsqtFVGh7NSEhvajpLmre2U7Vt4DdZV6qkfXQR5NqBmWwJZ",
  "key32": "3DPEA8qrUeS8TKfS5DQC3mPpEEwecQwL987YVoPoCSu49H6bweMYHcKAKzuavMZPVvW4tPBTwFd4yb9PB1nj9mDo",
  "key33": "46raKUNqymEEiqYZ5RoT1J4X4vcc4gHDK2tCwbrtGJBetrbr2XUaCa2W5LtdVFCDU6duy9pptLsph8Xa6ceEwwJ5",
  "key34": "3sXSKPzzpjvbP1yUmW7hRA4ukyNn2oqWXEQa1C5NUBBLZ7S2B5HDeE2236itswzMVfEq7rTXTuanzD87NnGDJY3x",
  "key35": "3FFAZBY2v7ZNdJHcF4qhSvQjpBSHhgVi7ipnUa7g6RPBFvupZusX8N8w5TBgBMgMR9fVHzvvwDkhKi9QPB2Z2HKH",
  "key36": "58cu6wKb9oseCkhhCtbPi9AmS56n2rF1QW8CrcoLzLnMWRiWsno71NHFGeVE8F67EBGZWuoS2RVz8XMP62pUc4Kg",
  "key37": "4drpC4f2zEeK4xeYnLu7FK9kWuJXQ7XnUEJGtPY8JAPmhV7Lo14iSBeXUajKskDjMxki1zMu5a9UZCvwEkqo2NP3",
  "key38": "5jqcqRZrBBZYwHjxmqTaAZ7cHj5Jo8bMqxGdvx7qeVg2k66Zff74TwbovWZccL7qiR8uHxCZ3LKZSwKWZWAybszw"
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
