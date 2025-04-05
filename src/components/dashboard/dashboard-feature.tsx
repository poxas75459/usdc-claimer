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
    "5KSzAUfAQYCXZH8Gguh745nRrKpuYZinzd6F2sYdJbomicZka7sHmW93A7f1U5WhqCU51LheB4kAD8PGdJHYBv9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmsokFU7BfcDQmvvdN2c5ZF31iiSUzvtYwQ1zir1iE89vVayxe8R1gNYst6BVgGJStRRPqysPQ8ajAs3N3Q98PH",
  "key1": "2VzKo1jBRQV9UewdwgmcgTuXY4rVgmYFoPgStwh1o7SnNy16zD5pwYtVuyrSTGVphskSE6wu8rnWzswAaS9EEzvt",
  "key2": "2dZwLermy727XYJ8mNAoR3LKRM59ShgJZ8MZTHULwLtY8mdFzjY2Tu3RfqQGa4zLDyHAgUfdBPqkQm4pi6hVc23x",
  "key3": "5yZJupWfP6jjLD9wLWWx6LSKBH7YvB2JjU7Y9tnANMVY76jzm2fGDJHU4db4D1jL6fuvNMRBJP91crcCT5mX9zjg",
  "key4": "3AZ7BuU7heiwWnh6DAv6kiPe1cXEV47yfTSNMJjSmneEuq5sP1av6GQXkbcVoZmTXFfrUKUmNCsfidJ3565Hnbn",
  "key5": "8zaqCM6KzFCcz6wE17ZZ58ga1BUgvTcEuHREWoBmisWhCELLsqWZUMxdmfwavzuxBFzWS6aA3jyXyPwJfiwKU3X",
  "key6": "aPR7kBxEusqVB5QauGdvSvtW1p5xXD9fUQCvAVzhwhUcEdsbVUgJHRYDMHJqHhtfSLeo6mZKNnrjmaU5PTWkGpM",
  "key7": "4VozQZ4QBt2VgdniBM8TU3G6gjSQkffcRbAbxgzy1aQBjRUebNthSkuTHPV4C3vMKenXZep7M9MtSDVdnsNEs85K",
  "key8": "42z6okwLbVXwqEoVjwr67cHHL8ACAjbdTzTBTx222wBgu5f6kRuNrCn72DK8pnBpdXsaeEjgpCQ19nN4PxfLyFtT",
  "key9": "z3wcoHVgrnTMi3sUfvXetdch6rzQ6qvcgJX45W1qmkDNiCPenuAAEfdtWcFibnfi3cYnBazFTaNXXgpGeNKrkSq",
  "key10": "36YM5bNdQkvzaqTdAZaZQ3yaBsSWDbgnLu8gWUKxYvuhwaDVmVmgN8rBP1TQTqRKNpeNsPwGBQS9wYHpve3dVmxR",
  "key11": "3qbfdGekHAih4a8kcbGe3vDGhRdwGZrPUqcVbQRbG2UR9vR7RStWHVn71CidoZdrM3LhiXLeB4Q9DnxUovohKgkj",
  "key12": "2BDzh1VETE7Xr7XUyApta1AMc27UYB8tcupZZoBnUvE4dd2hciJfGB4nvstP3GQx76kPVUHARn26uE6AyYyV3HW1",
  "key13": "2zpJJd7V9avFbcDyHsyhJCTVLVjVHL1qwG5thQajqPWrvtpdhvfpsqixsebQQuG39iwA4EhRwKf4S4VdA8yThbYv",
  "key14": "vsbJLDwca6UUx1M8SdjDrB4F8aVqkKtBnhpx45Rh5LjFfd2rYWavmikUPFrNLVcWLeRuXxuS6Kzpvm9tYVeDhUR",
  "key15": "36zkxMS9vKLQT5GVAMPvJgDym4v3kE2PPzeEox4bUzyBccDRaDk7nhasu1T5cLTQp7FU9nNH8TfC7TXAReKSDMpX",
  "key16": "2caG3KLedAjrfBiPyavU96MfkYApTVQQM4iRBKtRAS83hjEirDAib3LbBn4brxsKVEnasMJoYWB42Z8ZJsaEYvdk",
  "key17": "4DZUVk2Dy8EMbzNUyyFFv6VXMbLD2d4g4i7q5HUzPMdmvqANqbUS2gCTAubdofEeEp9kkMPdRcr7vjK5ZFcAsGgH",
  "key18": "3HgCwRZTq3uVSPKsd8GbVesd1YbUHdEGSiF8SSRbDBUAb8Hk8gYy6opYwWkk8CzPS1NVL88oz8thgr1cbYTHcT2o",
  "key19": "2sc63TdEcdd96ePbygc4JrSbp31eX6FXz6cibpNLnvUC592wceTqFwLca6U6nEr5PNmdQpogTdRJ5iRRcPLb4fdg",
  "key20": "4mSYR8r42jodM4kNay9qDAQw7Dkbptk6kmeqZGmFATwbm7iKkTXNp7gpoBeSe4DRKAEM6jyXULkVTWeAujV5x2iy",
  "key21": "3yxaTwaxd6SykwSL4BWKpju5QpzQKcqsUzoZsXrWoZmqyY9gHdZmEgZnzBGw8oiw9ymQacTMB14DUER1ZiNrkUbd",
  "key22": "8DMro41mtJNZc2TbT3PNgMvTjWbVrFsWHb1hEocXYzPgr6iNtmSigoViU5bJosWhQ3axXamm8TXReBJZVCibhm7",
  "key23": "31xf5Yfk5ERHv6usqmSfy2jfgGAWYuapeoB5mBXAc18R5gmGWeEyXGd9jJmR2eTLsNJEwYEZ3qpTSP53txx8pR6r",
  "key24": "VGLd8FFiBLQK7SDApfzB5tHy7A58hZX1wgnEbV6QzU1TRxshvvwdHe5YvwSSbERdJpFqxh1qX6ov4tJYkpVEemY",
  "key25": "Qvq1dbRvzaY5XaEXNuBFoLyqkYqWLth6coMYWE8g36MvdqAJY8j7YQRS17oZDKxr3pXUBihGz2z6WMEpHCMLUqd",
  "key26": "5ZGZeRdiG55LjQiDDqptPqChDokC7bgAHCfdjgbzR7ayHHaaZ9rm5RPpHkLPnsvkdnFJEaxUoFcYaTdq8jsu6BDD",
  "key27": "2x2QSGeNVnbbqkubsaBnWEYhLiYg8M9oAeYdBpoCxmd8cc2AkXXQQzhiKkzKiVwmm1sLGfX5tYzdvU1g55sS7nmh",
  "key28": "2Y3nHemegp7bAxBFnwDWMXcQNanK9xD7Ncjq3TxhZ1KXzQ12yC19D7SzXnQCzcymu2wRGfXgnaq57ymXzFM5rK4y",
  "key29": "4Wgj2E4AWB1tnivEMorY9mp8fkuHJyCEdMbaDmj4wq3BxaexxwGZqQBDokanZcHm79kTFPZVY3QdRPot7dmx1o6r",
  "key30": "4N7oSYQjzLRPcGGnyPMbpv3CGRCpPF9Dkj4yEkhCwtDDnMbtEV7NhCjpjzmj1LoYfGboauGvJMSuwAEXrshVxMd6",
  "key31": "DmY9XyJLKeFngrx2B9aiipZ3uhe8ZrdH9FV6JVq6Swm7J8QStknaUWrrJyDUaUeCocRcEpEyoEfHnuH5ccy8dso",
  "key32": "5FMsiMDmVNvRx8TSgPXhnnX755R8mcfLEC8bXsF29pdb2sUCDkAh2SuaGjyaz14ySe9cc97j3AjvyB17x6HbVYXu",
  "key33": "hSzziAQBUZznCwL1P3oE8UPMNwD2AYWmwCkbvcb38eDjmTYpMZHSQzyCUFz7SAizEMieQQbWr3f6dj23vNuoveL",
  "key34": "31zWKrFgwnvxM3u7e3qUSY7oUo7jPvW8oHT9WuUbcHo5FcgKofvjXq7Gr3yK1FuqQpmhuRAASmkHrVwiUVEb9ovq",
  "key35": "4cxjZH7oKg9b4QLjR1rX1coGQECkqqZhDG9mewrs7fgXvB5VHrahqQdqCWZ24yZJ6WxyHSZQGfjFgTiqBCkkBJ78",
  "key36": "4Yaw5EMkMKxnoGEv8ayTBXC5PtzDjhRSpyqKe6obN2yQd22EvWAUNodYCv9PVHP5A7e1GwaHMUsUQD1aZTv5hxYx",
  "key37": "4BkCnaw67bFGHMtmzfpwBTxQKmXYMsmiYLAZ3gB8rccF1uGRd4cz8QPziEMykXfAztcUwmcSGL6EZT9QigiHQZwr",
  "key38": "3zRMwaYfZn1u99k7q1Z6xWFnjZSH6cgvhQQvZnxpvLhyPCTjgqRqt4TNX296nbF3HWSpSEu6JaiBeBwgw3Et2tYP",
  "key39": "4zkyhkQbwtLHDdCLP2sKo78BNcw3ecaQrN7AKXpKYUbDYQgCkjR8xF5n9RyyYuar6q8nF8CzvShtHWfHHFppR12x",
  "key40": "5PYbPQ8wWHVr1bgMLeCFeCf4oVuLsD4phdW3N661VfJsaqAQgNtA3FTHT1QUfzZjLRUEmAXswpZp65hQhfJQpT3E",
  "key41": "FXLeNxnepLWonoCwu59dfMU4ZZneQ31EQTM7tyAnsEetggLVvHHjc4j1GJBfzEqzb19FpasxFNgEgDxDbxYyna4",
  "key42": "2yR5E1LQTxbr2AB6kKMfFAivTBoAFHhkEF34VUFfL8gndt2DvPHPrPu7QH4vGX26jtSiehp5Tov159i3BdWhDvF",
  "key43": "7HrVQKqMYSdZ3DopgnTxsP5dVDzPf1JDZPDx8nUwnxPfqB4KX1c8tTPdeN9PEejadGbicaULPSN5iSvK2B83gkj",
  "key44": "2ortkae1QY6aAGn9iVcNyquXE59k4JA824R7H5YwDJpPS3NvU5zhwkpexwPGZeFamAHpezkMAjyVmxZkr1bN63yt",
  "key45": "2YWF5yK6J57wWZBLqLHD53pzAkbvizpyJ6cUAThPk4ezkSxabMotBPZLnZeTWfYWcDKh3GGkZUptjWiSxwrzvoNo"
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
