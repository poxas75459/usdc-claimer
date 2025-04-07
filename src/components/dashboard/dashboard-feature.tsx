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
    "RkmXy4A2DzMzfvRjn5dSnrvECejMGv8vfhrR18B4muBCk2WxT13szWS7Nq5ZUXjtxd4YGwR4XQcZ8Yj4F3i42ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BuoUbWWNyF7GwqjqdbNRaHXGUjGc4GQv9NkMBTZxjPxXc18mSJLT3u2YUdcgoAW6XjUraAefzp9BpfP6xpjk7JG",
  "key1": "4Yt6vHY2zf9zyxMuriNox43bvE8P4DQctZvKJBSqXkj9jC7qxpAUL22WjtVXBZwnGzgAavAqP4UFLirBEtuFp1Tf",
  "key2": "5zR9yCZJ3VaXkHWRWaXRmakr4XsYjD9ZyYPjZpxhP8iHnQXcc6VeBPEoCBUtZ99L9SFaQVo8VLkr5xcZjRSTQy1g",
  "key3": "Gw3JRZDUWPB5N6hPvfz2hFHz4yibWJvhLtiT68S7eVwqM79BVsNEMFnj7z8iUV3pyam2PJ3L6LJzhEKrTo4un1X",
  "key4": "41psQS7VDAxRnsgGWG6cjC83muSwLL6rv88tE23AEUXjWru5JTxFXLYo5Kr8hL4cte4B6ks6ox5jYVcACSFZxdLE",
  "key5": "3TkD17UAger1uCwDt31Rqf3anYMDw6ygDD9c2XBuGnWpomTtUnKABNVwghmZpT1HJsxGADbBT7rfhaHumhCPUhnR",
  "key6": "3mEACshTFZa9CGM3hKzzzQjweAbuN9PCfed8jMQqG5f3UpgzqiE48LPD5Qyog3zhNSJziEnEDosXTeFA1fduu6yQ",
  "key7": "4Xsxwe2Ng2mD4VTDnX4fpZJPu5v6Vv1d2y2GycyeRbTPcotJiBYnUDeezS6xbNgYxysfbzDee3MBg7rSkG1DbXia",
  "key8": "3FxWaobNg368WNKcRgPQGC7n3GTj5e1hL9e4zYJzyc5jcCgSPFYNvgV6j3HZfPQZWjzfv4hA4JTKoa3ouk3eNJdo",
  "key9": "2V68n9fwh3s17CEkr1j1riAQPW5zC3KJSedPi4Ap1scoauiALFjJx1jaoApTYYBrdaqpbGb42F8qBZbB6ozU8BA",
  "key10": "BUgxwDf36J6XoFfAhGZpRbR6E2hALkPnohdzZ3c77aw4sJPjdh7oLeL4npirvFcxP2UQMN3x4exETazXxdbfw7T",
  "key11": "52DHqGNvBt7CWL9AHdcq2XDP4XTKhqi2cHdQHVBa4cbqTnsAxVmm35VPe8j8nuofkYSsj6nYBYDaHNpUwAC1Sdgk",
  "key12": "3C2kbHB9YxuM5LqcjQWi8ha8ttvnBMkscQYZGkxJLyy8E7KdW7TiZXBqyWDSiBEdc2YejwjzQhasLJS5ZFd2fvF6",
  "key13": "2fU3UApiAFi3YNSV4GSNBByC3YuH9RvaczPN4apqiZ1WsRB12x2sp8JDyyDnATV3QbqiSxaBKTq9gGABSDGqNmuV",
  "key14": "5bKhmeQaXh7tPip2zzd1NR6u5b2qQMt68qk7MMoXVpJjKH9wVBvf713TLSLaCg3CZ1n2hEx41WKdoH77KPCE7m1E",
  "key15": "64sVPWuymFeLWX7YYERFKk5SQFdNdx4wseJyPyFMfDsCge9rj2Dp4AmGcX5W8V5m9XAgL8RuuM5Ekh7XpQGo8bTv",
  "key16": "sQwxwSncPfHWTXzR23icZNgBE6zKdLHLdu6dx9dWA14rydZ4uWmSffEp933yU8GYVBvHeh3fXwEskAEwTkENiQA",
  "key17": "3q9ti9R1UoENtCEzPUNueQPn3hipALQVf4turmdCPGRAexGmFhaP457nhu69KEoWf1Kbfv56CrWBJHjZLosJFbr3",
  "key18": "5Hufp2UC2GCqP4FjXZtak6sKUM9nRidSp7CEdCepQxyegC989LjjAyfVu4qSKj2ujZ3At8Y9UGqsE3ywwQ4tfZSV",
  "key19": "d58ZNosP4Dx9xqoK2iLoEGGHya1cPz5n5exn36grGFasuN13fdC7LgmzqPv2DPxr5Xs3uJhTRSnKd2jBMXrQ3Pz",
  "key20": "2u57n8qPQHnawzR8yJgFZhLcpGyv7b5iZA6Z4HR2m7xMzPwogD16VbLqQdqXECizf1RVYufGtN4rB5dtBj4fWPFj",
  "key21": "42UF2qtDMsb7KgY7cLmYkgQEY2kTbaB6RuqsHsohLktjh3NFxJpjUCfaRmzbJLtvgNojZbWrB2g4j5NpvaTXAdqJ",
  "key22": "4bH1NcymvPd2R1cdSP2J8hwwd4pRPRw9HkwEvp3ZUnjs1PZUviXFaJfsMoJy9gikdi2svsnUeHXKg7mxBgn4t9qH",
  "key23": "4Jc2AyfckHemNUgCb3ZH33fs2ZgMiA2WrpUhZZ8T6G5yHyynmTH1YWwEGJBDcn7b4P48qBsG4Z8C5gDxb1v1DNzm",
  "key24": "dAAQRmW6tQmLUJfLwbgEFiFRM32hUpFJwXwLKJMPeA9MgSQcfcEqE3Zds1A5iP4uE8jpnMCTrA2GbbeUHpkRLKW",
  "key25": "41SVJ6uho929D5S5FRFSDnyJF9mqZ87FkL2m7mHB76cvoodPEBBBHaRqwMs6a4bsDyJyxKRnYHqVWy4NmvCwxvCH",
  "key26": "npuu32Q4RNBMT1RuokM5QFVDZjgXCfCLXELNhmoZy4bnKkTLq9pNwWTUEFJY74JYpjJGHaCCGcwe13KJu4eoktZ",
  "key27": "PoGT7fY4iJPrXs2MYi2FGaf9iuf2RhPX4MU8zUvDmXVyWExQQty31QZHcJwDh23EPrgykoF87ZSQfNSf5AbRQyt",
  "key28": "2BFG16suUjXVZm3s1sGv4873qnkMgX5i1492iKpSu7sgsmhQELUpXXnh25KZ55hxTNqKQK9S3zgMja1yJCwxqjTo",
  "key29": "2VBtCSK43NkztGq1ckkQBKE2eNTpCg8sHygCUX8rGdYSLixyAHmUZJmVTbELzxVYirsLrez5btgzbk8b9WGwfzjp",
  "key30": "4974RohsYpiziCJ6PqV1ggFHJMcyyVa15XaAtiVsHTKjK4tVDyMXSiuQbNQkCdjyFhPMwA1bXyvd31oNYy5L4End",
  "key31": "VzGntMWbfi4ob97uMDB2Mujjneo9RiASPMz5JykfbfTjit5CBCLjBq4zJGDRBkanujRgf2rGud1E5QXSx5oR934",
  "key32": "3o8kxYmRXTxW8ftNDEkQnXuU347fmSty59FYarTHjzT1YR3sWN7iEnknfovwmn1rce4ZHwgpTKzvpK2yvcJfmdo6",
  "key33": "3XeBBf5AZYQEMKfJqY1BSX4AhfafeixxHdTAPUxRR8ii49i5D85SDW68agjbeCA1DyVHt32f2EFF47etvGVoKzLe",
  "key34": "5qJu2jemYurWDwFx15AyhL8JFVsfiJ4JV2xMUE9Kswjci9aLyZ1M6HWPhdLZU2NTqUj1FvLaz49SSiVobYsopDfk",
  "key35": "ZP6z4q7XALNbUF4zrjQxwisEo6P2pCfgLXuUrkazyNLFeqMj47Zc2n8sWoFWP2GeWntSv4D2dHesvQ3B47DfC16",
  "key36": "3MkwmGwYaVaJqpxN6d6WX9ir2dNqYdianmVc5EU93mtMASgMPzduav5bePmsR1tt6VbMvcL68i8i5Ed1pfjPqAUx",
  "key37": "4ewekAX5ajbsWFZkZxcxNJ5CzotLsziiULKT7BqAumYfZexQarBzqUz8H64gkuWVJBbZ7i7bAFr7yMvEnEp5274c",
  "key38": "31vH8fXLDJnRHTcB1MDhPnf1gAwVDvZhJRk8sH38vSkMqUPr8wgz4Z46AJH7MAwvEYS1MEcidGw9ykdPmniRPZ2U",
  "key39": "3StSXWUrwqSqE1fugktBzR2SzgXFm1spyPNvT1XLN6587UJY1EUFd7YjHwJwBDQhsVqJToTdzTAh8uRmyEFQDe2e",
  "key40": "5axA8iS9zJDYHXZmiPwwVtBGjXaCLxsDZa9y7SDTz849NWrukBHu6PRqmEWBUBVKVxW8j5NNNzrrmMMjsJjfzh1e",
  "key41": "5dvWpsDtBKr6xEmwhqxgYS44FYQiuhLC9hTRCgMJVowujPBNeehJ28WZAdLf4s6hPXEtZjRDvE4VdDoQ2sbbnNe1",
  "key42": "49eW3KJXekC94cJEMLBRy9dG7SiGCiKGm7RGKLpcys1Fdu91aN2mU4xpCEbFJrtMqkhHv2es3ZdBCj4d5y2yG14g",
  "key43": "MpRo4hjdpudRExefHbQq3jUf3TekGnW6s1aRecq6bNntog5eM5wXUFRXsU4rRKoy6FcuztYFPfV9hC628ggvGyZ",
  "key44": "nLMmtXaPSAXruv2z4gcMYHbJ5R73MyTqRGAvsZJRg7omGRw8F76HNDNfKhTfCiQiwfRFro6ZAeUKiSzG7zZ3Dok"
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
