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
    "4DDsLQYZJ5j78P8Ni1cgJBFVs2meVuFX65hD4hq2dMYiqwMgdW14paGt8YEUKqwrFQaQqayVcm2LPR87W3dQqqdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXr96131v5XAKneqwxBQBm3VTDRTXGgaoxm6KTwMGPfEW6MNqW3kufxiCJXBtH3MnwFtSpmRipu8obn4oEn72QV",
  "key1": "hJtdBGKJc8XhxRHMRTJy49J83wtnGfEn8q2pFjRoHySW5tjVLJLCTXJLkQ9mG94LwRNdojusnpeRhzAsVScYpsV",
  "key2": "Gc8Mke3k26M5nS66ySMAjndSsLj7g7ALYMJ6vzBg9DkdMow93svp5MtNTeBxQU6FDqRoYKjrBZeXXozz4vwNm8b",
  "key3": "2chVbTzoGsaitAVPuDHdCp3diGDm5bQVxJVrLyoKtnV55AEAvqdvbB7dyt5ck9EFbCV98wkXKzzV9ecNXW5DmzmR",
  "key4": "2Cjkn3c6ZrEuGDEfC48X54XYPCRhN52Kn755mtnsAbeTpR8i8ANDY8cHev3cpLHmDx9qtaQcKk7Hj8BLsNwba5rw",
  "key5": "5obe18ayLyq6bKhVHhJNQVoeuGFD1pEyY8aiTCHrrNtwqcZMNaNQxauorEYwGQnYZaNrahiBb9zC45wrp8erHrkU",
  "key6": "4MsU57VJRARkY5tNBgB4JQFV41tz1n8fY8rkViEeDQgDD6jjGNNk3SAWtGvqvDosTooACZD54XMjJLHoEttAGaYE",
  "key7": "5JpAWzSCebtZoWVsHsAWPVcjhMjhxS18WCbVnrGYg9TpeMn7MuYt3psx8HdRTYaWzoqGviETKvMK555F55j5xLwq",
  "key8": "3YPuVn39pktoM8oSH1cbket6Dv3xK4bEvz1HmgSqPHzBe6aimSg3RLFzBFafSvCgJFLAWUZm3MyPF8oQo2aFM6i7",
  "key9": "4Zppobp6Bcj6K779CpCZRPb9rVmLBRqhQeCqh8pTbR5RqURPXpKsDxAE59sby3SunmdZXEMJ3RJh1cgKnnqqQ26f",
  "key10": "4AdVgYdeVHU8unb5FQdhChbqUSuA3zUVQzGwdGn4VDYYaMw5YFPegaCW62dgXrXfhFhracZ7A521RdPQ1LNukWh9",
  "key11": "rMjnP1pmfbXHsP2jNWLaN12up6JfKUM6ruBir1nRUT6fF7bLzMWkJz26WA7ub5MfsYDr35JsZfPtfjyhGF94a2p",
  "key12": "2YobcuNozHDo7NYboQ4J2E5t6iG9bYXjyhkYVqUkmFAfmLabnJDsftc8gXXQYrL3A51NCGQRehLAh7PV6hvV3EKp",
  "key13": "5EiUZxauVTn6TozJ2ARktoM6ZeZSauQDx4CCbuB29zYFaHAaYFxYRCkEJLXQAxcs9wcir68wvLCLZDeEB1BHfoFA",
  "key14": "xJeYy2kK3CPo3c5T8WxUBEapn3pHRs72DPyZjwxKQExii8gj7nu6aVfdroKscTdX1Bp6RX8BZdmRv1hDbesPpmz",
  "key15": "3jzdMbpECcPtreVitmMKy3fMfD4BxmFm8VGpsLMAVhHJfWydmNPJAuyRWodxwf22pLXxwKTquqGKRFxLYgtx2e6F",
  "key16": "4Hqb3bpkmvzWw1c8tB7EyLU5FnASxqWaDwhniVvLgvdZ7Gkc5TNv8fX9KfU5nDJMsBSF4MaNnKxDETtaFuQp7Wz",
  "key17": "4LYWzZM2STt6D2amZ9ETHhEwJL2u4dDVNSeDFhWKYiNaD4yLziGtrixwXczmY5jpNUoM7TU5kdE8tW1Jzh32Jwfy",
  "key18": "2Z56FZRjpbUkNDBYB5VMZ8czuesNWUeGt41sXm7jPhH9vQbknCTzxdP545iKbMkqGdQQ5zMBWG1Uin1R2z3uTjgT",
  "key19": "4gZdEDCtFcixRNx9UjFdJ5QmRb6VriSdT1tjTx59dZxw2if9vZkBoRZG3UsEtxFsVsTTj2YJb8WCoRKaQFrEBveN",
  "key20": "34fkqofJA1M3CirwzMsKFJgkwt79EKWuH3Y9uro8DMcHsE1n76rrxvSzUZLSQgzTiC2m7a1NPdkgV8AqDP32kV4g",
  "key21": "dSJ7PcLDofUaLf44vGWmdYucKTFK6jryr28ZXPTuxxAcDd9CxGhqunFnjKJsuzPNjvmxXqyFqxSpJBzPQVw8dSQ",
  "key22": "5rTpSJSF1s6BC8zXtHy5BpCGEbJxsxsZUwHtr6L2vLNs5Si65hw1CmLbhHxKEQJxfw8XuZxhZhcgpHRMrPHV9BAn",
  "key23": "58iwTYaN2iJYmcwPYYSdLHKJ9DJ5zhjGRcoj2NGmWefwHSVqF93rqYzoBgP9TRmc21rJXZnWq6TYfiwwWk16GtQT",
  "key24": "3wQ2KSeMR4WwPtJCZh7GbcLuKnSQJvzv5wv7tfXHBKk9ByRJwaM2eo1RuAfvY2WQX918WAhictEGmUm5861TFFsi",
  "key25": "3wmpjuJKV5QYTy3tfcyS39nzhXbhKgQLobxfewDEJpxfLLiCtxVxkhAhMhJNPi6Xi1UufWr5wm1saDkrLmipqSRV",
  "key26": "4V35SZsHtGYzQoCh1Lv6bvzdrjkPjG6UG7D5itHQFeHzFCW4hwk72vTkrzWDBJNAXLBu1C6Z6MGh1hEC7UhrsUt4",
  "key27": "girfMwwsnsRxCEVabAqoRbckd9pfSCG96Th6vVQbG7V53JBccMnCq6iTrrWzqEzhCh4KuP96hfQz8uwBMXvyqmh",
  "key28": "5BpojTGAq21btyFZkvKQXswoVXvA3guQ6XiMiRow9QDdVFyZ7i2aLAjcYZpVGoFNZHuiCDkWWADDJjVvTwpVS2uq",
  "key29": "4eykkCGL9PCYPaLsGgRmWY9SASQELnLyKQiYVHsiSh2JcfCuZSLzpPn3c4qKH9wLLfD5mK4JUxDeQJvW6ExEVbdE",
  "key30": "5gZDHghWJoGLmVHvSyXYrBhcSj25B4LwBmUYFEF7g2ettWoecUV28bN1uc73u9W6eMPWGXAtxMFxwvFzUTXoRLvn",
  "key31": "4roZd6bpNer1xsGM3yk9Y2aCHPvzvjUgJ5z8szsrGWv7ck4w15bmZEEfBwiRVfC3u4HtxavG7WKdgc8GpnVEso4s",
  "key32": "3risaMytrHcbFcPa3tmrzcgxM9ovtGQ8mJ26E5XZsoCPLdLV611vabnBqBY44SzXb3SqFYRTPRmn4GebqFhXGgP9",
  "key33": "2d4Lid1ugPfZM9BjuQsRAYt5PQLJEiCMoNPW2uBL6R5yuTetba3cYhe59Rfbt9Nt6fBTw2SD8qtnzCjbJrutpJU4",
  "key34": "5EvHHCa896L86Yt1TCz6VbVZb73a45GmuaUYRBaKrJYZfY4r5oEVNk9158Kw3t178tGkH5ZcpQQ2USttgiraqWfr",
  "key35": "5SGr7CAztS5Kw6rWSm5FYgwAeFv4J6FXPBRdF9gVnggSztSKkya8NM8MCGBhhMet5ZZ5F7VKJ9tRXHS8tU26sV6K",
  "key36": "3NBg6invrXbHyxpn72Gw215ER6wLWLwbZhcDxEQRHzwWxdyQqhSF4WxLp6K6Fd8M1f1hnSbjwXWRApg8vDDMLgtK",
  "key37": "2EhZVygmhxRndUpCvtNJmqz94Q5fCMyRRbEj5zAEoCnHsMZTD1RnzzgzNtFY2SKCXieGvLm3ViHzjHMUAYHB9KT9",
  "key38": "3GgMuAZneqcLwmpnmGNXTa9dhrAvfZhfpUEKkzgLRHC2MjR1CB7EMqcHWePxkJLRk7ZSDWrF86sjQhXAwwknzsk3",
  "key39": "4nSsGwEeev16iHfGBi7UQnBiePoQmWzwaK1W3mfSMCyy1EhKPDR7Auu55LHUXGcLgqUgW1D5wChDMo2qDd8Ldb8d",
  "key40": "f6iinrM1mC7T3sRVhStUcJruC37tjymux5MTR5JbK4hcTBkhu9iPHsv8gBzhqEWBEGtzqSCrcgKKbjSgWqck4bd",
  "key41": "34Kx3dWnM7R1NYKFrxRjMWX8PducGwuZ6vAwDmUuDXRPAKsGh5wfyNPFwfFqkRtuJ4ivVhKnPnBEYWAFpmmUWux3",
  "key42": "5SvMXqNLhtX6DWE7sDmETC1ZTtMxWTf2vv4nr3oz4rSxUtFTF56SpJUVoUGs638LMkdHpVSna4ix2cCXb7pDngZd",
  "key43": "aNZu54fFEtG3hd5xHyzWkRLSMxjM82tGtM5uzEJHvbgq5NEpyAPhXVz8XiznrXXLF7QTHR4HgWGEVswSGBs91HJ",
  "key44": "2FBThd2LGRTz5se2TC3em4jZo4gbGhEgSKAt4wGUx8dAc7DndDstZ1AGYirGL7NrLAi2DxoXK8Nvig41oAfYnbEh",
  "key45": "5Q3CjsxkGiLxujXthcLiq4xXnArQ1hvW35Fi47Kv9YCmoGUUPNdQSypKVFDZkpW5v6r4LwHAMmisjGKeeuCJii1t",
  "key46": "Aq1BWq3pHSFwUnkHHcTEAiSz9Ft12WdqV2rkeABFpwgjZKAJdmjC8jDDNA8FhqFRnH3TkGrNJVJdex6FTuUfgwg",
  "key47": "2WBHN7Lzto9LBYmTkycMHZztYb1UNbFkFTQZu2ZGWFxCzdxqmji5Bt6XgWh86wDpqH94j8y3Nfu3rkdXiN4RHR9k",
  "key48": "H5QeLFS6beXndyCqzCfPabvKAEk3Pb7MXydWohndk9G6jyMWcsrgXt2Mv1ZEbJLnM13UhWJhpyjHbts8kW2iuLK",
  "key49": "3P54hnXznz4oMfegrTJx2GbvmeGX3hpUpVXbSbb29xGhqqA9Dp5xMBdDoNFMEfKmGaHiPaRmf5pu2FrfCMkzVYht"
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
