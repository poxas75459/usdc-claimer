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
    "5a87zhjuv15yMATctVeSHQCtZVdNGz5MWjk25fSuJiUPPakJukTF6TWM9bH3pL2dhRvNHGvubhRL6MLRZf1dFWgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVP6J3A3aecH4AcReAwDzzEDhQje81WCv5GToadghzE742dQAdammq7LWzqSPHtrjrAJ4w1EPNDPs6ATaJBEJ6e",
  "key1": "3P4ZHdMpj8MUpK2AGqGyGfrQSdsoZJRYAApupFMkWPk2kNxB3ohci2mbwRVTa6wMHNL6Wnk2hoJETd7dXKpHBimP",
  "key2": "52qC6DZJRmGqBJjeaR1iHqHzay8gS4ncazG8FnjDkcRhrNAe7pFS1jyJZTt1wVFEjHKbhfHX17jNYo2X7EboUAVy",
  "key3": "3UB7CZFMWGtwjn6DpdmsNqtrXHjzofhkUJ8bAKGG47u8WRTruJM5GRcwubpDZhNDesfYqgmHokT5222dg1Wz9Ag1",
  "key4": "3Ye1vtA43G5rHrarY6GgjcH5ALxpwZ6LYSSixaJD7bmkU16Kefe5fnHZavbuT9VaMBDK9vebrgpV9CuNcRdsJLcc",
  "key5": "w2NDqu9LKCjXdDQerDioFYLDMDMRMatSkeW2gzwyuZUq2RTmAT8TBsLKSyvybrioZACTtLh3o8sbNndgft8ddk8",
  "key6": "4m61a3yMywjhqa1455ZSY54foRvBvZM5HHcynBEuSGPmvNCyaZRK2BGwtTw7dsghk77n7i8bKzXnSLukjptLmWGd",
  "key7": "4NQPZMygLgTLvKW8NEsa38kEaLnHeGQXgj7tvRZM5q2HkUSBg6fcQQdftC1kojteefMMcEeV7P8bn8XQbQLhRuui",
  "key8": "5uhG74HCdSjyaBwKv3fxmXPXLhyw9JmMu9qiJmRhPocsmTUh2vNmVmArQraowPQpRkKgS4MVC6rCrt7fxvJu86TL",
  "key9": "22vtAjEtmY1WJfCKnE7Hmvodc9LrkEhHoeC7sY7aXyrWbsrQXpAD8oE7RrFTo3DvQwZVSWgnhRFeArAnLmAH4vF7",
  "key10": "56EvsY4wBMG9o4tjUpFYYy5PDUHoYGTWuEuW8JZUjgQ8SurD3i364656HfnMopQTMCqTTfgPVpxevDkUrrQEQP7Z",
  "key11": "2eTeqxo5aGtRu8doqw3LjHbSKzmZJT51sX5B2nNuihJHshwCjoGaKARn6HTH9cdFxwctruUHE9UFNnAHgADkGcGB",
  "key12": "4MBGUAhsUj1wzJBKnpK1zrFfoFqUq86UmW8PjqP9JyGrwY6u9YDCQQ19uKefY6UVVcM36Uhw27X7GK48vNcudsQM",
  "key13": "5NQ7FtmmF6kVyWdcN1CfJNnkEjJ7oaWwrU8ye79BMnApntcav6DNd2DwRygGcxsfArnqBDFwGDULUgJVWy7wiFUr",
  "key14": "37x27cTAEz2HXapEcoW8TJraPG8z2e4Kv2Gn9ncmNMNdt5s2T8XrRdHNNtrYBJu57zE3Pc3jE59H5wB56SdSmagB",
  "key15": "28MC4q1XD7tEsiW6abzG55SDF1xbTtoEk32h9bZBdzX5K9iM6YTezX2W9jzXZSW7jXGW8f1LAH2mS15DG7RJaPM3",
  "key16": "R8sRscKXRMHasEtf6UgUoj26FNoy6KTA4z8TWSdMVsS4wdpmrb2oLekDp8SbXydbXqKngLqhgnKMLCda2jaqH3m",
  "key17": "2uGv78PyeMWPyukV9R1uJtkb9wHVVRdsbV2cDSt9n3o9D9eeKjS5gGf2MoSP1e2u5xAgrJH7ywhzZLSEeh9y5GsB",
  "key18": "37oUaZGnu84XdtXqxuPT87M3viwKk6KnxdFsWsvDGC99ag7hVyXv9AZj3Xq1CjyXavjYvqeDhTXykRQCtQRGkzGs",
  "key19": "49dSvS4Y1U1UPHdH7WEWvbmufm21MkT9idEDsyhS939dQZ8KZ1fBqQvL3FVrsxzNKBow1wXhshPzZWKZaWP1pZLe",
  "key20": "4wTqZRc3vxhCvAGtWMiSbNcC66mNGUCQoAHoXMKZUJXoKsyP4YKKJYzUEmYVu8TeVXTGhQYCygVikzpf2Yuv6Uqy",
  "key21": "4eKd6dMfU1wYC7eGBZZC1XLX2bLKq1BNj8THgfpWty1gWQVx5dhsiBGomntbv1bWR3UdtUvTPao2qivCHwauC5Cp",
  "key22": "2ohTKhDRf7UWmNCvubvVX5RgEmwbtHc2teNPHusFvyaMGzmjVycr5R7BCsHVUAAc2N6ArQ4q1fX1ueMSmso2zvxH",
  "key23": "3cgkAP8P3fza6K7UtVfuDxTxLYnCyHyE4ALwh8Zese7VZaB8z7s99sxmDeazJV7wVBNwRte8eiE2wUVp3RLsMb2X",
  "key24": "2uUxfsD5gaVoY5eFWGEFL9Q5JpjZ9Ai7QQ1NiTKjdhQv98ajbwPeya6tx27ajWy3KRYYMZXL5rTZfoHNwZGvv82M",
  "key25": "61RVeWXtbeZReti3AqxBWqLnmdLu9y2M4BKjcVhiWyJTcDWnwrvs7mfrsN9EtpCQXFaKXjDEdXDwzV2cSBDRnSRi",
  "key26": "4MUmcoB7cwsCX1qkrmMBLgciMEbXUEQgbeK4oA9gCcurmiiJDqqtSBZjDwW9bZSa72DgHUSHeBCFK6GTLddPov22",
  "key27": "2sg57BJiyJKQribXaiJkhn5PrBV8WW3LH79JiSrStQe2h9C462kWHXiuXKriSX93NgCe3USufDZQdgoYh3tcNQHm",
  "key28": "2Di2ai7QD3bwrsW6LhdiTzMAwgMZXvecVVBTmZZ7HUR7Ri4BBfhgdUQc4aYFWNpmpr3y6toMZMkwXDFaymSXR2ob",
  "key29": "3r6xPZ8t56JvztphgfDXkpagjNUAbbUYp3cGtzUb1cGAiEbbEPn9Hr59Sia5NE77dyKK6KotdyD2D47peocoDFs5",
  "key30": "4V5rx9oEYkTcNTAWBQhym45gEGSmHQ73bHWninYgyfvYMp6guSwnf73Je4MdLSUAtxk3TmmSDTeghhbnDS8PPyrC",
  "key31": "64ogK6keuheW5dpYLv8aqUufePdDDH6moqv5uH1hN5QvxnrVKPU4WAEQQscgoa69gLyMdVvdMN41M6BkaFXf65Hw",
  "key32": "59Yq24fNrKxXN2SrSP8apRUq4XyeCAZtiVYTNJf9zoPApYB5Cdt1zCpwK6GbqBCu9oWDZLMbH5bAEV4JnWZGD7zA",
  "key33": "3WLzA8AnXCyYoQ5aroG7jsMbMs7EsQhCmvdGiCFYYq2U3KyYD1M8cTgdweFLQVnH5tXiML2zVfNpfrTZBfDrb1yt",
  "key34": "58jgQxUT6f7ZTZMRB627QjY1TsPgatDvqHKt8Skfp7c5N1uWsAeYgWnDXewShKyL9V9VGdW1nhfiEbYeUeSnP512",
  "key35": "3Yoz4xptg5L211fYwZ4bgF1QESfrFj9Q6ereimtMMxsgfcCATAo3yN11QGvj7aVe8zYcGTZNgZ2g2shRwqBUGnwR",
  "key36": "488uqMbuu85jFu29X72vGCLZQoav78ha2213ZxXf5rV4aQHkLt3hTF5uSywd9fJQS4cFEANeDdgXZQ4QHQSS3qpZ",
  "key37": "2ksR4LigXZc3hpBaoNVur5cYnr8ojApkWKbRhPZ7yVK8pfYanWxbHoAEBv8RZqb9oBstJuyHu4NCVtmKzTD67s4e",
  "key38": "UgT4aCCKXavvGpDUDqJVQnoJPk5kvVfepr7XXNdU6ef3A9p46vchBJ8Wn5oTrnrPaEbwp5E6zQS6uBYUShq7URR",
  "key39": "4Ce4keUeVdZCuVQLhWVZmw9Zr5imV5d7R6wRTUdJffWk5bzWBnnwXReGwUFc96H65KcQXLDtDgfRtco7dgh14dMF",
  "key40": "3MGYbgZktLg5S2aPbRCAjGuMRvJ8JbPqwMLCWWvTLxwBYZnj69nAfqDVzFJ8f1Dr6W4ztYYBH3TmiPE4JE4nAm4r",
  "key41": "3iMbyKGdfxVFp2X7z6YGZChEqC7aigK33KxcEJGcVqDZ6QVyrxcNuMGMc6wnzqzjtCqoi5NywCiN69BbGK62LAEg",
  "key42": "62qyXFUEs68wJVxEVZxjwttwg5rj58CHG41QVm57VSR5Lo5YNKf84bRw4sa1HTb6oGyMo2nCPHGrEeDwV2bo9ph9",
  "key43": "3xxEufBiXYs6aMBx9zxafZ8XwS4KpfB24RS1oBLRFB5YkLUNhtSu3f81uLj3d1AvQ7VWFtihRqryKfHc1S8ChicV",
  "key44": "oFDiDRjpTCkLqYR7L41BP3VfrCHdPQTiNhRDTnJs3Y9AtaEWtKwhdCyZ51GLM1T2kYeHyjLeJerxdvJJXegoDPV",
  "key45": "2C15Vw8g6HsEYtK85agCWo48TrsQrgyywAXVZimjkK6KWkKbjpj5VBKdWmcW7z9r6LDTPks7SiWeMqWBFx52Tk4A",
  "key46": "5MWZiozXSg3xkAhviAMAMbxc45yMFvWRatu5urZfTWajmS2FVeFKv6XXpLZdnvuropEVZmw8qUBdwUBMzgtHtS7t",
  "key47": "5kgCAXbKjwA1nBrYv8myHMibkxZDW3iHXSSjAEdLBjDqzgBRv8fdHdJUmcr2rv63sirCfBvZ9vrTA7EMtemBFhfT",
  "key48": "2wCRdpVjN4kF5UqMSuRxgJssW3bc7YkizqiqL64PxR32TGRUUfMNG9iv7WTeYxbRmXrzf72eu7Ecf553Bsepxx98"
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
