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
    "4TN4PRr35p2g4C922e5iEbsqhFUpJC1g9dceG66yDAedHT67odWuBTJyTu71EbvxfeeBkBSmETvwBac7WS83LyEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62X553SuGPGichRp61u3qhLP6AVieerXULsGkREP7n5yUkaoY1c1tb2vLS8YijsKkLzVxnuZfqP6iAzE5ppjk9iq",
  "key1": "3Do5Tfdcb7jaqTygqnKdfkvbeVYo7zxHrncVYgq1rCVfm9tRf5aa2SB9yvauLtXkWBwBm88stkAGbXVCZYRb6TyX",
  "key2": "3WeoJWMTSsvWNPHBbysKJ5bUu7EWH1ZDh812mhdXujknms8A4QZkgMAQfqq3y9aejdYLsCFxJt832MfFRTp8V53A",
  "key3": "3gaThMuoAEUS19z74zcDg1zF6u2Z3xDdgPuyFMfVdiWxKfwRyKDV2iCNddVfiqqAwndcnpcHzUnTN3mNUD594DG",
  "key4": "reLs6h1c9bdXRJ9E6Q7AHZ8jRztjSzfyBXQZYk8eWJ32qgb5xVDW8EzYMX2eJ1p1sZQ6yuyAChWbnnpJ1FBeXrr",
  "key5": "5R6vFQuch7YdSxJmPoNTcYL6q9V75c854VQV7TJdySqNE1MEtNcTcaV4CVqcYzTscmVDFHN8zA1f2cKD6AmJ4wxJ",
  "key6": "438LuuwjCaGfhG2u2zXkQWR3hzHtZMtQLVwyyF2dqCHYJ8r4gMCbzP2rsPzRcZCJbzDhyGeqYCZKMojHh3cucJHk",
  "key7": "2fqYyRDyeaVEt2PucPdkDhsc1UJsEpm8EDDzw6KFH5FMnWJkyx9n5JTC9UhUVkAfyEBm5UkmqfnYAHfuStUm9mMA",
  "key8": "28nQD36WdXDV2jzhnWvyTrzB2zo7aVW7nRiVKEYc3MJQFstjDERYHZD6JHcFzn9qABedJkxW7DRfxyZHaFwDMvAY",
  "key9": "75hcNNzgkQXbKE1xjc35qtVHjgBWuc9pRZ7VBXqVbRG4iD7yb7xVvrb1bPQBC9MD883RgQPKWdyAyAswUU9eoMe",
  "key10": "5RgBmDaHMaMtCb8uB8p4H85heSTLqfbj5qdN44xN5mJ1HjKyDuvWDVsxBC4TA8oJheeRjSSjhGAq6WaAjXdrj59b",
  "key11": "4ZVwCGfEjSSo6BSjduCWFLdv1PMjd5pSamyat5atqc5X7nB8Amx15ywaZgzBEpZgCcL4tpPd8runzVg3bXngvEar",
  "key12": "AtV2w3ooLfHaiTHWH4JhSNji3ogNpbUtYVgPcwWpDrBX7VNM8Hab8ckgybbtbKYZJ2r3D8eaGaMcN6CGyTrPLkN",
  "key13": "3LP3uhRRoygCKv7uCPGDEK4TDeKJQsN9SVwxqfTCZfZfTAdiTc7nKz5sS5QLCaDBQ5ti9seBzckFc2D92iz2xfPY",
  "key14": "4uDpNQ8TXKXYxcTenfS5aCcdVtF728djhAJWTjXWP9YA558CWY9iFtpfoZ1TP5wPQso9jFbfTnUM9o9pWmxqKekk",
  "key15": "2QTyHeWjDSS83dYV9H2Nxwexrd9DhqcGiQtLf8r9o1k7JU1hQTbWPUptR7Z2Hx7H2f5NZuP8CE8cJ1WTRbQoAu4w",
  "key16": "4pEdv95TKFH4aotEzqdRHALJqmSENjJ1fiWPyKVgiCpmygwzg7D3ckV1wvPjFLfUEVzwnpGFZw8a9iZuEWmEHYZ2",
  "key17": "3W5xnybAiyAGBbzdnV5mc5e4NeH9QnRrjvs8mNC49ymoL5Vo2Yyp4p5AMg6cSJ8mTFYPhseMnH35mhBfcFkR4Ekg",
  "key18": "dkEetwFSusKWuTArUP2TndDvtc4MnGePj94WjyGsD4KYgpyHjqLJi3ZxrKfNA66ciKtsYaHj3smRhvgMx6JrhmK",
  "key19": "5rXnndXS2aeWDXVRke7hnELSkQuJ5U6RdTF5y3kQYGJEHVaA2NzkanW3NQy3qZvHPRhGYZBLDPjx1P4HXPjWw67w",
  "key20": "TeyouBhX1pe44d3XEp3QLoFTcsUtMggJzRY1UDMtjFupymjKgYLks9UsJZDr1hbRLALRpFVznHM6C16J3mYKF6n",
  "key21": "3ezRmM5BnVkFerAACvYbNd2NCTLVg7PwBj57qSaATCZ6J8LtuVLVLaGDfjLizsNFvqYeUXMFtsMjBeNiZaVEcFuX",
  "key22": "ucYnJ4MZeCkS3NE7W4NVjiDRBzjehxx6h9mfoMoEryvNxY4PptAUYpDFDd7N7CvG8ek6euYUvRB7GiJ5ecgh1vS",
  "key23": "4S1NVYmXq12mav6joMLaWsgaa6zvTBa17QotdRhXHXcwcugjpv3PyZ3RHLe9XFck4BNqgn87QM3Buctm6cg4P249",
  "key24": "4w9Yx8AcvnB55QNB8nAFvuTMpgBeSRxRtZPKNbYSFCHiSPchbWB6dsu3r8Aur2XgYjpDV5fWH7RVmvdnMLRNfp7K",
  "key25": "4pUo57nkhPm5Y9BV1AmQ9JBdpYkLjnyDreQVjp98hsBjvEWT2StPweYnN1GRSCa5mPibpWw7h9sQbdyVFpSZkJM6",
  "key26": "3VwryQFFDd4FabehxDCaSCbb1WTZvQvmB9QtR9MnCvKf7KZRbFpf1NVwYkzaVh1VSWfKTSY1QfSfw5tc81KEoHqT",
  "key27": "3TwZuKtJhpF58HCFNaN3MvnNjxEazuGHTAD5tZ9dWNk7kYFtKKRrR2ck7DP87pUgrzTWg28Yre5D9T1dXnoKojeN",
  "key28": "5FZ3tcGKQKe3shRgkjrkfuv1g6JbKRghQMgrKgkhWnB2KMd2xbz259Z8ZAjdYykstjd6NyJmWaKVfJYLSN6gPcGr",
  "key29": "664fwtRDJ3Ud2JCvjWcG8QD3zPUJjitTge9s88qVaaL1b3KWfsNC6pY9pqYdsefNM8teDBxhQdtkyh3PmkZK4TsQ",
  "key30": "343smZKQSTd8pt7u3AoHnMfpBg1LZX87NtsdL63ZeoponC3LZmUKc8hJfEXe95hYVptbWsKnMKPsf33PTvoLtPnJ",
  "key31": "VZbczg8kMA1AnEuzTr49FN4o5b9TEeNWZ654SAoMvF7hi414woW6Fpsed1sA1t11T4Te9P52i9fiMwdXTvTugse",
  "key32": "GsgSMEZ2t34378wmBCGwjx5USV7GoATJ9BGnt4sEj2VuJ4Zqp1YfhxgyXk6YSb4VTs8F15zbpy9vsmShMvDfa3x",
  "key33": "29SFvAWGgUNTgo2NPJm8X5g6YE6zWAKVCBJMZpKWzgmBzRgPi3MNcfgbfJ2yNPwqdSDU7Jm94R8rf3QmqorArM3g",
  "key34": "2VVofbJAF1yh2zAzDN7MeqEa6V5rUQmcdSdQJocCqyq479XWZprLMDvhNR1iXDVBbS2bqxzM83FFePHzpCnjGRMx",
  "key35": "2aPo9LTdFnEeuyXqeCPss4z6Mjv73eJ2fPHPNrqXbTv8AVKywRQqDaoJJGYzNZqGxXmvnA1hFvd1tBCEZvsRhTyn",
  "key36": "5NeccR5CX8JPfJ1KN8db1RkfWBZGBwNjEgoowv9bH84cHgTdutvxeNPPFAZSng74wDipNrmFr7T8XHfFkf8oGLKi",
  "key37": "4ExAaZTmysqVaQpjcG6cqwExSkckivZsQbWJuouT2TipbDVNELJG19j1g3tGKtLsC7E3PFETK9NKjMepLmA92dG7",
  "key38": "noXAt3xhTvMMwWgqx8LNeTLPbQQXQVrLDcGACUvrCHRAbW8hZGxr7AAF8AX17aA4fg9RUAfX9q6pEKn8siiPdSd",
  "key39": "41FtnXWu7GwXjLRmQSr4GF5shGmxqnvjc6ZBTLuaM9jybdj7Lx8y2nfq84LuQdhELKuXKZ3duUjokMUXsKkq79n1",
  "key40": "nE9U1NScDpjA4WvQuMKHwfLUkxejed9ytpcfLK93MAdwM2SZ54FLGovVrtueTKMMF677MTGmf87iYmW2dEPxkPv",
  "key41": "3k6BrPi2A1evTGvv46BmZcX6TbQr9KiXA2ju1Dgy2Y7oSryNkefxvtHNiNjBKevzsvGNpmgjqi6janLCzFgQrpD7",
  "key42": "571Q7LfYwcyKvzssBPVV8h5isBZZNjzmwj6qASgBNiodVbc4nxaFNJVkkaJoRdfWgfKSWk5WbCiiJesiXxM5fodK",
  "key43": "3x7eRgvvPi3mK3GfAgRx8QgMTmsVezQdg9USpwa5YGVbAk7YkP5YPFUYDMA8F7z7dLAF1WogJrwdhxLWntUt6etZ",
  "key44": "4DzzA6JT77rxjDgUcksjjTHEz9DcmvVC43CpUpZjHXQpvNxrWDD3uRgKEKV7MByYP7sR2ZPJYqZ3e3C7LmMyMM3f",
  "key45": "RD5nuDEHn8zhkKLtRGKn11ChU67jte45EYibkcLtLfL6bLfyyQJFSTxzfHGcRrJGRkyeViGswSftL8ChMpPDn1s",
  "key46": "5YKBp1TExum4C6crfCJ47SXMDgARjvLgFf7g2D9sdxK83wfeKuikrZWXqvW1cHv7dz8qhaBpPaNZqnfhsAawaBjZ"
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
