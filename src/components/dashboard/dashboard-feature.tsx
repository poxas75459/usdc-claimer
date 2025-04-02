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
    "5jNsn64trNubaYBUz2NvvmddoBcUZFhf4awYc4TsYSm6u9b8hoeX9ZNVvVEVQ6QFE3mfCq2pXdfAViguL8u7ibeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MQu6j3QrUyo4uqUPbJ9yJsizgNs3qydcj5ZB1tE9rx9bcWPGbejwPR9c6MXEkqzJBuHUkVu8nJ6WCQPTu6GXLHY",
  "key1": "mstMxkhrFcm5L8YJ4wNNgimHx4oGTbHk1yLgNFApU84aEYvgTZ1tttRRZMc2qVk9xCGz6tFUw15v8fK3c9TZCjV",
  "key2": "g8aPLvv2FocBY9NFf7zATTyVtLDmEeZJwotyCmwR2SxtXRoK2S6UuTdMX2bsiTRnErEKzK7NydCXfN457BCbbUJ",
  "key3": "2q3JGwx24qTrCZ23KKKSh4tZsz8VrqopWeki22cfsih3ivxrNifSXigLxEq3sLDUsbmMFS8aNFWLbJUesstsN7X9",
  "key4": "25oWLJtRLCdVsL8UMW96y3Vye58tKHuVBsqeuC8W6wnR6c13PyA6YpchiWiP9745HdTaVfLEutx1QyLxTw6b6mvp",
  "key5": "3rEWpmP4W3xp9PkVtBfiWUkDnc1FBPBuoDjaSMJY3jwKpzZkNu78LRVbDpLUZtAPJoxSb7xPu3XRL81KyymTrVNW",
  "key6": "4e2HJ18YgRJ9KKe5XpiosMYH9NsbrtAxXdNEBBTUTh5G33wiTWFt1hqewChFg1vtHomMavPS6yvQpH6MJSg5PZZW",
  "key7": "387YAYuM4fMJBonzcFKNuDiba1nmyUH7fMxhK3UmzouhcG5Wq4jrxehEQUF2bHvjy6yhYWZgFaZdwBWWbkyjdivL",
  "key8": "v2hWPNbDAD6jav3jWPKrpsxTUewXcVQJNtPERjZ5Dkq5f4LsoQpYZyTSdfLj2dB3YTuos97s4JEzXeHW457Ush3",
  "key9": "4x55aSsXsDvrNYpmp8i7oGuSTxJTp9v9wq7MPnsGWdHwyNuWd7f1FFbk71g1vuWMLnpfAEnDggkN6NcY9Sm2bQ4t",
  "key10": "5AjmXZzu9HZJW2Sg3uNUo9c8znVyyVxjE7HxAaKggW7UzAFj9FB2yoqAY1NX3LpDYrkaRDqQBw3DEHKZrHP2Nw5m",
  "key11": "tpyBWYaE1N2U1zdMMA6HDuLwEfc7a8prcZEEWXBudMzm4KpgDAXy6MSRPwFQp32aZfgoYRe41AEsYssf5MoJ2mM",
  "key12": "4PuF7gz6vYDw29YxxPwt6vMe67guuuyGhyo1it5SjXk8VgCFEEXU2pUiw1Dp2xkCJBMapCDA4iBc6q34vQmrwHxU",
  "key13": "3KCKN64PRQWtPUuRTDyv8FutaJmFBs2XDzYrTNk8mz4zwTt3KNrz9GQ6iVPnbCgsAgibZRGt8SG3xReSvTm1NUFo",
  "key14": "26id9grhE3bdhjJpg6Znqc9A4RUGsCbDDwvDXvKdxXr9TCkeqg18qdChrXmzAQHB2qwMMLcYE8oXJkLcmiGMtseS",
  "key15": "3XLedNrQJSteEAruFNgFx6GSYyshqmSXmCYZr4ZQaYx2WfgHHmtTAhXQP7pcNTq6iqitDCbBbU7eNUMXw6gXFGF8",
  "key16": "23a2S7JoidvL6SMVkh93xTzdWeusduE44kAsNUk9WJcvezwyCrHogSKbLCNnV1uMEB6tP6Ss8TfYkMY2m2cVvmBD",
  "key17": "4yRdceumRhuj8Bt2tyNU6Y3Fb7a4MYZS54pjRTtCSc4oC8Es9h7bQL1fTp1V7NQFHgTBrzcspEaBq8FRSch9oPjC",
  "key18": "GsWibUNX3B9Rm5R866QhnJtfkuRqUjkfSLpmBqQh6u6PtSUSxKt9C7oK2qowySiTDBabpaY9bgLLwc7Jp9qX7kY",
  "key19": "5KsUeQn1tzpgpJ115zgwZ9oAMbq1v5VqqoiUU6ayFVnvhf2jXMKq4wjzsGwvk4qtXFWuosguzYanJmvx2bHSesGC",
  "key20": "46t8i1JvAocNheD6NCJwAqiFY6PBpHyM1oxeMaqi7VRYsnxeAvuKRmv5s2dXwP5ttq5k9AnYnp7t6Z9UbKXY7qY5",
  "key21": "2d3hekVx6ZgarCUcgAD5EvhHRWSE3Yr8ns6xgwzvookEGE3SGAW1mQLxzL6pgBLLM1ZtUTQ6VFbXno9hitLF9Xnw",
  "key22": "33YDdAZdf1egQBynFjrSeqWyr5zG41MnD1TDnmxUq8JuRywji2dUkZRLYDZAHChUCtBRenYYQSbt9o9iVkYFfMQw",
  "key23": "3KbfKuypjV4nHafzx9DBMrx3DPP8YQpxKbDzNsH82NrYkLsPdUUMZTpKZtnYESLhtJpya7e2nZxGL4vRRCmDbKeJ",
  "key24": "3E5eZ2AtKmwb9yuHtxPhsoj5b8Sq74MXr78gqYYrdULCkGwPqeTW7gP4MobknJcX5yQMkXfWTmued3ryuRFcLY6X",
  "key25": "2KNon3GqCvxJx9NVMgRfEz7wCUwiBwLQwDxh5HZTEJYkFeiZWZJQzAa37C6Lu7K3VzxVXNcyHVGDJPxeBHzgEFjR",
  "key26": "2cB17kj2D1eebJAMqutXejiC2W8afu4jg7gA7qBaJTAbUsXXLiub9PW2fmgQGcuBwiQtEoGQZwJZqM8W2hvBGzT1",
  "key27": "NHqHwYNk5JvTGt891kdwYHiCiEFnPU7FfivgJ9V3h8G5KVrqCViD3nrxsRd9eExTEB5kcb1HJVWazKCqtc9KHfQ",
  "key28": "4nZAuZHZMpoAMKQBxunRBataHnUuajCcpgFofoMZtqbDDmPjax2nLBTp759ehohtvwtGKtiyJ1yrLuCKs6E1FBHf",
  "key29": "24Q8vGVTaewhgPkL34fGgEtBnARYR6W8WjHbGcVA8DjkVRNXg2GkHSn4s71cpRQNuFQYw3ivkLHZukwjXi6YdNSZ",
  "key30": "2vokzmk3PWJJGpHuwCb9zq3oMmNpRo5jLEtirviX9VzsdanKykDruz4dLX5fyLo1Lx8ZwUagKn9Y8vnN9s9fS5Uo",
  "key31": "4pruq9qefHBrgxygKiU1DhZvgYgC9xxB5E6uaV23sx3uGasA5wcvsRXRgWkJRjcsSJjokoqorbnCDpzSeinrPume",
  "key32": "Cmj7Strq4GH7sMqVW1AAqybvFFyBrKokfCm2KCCZ74f5VK4fieiwazKwaECnsHskqb8cnRb5DZmNk46LJFtro5s"
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
