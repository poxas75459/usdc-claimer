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
    "2iUNjFhKptwDyuu9MABfE8xBgJCGfT3KRpX6YkZZPorFo3QU6QESvpY2X9XkLi1EdRF9yXm5vMrH6sa2HtL2NdTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d35y4JsAJ7gjAMYwBGkG4dqdAtyUFddgzr6Pm9djXAT3tuNW3AeuNrzdxeNU5nwLcEfkutWLSjP7xKeaVqv8QU2",
  "key1": "3N933B8fuP8bM9LbHiKkhLPq4ARiiwTBMkULnXZqpfAsp7c3ji3rUaZNi56d8JR4AAjtddmZxiJr4aXmBqjKVwm",
  "key2": "Ltd2TMHLgJdhCCuBJiX1itc7YXJdb7rNv2TnobRsxj9YvDnHUC866GPJgCZ3cDNgK23m4LvGpiw2xAMDfUx35qZ",
  "key3": "3nJ2UrMPL2NqSP2k9zyE8kPJKyyjcjonzNF5xziUzN3WmV6LDauhGCjjCeA6GQYK2qU48RC65kqYUGeM5ZEymefD",
  "key4": "5dK1pcBYjFiiX7XcP1Vckkndh5ks8AQ2aCQUYL2r5E2Df45iWKDSLZkBjENZRPQ2r5g5DBLh17MVXQTRPjr1DZg",
  "key5": "26DVff7YHQKJmtvUzecRejzZ3xEdxN2ZFdvSRhPaYP2Y2jRUEV56txrMQvsoooCbjCoJ9sCngwKHeBQtFnUUtQHJ",
  "key6": "4ZiheqFARwPwyqX8Tu68RAvoGxtGZLbYWec3GgWrCansH3WbYrdXJ7oV76gzmNSz8ooLw1Kzz47x3pf748EWvW3E",
  "key7": "3TfvXo1kS79NthuXtFBEczWqvfA9NYFvo5QCUjhvF3JjNnuPVDRVFY9xJRVNfcPf3eqhVXGaNbFFoHmjiYXK2ScL",
  "key8": "2Zd21dukK7f7Q37EzzEkwpRw55BhymdA9zXJaBxgc6bcXZDFTEKu7cRZCzbJ98qrGhJfFbCzNqesii5iTGd1UBdY",
  "key9": "4ac1vkkj3izXbif2bXbzU19DrXavpvMQTJiPXbsLNvfyprNjSHwWyRrENJfD2zbw7sZbczJcw24Af2wW21cqgpv5",
  "key10": "5d659y8kmQvHkakTq8pp5PCvDfPRdn73FcKz1XoLLrAkM7WC6K8Ut2av8jZeG9XJYQ99z5BZPpqnfhKDGpe15PK8",
  "key11": "5dRBDAwKD8KinFpKzgu8vTMx9YHbgxdUHNgeuWgfHBLpgpzjZZzFqtuJeYN1ENH3bVji9r3sLk9KzPqSwmXuVjGM",
  "key12": "4B39EiCja8ncY9v4Yu6UuDrfrP7tScNkhSUBHnsWwhuThhSPqDqrz5FN8hv9jpELDoB217fm6tAiKrvvxwKKqEMm",
  "key13": "3C2pEr5KgtuiLSL4aZmvEVfAfWJUCu3i31o7yoeCK96cc66eHypMaBdf9FDeeDWJ5XHLJ3UYTQ141FQtHG9SXg2J",
  "key14": "2fy9Wv4isiM1zecPywTqShJHPCy96ypYXq4wnMgVC8EMsq3YoeyXRFvZ3wPxLmYnnsiVLdS2HXGXvo3pAMSXtCVu",
  "key15": "2pr2Wsq4kQ56dtG75oJvQ6LmiCJ54oPy7rkKh3CHaKh26Spo6TuLyjwHaSzWgYPL7ywJzqMRs3SCAeFbguVV99KG",
  "key16": "4wD2sZwoftd3DbtJQs7r8q6fY9Eoox7gkAp1KyXfNAiLvwibp3awXmwB5frjjDV8mneEQm4imyhiPgJ8KhsFv64s",
  "key17": "BEFHmrygN1fzBhi2zFV3iSWNfeBqTrpFAie5eHxWDsZsiQAadRYLGcC1wvPGHq3wsT6HETNnAQPtPU5zFJAtHU2",
  "key18": "4Mr1JiDqAQTH23CADWpT9UtFd5XCn5naza5KpGrRrvFhXGaaJM8ZnCxyys4v2sDr7SUNbPHnSSLJUKeP9hw3FU94",
  "key19": "3yyCouU6J7XJK7ZktE1B7RcgT8TsAFY9nMg3SX2AMHt7ffJ7bZqfenVW5MNoSErDimmrGQvqafxAuGPyceWhwA31",
  "key20": "4fqobGQa3VRCDNxinrTtvpkKgEvCrTzNcCNwXuBnqk5KrugJPxpm9BZTv22FYwm6Ds4vMhU3YMRtjCSBUDdfAHkq",
  "key21": "5jMtk7ivcPP2uTSE3HcWF8cJDEMWmXZwVtiayw8BWp4JT7wycbE8xMsUiqzqHbekYdqBwhUhDUTipPjDChcVEtXg",
  "key22": "2ckh24uZtXVSXmKY2JCg7ibmeUR8TCijo5SgZm2D8gkxN3DYB53XC8hByZUBqjkyW6Vx6uo15vi7SEUvYGYNJgzZ",
  "key23": "2ZyZrfqscpSifM571TrxYbqyvAR6HpUJwnfWcdZaRuCrspgTLHWhQxCjbpJqTVQnWyegTdSj85v48WrcTumQ95zo",
  "key24": "3bjfT41eWFN6ymQwrK73T8Ukic8HL22tGiTHa5Vxqq1iKWfqTehFBDES9rmMszsandDW2XMiaCZ1UVXDSf4GCacp",
  "key25": "79vETkZrdTxMJ36YajtnR95f8idYgtZsT6yao7mkx2f5uy6cdPoHWvzrW77CmFFEA1H9SueJP64LAs36QNYExHs",
  "key26": "3dcLHKxWbjpcfSBw1r1i1tvwGXtwoHw2bajQ3jTombiRFy4ody1daZUQazMiCXcqMwnFeT6TYTeSUhT6WXRDH6cm",
  "key27": "as9SGamFQsyVbtY1nePeCEsXBuygfnkXgzpKhszzywYerJFYeep15xScehbNc4c5nYgWmGibErkckj38vUPjGf3",
  "key28": "5mDaKHAgLEfLrntifSUnW83LMeJtnZYWo2whi8ZpE4XVXNrxua3avYcsGiaXSAbAUjhSiEfJ8rGaGM2jpUUHvNZM",
  "key29": "XnSK4Zhe56EbyARas3XLPFyQFi8Nv3q6NKLZPtDhi9uX8qDhVaXddwNgT2AfhT7BJWk9zNUgHYVfagoiAbEsYK7",
  "key30": "4AZacdXzAohTgWfb4Eqa3p9aV3A6XbMtRanMQhAB6kq9Lcrvr3jzFAtposanjktaiTY5PUFmcq61xwWJuyQyeh44",
  "key31": "4UQsTHaGNyU3dTNpyXTDc1nCdrtR8gqksP2aN2ek772YF1bDAKAZAVss4hepiFzqYm3BxjLibXioz3saZrkDKrtw",
  "key32": "2cmUH56cAFL1ejXwa8o6XZf4AFKwcxLGYrwGFNDZeZaTczsccV9yhAzw3r9uRcgE6mwUPS9qdxSJMwRMKwTAXqfC",
  "key33": "2ZmMyktnsozUpyPpDoi6jkkv5inUvTgceGMy9688X3nRzjvvTGjwpkGy1CxjoMEYBUd5FxyQee1V1kod2px34Jek",
  "key34": "27W2HNnw1nv9Zfm9UmXk3RuzoMCoPGtw9PBRcyhWLM7wWTk6KkQTjAvZeDB4TbpC8HvumrasSz2iSBKZA3KjGTsn",
  "key35": "5URtkkU9uHoiFtzKVM962tUi3UmgKVx1qRVen3gpdwKFu3UHGtU5X67X7JsTcGNyj1W5DaxgozSLmnbfZiLzfGHD",
  "key36": "Xt2zRyxDUitNZ3FcTErpDoF4v2cgu2Ay2cFygTRp6VXjw2EnaBftsenXtg3JPJ8G62bdss13cPogm7XvT5yijed",
  "key37": "2kNPGM7pDS8gDDiSiPe7FqExdBSytERfMkigEbYoGNQizvF2uej8kbNXhQoP2yHz7DP7sWjtrbcBES3v62XPn4DM",
  "key38": "zDTZ7nCnyyK2QTCJW4wcFL8KytuGzyAwmU1Wta3fzKkHEGuxtkK3ii5WcB8m2nd5NqjGLJUfvYdYqgT4fbu99GR",
  "key39": "2B7f444KtUyLivmuixohNgRxP7ZATArVGsRVwkFstmjm62Yaz5r4Nmajg5q89hERQaCz5VBXo2PdvHu11gHKjrN3",
  "key40": "ycVJKohhvYgwj8LsffXGdPSMeKUzu6RCF5Xn33qx1tzduwZ13bd2n2Sbem3KEth8n8FRoRzG91oeXMEde2zcFSP",
  "key41": "WjXVCzKvHXTHSzN5hUvZY2Y3LQAEBFXEaqD7FnoKWqeYq9RhhpZ6LYq6wLYKr97gp1Y9wUivH45WEBYwQaJvSAs",
  "key42": "2xXmXm31Adk6JJUogry2iaRraj4SLSx5DirvV1RiDgVMqTb9zBUZsV61vfMVidDue2iNzLWsgto6jfisnxFfFNaN",
  "key43": "5UqzRggn1bohygScns965Qkh9AUqAqaLoPtb76tW6ZEo3sw9HnbcYib6fEhdrWiXF3P5ffz7YtAV2oGT7MUc82xf",
  "key44": "5EF1vDMR31n2QwuPQjPDGt3ZpykAfTpCfKsNfrZuCnhpeWCjdR3aRqf6RL3MYxzP4jLAuGixSs72uYiLrscRoPGL",
  "key45": "48uvuxuFmS4Dv9MCcwfRsifjMKAwyyK43QFKwHvbFgowAPMt4Rrcf8BYF4Wr7wcwkRTASqFaUBcMk1sXMf7fZVD2",
  "key46": "3Rhh388dgTvXAhSNQKBpu7g6a84DX4YZk94em89iSBQNVJ9pvgrn3uqyyxRzawDmCcrng5Z9QoRXBqz3Vj7epeki"
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
