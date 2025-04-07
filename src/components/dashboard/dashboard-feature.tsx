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
    "P6CdFdQk8UdkTuzsvGb89cVk9CCJ7mYL2frxkZZezfeqaeN4uopnaqwSKh5UamLqXRHG6XWpQU7ii953xa2AvTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaGD5gAs13wYqwGchWEPeNRrAs6SxVKSXbuaa14AcKL8bN3qPR36xrHzNgDoNqrHa71x9StFnQ4vz18xDa2Xb9g",
  "key1": "24G1tPoFvZNvDhwhErefUH1jy5yVzS1bNtXeW3fagxTy5tG2cvR3N5XCAqBdoLubkc71X1iATb1q3MBCAhhHuAq9",
  "key2": "3K2hiZ3pDudSzoPqiK6iHp77G5geQyodAWPzNrAd3QiThSG4MtkicfG3fTzQSApXG34J8R4Dd3XNtj5HYuxkDegF",
  "key3": "43i61TiucuEkzWrrN7zA8omMjS4UTv2ohPJHRytzXQTTuJRS7SYyBirAiekxDEc6NXnUpP5xJb6U85wFbYBxDLiJ",
  "key4": "4C2q6EHqgN3WfTCypVQaNRpY34JpNTgBmvyynP6eCwX8foNvuzhpJDQdi5c19WsR35VFUxjAvYEHHascLpGRYjCb",
  "key5": "3F8V2g6GJ97Uijs9ow7ZXNFBQv51p11JTPDxPzJArr3S8MehvBYNtq7919Wnmke1ojacV71z7qbHM64j6YgiCdC2",
  "key6": "7NWkSrSebdWAJ64CwtT1cjuu22hv2ihq4ebDpzsAf6Swot1yodFcRp781qCfhf1sjJ1DSoNLQoVPTywZXwtDez8",
  "key7": "49nrX2PgJh3o4TB39RWaehuTdgUfwQszmnqtAFGwtkW6vxWFC7n2StS4ogN8bG7utuRVt5MnjuSxBBjkDF1weXav",
  "key8": "4JqkNVyPMnc8L5F18avhkpH7Tfjusn9iPt3Bzx6ARZVUmMsdYmmCFQRL4qJFifgkRUrLUrJhSVpT8SqBWdSbd1b6",
  "key9": "2y2cDypwtTdGxV4iXw7k7h4GkVEGWK2DJ3PPNWCrPpNmoym2nrjatob3qmVR6uESYwtD2LTnzGqhw8ED2icvRQ1V",
  "key10": "36NahbGH6XYRhbjyh7ecNttesXoQkdPGPAYJ6V2naWu18iuD8EK8Y9PgBqNYrdHawDqYvHriiorC4v1a9nBAtXkS",
  "key11": "juMTbgieJFNCY9vy44xKFCmHqGWt8peNLeaQbig4jexUVRSB2KJkGmYpHBvhLUN3f5sXXgp6Xw5Y3LrwRXVSZxL",
  "key12": "4E3mFfXfmD1XHjRJat1K3zaqYMZoqT5m4jD6gPCUBssdGNfetLkywepJos8Aa12jzZ8ZK6RVdxceGK2tMhpaEXiH",
  "key13": "3JuYsvMAEBQA8cEgWKMUFzorpxBFU5o9aZGQu8gBuLADJ1YHBZDQEGoqeocUFnsUTSuvmrXZvUVaPuA7AcU7P4Y9",
  "key14": "62YEdDxgvxZ39agDkWdVnmFyo9CrNR47S7o3MMHzbvQs5hFMPbzNJ5boj5akPwheFNCvurnVWbYkDDCQh6BgZjrt",
  "key15": "3CTGSogCZNnDNfa4eBi7Cgk6HwdYoNd5XgsBi7DNFgp5jnWSBN976rAgiBsWwuskVW28EYgkJtAn5mKGK1GxBEvT",
  "key16": "cF5BetmG63KM2HvaPQYYTo44Vv7RMbQjfg5fUUheGEaknWBg3UerKHaph4LQ2ixxsLddBmm1yCQwWNiRNmGntLq",
  "key17": "3fUuhwD8UvT5UdJmWScdrJgbFqbAWae4z3DhwafturBo7ZH9iuUHbBnsQREGuq5cSU7BP3yXhy5es1zXG1DBaAMi",
  "key18": "65KGws14X35h7c6smxbvh8nxtzsb74oR7KfWm967LjTLMJj2LMipjoqs5CqpnbFBZvh3QxDELfyY8yZhkzpd56Rx",
  "key19": "3wiavPPDCdpMC8yX3XsJ9a1bFtrxQ2VdvHn5AHJ9TKS5jNrUPxqsMmVKFxU7VUiMRF1NUj7oNzdKvh6ksWTjdgFi",
  "key20": "26RzPQ4thGcGU9h5K3QRMrfRBSYYwGyZpE43bk4jyNHbiogbGQFqjtUBE64UCMVzK693QLF1LB8iBrd9GmkoMN9d",
  "key21": "5r8q4ZMvFRwNfcyDDJiPRE7n6qTSX5nH1uMcXs96MjvwxTtnAUv8kkdw4YCzvTYuTH9RqwonuRh4QgymJ2n9wZgP",
  "key22": "53H3h7MSCd1iTf4gPMAaTetRdCfZpoAcfDRLqasWTCEbCNwxG1UE39EoLmQWDZPKBd13hZDzrrUAtFwp9CEfcUBZ",
  "key23": "TccF9tHivbzjAYfgnXMzc3p3HiqrMxhYtLsmUpL6ZCxjGfQ6criKXNCTpwaF334KFqHwJXkzfQtqR1J1Dqt7MFL",
  "key24": "26he28KUWTpuiAroSWMXK7sAWBkhkssXJg7ytcJH8oxJzzWgQApPNwSjtFezTNVnQDMqx2Gj6BbJdgtkpLuU57Jv",
  "key25": "2EfpjdXbHzpXcLYSSN845CXE6TuxQmzkbLLozRCyPbwxrCEucqfC35imqrn9NaJzRo9gZ7SpDC99NiDFpQX8CLZ9",
  "key26": "58YHtEPeA1ycpaoien9P1187hzy2gaN4g2Tqk6CJCEpmEC6QBaZ3HDzPDJAS5v6Bp7pgLcngDVGXME7uAyxZVYiM",
  "key27": "4MpLwbjeJpy6R5HHeeVubAe6yn4jdbXSnXgSgtyqKhajhhC69sFMS4oqdCuVjX4a78w7SHjsSfQACTtjPtPDN3rJ",
  "key28": "ahyffYUGTcP8HaHZdTSvrqKnSWMbmKmpFdBXXuW8TTo1WskZPo8WSYW55s8QrHzop2PZGGfiMp9suVZBGvEHisJ",
  "key29": "23zxKZ4v5itBRNc2isGoAwpfqHfQTTt81Gx47f5T4sodY2YxVAnpcqtRoVoq92ykUH2CQAt77L5gB5YwSc6QxteN",
  "key30": "31DHCtakXg2dARKiaDzMEiJZv2k5syNNYKyrUsfwNXynr4b1geKeAF8pFyNi6vom3iiov2Gd5SefUxpMCo7jKLRv",
  "key31": "5YwQDrrXAin8y14ZwnDKd7wbd21qeYj41dKRHxVeEzHY6n345Kf24L2adN5dZ675cccyXr8BzdAaGA77TmK5yAps",
  "key32": "4mzV8xF4bjYpXFR14GTGKo9JR3DwfSqsXrzH5THNn9JrrQpQUNd4MQtqr7DZFYEH2w8wiyq6oMfw3PCtpauuGe2o",
  "key33": "VYfX4MDQvUCkGbQVrBvmLkmiWKg6SG8vPoAyAeeo7W8c28tKcwyjzWnrDa6ZLuYyqay1qsdgLohrdeWjjV9L3Xn",
  "key34": "2qc3a9AQYTUYPgxvwgfTt1n1sAvkPDDJ6yE7JHX6qGzycKY6khzN55byxVBVfHXRwGpuXM7u3UM2PwcQzMwF65qN",
  "key35": "2839mgS67jPY5ficAFxuwY73WaPmjjnYudm8wGPwLZKeBLNBHK2Scn7gF1cJiDW3vZzrFQ7Buv9jCa2qhvg6Nt3p",
  "key36": "Qfec8MMzr3C5s8pvcFjXNv5s3MyMbyyNbm4qRt3TtqsiqAoeocMfXUZjuhjB9mJd14h8zv8xCnzQxfE2z1WXAEQ",
  "key37": "u5CERVyJcg2r4QXRWTjer7Z2PFhji9J33Ennvn4tXk1L2ETn7BsTq7VZQBCe5UUUcnwxVfFvyT5ea9Sw3PCHX77",
  "key38": "4wcBGzSZMrMtSNq1JZR1TSB8JLiDbtYkhzVyoXxhn6eXeUnJLUEtPCkN3fCgbffzLUq6jj3RQ6G7DEHb6zvcYtFJ"
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
