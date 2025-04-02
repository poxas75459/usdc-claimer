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
    "Uqw6KsJuwf2jU3NVBXziQPU4y7erwGXXuRCg8mLWNcXq1qJSyA41DNyCB82YznhYiF8weTgF6W7NnYvapfZB2n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTscdXwuN1boJpXwyQscozfsFsPW59wX6u9GcaEsySR3oUHynta2nAHMR81EhDiWMi7e8MKk9YpjyUgukYCotVa",
  "key1": "r6NZjBELTYKs3Akey6ukxx9dZ4de5rpR35wpzseMccHfVxKaMLcyb9gRAGf4AXnW39rKGkUKNpAnKN76ok3briH",
  "key2": "5XxFmadWuUBgx5i3fuedRaRdJayWyb8FUuJ1C6WyKzMbpPDQaPFQM5Uv2LoxnFYweQAMeFoLq2gQG18Mz3yEcDCy",
  "key3": "63LVtBwSujftgngkGmH6fUuEAGs3PDX9sGVJW6JtEbBCKM135pPbngpBYeUD9AivWZSW6VYLsiNsEcWVLHSnqxR1",
  "key4": "nhUyVnC61WityAEUkrf98hL4jJcmKfD45w859Rr6Wmq99JcQR2qt4uVXqjnr5FX7Uht1ULs4qNHAn2JrmKoit7G",
  "key5": "5EJYKyoUhPsKdaMzwjGDhdMLcU2bq79tyraMkRXG3XqbRByt3WmXYWZ3LiDpMGF35CsEwzJ8mWSMyo3PnBqCCnpr",
  "key6": "phKtBoXz3cKBUyBsPpygVSr5KcHk1BZHh8b6pJfaWFKAWaWXkwCVaxUP8jinp5BDxD8KXcFEehyPG5awLzTSmbW",
  "key7": "xYqjqfs2GiRVc85UFaXMGEksbZXn1c1MfHukjqCHgyB9dC5H9ze4s46tAHeZQDC9LbrSySCCQyzEosDo2HUhss6",
  "key8": "A33SnDqwzJQwgF6zNcBTB7fTG2PbsmNuwx48Hu3iQZPGg3ybJMf2wA8npNTpgKNfuKurmEBq4Ra9iBCLE7zsr2y",
  "key9": "3y4HQLaTghsHMDKqFkTzmkt6GTd5GAoXDCFAHkLPGder29XN1XrT19Yx1FuWtnE1EMQnrLpxfeQrtKaKsiECc7eX",
  "key10": "2j8npaM41ZpGwDFVbMfW32BkgDzxwz8QTMTzVH4ZMsdr1nSGrtAFnJ6z2et24c5H9QMPbhsY1ovYUWR4SyH3q7EM",
  "key11": "2KjhacCe8XYv7nqv2nRuzszLnQBrAGd7AGNLyuXWqvmkAifShK9LmP2gYRgfXoqNzKvGjwv5N9yjp3nWxcfuPUvt",
  "key12": "2vnrA8DgQJ1fLYYAukWA5mDBVSmCiYnhyTxc6FcatU5mTcvHwfFEXfZTyUxuRnMWgj5kMXfutQHKZRdjoN4ZVpjX",
  "key13": "2F6F97f11xYVAXokp3qc18JuzY39uEBukJCJo5AsHbYLrbme9YYU7KGrUrYmy2vMX4m3Bw2jotcPuxAwYV4FfcxV",
  "key14": "x46QehvczqcqR3xjYM75oFFbENtpXeEsRrKPnbmRiBZRDR2joYbzbKNCU7t2z96GpqKvUyCSytP8hePEJE5zyJc",
  "key15": "4P5k5UomssnrtnLUtvHLD9guLHi43TVWQXJdWVJWGzdz3tMzZgAEg7LKg55MKUKpbC3YY7uQxL5jEFt51k6TVSsy",
  "key16": "2Nntqxz1fxPobo1QmnLe9g2QW17GtKRgHTPEtmHapmzPJGvcU5FVFco5fik2f2fRK8A35cn8tQ34ZktcpHmBt81x",
  "key17": "3WW6b1XmCSB8mxLGNgat7P5ChJ6HSsjfPjU9kDDJXCj6T9xKDEkK9zWmR4xz68uhEJYWumYeecV2hRd8ewvZ6nGA",
  "key18": "4dBoc8raPEYPhEsQQnaUZshF7qXn7oFEjJcq3wHjBVuWC9rMrxxZvLMXWwUq1s3KqdZRj9q86KssYnLPqZMdTGqB",
  "key19": "2MDeaVwwhyXFiBxDjBDKwjGChm8wpjfMZWdvBNSbdFHaxeiz4uDEqLx5g1Y1qwC8k7C49iXzhqQ1qLxU7tPoGHNW",
  "key20": "eCMzQj8A1RgjPDaHwRmMpG1sQ6eEQvDLmpbAx4oHcyzWcZUyxFuDcuapDP9FmW81YMCqcNXFnePhsFKCkbsGFtP",
  "key21": "4FmNLchxFrhXPgFbvbwgUZAXdzPCTsLnJwKoL9jgtQKWuEdaWcdtPwD9RiPz1KzpJDQERwx5fwmkibsYckzEZiuy",
  "key22": "65s1QuwHBHmXxykiTaQAdp7GhKXgqM5Gg9RVNaZHK9KSDDkoNWaXaFV8xhUqt6MHp9fpGsGT2JD6AX3fMDqV3dji",
  "key23": "2YZM6xXt8dMTbPrvxyCwsFnDyK1EGqF74bAjGAta9QbrMAaX7cN358J8Zq48cSpRdMMdQqhEVxUd5xu2hf5rbB93",
  "key24": "2LcFPBL4EM5aSTfSZe6MJLhF6d7kT8dV6gVKUPAQ6Q4vu9tRD4u3i2uauCVdxC3Ne7YEzqFWxmas4onyh8v47D8g",
  "key25": "3n6qLJdVMNQAhGrKA8KjGDeF3qzWeDUvJeGsHYe3heGkFGpebuGgojNyi6GnGKqQ9ob5RNRdvVdWaWmpqtKU8XB9",
  "key26": "qyvbf7ZgXai1AwsMuwDUfBmudCXfeZRaawJwRucy92hftk8WkGj8gEYypscCQv8GqgvqFEUcJf3cEpUyz1EaAtp",
  "key27": "5DxVVb76MoxmiGEjpq2ChjLuRD45Ui5C6NJCezvhjyLZZJ5LqtFn8K3qPCBzV9cpSCwgw5GRMjM6AtxibqcoxQEy",
  "key28": "fXuprS1dHdG9TBTc6myizn6K47J83z4h3BZ5oHs7V1PTf9HgQMvFvvxCbLSfbznj6a767KdS8HwFHEnftiNMS93",
  "key29": "5E5bAEAro7skMYdXd1Pqz8ccxnevphc3aa3sE2T45akn3xsc1GPJaw6frHcz4QNdbDPthu7yog6Zicdjc9XvsoAJ",
  "key30": "5KY667hqV7Rd3cbvaDU4S2NaGFvyMn97FJ6jPozEkEQ12tYxaRMNfzS6B6Yd45G6R11qD1pEx3FTHUZ7ZBBCA8LL",
  "key31": "3wuqDPvGB61eYZunsqW2x66oComAELi4g6pBLxVQUjHEoEFLoCiXb11c3NF6AxaMTsLkcTViCtq1137GXbTHv5un",
  "key32": "7GBnsXNHyhNHzEt662HhV8g46KKnK6qt7nfYJjoK9NmCuDXGurQHJkq8ZWtS1pqKc7E6TtrH2Jfq9aoYLPMqLDY",
  "key33": "5YTmF8DRWRKR5GybRb16QZKVjfJmdW5Qub8JyAVdAHz2VYNmQ2HtX6bBKiNKqJBbW4AnQRHwT3cYwzzXMCCuE4hK",
  "key34": "4iSD5xvDpiuhP1LAheHPmSmUDV6jyD7SsThqYAQkSCuAPD7TydL23Xi7RAqyu6kPHMVMDrLn75PNLen1na6jVDSB",
  "key35": "3e3zLewtPV4vVPYwaTNgmM5tyyCHVXTAXubnPmPqUTiWJrv4ucweEgP54Zrrs5CR2nq6oqaqQLyJZNfdojsKSNq1",
  "key36": "5h2CUn7SxC3t28ofovXUqd6rddwufvgQfPCfnYYLCZCE9tEnGuwVDSisygrpgi37bZyoCB6meqFPjYuruABqBWjo",
  "key37": "2zpbMVbYS9mcAKxXee6rcCVDpq9ivZRyd1q2mE9wMvxfPRfZH9g5W8vvY45a6EMS787Y8HHTa9DwWPDw77Gj1T35",
  "key38": "26fucBH1Bg4hooFMP4Yin19QoJGHYQJ8a2No8tW5w8CjjTkjVyYp6qeqgnCRdR8r6a2egnBQRTb1mS7DaQ2HNB3w",
  "key39": "2hpmZ41donVxPy9YTesjYCMuDMr18xL1WAtCgyYLGUzrmHa5GVFd6cfa8oGZ34KUc11UMba7HDjRTvNSZP9AHGdE",
  "key40": "3d9uPEbqm1Z3WG9uist3dHjSGNG8EbegNCWU36BhayLQ6C7znR8pgxgHzYfrBcoZ9ZXqAuDAFu6DLAgujweDA4NM",
  "key41": "5tgzk5PVMJJeFkMjpJpEXezVxDnuoT2hHV4YUcr7sHHiPU8FebVPjksCynSt4wWFrPsdoNL3z2ZLLCh4t2m5iCUu",
  "key42": "2LZFnj2VX8cRe3gDMzaRn25kP9W655qp4JpEZxe9zLt9XXyg37MBB8PXgxwvfLN3vsiyXmo5Zab43KmUiTEHiixm",
  "key43": "5XAw1rGSw51jBfj5AqRVNZiBLt7tmRxHH9tJMxLJqTWJVj4vpUQA7s8yfT6pnBiVw6BddPnf2DPvjkLjtNR6JcRo",
  "key44": "2x1bBqt5fFHzc6zX4nndcZUx7rUKwgbDEbHYbMLBiSUXaZWyyszUAw4X27aC4aGgTZxD7bXWqcVdv11bNxSeKNg7",
  "key45": "5aYEeq8Y7HUPeNb7vDpVLepdwDf1WmaWg7YtbB1qdafZoUqZofaQbZXAhG7x2rLwcwJ86YT3cKSaghLm9UDFshqu",
  "key46": "2E3uN8imr9gVJJYn53nzmGzpy7AE1uRhnA7gUPhjvW36qCZZdRBpJbbCAuD7NPms3umMqvmjcNg5sifcbn6JWUC8",
  "key47": "2j4zRdVaEC2SdR8g7JsSkTi5AhZ6efYJAJiS4YeatYVT1AobTUc4MpieKmgET4FtMr6oTD7baoFZLkXnVk76wj1C",
  "key48": "3LwsTS2y5gxUQU66WeBuEB4ste9xp5Ph4agwH57c9AajYrSyJHQnRVf7eMEaCYN6pC4MZ4d79PvJJtciLo5jd4tY",
  "key49": "3WANvwFKJXWaEWC7HS1uR2wrRuyMThcMkm5dotAY4HR2kN2nBdqqm5KMfJC8gonB3EzDWhwx62b565dX8Nbanw9v"
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
