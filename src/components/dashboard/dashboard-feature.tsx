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
    "3zP7wDXqb5xg1X9SHunp1ecifY7bmkoXx3EeZiE89pf92NrLW6HvwyJYnqynZYXPycTDt1662JKhj31NdZ5kEEfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPhwA5nKLHJfGdHnY1LPf3kFL7y8TdbV5kkRKaowrHSBD3ujPT3tHtU3TizH2gsUCPwuZ1HJ3WKgt51j3fnX11E",
  "key1": "2SvvnjRAFywVBrNr9koZ7sjfj6HEfFcsEf2YVrp1dWAHmPkrHYydCUY8oz7GR8wM7g4S35sRXwfutD5rYwyqTyYp",
  "key2": "4MYWFoxXUuJoc7XRauGwzH9ve9RNAn3Wpc9oQhALXgsW1GQiNADYeERx3TikneuX1ezEQUXJaz3gJhESeNUWDXfG",
  "key3": "3FPQBPPMbYcFGvBmqanpRbx1MXZqqeFbCQGasGRPBQjqjN28X93Y3oY3NtB5dpysCEtCZtGTWtr3mxCok5Ay7Nfs",
  "key4": "54KDCbANQc6EYC6wFdLuAFhSiyR7nP89Rqb3NW7htQndYViK1NDsoYDGWG6ary5WfjcpvKDafjTXDZ13kFubcHpS",
  "key5": "3LWiFWFYgQN9MwAKGRqVfBWVhmnPst97Po8J2xpJXjTXvcbUbDZ7WRKTFck3EJScawih5TaGEeLftVGCJ9s5jbM3",
  "key6": "2TAc6CdCgYLmiKwJ4ZFjsjhyMZs1GN7SgVNwxxKhnZ4TH3WGchowUDUrpjaWML31KBAZWgWQ1RFssQBDq75eRKxf",
  "key7": "5jStjkPmT2MuqnC3Hnk5eHAkaQT5GGgGQUtpWtfzw1GjdbFDa5hicKsnQGQyDmvw1Z18umSXMsctvVpTH5tjLgiv",
  "key8": "3rfuVKq94H6PX9s44qQ6tZQ9ntLChuFTrFCEWyEVEnjJ12F69VN16xwmY2cjtkcap9VQPJgoRsTdHUCZMrAtXk1n",
  "key9": "4kyWsDdd4BQKYw4EaupKbDpD4W8hFJAajr4SpmmsXTvAE3emJfGvL5mKzpVF61cDxd6zvTvfksr13Paju9uPF4Pj",
  "key10": "3BTRXPXZzyUyQvV4FNWWj6uW2Vky67FWQYQmcUSpEcwUK2DdzaruurYeBiea5YWHPY6ChW99U6hJnd1hY8krMkDi",
  "key11": "3dkFKwLCK8AEgnVyTHt59wua74zgTKxgLY51RWi1VayPh6u2opsiW2mnT4n9CzJS3cXrZ4Zwqkcn5qPtqBEy6dYp",
  "key12": "618TDyiz21WKGK3sM3r6M6kP9Yt1aurjpDZSrRfTY6ce6VNETN7H1drm7u3MmVBQXYsaWZpi6m5c6sFLsDNJ4jSW",
  "key13": "3MXxfRagHLSyHaFkzqByULziyn58dXm5NsYM3HPXPfFNWgWSR4nAiaGw1qy5aGQAd7XhRiXVjHXhnwmh6quB4EMk",
  "key14": "3KWCZ3WEG9baEYLZ1dVYvgF7NtPz257Emf1fuMBYqtyg6tNskXro2sirsrwCQ5HAjfiRvvDkR5aLvivS5wBDcjuv",
  "key15": "48AardV7FpQCqLW2md93iGfvTfpJDqWX1Ub6c3xA8XEPTNBZzUdw1wQhUS3e2GJ7mS1dfbqcZ92yinUsUei47yKp",
  "key16": "5aM8Ght9Mvc1VQyBxMxXfyHpGbpWBWb93nnCc8FyeXeshsn79zxGQZo2z2dDgGhPXqBfzTX5VATcU7KYmE5miA12",
  "key17": "48EPVivezm78iT9NYkaXMUHshagvmRVtYLoGCEAymN3xJ44SN5f4sdzQpLxk4PFE9LmjJ26PELcVrTRKi9CeKP15",
  "key18": "4jBhuRsHfJEaHD6TnmqFUAM52AQ9tBLgMxTfQPLQhHBgw73SbFZxL8vxeUXKJ2TM7KPPJXQQwvnNCNSeEfzVgNsw",
  "key19": "672YcsQKgzxZ1YPBFY3c4zYSXVrbFANJXMkMp2sfdYkttBtX65W1MiYrLQeDCQBDqiN8T6nDtyj1z4ftsCLbLeMa",
  "key20": "62JNJdaKZc6BqQXAHmF18xqTxpPVTrz6DKeALthM3LGpMSAEjywZLfqC7dGcfZLRFw3W1wMndxNYSQ9MiS2fSYvG",
  "key21": "4cVEuvoLqW4ib6y4FmyHeWZpTVMNCGwJHiwnKZhm4ZE2zUSGeDC3zZrah1nfuH1xLdgNznvcdGU1tQvbu9HUkhRe",
  "key22": "27dKFA4rwvFUK1vvQqg7m1oe8NXp6RPvV1vYyjKaCVn3BYaQPTuY1U4pqrqVNB8D1RYDkE3LLWeDp2AWx4sq44vr",
  "key23": "2eDerQJFMF63H1ficGgvgngR7WDTZ7G2f9WpaNt2R4osrcV7x2NSNdZD2d1GeEfaL1heeVJ97kRfgFytpFMhiUU4",
  "key24": "2V6GiAvvvfA8KDJKwNt1APNHPaBNTicTj8xuftJPJ55zAcUerHvTQmJY6S8b3iNoJiyQiTFkzKJctz2ETxTqYDRT",
  "key25": "4FEANoa28CGpB4Hz4uvzdLY7pmkfZSwErD3Va8bM5a2xq6NqA5i1q7LujoE2tR7478AzFn8Km9wx85bsVmzxynhP",
  "key26": "whutrMRZK454N3r2mXQUWocaLGy2ivy9fJt8ijv3Wi5RK939W34wtqC7RaqhTi6n59kGkqZuSq4UKmR8KpxDbJM",
  "key27": "3nfNsPZUqKVNRVMYKeboDj2XGb2LWhpakYWDR5tF9SBBUdYHLp9Yy6gFCjfoZT2813s6T8unmzTHhiW8ZEtnfwXQ",
  "key28": "3KvukBMgg2D9PQbxiQDaNmJid8iA56654knVcyrjpoznHCqy9tqD8SwW3XSHnrcHsBERXHDnweTdr9CDtFrAd2pR",
  "key29": "3HVpJAKcWC7U7uYGkj9pUZQLWukHZLbMAHyvwu5qqPGh8NUFKTHxi99wSevdDqqXgENkauzJGEfqtF8feVaUiCbq",
  "key30": "25RgHKMhEceouBdLAMiAbyeQsrFPGPqh1PDxdtX6kuWKNJMdpBzWTNkbJrbxrtDvQEuveb3Quz2k44gGeZNeuWgv",
  "key31": "ktJJBsuVW951j1QmQ7Z4DasfTnNeHVrksUcP3iUzm5bVJPK5gAnuYmmMw1H2DeSMHNtToYnFfQk6eURHeSe4TWQ",
  "key32": "5isdtYUnJ6PNzFcF8NBUWkg5KTrtHz22XXD68Z9e8eJ6nwJNKVN7pwh6DrQqsyAkwiugHgz45wz84dd2rdgSuReU",
  "key33": "2V7QyrAyYH3kDkjnJuaMfhqvBmtvPneNAJBxshLdryutNxmxwybfw3e9HT5KFFJoCfFFK5b762MKcVvsHcJbyceq",
  "key34": "32yNxU1RPSemD1P9Xm473kBLvY6q2cxK6bXKfF4FdHh8eeGjTgAku8WPf5MnqRotuDGhaWxQSBbvxtShHjf8Jzzo",
  "key35": "58NgjQKBGj18SjVWb5NwL5tsnGBeimkM9zU8LkW3pUEK6VzGxk7UbEhSiYrV21meU3Nw6j5wLvLwxjTRC6GgvuoC",
  "key36": "5sPCBPYQ4trz1uWskAAg6GNZh6hh7wPcp7jzJfT68xBp9JoQMQFNi3fy8CyG9CodKaN4pT9nTLYMSxsJCYNY2ZGC",
  "key37": "3ZKc41MxFEt3U2XYzHrRwu1GyC9D32AXBBKTiM8hThx1owEQodug2qj5Xa22xNgmgLu5nYbn8x9nUVN8CBUSb4gX",
  "key38": "4q1VtjyZPvvqtRZrdiaL3qmgGEDELhKPpHVTNZ3YhwzSdDGGrv83WMFRko1JHwhxfHxRiYq47gZ5ZNBs2fNoG5wQ",
  "key39": "4W3FBupnM34ojXWjsHZMj431wqLPWj2EZ22mX3fpH2HgTsnsHg58fCRHFaLYYTWQHj1qKgsX7uHG3ZiDATvmLrQ2",
  "key40": "63gK9BQcn1EKiEBHDnAzZxoMiSh2j1sDZ1KGDycRPqJPxdGyoryiGob6nHi4NKMFWG6p3xu4wYcvepwX82SaErFS",
  "key41": "1Vrpc15KHX8sF5Tqp2PQWzFZ3W9HtdzjZWcKw8wonaMrXvm1aj5N8LLWmFXCkm6apRqXnDTTuhXabZPHLzVsWaC",
  "key42": "5VZuUFtSAui6s76Ri8bVc4JxUCQqi2aufb4TTBasfAqK2ABwZdPBeEWHj9VhhZu2Z91aBTGeWZzJDVMP1iZfptrN",
  "key43": "5f2dqGKAH1XQX27y1mKxsXh23zBxaXrFRUeR8PpZrtZ1aDuBnkAUWKzgH5gFUHqfDEJLkfbuDianM4UFhsSawK7n",
  "key44": "2dZNGKNyarknH7iCSfJD6ZoTcCVUNKAqh7JGPyZyWNKjQ4KiNRhdSdG121ZfgNWGo8kbpiZXiKNJJKEq92onZnUi"
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
