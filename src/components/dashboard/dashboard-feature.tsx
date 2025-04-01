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
    "4Apyn6jcNf1mjEFu2UwFNsmYD2cPKpt4QHyx6CNmi9rhyTne8GHcgWLSior2AwRMr8ntsb94D1jJDgZ8ixCQ8eRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDfUPwaXAodHm4UeS283TDgKgQtWsKFGfzuT518dTvXspuMKGjDnUUnjSP4XodNB65o6vToXQqwtdSaDRmXLUk6",
  "key1": "3evk1XtzL4amJjST84FdeuT3fdDanYisfYgDCZqhxrxgVLFZU9WD5QLVzC7iCXDRhek7BVz1i7giGyboGeW8UToW",
  "key2": "618rW97U7Bs6gd5oBqH5zxrfzxeWdgfCDjAJddcgKZVmrtyPhywqLBC1dNtaJ4UdXXRnXjNh8ZZotyCzWnLyGD1o",
  "key3": "QBe7BXAD2nZfeCL5PBuzf5c8QvNa32GRbxsQPXjT6x6jJEdYG2fBSf8MnYmRskQS38mNZiAW33bYkuMT5CG4gkS",
  "key4": "5hB7rLjfK57v7AGQNoWgkpvwgBLV8xDWZ52VjXQvnnrDvM34inDYm8KZxPCfVmcXBgkeDG7o6eSop8TsVX8djUYc",
  "key5": "4AYQAseuWS88u7dQTEZixbAtgSrKByPSJQ2Z6oUxteJcpvKj66G9eERXGuVt3LwJSko8vYAYfsBp49JfbpVifNTQ",
  "key6": "5V9jnBj6eP2pmNm7LxcsbTHPnmagMxrJ8ZUniLujESQPtKLmfgigeVxCDXsqCuz7pR6UgDSURUZNTKDFb3bWNXTm",
  "key7": "tPfaKBMxMKeSqi3KD8zppeCXjZUvtQqUojYNjrUjAEes3h1SusB9tHBnXHmsg13QXtgGe1iEBBwWMvxJRYrRiLJ",
  "key8": "4MoyB3NChaVUHFUZXJQ3c8tLXnzHepFRHF1ve58RE8Girk5amdxvhAbN5EgcLwF6d6SMRsHbM5etCJDfBUdyGBt1",
  "key9": "3HK8nzdJMLkndtRr6e7ZhAwGf8hjYk8vES8uQWwoMUVjBEG6jY5aK9Xy2vbhJKBarhFSNL73qrpEExTPeU8RpbFK",
  "key10": "37N3Hhegwzs8XudtTjmjn6VVg82vw7Tekv3vLAnDyw7YB9qEHaX8MXcieqGxEx8jxmsCpkjYbo93VmDTV4TuK3x9",
  "key11": "5BnbCpz3irZJeeUMZu4DDP7oeUKdNUhUxQjWYiV7Gktx8mfncBKJ1zGXiGpiVRhQ1NUCGCEWjpMq879eh6Fne8Na",
  "key12": "X8pfE2ARNtQr8rrZncumkayPxFcneqz9tpB9Peky5Z59ByGdnJJCBgVaumG5PhS89zwMo3UkWFASN8T7KHXx8jY",
  "key13": "2LyC3mKXCG5HbzTVwUrW7QhZgtBYDqLqcGvcEM8aMHTt9kMEj1SzQNSaFnTfegDC4FVsNVinv1QkEJe7RKnsMPKL",
  "key14": "5Yt3A7v6fU8ByiPQ7bbzVKdJK3Qb9HoaHXHHqDPLTmtqNB4rfHQ16H4WdVnCDQL5nVBz57mJnsw81UoW4E67VARE",
  "key15": "43LYxUN4QUspMnrDMExQp9zaExyn6grXdZW6kH1sxwhPVpTj5uv6qesGbtuUmq3BdTsLcze3Z3JiqZcSq1ENV8ps",
  "key16": "4EhzKbQoZuMCrvkQS3xWQFWHfSsQN5AUsxDBDvixLWbFMCH9gt5CmkPpkw7xARJ7GizBwazteALZwsMZwT283hN2",
  "key17": "2hfikzVLwV8Pm9VtPk1hsD8TQE1PL6weevCbeJctTVXSKNJAZ9by8W2M4F64jzvbAf8FYwvvBxZ9atvdMm25ppfr",
  "key18": "42Jpd1RsURLEWag2iL67ybQD1zYhnSD6hCq4RKCoxBVMjqemQT22vFfpExnaqJMi4hRjmZBgBuwmk3d5355D7n7j",
  "key19": "4AhceFJb95Y6maw6XRPEFn9tr6FxKhQuEaVY2p93SMhBeKeGxQHrZMkSRfNdz5LjsfNHzHFkkjMcfLrti2vFmbdv",
  "key20": "4zZyHowGHeDyrtSNoUcyBpSRAnFCYCNp6LkCKtXgvwwNWodKT7auFjWqokbEGmQmgZjT1JiwCd12YWWh2zkRz4T6",
  "key21": "5jiRAmNEiQGmSxL37iTw99vnE1xSFGXAknP5FoqC8fmSd3Uocqmtz4LK2aXZdMWrN81yVhKXF87SdM444u4HxwVj",
  "key22": "J1y4a8b1Y7Ww7jzxrajSaaY3XdZjdVLWZDvQRtSctvvFEY4bsj9uCxTBML6b5kkK1MsY7vzCyyMYiHbU7GmJ4tJ",
  "key23": "x4vVkGbSbQnXK2A5DKMBANQNqQxuHSbyBG42HCk5ELzWyrjUsgjkyheXFEw7urY7edVXjpvRCRtYGfH59xgUT8L",
  "key24": "54UFYSsbDVd2FiBUt8CFoi7wC7uMBTgCphr2Ur27gFrCt9AwdrX4jyDZa1cDeGry2Sh9y7WBLhUpej78xvR7eH6v",
  "key25": "5C7CQv5aTJSptqLUGuWfKgYXoMZrncL3UDuHo9t4CQyE2eF59MhehPSHHxaNXzsLvbc43UdUyVXc3v8go3UKtv3H",
  "key26": "4R5HZ5JUSXZLSwNVNZyW3F29L35y99a8s2Y4Z55JDyJXFqBdqAjkdsAPLu9F1UkGNZc2xKRBN5RptoEdFKJSUDSK",
  "key27": "5tQVUG7crn4qwCPsRzA3JXjFM4uLSpBUq2NMYoAVtC4555t1YexmhKVYzVucszVB7cTCkQasYDfeJ3U6CKQHZmVq",
  "key28": "4RxqXB6FGfsCE4eTBYmu4vKEyavGuUZqnPV5B9jCwQNLK7f7WS5gwpRP2HFsr9Qx4AnPU6cGYafPbgwS7WtFVdnU",
  "key29": "5B1JUuESRhskMNk6XDR5mCtQBRmHCwGRw4H453iDq3kCF8ukzZQRpSrFthwV3kJEnhDCxqvGgGcc4dkxeGkHsQuB",
  "key30": "5VEEye9hFQAGbJznqmD1hxyWNM1CVvB3xgJ5YmY2mHiMZtw8KNLKd8oSHxDKhj6SBrTgzJEwQ3TjDjYnTvKukLtd",
  "key31": "49hAnvRoiBqBJSqgUgYBcxDpdLssDrJ23rmRGL574cUaXdkV4ydZg1MFKTvUPCRYCNHrxLBbPkG7DkbF6mN8kKxs",
  "key32": "5ZtqBWnCcddmATs19iVnoU9F6GXeb8qLqqDWiUpAtvnfzmbWtZDrb3eJXTrfZLXvBsgoX8NALp5iu8JnMtve2zzC",
  "key33": "2a3gcanwSVv9n4nsisNEfkrxEdb961Qmfurnf5BKSTKxBpM4cxCUsGSRHqauwmpu5gXszzCugyLb6oB8uQSwEvbn",
  "key34": "3Xk2gkm6t2kbxYAcXKAfy8mmMkdKHPwwMy3qepbzFcKaPuUtuNaCKaKR9ASco5326btK9gVcQQxYPKR2fk331jBH",
  "key35": "4jD8XYzWE48r9hUntZ4Zd3QvUegMpJGonmfzH2e8qdCiNjyZUsR61xqSWdyTxTeJgJffbaByEnLrvEM4RBgFA31w",
  "key36": "4R6FDuwGhfjKP1uvVfWKuCpwNP7YYeiB6x9qBrikPdDHroishqcg2BmaSQXVXfGrNTz4auweiTN5viPfAUzwisji",
  "key37": "hEEvxe8hhfpZVH8NTvoh53VFzRx4e5gg7efcpMbMDZYsLiq6TAQZ776y58JUgkEBoiiJHFNuSviUQnwtmazGUJC",
  "key38": "2USz8NSVkZJifSb8SzatgQCyFzJ6mGsPNahgvRtcKNDFd1uG1YmKscPX2HNjz9mJ89w6LfmXiRguMyWb4qcTXusZ",
  "key39": "31ePaaM4dZrdc9qVCJ5YUe3NjxKT3JAyqTn2tUgGm4TGQvx3MzbEdzbtZwW2UaYBw4JcpWegwi77zUUEpdQTaCq1",
  "key40": "4bKqCY6pWaC38VtbhE7m2LTTi48jtXAHRqfPuFMcqL1qdUjsgE8knUScron7xPYZZyyNhSjTsvH5KVeCdSGqNyku",
  "key41": "8tfa3KCD1kabur76Cdfq4RQtFK6RNks5YL3GrP2BHbff1R16v47ULyvbDRgdfxhRsSDJW8MRiBVZdB2Xzm2Q7rE",
  "key42": "3oRYj2tGKJN9ZZ7XxAXeKW76GBjtNdqoysVcQ2jLC7PiPkRPranfu4Jmzc6Gpjgd4dwKDoZhPHY3d7aG36yRDM3D",
  "key43": "5aiJrfGd5ZA2uEEgPcYe8KX4JVTWBpdfhYGwTbZQzrzbxgAwEbcTw8YP5yjun3naJ91Lm3JF3RADmtFEsupBP69A",
  "key44": "5Gbdu6rb3ZWPp5WtPD8YkZgJSiiDQEEjdzS1eiaEFMZ1ySkvoTLx6LepWjAT4qDuQHFXkkWUmtdeYE7iBdtnFZsb",
  "key45": "5sjXCKGkba2xudiSMvZ5pbXk5Mi3CFSnfR584pPLMLkRzJBbCwLyXQ81r41qN2aneJ7P4PDYrGRHAtGeyrDstwMM",
  "key46": "5dV5JpBMgwsEWRhD63KimPwjdtSWgLLPgEwRHqqNREKMJepX7B5gfGJ8BuqLbKbDGLECQ7xDzur2DBkvjFSBTKyc"
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
