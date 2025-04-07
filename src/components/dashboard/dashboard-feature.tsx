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
    "2ooD2B4PsNhJ78yVQ4HaNEQhvN3mjMbbfLzroNUfLjyR9AnyGGigN2wj6yfDSV5vihp9PYK2RGLwn21gsx3knycR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53a1KvuHCiWHduaiZbUcwHYrq6mUGugX5GrD1siGk55bfB4kGQ4qqhM2csd4pefCCZw724aG3cb5PuqTGnk14YtP",
  "key1": "3xSjKfVfZKduqgDu3qndLkDFvXrvvwCyCLHMwmCLY31XzEK6Tk3LUhSxsm8ysbp5MaKQ3GYoLvi25XmfGYETkCBe",
  "key2": "2uBsJN45tr5YQbdKqFxZa3vsr4Ppn6HJoE2BLapKJ57eaJzwgZ1p7JnYz1ka8X3BQTm5p259sTp6ekHDN8FBmFkg",
  "key3": "2hb48dCrPbvuoyQ6gsT5eGufJxNSV48Cioqx8M9tcVxnW3EtV5gLqEE1fXXSSqiML3Nm9osKJfvCDSVZmiZbSwzR",
  "key4": "5u8EWVkcgz6NJZckx8zdk5cQDYXg1uJtvMYF73z9Liz6CfvE8UENikKoiDzeKvKD5QZXA9HbRX4VZZRSogws2h22",
  "key5": "5QQDTsX7EkcVmgNqytZuGeV5EbZxzymZP2Qs2JfXz7wpbYAPivwgRdBChnVibsjF1ig15KRkysT9R7kmyEW6TBbu",
  "key6": "4QEqPFHKkpt9n9wzitwGRCWGYhse28tsfkA647rVvSwxwNWTCVEZHdyYgPCzAe1RxUP6ogEw6WfYs6ieZ1gG9vgt",
  "key7": "25vz3HifvE8YhREu8ocJ2BVV7k1SUBpmSo3RPiQ5wa5zT9XxVLH9Ts4wxnbh5EACjApiSrq2EFAXfp1m5xXX3gGy",
  "key8": "woZ7YXZgSd52i187FxzMt25XEbr4QzGRj4sygxxcfQDJdSjxXQ9RZChRJ4uzRoPTcz3KF4sB9zPnwNAgdr4BAuS",
  "key9": "3heQaxXr6MtjZSL4N22Ym67CqwvzDjdDhySyp6nvt8aFCoBdjXkPPWMXstFKwaVCbGAAbs5kWQLQ69dkHmXVHjAP",
  "key10": "2u6F4t9wLH9B69waR2MNHEsusAw7YHUGns1oibYjrkthJoPbia9KunhcVSGAJRpX8vyU9TdRVxqKmqcxU4sEogN6",
  "key11": "55PTSDPKUEe526jeS3HQ2zADyzYjfFyUTYBE8mf23MP8mu1jQpxyDoAWJ4JYecKPhDmbfA5vMeZyhFB5r1U8VTpa",
  "key12": "39i6bH96amHT1P1X15JzBVTKwRWaDLqqxypJjKSW6Ly4tfykzhvTfZr72miBR9WJfZ4VdxgCWhh5jUhwy3Ry21Vd",
  "key13": "2QscEn2898p7bGgs3a72v7z9cDUJ2ADKNuqmhMHbHMGGwvf5e2bcQbNriSyXUTQ349tFGnmTFP6UB38QgMDaRHG1",
  "key14": "2CVWaDkjyeNMNF8XPbAajt9nrFVXmcBsav8freAFzpj4H2y1REP6p7bRjpdL9v8hKpYR4g5ZqpafiVtQ345rFFaE",
  "key15": "jcvVg1Z2EXAJ4YoW6n4arsXmX4T82DdsN5vAF8sXt3n8WDJyCVf6RM1ffr9cnavJKc6mJ7asUQnjZC9zAYdYi7h",
  "key16": "3Q9qWWtoyFyt4Qsr5QYv44dpHVXVRySfZ4PhRswMF8L3DjYJSuay3f5rjarPmZR6Z5cMgsRFXC75qNuKTvwWaEjz",
  "key17": "5PH5msaDV8UGz2sdPGRYT1nJ4CnsnXvMYKWakTFRAeGxo2Js6SkZ23WcUktJixEdByq5aEeiuV3h6x1uak5zhesT",
  "key18": "61YZd88XmFJ48P3bG6qK5XQaAgxaKNQxqqZU6fZzN3J9uWTgBvMFeQV1QEbXpvxFA3JsBLxQ4haaEsdR3rK5FCbX",
  "key19": "5oktnPBuQ521FwhpqfR3Nda4tq8Fw7yxLwtJPJUUbzqpa5i1otsBTV7wvjDTNDbJDNvNL7UpziYjDTvSAg6jEnHv",
  "key20": "5zYfBoat74CLwZNfsqcp7ByCqsHPUN2LCY3HoxAEHNLVRoCb6hyAh9kopszUFRVFk4wNEntXiEWATs8M3YxLmPf3",
  "key21": "3VikWiBhVejTpt4ikj5JjLgfoDS9wFsZiHs1LZbvC7DecDgTVZYMjNhkUo4GMa5DfBpPPvT8knQ6i5fEDJkuQNsw",
  "key22": "64hEmuXh1ubGm9Fd4BPFTxePS1A2FaTtxLynYwacjFs3HwaShw9SVRBRVj6T3FsiFD5YhztqhFQHQEPTb5CfXcco",
  "key23": "hHi9aJm2MGi6W5ZTGgd9xLMMfxShKRNXmJLMvrx3CYErVqz756NwakcAjGWSTP2xJViXFXrDvzpkoZrJHx5pk6A",
  "key24": "3tNozaduDRdGRogq1zqch8moT4YKoivmfQdA72vU78xMEAZrtcR2L8us4ue8vbxxHrYmdJJZ7x4oEcx3zPX7k8WK",
  "key25": "3fX4TCc2TLoEqJUCPWe6gdK2d63Z9RoP1apDeMiLqqKXC25VcUXr4EzNmhFz7FnMw2oSSr4v76Fu7hJXgj169FAu",
  "key26": "3XNykN7gwrnaPzEEC5cvihKYFSEvAadxe4DU8LGxPhb8aYQKuvo4oWAMU89t8WPnEP21YDpJcyTiUCL9Wd9vA1Qd",
  "key27": "2RETRAfsxea8uBpswpEKMZkR2UPyn8JUYGJpuy4yFefjrph9jbJY3vbk1dW3dATfnCgnoYui4JoidBuv7uMUMCqE",
  "key28": "WgmNN82qYTWqjDF9ir32Wr2YtTNYF7cPGYQP5CLBGnzZuXnaCyUGmaF4FLPpasMvfb1eMgQ8sGZBxG3mqvM3Con",
  "key29": "4wLNWLRWr2WgYhuaQRq9XTJJ2QPgdkbu2MuYu8hZMaLTnQvG6omwxXkxHQGGa1qV1egay4jtGvDXc14LKLF8h5ub",
  "key30": "2hSavCdBuBWHnLSNJigCExEdmcQwvdnjBubXJ2Es2Gedko96etmvNSeJTg3hH5QJweV4rTpygh25iec5dem3rKiq",
  "key31": "4zQUtKktt3UtWXHSiy3BaTpWppu6z6oo9JbprkBBqV3dpi1e5DV7LpR6pKe8LEeSHLn7X8Y8eQngQib5q1LvbUg3",
  "key32": "3CJc791RKS2hBYGEJ73w3mKgvuyxJHhGGtJK4jeDL7jdLntgfsMLFoq1cPURJNYg8FJx37zum52y5D9xQLsywdZf",
  "key33": "3HH64NZczEwojXns65oBWxjwvSgx94EbLJFUKygeACFRxffrpyisgDRdnXuaAnw7EpDZabR4FEtJh3WgnWXh1vSJ",
  "key34": "2m7KNP3RDTP3w1XBXbKKtLPNNZJguSVThHfggcgmWBQH4FeMZmgMVqo7U3V3Cy3bvA5Tvo1rvi65bYd4E1dps41i",
  "key35": "3qvAJLyFpFYNEWBek4fw5VYdnRr4Eq8DQYq41HBKHrWxYw5Yej7jjmcwBBHQLbigXrp5BYo6MWyWsRNdamahRMkG",
  "key36": "4EZokmdKz1KhCXevKZgfXdXp2uNKhFcDpqG1XLXBF9kT6bHWVLwxKL1988zVF74MkRYwy6vnjUaTykW2vkLrSEWi",
  "key37": "2dEucVkYKnHwkvfUzQPCZSkx9kXq5ocWH6sAjCeKxrWbxJNHXFeWsVRxGwzJMbyaMJMpvHmjk9i4T2EWrd5P2Q45",
  "key38": "sVog2umJm51urNaKhcahLHPCak1jjdjnUqPDx86yfhL1i3oMqipV248PNUqSbbCh6rkaNHDA13ktTnVxkxBxsfk",
  "key39": "2GT4J4hrrwc1jZcwcgqfAnunZZac8Tgx5XPp74MrEeYqzc2hqdAxWh6D47UShxJk1532K2WLc2y15PTWbUszCVYN",
  "key40": "4J7AHFjRx3VADpnznCRa7Bof5Gv8SiWMY2mkrZvtNx2PRzUXfgLqHk3EDsBRAqvKtagzRhuk68N3JDPUVPKVFAht",
  "key41": "4ZknV25HEZLesE22oSe6KtgZU5XZhp1gndA98nPpcSFNrmJ3x7nLxtEKoseYuEjKJXnTcYWZpNMtgyaYpcnYYWin",
  "key42": "ocng1mJsdYcEL1dkAMZNKzgVGPR5rpRqepeSmSKpfTUjukBQ4oDmLjR4mvW9tnww44pyDJEjFBubqrAjvNaaQsK",
  "key43": "5GaPPKd1VH1fkb4GYD7DzmSLDUBnELfQVuRzKvsAxbuc3sGLWCBKdoswrxgqnkRLdxeHRcVYtXPiK7hBSf46bhA3",
  "key44": "2c8F5Jd1oKGZcK549uEX8TnxBP9ZG4mS5dodw6QdkZqxC3P4Rg5km3hLcdz2cpyigzypjupxyyZWTFWkcsM2MLMn",
  "key45": "2VXgi5TfwxMbkdQdYPSqVymBbv9wTPv6MNNC5K1kuTqa1QEC37S6cmhmUrDv83i6wUQFCMbaj1nLH9AftH1iZKFw"
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
