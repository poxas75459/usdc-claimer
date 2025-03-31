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
    "4H4rsMidW6hKGF3hEN2HbHzSNitqL6eLjyTT1MYtA8JhTxx7Wv1MhCVxZi4YM4r8tAjuWD9pGVk9ZYXQZK1HhEsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wS6jgCX8aQsdviRtYkzJr7drfwSAnZdzYqt66euMwrD5YZRVgrW8gthPd3n8G3x9rmL2XEb6wJWeS4iFjQnzjvk",
  "key1": "3zQgfYEa6DiYmc3GMRF3bfn7CbRAbcmxg9zDYLis7ytL3t75WgXziFtKkxj6PMCvtDVqpwaJwH6V3b6HGBB22DwF",
  "key2": "532XoekPRUHfzf3P8snTg65RixxinD6wENbdHfuq4HkTzA4GdfD4Ud6c3nL2Uxytzftyu3dtLVhaWkebxymNZoju",
  "key3": "2tCdCK85PX5yaBe7ghKoRQLpAmaEnd8bSBpMAhKFpCN4tfbgUQeCb3FaJHUyMvT877tT5R9nDTawm5VniZtRe92z",
  "key4": "4GCPRruKot8RycRzfgcQF5V3iBiLLoyN2kG846DFJ8uUEQkvJo4j7r4PKRizu63HvD3aSaWxqU9cJj2i3R5HPmdj",
  "key5": "3KqUgtfzSJVvkAbLmv7oKooNjMYSHMrcypiiQoBLbW4TyMTHnN5kAsGeCQFvW6ZEFBwYEd4pSmbFUbAZ5kgoiNKu",
  "key6": "5n1L6bYuVujPaGrzqQjLwFZzs1A2ehc7fv34CQkHWf1TwiMoMoxpkKA9or2oH1rp5eNJZhSKGRTRwUUiQC9kY2e8",
  "key7": "ZaaZKNaLkynLXsAF8WXSZSd5CYfaNAyDQ5xbxmw7SHdT4XgQfq5a9rXHHHkBn1uRZqUJh9UXSQPe1X3FJeeFSyW",
  "key8": "u1zpS8uAjDHN3zpgWoxkAqcYVQZmaBy3sSwsNCsYreUtCcjEK5CQ1o8SXgTpSr8jPExgkZAYAfKa5aDymVPQeXj",
  "key9": "4j1xVtLFWRoXRMzoUQc6EPxXCfomfFFM8yUshxYbTZ9BWkL4eP9CzBkFtU12eRh5XpBuvJ5XFM1HAEgdMEPb6JFh",
  "key10": "4GrqsWNnJqDUiK99boi5cs8yXsCdAswBNEgf7C3Ln6CcXsNPcTKYevqQK3JAp5rFiZT1cBdZYdsho2gDKxbm96PX",
  "key11": "3nJ1jJ1etrDf3cKHLrRTPqCWHaFdzpFo4Vovp573hCqHASC9HSsJ1CQN2rHT6C458VgA3MFxjcFgvQXVkU3Azkpr",
  "key12": "4DNjGkmzievrjkc4xvypoRUMz3AghMHDbg36JccKrDTyHFQuNZ7yh7fDnqqSfYjub3YTonRosAfzQmc6TNyXQYEs",
  "key13": "smp2E9ZLhRzmX8kHuHzYUKTyDA1NPHTeTQazp7aehn6tQyr72mKGX5NaY5ts7tGj8QJUGzCtoEa1W3pBmTfE1br",
  "key14": "37RjDPq6znLJFYmwwaVDRq1r5wPQHSyamvFvcxoMt3xpqJ2ZiTacvgPKibz6yqKLAaiXY1orz1XULuCjEPvyNK7f",
  "key15": "2UfdSYa3YpZjqAJBjnJ4iymxMcB5mjAudZzRNkW6MpZdpat7c69AiPy6qUw2eFT5Ww2RgtuJ4xURF9kcWaD8Nn2j",
  "key16": "RpYuh7kbXS3XwvpJpxUksvz1gU6E28EKCensRavuGwLP16FMmMiJqJAUo35kMedW3ZpZHfpyiGVVSThvqxCLaDB",
  "key17": "2EgfYEWTJiZMKVZBVDQrFhiubPQFyug1JP1kNWf7iBKJkeYo1vPFRahhnYo55ZPUxGP1R51xDUwPXQPrgFhkANy6",
  "key18": "3XYLyBrkDd2pSdt2sVDnGCstJh7LrKpixum5rtWmK2rMWmc3AkFreRmxD6s47VNmBK5XYWTvnF1LjksmySpwBZMi",
  "key19": "udHCfrfkfvNL298HuM22EA2nQthGMEEFPQaJ3STdb5jHgXebCUSkeon495L7u585RTmkuZgzHu7SkWVKMwNUyKj",
  "key20": "41SMWooPSj5YFh4KGeSGyHYwGZEPmk9XS1KKRUNFHVzo4XZNbWRxT2rbgsThY4Tb6rgWAmkb7gbGKkWAN4AyWS8b",
  "key21": "5szdZSCUfaBfJvGNS5XJYoTtH9g2fg6rDnniVQvHwhNU6QLT8AHvuvAaqS6QTvwui1iHJJfW7SGWezaAFzidkBF7",
  "key22": "5MiD6Y7G6L8G9iHxrFHB92RjXHWojxNkbUSepMxNqGJRmW3SMhU5C7KfNTrxyuAktC3LZ9JFpiwnKnFLDUFtLn1y",
  "key23": "gTPQmnug9LHtzeWMyeHHThxG9ob349Nw2ChtZWoCAQ37b3FBcguA2aRrhWwjJDyyyFYajHxBrBZ7NcbZAxpmL23",
  "key24": "5w3nMNwedgaTrdTLGKsd9frLjiQP2rQBiZnKwtXEkiqe3CGbJ6DZF2dF2DjSjnfRNpM6YtmQFdoaQ2z9YKsvJuYX",
  "key25": "DDpWEV1tCRMngvAPjxHwRUMJYcJx36efJCKF8k7k37FD4gbZM9aLoUYcoTNvvd33QPBCpbxmeL1WHzpZ6wmYky6",
  "key26": "Uj6eCPfSmVDb3Ukw1PbXMzj1kNp5vyR8JwtpsJYVzdZZUBKcddiDqYxVBsGepxH6NvU1XPRGvBcxbRSzZPb1FFz",
  "key27": "4saPjkUxvQcpGJD1cr3kR1yccGBBKGXgCc1r2mqpHMh7DXDzJFo4EatKNcpg7z9ZKR96pdRBwn32oR3NKW6oVbTv",
  "key28": "2FJELyYkvLGJ87sGW4iMKSAFXK9cMcpTFZ8cD45PKFiBH1pdn2sx7ZNaabVfYb1GTExgP34xF9EEYqninbrvuPsk",
  "key29": "46WYu1QQ5dD5S2MvqhPcYYgEtrLppKgwsTA1DsS4dpjG7SVtsXw345r4h6srkEvKGGFsLDqw5afQgDPUKEyXNc67",
  "key30": "vQt4bpRkwdHdjgwmAADa8XbBDS4KGcLhJAxxvsB9is7KpVz78DsUzadQKQXa2TbCdq98Y9ViwoT1WHdXCejL1Tz",
  "key31": "3dY89ACMiWCo1DRowG1Ur62pkH71Dt2ReGe4tUwcZMkBNhcVZS75QVeRhAef2zhz8sZDjtarko9sqDnU5fG2yXgu",
  "key32": "5UpesN4vzSLWP4FkgY2bKpaHdvfSpdVE1MgjUFMUNSy2j2DiGxkpnHymKigrtFAhadCvWcLc4yLK8ETkjdebdy61",
  "key33": "aAbz4iRQt4zM94UKTshEd7EfJaVKPcEBREmWrGZk4n2MCHr3EvyucRFP7ZCF6SD35narBLPWMSunJL2PEjG8Pnb",
  "key34": "3ybeYx2PY5XZBAYhf4kuAeNhUswHfy4CuqpMhcy9dCSFA5aTNDUrrY5VTmzFngvw8RnB6GZr9C5ZFPafPLpbEY5D",
  "key35": "JSFRbXdYq1ygrEUs9QDpbZRKU9jqmQzaehp9J3WGDshUi3r9TDbodjUfB8nb2WcjjR2cAfaNptDaheFSKxbKHdo",
  "key36": "5qcUqJtDrxRpNffnLc7jCWHS2BVYzjtznLEyk6sYCAwaFLVgz3KUPfKnAHgi2QgyPciCQzaMj6SsYMPizDcBoYma",
  "key37": "38YabdBRHWGY4tXnigfqHaWNCZdtHN57zQueXmznxs5zAeBfSmHoUAweMsUYPXFZYSoVHxFLRqGN2gsxxK1jh81B",
  "key38": "35vtveaLqN2nXAyGtvT1nqRwXSctGFkZyDeYzFU7rqzbbv56C8sqqhGDEQFfAmrc6to3WHoMLtLNtB8AnakRoZmk",
  "key39": "3Tn9zQgyHPRj4RFoDVHU17YSwraov8FcUSc8VaERVvDf5QW2kNWSi2wryiDT3efhxgastUWUAYNk4s1mZw8CGaSh",
  "key40": "3jQZQrSDGQbMWDuCyn42JUhuUuo1f2SKvFGcsTEgiaw8rJ9sXhRjLjkqrwFBu8zjXUPL3CePmMj6HgawiwoN2FFA",
  "key41": "4aDBeQacGaUGpnoZhyUScvhDZ6UDDWEoyobXuu5TvmC5nkxizSXmSqxCSioJuUPsn5Yxza8PM4KGeJqe9vekuDeS",
  "key42": "31WMmiPf2LvZ2Bc6G2mnoKr8k2YxSJnzh6rd9phtk5TYK4vuvnj9UfxxgwJsDNpBpGTQwsfvfGFFR7ZFxBpmPvpj"
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
