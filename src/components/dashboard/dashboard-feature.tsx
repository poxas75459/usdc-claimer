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
    "GAwvepnJRiRenXi8nhzqdQVqeeh8Y3JX7iH4RahsGRMpxzk8hjNATVdWDWd3erssiva3CAy6vCirv3NqTQxssna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36KWYFAVrBg7aaHZmJdS9bRau2twHqWc3eqXmAk3hcx3sFUJpyKHNW3ngyg8tDzffy4Y6BxU9X6JSTZz2NqQyxv2",
  "key1": "4ic14qaiRipgZJG4rpKa2V9mp8sD3MVmsQkkc8AohEqYzKyL2iBeY5dxEiS7n9yB9v48q8njmCK4J6LMiURgXtVB",
  "key2": "4o9MWibbhkLDU3MAiNKzme3Ju2dnm6pdpwigWg3W9HT2BFjW3KHzYEFK6LB1gJPq8U2E86tiBxJpowwzYFrMGdGJ",
  "key3": "5yYyYzEdoSNTmyZKYPU2Qv4mQmCEJPeU87Eqx4aVdASHy5ohcm6NwHuU3eJSVFjDY8xjR3SBbHznTsvnq5bitKVn",
  "key4": "2nTvLQezKWZsmVC9sKhuGkAiuSTRbhgKPtfHKcomFaRd8zFsDkjbLgvCCvM6ZS6h7twZZyY1gD7m6jssrZmNy6oJ",
  "key5": "d5TdinMNsHeLAawUWz13k1pKrmpLosNPwicpd6Eu62G5HYsRCifUubwzEb7RK7DFsGCYoRzL4FcYA9aKLLnHE4G",
  "key6": "4cATB46RffAQMqen26AgThHor4p9wBnA6fV1eTYNqhG69WWn7SCYLCvQu4DdbWgqkMi3nMXyK6TTGGpQLu6P5CoJ",
  "key7": "63LqEUQMqe1oXZnSzP1xyfYDh4U4JxjrdcULtrznDFau9HRNvSc7NFwk4G2ohsjkvD9U7WxtETs1UB5CJk9e13cg",
  "key8": "NrtJNBu6JYAqgDGiXHbGx3T73QwxWNWfVTMVTRLSmSQpZTKDQ2Ex6HFsNF7CkGRx2rvSdavW5UDdYU5Xx6P8Vde",
  "key9": "wsR17go1SBZShsndpQxsg23hZGd15jy8BdzSwL58irxzGuQLy7RaiLTZLk937ZmDQrbz17qBGWiT5C5hxiMWDH5",
  "key10": "2xrdYBovWE7875UcRgzTxBqDoZmNqhqKRSP7ksViQKC3TiK9aFbchNzU68sHzHFSscRz5WzFrKPXFEDpDpRoSnf7",
  "key11": "5fwi2gHEhHs78seN7A1Z5P5jjf8XZbzG1GZSPc7v1fAqyXTfypHTDMpijuEnNd9sJhkqyrctjS9UQEqboGM185Xc",
  "key12": "5yZEC2HdfhNkmPQE6BNpUiihN9KTk1FWR5epLPxr6hrUPnf9PRjEAvrqCJH4Z8L7ASaqZyaiDyfgaUziaVmuvV1H",
  "key13": "5L4GrH47ecmC3sX5r4kkzgo5jXQ7BoREZVZkxoQtPD1w2DQsCNYSLViwpcvZE2MJimrWd2o9wyxWopch8Lkfwsuf",
  "key14": "MQpKSSXzhiK1VLko9XAeP1wUV98uakNAYMUWSZ1zmg1kVJsGWkDbuD9p1fJ8ChmYUTqXGLYJVgeuDsfdDNiUvjA",
  "key15": "4vgGwSmUhs7P9rp2QJmVDJeMhAvnuEghDGQNMd9qfa7YfkgWomykfW1FHW1TQVXBaaCN4KKcpYAPcAC2PPayon23",
  "key16": "4B5duAEQmsHRZQV8C6cfeSDS6BZQK4Y7f5MZtoxeGtRkvuqcXW96kecdqGgWWossmJX1uHGLUb5Uq6Lu5wp9mCHV",
  "key17": "5HZesQ8PE9XxgC21c1A3jsJLETZuMep1cnyMJJNZzE51GM6xKakYmcDE9dAwoTSt8KS9PWNs2sN137coNZChbbDF",
  "key18": "2ytixUxAgsJYtWTWdYhvG3LxrmtkyaFVj6hmBieiXwGn6EUf1hcNdkpzMVCh2QSXGA3Ecp1CPSyFps4hWe7ic4aM",
  "key19": "65pmGXhGNCuDad8QYadjk7XG9PYKkLGVQXFcn635QBJnqgDacoM6uk6UtMabBneXA4BxKXEopNUtzpAPsVMojQX1",
  "key20": "4kJGcSMkfFweTB7HTyyeXwUkevFuZPhd3TTaLKbioPbo2jmjrJVvaz3s5qDiy6QkSS7UFvD7PeCzJDxwe9hqact1",
  "key21": "3NLHYAZ6mDvg9NviPPkk3ksLhyCeGXHLfYRPPqMrYF7wT7bWfvLyhQsAz7Bx3ZpartgUbXcZa5rWpJmParsNnwPr",
  "key22": "3wBqbaBX7iDqfdTpaDDEvAdTBsBxTYqqYktP6D8U4hSDk137mMaNrpGhfCJcgNC4sj8FBKqe5gfwV4mYwZwQV6Jd",
  "key23": "KKZV95Ekm2ba9v75vKkYBEYoRvmgULpoPEqnShdnwzWFYsvsFwwhphGuv5UDR9UGTMKigjRyhiqBe8HEma9rxHf",
  "key24": "2ouz7iFWr1vTJXBQ7ce3vFKhiLn8Cah5k4pD97BJqUsMSEpn3GBAjors4wybjj5Fm4cw2SvSyWTSZRNTa4WQmYHD",
  "key25": "4VRC4HoHQvovwxStJeQeDeU1fZwHnhUjAfJr5CsWdc32ubSZuEo11CczrrqKaN5UTJ6r9Vpc6Ng6KXnePaW5L2LH",
  "key26": "2w44cHdkQxJMBhkd4DMwrxoKuzGzqPx6YD5JNMmtp1xbqHX9XmUgRHGBui84BwyaeJWcHfeYcoYxEawyjCFSewi9"
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
