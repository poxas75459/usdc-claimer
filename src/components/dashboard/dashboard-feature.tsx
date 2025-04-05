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
    "29TW9GKLUorvD6HT9iZtQQA94dKMSVVU29oWjwzGh2bCtsKEAogerVHKvPHfLWcbmuecmG1H7pZxWFsdonAHoWD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXb2dRC2hoRi6kQAZoxJzYxXiXesVdfoh8ZzS5J9jZSUaLXBzURbv2P3uq76eDmguJkNWxmfhJs9kJzM9W9oGev",
  "key1": "4qkFhpHBWET8w5qfpUc25H9rmLJAb8FQtVTi2gJTE6RTbbVCqvLoktxu3wXaTor4gW6w3u6fJjgTE4rGDcVsAZ4v",
  "key2": "2mN5W1Aa5Mr5fL5VdwzDrkkVRj5xjFHUXd3bvYeKbkGnY6EWnGrZ8hxDr5W7Nv7v2B6Hf1tq5KqJ8CeaXvC4WbH5",
  "key3": "mYdjP5Hf7zXVdFYenp1XJSM58wpoitkHmDkh9mTZ8cFcqZm5V7cmVW5depUe2HNgLjfZhXhs6RAxGAy27XYPWti",
  "key4": "7ULqiXNyiRnguNf7BTJsZpGApumBnWELQNtPXK7PYLf8C3ddaGZpHzkS8twJYgASA5n24MbqKoJaqYyiBVPhv8Y",
  "key5": "2GQyg6tk9TmFVGZmFYHpchUFnhBdHQ87N7iXgqTNkwmCVApt5jrACVu1NkhsTCZoSh4L8uSXPtZBYoTDg5iTC8Hn",
  "key6": "w7tJAL6nuF1FckfVPbW9tuUnNjoTv1i38hKERCLjhapSAs76DhtiHVy4qWUTepooK2BEaAbPNjBjXNCXFgdQ6Ah",
  "key7": "2rsHfqRpS75FvvTy2ZGAY36GCr1YL23b6qXPRuwjTbegeFwbcwXNuruAjToH1ef2SBaZyZQAbQQn8P6j6GkaFLEM",
  "key8": "2tsVfekuuLmPjeKaP5cjNJVS2LaA2NdTAGokENUwh1h7iERJJX7jS3iKYdgGJH4y5VmKmb5b2kWpXri5aHQzSsh3",
  "key9": "5Xx934346j8JtbaizkxeucwnstyC9kH9n9m9YhENKy7Nb6WeEfCkomcL9hZwzTiVXzCcBBeUjKqVS22sEze1aWtw",
  "key10": "3UVmweLqUVdeBDF8Q6EKqWnAhqhMrhaWPKuP4AuSefnvjzzW7G73GW915a77LU9AjBf4rnkdGxK7j7crHqmVPKhv",
  "key11": "4cycJh77UALdwnqaxMYzceeM89orxaRBrYtZocsfg9NEHJ3FgUCTtqYP54hLnNpMYEbRgy3JqWZHDa4YTbMGsT8q",
  "key12": "wGZNYBsGQ98b5YvTzw5rQgV7C7RZXg1N7gkx8dTRBKWdfx6H7JaFmtdHUGxmV4623F4VyYGP5xdrTjuU7e4oWEW",
  "key13": "2ESgLCJCVtfC4DxABJMi5javJFPwf8eyq5QPh4spUcQ9DNz1f4LPXsXgaokAAsgeMF1K38CZUZYpQNSsnCDrok7A",
  "key14": "3NVAEgUyyd7mRfsXMUvoBWLFFHyxKnXs9K7gM8PsavjCJJ7b73Z2fWeBapqzdg7UFhK3pnduGnaCK7SV9iUgifCv",
  "key15": "4e8CtzmShVuM3ppiNTzYFVDAJUqXRbswdT1LzYEf8WPkQA9swVdSaG5TrK7bNkVRM3TmQt9ZNfNwBD82JhEok179",
  "key16": "39yBrthLSPpSJ3K9eZRYYQynqAXRhfZaoScEFcv5oJrxUamBbgjeJ8yivvqFJFvSVdGdrcsVk1Ribg91z3ijSrm",
  "key17": "Ay3yDefSxkLnDY8fc1hw28VV5HC9P3s2RVUNTRwuN547ZnwC946D1qoHa4j9E11NqQauoH3u6baqt5QTkmLQ6CA",
  "key18": "39Ee457RXXXokvpXfkivmcMPPG2TDxoe8GKKwSWHsnvhhyLPhVMxdQef9BnCp5L7nghD4xnBuz7mLvUJ1yE7bue8",
  "key19": "Q1EwqWpm9b7WZLR9SEhnAboD6cMzHde2zswxDQg6Js2Hrf6ZBGHDwsPRz9zaHiwRv7mhSfyZKavwvxEB7BKkBj6",
  "key20": "56F8UQkcWWjUN74sCuVTi8iewqh45p7D2s7ewRimv1b6QuH1LwRgbphVtvB5eK89TvUPgxda2mPZGdQYTqLxbgwH",
  "key21": "omcpnDbJvzFjg3ptShMTnuKoeTu16sZdsgakQdqSLMbSTsm4xY2Z3bV8WeXe3TetdakWw5BNrchXeRYnprtX7Hn",
  "key22": "4stMEgQUtKXvgj58uQSpNZs9WpuPKqYtf66G9i1ude4emGRwbBemad8493at6KJH7QAS1QvF717E5GgtwNo3foDL",
  "key23": "5pi5R3UWfom4CoqVTCaDPWAiDRi7uvyBbP8jtxHTrXN3rMg6c7aWLf4nfgvUc1omMUKQkTw1j26X1nipWxBQsjqL",
  "key24": "aXsx9dnF2W9yeYSXa3ZzDYF7uBiFz2LaRMuAWBCJVZ9YAmnQ2iixtUtK2JDxvaZ1KYVZ2BDmqj37cv2ELHcw5St",
  "key25": "qYFi2vq4w88gBcMTpKtKNLH8KHk21RpLpDyZvcjS3DddtEHFTZu4D8HEBBL4i1o5g8kfzXJCT9QswPz7bYxV2XE",
  "key26": "4pTXAGwfpG5grkNHCrQMpEjFwKgtBK3DJPgJqarCrgFGJTTnmamWLmCFHWB9jAEWJrMqSTESjFAXhJ1H6LpE8Gn8",
  "key27": "61A3evAKwumMr9BUAxzmAD3kLHvGgMfTb1zvh5fvr91p2M7HEXMjyervUQsBQRBi3RnLB7Hu2NLG5RR9rtCJgCEs",
  "key28": "5f8rcVNim5X7TttXcKduGJwy6XwntdPxmZkuTDz6hCBs6fxHE9p6Xe7HYFrnLeZk4XpdQJoCDr8BNFpehmanz4i3",
  "key29": "33sJ6e4smo5oYnsZJVTiEgEnvMpra5WTxP6BiiYgzNkRpqX151v45pkH94XoTj3FD5t5noPzqn3ofrpQjcXQTfES",
  "key30": "3V3VS6N5h3dr8FVqpEjTVqLhG6zRMzy5GuC8ETiwzbhKQ7uMvMPt3y189An6HcA3xTir2QLJhgLDEiFzNPnE3tn5",
  "key31": "5UPQSQavkAkwpVLMYitBhrxKbELgpCB2ZvXZhbGzvR4Vuy9nZ4ugSCxnoGw4CFY6ZqGSrr2QkDSFWoSoxZ1gnQ46",
  "key32": "2qtUUBaD5ydxmZ2kLx9hEzjeqs3zdAjg2pTSkH1zc2Y8ukUExRHEdfpemAckwKKZBr5EVZUaUycPuYTntbAks6ML",
  "key33": "5pVqfUTZnfpkrE4RnHuN6irect9oYyLhpdyZEcuxHRHk2w39A1RRJe4bc1WfzBsv98Lvd61GMkdRVcEeyP2smJjL",
  "key34": "2vKcEtn879hi2QsbrBtdWDM4b8wvkf6sJG9AY6n69oG2qMPxRE171Gxt5JEsstvZfWBqrbCrJDnApV516Gh3APr9",
  "key35": "5iNFWRsyhsmurS2arfw6aXSQNmyoY9unfTwyEuijvb2YbNnLUjUDSZMqWQX8cRahVV7vGx55m6xgH8cSeBv1JtdX",
  "key36": "3GhAwK7jXPgrr273sC4Ro9Xoog8drnFp9EXhtjKjuimqqtWM6Yf4kUNsKWmF6ximQUw59VXsV8k2WabDPpEv4i14",
  "key37": "37ndpLVigpYhsJ4qhK2jfyn9ysfrpi6NQcc1ayEEKQJ5fTapEQJVF8HFTnKPJiREhBSQV5sshxNBHte2JV3YRbD3",
  "key38": "5vqw55WtRqjTgu4v8WTerFhBEryoh9GT97nzLFwJwT9Uan8JT1egwD4maSdoWrQuGaDgPPSyPhjScZ5yv88QFqyC",
  "key39": "4gvBzYrkhaNwZoeLzn3MX2LyQ7NbtK2pPWnbVBhHKKxJEJQen85WQ5gk3BcyidrsxrYVVERqgoxKPu9wGr7SsaLR",
  "key40": "4Ty8caWSUfAFQ78wsiUZLFJmc6AWbdBH7D2cHsTxiiS7YkxWZgA33VAjec9qtkbJdbwo5uhTQPojV374nLn7CZ5p",
  "key41": "4ajyDAvARx98WisqA2rB9SAKjW68hJZf5CbhtpYnarNUHFqv8EisaF4HS47e8X2biwrJH5nCXHW7i9FYZBm2poeL",
  "key42": "3eNmwowoM2G5niJAoEPh5mUCfRmbvFGf1B5pwEhbQLGQkdA68zqgQzJ8XrF2gyEGAQ9UaidtScNCvB7LvV6mysRa",
  "key43": "cFNp15WVxJjrAreXZ8DtgqVfBemVFKUgoh9PdSRvvmqaFBarMQcoToGYtXuWKbWV3VeMi8aKShZBTnrpENgYe2E",
  "key44": "4GYvoiVAkAk7iTwvrRrPeSUJz1WqpzzwyyvqsCK6oFDtJDCM21eFsEsfjAWhy6vCmGH38U1aodchbbiooArGkDPm",
  "key45": "5Qtxq7JnbUhLT5d3QGiESVeh5McNvBCEHYL32bd6VK6f8UqG7fWpUfrwkVbvi8oJCSRz1yCkbnpgihDPpcYaRAwe",
  "key46": "5h3ex1aERSn4PGqFBjepFk19yjSxCeo4ug9Br91dn5u2VWnrbGQn5YrTN2u92ne1vUgbggtFDYcbRitDNFf1XGDT",
  "key47": "4BQ2x2PpbhfFnn9Dts9HGj6aYpzbSwJYfsXiyYr6r8eBQnFodGYekV1BaBQs9DdigSaNZ7PoMo2Fzsafko9hS4k5",
  "key48": "3zNaSfK2ye19VNYNbYt2d8PXhGHNJ6N6vgs8yua2aVjStSrqAcFTpC7NKBmXycR9mmxTc3KrSLsi25S49ynooPa6"
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
