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
    "5xWnvJ51Xy6zfMvYDdQpRJdkqXhkGxWsTeXFfK1Xe4rECxdwAF9wqbSJ88Pz3a38DdbALMcsP7zQsajcWB3D8Cbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4ME7pgwyi8LhXgMWtNVp3oXPekbQ6QUu5mkZYx5TwEsJJfUGPPH97pQLqVQj9ucaTShPTQAR9aEP5eaN49vKBW",
  "key1": "5npYrz54WS7Xp7ZGRTtizmZfn2TjkYxquRzsdh95Mdg4FFSDpNAbSWGDpQNcyyhS19TkxKxYDqb6vZejzyinV7vY",
  "key2": "2tYkvqCo6Y96BsnERYvaRZhYpbQJCgUJsPPGUTCCB4c64oXZ4zXorYCoUPjuMcFkHaJezxkMCU4DymdD58kYXDaY",
  "key3": "3yxkD6DsAEQpXBuFdZvRWYGgZkBtgydcLTykGSEHXQrUoBW8E9xa5VeP4QRwhYjnZuNL6aUc3kdq1H9Xkxn5XC3c",
  "key4": "4JardsoXw2V9EVmXG7kJde5yPx1wJLXuHsr9etmo3u63xCn9BkocUPBjgYNvykKFAUNJqQEZ4q9KvKvCugBa5u5Y",
  "key5": "3hVdCCEJs17NHsFFGkrSPowWZH9tqYL4qFTnK4LVTmSY8GKwGGz6n2QQunf7MKTH817xRGBeSG2BGjgkW2rkCzTK",
  "key6": "DDGXhvVtKfqCYHC8m9m26fKRNEsJf6whoxhG199Epk4f1SJ9yc4Z5sAsZM2hH8afN1dvoHoxadgXEtPMgCcyG2M",
  "key7": "2EZzkge7XHFQdRkWQy8fW5EbTsFQdmB8ksAkxgpDkskxt3vYNFY8MRgiPmc9ct77Lxk62kW6EjgnypLSCJJPnoVW",
  "key8": "o1iqJMrW6XCzh8DiDzxCZDyDuL1Wb5wRyp8SytXrK1Lw2qhbAoEbiCkhiyJu3qJJtSUWjN74fKDFw2HXFLLHeMh",
  "key9": "4aL7pcPmxWwvuE9up4NGCZ1UfkTmkSSqbn72bDBDBLGtrk3MgGiK3pTeZAxrhzAEw1R9b1cvuRCb2CYbBH3Xczfz",
  "key10": "3k7NQgf647PXzmKdNa11JNZsyRekWH62kL1QP8tTAvVomiCoSUHFyZDtjKMvXUpbSrnFYQKp6zBWaLMS5jmUPeCg",
  "key11": "31DLkzEjKmGd6aV5guFD1bTX68NKVSN9AmTDw7u6KKbWWeE2N6aJ2PgqSBdDhRV9ATe9UhKnzXTxDjpAicC6GgcG",
  "key12": "2yG3MDHVq6U7aKhsTkjPrDQcj3ePHJJ6Dj1yGF1dg9en82NvUhXbeh55xUMtCZnFdrm8UoWU1hMLtzQwtJZ6BoG2",
  "key13": "2w72ZV5dYzxu1X3uMCPR3UzS1yPkCnAXpxvH9LyVkjPUyxALUk1ca2mXVLsad7AVYufUgB9dyWRaLfx6fvn581VA",
  "key14": "2f8gzaUtviQuq2iF4NrqJxyhSeLnwndTeXGunkjnp27xMupP9FT9PuuxEAxPBSSsz8v7v6khAw5XiPbpFRme2nLt",
  "key15": "2919nhZv9mGK6x6NBuVnxEAixVdWTGjFyRa3upXGP8mx6Fs5yafr9LmTYnhNH1HzQ4WVtYx3ga4kYEnrxxaBhuDg",
  "key16": "3LjNqMiLFv82wGcftA2q1oZ1z5LTBRCRrMZrvcoY3Xfq6uhpsFasEoVC49bU6JvMwUofMN9Phd34vNfEvWM3WehC",
  "key17": "27bT8LBBwZTywzhygE5kgXNy7vLKFphdTYGqakPHt6GYi9PmdXyMPAwJbUkaVv11UwwF8sEk9fGSjc3D4f5Xe7No",
  "key18": "26pbjE1bPnh3UeTHhnyS7KHQGDFTPiX5UJ11qdh5h7qs6NDHByRnqBL6q2BDv1JDuwa5pGgv4JEssXNVHvfP7eWo",
  "key19": "5R3a6fT1eVF6ZaoKEpuLxwpkGJAvi5FqjuGUrxNwC9wnbrsfXTn3GbEjeQpgHEL2SieakZquCftpF3nnpzZ1aaFr",
  "key20": "4EuFfhdNvcZmYRSTqPWDbRMvuejPWz31bXVm2nUX5v12Wwryzm3rBkRPLmL3SRHkVbeok5DhbL3GDyiugAk1f2i2",
  "key21": "3e9utXFcgMGxwABoQNCTzzzpzNohXnU27SbSD21SezES8bqnahiyDLnj4XVrcqw24K1XkCZXN9ict4WqJDNDyAMs",
  "key22": "smH4fbKfrBPhXNcRYtwDBxjVGW6LmjNygDL7NpK6Ecrrdx4TJJVLTxCScWVZbV7Eg8DJehV3QcPgGW8utTHAwPi",
  "key23": "3jtV3ZzdtvXTzF9LKhryBrxGxkz3u2cgHAyZooeP2dinoNkJwzBSthC7NDtFjfoGqaa62sH8cfRpa4z1ZS6nAqmk",
  "key24": "5SvgQvAmTQrXac9xP8Myu2nduCvCSrjYRDGfTrQbMCFbB1MEzREGseSEhAVDqoceYJEELUS6LyfFzAf6hxRuGGTg",
  "key25": "2TvrFhiuRuhrkQAC6TL6JyBZKv11PfokwkNh2YDbKU4UezGbPdnfhGqbCMNoZR3CZJRzSYP4pwyiCp2Pve9iVwuN",
  "key26": "5Y8RGpQb6fszHcVtvWMGeagPA93jsQCnsCqnLKdUr4r7jqJcUqwMYv81eYXwfuedvQH42VWSB7D9fLAZftgZ8AtE",
  "key27": "3XD6WMThCb42GW4XqcHUMvLvmx8XzcdS33WTCUXVSrWY3bjSSPoGr8Su6PCM8LSVjkHRC3KNq3nRTuCW4xfJY4fg",
  "key28": "4m7ptu8MnMLA1jys1TGTC4Ss6ZaJp5sXi3N4J6g6esC2Q859Jgej8W636tGL7ekGZRTLAi3naGd9KMNDZwjuRJFe",
  "key29": "5Zj5QgMn1PFK9JaQy8CZEoMY76AyP5D6NMwwbxR4QwkqWXkAva4woibaXuPwX9n1mpowd29bNnF5pkSaGd7oTac7",
  "key30": "2dvbJKHQoMdEJFdf89bE1y5e4szrKCK27ttTa6pXe1e8GgND8y6RenXFncbFbKBcxreLTupZpbpk6AyydM6DMQfj",
  "key31": "2oCRH1BHQcUNG4hc7NuEVRE9EgeKD8dxNdeovf5La54iTsPHGK7GBDX4zMNTg6W9vt3o7GCiQkcbrKi3BArCmHJQ",
  "key32": "ZFNghwpLvxg1H1hDibMdAjv3xTad52peMfhyQND4WqdKyMX6uduv2UBpQ3Ph6UKpdChAjvdkAnk1ct2qmm12btt",
  "key33": "4nv89ykdioU6MzavRvFXwXaTg4aKmgD1ZxX5a4eeRbiVd1611MVeWz18jSEkd1ecFoosoVxXVM9kBmpFBdYjSoxa",
  "key34": "5jna3R83NZy8965HcTSnHwXp435FrJtrnMpsbhSwN6oM4nRypYT9W4UKH9hC9PLKSnmL77RddJgu5RnSNnrfgkpn",
  "key35": "4F3BDqoNcUmcGr4QfmoBkCiTkjDukceaFKJL1ZVzsFCAiGf4wdc3hYB7L4iKUFYsvk7nnsSdMchyoNtgUWvHEBuh",
  "key36": "KHeZ81FAGwddxupNxJQ8jFNXwk9vZgtEWA3mf5CK6M1CjEUu9xXsLXJSSwqRLeTCYpEF37yV95NkD567MjCDZao",
  "key37": "5mVKQN3ZR1KjjAYfAKb16Y5DryuJrAmiyuyAduURPQeoUWSRr9zMnRxHYHq83HoTB5TBYBXcdneRB3FqcTbjthAj",
  "key38": "3D4MK5Ac6Ttqu9NkvehGL2JAznASkuuAhnq6xMRd2RkwX5ZQDg3LNTmKEmEsXFuMcMxo2qADozQC9nXoZoRBunue",
  "key39": "3Hp3GEYseXzgaArS6iVBomC1dwynpJgYZyYFef3eq45rK42w2Yb6D8qhxya95irHn5D8iwarbVxs5JeyjAUfQkQt",
  "key40": "2rKbo7RyG1NsUvLuALpzNLcodpS4LQZ5U877hvw9tH4XBDJpKBccE2cTmLRjHY4GLxBFtKsDhygkFMEF8JGyhuTL",
  "key41": "2ZTXz5jNxYxwvd8TLtze4HrwfYFMMBo2EYcW8S8sD4biG5YriWVkwt7xvB7vQrVnYJkVLuijzVgJFyJ4juR1AVU",
  "key42": "MrceWE6uZhJUhjYan3f1z8tca5SydMUfQad6Ydr2rXf1WaLNtYe5nDKcPkUtnNeBPYfi3AaMTPuZEtzT4oEugBE",
  "key43": "5ayCg5zDKXG4wwdJdquU7izF5cpHi7Hcor86vUeL9YBuhkRXnshCXBQPELrVsCHToeoCFJDq7swUdGuwzM5Gvb7r",
  "key44": "tgMurn3jEb8qpsyfxMTwDbr9TKwh7oanTpApmxV5eeyhiMVhowcULTwCXiU4TSpDauqCEGzmFfgcEQYwA4M6UNU",
  "key45": "5pvQoTMRdWgXTMfCjqTnGvuPawJSPkK7ATXMtTPnuL7CuYm9aGALurPgCXKaeNQz7UCsLHNnFesrHSoR9uQ43hZA",
  "key46": "4vui4xw7mpQ29nxsDP8hCxgZv21YqxUvju7g9C2abhu5gngT7kDFHjnQq3tAqWGYFthdTsxnbuFef7P3zu9w9Mhx",
  "key47": "3JnDeBXN8SmjBMkpYYrfJZBUYKKWW2aBN2nhDCCuC6Ur52GXxjXNN5XXfK2sGpr2MSCarFDmq7SeRs1vEdutgckd",
  "key48": "3MvEPwu8npLCwJrQ5wH6B9xmRwxP9RkD93dmmPQyXyvt3MfHehGtLUncoRruPF47jUACkNvBzyrG1oeMbCT1T5Da"
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
