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
    "5UuKCsjB7xwuJmQdTExwaeBNN7QMjCKRP7jxMEj1PdZAoVT6VnLYc7hmAczdhnvhcAjbP9Peji13QWmxN1b2iKjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631FChCdhACrZKJwAJ7UhSShQKBwxSD5TGxRnvzQeTp48GgU4kMVMXRgQG7LmPsn5qoYh2X8emyN4gKc6aDPFsxD",
  "key1": "4YyVWCXDBAdgLi77XeXogcCa8m4ChZ7revZPbWqUi5hxoF31ky6vEvWcJa8hKXbvSQVxhgXhfVdBtD2HH8LTVFj3",
  "key2": "2iaZzpuE9KAihLdq9AkrrT8hzPybHeEQoXFzoRDWtCkeZvxEgou1zSGEYpdMJaV8JipQ3d8dDGSrNuKreW5vEDdV",
  "key3": "2qiUkik35v87wMXVuis9p8eaGTWEkw5kDGPUX4FCRL4f5zJJjqWSLEeHC5zKPvSFooxjmFa8eshoMK7hVBWRVtqf",
  "key4": "4MDX2Fi6AcA9j5JUhz95a6uRca3M4SpiNb3JwNtFzXptNjx4TqCzefaDnMXpi9pgYfs8oiXLs8n8deufdAu71TyJ",
  "key5": "2PDWepRb2wz3uJqtDj12Q6MZg6AnSSjbmfdUQu2aq7gsQ1PzUEBQVUaQumVDfYaUa2Qi3yZXrTxCfgRzZN698QFe",
  "key6": "5wyPmorTMgyRuSF8A4PD6wgachjv5aDPY3eQ1vgtNvrszFbq2pi2SekutkG2eKCLJcYWYqnQmc21cZu1o7LHVu91",
  "key7": "23LLs2hVTTozKrxzwJssQFNGTZNUaUdrVcvDCfCPbA4WkNwHeRJf8mMhRNfj6yGMbNU353dpxsZSWoN9mQyW9eUG",
  "key8": "3xfzvbxUjLqU6W6yfzyrSsLq5RHWQHBsxKWZgWv2aRgMBVfFwZcDpwyxxzTc5ecEntQVZtTn1KefUerLH6NN33Wu",
  "key9": "3ebk8UosA927BLhqMCoXJY6oYkZyWWQ9M6BX1AKbJt9VpvodLcYfiMaJRnQBRyJMrQb3e1y8LiFtxSveiV3ZUnra",
  "key10": "39rGSSJr73JjtCARYaJw9PWC7vstBLzqF6M5FG13Ft8ESa8AH6BATFyF6o6iKxTVwDdBrfRLKfZFwRsv8YwR1Bsc",
  "key11": "Ji1io6wwL958KibFcEa8rkxbGo5o9RJvWnHabsYF8USgzLYUNBvUovv7oV47UmHvxr6PdzfKpdqUmyX8QGCS7Ej",
  "key12": "4ZrK7W5wSJYiXvabNEE9MoKX2RHVT4CDp6ktQJemnrvjGwgpzLgxiwwXqptWgT6FSag4xxNJtoriMgqSzgbqaTPw",
  "key13": "5hr1sYPwRzvajAHGj9ACHMp8RuFYwvRkfCxRs26eeSgnXuKe97HHwiGu9XdRtgGC5oopBk7HEr7fjRFGjVTXAqzL",
  "key14": "wAtwxZxaxuUS8Y7scAWF5GQEPmW5pK4F43phLbGf4ssvqZLN5zNU5VBdt4zavdhfjrHCgs6oY9UCJ8kaMBVR1tC",
  "key15": "2mj86GhntYwcE54SL4VNpBUHsKomRmE8W9H2DpYWaCUn9cz2KvhubwA3ghh1mjbf1Sm7ZcHzxh4neC45h5jqmf7P",
  "key16": "5Btef53ZJJYk8HgLLUkqcfHUS77weabirenrDuXDrQ6A6bYXKbMzjknqzfMnbhppArVH1GQK861gLKN87pqcR2j7",
  "key17": "66z6W7VUudEc95GWw4pzDddxQCf5oVaE8cmSdWQn3SrsLbFTqp4vHbgpjuydJDgoTaTBWCF4wSJSJkoJAd4fPQHt",
  "key18": "2a3eXm2QPkvXu6pHuwRmpjXf3ZET49mQGyydCtuiapgTgn9DePSeX69YPb5DPpQ6P2ro912sPJaPjHjFyHYwsvr4",
  "key19": "32upCxAAL96rii8Ma1ykwQsfj8UaasjUwK6fH5MH5JEHQwgoEy18r34fRxAStBw3XYqfWBUrWxXEcewjwy3gjWuz",
  "key20": "hgHRytF4duA9zre88Awg47UYQV4Xaf2R7VD81j2PFzZeBmJwR4Fe2f69nQxcW73mjrtGtUusmLNNhFj1CxkM2Nz",
  "key21": "4DCaLvARsfPrWsv78nGAzLudgXSGmBDCtooV7zjh6HseP1R3751HZG2jfQTxYKrKfN6enycynspd3NVjTVFxTJ6w",
  "key22": "4kDXAN4CMNB2HDi9phMfNpnqmXgmDYFGB1fSYdWczR67qHhTuKdU7weLXFeUBdT1bCXPve7PJqxpb1nrmJaHr8WP",
  "key23": "2R8W5qgD55ZvUrTX9E14G5HoAWwbys58VfLsRCq3pBX3L42YeF2V5DYx8auoPdjhyvX62Fpto7p6hbuFvPcqRRwA",
  "key24": "5GvHBmPN43bCfKhtepobWCsCEDGenTBVCVwS5SNHdFCdcCVKaPRDT5K2mVerBAvcmdrMZHM6r4QoXwvQt2LZyDvw",
  "key25": "4p4TqJgP6TLiazpT21bYWsrHdohxrNbGzQByrJsoipeLEGN6DgQS52SvVcCchqRUHM9XnWkeXWtTBmaM6ps1NULh",
  "key26": "2vP9Dy6Ek2LW1EjPJN7oJxm5YLYY7uPCnGkap3vcdeYg5Gd7QTUevjLzAoD4ddyLGj32sDC1mP94w5hAaaXYv9zs",
  "key27": "4yujjt4dRzyCNzDEnGdcN17TfkJBf3kNrRVr9E5sx37UnwfecyRKLVuEt3MPaU3M1mo7eypU2s5enixeE4sLFZgr",
  "key28": "3KWhxryGTHS4KiAQmBex5PQihNpb3q1YePWTKzBfyH33wvPehNJjbUhuwUKgS5broL6huBNBnLWpzNj8kseCKpvr",
  "key29": "4XkBJRYKczQaQXbfeFRHvw89dJpct38C3EUn254ejakE5o84kJQ6kk8CmVuS57HaMzd4utaWCTnBYiGNP9rafdxk",
  "key30": "5M3GpmdYqvj4RH3qdP478YdfGvQiimU3WCe9H5Pw65DF6p1LibDu5pdPrUHTcVUoabPgdQjrkBzKt4ZJnC3r5v5j",
  "key31": "4DGhWgg8Xh7CYeQyzkSG4KBKq6Z6iLn45CjXepZmzASfp1rAdXMRRubhrXiZE7DcqNqEwzbNzpdRcMfKCdP2Z55n",
  "key32": "2ybujzHdj2ATJNC5xyTAJHZRbykj11QghbJsPTR7e72iadgc18xV5xxHKHfJCypzZUHiR8tkoWJgNnrXBgBbnziK",
  "key33": "Gv2Ja7wHwqu1B1Gm8dSoCFUTJ7SbGW2CqT94hLHbzQ7y8ZBGq1o8aFeVBtGQj4wyr9YTrqF2T5iMZEkBqwrSewp",
  "key34": "3LUrEphW3Le7XESXTBaf8TyDmej1PG7CpyRxWPq3jCYwvSfgesJpQ86J8MXAFjq8sjtwDETu6rMCMHdEss8dD5Mh",
  "key35": "Sfbnb4SVdsDQrmtPncZdhbB8VyQeBThuFZvcqBJYBdJe1HcJB4ZkehFVjHXvBTWRtmsrycRqe8tDrg2UpZrVkGt",
  "key36": "62Ymmcus3sGUXaZZcWLvVdq6GG6wAzVJYdgMqJZxhCaCe29wUfBgtQg25SM1xG6QWQbfDkDjUUFu2zJ2Z3t5uY6w",
  "key37": "MJtjk5g6RMvmqjZk6gX5os2EVRncM8mN3Ti8mw8knt6Eu6pBBX9BAw4bSu6sc4fywdzQU8ssY28er9yX7X68mhj",
  "key38": "3vZtbSpApiEbT7qGmMdFF7jnuXtVVEWWKpx4uHuwDuZNKwgbdLdJKimc9oAtQTrUsWDAcSu1qfyLn245b2Z1FadR"
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
