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
    "3QcTjP3po86BCzTi6vjF3ot4mCHb4fWURjYSUK7QeoJFoF26cXWD5xXjiP4AcYEUYobtDc7RjHHRoihDjER8LBoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yj8EN4vJ5LUcgjqTPZH5qSeomeXT2iHkYjjNzuWaXRqQLb9TX8XZLbkgypQ2ZfFUrhBp1cwv4GZm4ZtrJsc3zgR",
  "key1": "baZfCgUCS1JfAAYKvQNEtjK6kwMKLfiP5mQiMNNUircsmx6z3UjvEB7G6TZzWRoPk5bUwcYTTQ2KvqdzYk5Wq7t",
  "key2": "pXFtYMkuzYXJHZqh32QQtXyPPDRJZV4q3XPxNEMw7fRs4F2FvFs64ijAP2dKMn5JJ52WyHhV5AY4bNBtG2ieZtj",
  "key3": "Y26XoPTmn9W328Cnjcps6Zfq1DpUhTZ8xhPNSksZfgdocr8T2LPb6hE2GRrjqEzRcA7Tfo2aQdGKGd7D7oUpSFk",
  "key4": "5eeokN8gTV5AUwNGaeg4MWixZtjiJsYyCbD78GZkhmQbgkeHo7juBJLrE8JvjVjaP7NLM6NNAJWVboexxibgwt8W",
  "key5": "51VvC9nPvucLcXh9TUdDeGLHJKf11sKdutJ7imLEUDqtSkpoV6ajrkPBVRQZRQLwHKWHGrM9quguX4wd9VGZAvwk",
  "key6": "4qAQZVmcuwf5WpDXyAFUX9KDibU4sVrXvpnNuq4SLfoeVMNdxKp7KWgzCiHBJKv2S74Gb4nXtDBD1uTCmPWuZ6LU",
  "key7": "4CoJwaFbbDrYBAH2zQHsAqpPpN1poHuVQkRjnaBin7LfJNqyrGGru2rmygfaQVFSKeYTsLAhiZe7YC7tFMUjWyXG",
  "key8": "B13LnncZo3yukR8CBxUdbz1KfydZSf9614Y8PDvH4i4oDL2sWEE62iFDCS8AWHfbQHVcHKdEYVBeFhrGMsn9Ket",
  "key9": "25zLUK382r7LCNjcjuVz5EggfHBpr2LuYXvfbBFKjGD3JAGFnGisWQbCmFD1ooLAWVUnZVd2i5axLf3WV44qBJWh",
  "key10": "DpYQn3uBAWFerWQaHpqqLoqdQxrBwWrhpHxsNj8xmmcni5G5h3afrbnk4szt9MiJQpzxjLdTtDdoNmk6TsVh66p",
  "key11": "2UKganLG8ZA5cy9sDFtSeLixhXpUJwGyq6FX1XrqWwnmB6MrwoEx1YfkZqXh27fDnMJzBxoBJ9yeTye2FJeeay9T",
  "key12": "7vXAaxQeLC4Kpbuv4Wm4M4qDjTrcKRasN7ghmoopeieDhYUEFaAViQYQtMc44ALpLhm7QMTBrFUZtA79UEPXa31",
  "key13": "5AqLnEh8BRNHU9Le5U8VSfezymw2wEQbarVjDJ93JpR1geYDkqbGAir5cRse22fyJ44LTgj2EtXL9paaaryYpTxv",
  "key14": "2iVm7nmG5JALM77oB31V8cjBwGSXKA2gXLQxpXYsADPX4NGwN775Aay5zGXUws23W5L3yRqP4tc1Qdbm1MzKuteD",
  "key15": "4QdieiQHXBjpruNcyqfqUebGBqpHjdxi3nMZzvmsmnfXfTVkzhAwDB7ivfV9YEgzQC5Ri9H46H71CTUdVNZDGi3r",
  "key16": "5zXqvVgtqDw6ytfPL554gDWDdMZx96JzxhE4WYT6CRVNndhpQ8EwwuAnLPELWv5RUV4mdQMC3BwTjMxJ53nTLjhJ",
  "key17": "2gnXA9ib55P7nDmByw41KTX5xN8kMfxeAjQHaKkkasr3kP7CRTJAQfZiWTsG25buJUhqSwY8fKSkDh5ccKkyuNJS",
  "key18": "4vuDCRBFgTEn7d2wjav2Fn63V6hFtzNdAohzz27xMbyqeewJYtrYCFHhyx7zdjL6c4vMo2TNwGSuiCrYwHzMkfPh",
  "key19": "2QECL9ukUxJgjXvbyf4dkSURge7a1aznxj7kTaWgzMz9hWZZ8xwUxvoSUkgnf4AFSTCJvepSJhKWaUw4uEMjxCZU",
  "key20": "3QoS7xuqe1GwdRPXNZqWxzmRiCWhnAyfanrxorrpnmwJYBFvU2FD4YSuCHu4yYbPfo8W2NDoVwTYBNn6rTwf6dGS",
  "key21": "5VA42ajxr9jS6MZQPckpiPqoCQE1E2u7kXo9RaqPp74ycLPTqyZe1T6Mrn8jsY93fXUmRiWesQmavcitWEkNXJqn",
  "key22": "5bzbYbcUZzDSgkXiY8V5P7RAf5J4qNKLFW7pJQZRV8Ftco6gcESvwLce64W4444T2Q7bULCb6byWpmCJNMVt2aE5",
  "key23": "2WwCeiB8RAEZgN9mjAZtLwbWgByTNutMjT6XXU9goiGkrdMKsSu4U6SrJeGaaoX5eTgeSoXvEijH9Y26hH8kBxnq",
  "key24": "4EMroGsWx99rD7UFPMSTMwKtp5cLNye1iMjzczjmhju7dT9y4UpQmm1n8RJkv6cHQvg719xXcktEEcnpaWGc2ne",
  "key25": "5aYqmuU3FPCLYkUnxxEaMmtvJLbNNJDk6qM1HxMrdY7TwHPj6RiP5wvbchRnTYpWhTi428fw2gmsXrGpDRonAQdq",
  "key26": "4ojt18Pbz2HGpVweZMUfeRJUjWZicJ2FZHkCAZ61pa7t6mcDxAnSRscnsSn9Y9qUNpDgUemFJTw3NYnkoA6VpUyT",
  "key27": "3yyXsMCcdXp4xP2efcagUHfJy4ntbuTttbj52UYttYS8rhkeuYH1aYaNxLELVX5biRTuotQ9wK7Ng1HRLR8barzs",
  "key28": "2mhKYTeEC5UHzEzfiTcyGJg287UxyhL1ujK5T8cNsfXkQMrmvH5WhsYHwsEwaWKLySwXWoGeg9XRDuZTaca1CEYz",
  "key29": "2umtvXQPNn9s5gaz9NRkQoCGUg79LBgQ7Lg7kdYE6XFSVGp3a51itPzdHZtBMvrztvPFh8afcrjw4Gk5xMpKGuu7",
  "key30": "3WqQCi1nPyFSdvYt8NUtXiEZA5iNrwmvUZbYEUjKntMbpCWFGdY1ktPiAZtX3uiSzpUU3vKmkqmTNtFPpxWjCLpT",
  "key31": "5yMd865NRFKSZenz9kSoS3HX1QZSmmakqBHoh87z3sCCoMQNbHLK5mUvJo5JW1U6iP1rQko8n6psfgRhLQzf5dL7",
  "key32": "3Kbc8ADz7rssG7RvsXhHZsfGRr4R3hg4u9kaiGBGKK4GdTw9yqJQKZYUSAskYv4ujGzSEDA3Nj9RnHvH9oD92ioo",
  "key33": "42bsEZLT9oXJmrnTWwpmvh2ns5U1ENhw8ZfcerBjYJNqW2t8JHmWToMc8vezorqctVyQoDFjZwyD452q4KNSUQfm",
  "key34": "3MpjrJXMyEn9jF66frQ3u5wfusyTGp5W8LKaHBptRqmVPm1ZDgFHrNqcabEWVMNXBzSxWTjhtxCm6YabmNBgwjpd",
  "key35": "2dxQzwr6Tuh4b1j3A3jpqS3RDrwCj4YDUHtzQrMKWXzvvQgW5b66bpNCm1s639vcBauVUNLevUwzgEcmM4pb1gYj",
  "key36": "STB4bTYsUytkM6PEyjHM9q8n9gem1Bv3NEaB67d1sWPv49hSsziMG6xnBLEKmjrKPPn7jFJi5s6xy99SGPhmU91",
  "key37": "66euz11D9EjTZNqSzLGwPA3P99BD8vbxydMofqDTj2Jwa1qYypKQxRvyZb6eJPYysvWFn9DNsw8nXewymobgGmVK",
  "key38": "5A5ZC1TNnsYZMuH5SuCATPizt9LBd5KFSsn3jAUyLXKS8tvzsqdTEVXtWgeeZiDdt8g2FhXV8RcF8mcBuCpRMP5F",
  "key39": "3DgL6EojxHAYsiHkiDRsjY4Gsu8Akg2v6x7ckBjPWbu5YzARRAMjYVwYgwdHxgGDzqnwKLVVsqkbpgTezoq7JYo9",
  "key40": "2oZqDp4UfZnRGHtzh3Nekt8KAjw3HWLSTCe3iT7sLUTK812TsipEgtVtHeDThCaNguBk9fuhBoUHGrhvaRAymp9E",
  "key41": "4gXf6ogw8ucFYS5fBxCZZJ8t5S9YYtW4xurjQzy5jBi3WKjtKy1ztXnxyQCQEH41gPpVr3mE6SouG6zCHzmM3JnF",
  "key42": "5NrzHP6tuoXbF1dRxm9QFuBEGCrGNKJg5RWR9Dn8FPQHGTpVMTu3dk52i1eGfDz9fwxcafADobWtSuyiPnyng1Fu",
  "key43": "3dRgjEZJ2uCi1daUdTQKgD27kEbCdxr7UtNVcmJ2y2Pim8NA5Za3V5Fj5RwhyUR8rUArngZj1LBzSqz6UmNbUt6p"
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
