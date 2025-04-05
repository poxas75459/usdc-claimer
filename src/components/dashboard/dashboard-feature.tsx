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
    "4pRvnJ2geMHyXWFTt9Qia9wZqNnPGGjCjvRB9NYuVaJ6gh3cRgXutuXDdcubPeegMvERmx19DwnCzqBMabri5eYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDrq6eszQZRkswVF5V3Vs5GLx854EMC96fnfyJirB9mofjvEvankfkRc2e11qSGqwALKkhFgw4SDBf1jw4LLAT",
  "key1": "5q2DZQcKAWR3C4kZeYMnSvUbh8vU6BZcxXiPpxCwEXgTFYLhUTXUECaCvenbeeZkqYstb1Ew4qWrfyu3ZUGBC4AH",
  "key2": "4RHjA7LdVZWKNVD6vNG1XN1sRQhHdcKTbrtsFa6XagxrQnhqEbs14qHJZZwv4idCfnRg4XGSN986iBhr9T2ybKWN",
  "key3": "2Ny1KP8KQZQoV6SxLQEpaGrXXohdBfXRvuKcPKrSw3mSS6ydtyEgjFUZzU5eiKwq5LbWRHzNpTBBq4zGGJJuDCx3",
  "key4": "4KixjJRpQc4SEckD32GAPi8iczBFoBuv529SMLsUUiMWys3sCU1Ww4eUi9PJ45tFTkXZtbg4Q3KzHJjJqMZTSAAE",
  "key5": "63ABHVfbwTpdhBrWcf83z6XqTwWGH9kcH34sMqja2k7wou1PtH22zVeBUw7i8oVfdykDeL7yTvUpwiWBgQfHk3G2",
  "key6": "16ZAYgXbwTfJPm1VePHMDxd6khWfUbpiWC9tvYzBhSvTXkoackydnTDoWE1uFSpT3cmXb83DWH5cWuzPdeMCbre",
  "key7": "cDviXRKXeP9bU7aGzjWuKuJV3VJkZYqwAxacRhESE9A5cH7e6VDGUqGkBH9n3BkMS9DovUp28nkdisjoUKLX5Fy",
  "key8": "45pozJkpdpseYRHTfkFg9Pjy2mCZUgTDMj1SgrqEgvnCtgaB7mShQpZGVzM6ax1dSN6gewbrUnBD756KjTK4CPzW",
  "key9": "27QkW8PDC21dkeAuyGncqKt3B5oTf1xJMpkhhHkbSupp6fciWHgUxVarCEA5SEbYm9HkKsULQj8SrqeZb2K78AnK",
  "key10": "5vyGyQ9gE2unFc2zW6Fb9bo1KMzZ7pkYrN65g7Tc1SF224aeVrTLjCjr3mVCGjAHqQrKo8vT3WV4g31fWeFbFgEc",
  "key11": "ccrEPb12zYyBpKgHjoespmZ55bYQ3ba8kSzwxTvsbE4NvrVwY2KSmXoRWhQs31qzKENmx91UCMHiuoDasK5PiK1",
  "key12": "2kJoGTp9bcxrZTeXhZLmdThhkGKbSpD811P7W1UVx5Fb2uMkz7qnivhyDskT9cTPpj4WxxiixvaLNnAnuRiCeCAY",
  "key13": "3bketpaQ3Tvo4joevPjvGnMr7Y7tk72pUypKz7vw2MPZxhAGTDNiWsJhMqk3kM6Mser4d4qrZs736jsBK5Fs358T",
  "key14": "352Mgt5W7cLszNgJFFATtqJMpgQarnMTpaWRZUGLW5n2hdZ7BkSvnAyvWhTSHK4qQRnGyGEP15zTx1dL3hatC7TK",
  "key15": "5Wm14sx7D53sZcVfwMGX5BubgWgiS1G7nYKYyUkjDBF9yQxU4JjK6gwtrJknH9vFYMdrtq6QjPqHNLhVThLph4tR",
  "key16": "5NVFEqSCugLD3dSrzhLJzYNEfFV1WKqLZ98mySApBQs98TvSecdyQ9JpH5pvWRXgVY7CcfFnqY8PrWDhgzmHZzqz",
  "key17": "M7fKA9nbfX8X4Rsn2n5EFaanEWazL62ax5972SS9Ws2tDGWnAMJ1d1yyxVYarBm1VCAJdCvmoLisASxshnLxMoQ",
  "key18": "D39yiT9ZEjUEX9iDtJw16NMoiHQAMq7iKQwZS95L8T2JThrcnMUdKK2PYjjeRtc2tYzb7xfsEv4M7qyMGd9Mhtq",
  "key19": "4oAFrxUrHfvHbRgUijjUFa3tZMUVnrRFmeM7yVK3qqUHJzaiiQr2hTaAX1JXErJF4N1icZr2HhjkT1TnqkXzMjaL",
  "key20": "4mSyBRj8zU2rZvbWJ44r4TQ1MJqyKkfYkSm1TC6FhDuiGhJdauFRkNRjTBSdQgLtZ2QsaheMQgTTJMZztZuVAmRK",
  "key21": "2nZvDqHBtScK5vd3n1qGyrsRCTNbY2kqsSXkVgWm5bSDiUjgWa72FFUpHGakQGm85D849THgrbPqegSbV5vfETad",
  "key22": "4fm5eAad4hkEt6Tycnfxz3hY69hEy1s6BfRYo4LNbg1JiAbNchuPqcdy3746B6rtUnCTtCNWg773mo74GyYjrt89",
  "key23": "35Weuv3XhHSfgUWcraAN5prCTrLWwhpyiRSRcKStdmWgpjvwUiDyvXNRearkDtJ7nZyprXHdyXFdmonx66NJRGPH",
  "key24": "uvxtm1PMkESf4icRsk4JDEUBHsp4K4Bxt8TqqNigWm2CeB1z3KMEFDtety21SNBAskdtcLCucm9q57RDcDHq4kg",
  "key25": "F4k2Ty52uBw1gndk3KNhDA75GLhsVrfH9ueWRVsFZvPqz1hcaDyeDeQ9bfnUKckHgtTYNDGg6JAXHLyp8Ucygye",
  "key26": "5hit5Eg4U5s2Pr4i5ZMba7KrV1FJ9JR3RJ6xRVtqeT67bkJoGUj2TaJjXKbkSwaonviNtKiuBvdgAwxHnhcsemVy",
  "key27": "5opPwADNzyJPgcPoGqN9ahjXhRUCQLB7KKYHbLCMSEvvyAvkXrz6AnJtgth8KaoHNR5dnNFrxFMZFSHo1kvLJm8v",
  "key28": "5VkwVr4pWZNeb2VACKriae7Bo3NgKo41bs4zKcHjGdeHGyw2WWE1SoXwh1oDKDgR7t26LvDcnRt6dzfqNxbRDfBy",
  "key29": "4NPKgtLQeAy8TmC7DgWbHwqUxMKsBVBaqxRdsBKcedgMR2xhPEoa6noem5Cmyo1v8nrawRb2hASsBGTYB4eFLJyi",
  "key30": "3tET2XiJ6UANMaVvkJ7PmhWUnQF7Zp3Q5fM2JVTUci4NviWrZb4wbWUyHsruojTXnzVbCPXRKTCuAQnX6s2syene",
  "key31": "5y5xWXVnCj14yESNScBxvgCC2K4Z1L2KAdGcv9qWQNGUyWNLUcP3HMM78uGh8i1dp7zJmUuswWF5TnpQ9QnCQ7c9",
  "key32": "3oohZQj3KywLJQaQLXUEvoiFrCx5sWmwN5Fnq2rYTUySZx946DbN6YysdEGi39J5XguWR9Bt4eBfveFcd1Y7DqWq",
  "key33": "3pBsEuQRdy9t6rMNQJ7J4AMWR5CqiSWKNMzxWaY13AaQqr7KUhts6cuaCua486CNG66MfgZocweCEbqEczrJWKUD",
  "key34": "xvqqkwyXZmYhVNru5yDyaJsocxdYNKU6Pt3xPk5we6QSDJWnuPhcRwVZeQoq6idK3WaQtLb6aXn7gaT4WqQEtoq",
  "key35": "C7G6xvppeAoDmPe6c3PUrGePBoxAMHXY5soF6maYaTJF65Z6N5LhvrhztqkKHFt4JQhkKTZKTmcvJoM24rJkP8z",
  "key36": "2Fadn5YtzeqpgPz1rnxsWTDEvx1zihBeMgs8CV72RRgH1ocyijDAMzVj2cLbCvNyTq1sV7oK9nGiSBePLsA8b9re",
  "key37": "QK2GazfmGMmpZZzQsnaLUksEZDtLYwTJUtPYV4PH5gjGxHyezabxX3nzV7nqzrkPT5Y9SDWg8Jq727Qcs3xMihT",
  "key38": "3zc3NtueqFB2hBR1Ltp4FVDmXgw9DTKAQ2SHzK3ehTa8CRECfsjivsTiuYEmmmu4jd5qp236WL6LcbfV4HcMzPK7",
  "key39": "3jcNQhieD2hfAMqeArnHMvESBiSCARfbujG8x1Ar2fkgnxhtSsx7QMgAbLvsJGVbXMiFCFwHy2U4q1XVfspnmCk2",
  "key40": "2Y7qLrUEtPhcdLEUP1JRF7pULbZM3sRAhct4dgZD5RoXRRKvBRDmpiAn3kAm9EaUCsJS68Xbwv9dRrLsGQU99ncT",
  "key41": "fjQcswsQUXo54s7jyDwNJM2USsqUAcg6bfZ4HR35TtKU9UQbpQ2guBLeAx2yzc8kUp4Ds73bNqv5vbQDUStyPb8",
  "key42": "4vXr2pn767UAbuzV6QS5Ah4Kngzia6KxgQfh18bFHaV8DxrqyW7QhhzqXSkV2bXZv65zvruCqC7XwwLVbRo1mhuf",
  "key43": "FgqB3WGpLxXyMS2SzAns5QUmVpbmEbWzegK3Ls6Wv9MGnxx4dsTps7WR5y9bazLH5LqddutwwsZoTajLiEMU5xu"
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
