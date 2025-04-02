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
    "Cqa2C32GstYmvARNDTrYihzXQReFZC1oE75xXprJLPyWkqKagmY9VD1YyoocgZJv4jbbVeQvQXB1vaKneyZ4dUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odtY9D87PDYZpWHnaU4qZSqouBqGnTVNbn4dsVaJ8M1QJMXud19KJGGg35tJdoucp3oZkQkNsL6LwXELjdnLyhW",
  "key1": "4TiiZbXnLTcwdteSiwW8GsJm9rh8tLgj3WSMj9DeKfVkhinHqs9pTrjtjbu9vuUFTvkjaoyCQPYNbSoJoABnMJNw",
  "key2": "cV4U7jaNiFrNcfFv5dqe73sdVHVsVDhrgRAD94wDSWTuMNnwFQh2QfFRJwk4KVqXDgqw7qFVgYG6vtqM8mj1qHm",
  "key3": "2zQTu4hVmsCTBML4yoCAauomdih5aeeBRCpyHFxaTHDe3LHwovSjJSfjkNYDfdiKmvGEuQDFMt15DVmDDcjoVLLN",
  "key4": "4mqfjQEK3siMWXNpSzGcHnY33wZ8ty7zf5QpUZ17TgdaYfmQ3Lef4cFChq7ooywgdTEm6ajAMCJ732CmxgsGSEZJ",
  "key5": "271p1pZznLu8YTCzcRafbZvEGZkqGcvm7HKZ2CyLBdiGQVvv2VjjnKgiFsudhLwbbs6Fx9DwbieeAXgs2ivNd67b",
  "key6": "4nToL2vJGSYJSdtQhyde5Ba85Ysma631guEnMuijKD4ssAUmmTn3FYhbUA6FJQhjPgaX4NcrppHuogE3SwpdSirw",
  "key7": "2qbyifMaXXWmE94csLbQXGQCKFmSp77NKfAW2Cb9tVVtECWBj5J3bE7DeDx7auoH7KtXkwrDG7pNQo7Lz2BHeSZq",
  "key8": "4yGtoNTpDN8pdTfRURCGgdPnvJz33PvvJCkPjFLPuQA8XYpGVE2gjS9gT1tetdqWRoFR4fTCxAvTgjhdNiidT95Q",
  "key9": "3ghDoRLDiWUwSHTqD9Shep9SURBwNcE3TvHv8h5Jj3Eu44Gq9BLpU9khzSYrjQxN2SA6z79HJtta5T51f1dKD3Pj",
  "key10": "5HzwnTkLxRUfRJNWnSMEpQvAZp2Bo2Q3gSHqgfBKhW25Sa2bZYkWy3Q3AR1vC3fTnPreb7th738UfykrMS7pXsRz",
  "key11": "3JXXqTSV5XwC73Ub2eTqbg7sh14CPa1h25k6HQdfpp1FYEwFoGv5XGyS7vWvq2H2bmPwZsCAufR9mjeoRc6Pr8ZZ",
  "key12": "4XbE4cvYMcTAoZ3F9qCcv3viWd9MVuqq4KfTeLqwtK98DEfpXbq8nUa6Cr4uerpG41sDXZiDobBinN4puYFTauFb",
  "key13": "3TgLdoLhvsdxVh7mjmouobN83EAWrUR1PYZXVp1tt8jR6rY2DvvS76NJCMGLeuGEJPnWqku29k982WUf6zUdVoE6",
  "key14": "43bj2HjsVm2SZX8yfiQTbVHGpTKTLvcZoSDpkFep58HSR9KZ7mLUDbjJwCcAWaKNHmMVDvyzTQhNJcT66rh17J9m",
  "key15": "5jKdQTpaU14pYXnzyb1sK6FpBPJgQmMAoTAGspJ4z2BPUGL219ZBic3UHFNjLBUY1dUH7M9EYmvxQBCZPqkpdHaA",
  "key16": "3kZ3kd1yMbcScz2kg1FCt4WCci1E6Dr2WWe6asaVxLALTDBkQnAroRstDCM9ZwxmVArjcJTpwSiRRGov3mYFpLoU",
  "key17": "4CzBswimHS8YvvA2z4ocGSBHm29biDRJZLneQiouaNe5UZ8AaTbeybkfAJzHSJQ5arVRRX3mckXJxr7Dv3FFLDSG",
  "key18": "2ukgkPufNhE6KAz2i58gzKTBC6L5WvFXQUZDJHjZLTasi5BkwbnwRhiLx3kazC2qTcKbVJxx4LCSJj9EZopEuMwo",
  "key19": "3Q9BnW9DDa3sGS5LHmR5WRuXmf6CJ2WTLMybSRL1RFCN77LomDDQnaLK82CX9KLdzta6sykWZrp7jxJmWn48umJu",
  "key20": "xeFgcejx1jdCRKXPa91L5zNuxeQJe7pRChMLandvwYR9HB9ujdMcvgLbhGkpp2sLf18i7iYZabAyNrbAvzqFCds",
  "key21": "5pJcyNxbCGWPNqf7HgRGrMMUbhS2THvU4x2Dbuysy8QuNripSoPXYdodTaQeeuV174EDf9hc3KnqeyfgVjJnMjna",
  "key22": "3z2tG9C2VEnK2e5uiwnvhHr24wJAm1gGSDp4be7cFBNhNjqZGoBoG1aR2XTCiBEPM3wBp3tZqNzoBZvMSUw6K2Dy",
  "key23": "5BWD8B8QVEDLaq85sQPXjUjCFp5b4yBAxY53mqb9NKyRUaGNr3AQ3mQqP7xpkikL6YYf3QFjcV1oJhfWHVu4pjVr",
  "key24": "2VV6T7uTcuyw2SWfTkgyQuX1UeGWbTzrwNju5ird2PnKaccV1oE6QFTeV6A8iJ16cCk94WxPqYCj6YdCoSpfbnNW",
  "key25": "5B1xCiSrfaBgc7pGWmu523apL7EWQjfTmsVd6374DxPqydvD1ZZz36kyjGGv65MLAdW7hkfw4dA8YdXrfupp3rbX",
  "key26": "8VzNcpYmRJtTh5w6Lt4Bo8z4SDGQZNzRYLBMZhhxQAzfo91cG5PactTyXrGWHKUruBNJyRh75UScacgr7QxvLwi",
  "key27": "5qdpnWF6AxhZeZQ3tK2o3ctZL8eXGtwc3FgeVXdigCHSB6qao7jiwBWujnYaK25jSUcX5eNn1LzBZtV69JkW69Gx",
  "key28": "21Dg1L23CzCAjqw5hX4zFd3Kx7i681jAUp587LpF1jCcLasonqUb6AVcZbQxoMfdfDdcDwwfkMCz4e72kHRshdyQ",
  "key29": "4BfL5Zrq4ZGzff2RzYRyHR4E9gMDNwLD39y4UJPacWhB2kzAZkFP1QNDY2e1KwNA5zRkC23VDP1R7d6hXaNraC3d",
  "key30": "5nuuwCsJE5c8CrXLeevhVKTsv5fd6G7UxRreeQRMcKNkZdAkmYMyLQmR9aUU1jGNCf6ZbutCT9tj1brrKGMPBimx",
  "key31": "3id53jzaWRgpCiBghTVrPdzLPqCaN9t9L7XCAg2i3eUb7117qgfrTJ29T9xFyNU5te3ebEX5ARZ1G8LHagRpZh5R",
  "key32": "3QvayUH4KndRpF86WWTfKEvPD3HkG9s4iHbwZh9ukf65HrjicWqys4qrWR7oV4nHQhz81ZDuK3hY6yLQ6g4BRkz3",
  "key33": "qVwBjAJoYDfShwebnT2xA64nPGMtEKSBCg9VNzxSbSr6dhw4VBcGda9eN7onwoS5cqo61LfAo5sxoEMxgDA2HDL",
  "key34": "4TsG1v5q7wUEXvEPkwi1FKLpbsNKvGVJvJymeyx9aD4LhCgyYZ8D8WAFnFoAfv2J9U9WhXzecWN2MsshoJjZbNd",
  "key35": "2KiNVdr2DHubcFNQS7cVfTgdng52Q48ETGHSXJk6sELmMpU3LLEZU1KGMEnUJidV2Y1ZkkGgHJeGt3dDi8g3iGQp",
  "key36": "4uumd1DSqujDewn3mSN9uvwgDwihjxApJywo8DRgBjDx1ixF7UhPJN3HqPJCYB24Np1d8qecckjZ388ydFZt6xEY",
  "key37": "5cmLfFy47TVuhiMtv4PKUnLeG66inAw52wign51ad7BBg63AMgToPC72F586VLyfP21Y87qac1s2RkTxP4YXnMdz",
  "key38": "3JDt2H7PnvL1rmZhgR24Hj6WixzDVSYVxppLkNrciMfKzsrwtL7NxpR5kW4AicJrcvBeYZ5kVcJWwBAHPLbCYWNU",
  "key39": "2YbeoLKbJyjXqoMXZjJLX612TR9CdtAVgHHT1FHSBR4RfAAfw68cKxpQmum1CnTZffkEvnpZmvAL6B35F5e33s3X",
  "key40": "3P2mnVE8w4VXxTiCbwFEX9jEZ7CzwL5VJgtx9DH8w2sm3mHbkcW88Y8PwTMnoBYe2G6zJrFFnsGkajVeNZWPUbHM",
  "key41": "2BfHovbDWRRUK87CjphWr6Jr47Ps7MXTRZB4watsbNg6bnGyyDwhXiXrM1yU37s5Gaa546Tpu4v52UfqdQhBowQs",
  "key42": "639beDi8aggvXNaqc9jHHPsWZybfMHvLzr3TMDovUs4M25iSk6RnBr2odkcJrxWKzAFcyqf9bmEU1psPi7vkxfAN",
  "key43": "2o9qbistyuxgbtqtmsv1gq4ALqgj9kTToaw5kKENjGEY92V9Q9qCiWSpPkR8ivKd5dUzih1Y3pRRHLqzN76Mt3NM"
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
