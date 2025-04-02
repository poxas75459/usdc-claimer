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
    "ouLGqGzMJXvKMWKRddS8BQRApULFvsRGGphRdwWAsss8A4eXN3xHLKJRHX5U8y8C5L3NDyfpzEjYhfykBuoArah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsndFCRBrJT9zpEU1oLy6WzejCvHTeRWgSREDKSBwDandD4mC8XqLdGWEMzz2ZZkY8ughgReq8ArySSygauLK9i",
  "key1": "5xjyxXoiHL1cPLPHX1CKw7nFjyVyRRDFkPEcMuCxJADLH8wjRt9UcrmMvP9zaN42ByAgvpuyayZ8xLD4L6CQq6dK",
  "key2": "2Y47CveYFqSMPGo2yRy36jBSzim5c92XwZm7Xc66LTwZAvZu88HXhdgBWYsYUsC4ZbUBpnfvHkTZs52sSSNgMKXG",
  "key3": "52cuw9tgLFrwGLjqNh5WUQXWpCG9Hpf1Y9qKYfahasUx1LwSWVzc7zF3gw4t5hhCdNhXCc1FKVApmdjusBZw5DMb",
  "key4": "2AF5Vt6bBJKxD2kRG9VaHrh9FQ7jFEMzpevJGP6ZqTcTPcDYsKrmGqhLmvJ4EZPZr8QAEDuskeLABcmVXTqZpi9x",
  "key5": "4gDWdC151WAPxc78J6KGBYX4S1FxFxt2Gjo6Z6DUVSVxgt9HL7bVDb424CLQ7jmePow3rWBmLVxhCjuAE9sUoD9N",
  "key6": "3fdLKgTHdkQqESxHFuVyCW8Wvmf5HSHGwyUXu3gW7P5gxRG7Ce58R5K73YMPH3RrTtkHPZo7CQt8xXMXBToonD8w",
  "key7": "2zZuBFn7UyBDX4y6YZdTEqrVrNwsWPoLWeWAVbgWs2cPxJiU5jm5N9jZa6NMGoFmaQFBjGAu12Cu86wC52V82GS4",
  "key8": "3t5tAyjbMPKfAt17GwoKdikxjeV53sURUcKWoyRULk1kUizXbuCxdo2vdh8Fkp5YVkNdaQMthNUkTRCjifEyx1HT",
  "key9": "zxABgTw1qfbWWrAL63QrYbhbaSMh2hzgaFNh3AfJsjCV55tsexvVBnRt53BoAFvA1DreaxW16jrEgXvbe6JiiKC",
  "key10": "HBu4Nsg73MTYnJ6eFLJV2CySKQEdP93adyRn32amc5oaQvc1UAKJnUcXKRURxC5MVsMAJGeZeX5xR5HNdauHrTE",
  "key11": "3TC2CwvSXhdXCdkEWfD5uikm64F66dNyxiopDCSHWh93B53DC2x6qKHYKAgwHNQkdUt1eGfHfCoTe8JNiknAsbCV",
  "key12": "32HyjzZe131eGkwUeVSvq4ZkKoB6CfA6JnYi5U1tNmqR7K3VKSpzeQ24ogdGPjpXC7phi4nAMP3XUW8dcsVDqGqJ",
  "key13": "23ayL4oVBWv47w7GKeFK5ArRvj4AFpU1FC1S85EBVVurHd1gCE5rrtcsqqJ89fKHnMVjexo6c9DePp7U8kzH5DRn",
  "key14": "66TMSwhfKaYVZzEMDEzSVmsHLKtiC7Ts5h545CikbFkmxMgj7T8b76XbTZvK8fzRf9KiT5cKJLbP9juCFvh3ihSN",
  "key15": "5FspkfXn7nRdddrokcPG87ZtWYnDfT5fk3PJ16bj8hCEUaR68QqvTyCjn5228Xg18zRpeXoQ9dUj1ohCToA9HKZZ",
  "key16": "5DKUXxkiAFVXfAyd5BEhjKCArzUjLS54R4d58MLhSRe4LdoyFA5wjeZjXyTS3tjri5mtkhjxhxmjkrJnoxwutAdb",
  "key17": "26P6wDp9dZpgFZmi1aMKT3tTcagJxaCy8YXQC56a5tphqw5hpTJsvoWoGg1Eghf9RSCAkYM88kGKZ6HRfXvMtREc",
  "key18": "2dVo4KFUT5uSj2ZxsUYLizecUbzuCQ8BKrfH4MBJnscbBwnsXT1XhpLgkUCwA6kTRE84Ru7mRCeWC5tngdFgNLxp",
  "key19": "3wdQKPBxs8pYeVentCZUbUxVsi9cr8UNaZtmrcDdimH92wqFJSTX45uQfVRbCdWib4YA8wQQEWfp9U2appDSfVkQ",
  "key20": "2hRTpUiQJuGcvBTwGW2YdryrDK4S9uuDDf7NfUSYaiQbepGTxRfqjkUZnMiibcRkYrwdBunK65Cb21cdAT8ViJg",
  "key21": "py8u4Sd9jMuZNsEsBDwM64f5Kh1bXpBTnvjRwbWX8LScBwBBmeu4BR7AZ46x6EHJBndHrJVfdr9k6i9mRHKcjXh",
  "key22": "HzyFv3kW8NT8rA3MJpyGj5S11nHWA51NKFNvpayJs5Urxns317GLYiyDJGNch557bms94AN2zYPg41uBBpLeC8V",
  "key23": "9GNAtHezeWmGcVs9ynQxJTSp5ochwZfLhkH892W3uJ845RiVwDD5pw5RYB5miZPzfRiD4zo4QyNJmU9BYM8xP4D",
  "key24": "3R61LfZQ8adE34c8E1mGkfnFu8Mgqu8G17fPeyvY4W874T6GWEByhL6SGRAt52DRFPyKqSg9Wna79t9hzJvZmrxh",
  "key25": "4W7AfZ3x6wJ9tc2VbzM4xsb779dJg4P89q9YbvERfZmPEYvi5eLgaomQJ6sKSbRtTTgPGHdsSaC1Wm5kC13KQFX9",
  "key26": "5qvX5zY66GQQLufina7nwokaTkHePoHUgdv6oKdZuiyyAy1CDZZYgThBJE4kDxDy6c34BDFo6rGWwit4pW7NrHxa",
  "key27": "5SJWJ1EzEKrR8jGsKPmcYg5Z5Rr9tqeGt7vxd8p3oBArwzinbhPKpHVvBKnmzNhMfCZKpBhfFs5WjRkHXLCqxbZF",
  "key28": "4u3u3GpXRxh72rqe2wCtCw7ZqQYJShgHZra5WqSCYqnRTQ5CjirMbAq4tPSTRjnfMug133Ykhp6Vynyu6bNTC9ZK",
  "key29": "kgRktQje7Unf2szQbBzVRXBfXzZJVsUrcoX4dr5hPxEKamQURXfbKYphkVhMLBGjbrugxc5AfXzXbr39fM3EuQa",
  "key30": "5JbeyQ7gA4xr5vQ4sNv4ZadyuHFUUXeYke8D1GuFAvvGY355SqWUTGpmgwhXApRoxmzvoY8C5zjSVedBdz1UDVEC",
  "key31": "3jtecbaPAqrJqJkSBmCs9dRCNr8W64pdkuwgHG7zxjsMrs8zFiMQNetM8hoWth1JGgDZUzG6XHHoqFa84boQutRd",
  "key32": "5hTb5J7YpCiGuX3C3EVCQUkDVxjE4jRViKgr3JAy1i7yYAnAcprpAe7utM1oBK13kJHog2c9EzqRAgnk8FTUdPr4",
  "key33": "5VLSUT54L3fMR4e6DUoFTA56hZSbjfLCS1BRVJcbLxkBEPRpvM9E8UtfeRaJbaLba6oxi8wiNwvPJ6x1xTmV6xdy",
  "key34": "57RwoVL1pN4P7TLyzVDBTDGdVA6n8hXx9Y1kihx6kULhjCbX5nF4ZP2SpFqVeYGsvmiRzUwuJ7XdWbkPe9jxduqM",
  "key35": "4WEXccQNZtccgDaxbuLLRKL1fDKn7zLav1XQFqD2X39eKyXURzFDo71m1gkaFtjpADPui29rnb4sEe7oiz665gXW",
  "key36": "5YWpYQwyyUkbWMgtPA5iYRSJ5t8FY6F3P587RpJ5qaeUTuKCShiXZmM8WjffTP2wJ1kuRnWYqQJzKsfFomNUptVR",
  "key37": "5yM67bVUrVSxFgFByx476a5HDzYgJoSoDXcyNJeWTgNLPs9tCNQMu5RMyofAgRnL6FpstihurppjgZtxK6Sv5K3L",
  "key38": "5F7ovdejvTA8Jfz7Ztf5t8ZoCQ2FWRXZeKVnyqN3RCMri8zqQa5AuxV8qBUtcgydszYBvYdoLDppZpKr72TGs3FE"
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
