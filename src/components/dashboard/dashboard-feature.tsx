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
    "2m1Gn7MvpMKRHS9saawhkRrfwhAQsFQFRxFMmvAvtQ17zGuNd2C1VkLpo5BtbTeSqvdwYNYBbVKMBJvC2tFqecbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vwFkDiRcnpULMHtdLTFDxhM4jP7uGPej3261RTidqh8r1s5MiaMdKRHkVnYYpgijdP1myTXF5siFvQbEEkUmKk",
  "key1": "E42rkLbmephVg2MRkKay6LrCRE6BPXCfoAHGi9ZwAmAnAgwKZEjvvYKxuvohmacSpaGubNCGrLPd7Kc1eCTbd4y",
  "key2": "3MPS36tpF6YpHSN2j5jXvxCGz5BykzrX4ECiCvUf5PBDHqb8iYiBdfGoiQqnReLgjUXcDo6VgMvjafGjTeHMjuiS",
  "key3": "5ZTr1YfUQtPaQ4oq3B7Et6mUnDph3y2syqfdszJr2oupYy7WSWM3yVeqR7WCRhrZog9hbJ9ysU5FkNvqSVobXu8t",
  "key4": "3g82NifmufartDPWjvvbeiPFL9mBR4k51fbcXG6ubdxPXBQ3PyH2w9CnP2cgfx4GN6uGJkDCXLfug3pJjbSPNvPK",
  "key5": "3DvVMTc7bith1HwMq7RTHYyrMPTsymPpAfyCqma8AXEuEHUu76VFShYibWdB8URegUgwjP74LwxJEsL22Zrj3ZQy",
  "key6": "5rr1XhEnuFfcLqivq9XXgZba1au8WE6rE8MNfXB5FHft9D93K78RFz3XiT3unCfPSmtuKvZug74ikJqLn5YLL2dw",
  "key7": "5yDeqZE7AgbLWeft6ZYPKwTMp3bngd7fZqA9vwz4LQS3vzY37ovhjrcdmgvJ2FUo2uKb5xkaLeg8sgFx1MGne7RQ",
  "key8": "3kvqFAzPuKSmf6seojwAv2Hk6d69jfKt5oBqACV3hiUs1NjjxXo4ygMVrpjq1gWaKpaFqgLPnbmEKtSqyQ2hHdwP",
  "key9": "4Wjs2BWSKoBbUjjoXUMfGRBPb6w6jHTTdcKv5bSaKPJtj78QYMkoq58dJ2fHwcNbQh3Fvhf7bDdD8vwnEnSPpzmP",
  "key10": "2XKijnMvkNeMeG38zEqaWfkLLzpB48mcjNoEDXNyYdAUwPxkhBDywKKKb7RR9BuVAxZAzfAiAoLzT8is9PxsjHV1",
  "key11": "29rTKmcSyHYDi4zPUqcpTXqZ8WtLxTgFj3SLsWV7a55zGVhRDnDaDxtT2LBtRacskzozdxrVpiiRcnPUW4gLbPKA",
  "key12": "2rFLjzJiLRLG3RkECkNscK3rXdbRx9jUdfpmJjZjBKPBBRBmP8MnN12QUwyCo7BbLvhQt8JBFA5WA9C4zuFLAoTv",
  "key13": "2vb74syS23ijsGc8ywXKxYAGnTTx94JVH6A5Fh4eJypSyWhrYqfjMvU6UZ2mrVWqPg4sTmFQ7VApz6coLNHaN2Uw",
  "key14": "2j3M5bxMYTzDGq7F8toA9DudJrpFDWkcyTW6C4k5rQ3ktMSRUerNp7QijqcrVKBq2jx4haHGWgHMFALtFygc84FS",
  "key15": "wJCo1NTJc5cDChzHukHuTZjDETPvBBGs6B4xhBPzhUS676dnZXUvKVqusqVevUN3xD3q6W6BaiGbiP3y6QQ5ftj",
  "key16": "4e9DoKUFi1QqqBkyoJAaCGUz73sVHx8rMBRGGMm7TXD775EXbY2iqXSsVxwMQZ8twLSyLYsrtaWg2eRdFFo5ro6p",
  "key17": "8nxUuSVh2zMLAVULc7EFT2Pi4mqyj3xApuYoespiXiTAsUggofDxdwVUSfGH17zKMmde7afvWW4DaJ26pA1Pn5U",
  "key18": "5ZQeP54x8fGoRn1vGarKWPPGVSwCWuuGgvyJqa8GQLxwMqZJSpTX1yqicCMEAQ58vsZGbuvFJ16r6ZTJk7jWXpXJ",
  "key19": "4DKXHSfWT6MX2TFoAXhq1io3rAsq13awpBF3abkt1qnRohUBTViA3BwksoU5KTA3HGLwthFZ64oRjv32i19NBGaf",
  "key20": "GVG6oQ1gN5HRZCzEzP1H8NBsbBgQpCuamRm4A83M76C9uVx9NgrmsN3Nt1Skf9vf7mSVrtHVjZDV5TBjFmuYg3L",
  "key21": "4oDG5BuXsn9wqo6fz78PmoZmK9p57humQ2TXNamdsL1BQYSL5QQ2EFni4sJqFJw5koXDgVYF3JNWVe5LYNPyadpn",
  "key22": "5L16xMdniktZtTPeuA8SB9q2t1wEsydt4juU2V5qd1jXdY33TVwP9aSrJxzTAAepnZGyTdueGTq5MuwAERcVTXJk",
  "key23": "hSBqeEjY6QGy8WDpvMsiQxt4xasDAiVZNJo23YUHzsyNypCbXQ7qEGe8gHJ7pXjfpCkKRAVk5X1wnVAudHYzTJs",
  "key24": "5grhJj6UTufrJaLre1ubNrXDFwdYBurGf6gQREscXoHHcEspWx9SiPp1vjPxS6qPLhSRabenAiKA7rqvNXYQRsEK",
  "key25": "3i8m1ggGe4Yr4ZsJGGGK2jfp7h4whshLV29v3K3vrEoL1uKh5c6xUy9vqxQPmwbKNuUbgs2sHgGVSpi3jPz2Cdzv",
  "key26": "We4yGmn7AbGxqZsojwHuhEiCpoQCjYw42YvZkS5Cyir5i8xCnAEzgdM3GDCigwXzReDXh7H39stuemCqyKYRq5j",
  "key27": "4BykqZeDnHFTuGf6bT5dZJRNP1PsSFh8mxLxqWf3cYT9vKcPdJLrgMjAJAYFde8DNY3VWVBCsRmV36mA2E4NQdUf",
  "key28": "3kNGkiq7ns6De7Jo5Z8JUCVqN9ojLncKEU4KR4Y1UYFjLbMN4PCfF8FbpryYHmZhzCBYohiHyUS6dZWVXzYuxEZC",
  "key29": "vt3o3Sg11jUtaukW3fpWfk7sGz1TYkfkcjhsp5g4jf2JBWPqP5AkbE6Bzi1kN7dEuZPCiRLguuC6FxAhXVeBSZ5",
  "key30": "4wSQHp8gKoQjMAzEtQtUmYXSYRCaFBp6nkbKyEaAzCt7tqg6XN3JpqybiNDcc22AR3u3dRGKPqbs9tXcoGGstxP8",
  "key31": "5n7ZSVLFJYvSZgqDRCuWYTThcxX9h9oMTGaSNRuyC7xV1HHw2XpF2B6SG4UBsihjAJaGsFrFmRnte5EcYXSduKzk",
  "key32": "57TzykotjG6kgAUucHdPNjGP7UTPGJ77bH4idNWodjwDPkrH5uCjMzxpypKkuUcEtRo7rbbFzgsPSQ8LbutuU9yr",
  "key33": "5UjnnPoNHWWPAPUbNtNixvZUpWghfvKJqw5DJMZuWm2d1s4DMBU31GBYJ5cBFxV7SmP9UFcjL9ssdfkiWfFQ4Krc",
  "key34": "4wfvw92AfoBbJS7UvMu9ZGDENzFxLxodH4RJzQ8YErvKnp5Z85QaeuFpSMTMPMWSkdVmWn7b1iSRainsMEhTRqRZ",
  "key35": "2CmUjsX7Aunfa2uQDWYBg4KkpWKkM7oni46faRQuMYtanqjZBRpxJRunPA2yoppmuXYtHs1BYtytWXP3xVAZh52K",
  "key36": "5Jsze4UEKhSujbF8MotZSLZQN5YNCUfnEWicSCiyZbmn5xFwcZMQ7mvHzwwgtvEArBdt5C6JfSTJsFgEft7RSoHC",
  "key37": "27DVoMbv1JDEGwXAV3br9U3fkJXY6wR4SGtqP6hU9Sh3xGsLEFoccjFd31g5fJgTide4GZG5DGMBNhzZsq7tQXGR",
  "key38": "3gKPKPWKsYyAwRGYA84oQsmJCVxezfS7RtjxkF4Y4PGqs43iRyGQ74CwhSbzBC2V14eNrtGG2HLpNravyMYeNiNs",
  "key39": "VsRm8TYmRyzSz8r1v3tu6v5dHHFHK8tP6Lo1P3ziX47McYB1odiYrxM4F5pa42s6EdUX1qpUfd6LKi4FaH9apQp",
  "key40": "5j6a13mUFHQ17qQ9bET8Adc7ZWpADd1mzmn5uA1f5cNdmp8j2DF6cAPbMg14XoM2bQepdi1QWBcu3AqnAsDtiSi3",
  "key41": "QfucDjcdTQp6Lj2ARR16GhcTMN1cq8FFc2Kku7GBibKMpQApv4Da1ttMwstX1X6Mpp11WoNfLrcu1eUDViGHqTK",
  "key42": "64aXN1qjfNLufsrUKm2UEkuiq8oqxATPQYjEb2dEUDzePVuUvJ6e3Fv7m8hwe7HtW7CQhwRSZGkqs5PGmF1oXu2t",
  "key43": "5sqCLcuinRZnysybAg85gMA4p54eTsGQyoRaKtv21NyMtbBjY58p2sYmawpTfD82h3KUB6cVSLCooGuhJ5FD2tYc",
  "key44": "4nC3dgHECR3LdKivGdDgjbWZ1DJoicjwXFgwq2ehzR1gYvehDkxPH7k57f9mAX16ympTvXU5VKwQiPed2cXKb1S4",
  "key45": "38GFeFLWooiBxr4E5sB8LdxKU8RKtQwveu6AujpKwrLoH2noY59Sbr3S8HVjxvdcrPLNYx3nSLATUWcpypPdXaAk",
  "key46": "5r46UE2GzuPvQS9ydzszBuKTgToWBFzzZoYhTmdHYa752x6kfeTuUiwr8UhJZdDcwP6X2brweNUzAgucTrdmRWFh",
  "key47": "3uf5NjEpEM6RR9mg8rmdtJfiabps8Q2mwcC7aMkoSffhpNvAUCQccSEeWZzurynJbdsPU7JN3GnyC7zZmHd736vj",
  "key48": "2FzJsTgjwt3H3u6H5vZzNtG7qs31siE9NT7dKELGfeCc3APLu1kpZXWAMosKv533BkhHqYCa1ERLGAKsnYQaEfrv",
  "key49": "vs4Jn1rJZWUUYiXyU9sgMkAY6tGCMXCo6MJxTFcTKSmBeQERKEkrtVjfuvYNMGG3X4jP4cySCc9UadwHgWb5Ggq"
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
