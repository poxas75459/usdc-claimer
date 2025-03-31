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
    "8P7QhwHiFQJCDfZ4CfyXUxgjGRT9qGbFRnY7KupckqBFsFv7Rv5shz6Lwon3qA2k65bLrHJacQUX1kaQKKgjq5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gGbcAGEpvrW4MWNt2TiLEzFP6UvTrsNGtBvFkMK8arSqPXob5whDPfbVjN4c49V2B4QqckNgH7JRKjFvtKdS9NK",
  "key1": "2eu3VH6gPQvioBDhYBTEakRSzDTfNFgWPYNNC3dDBAAQ22KypDLNu5ZuVgHwm7b9tdEGXEgDnLBzWBsg7JnmDmyk",
  "key2": "3K8T6bjZDZ8R8maGGHARn36cp3PFLJuKvfRjAVMWV4DUWdvCgPWwTkb4NTn6MqguMxUudPDD23B6tcyMnv19pq7E",
  "key3": "2eJistrLig7L4b2zvNdNYeEA3Y1gLoQPHjKrndz9WHFSvgSrKFiwf14z4YpxTk4qeMay7Q6NCSPiyXTDnUxFnv6J",
  "key4": "41a1ftunEKGsfEmkBvGXcmg7m4h4voF6PNY3Jj33tEeMeVoVt8wMkbEY2i1C9aiuVa8T6bDMvGNQm1mwdmwZuiSa",
  "key5": "48UjpbzTdUQHHbuZG38L7QGr5bknFnUqsh9amjyDCz9CUvruETZVLAWPWSJLi73dGdhfjzf7P7LvLHmbxXg3rRyW",
  "key6": "Yd8JXbUZ82wHj9jPq6pTCLDgBUHE68NwqLjHc5pwhY496HtzvgVUtoTQuSm1YbVMR1HCi71kcxpr83RNiVTsyue",
  "key7": "5XJFDFG1kCgiSLN8fihWafxC93rHWpk3PfrCPAC8nabcBFesCosE66cdYwiBtXgCpdmoAJFRCpcDvtgcDu9KgyfH",
  "key8": "4b7v7BG5ieKrWjMDwMYnqiPx3R9U5VgETZoXZrUE8c4sDCcxBw6ibqJxuwBGGEFkAixvJeNaquPVJuLF6WfBGU4w",
  "key9": "tuER6ACF6YaTEPJQna4trPx1caeCuT9m9zQGfBZJ5p1mkBWfy1CGKt6ydY224NUKj9qEaGVDZsbsZCVUMyySYNu",
  "key10": "gwnsT8FkUiuiXTpQiw6KBteqzu4GY8WAC5SHEJxQSTsPad9Ntt6kWupmQ7fBKguoS3VZMqjmCWTDZ4CHSPUAXAf",
  "key11": "eaLiHZWaHpB3iULtrZsSDAE8TacEZgs7WQmtqjdJemdzebcVcf59o8rb4NwJkJSq1MckMmqGAwDCfqKkjvE6NSn",
  "key12": "4sLnuVjnyeas76c4vtSdmrMxibPQfKMjxJZgJwyG2e78UvmFKdKMXaKMedKKnjCnmZXGH8pzH4cAqwrhF48roi6s",
  "key13": "52XyQFQN7taXc6kA4xzhoKtw43uhjPpvhpkZULg4utWzJ85zN3gNJHSEd8kawkvMNKcnUV8esbfoiXCPKGQgz4sE",
  "key14": "vXNvqeqFxgiBViNZ1mRwUzpynaGRHBpid71hEiF8XvtjdyKiNaJZtZijUvwRqiBLzm5QneaC1g3dK8wM1YwHQF1",
  "key15": "3fTBRjJBPx4XsM7HJJ1ndmTXjC7EAHSVBKPvFJDMh5uV1CCfC8mTyXm8xfcJk5N1hriVQrUJvBt7vvBTXt6YRv9",
  "key16": "ujwXYQwth6BLvuYPCM3RkPnN8H3Y2TpGQBRyBYtY13PLkmqD5dvagSpHKQCRMoRVq9CzSX1jnFZGhMnJPj7QJLN",
  "key17": "4D65QF8CgDoyMzWVvqvX8cvdumqzEPtV9RTLJQaZiavScYuEWn5WY2DJ416jThFgUDpvsi3KN8FoA6WHBVVkzA6q",
  "key18": "4mdyKofgsX6rRpvwmUv2tEq5SHqT8ic5wAvS6NXkTqRcWDU6dZbk2R33SD5Vm7DdqmkmbHjbUovn8fhc5NyoSbnk",
  "key19": "2o8hS6kqsmZukTNNBP41srSsNyUj7dLDKNJv8gvQrJfkU263upRjNf5d7kkD5LKb2moi92wipr2Xs22MAioFPn6N",
  "key20": "47LRCtqK4Wnsy9QkvDL7z3cYr2uDRskbEWnwowR3TSCutte2nTdUcS7sT3eDLwVrvYe6UNZsYt4D7tGCteNt6sJe",
  "key21": "3tLteChvGP5WC4By8xFL8221EiJsUmNuHjSVTZbdvi2vHjgGgNLmqQaAAnPhu6oxoiJeGZD8VBgUkqRjxKDUZeZz",
  "key22": "nnQsNPNoVqfUQqnKWLo15Mvu17pZWmK7eLah7T4er12yCsgynm5qbqY5uxury4bYeCBHBTub6ryPf1xw9PHhACp",
  "key23": "5Bos3Myg6ok7LWMHGr19pzN6CoRVvhMt8bRpqnPFN75AKoReayXj5LmC2nhbsFyYHZo6JxRBBiJ5TZoemZuhgvDH",
  "key24": "7qvgjWGQC7CxeCAdWaZDZiHJCxc6eKAKdCbHCBpxwVAHhXvxFjoTGKfQBNjzWBzo1eizfbah27t3RBkAGJbbcQZ",
  "key25": "3329ZgZqLkAr6fJF493ioXAmJrywaaa2ypmH4JCg84jaDdWTtZTh73P7A1nuU2b3EzZQA8o7qnPUuNTz2v2cemK4",
  "key26": "3KFrKA659nWjsU1Ki22CzMdYqWjPBAcKGukpVhYMCqDY8DbdvXhJLPBGFSfzLhK19UGUduqDWM1Mfy7nCe1Cuup2",
  "key27": "Gq4gbiFotL2rNfr7ziX34VAbM7215Cx9K2Fen7nbCeC8xbMLfvW712BEWKTxmuvVXbLTt8jmiL3tE38DEhjq2j2",
  "key28": "9i83YmywGYfQJvKcKvKPzoS7tNbby6JjuzURyTXh4gKfp24gayxS1R2UJ1RHz7V8cd96gNeB5mbnGfC9jRn66t7",
  "key29": "3f3D7UtBjEFAiafP9CDdPudLvtEwNSompb73VGLSZGweSQQs5iABsTZ9mSxxUDgDVTD5aSf4Gkn2GGMwJSjb8WVv",
  "key30": "4V9wL2id1C5NGUh3958A7AZ3D5dZeNVREHWwdB47WX9xBZkurQjkwk1dpFbAnp6QqC4WPMrgJGFc8RZgrXJ9kjLL",
  "key31": "2fB5yo7S1zByg56krFfNYa2qg6fbcyrbMEwC8dwFCtuiCXKqbBqVxfwuLnPG7nMdpq5njV6FnRCexHsQ4BtdZqiW",
  "key32": "3KpSJgKvNYty3Sup4TUbpiHsVAh9muN2Rgj3GiSLSequBHw4wHV5SbHdBY7XtZtGVYg8rWqNc6uDHqqKySHSWAwW",
  "key33": "5vhNAUw1RFp4kFtJWS29xSF9PW71YZ5aLSnMky2k3q1kAxrTmPqyGUt19nZmq8gRwodEwqLRwaoUXmJLJVkXjiug",
  "key34": "66byZL5HEMAKGWANTM1AQe88MJPecpVXnvyHxHxSQE6ZxGP5zk12sGx3W7KfqLWW43BnCHp8pNhhkVMKrwgBzSZQ",
  "key35": "5UpRajCJJuR7Gc8izGVFUS1rzJyd9xpapbbkcUasKbTiiwKXsP6BUaYbU8Vkekm6JYrT4TNbGHWx83oonorTSVak",
  "key36": "Wf4ppj5TNHmYqRZHYhGbh4fxseHyUYnQZ2ik3zgsXDYMisuxkZx77FVJmEQu3s89CWdxnQDrkWdjhGL1w1t6KCg",
  "key37": "27GGKkgQLVx9xxoqBXyk3bgZEoDFormN5XmKJpA7ESXwKYSnE2WM6unUmFK3eEmJWaofnooqZb9pbLRgnq4K3ER7",
  "key38": "5LGkzyA6FyqgWff91bsE9zK7XfWsjxLtvi5XbJ22fpY7KCGEvfv913nVXYaFJji45SufyeXxhbxXKTMF5ASWd8u3",
  "key39": "MSrC3sRrQ5KK6BMPTT2gRosK3RCnZazWQW9VzQq3XYWNgPfJRADRQsAbWjdpzYTw4yTLqsvHiojq2wmtqvTHbRm",
  "key40": "Uc3zrexeAG6oDrwkBTnxmtdL3vQV5gUdYZXU1tW3yw9FSsuWqQyyrG5WXGoPhqbLGWa7xmL5TFi8Z3vuYA5LkSr",
  "key41": "5ufCZ26p5mZr1R6wdsonpD7ineKNLLeujkZxbWYiZBNjzwJki49VQaAzaVDKFVe9qWyv2ZYQsEyVeruZzfKjHU6K",
  "key42": "5ee9m35rNWQTtRRbv7C54kWKwoR9tJXzeaCPAGhqNGxZU5qGdCezmeASKjq2UFzZbAbMDL7NwK924t56Zz5vuzcb",
  "key43": "2qF76tcGbx9trYhp7Y5yEX4Lo2dvrRRSQk653Gr3chyE4m15nPGPUMrxdSjjaHyTUcgzGip97ubgwQRfCZYpF2SM",
  "key44": "5nabV36o7w16hync55TWq5capCYg9UfMXGqegkFGnyduoR4TjZRaY1hfphNmwcMWjpKMc67LgyxGUhaDKQQHMn3Y",
  "key45": "3dYyiAaThi7EXzDXsFutX9e7Y3fYyAEdiwHg3sgpBSav1bjm9deJCNZnN3HRBfeT74FpgA99FBakZAtcy8QEmSBq",
  "key46": "3WzXaGZEqRxdjYFPbH2moucX5nH3wAhM6NQWbXHYRAu21QUwJqT2dVT7HH2fVsy4J6QTtwjBv1Zxen1wrsuGYjQ7",
  "key47": "514oEJNgTMT75vxsh9HePPivks9mfhQR35fb3XM2kJ1uWU7hf3b29cwRA7Mj8cF4zhtkfrxWwNsuNhhVapkkNLMa",
  "key48": "3B8XbeCRQzGSvZ7g8JB1rVYAo6dRgCs1ajU7bz6V2pPKpmjm2usnxJ4cj9Hrd5MzmMs31dmokLBEqpUhbyo457YD",
  "key49": "3aAFxT29PaAk6kkaknmKmiVAcGdpijPszkefX5pst5b7Rjyv21hmMueVpFfQSHFxFigZwimw2mVt3KY9FX65GETX"
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
