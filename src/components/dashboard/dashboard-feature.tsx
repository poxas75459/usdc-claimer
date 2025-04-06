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
    "5ZTMorw6ZHdfbeqVhK6a2xvcRgw1wZSDzYBvVCEWUfwLacFV7mcUxNCiimk3fy66KoTEvxZszMDTTDvWpMhbixNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdcGw7ubX8Er4WYVBNVLTAgsciWXGZJPGyK2NmN9SGHGUTt6KhQzHUddpCzzoPUUf6QVDMhtVfFgLxw9ZbW4mwe",
  "key1": "4JeynT37ADVRCkJLgtcp2XqVKzeC9HKvHAsvxuK3JaYLGoNuLRLC6f8qfv4REWRQHh3Rj6Wpn1hFtXLoskbvcJWB",
  "key2": "2n7bX9tWNXtj6nDEjcLgzrudYNiXfn3mxnP7HDw5kDa8CkXCkqcD4XiK9oJuouaXhV9ZMYiam75sy9mtzrcRw2vN",
  "key3": "K59SpkddM33p3dFnZD4K9PQK8jKHet77BWQPDHHUpeV4Wi6nKuJ4M2ytvGP9VDVSqB1Drd9d9Rm5zYaHmz1Cz83",
  "key4": "5XQwxNXzNEcf45awe2xeuhPWF1UTd6Amsr96V2hQGUgnzwwr4zDjZhh7iuy9TJwhoMN6y7JDvHTSmDHKz8oFxe9x",
  "key5": "22Tp5upumvV9iCLEHeChyC8uZsuhXo9zqfN9LU3yKBCMVcxAYtnrXsNSF5Hr7fA1Qw9GkgJitx8FckwhZHjL2sZW",
  "key6": "5wKdXhkwZR2GrzVBZnspw4LeQvyxjTnB6hmcgzEPwBQ5YfSGjB5wvQepbCn8CSExZG3rCRXjLXMkLca6uxi31sk3",
  "key7": "qbiee3xqEwfYNzNAvsbnAAG95MG8hHeitsosc9yTLA4CDXzstQiTxfojWV4rh1JduUUaTMiaMz6fXmcd1oVje8n",
  "key8": "UZomCMQy9cYuQxJWjZDng2TXcHFzm8ScPowkyELmNe7J1H6Tx8Lbvi71jW3kF9BT8rZYcAVkqRbfJJRMo3pRgJe",
  "key9": "PSURmoXBn6JEU6PAN4wQBwux2yTs6qGBhNGgEH5htkw2jYdn3EuFGmnSVoVcuTeVQG2RYfDvpeFWop1Ed9Tx6Nm",
  "key10": "4Zf4jfuxeKo8GZQUH15ftFaktQkzQxF1hYz9d85p1JoduNyTTw9YLPkDF3u6btgnsQGDJ4NTTLpY9vNParquE3bf",
  "key11": "KLvtJkqDPCfxAzLMNcFTzTu2tEnEgoiSKbpS9aguFi9WkJ8mQtASMqffua9t283G4SPY1R72jCh8XtewTeqMJ35",
  "key12": "uQx1Gentsttf8EqhAJMwotRM1bzM4K65Vu6Dj8yB75QfMXfp1xHJy2TWcYon5vxhQEecUQpu9hi3UoHRJMZDi4L",
  "key13": "5hdGnzPPdzi4yTikuKr2YtkavrTNNdgCTM13AKuUQUig6GJMQqgV6LhbVg16rZUQEvD3ipoSLdG7Jsfwgye35oRn",
  "key14": "LnoPQsjUAqsxkuebWd1t7XA6LhRPwd4FyRSKNaM5JHCUmguPSPR3mT7dYfqdJRZR9NpgU29jDMVQLpePjiBCJqD",
  "key15": "3N6qHkWtNwZAVADUjvnJMY1eXC7snMDQvpYNEMbENnsxXamMAnuZcKiLqsFdiDiurzXoJwaAnGyV81RetiHhthKV",
  "key16": "4RVxv6QWkDKRnZXwAuMtHUKyWe9WJghiRqeQ2sw9Cts5pNHjf51iAJLDwkXBwFXomCLrUyhwNWc8N5noMViZzYmb",
  "key17": "2z9YEsscqQ6S5hsDnZRaXsDt62494QcSx7ifwCzsb2ePSMTpec9UicUZnRhsCjAkQWQrfYHdRCCtNFiS2nJ759e1",
  "key18": "38QxbnttSoCDb6q8DokddhawcyCBQPndFcPGZ4Uh66iDta9PDLKhahUmFgyQSPr1TkcNo1c2eFnytYamyLqy3sXq",
  "key19": "2NCWCM9ZnVAt5QK7QNEQVwtpJpxJSFZwq6RJj4c2sLZELxz8VPYxZ7Zpvb2HGwT4Fr9Xs3Ur8MW5xEVuimaS7XUq",
  "key20": "g9WmRx3qyXuW1e9wtyhm3QShm5FCUR6KSzi8X92fSwsjraRDzSsHgT9N63E6Ar4Yvc23BSffauBX5genHQ59EPf",
  "key21": "2o5De35GCetcoZ9ETRMxnPUHcbayKKcyAduY8cdhABgNajsyT672e8JpFqFixuuS5gWGrtXKKx3f2bJkVeQme5kg",
  "key22": "3E5GrzdTULtk2FXf7wfkisCv1KkMJetPfJkQxLNpUw6PXmgydUbSd8XdYkYVZWsbbr1U8oiJDuuS3Lsmag6n787j",
  "key23": "2hagaiJrEPnJauce6ss5aDUVkZYhRjEgyTWS4DRSUMzK5FRqiiNFiZ8kTzCZNEsLtvG47AjioCE3odZcQHDJyqhE",
  "key24": "63u1w8Du9Rb2nqLArkzMpxmUDfNCgPCfyJ1L5GSEr5GM5T5HwS9Z4AnXKS9eonj3rSRLypbyNc73e7Mwzsv24v6j",
  "key25": "2UKedrAJqnzKuTeYKCFbJxvK2pP2YCGdsEZMVvrK4DyGaq35rkrWr11aUDXU6xQ4pxoCsy6dEau28gpnvpzBZvYQ",
  "key26": "3BufBmn887EPdFjHM2EK7cTagHkXxoL3UTKMhZ6dzh4p6s7jc5NXQzmvizXbxeuNY5SJFBW1kZ32kAwnVWkDNzg2",
  "key27": "2NpmkrH34rnyo4knDjKDRNbDEfh8pm3UgzpLAaPf7T51qxJtnhZH5U9R5TJVwEbNM2VW6DThNRYxP8U2WNtfjDTb",
  "key28": "4fnXvgto9UiKBVeEo3XBruJpFLccgixTKaPxWZHq6TpyXDQNPLH56GyBizeKqNjph9VGhrRADSBGwLGpb6Ps1iXU",
  "key29": "29LqqPvX8nVsYKFMezfRHZF91cMN575XoVPe1giqTbeu1JTXiN91tL7KTZj8GPXxSMMpfAEirQuGnbScwkTqE16q",
  "key30": "3TV8L1sXZ6Wsi5JbdinHLwt3uwMFAEyX9dCSSwVsYczRxoBpxuhHAoWHE8cL9THGrv4SL9BLgd1BRzkgG4Xjei7r",
  "key31": "3xEC88rQkDNiEbeRuKGMq4yvvnm3CMxV1J2rSibU79KLuuimW6mkRT8vSQ4mmYP3acmENZZUxN3Mzpyu4YqjTwnS",
  "key32": "sfG6rByiPQJzRMawfVnLP452gcmb7HhGgHZ3Kp19TVAxH7PHKD9ZKKANdwdeK7gxzaXj2Fqutaithu6Y8qS2u3g",
  "key33": "arHYMZuPExN7ZSAoRgnQ2wW9GkZfMFfYByw4CAUQ9j6gYGLnWXUwbiKFnBHwcMjqtwzX4vHwZQ1iuwTDgHFBwqf",
  "key34": "2Y4hcc48EBjUYaEC4bpQrcxZLE8pEFU8yAEK7iiwmo9AS23F4xtYbAMTSEHPnp8xsaUupzhHPkL8axTqCsbMBXeD",
  "key35": "2WKm4iytkkvgN41jiKygVySJSnTNVGdH25cG34oh5868kLN9EWAQTP6N4A1bdmfEsonWEUU6CjeFF1nzmXXPAcYj",
  "key36": "w2MAxctMqTRTywQmMEf64K7e9pBQKCSx2TjnfZypzAopP2j64T7E2CvSdWCN6VLghXBwFdKLmzy2DvqNb194gMK",
  "key37": "2m8XFP8ZJqwTsPw4bJAoGnNdg966jnpmSPc3isMuiePNvETcLhhw9w1wDAnKjUxWiNXtALFzEVGEKdYdKRpJ6NPQ",
  "key38": "45VkHA5P3ptqdjNvPHntz5q1jL4Y8z1tzgzffXafMG39RfjTfPRw8g2HyxmMqHcLvyH52KKsegFL7mR8bJv36pXv",
  "key39": "5stbtnptKaDrKyoJvUqtBqqAcndNsAzD8wxfYwdUoivqbMDnAV1nXCfs2DwvcD5XFea6Ah4HdzWVioM2WxGMfMSx",
  "key40": "5qodgKE1C7dc9tzAs3cEtuk4SwiQesGTjdt6hUswzALwsgvYvJtS9Scqv6tJYzRoxkfhMfYBFgrq9dgmM2GXHKo5",
  "key41": "3qrKwAdGyq73FMWg2B7CDjtxHEnctjULMRu5BhcaEBdh1NTttUsAdhkePbEFAf4W1LA7ZMjXzCZyS3a7UvzPG1Ca",
  "key42": "4zMCqapv4Lhr2qci1xqCqw2vNZwo5F4PDYgsPyrJFbVqptREJj6on2EA5UfZBko6SZDFghHkBTEG2WNCR9EZzCoG",
  "key43": "4RaKJk6V2i8XLVKbneJcFSp4rc6a2JgYNimpmQC3VbSbVaELj5Douvvcu33w4oy87X3g8zugtbG27u1DkzE9CLvU",
  "key44": "3EHJY4bJAaPoNboaM7Q4wD3Dt8vQLbVPzpa71MrW8D3aR78GuUQPjkT2iX5QitTVZ1Tv7kB85pU8jEDcNUArzDR5",
  "key45": "57srLpXw2nNRyE4Gs49Y858KA9zNeA2iGNtze3yLyhN8SdPGwYqMmm1S2g1WFk7RbCdv81z2YmMMiu4J7vXWb5X5",
  "key46": "63YoPXLhKUWmYK1MUSpPcZLHKESJFyGuyM4nPzkmLtzux6tg1NnLbyM3u33Ez25UqCGwpGxGoUDRTvLPyDs63PyH",
  "key47": "43EHJws4rumY6nx27zGB1T6kVVixJA86khdT3C4g95S6MthgNW4qLTNLQFjnL7CZ8Z9vK3EiKRFimpLCRmopkrjF",
  "key48": "3AQt3Qcbw5gnbfTnjbqqHZag6io1NjtEGt33D1yLtbGFTKXkxeTWu3z7ujkR6RKYYhNDWX3sEULwDsekxf4k3PjL",
  "key49": "4bCc8npv8NzGrEQzJm2VLJsGUYMx2iAJXs3KuNFYXvRHTiX3dLrDD9kZBzmCkcx1miXGCQDrtqqgrGkpiQX2fSEY"
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
