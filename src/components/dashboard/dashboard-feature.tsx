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
    "4QWYAzy1r7quqtm6s8dF29g5cbsnK2Nq5ebHtx2eLgdiBR2DqnkJVMikNRZnipG19fputcQZqiVoyJ1URendMBij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ss2wK1crhJ942U6rfnbAbHgXMrWagvhXSx1Q4gbDvA5msStqMZBE6NJMLUn2cHUqNnM37o2GCW5XhFRMFKxKGRr",
  "key1": "5WYsyXVNTNvUGLhvAbSynsNYbfku8gfddnB6EXC8YeQobwMdsbA7MRBWL2oaT2UkQFkqdkDE3T76Cm5cBkqvX3GX",
  "key2": "2Jz9p6m7CXZ75vG1Dto5ee4VqXN8ugkALBDpWSwECsDyRCm8JgYJuQmFc9Y2EdNLiTLDyVF5STkpJ7pGi2kquUK6",
  "key3": "5hM3EX5AKtP8v3yyD7L19BGwmH5j3pbCmNZPPPPAEFqLx9sYe2t8Z18TinjAz5M7SEK7ePJzT75MjHiVYfSMNrju",
  "key4": "1JFjMb3MrRmJqht4EPsFrodmsQkuesKVxstDXDVF5q71KVVfsvznSpDoxhbTXaEwD67DKqUTdWDYMhrsWK5j1P4",
  "key5": "3AykHUfqxw5wEXDPsHadu67FNxKo6Ey7GQfnkRd5aH1YcDhrnA81qLEhXAzCaFfda6toZQjNFaArr9HMCeMv7Ebt",
  "key6": "3ZseFngHa8FFPtF4JDYvFNkZsaa8T9N5CzJV8yAk6FTBa8nyfr5uQiqK5mkmcPKPW6c31aZcGxHyRVTeUurjK2VX",
  "key7": "2ZyeCKAQzR6irpaQZrBoEowHrCfhYb6rpixPDKJbw31S3TCFJF43FzLqttJVm6FSg52jmJSK5e2QLmZNKrv6tMuZ",
  "key8": "2Czkb4AuH4Un4oBMr2waPZ87V4DDAPzJoW3RhkHZASj8tSmDy3Kt2CvvPWqNDnQBdkREjJrtJEH6Bet17YTJdrw",
  "key9": "1AB5arJQ1gQkPVto9FD4na8N3XhkkkfJXeVG5SUCbz2YZQvNVWWCmpwSvR2yepZ9Fjwnn5o39xyvtyViBGE1TT1",
  "key10": "4i5JupqTmuJrKXTEFgVNF4ay44xLZoQX36bfrEqUjZ3F72VxSDtDBgALMnCKCEYAqB9dnmGQB2F23nKYjXWSz7hr",
  "key11": "2qDCoVPb91pAtdVTEEnFsw5ujmPnYzhcFqXegEzmUGrzBG1RUiR2S936sf85hxVi2wj3Sk2SWweHGYj2M14h55QY",
  "key12": "2fafMwUnTUDZFB46xBtmQ2f9fMYWAY7xRcAirHn64XobNZFJeLT8mdsn7DypJqWkGQBCY8GRbCLfbbKLWAbdkxBv",
  "key13": "2rwnZDkychnL3ze7i9cebgvDhL5LonTjdc7RUcMa2xzy9Fqn6fC2gRzmv9WuJncCkMcpGSyjusKaWBmQ5sQ2sqeC",
  "key14": "3M2HtMqWCCvHxpfabLdSHGhVjWuaJW52T8JFJfnZqdbXrBrAjftEZ4e4Bct46KATW698mQmss5wCmnj41KEaSGbo",
  "key15": "3sB52gmqfuHxTKtEMdKSCQibr57jBwQxfcpUzQvaztVy9RASXxRtHjNey9FGL3zDSRfBPHujSx9atsgyxsCH2jZw",
  "key16": "5spP14UoWHpB16cXi4gCW2Zg8waZ3EjcpF1FsWQ3kRn44saq9jgjuYCAcKxTYhyFYq6FUuWp7YcS6Qpogwn1mABK",
  "key17": "3vNWrF9jnpEfe6Au3Cy2XaL2JZMUDHenoZytvPWVDizoobJANgLTyEZdfxyvtoqR6yUQFUjGMdGYtRJYnfQpp3NR",
  "key18": "QM2zLwHEjfRRDYHmPeabVgfuDrhoUVyy7J34cHBDZnEWz8pg1NeR9gV2X8RS4YYWJKLE3yj2tagF9BhZmCHiEws",
  "key19": "5QDHWBaf3nm2owChJTvWTvGypgwZPuvWXCRvZujMdaGkU7T191wPzwkYVcVsVsynvXRmE8VwwEToxNoU3r3jLAYP",
  "key20": "4eLkuaLEEmbdAxbFdtr6RGA7vFdcGsXEDKFPJD6xAEVLWpWXb83Aq8Wt1pmd4E7i4qLfPvUo9pTHo7Ckcij1HZDk",
  "key21": "3ghHxhZRVUfrQ4B9Df793HrcmwVtDXJ4epgpxW91YsR8wdwgbsbyEDkGzhhwTMSau32ser3dDBrPjKCf8U73AY71",
  "key22": "5wFYQ6FmEdfkYwEYBRp5JDLxhWHmebzcQwfm5exoGNF8WwBeVomdWDDpRgko2CM44zWPefPcq6grMscXdbpEAus8",
  "key23": "4AZyNquNDDZ2xX2U3DgCfhhzRvLphw26oEL8HFqKpRF1DzPmh1J4T5FqZNZTes3vZbEW8r5J45X9XLAyQfTdMagr",
  "key24": "4eyUiLcmr8McMrHWXYG1at9ukeYFX2J4XrGk1grAeRo9TNb1j7YqotJKYtsYhzNCHrxMTHM6P6r19in5mM9wNxmo",
  "key25": "4Kx1z7gYwu6isruqa8mQKkwutXwwJSmq8sxp4z5xCTAkdVWd9WHmWH4Tz6RrJNs8RVh7eQ6gaYsZ2NHAoyK9ScJU",
  "key26": "VNQFXZF82Q4Vfc4N3vfEwtcfqS55AFuEYTtJJMK4WmPNnoBtx52uizK41yykayjisW2cwMq2W4B2L9jFDbnyoPH",
  "key27": "4rCg4NJZbP2PDfHqVc4K1JbqPRzDn7pfNWDwehp1SSq3jbzrSttfQUBFqnw5XJXmdVcbFaQTHpykjgCNj9aoQGP",
  "key28": "4zrBARQjAYGBV7W3PYA53prDhSJcu6ofoczoA28xmmCqaFdzVbfaeyVCU7k8UGBq5Hecb4BZS7PGQUky3NmRMeCF",
  "key29": "38LwPBxjxH9qMSqMM9Axapaw9WaiwA4RPrm8QJ5P9UhHphfbKcRTqnbfXrqTpF1JwKcYy57FS1keXAWdK6Zp6UC2",
  "key30": "4kfmy7gFcHo4efLBgYk6LXLXJgKgjgovCivzubWubBPogLk5vKFGVkWo1C73RFqDjswnGi3cGmxD6N8kBZjAaJvf",
  "key31": "54fX3Msu4GtJNazXmG8vcHJ2omsqeauYTuHSagG14BES7e4UFJSYqfJbhscG87jEXTwmUrvDT5oUjJoSpukz4AMp",
  "key32": "3ET5GvHkMkuPyaLAyykrdfAerX6fQpDVRfFTkfjUo7kBwzUAEgSPDLzfeiDyLvwjHuJed8oLWpPGBcxUmsBYhP6r",
  "key33": "KL6F8vWsX62MYWvSMuZKctqcYANRRg9fG3G6wA1PyKRCeo86Z4aV7AgvuTzFfztYBY1A9ywUnYQLmKNAUq8PdTU",
  "key34": "23AaPUurqGSgDLu9i8zrgjQjmXQQBgbumXYdXBgvppD7MWTP1KR8MwTCrE2ZihrUrsvsc4ZxsU73WBywpSRAcjmU",
  "key35": "4PjwzEMpg2X7JksWNyNirHcqZtELGwgSyp1FFgeJ3Lm9QVF8SaWxKKwrRpkLakd7bPLMqaB4bRzaSQGpWT34LkGt",
  "key36": "4G1DbKoc9N1rJnHKD7xYczJ2F3frVqJLKxG9iJoZUdfpb2pBwbGCba5cVDm9MwzpK3fQoS9RUQdVW1XZ75PbUfyD",
  "key37": "4hxRwcTQwBHi7WerTPFTtnddvhGRVK5YPGsvHM8BwXXohmSBWYAgHW83fyHiLUJ1bLiRgkvj3KzYFqst7UAKuGMs"
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
