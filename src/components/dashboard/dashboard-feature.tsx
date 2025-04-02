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
    "5mZ3dc4YbUUmKnUnuXGt64jQcRWFqj51WqE3KB7QkSeRwYjJi6rXLr3uZuuSsEQaaBTzoyZQXkZKPXVSi7hraqQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXkWBni4YW7Nv1RHYU7AnG1zXnB8qjXHoKpJtVBt6Ve2pDb78A2B49pB4KDhx55yWcBu2cGNjMVW2BkXaqQSzBa",
  "key1": "4kKDa1qmZqeEGGx2WNjvJW65PvFSs1XZrY6hViPToeYh8vjnAx8iUTY2kQmGJiJuwevoYvZTiVA5iWhzFnnhPbAA",
  "key2": "39YGRdmQgUm2T9ukkbPh1sFswb6Uskc8Nrc6wbt2Gh1x6fWoX8FbdxJo9VCHNsxENHhaYSk8jhTqeoiyWZ6F2BVi",
  "key3": "53ud9MYsK3hbTshftqMKm81DLSfEVWXTH9Br1Japf6Du2nWzo23zSMbJ9Vn2gn7FHJCsfrYW4wxJNac34vbp3KrE",
  "key4": "4aj4syoFVBQ7pMagFJHWwLUTeRRdAXNgQKywpFD2bmuvmnLHoQovmLH8odkL96GjbEMU14kX6jGCsEnfnWVjMs6q",
  "key5": "5Qmyrn9Qv2XHTm28q61d8xpxrhqGfSDXzXVXfHQb6TqYYKLwJCQBtUvfZHawiseo7VE7JA5boj4hPjC7XbaE5Pw",
  "key6": "xwB1W2oNEY25ycVrQnVq7ao5y8BmDA8fq4pEmjpmdAj9VuTgrUUrTv7acN7GwduccxKjGoZi4uxspLBgZQWDBz2",
  "key7": "2aLGcJUitqM8EF7maBuvNUyZ3yRFvrBkPz6A7ckSLMgwV3EDUy4hcKpEzzUhiJBDHmPiZtcVVbyZEyjgp7tqPUQp",
  "key8": "2ATBaMBu7HkikC3XneYawjno2wsBapW14iik8EBzWB5BYeKoH7Lq3hDjw7B55oeMgFNgUMQK7eYdXX4KouSPn8Ac",
  "key9": "246KHdNGnYswLCongRw1UiA5VGvtT5pg9wyiiNfYPm6YeCgqwpJNtQDqpjoFr5AzZ5jg5oyQyFLZbsKsndB7cdMn",
  "key10": "NDnA3qcEoUVwtN85LpkfrGnSxsQLpWAi1aMFkdDKwXV446z4HPQHv4SGbJooR1AyE4Pyb8u8V3Dz12rqzPFMcNw",
  "key11": "3hq2Fa8iP245YJhnd9tQr6MvbSE3QmRL29TTfV9wXz23nVtRpJJKxu69g9y1AcswGueEaod6BmKEMM2zEx3wGMQ7",
  "key12": "4vNLmsESQxbEMz3UWNJmD5qa6127ffHyjhsid66ifQ22KHBgmBhrcTbFafS7uMiuB2XKmCjf6Us1R9C6nWPhaqhQ",
  "key13": "4wShN8m6JDsDoYPbd6dDoZWdBYQ2NNUiKpi3hUbgYU7aADGi1E8nTcAVDFDajE77GFsv1PS38hB9Q2ybgRujp3tu",
  "key14": "3SZ9ySEfuvka6acwkwvqDJMAHqguK3NCvQd8x58nUJKEXFUVzZsbxnNaezpAbpZbksUpeyhkL4eEboPUgyaV2BLd",
  "key15": "36Re9tyab9gveTx8dFKw1iZeVb5ayuCC3BLVuxELEL8U6RfskfVRK1UcSRwSxXaaBxdnepYFT7dC2gCbBBY5C5Po",
  "key16": "2uoRnGkC3MBxdTy1seWXikatWSgPWdNhjYjtWgiN8xsyvSg3RUhfw4Fkjjh7nTy2dCuHqwavyCcj1A5VmZctodpN",
  "key17": "48AfAKTFhB48RuSn9sWgAA47pP1afQvo7iqSs7jDZSFw4yRkwoFa5KCtWE9nudBqLqUAN6hPSt1P5Tz7t4yVXDv3",
  "key18": "2S2ZWPCTDmrenpA689BPFuioB8iDBug6YyuT19huXSHPKjPxzDdcjUAXXq7EVU3YqWxK4XsRiqJieiTJFCL2hjV8",
  "key19": "55rRieET5DwUGaN8HFQfTzaxjPWoAkjaPYK127WvjReMUwr416KXBCTw3oEqFJTnbfQUfCQYDESnqmXhqvkiqWSs",
  "key20": "4XXGi8NH8FGJnNmeLmLsMVSBpXBehZG1BLwFQ7mC9ArM2PJ6dtu4LbAtCiUnw9Rjt4miQv59GbiLRTcEt66TMoca",
  "key21": "639gaiRFsVGfau5q8PXCwo5VgLCPFok62wRg7GyDnCmBcHC5ntnpfWyEAAY2ighDLNtmB9GrVnJ1JRJe1nJ3PYVG",
  "key22": "5mmwSpg14LqNo4mRRsPpKo8wfnunzk5tzkL3XYhDZpN5LmvzP8wYsyg9wvZTUp4NopMHAsbyrkL7r7NHtCWG9CML",
  "key23": "4aHjqGuwmphLRoqHSe6z3QdSKMamEQpWXA4ebgSVd2Aok3He2aXiLiHDQQ3vHfKfYqkNYSAKaAY4GmqphiBXiVrp",
  "key24": "47esSiQcScotV9St4UM6KhvMsfEvTbBhHZYhtZxdGFVwn4sVoZX5n5wkUC8fZ2GSHrYFAeCz69vwnGYR9KKKRckE",
  "key25": "45LtafGNLTnTM7CspSXJpFa2PB7ZZT6i3xuzGwX1xnN1GE2BDTmB15FPHZJa3TDrK8Z5XBohSKEabX65LkgA5XLm",
  "key26": "4PqQ8S5ZVQSbmYSTXTnE6EbWkbMvjizmGH4kZc3rkMKTqHz6n4xLzmuRsVNTMP84JnzAfR6M5aZwSsfpYhtCEGtG",
  "key27": "4VW3cdMMENnWDEaSQoHYXCKrmhggPBCVZqUFn3nm7hmHQMZZkXVcf4bcZLLjkkwSNhL1nf4YpznE5p6fAqCbGaJ7",
  "key28": "5VrZhfuR1Kgn7162T2QCTJGv3PfQ5fLDx3PkU7ePWHTKEnz6rRANitH78bdLYh66BTeW3XvBDkKiPQ5sKSvM89tD",
  "key29": "3qW1YMtxW78ovSkEddD8TyWqSzHgoc3d8uGSoYCPa5uxGquELGeDNJZ85FCPcdsnnmtEDxEJVQQZ9KyWCRJhjUKc",
  "key30": "YNDmcydZQFoznRsW6Af4pYwL1SehcgQPdqWEyx4TukDxYrRKFogmBZ51Yksu6obKdt9xFwE8fxjLfaxK9EDE6R6",
  "key31": "53dJPfFw5eC5dVQn6bkQ1DBsr7i94dWVkHXCzgGUr2Z9tWAxvd5h8EFfKyJYy4FeAqxumkBPStV7TB7dei5h9tSE",
  "key32": "3ZM53vv17EGKgjHtheVDqzwrjnr5whMqXPVarswpBPEvvrK43uWa9w7LVjUoL2MzYBKLadtSkMhFoFhiaqZUCZBU",
  "key33": "55M67hCwTt5BWAGJraTLb6863VRpuBhu6FdYTJBAMKxUbUw9mb49x7CU6gsA9kbCDQ9Ysgjmz3U96zwP4hLnfvQy",
  "key34": "5N2HQvZv8cmVpe6CTcB6JG7AdcrCo7woWKAoLR3nEoBCuC5HHPn5zf8scpr3Sn1qrTLhoL4uMDJMas7pBYa5e85C",
  "key35": "2ojwfxLvX66JGNU8kXa8jeZShWT7LkzDnxMWMgiDMGTuFuSzNTw5JnNQjbXp7jZwk2pN9EcnwcPTPj3nTpYNbpJa",
  "key36": "WV1VF3wGVhk1zEafTLQoo5wsVzhURSXgpyyCWGU3dpLBE8HnE36D4CyVKvW365VQohSqBfUxpsd9WUo6LMi4JcZ",
  "key37": "5WJcETgqAvMQa6rqmPBdx1LvLXToqcVmGR6NcQd1hbbhhk4PxaxW2X2WGNfMBBtuX5MC5oN6VFa8bopfrtXLjjG6",
  "key38": "XHm7HEaukAkGUuALbGTuJjhC9KuXJ7wYBTNvg3dPdh5dKLrDzvDLxJmBuv1cwArWKXzM2ba3awcJf1a5zMtKQck",
  "key39": "591qmsKwibeJDs3gWqyuHhFERcFU9zZPfo2sPgtYcywDfiCsqiWJ8QnuZsmfAFzbJ6Msjs62fu7LaMUDza1bDg58",
  "key40": "33nU9vtnzaJ4yZx4Mwpk6DZ55sewbFQn8StRx6tcpxFYcaNxd2nEABgvpyv2EJesWbzJfQkBvtrTPf6ib2TaMEVR",
  "key41": "4mofdhGdoACKQGMaMRGS7TrZEVPBhAWUCdpPWPSZCuiSWhQ86Bizt3DtbWL7wpmwENCQJL69pdhx2Fg74N1htTeF"
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
