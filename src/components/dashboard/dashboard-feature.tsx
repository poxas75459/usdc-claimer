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
    "4Zrd1sftmReA5gZs5ta4Ur7RHGNWnLQCLjKN6b5HunPcD7vzpfpwzPxoF4stWE4JesPejVKVtqz3maBJBeGCZmeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uibsoeU5DcSLWse22NydkE5dhCAi3yPjuSWy17RNfkGsNshuPMg1JMHzAqZKMGJJDacNMR3x1uRNFty2Gcx7MW",
  "key1": "3wNzAQ5Ky5bTMMvNGpe9GLcpZuzZt5U9SKvPsfqwTCDYJS2GFHE1GT8m6Xb7aQ62Zc8yQRPTLajDaRvZKEbskmTW",
  "key2": "3j2SJ2ApBVRcf9ATytuMUJNHbJWkcaPLLSnLEp1BgVA58veBjuMzvAMBWncHcxo1RGYoZieH6sg2Tb3y9gEUdBv6",
  "key3": "4QkB4bJhwRhf1PUjq3H56D8GXdyH63Zin9wPj2PSZ8sSX1bxUWaTARwgLy5rcyKsdvzZo3gSoErMLYRBFsg8tGKo",
  "key4": "5Ed1hC9PKrduE9k7BDjE5b23A6R7NwVai3n4wUx8SGgiGeZ4xohLsJqU4UzgYFisk7uVXRvtXHba433UHUaN2U3A",
  "key5": "4t14oJmc2NNe4QxBN4mrdFEmRnvvc7Ag5BfYLtfpwYGK7nc5ux7KPyFPN1R2QWa1LY6EMiFjN6L9VMtBfmsrGDnK",
  "key6": "2fLooL2c1y56ddkGY28uHF2mUndSKuP1gc6rvLwqMJF7eEdsMSL8dB9A6J4hkzVeqvn9GcFGcvcFyAhaAujcN1z8",
  "key7": "5RoyEjMppLptfdVcwq3hRVLq3wgu9CwSjs6j3zH3sNv8LctWudZaR8kE9W8V6SCvKkwM2XjUirxtEh3mDTSEr6mf",
  "key8": "5wTCZPU2yeu5DUbbMW9GeKuBnFpQ8AnfjViQGQcn9zkuQoBaDiGFkaarqJD3EHS5zJLqoMFAx6Kr4mmNWXLmPpPL",
  "key9": "6gcKkTNv5xWCfR7rcEzL5Q7hKj6Ega7AX9mFDUqkU9ZVowjWDqSCHz92FDUoiKgSStaLpAjYJBiVDoQCKZ8nCEf",
  "key10": "q1iSU34kfNVJELUTjiPBD17ZpqGP9ikEGachn6G2YyKdAwfBbP7n3dK9Gma7HEiHZJDNM4dYVpXv1iHeMUtjxjy",
  "key11": "5QCrcDqhurJHu8Qrb6YZHfPq8hNQ4doQJEt1B4wsUiZdqx963kCL4q7BD81vd7EZv1M2YtBTtGbHN2mXgpFT2xcA",
  "key12": "4BTufUWV8CbCWUhakMiAcMKGA5uowePQLXJfbnBBhKP9cWwkoBubEJv38PPEM1Kvi8UC7gNjqsrCP9YgCzRRsbvz",
  "key13": "2B1g4ExwZqFdykcHkuFpGWUyGDpzY86L4shSHsEFCQafN65nbADYEcZHLCmqErxz23zdA8fUpgTJBvtGHrC9JMC5",
  "key14": "5H1wDUX82DUSEDdWqAekpz11vSc3Ash1hu5UQgeFpn1SAKyKv7vAzmLMP6F137gQBKChBvBSBu4Bu9R5YDCbNVJ4",
  "key15": "p41JvzUV7V7wYaUbuooTa5BBYCv5EHm4Q9UeskKP7BN6nVE3Wr1g9f8mU3gQcjpxTr3S1tBx9Qv2n8bxLKYDguD",
  "key16": "4p5HKzdXg7wSNujt4stePJEVfXjLoU6kgqEsberULbTuM7nPoKTrt1SNkhHtbsDCpF5w1LG52Ljsxog3Uknarc5r",
  "key17": "63u343Gv282ZGLQQFCwFWE2W58ZV5WNwNQdRipwhK2sUM4mmXmnALHmKZT7gmgKMfURvefwdM1pLHMnzHmG2WWTt",
  "key18": "46B98ow14Rfw5MPkMxMogMhjpkibsGg1LMscSkpg8VxaoJiHhUikENzGP8jR7qBE2efEJ4AFkDuW8wGqAKLm6dAB",
  "key19": "Y6wuthAtBdm6mAmHsRY3wZMF5MpuyRDfB7TyBGoZeu5n6bNPKqfqBM4mUx1rYhHVucoWmC5bxDiXRHfPJvwj1ku",
  "key20": "5HB6f5SxfwJDnTkSVuUVAFn3GeQGxtXCQwyKS9pgMtEz53nPJ3hEbhoLM1mRjo71rXFunbzGTtzNxsKhvRbDFRPc",
  "key21": "Dxnre5fMD9qSR7EQeDy2UuEN1vqiATsk4aM5iUDufxBy94MFhSmSsLDsQVXLo8dWeAaLkHsHn2d4u3c19yedmWH",
  "key22": "4vmCYfT3HfDKLJrLyuGMAb5dLpar6PzRZ56PBFTRA4ST2P6kFRqaLWBESuePEVP7pZ7STF6RdRRC6XxotBdCLfBd",
  "key23": "4Np7gEuJBxGXpJpR2AKSVzSwrSdDPfeF5mW2haMNSskx4B1PUBBTzbJVmeMWbZRmkT6wcE6tQ6y4FfaRQ7pCBHLW",
  "key24": "25bSuQBhn7UiPMVUEH2zx7MH5wQAxDGebiUZDWerGtQ4DbSZLDQpXJWMYpwozi3YGov9MAoStYx6Kn9Lg5sa345w",
  "key25": "2YfJdMNe6pZ8pAfMm64TKoE3BBMjNgVtLiiZu2yAnWy1Sk7WLMVNG5LkeUhSFVFqJQs9qrv715mwhYRXLzRuJyis",
  "key26": "5c4bQ4ugmxa46a2eeZBhDu8DVDiHmuyRxFpPcfqRJ77QdEqY5mAabVsUDex4pMp86XZwpE3GtRF8c83x5nsWRDw3",
  "key27": "3mQHALfDWtLVAvzb6DR1vxb4KXUPoezeHcEvTdU9iLDFZvjmcVVJegyjdky9VPEcKEvUHkacqdiBH4fXYbSRgAnW",
  "key28": "3DrKFdXFYWtqaroTobhN1KBSjjkgaxCr3aC2js6W4zDyZBmuEJAki5cej4K9SZJaz4igaoQyvqrCUgMGdSm1Kv1E",
  "key29": "3NUYwUfw69AnSZXyyw8HVyosdDHrJ9c5rrdgb532PA3S1jtdukKcyQJRXLwYCPWv72G5LWq5T3yHRJgdJcHmQvqV",
  "key30": "5ZXu63DfzpkNDaevkdeY1Uem7U7T12da7hfYiiyUnvnsGq9JypEno3y7NrH1FWRS2rYkt23QeNpqHAvAtQUDLss3",
  "key31": "5Q7W25wor8XqHeH1rv9CA4Aem2ehFnirxusWpmkgaGJ7dyngbZ9Morb6zrV4nEBjFwNqGSGw8WDX9DWn4NVK2wBY",
  "key32": "5Vc7RLhuGJymVebrxdjbce4cjph9Md421drD7YJ4zKUg6mUcaGWvL8UQNUyU4h2uTS382JMtG2VLFYRU7WGgf1aS",
  "key33": "3yhv2QzsJWDumxEhPhsTTEqTc2QEibkCimwexYzyceB9y4HJSrfpRWzNAarkqmsnsr32kRF72QtB6VTD86urWory",
  "key34": "4iuHvv3ybaHbewDUftRzTusen5ava6bj8wyh6TQtLYxQq1YKWfdhrePCoiH2x2xLfyPAXpTojTCrwDaFYzxdJbsM",
  "key35": "3crQSv7uhWPzj9Lqb5hd3ZECGh4R6pdMbgx4zpARSvJMiFE2t21Q8DdzcuJncJeAkfcmywv8qiKUFqam6Q5PM5jg",
  "key36": "3WYBfEQGnPzQWeQ2U7tKX1AvENzaHg6X3qBERPDYySeJ5CG6bRjj1HLB1Y6rXK8tyvKxpghZDqX5R9ovrXfj3WVN",
  "key37": "5YG6xRocP2HVM4maCz2Qsq1CE9i4PerLqTjaNYpjh4XyYHawbPAR9WSzkbDkYwgwQZom2Ve1GjGPm3e6Lu4wkgjP",
  "key38": "2FzMn1RYPvgEgBaj15tdLegjbfjWxyEwN47KwjfjMcwm2NSpKPbUDdMc4MRrXxhRvZLWe4tkqCQqhx9AgAKExutT",
  "key39": "5vu8TQT5f1pkYfc1SLew177w8sjrZ7XAophECWSGyowM2Q2jVabdJoz1SYgGjJbjhNXbCaABA779iqYyF29iDzEy",
  "key40": "51fqroxRnEPRXDUAyjWw4c2GR5ECVvyEn7S9jmLLFZhKC5hJ9HdUUrdn51sjQkTV18Yhg5k4fqY7GGjCYE9saCu7",
  "key41": "4dj5n3xoks6Er3Lyh4x1u4mABxr41hcB4rhYwnCDmdigeSRryvJdh5BtuTXxDWrMgqXDpHMbaEtwAYM9Z7CfwASd",
  "key42": "5nLsi5SvfxA5uxRGFs41JfSzB67Frn31p2wDy5SNcmwng8pgUWBYsDAKF4e22KzzJuo9refctVxEnxHDKs8c5Ntd",
  "key43": "566H9YCz2pa3XqW8RkYRKJKQAmaRCBKqdFSfmRrkXPK2FDSvDV5DGQfpsPRsGmLmueJRQ1bbohcjT9GEfMWYYoZr",
  "key44": "b4xrWMQPY7nbfSucEkpS5MTYHeNmg7su1oHda5B9eokVjSf5QaqJfQx6VPfGsCE2cz1KKt6TigYcv1fcu87GuZn",
  "key45": "3m4qevjNzN6H9wo2HSjZRjd8KDd8BhbkZjPnR13XTSQ37BNcYPA28LyHzEgzE6GUd68TnmTnPC1yQZqTb8ivhFmm",
  "key46": "2sqwVuwMd8nwUYmjZMnz5hV87eJeSMLkjBjJc5FLwx9mYouvrMA7mG6uXaPrJJti3KZvfLq9gZbMSBLgNC9165em",
  "key47": "4yhTMmezyBz8f3rj5JJApqRDjJc5B83od2dksLMJpSDBn3krgrs3NKmEPcv4bo19WLpH4J6HHetkM3rLeejUaHHJ",
  "key48": "27oUhXMNzEUV87NfXrebdUAqyhZxu8h1RutcfjdjffUDJjuMvfuVYjafCKjpq48v4ThLLZfTK4MX2xtERvEhC43W"
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
