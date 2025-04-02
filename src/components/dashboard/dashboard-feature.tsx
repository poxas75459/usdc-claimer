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
    "31URBTuzJdnmXGBCpYqYycsha6VevoWV1yPbz1rSexaRz12VFHudEa1amgQtGJmMM5Rp1owhMwxKzmxR8Vgpq3t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5gfvWneNtX1rJBTJCXo2gYaA9FMrHQjvfpWeFBi1rygg5KmTRrTRUzjm5JZCrD4gZ8wmmCTZAiQh1HntPr7ABd",
  "key1": "4agfmVwXJGdTH4ER7RXoqeKiFWv4Rchp9EwRxsR63eSLB7Bq68T86WmqrPdVDmk8S4VNqY5kvj2b7QTx5T9Jt7JS",
  "key2": "4WKnFjoBB1pNSmZ6roL3Yn3yW2cBHmEwhXD11fqeubowgJx88Fz8X9jASiKMVhbLkLWnBaAkyFPFGmipauAzRh1B",
  "key3": "TqcRcJem12Ge5qRNMZMg2e9j4uhpxTpY6S4sb8zCX9kK8Fa1gSzJrNsnq8dHwc94QHKZRoux9K9pzN2fJqSuYZY",
  "key4": "3iuYKYQR2kLGvPB7bTmhzBaUmBdED2KykKtPR4mgpKiBPHmoaWjjGF1Br5SwuqeWkeXEGopUZjyYGqLkceZfTbrA",
  "key5": "262CmCdaDKuejSDzGLrYpTj5mnFrXofxabQbLYXogH3peEVEpB26DLwWNZgsBsu1Vka2LrvCLhjzSsrWvSp3hf1Y",
  "key6": "3zHQtDFjJm4wr4qNhB4NiihxbrngRTLsp8EtY6Fyrdn2xiy6XFdDW2vxkiYNYjGCkoS85jDB6V3vRiEVMLhzgJGF",
  "key7": "2BfWe6AmuUvhPHtV81qYupbpS6mg68hnNNX5SK661zUZq8K51Mpj93dLfkENTeduocMHAAoo3SCoy8WagYgEoHPK",
  "key8": "wbQgK9FFxYp4rqgT6EU349Ma9zRV7CEbAbZn3SUGsqNxyKwZ6ndCujio1NWaYoW2rqrxRi8vk1YJ2fYjWe1Xo6E",
  "key9": "2hHHA33rMJfLhY8jPYS9tx3rhpwkAzkQQDXdLCAbv4g5o3YtrVPg3NwZwQLPuqHpHfDCAGc9SzWrZJ1eSt1ZjoSK",
  "key10": "DgyqYjD2v3WHCiSY9ZfxJvXWTS9gEPiJ9sDTagQHejvN8NBtf5vyB3ykRTwPGRFzehy3zkKYbxJDjUdzes9EN87",
  "key11": "2r5jj4KaCfPo3KmTivdbkoFSyg6PJLARjxRaeoMb53BcXNEJcjtcCd4q9PXuNnURbzXFTNLxnErSAa5qTSQjdQJj",
  "key12": "22gdc4pQJQCwkfJLgUNWkHSyqt6jhABfUFEbW7va8m3tLrSmcxyTdqxysRqQyUmmravn4j1ziZDxMxWwb1Rny815",
  "key13": "1YDjMT8bhKrtGZFwTcCihLFVgzfD5GxkR39nYGP6XiSxQtdxBtyQzHBc9ATw8YMYQuAL33dSuhJD6N69xuMfcLJ",
  "key14": "J78oQzKFTG7vYfe7etMj9BnCNNQXR4ESEHNqPsvpU7JnG8ME7HzuAvaNh6WmXGUGcnmkdXGUzZUE5ppyDwDgvDD",
  "key15": "4mpNshnBYLeKRvz8tPj9ZCycBb8H714fuPb4vtgXT5M6Jv5mBLEuxydvS3dSDDdoLe33DheuJa8dYH3Y2pGqHvE2",
  "key16": "47x9MAKMF1f1fzuLt1vFWt6aTVjqmUwh2KxtwMWwwWUYGHfZYwV8yF9nEp7XVJf49No1VLBfLkRxNWTqc4vynStU",
  "key17": "641vb6Nq6TjbNCkZ48E4G1Sm36J6kzDTakb8ecTVibfRGkBbZaig4NPuwrwXzrBAcCgd8jiABpzy17pgErPxVQTJ",
  "key18": "5D5smxJhM6DUaH1WSEYmB1WacPH2HWfCX7rEn2QbeGqBkuqdyosWnXddpJcNNdedHfBYuzHbge5QmFrZAM4xN9fh",
  "key19": "CcsugMjLdqjggV1KWKG1sDB2XpMbEhUV5zpNEAAkRxvBH4swxJ7pYUcCZSxJ1R6sEFHUXMGrjBXGfrKz4pf8jRQ",
  "key20": "4kitbTrcZSMLDL6kSsh8ziafRx59wRkA7kmd5m9asbgdZESBfLkxroDPhwnnRMDXLDKaYdy2teu5rV59G5B6mTbg",
  "key21": "3P6zXVKHqbZH7CR8BgGiznkCJeysbA8gqByysis1qhnxYezDcA3jrVedwEU8jiBvxuDJz6eLCHheoBvtXYxAi35t",
  "key22": "SHZoTtVW4hmazzwQdbKZJdtM61jsTCKthmHr6nWsvDAJv3pHJK67ifHHYb8s2oXRHAUWRKAUkmDo7BGuKLHBbfU",
  "key23": "3Hzh7Xw2TwdPi8bCTKR75BvpxAKuaQvHfroQR8LBcadifiuwd2HhpMerjoCDoiPKtnrKq3EjM69DVXjvTsFXE3ZA",
  "key24": "5HPxw21RsFzVaeLdR724YzCxDVq6A6JE1oomqLG4fbYSvcBhtL6QHVmLQkXtt9qv8tzatKbrA3BRSfchb9yjTnwj",
  "key25": "5opKPgSqhni5c7jS3CBB5MUfcqaeGPkPNthgeRnsNeCGRQDLUwf6bPuEJdPvEse43hrsaZFGkEiaoRcY9pTMbRbr",
  "key26": "54TKWduax7T2iiSvb6Yp8AzEqitB3kB5xceQPxg4Gi3mMh3T2D73yji8D53khiTCm4Tg2zX6iFR7oz3CixiPX7Be",
  "key27": "57SchLSbSyEjrh8JMwn3EabAVVVk4t6Yi6nfCKNoTSUiGmKbPrus2JDBtKk18CqF4eQKGzpvSYWdJUvNsDUYkCZ2",
  "key28": "2GKx3fBJwQLGrK6TXg9iVf8QcF1siC7hqEymHZLaqFJE8Cs5DihmT3Hfn8GwiFU3nbsB4TQ2NCaLu7mAy6MMv7Zy",
  "key29": "3qauKKck1UaHN8xg5uZP9WZbmihbAZXEkZuuxRfTNxk3GZFxrvVz3BsHoPnYYo8Y1wvpmN4hb5txUtRDzhdQ7vFt",
  "key30": "DPbyZHUkuKNFPZEeHBSGkXSXRsZFdSdHKzq5cxgvGaEzEc1BzhvGyZRo1CzaudRGAWkwUrA49Povn7GjRVJX3Lv",
  "key31": "4jboSd4vAxQeqMSktEmccfC65sL7kHESAZ7eY4UbRdnEhkd955b2aKec7k94xmK1YJqVAj4MgAQg2sY9q7JELTdC",
  "key32": "34tf8FMsn3f9XEsVN6srWRUjd2cRsARfbnkxsBMutqUy7cJJPTQjNs4gv8dBQXF6Kpd1JbPypq5nXmL4RkdPjiHH",
  "key33": "43Wm72KPifuwDe3P4t6KpZojS3hARiSYo351egDbxjLudf2ryww4W5kcrwDvGCK8gPtWya8qmYJWSW7aDhAB3AmY",
  "key34": "137Hb9y6N95uF4quibbxAGLMWUTxW4XozUtCY1xqK7abJhK8Ceco721t3vdVKShbamXSdJV3ZNeKWBboeMq26DX",
  "key35": "57SzMEAbrR4eoJU6zNWd2fEGaCS741HAMhUHPiQz9FUP9Vu76MdVRC5P1R7rmMuLLW5ibpDV53MVznkhcjac3n9V",
  "key36": "21dovCZuEhh6DeSPzk5GLVbVGTKfAN1fJ5grY7B4W8bTE5Wecd924gR8auVJExyGsLdHHUYiKH5vMpgjQcMLXStk",
  "key37": "2rNAiDRYqxn6nxp5F7YNRqdR6gXDhK4mLa51jySNPkAujKzPckRTLziBxeif7FJWjJchVy5DgeRbjVi7jFCjs24f",
  "key38": "KLNfYT5YZa3s2jAdkjAwPZPjqJ93jNcApNuVnitBxKi9CHZUaqnP1hJnNA7azrsijXfXD4EHYmWEKowivvkSog6",
  "key39": "5HuGZ8KWyjtzdN59HQNUwPHmUSAhvUPVYmXvtH8BYgBniAkR6j6F8j5SkfKGW5Lv8sK6qKwMTdUWMU7HDL3vUV3A",
  "key40": "2x4FG8aHp768vHumpBRakQjA6SJbBPkDD91NoHwmeU7FsdoHKrXENsq5M3bzwMnd4iQtJBYrC9TWuAuw9TzwbzyA",
  "key41": "4jS5TRZqGiRbacjDgmgpoy1L8VdUoG5AJLz6wwpURQjRYx3ci7MgNoXk1sKHXUBqdyAkpWVufsJ4aXcirCesaqcw",
  "key42": "23gKL8w5mrdGXTbE5Vdm19c7CCAhHBjLMv7bfB4p2tARz3AfQY7VKxVLGkmTxPskr6GPr7JHqrmCiRYBFyr6sDQQ",
  "key43": "3Cp9mo13S7QEnQKcLk2sLSGyKx3DRz45Efc4FcobNsgTzsdiViXkcUnmXggcMkMz9sDfaNE1hsxAzaB6eKQ7gHsm",
  "key44": "4dFvWJSQynW8GgpamecEbS2k3Q18ieWRNCKvYiyL2ouvMC4c4Daacrnn6Vakn2JAG6LnipTxsWR9ZLVpo2A6VPcv",
  "key45": "5pKCEBTDknvoNGWXXwSJcSau7tdvUD7YEmP9hNoieAsVJofte9eCmUqP5CbYVEhGug6H9qwZkDJaz2AK5GjAFhFY",
  "key46": "2WMrL1JS2N6MAxuu4DUkH86664d7VdQVyNMkDCySUdiA6vdmgyg9GuUz4taywUuv9eQsqb4561Mquqvyn1jXozX6",
  "key47": "3iS23JqvmEgSW6ATGmvU7qHwB81z4PTG4cgKEwdyEYxtZqWmWErsamUV7kMjkp45VTZSBCrLhhwBw7TpKQvTh4dQ"
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
