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
    "PKrNSUpzKYXV9gVY5QbRg35jcaFeakKJkAdbYyHbMBc5CDgT1Ytk8tGqLxbVwDuB6qjycNyU8gmL3Qj1DLAboMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qa9qyGnkSiPkUSuVSckyXpke2tzh3tj4B6NRTNKfQ7crQiTFV5c8vgNb4TtQ1FfeFUs4B44F1JgMdaBshHcw4Tx",
  "key1": "2FQ8ga6tQ14w7q5u2wkzcnx7rkc67G5VGvLg9pWJPaf3iUiJmCyBhwkBiKVfVgZimaitjUwdX8wQGfJFS9WDQYgb",
  "key2": "4VAdRNv7ut7t5dP7RarqrG2r3zp3natskoDBMbcR7Lm6s4Fnohv6MD9Dj3KS6Eiy628wXJvEo62K788zQHkrdYL7",
  "key3": "2ypu1HdazwPwPwAKcESQyqswiFduoMdvrQFF7NBfbyzxehPLDM5b4GKH8dKWhJ2MsYETr9oUwPTAaKK8AaCHiX1o",
  "key4": "4gScHNCo5Vswrqj5YaNSASng6c2qnQiQmFx8tcnrFvxDxDpwXTNTsC1rruxL8RTEMLbE31fjg7W7gDqfVNsHPzT1",
  "key5": "5Ns7q7FBTbWeh7rq3jgWLXHTM9LMo4eygE9m7xV4vNEqk4XmH7s7sjXsGEAToALirYZxNUaDxvmASRoht3xkHxEx",
  "key6": "5UwAfLdtXVWG6Sp9RCBNriLviyAXY8azaTEfgsMKVDcP1WQ8NZVXtSdgDchna58jrk6G8q8ZNXtgwaDxpmUEZ6JY",
  "key7": "DTN4my4TMK8tpzuv12iahFatMPK56gAFaVWk5yBESHJrJpt9k45GEfWBBTVRnRwUdDCuBZ8MMowgZA2hbQGTejD",
  "key8": "4yFeiRyycJmNuxw3RtCuDcqEaCcS2ALzYJYZEbzYGY297L5Lcu5eXfS8QBixtJnXcEGM6GUG1CDZC3KT7uirrL84",
  "key9": "3mVZCiBPSBbiovjNPYTp4m22SP9V9WrYrbD2hSSPYP3aiQZWiSZSga7ZaHMTKegQaGocghnBX9Fg9c17u9kmtYe4",
  "key10": "4EC2ospAoDjFHqGNKRDurLMe4xzTcb6NHdqMw8bFVmvnK8drpi2DSUYixjcFLzd61pR1HDW8T1tuVGJYjyhhTEie",
  "key11": "4mekzAWVZMDJancR3rQaPMvB4m4PTJp3WBea94WxPWfmtov8EcBEfXPZ4gxMJkHBmG8C6HhuCHpyhiNV3ceQE7qi",
  "key12": "4pB3GEqaDtTqX6avMUetq8bxWo1tsxd9Wv1t1eHk37hqqfYSkoTRFghV7d7AL9y9GHp9TfpcBnvMb1kjS2BThsrz",
  "key13": "5CxNMtft4djcyrTccpqPBVuFtm6bMc3KeG25ZCk6fsN3bNEigaK5EXYLFiWJboM1dKkNwvA424jRqP9nhBVAUQqJ",
  "key14": "AjvcPzakDDDuHxdCyu4HW5DF3awVLCArG8Zv6nfkgSfuH3goeLQDf7Bo1XdNfVyBR128ab86fYSsC7XqtE3AK1t",
  "key15": "61Jh8S399orePAHu9U7uPbqvjDo4xptin8GNTA8o8GGgK3grdKaXbuNtmq87ZXKVjnyY2WEfPBx8h4Fn8PmTquSF",
  "key16": "5hdA4g2cnniveJuekuUXijeWQaH894WdfjMRgA8rmhUYobXTvEZ8QFtZk3eY2fFFPsBLg5PtogqWjqgg74tAewX6",
  "key17": "4pZVh1BDae4v6h7Lbm8AuADpjyW6YRSXyrQE293TiwSGnqKVxiHNTvQAR4Pcg8g3pZC2iTrM22EDWQfeGPR91eud",
  "key18": "52XaxRkGkBv5KnThCHUmVuoPaHNoPZd1eVoXmy8SHpqccXWpuyiZ8JDrWZgTbchy6FyxW22LkEs5U7oMpses8LjB",
  "key19": "fumb7yoyS3JKpKo9swdppEshBNykWauvY3gKjWTCgkaSwaTM99D65fpaNRiLWnLwWoUqtVtQDXUm2Rr13JvLKmv",
  "key20": "3WuU64HvYNfSBB6JrfzgXw7ibXqNierHDxp3sLogZUofdSwcvDQsbbhLpBJd1k2BzMDxSCiHSRmrVmnw913A4F1N",
  "key21": "7osf4Eqp7TVcjrTSoZJsQfdhTP5d1wHF4CrBjsG4oQrm7ACDq4vZVAuYnB8iCbE5hjfNHSfvi7BFuCUc19vaLP8",
  "key22": "5pHg6DovEZx42aXfpkDfJe5g7uYCe9cDfgQaQx15qknvYp4iBoe3XrjK3uGXApXAv4iqeebU16gF6xqypaJwfZCW",
  "key23": "4V7kye1BiJFWNPhUMcWVE23KL49yED1JpEgs2Q8sqcEXhKpX2yfjixzx63bwV7CHro1qwxRGeLEFyZt9XzsERs1u",
  "key24": "23NgZBTUQKK1oySnKDphuNLeY59eHwNwbkAg1nkqBs3RdYKPHZ7bSPJ9JUDDnuDTW4Ut9hHT6TLHrBgQhpffGnz1",
  "key25": "2B4cf9SxBgKQhAPB9K4wxsQvYwZvrEGmWnhJXogSZGyzbSj68gQzpVmKDroTJCcYNTrK4MbFAAKU2jaiS3rmi46p",
  "key26": "JkDiGRnWSSr7nwC1JMfcQoUoRgcHmHv34kUh1N1cWxx4ESSeMRuk1FYmmV91rF18tqL5yrnYtV3ywYaHQoyiz88",
  "key27": "jaMU7YYhDGkSQ842gdWzmhq5ukc9MXwVVm8GdPDGCd5ZTxP6bk6Tw3j3KVoJByoyQ7T2E5btf8N1Skg7mZoxLGh",
  "key28": "5mYBDFGXGVcFJQ9VswmmZkJPgZWARXvhpErYxx9BMEPtSbyPnoods6ShRoSM5yyY1MKgpbahirRuKeJUVPQPxSnc",
  "key29": "KZp549WYkWMX8zR7vzu9qM9W9ScpiEjd1rabxRDfiVrWw7TshHHVJ3RtJMWfate1pkR8z2YFCeGGUPjQKEKYRao",
  "key30": "5h4XYuGdvpSBwZuM1vZgboaHhU1nRU1x2SgQvpcsoqAjVekHBZkY9N8fuvH5q5bZLsxfHMPVMfmFrECq2XLjp5py",
  "key31": "3yQzDcrJJ78dR1nVQqL62jrBkmZscfi2ax66tRtYi5UkT9tHYoFUTZFK6vmpuADN82qyxqzSxuitG3KqGGKM26aU",
  "key32": "52QbCzqu1vCrnBoUxMggVRA11ZAZ2cVVRkzdBQVaY498nVTTJiJ26MWatudQMtR6ERYSC964Thje9krtAcAQzs3Z",
  "key33": "4quJjx6fyTxP2RxkHjXhH3xwegpYmB3cELZs1DzQ8j9SrHpmpfyhTihHQoPyY7gsbjz67cScYFYDxL2ydfZouEWt",
  "key34": "3kkz26ENkwfmAYWJG29tE8P1SMKGUbXWsXvpoK9zCqkzRo5xrGqWcLBfbSrEsFQ2SRrUZqcn7pwPZAQeHBgoq2Qe"
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
