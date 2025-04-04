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
    "4FPsWgQgw15Hmzu5Zeh7hvfaCpyk1nfYyBDjz6BPENFReqVMHEgxk52AmyF6ThfqL4LWE1C2RXhqX2WYj56R8At5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLQEmEG2YZ6Ej9s9RsTpmojuHeNC8W5WztT2g3njCnLHcFxun7irXDzjjsHBSQ25LUYoDvDdLAdDv978SpVBWVs",
  "key1": "3bRoHSBmUCiA12QcroTJuMVbrZWYab1VyTz9TR5XFbMwofD2g79WR6NXrg7SKbHmcFgT3fN1tN5m2ff1DUfE5cEB",
  "key2": "2C34t6XeGbz5cK1BKUiPysDvzTZBQwsTKCo8MicE3MuLMNSFgKuyozaDCxRriqo3xqcVobk1TTL9qPYW9CFPTqqy",
  "key3": "5jwixJMg3faUhSEhFHG4pcWg7sXQysRTgi16qV4BSrtcxTTPJfBPBHX7tH2roLKZhNUmyi28J8ddGPHPxYWUWN11",
  "key4": "4PannbhZtnFQZoSRpVHFCUJLfqUkUjZBEewq8muCb8PgrgXNzoGiTSrTv6mBy3CxK56jJXhJdKDyrcKimm2qEpv3",
  "key5": "dNKzE6Eevk4wHutRJQUJxNcB4QrbVhS5c3RJ9vAJFzSiaBmiXdxKm74jn9CzzQ5sCHViwwz2HMYD7JBwFh6kfaA",
  "key6": "729DBN39DjtNpDoXHoYxTC1fgKifgk8ptSdCPHa3C5HeYStmUMfKiaCn8rnYYCxF5NScVVevVi5SzbZk8mkd498",
  "key7": "32wDsTo1bqwC9S9ZWby65nxMC7N7GEYCoNPypUMSAbiFKP2Y9HMitPmpAPWMWqsnVXoeGnTYBkWCR2DSPUXFnDRt",
  "key8": "Ji3jGw1pufAbn2jFUV9gaixZChCHnFhcRQVZRzp2vaBFSpdzBQJV6yUqgkPRy1iwH4FStzXT51qoF84Hgk6Vzsd",
  "key9": "bY9xgTuvWYgzMCbzwWjk9KzjxV1FuYeJYVA9WTG45cfTScsTLKeQn3x12Tigom57ChnpJmqJTKmrV29GgdgNeHa",
  "key10": "N2qYjqYPAXkae2DyGfrybLtfuiZiVvJGNjn1gsWE6mpBUEH1YrKNSWQbmYnvSFzFHYKPMhh7WwGDs78LjyyxshA",
  "key11": "5RLaR5NE8RjDA5iU7Z7C1C5dEJ75NPeHP5wtNEbEDgpY9AAjiw94Y1ogKjWnjxGvCyj2392QVgoMSQvBWozGtcLP",
  "key12": "65NA5wQLTnU6432CXacQRqtPRKz5FpvwGppo7zqvDvpvvrcTqNrSubfxgqvd7Auj1hYSC4TLUUkQREmbKeU1Cuik",
  "key13": "2MYEiLYL54M9n5KnxarFd8QJVWMUTcpNcB9KUmEzLUNekam8hRW62zmEDLDLnvza93286vHZzeAvtFvAYSkKx4NF",
  "key14": "46RHEpMe8SRRue7vFYdTpmvrwZ39bBQhChPe7MHaDsY82vA1GmJJjSmmDSevrvvMhPaUrATvayjepeTqdN7SWYFC",
  "key15": "47iifQRAZbZi4jTLwriZPFWKv3gJ6w76tDc7fhydmKijb1husbnF7focpvEhZ6Dpvh2RRZTD5GxMvmzpmdfmUyZY",
  "key16": "4abVtjUNoLvpddQpQnYGB7yBbt93yM7PhwuHyfsAdEoEE6bzHiD5gGPvLfDSa5D4n6JTjmi8DLKdpou7yU7mhoNy",
  "key17": "567JXar6rPhpqGfX2EsqS8qQAgE1PK9agm4X9ReD8YJMgw6dCPB6c6k2kxc2T8MjFhq6YMwV5GhsiCk3gpLPuwSR",
  "key18": "3iMYSXC3UvqP548njhGRJWafRktn8hLqxj82DBReYEmLVMmkAn9yW7mh1jhHutuh7i7uAuuDTnHJ8spXu7TG43UB",
  "key19": "3EM5nSUVQRyJUBBZGowcGBDuMkhiFyzoJWX8hLmYaHwCAkeS6nexmPbs4Lut61YSVrtuZFH34xQXmsS568PotCSk",
  "key20": "3LUfkihsNTxdcBheB8bgp1hEPNSHQieSji8FscpPuKzzG7p52w9hdDk1muS6SyWGzj6NFDhmMc5m4FjLhLhTTyn9",
  "key21": "R8jcYCavUtRusp8p42CYdQrtC6spBAPaknHkzBy2MP65KCKg9qedhPcEazCupnkWmiFdgHw1Qcecenur6HS8jXb",
  "key22": "3S7QiwDjefSsPUuDu4XTiimRez1qFW4xKzHfMnsYCNc6BSvSPd655bEVkJSH9kKWyZgod2rXJvBHGfhiSWZSFdXo",
  "key23": "5BkB3Tsv3CXQjiaS55Tkjj7eM9EK6ByriR7p4k5ecrXyjF3JCaKRdg9D2yWn7riSNmEav55mdp6djpzzPYQ88P1s",
  "key24": "5mMsFhHgZJCy1E5RGtv1ajzqbxfq5Hn5yAXprkPU9Ty2N1NeTeF8pvopykMmRz2zUB4a9uCwwtVkUXM6PFcGaSmH",
  "key25": "26nH1DVbTidjaphWU3NMLjxezs2b8ENSaoAxrGjdCr4JzeTndao9q9yQrZ1vi9QV6ZivqNxAWjNtZ2AZnq9o2wp6",
  "key26": "5z4yXzVnLvMei5xGHhnVbRwd97peD9K2pjwcx8fpMP99zYKLciwDJrkcViyXFTzzJpyouzWF7birpC34LV5d9rsW",
  "key27": "4CfAjbkjYtUJjAtSewtuz2ZDrJbJacVZE7HBtMzY9BWzrUu7dquM9D8BEyWm6QpWtHiwZ2ms957b914aJ5ALnkZf",
  "key28": "3BccGX3zZjZU9bum6sgfosKUXCJTYbr27iXXCyLkoxRwxpwuxHQePCppT3wE5E2ZVECjvj5LzYUzTaePzqBE9iKU",
  "key29": "2NXAJR32icvVVJYmNPNEX54V3rasarqA8WuFWSEZJgxoZ1CEUAZB3y3cRURpAwFYHgJdpBf8gLrsqZM1Qu2juDeQ",
  "key30": "2wVwV9y6kj5BS8KXcvBKFfRuib2UvpjfarpQntc8VtXRqszCeWk4tUdzA3W6tk1RzeUybDSkdgw169j14H9QmEYQ",
  "key31": "4cQJ1dcWLeNSZ8R3sdNPW8AQt8BohHy7fnW7ZoSfTEgeJEwYKHyc4cJtcS9j8ZqYBoc83ovMhaJEFyVqQENyKSTZ",
  "key32": "4u5vrgvaw4jGhw2NmQyUiRh34hjXdrynG6aNM9P68U9XcMEzEAqS1ZrxELKP72aoGrHp8SVz8caNQ3ECXmUHFpVs",
  "key33": "55bFgTqsFTxdWc5XknRyWRq31XEoGkRVASeBVCq7dPnKsU4JkEs92jkYHbAbjRE24Mh2Xctk5HMjYLFx1Kcxfvz2",
  "key34": "3MeiEdVwHn4eU2LLd1XmTxPgccvRU3k4TqRNTzJYdi1xcBKusE4TL5vyX1z8pKm4yVB6Br9hfZN1Hj9zsrRLqMfc",
  "key35": "2uJJ98bSYrFYjVneXYnEL85Tou8d3rgDz15USbXrs2fD549gBDjQdj9QDC96hUAsH2AmoRehdaqMv8VnH6JH5BHd",
  "key36": "2yBQSCi3vPbdgZxyvGA1xoLqkYQpnr3K62D1G2tFRpZT9LoEEwRTc7hS6HkX8M9XBPgq6XBGk72k5VXHHXzKeYmJ",
  "key37": "4FKvFAFrS3LrrBqtLY5rRAMbv3Z5GFyJgu7GqpuiqF7JDHjS2JHmAhg7tYuhenX472eHNjsCXdq767vdE4NsZp72",
  "key38": "5Ftmsrx1auuPWSrntG9eG3263zCzHsKS9sdCBdZ2j4vfhMK42NNduFQUnkreYccudd1TPrSfshmfHLVPsGqtVB5E",
  "key39": "5BTST3Ji2vwdESE9KyRHq9nUiuK7YGAC4B93fwMR4mGCBUWCYQfNvYyf3GBZcAbnze9xmdokHskoFFL81YHLesbc",
  "key40": "BJgFh3Vq3sgWz8LAKt8n2jvxCN7gBXWmctd3z3ya6HRD5m9j3v7z2C9Df9fKqP5FiMtQo1UC1VHEf3f1yZ7YRPU",
  "key41": "2ukoAzPwMEqv4MxToUVWN3PKPW91GdABZNccHWi7PBzto9oU9FkaaW86nMWvfUmD457XKinXKHd4U72a6HqFii4B",
  "key42": "3BrwvRQznYse7dZ2YdyaPXdJwxWV6nyq2ayoKBWnCWNxKZZQ5h7qZgx6WDtnm2ZZHiZT8PJLLtNpKtwazzp4qF87",
  "key43": "4dSefZ19Axgkw3Y18rjxt2sbJcbnJ91Bmo4ooxW5CuSkviUcc6wX5aUQRkz2QUVt62e7M395jSGyTLWPqaC7grU4",
  "key44": "4eVuQyXPAroFZcDcHHRJS3QdTxegz5g3bwMxyuh4xocP6rWC4FBTzXb9ttBSisB1vb8pF32XCCh7WchcAERmjQkS",
  "key45": "wL7y5WYtKqaK8gHaqV2RimNRCm6NoVShHR83FhBza2WpQLCjcaJsVWdE4fxYSiUBZoUy7TUHBHp7kt1S9uBdexj",
  "key46": "5faFqPZWdU4LT2hTAhKSF9xaptyVtFhNxvdqWdUmmF7F9uftkcKXkHRADJEoiGVJmdxs8xdjnTHb8tGUaDz1FPTm",
  "key47": "5PSdRsrgvVTxtLWoJj8dsWJJMxQNJn64N7NXWgG9J2cTMviUxEref3eVmDQcacu6magfiQL95pW45FhrE4eei9kR",
  "key48": "5tfCnjSWfxFpomDH9iVSkSs6LJShQ7N8Swixgfpevkohv8sosbxpZ1tNNTTH365RMSzVpMyYw5b5nriaeogJpR8i",
  "key49": "3mQQd7oJoJzdVepWG3875gAe1YWMxDVX5q1ohNTFzmsSDyhhopkp1MVqGFNNfoRzgyjmMXyH8WA2HYDy9usq6cKx"
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
