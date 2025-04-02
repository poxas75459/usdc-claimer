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
    "4y4mTqhhygcnxGR3CdzRqEJ2whWoFyySb1Q8RHFtPWGXMi6zwvpAjuRFUvNvqwcFUWD77qVmxYep5xeYtZ49uWgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Mi5z1KhpvMusjjPbbiYp3dHuaVaemAr9TXrChhP1vs5DxtjBaPhmSb3zJSNd8nKknxdy7B14sDzNU4WcsWw6xh",
  "key1": "MqLhVWNDxVYZtDmvRUuNqE2LoZ9pi8ZbLtuozHAKDJoED5VPm5HAB5zbCQs4roS7WXbC3QNWYWXixrcfXXbhnkM",
  "key2": "4JoaB8rjqWQtMPqsmdd31BVoB17nB3kCFRGxXfXde7PdbDMn9UNMHUXfvMYDys4bR7BEpNFoFr15NTXM3RaEP4Gu",
  "key3": "2HsEacLaMVyANGxXquiZSJJxNn5Qcw539pxCMMsVyBHYvUmxutgD7x1aJaNf6aXM29BSnPu71Y1Exb41pK6GUupc",
  "key4": "t4CHrhfRyGpwFdDo3nTUVAWazVE75J6CqtBhxgPzWzBER4yR3DyBZCVezApgcsiYpRP3DkUtHikLvT7vc1yQuMw",
  "key5": "3CRXXmAwsRa4JLTj49U1EheznWPvz9sQD8cDng6hx3fLC9FdYQuL5N89ThTfBaMthGhSKonwcP4cAPYeQYocptBg",
  "key6": "3Jmh6FNTvRdXn2ytDag3FxD6g3QDaSagjFgDU2HAMsUqhdyVXKiiQzNWvHTNSzrdTi3uUzJ478Ri7HmUnMikAj6",
  "key7": "57sseVZdhk7RmCWF6GNF2Yq7obBdUg2LQdvq96ihFGeENh1LNpzfe5iiybRmxkCTofTjFDw1eyjoTQvQTsCuWwFD",
  "key8": "5ReFYGuQ9chfdFAzr6hyXdHRHnnqc1VeAS6gP9ZRtEMB7qwjtJzTRuhEJQxsSWQnU2KT6cuuBsUxZPz95cmBtQJD",
  "key9": "3ZAKZyZgeausQQjvRGhvLhUkF8ovgoBAx1Uufc6i6iMk3aW86y2SoZbZJRyBCuo4n5DCDQY5dW54U4PzDRaLKt8Y",
  "key10": "2QXDUAruVMqR5o1r42uUWeqUgFNKUGcS5wcZZVCxx5pCyMWVEGC8umv3gSQVHQRUt3jX39ZpSvDE3ZWJQTMQfiyR",
  "key11": "3D3dTbeSzSVEUysUvZsaE9VCRAr4NGRbnidpCkztQL8jvah9Ac4iqu8m4mPGYsxArhFLGtpd4HZVLCEoFwgrXakq",
  "key12": "3TRNH2y2SdY87HWeVHFpwwiceBc3p3J179HXHpJH6kavWa4WiWuLNqPWenx8xgoH6opxJQvxe1CYqTLvbvNzk2Fv",
  "key13": "4YqgovWbKPXDtYzrjtWC2G9VEbyGYqvCwG5DRwQPtzbzw7YxaTXH9jVjz46tdfkGao9mQ1YSgebKY1dGmPubPHc9",
  "key14": "TwjSnQ3iapCSTmJbcfFrJHds8FFZ6um6dNyxHdi7gGKJsPAEcbed6WEAooPFnE9ykyA7dDPgNk4gjN6GKYukDKL",
  "key15": "FfXJ5iiK1MxtqoDkBN1rh1szcScm3d5eSe6S7YNRehimYqs96HxMmkzd8A3QmUX16putMPjSAxQcyM2pkBaAnoF",
  "key16": "42Nv4UGa6FPA2WNSXCCN4mmQmEWAbCBEed3qDz5jjJpznEe7Ph91kbcpiE62mU3T2j9Dp3xtCPRpQir5xrMAeFhr",
  "key17": "4cXMQcCX41CyyLuhNZsreDDKS9x5yWCT6Li3bAtxpQyCj9x8widqzPrKpR1gHCehPTr6kWjHayYTdiVyFCqH9tGt",
  "key18": "3ZGX6iAp3DrCgxUKSfPrqHzgbfodtuNpYxDWBfm7L3YRokKmcYojtx6aLqHKFnG9vwMtV813nMr4oEBXJaFdThwf",
  "key19": "3ACo8ncrNgNekLhEADrgDuXd6dqweBBUHWY7fY9qCnpnM2mH9HCtLdJyjC7w3MxcDbpst7jRJGZ3aWn9Dd3dP9uC",
  "key20": "51DWgy6Cd1sp5SKZm3tkqcPJFKSLDdPJyKJGBeJFKEkCVAgnwwbuAQpGYT8Gq2T9FyVD7WEcC3zt8DujY922prBp",
  "key21": "3Ns5hTKkrui5FnqHvce9sjf1MupoqXRyNiRGqitHsksSMmnDQNiDqZSUBzvyg7JFzCsdnG1zC7dPrMKzV4MMNW8V",
  "key22": "3jjXdUAqQohTnp4JFsf4zsmnTbJtmV15o7P6W1iJKwiMVGF7P42BhUG4fmgc8LCocodee8FoXtD2GwpXriyb5DCU",
  "key23": "58JohF5WC4h3ErTHwNvPAnySx4snJv4kZDZPv9waMcrB7JzJVhmFSPqK8r3TB5KwEgwTiyekNWPXe5fbA2CHcKXc",
  "key24": "2GP8vmNDpjBLhmrCXhEVzJ6YsnfYPgguJQCsJtxCtCH7snvoGnrdLyhKBBbSkh7tVr2mKmJJx9LNFtNqYt9Y3uPR",
  "key25": "2VgeSgfs89mwTjmJPhKk6mRyCW4vwY1t6Fr9FUWziighckrhrhxdrnK6y3wpn81gdcdow83nNcLckhRCyVxf4nyP",
  "key26": "2SFQbZVKWjyxcVd8gAs95WzzdAibGQFWMedbJcC5RQ7GnPmgNhTE2RcM4EKDd5VT4YBaakUTB81SbmjjuEujg2FK",
  "key27": "3jkkJhFGTZmc4eYQyfimt3fDavqFp8okRLoy2H37883VtNJvWxUYs3HqAC9KLJmf86bjz88GA49jz47uu4YcyPxr",
  "key28": "3YXtR9oRLX2jCEG9EPqCgEx6gJ5uQXSMkSrq6W7croks5P4vqd4BaXznghSTZvM1xsCm7bPHM9WKZoMWnnAkaA7Y",
  "key29": "2peB1zuA4g2PJjjMdqusr7uNgEsnbfDW8wVwsjJKGMiWdPp7RekhcrvzQ4RgbYAZhzjpHtwH4SmAUxcStvnhfJBU",
  "key30": "3qgYaneKD4zgWUTXvrDVZD3yYJ78nvGvRRSYB6Jqjq5L2AZYRw7cUMF2M2WvVZVrgH2pUbM5qC4c1BBRQ43NiaKb",
  "key31": "5dWtfZQHKTTJBzL36DA37ZuYruRfHpmS6omuXD9Xbs7AjdsXDVg48NnXRrp2HFFsiKT5iwFgRDc9M96gynDVtUN9",
  "key32": "2oWnSoBuM14NxTjnHJmtiAq37kW1Bs6R2vpGmGjRkr39Uk1rX7jj8WYpEcRea1vYk84B6RCEkfUSUJbZoSYhqRp5",
  "key33": "5c4fmLCAGuRDPbpRqejN3t8HUFQnWb6tk3GsPnFKiUmv8Jf65qQDPiBivaDBqAEFyujhBbCWZz1bJLJXBBTqrQVT",
  "key34": "3kLk2JPDgwYPCbbpsUozvtsHcfEXPf1WKMKgpfRc4QQjwetUMf3DSad6gJ5ATkjHYqUvNpBpyC9Jh6g4omKqJ8D7",
  "key35": "Lp7ms8vNh44hrMrRnX5AF5KkxxvpaeRTH6wFa8NS6XdMkKEMrFvuMf2edWk6zwQzbhDWyM6V2qavoo6fP872o7T",
  "key36": "3MjmUruGcSMiqcWpEuPgL8GzCwg4BZcCVqaWpmPKYUDLSX5cRKPf76y6xgxMjo7qSFfzrWBTW2Djwkh7PBYVudnR",
  "key37": "4XesootL4FvKR8aQHkWuRyK1rZXA3YHcTBKwTKro3DDWHWqAcMwV9YCR4fTmcnVW7uEZNNXuS5VygbnuA7TWke75",
  "key38": "4cFGsKfKZVJbA2bS19idregiCsme6qDbayANwgPnMmFmJyczrXim7yyrQwDjNry71m9yJcZFTpR76YUW5euZjUmF",
  "key39": "Wmgjy38KkjKFrZZ1H8jfWpNE462i6yFTLdYfi5yS8C7nxRnqwTqiNZTzgT93kFrgwieu87Gh8ztAr2EPd7hE2mq",
  "key40": "3FWC1FFxMUQztMESnRfmbWY19SNxquFLH4FZ5Eucxg5Pb1Jg1o8RwkZuKk3siHMrcjHUqCbjvb6pMx6AFVPiv84g",
  "key41": "ukwqfmS3yBnXRycMXMSN5LYMXJm8BPb4wCPpmhn8oosyYEnDHMPz7UuitMxrDrayy5YQLjfnXBD5onfDa5ShmR3",
  "key42": "vizp9ooU3QHR9AGqfBzL5NvZYEvforM8DHv2eK9DaWw6BFFRtFFR1UhQdXhdDpinLZdXfQNjvQMhFjKoCQ74Uyp",
  "key43": "4k4wsKPcdX5kFN2zvUxELQ6Wj41Tbk5VGd5YZhzVuMMFXY8BsnB1PEqvdGEfdsDY3eQkQ4YKa66iWUNucZgLphpk",
  "key44": "5bG3b3SMx9oqnx2PJVRmnXpoGSMDc4gdisVDo8YuinsfSLE4mD7PtVqfQZ53SzVdetcPXjgJ1ksoXToq4EFEWKVc",
  "key45": "SLaGQLywCkQsktgCDWtFpmVnJgwLRg8QaGRxCcY9nnoUfoEZhgb4nQbFFdSwkAgKeeKQyRVABDd3QkvixWHnPJU",
  "key46": "j1ZAxxW9VgRS796fPz7Ax8GmTomZYsrcFjS1ZVJz3MqHHxUsW9h6ccYoNJtm4vvZdXmHuwrh2juMaYR2rZWe31o",
  "key47": "43MWSdAhbyKZMXw8DFNm5pnP3uMhE1BQQm5QjMu4DGB7FNgSkd8W2dEBBMSDY2odZqBTRhAkpu1SRm5k3y5kFSGg",
  "key48": "3cQfpHEVAe9f7GkczkHqwyhsEz7y7NLM83UkAkSWyFZ6B312FHwXaUjBUzhgoY3HyoZHFyhnyB6qsupg6EcEXzST"
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
