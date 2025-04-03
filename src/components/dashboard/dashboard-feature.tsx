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
    "4rLkHLcyuBkJUspejo5GLMVBRUv8UiiUeftU2YofGENHv8Naiegji3m1LY97SBJHhsA6zuK8QW5hAQ2utvFz2DLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oPaeTYv9rJkg4zvWaWs3tN6MHaqZpJZA9991cL93ZpBCJ1Utoux4tPWUCp9oZW2oPvoKWtqepGBnnoQVayevdsR",
  "key1": "3CC3eChcVDa6855K3mEgALKabDdAXLiJvWvtr7T7LmgfSQ2RQBHw1D3TTMPzbnPcxLMn6LbhPxic4WSd1MpegoaU",
  "key2": "eBha2NsPuzhaaA5UWSFLWynMzBZQUfTMKdPSAU2gUQ9x62EWsiF59W3k3WMXWLCMwYyi8GTuaFDR6kzdL19RmNG",
  "key3": "5z6PrkLx33rRAb4v7otPZP8M68YQfzYH3eSXiQ6zh6fKN9ZFZghVSLYvw9bBLVU8v4afHGFXB44M9gKaf8yxPWpJ",
  "key4": "3QbF8FjCC1HNHSJvRyDSvLFWmuHmogUPkhtwLXYWPE5kiEbohKQtunq6L6LZPUDxdVpaDr7LtQCg8oBpd5ZdR8qd",
  "key5": "5osjpY1TRYWrwt7kFexGv2PpAKe5ZyTRh2jePyQQYsjkpVSnHHjucU6WU98ZRxY6zG8uSbYJXBjRB3ZRTPMrBjrb",
  "key6": "3ZVfpuFkHCYewjjxAvMxCwbpFGD6RFznHFaBiXJcLjpenXWHB3o2rTSY4xAiVNuHPax4UzJ2vhW2sNd2g6Z5FpTv",
  "key7": "2xKJpByANZ9y1mbhCU1c863zw733tHDv4Z31hyVeMKVZxZ8cbafPr8wkuhc56hH1qotPyTWnRqHw3ZWJ93MA21DM",
  "key8": "2KZ36HwVie56Ahg6RquwwCfWwBeVMSjFhXfLabNSnQy64jVMn2D9tYmG7dDc2cWxs9jDEqvaaur3EGJB84WhGUys",
  "key9": "3PGZZSjztyZ3JCnxEJkJE4WRUQ92rmezFT8ohMmNxRK5b4xA1EzPDBDJho7dEqmDr5hg1JDFgq5biq4M6HivUMy8",
  "key10": "3uL2JpHXaPLMzEn2nzZXY1UHGNgFbLtYBzZs6D9icUbfn1KvTtuaYLjmWdmNXhgip7KFkBvkTf82q1ncgopF33pv",
  "key11": "3mAVyUgNyF6eaMNttCSVzQASvhNJk7PAsnAnzu1t3WFHVR4PxeCQ7QUnLgGaJqt2K8fj8zRcSnbmpJ22ZW2orYyf",
  "key12": "k55rRsUCPD3jyZLztN8Lsp2fy8xLqDFvLERHGA35ncCoukv8XNLF2JYGnpW76NBqfdPBNGqAXxkR9PEu9ufTVpV",
  "key13": "46ekVWFNPEups3dE7fL4qhCWe5WfJ4XzAmkayNed3FTUV7P4w8vMCXv7QNshGwrQf8vY6GFZHxpGKxYfL79puQRf",
  "key14": "2UJ2s9g4Thzifb3Qi4dVJu8HQRj7W3HdEoTjMzpDTyoka1iZA3Pu7ebkRL3aGNCM8X7ayqk9sLDcnKPg9LRTsY4R",
  "key15": "DYVGqAdxxBTy6fNBBvE7Tsh36ao49hT5P6cmrsTzTtYU84MuDGnBxhd1JBYhMM6KJxP1YgfkhfTieEju83ZcrWz",
  "key16": "4GK4n4dYzMkpryfhFgzFDUYc9uDZkyXMkVoHaq5sWY9tX7bh6ZCQWcy54qzfqCkh5AurGaTB8mYGREwZVXSzZZJP",
  "key17": "5gB3z157o3r4jBahBsJWMqvqEM4oqCMat77WrCsVTv3P3g11ND8fi8CY9jnTSvqf6yR8XRgJRAdgMjuVfz8RcHBw",
  "key18": "598tdBoufvEZo7gBegLJaFnPUrTiRnDn4PX2zkF8vWTpFeaZF4DKv4VirjNUmedVfDUFYJYW5F5HzUkVQkdXdkcv",
  "key19": "3tzvkJWhydp2yX4XP4i7NyCEVDLotd4rVRcjfzRhy7KpFCXeqHCvzfqVk8nqJG7uocPD614rSCVuJNqLceDxihQe",
  "key20": "5FsK7NWsK6FCo77dbsBoGLW4mHfRK6WDGR81ndUEUd5PPGFRyMo8mLMFAFdahwTCSUgMipQWHfrfjqubwoSxztEz",
  "key21": "5FcdBffscJjiCGhpjKzM5tC9QYQ9JZ27RzEMiKUrPrhXCrRt3c21REZKSz53P9RTTG51DErHCwPCw5qk6t7B2sRF",
  "key22": "4obigQgfB74u1jER7WGyf1cSvDw9gjmGDUzqq6JyUNivL8BM7kWNXguvkWQV2y6pJX2fuxpm4gaLeUZBLTryAPgH",
  "key23": "2sTiFcwCfPTDcnbidmEfCnUBXPbYC1rePFMm5dMVrmfRPzmNLaUZGJSfcgSKF1NX4kdrTqmZdr9ivUSLoDgBAgdf",
  "key24": "2ppmHJQVA7e9N6EWtCpHvHpfbvQdH35fLZfvEGr6hEjUGVZikU4bu6MVPKR7rpkBzopk79mNcwD4yyUapG2uhpnr",
  "key25": "rBTB2jwk59cvJaNK2CU2sLENnnbpZphrYpicUcuayZXhGJkDcGpcsHpgnxCCyGbixWVQgj2sQx4QaUC8HmmZVaw",
  "key26": "586Mr8DyqMSKRywcx23JGrJjigpL3cy8bgraUrqaxip2R761UbDmdY3iWtXBDJKU1LCGBqtwZmNenCr6dU6Yphcr",
  "key27": "49S97YHvXCXy6pZLHHxyvYEYw9LLW1RkVHvnXHQKt6Twycpw1ZPb4juCn3quZUcGXVv29tCjBExjHRpW1wFwyUty",
  "key28": "Vp6GeeoDA5i8tK8anrUNU1ufNLK3DdxhEExgMagsE1qZxZxHv3vDKWC1w7CDy7TwisT2iESAwqX5bkuojYPGeZa",
  "key29": "4LYhE5Ejsw6wfbmrx2zVCTPUUQ5XBKbcCQxYhYhHbBCFYTB6Nd6VKMgMbute5NSKaSJtN1zqwcU6xoDNBokCTM3R",
  "key30": "4YkUzXUrc9K4HtQxWEeGXnNw4FZwRYpU3bEqzeu1Hh3FdBvrLUWwXGeH4xMkat2L1Df6yHRgsjfrtjoZMG7RZdQW",
  "key31": "2KREBZVBfWVTUcR1xaAn9p6NsJ7r5wh5L54Ej6eTpQPJoCFWti5BMvbSLoApb5sz8RqHYiic4oKJb44PeiGepQDm",
  "key32": "5CmbTUbu187urtYw464faV6Sdp8MqZdvkGiziR35NMoHX6AeALArhRAYmWCqh21EG7DSsUZfCdp9zPS9M6jD3HVV",
  "key33": "4G79jCVpxjt9tQqjAvtp7utpNUysPAPTahYqE2RQib8S3EGiiuDuuXmK7B6fJSWxeVy8yzCH3sPkaRoLV8aF1Bv1",
  "key34": "4a5pTCbacXsLBQ7ACW7DuXZVRkpVXrvkycp1FJwANWtZKC3TrjT4EZYN7zyNAK3RUVQP49zLERsEKAta7GbFuuvv",
  "key35": "5xdiaXvcVpMUz2YvmePGSTByB2JLgd3KTJqvwpx5Pmj5WKePihuhKDwLJUH2tLURrXCvWjLMusbX5Anzvu7EwQjf",
  "key36": "2Jb79dsBehFdCKxsPobb3Q5SzWSChkVRmeFoTFfVCog8sDJjqcnWgL5ADJgtuhLQGyza4A8F2hppw1FZQAQRx6vd",
  "key37": "2bWk1UH6Ds7gh97nuGKSFw5Jivcb8a4MoBWUe1KwwGZhb451g8txRxmWwKWkQcdaZWJ9hoUxMALooqH72vzEPBnR",
  "key38": "B6gcfmiV3dZTHj6qV8sfp9SxLqZ5A82A7v19HQTL1B9m2u7eP5yMYNH92xrps8xuYHPXBrRDANFX1JdACRg267F",
  "key39": "3yZ1oft1mrHqxMB8gQ3cqygoPmCtv45tuaM6ajv1BBm9SMPJCJJpF73xCBtiDYZ9qrRV6XSTiL2ySRARjamV4boV",
  "key40": "UMeJ75w8BjCfmwTxgP2dyJAPvy6ZsRw5T4EQ3urQFqqKoUK2Gk3oA6JtRNGesvyJF672s9GqqydM1RVvpXsYbFv",
  "key41": "SAXH4weEiVS9UFutM4cSdQvRgeSL1Xbs2FwXsJ7Q1XNCKJKHmicWNeMGfpJmCKgCf47jEHRGTzhSyUUXsDbw4mZ",
  "key42": "5zwg6cXA7dfb5Btfayp3LrGc1BnNqZqQuGARiAfRmibXvy77dSwqYrtmPuyTKN2rtq81hYKXwQozdofFkusS7yKu",
  "key43": "5nWZ2pNxDxtcH3bdZBEgXDb5Nd8C1XzmrNoT3FKdvcrhjdWH7JRy5Ld2wyYFwKt2rBpUjCPWdQ6ayHhP3DaqezUT",
  "key44": "3CdFA3Jc2AZnRBvzkW1eE8CkbM1ap1TZH8CPqo7X8THAYHx6mR5hkvi5Gn3gJ3m6osrHfA5tXa7hq7N42F96bQLh",
  "key45": "2ofWuMPVYrDpuytTkjkUH6sgPoaK3WLujFFPZTqseTokd1qiS7aimi3PY8vjowqG8c2CvSydzxiQLo1ZgAYKVypZ",
  "key46": "3KAv7PNHTVjn4QC6MMDHzcFiQgw6oqKpAa1sH9WQZFC5xHpcG5Z1Ft3F7ZSuZnBNZZ9LE1VdJJy8QgfGWJZ2gxZG",
  "key47": "4wQ9DyexHoMTYp1waSHghX18WqTfVNETQPiwro1hZq6SeNNiLL8yaEoKYTKwR2hWMocfPhKFgiMPwircEQRZs4AQ",
  "key48": "2wtqwsQB2mSodu9ds4yQUKmzX9agwgTfETUqYqmKhLcGymNCotCqBXB9SVw9iVTE91X2rCFZwZ7d15aTn9ZQcAga"
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
