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
    "4i5r6CisTtEbZ2FY4Xcdy2PDDQEXSh6CT9F7NbrmWU2pUQT5rbJkchmfC5tg1RnheLfVzLaNK7SwCnseXzWNjAhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wohuchb7f8LbNZhLDho8AzyBTaooHezfiQ5UMiR1b479ifQ46x7vGTEBQ16M5zeeoVWSufgic254cJ7sLWH8StV",
  "key1": "65sQvw6ThK72amM738mUCcDVMGZHoFK9CdHcSVeEW4JEYmgDvkx2AUWVsPdmGqeh1jgercmrUfMYcPqZ4wfiR9rS",
  "key2": "4QKSLrfYddvTLtpoBptCECAtY28FYHxwe6AjTgKcK6WwYNvPYyTHGmHtw3eqCvQ4Zfifc6AUXzM4NvJsVdgAbGyH",
  "key3": "4RHN3WCFPTh6wzhaEERTkUUYeC27ETSrjVNwDxDjhM1tFCGfZaGDkh98HXqYqcAPvJ3kVs64eDD4XDwtiddu1cKC",
  "key4": "2g8C3XXd2hfsdwMQgTwmKJy1rKyY7nosGHmgt6ENw18hvEUiriSwK9LmrWSKBWxySUweDakew8MicnKAzWntc5uT",
  "key5": "4E8SXjsFV8ESWvYco2cMiSBJK8sJnrMYsY6HDvTQ5ezrjEfF2rWcDBZzxqLVAaDeDErBkMHX1ArauwY4wckeR9GZ",
  "key6": "2vPWre9EN2Qr2HBodP4PEiTFAV2eDurUxTjNFrKwx9AVJyEZPJvMuudo81QqYqiRM29iPZ6u4KE1WCPYn2bJ794g",
  "key7": "3CQKwgSQJrFYofPKUznZXNcDvjzccRdZ49d5Y4818afp4h4mhmwTx7KodCnx88oAGBbKUv2rTjxgAem6qpE5btNR",
  "key8": "hs8pCzX5PCVtrkg1Gy14wg8tAXbznxPdzEY2QLW3GNresRsWZH7Hyq8Q7QMfgsLBNHyYRNsvhXFBoxfg3wUQ8CT",
  "key9": "56VqNbCisyV1M1hhLVeYQUninaCZZo9rQGay1kZ9hFrANmF3hnD6QrCPAXHY1Xui5cAVv52VgB6uQvyUJWMS1GfU",
  "key10": "3WGXnnmEbyCJfAchPKgvmc7xrTFCvtmZuJTzYLRd7d9H58qyUygLY3pwDKh5az3h1E63JgUwX19N2dofugtaLoqW",
  "key11": "2Ab9r1fJoCLh77Lf8TB7JV9dYK2BrGxSrMjQKVGPNjBXT6owGA7jKshY6Pp1QGE67dqrAkEypnmLBxAmsL4UQDwA",
  "key12": "3fHeZ6JzpfDeM4zwmzUkSc55BfdY68xMLxLqz4VPW93v71LKZuPgSgjTL59vKHdcjDDS88kusd9KabjGRQnGLuK3",
  "key13": "rGb15q7Y1Vtp28g94EPSDEqAicDM88KDvrfZJD4keq54j4rCSTSjcU9hnmYtewBNrummnpELoD1Wzk8sfSmnNG2",
  "key14": "2UEdzNe2Rh4RAGM2d8SHGUKCeCSHMxD3ZNcSbksqsWiW26TJxQXk65rEo4gSFayyFcceT9y7spgM5XfBVBq5FfET",
  "key15": "4VrYnK67Y3wQ6yiTAepWk6ZZhwgHpNVizpbqkHe7cWtAYL8Mr8v6NVnXBRRqexVd64YixhQaimGwZ6n8iCYqwrFm",
  "key16": "4Anvp7GGoRu8JXSnL3wZNYYG7cJ3rsD2D77pxRX9iXxuB8sYZPfEUHrj82PswkyRy2MAUJGgbjpgNLBWhBZMTu94",
  "key17": "4rHmJ3DU5ibi3PkyKa3PegAgkwhUw4j1VurCFvvX8hCTAvsuSQ783GpZ796Xf5ytMpS1ZcdMVUv65K3ruTUcxKVK",
  "key18": "u2a3vxK9fyZkcEELTk4yYrzUKdK8WbtYavJwRJgWSP662qWhDhmCD7b6NzQGoyonBzzKV7B6pX83L8MADdjKNyu",
  "key19": "hjw5jF7RMzCrWkTySZkh7SNHcCSHDCy93ZugN7rAzW4EnnVoZH7pCxbbP6iSfZHoei7UFa6PJYQREKfEa3n3o9Q",
  "key20": "291p9gwe7xoRFt9X9Ka1p1TtSVtFJuDf13HYz19KubmAtxFgMnEVsUEVxRKScLN2M5VsaooY9xnESS4XKQ4JPEJN",
  "key21": "5iZSiwwtem3oBRSmzhP91MSc7DYz72omyXGMyAiMnrX6TNJmXNS4Dtbs5spPVqNdsJVUer8NRzwXL1WtLmHwJvoz",
  "key22": "5WCp9oxZJFDp4ZUafjJadtjzDEzcq5qvx3iaZEJfhq81wjM2teGhefPkd6TypFuCGYGJSPySkjxpXUXLX5Q8etvs",
  "key23": "5fiH9ZxLrvioWreiw1aqREUXtcdVEdzL5Bp8rViWKwQRLgAZrku4suFHL4o7v9tPinaxtgzZch7MYhkWhCjNbJZ9",
  "key24": "cyPB3inSDkxoNQqKTAaAPC1a1J6bAooR8btcsYSTf2YoEdpqU89ZZRPZmMCeWsVL1wudHaAAcwqeTH5HWc5Hrzv",
  "key25": "64vjfXTZYcTU6QifGqWP69jSvGKXtmWfpbXJDA6TVDd91QmsXduGASp8HDiNK19UJttSoYJs1ixkUWKEVPdP6RkE",
  "key26": "36Jx4DdVoQUZwRLvmcxnpv4joLUhnJYGSFeDPC3WtcHsAFpBtXYa7r58MshTkAxQuz1th5jNvxAi5g1rQbMXfW1N",
  "key27": "5xe94ziVS7vxESrsL3HFurmsHUQTx7TVqT5pjPANRXuLBDdCDARGXp1LKV8f51ULZBvvdmzQBKNMy13p8GPjZiC6",
  "key28": "4HgWdTHnsvbR89CzcyKunerGihyxNuvV9ZNgGLtKuiwFGi8thd7pSQ25ecF9K6uDDigfxPEejjNRvWr6ZrBeKuHf",
  "key29": "4AcgasWqDSdsSxb4B8CNsW1iu5i4tnrcAEEDaLPfurtvt8T3zgQdpoFCw5qND3MkgKNckMQqbxYjMseHnNVyxDtK",
  "key30": "5k4FXc5bP19g6HYNgUMgvVfHvDhnFNgcX6W3FxfMdajacBgRnbAzEBurzGSYS7jVCSNY2ALqGPGZfExjkouFsuj2",
  "key31": "4jbRbrNoTFff2K1UGt1rSmysCsYiorHwXsSansPTAVD9WztbhcgXWsXLZMWC39BFTssygknnVoAwcy4QkGr7MLQu",
  "key32": "k1LepkhKHfAPtdkBBfxaMgmKwsi2YUdstnThbZFx4DNPp7MbrXdqgSJjiAQtTUNKBtDBXFzE8rfdsBkFb2BRA4T",
  "key33": "DYGi7gysGT3j7rAe8JbjSYBtHxkv5Q4GB1BVnvtnrRBMzABk7ViwiJLvB6o7mMxfL1kZwCRiN7R5iJhcTRUk7jg",
  "key34": "9cxL5oJFmvg1icGV9796417WYLY41d4Vs3AvjVwJGfCXLtA8QEoKXiXJ8Hztur1CRHJa6giYi32pj4sFid1MpjZ",
  "key35": "5QWTUP3sn1hGcjjywjb42xAJm1mpasxNh9RUmix5y2e212S4xCjVJAVniE2Ex3PcrmWcDNPBSZjb54TFbiM8b4k",
  "key36": "5S2BKUHnagrsB4Ag9d811XovrYWM134TFzjs1J4jgBzoMWk6kJdnXxUHmXKb64nxnVXN2n9NDv4CHJNnGQZn29kQ",
  "key37": "3BJMjdqXSUPFEppUxZNke4gEnjZg21vmTKAHf28LKzxawBWLDVNGKnmybbWbsNfoytJc9aQZoHs3Zi1YMMhLhnu6",
  "key38": "5ZJBME3CX3Gb8DKmavijJpaM1pxwnD4UNs7Mohj4DX2SzbYggS8K5RVs4F6PyBMq1hJKbnp236Zq8yEvP5J7FGQt"
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
