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
    "61qJmnJ1h7YjkgofRxFGLn4Uzoj3hwDD52wkVKPUKkeyYVKh5aCZfGNNgdTLYbPwFM6Sz9NAEE6hktUfA6iJ88Qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUtqBz1yPWkwN2wXtkdNNSCYXvA5jM5veoxKnXcoL7NVzqwNw1JL4Hy19TR52Lu5uV5n5jzJ7xMuSnnkqfn3fJ",
  "key1": "2QiYnWMbwxGxYuwVhYre6DqhPucwy6kiJ5Nfp3gc1sxkN6zYsTqPfKSDgE3g26qgDDUi2WjcHdZ7PrQMvg75W3QV",
  "key2": "HEVA4Tz71LmJTix38K6sYXagcMS7eNTMjApv4akhHq6EPgqJkYGr7s7nVnRk4XMXWkLDiFaCFVjEqeWF5GFFBQd",
  "key3": "4JCGbGPFSjuAjJr34RBqumJ4JHtjJhpvNRYvy1w9zDn6fjYTYgGzb3CRvmUuM7WqMbf8MEHrFAocu5FimvmH9iyq",
  "key4": "2pAmyXNd8hRLZmWPrRLQfrtTx2EwWJWBijtkRJ4qDnuxPA8sosccMxq8V9GtcX7iHYUGGwUGyLE8zGzzdWELaiWA",
  "key5": "32at2um1pMnePpTt2ZBkTfMFe3VhmVDDT7x3qZ8poAiH634SUzbJr13dmQRpmSH4pusRNDXqqKBa3vXB2US7Qeak",
  "key6": "518M49TFAHM9oiSB5rGXmP1yMRYkj6RbRivgaGEE3HnvrRsE6zWpdptdCRowzNyhuRFt2eRC5ebSs7Ge59XMBoKX",
  "key7": "3w9SHK7S8HqdzDFhfV3kk7drxRXL77wyNFJSUM9fE3B1kAUbFv5ZKQGenwjtBLEKy8VL3FgaMmgWf6i1KndbMoEM",
  "key8": "2SWiCVrpCJ36LrMZDcbZWMGE5hvHzMUrY9MhDdUrJxyeH7kKqkdyUoKQgtuNdGujHrVgo6YMhPH2jra287fRCdwj",
  "key9": "4QyxyTQYrE7pqPZpUa8txxmFc2jdgVneTDoXiZDJ76eRgebpuGCkWLMQW3pWdeyk8RSimsdDta9HTatHdvKS2qUj",
  "key10": "5sNTjh9DSq56yjWB2iiCzAmoChJfUX6bGbiERrFr95mxq7vn372NKvHfBXxy2jDKDjDixEtPvQZx4pnMbkmc9KmM",
  "key11": "2aRmuYb9b1NwC38U8auo7JQz7JtPnswTc8Zdm7jDQ7YeE5iCsaD5BWtTRgTMzx7A8RgKxoJ4SVibZtJBS1sF9ZhK",
  "key12": "41RsUmmR7MJwV9WXeRd6VfpPt7ZbPoMtTWrRRfGkgkEd95sHd92BttCc3mwmiMKv94eZoCFySuLUpF17kAjzMK9F",
  "key13": "644t4io4DLGGnb4h4WCXASjCSJfByLM6Xh48JZ8qUPjtdLUkWgfuxgmVG8k8imwmbdgZyPAHTxJdpVUx5UZykLWH",
  "key14": "n7GU7vxnWFYYPXVkYJ7sz4nmBsfmSEHyDh6PG7CR2uiXdeD54URcNP4PRRSyJsLDXpqBq8DEqN9gkJDgSCAZvs9",
  "key15": "5vmkRCXCm2Xh451v34mDsxo4oHuJDN6GZawyi7qmZJNNuDss6C5FKfXinqH3GT1ThiBnvSf3pXkz6LUfF3ymCrWJ",
  "key16": "3uDi3PWZu5gV9UzkVZneV1qWYDnzAwFJe8wVHJMdfdA1N9i4DEfpkzJVXXjjgJNzYCS9hfuf1WqS3w9whRn37CEt",
  "key17": "36WE7xxUehprhASvtTw8pYZ7swdJhSx4gMf4HuznH5swP3muk7zHoWupz735LsdPmnYbVTznT8ZTiPCD6qJNkfNt",
  "key18": "2o8aE46zhgqDGHuTHHtRHM9q7ezsbaoTirqAZjvqdoZBfZtyZ9cK6kVMUC2UafUW4ZrHw7MJ9Rowtzz5e8uCkmHt",
  "key19": "3tFj94W9oaKkmm1z3kSMdurMUyFJpNUASSN1yeonrdZLnWUaTL3pEcwUJoMkRYYDKcVBRtK4GuALqy8eNKfFsHdo",
  "key20": "95BKTm5TJUdDV5J6bDGZ9726iKwEtJWrzN61ba475i8JXvZK8Xxz33ob8AB6YJdnhPpkNTM3uEGJN9wfWsQ1Kr1",
  "key21": "5kj1DpC94ppFbyP4dMh6tVbSKisNXAvxxTU2SgP1jzzWFDz2DWZQSw8MB1ZiEqonEM6QWuFHcLiGypL2N2JMdeBc",
  "key22": "3cR7mbC76Z4LswLYau8qVX8138eZ7LeJuRJHz58BRethExgGxucjpP5wumbNNtL3vCxRy7xcHc62fazjzCNqisWC",
  "key23": "4kBQq3KDRDV5nxr9TSimLij9fff1zfKef61EAQN5ZQc67Hj5DKZPKcch5KMGLsALxekhVLMMhk61wJVQy5ZE3Kxw",
  "key24": "5v89pS6zhPgx9o6SYSVEKc9nQ2bdMT6dJfnfTNreSU7gyFyLNWhp11PM4CLmz8e7rqFmmSdFrpqoQLWmrjtemBp5",
  "key25": "2idphnJHskmNNTpwRAutCzxwrFn4jgEP7Amjpqd77CcJmWYwbEMDuqssYSGs2gYTLERASsvLbQ9AcG9tg8HYhwQS",
  "key26": "21jXV5Nm4ezTND1QyddQdJeSV1LRnaNh3SwswHVKPEoBrxCsQQuSwwu1hQJCDVAC7DBL4V7nhVkjeZbfdaTeTkWL",
  "key27": "4B8qA6v8x8M7fePMkt2g3f4vyct9nfHfq5tCbvzkzwfkZZZbupzc6328hPTYsoqRxrB4gzyTzv6LFWTxg1hXwNxb",
  "key28": "2JsiwwCKdckzHGnXuVDijbSouiZiWsx37yPS4vwnHRDMwkq5Ti6p6QxtZHbaNyoB17rvjiNjoPdajs4RhSMdRivn",
  "key29": "xywnR5ToQt76huLW5S6erpUsMYDi9w2r3FDhr63jRoUY9SkSrAYUWzewGMnr6bJaiGCoTyU5pC6q6xCArqDy5xj",
  "key30": "5js89dCTiRk8PfVEeq3btgbjsBHbLFiYmpVdDnjP729UDiv21otQvDfT34U4D5ixZAEftLaDdLF6RFShL64wRfGR",
  "key31": "5MJUQfCJ9TAVETfY8iujuaSpcgqbVK9b9rLNDSWdNJwTQB8tEhfsHZ2csyo9GzusWiSXGDdEkQWBZTkzGnP7pEbJ",
  "key32": "rN48y2mFr7WVQKgHJfVXxvgvMGVyZEBDomZzMWD12y4PRRRuHW5jjspDLqmyYMLF19i28LHHfLBGMQAhTZdUyHo",
  "key33": "2ximsDVb6QCUfd6JRyJmPHEzHaBJwdNqDvRPbhdXmsqisZ9FXSVB5tsVhqsh5um2ffJDx5gzy1QGrZChwG1Zy5Ku",
  "key34": "2dDEzu4raL6oQb8gKXp9qTM8Mgati3T2tngqskuLobEx3Xy4VkyVbGEsDw5JMQUMHN3PWNRpzBASSknakiUDnYca",
  "key35": "3THi32DTHraNrkwrSHwoVKZtGtQwQiAB2oCHLwFYRu2i9a8mSW2tSWMFuBYU5PfNwYaahUbkUGni6mPBJ9oG7DPn",
  "key36": "2mhSmCfS2beyxDentx9yCTHKt7pH8GRBwWZuRAuzXv3XGNdSVb2uYjKzYGJT5o5zqqNBYA54rykYSy35EX43uYbk"
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
