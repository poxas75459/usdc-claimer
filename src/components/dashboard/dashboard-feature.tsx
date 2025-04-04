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
    "4J7ML8CLvvBsKyxJPxzqYDvx4rqsNiBs3zVFXfzV6Xxj8jzUTbhka2VkBTxzgBGWKmukvRqYtn7Khf75qNfn2mrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwJs3AXLGu3LiA5UHUfBmXMi614Ygn5z62zGF8XkMPVYBcHbyzFyNNwo2YSTFGJ4w8ASzdv5QNmhB1R9rT3pnLq",
  "key1": "53UprejPTBwUBZ6qsESotzGbNfztPb1FH7p5xxumVXWGB2ARzmvaAbef7BVtPqjyYLdUDhhd6PrZXXbVHDAHPLP3",
  "key2": "5u25otG4GuWngr8x3K1y2yj4kPdugAh69qsZovXvp9nAKYhfK1UAm2shr5aPgb5W6p8KvooQPGqweh8uieMhHSmm",
  "key3": "sRdjjKdSuUXd8Ys8aSzdMT6PuxGBiWk9oobabzj6dXWgr16NKd8mxyUyqRuioyYteY9HXcVh59zcY9n58jFa7BK",
  "key4": "4tiRAmZGoV1UgM67aSqCssFL4FYwEUoqknSCxHSk9896vf3e3HNWc8ZdG7MGRhsDdN8rwyoZjBehConm27zNBMJC",
  "key5": "5fGP4BLuiqbfRVFvvU6VHg9wRv8vGxeNhRjnBvzGXC3LCbfEndCGq22ziQRpzWFYAihhHXGUP8a7N5d1Nk68RmyA",
  "key6": "czQj7PHrQWkAymQR742tppuM1am8T8KEKbwdwimFoj6zuuUdJGbNhDeqUGY4Hbf5DzwScHsAjeNjCS6234r2zF3",
  "key7": "4uajzfJwFo6pkt3qUbCJbFiz75S7wkyv4gTC74kbdfGMxzDAhRMZSj29FLEHGRkCNEhXx9NdrgUQxhxonDthLDxA",
  "key8": "36maSRXSe89Y6BQd4MW2of2URfoSnxCTLZzS9mxDRX1aQkHutaZ9eYRYgW8D8wgZXEnnD7SBHkhyKFXTnQZN3Gpx",
  "key9": "4WN9WDVS5L392pnJZ7TMnwtQZg7GnscLPMk1FPNzH5wFokpyF98H6FGDM6trW1TTcTfEmykzGRiFgq48cnKQToZQ",
  "key10": "5PDhvq3L3USppa8LTDgBtKojxnj7x7MDbP9HnPuS8KbkYWyY6KQbXeqiVEPr7WmEeDLJ1RRVpf8aUhGkrkJ9AVN6",
  "key11": "4Y7uKtxbhiSkSoDca7aXqgTKZeKVU2Y4GAGFp2m75MwZWdNdCgXcKw95RcEAjoyUZDzvwAm6EavjY6qf21xe26EY",
  "key12": "4QD7DnPYhzXrJNjFdexynQHxmPhSoqJVLVQmaC5YoKPYNHxbiaWpaAWqrTS59cdrAAfAqdiCCdt11Vk1Ka4fGvS9",
  "key13": "3zySG2yTYxBzXDhRFsBaDuN1xRTJcEM6HqpJKj5JxKq6fPUAjWH5buqk1wXDpL4ssM5hNX9nBVGMo9y9msb3gCAj",
  "key14": "2Ym36FTm9svkDVnFvPVz5PCNp1UoJyFyRamamrxa7hZBWXXQ6JNrbod8ExGK3Ky7mX2j2VLXmgC2pbVpai8avX7X",
  "key15": "3zVL6S5GDWh9G1yt9uEf3UBV8jRGMsutVKN1VbxcrpDEYUtjKnKowM5x4EMfYhs1Xw6Q6eEmsvzmjuGUyPhZKGNF",
  "key16": "5UqguRLusJYWUxkj96TmvLyKohU1mTRL6sFamyneCyh428rRTfE5w58wD72PbcCUQ58NgfLqbgKSoAgZjUMiygvU",
  "key17": "tPLjAquvucmnN62EfaaT5ZqVqjuXHV9Ysuz6wars8khzUNtdLwsCvMbFfFCbqTpjtrsdynGQSmN8koa8saAWSGd",
  "key18": "2JHGtmavpCLL9SueTphm1yqCPC2AsyhfKHccn4ArTeTptzt9VzJzRHX8kpQ6qRi4oQ6xR3VE1DFztHPTpSiyTus",
  "key19": "5CQxGrP4qxEWWVx4UwDrS6ZmngQQmN6pt6iJM5yVD1sEZYDVq6Tc9GMAftcRmqyBbLaFpRqT1VZaSocx4Ygjep3d",
  "key20": "4JbUw7zZparLrMCARdyjem8ehG3tDkngXvqom8DHFk2wVcQAreYnSD97BCXmQsUemCxZqsLFuEZhy6KFU1VGAHu1",
  "key21": "3fR5Kdks8HhzYWM6KZkm4nCrTiTFMQ66CyXYfexCye74QU6bdqDiCQFeLG2aPuciFLPaG6dRQjCnDWahjwCfmSHC",
  "key22": "32JCb6NmuJ1YvdWVvZKsCpJocYs6sSaag3jsqiJqpjiVdgjEGUmKW7EZW2d8UekHTzZeuwSHELxN8YKvv46nmDoD",
  "key23": "44bJe59wRz7ZSj6zVKBsNsVzYSAUVU3xf84QMVoi7UXn1JCfnSabBUcZ7dZsBwHaTj4qNcHDyhQ45gYQDuDtTR5n",
  "key24": "kCrMM2gSHgVz8Ex5sjG6sfXqTsn1xtQ7xCsLfrqYJ2AkR1HqgWFwLbMwoydkajvPVq8Scx67x1GBCCYQ3EYFxEm",
  "key25": "5i5HCAW9qkDkafgSAmhigpxLXpY8m77nfnGUtG8LpYywevMKP4dRaDbocVLNYLtgnbr4ShT6hHa1mhT7fs21WUqn",
  "key26": "5VepT8tRDKJAqjVTWzYvBpxi3zW324X9r1w7S5w1Qisi5uym28whpEzwH4PyFRCX5ZGbD74wxtY1f3rorbps71Nx",
  "key27": "615f157KJvAnFVGTsw4fVp4SSeFgnni9669YHVRWLPUws65fVUQWQmhYforv1wAG4cHy6MwUFQSKHf3yJbpjSMo7",
  "key28": "4uoScjUdh2KtMnb7zGzKnh52nKJ3tC6F9AnbXE1hsA8T3DGaeKehV1ijDHdjqM4QEenoLqcZVcFPQA1JQ29oPY39",
  "key29": "3p53bygrbLFN5SK6bsiCDq61dVD2kw7DVpSPvAaLALiiXu59WFPmJAhcfFwxW7H7maRNKqd8q2QJaWuG26rT1But",
  "key30": "5DyGCBhsh6Vbu3o7qQ7cAVhT2jLt4ZXJVnvZmkRbyJQBjWnrjzX6qzkUZjpHSnjUvaxVEbx7uAkA6Zgw8xikFUBd",
  "key31": "5UzsdrnuynVkUdXjZnf4sAFbGv69JvJUkaYYCKNrKc1AuDQ4w792tfmc2WfMBRJUUx69e2ZP5e3FFbWZPkqNDb3c",
  "key32": "sQZ5gMxRDXusZ53CtmDSVDGQDWZfcS87vdNVkwEpqS4r9RDMDiLt6GE31kSvAKuYonW1EcyE3CHVnAVYVnVvX9r",
  "key33": "8NdWecHpD9A5D3PquJ1ceCWT7dweUP4qH7WKKD4jzPSgKMg2KDhFnrYMrAnP8GJDyXqX8V1vCs4WsiPwqKKcWdg",
  "key34": "4V8bjm1snE4x6Uj2SsSzvZ79pph1nym1YSEB6k354sTuBH6jo38kkwhd1MrmYJ3g1aRWevMnZ1GDLzQ8DMFYGEea",
  "key35": "2cYsqUt7GQkf7MWvRTMJdgYtzNgPsut2NLunG7VaTVYUqFoRP686obVdz8i6BLBdtFYHXdgveHFAKVZtMabWdey9",
  "key36": "36yTD3hnBSMoy4UGZezhgXwFqCsW3wYrijvLQfPpsHnSRgpbnToEBxbAEtqJ1dZu32VmribKSoe9CRafDH3yT6Kw",
  "key37": "3rM84JtUt7X6denm8StgRqLesKAzXSuC9Efnu7QRKmoYcoD3xjwbPE9SLz87UMT19hqr6x36kdqTffvFtHBybxzK",
  "key38": "3iWF15JfKf274YA7EcunepQrAbt2rBg16bLtiiUYZhoJWyg4JtabhEmL27p19rnHsn6BsLWgb3mFT9uBeRCA6np8",
  "key39": "kGDAvevHvzYuwcP72B9r88GnPXG5ZWmZyCeS46ArciTfpfbHuQmsP2ZUCMyxAxWyCsTpUnFPghqb3CGHp2baS59",
  "key40": "8iPRcTfjZT6Qp2SfEP58bovuW3b551iQNVjGSWqgujcLjYsmt2cvdYmWJBjDenavSbb5DqYBdYZ64vKfsRGBGy8",
  "key41": "4dCSLxrennqpAMApELPKBCW3DjkqFzs6RuYofkFMaz7PUmZjeCxkuRGtf4EfjcVpa3oGwTaV82U1CkXCqNuLU8u7",
  "key42": "3DGgunhGdwy7uHAC7CUpk9QAeVFax8kWECvBCf98CAx1UEqc8KU2z3xxV5Wj5y479sVxxmspYZKWV8q9EJjWUvRv",
  "key43": "4XGawjD5VDzmhXDmiARaRudr7akKagmQNh1egbgxdACaZMpwXeohzqhfgx9q951RZqCRdewBzu8r8hbN1hZPx5Ej",
  "key44": "343fyqoZYZqVeoPWFK5c9FMZZ2aoY7jFn5Mrd4WRWhMS937P5pvuw8sscweJDxmxFEkw89kW27J2cQm8LUENWZQd",
  "key45": "Nz5LRRE2wJKhgNXwzXDKmGYt6Kmf64mBG8qkHT9Fc4ZqCXsMFeJPLFmWLjQTojrm97L8KbATdvgLE7F3pMsWjtf",
  "key46": "2JeJkhxVdjJe37g7DD624bFWD9C5bvUwA4VVo9LUHkBujsWRDA2VTchvteb7sa1oh8oAaM5fihsMUgVYcLyfCrpP"
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
