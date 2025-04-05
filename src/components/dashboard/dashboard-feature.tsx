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
    "2tCv2gC26rz17AN4mLm9sagr2uV1wc2TmLb2k5LbR57iYciN2yckMzhjuS1hJUVr14YiZ6uuMLNFCzbvoGaWGaKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHTsSkrZbCXZ9hmbeqcB371ugsSZ948zWy9jTLWCd37BJdGZ87zQmnxiZeUqDtoMTqh8Hx769mXw1miMouanZVX",
  "key1": "zbVc68sSzt2obU6tp3JUCdu3EM3wgDtdvpycc4RPk44PZazzLu3Zugto1nNhd8fhdrk3nptsNeQfsUhCGpsFZ6Y",
  "key2": "2bCWEDYNgsLQAXBK5TaAsSfmRGBm5gi4uSF91HibgKMH2UMu3V2GtCvd2Q5vwM4TdVMG2ikmgbc7vEemqX3NGuXC",
  "key3": "4SGUA2kNBL3u1NKFDEpCQtmHxVm3YpENCvgADHnRj5GFwPuZDup9dLPgNerh7EdbWuK1f8ruwcAUpF8VsKMcT3eS",
  "key4": "bZWr2FinPfgRkLtJHNWWo1eARbJag1gQj3XiFk1sV1f8WtatvPt2UCa4MVZpDnorXVf4zZtCgqXCEx1zVKCiYy7",
  "key5": "56JB1cgM8rbRSRvX7umed8tRtNrnevVKaWemjJxng1JthYTxH23BFvATazb9yDT8AwXGFLR5b9G2GpZgyDWjfbc1",
  "key6": "3ceF45WL5pWk1HKXyvQtPakNppdMFBY9pQ8YiqDnBwMRVdfwWtDXyfyGwcrRdKdtMRc8L8gvSig45mjwmhiVM7mp",
  "key7": "67FpHPXkJH5wT1eS8jnuLKpx6sRe7sD98sABD5GVAUhfnprEw4XSD8soxKfDe51ZLK7kPNYzfPrSBT56bYu15nGS",
  "key8": "3kR4NcozuFy617fU8mxQBkbyeysBP1e3RxYwRvT4XDGrqdMGgDfe1LTJYZDnSqNKsaQcGWjJqQxM49E3AGkWXULR",
  "key9": "3yE2EcxTcMvh6Q5JBPc4oebZzWJzFMZWBYQc9pu2LMoUgjRPkV8muwrvMC8LdM5vCJuQz9vcx8RELQAKCdJ6ZwdW",
  "key10": "3MkiXvephrS6oKPaYnvytDomXvsbzAHesphJbvULfz1v8jmjorU63kkQ9mXHwLbPbAqRCnZhCqoqzoeRoggJar1r",
  "key11": "4nzmJ7Ud7cea1Y8wybHeosDSqf34S2W9LeZB83dPUnby2C8wc54g9b5WXC5cj8VECcqkcJ42S3rqF2GA3sHsehz3",
  "key12": "4ir24auv6b7TKd75ipQWF39UgVfxXXdcfr8XE1bhU9QJX4eDeTrWrRFvEDByEQFFmbqYGftYhBZfXtT7gQCkAyT9",
  "key13": "2ZwBN4FAodR8hBiNwn7yxxNkFn143hDheWbxJGgbHeXsxTog81Rav4B7LsK4QXBrXU2kmFuooBQCvt1QKyaJvu1V",
  "key14": "c6Hnya1q4k2TXppknC8YZwpsNwc6eU1rkTJEcgCDv4PSF7bNLnxnJYP8NpZ3CV7AM6vHLaezWxr4VfbGYKC4MTb",
  "key15": "2hVqntbFQLrTAmZHumhKPmyNqkq2v8rrRzxWYz8mzgHXF9HyHPXLjfznChCsX9PBYvP7Zsv7bqycy3UCr3ZiKr9d",
  "key16": "5D68Gv2KHXf63zPwtdCnfPHemPkG82iTv7hLgnmApAm4G1ip8R9NWbkEQq6XWQn26sgXMw4X8SCcZNutNzYQsvoF",
  "key17": "44QBerJ22pz7TKAorByLKz9ZwZuTAtyhR7FoBQm38Cvd4Hy2Qx44KGyiMeFhsP5prJ3y8uxae5LoGDigHXhw8yoL",
  "key18": "3wEazJ65UKBb4v4HiTrfRhGSuFxaUzSYmLEJkPLmGPT5S3apZpPy48QNz44NzJWs3MVLgh3BV2xncPLpN1fNzKsK",
  "key19": "5eYDsyFmQHdQSdEb3fRNGKkKEvsr2moYkKjhsJaxzRszFpZWfBqGNTDC1ayr1W2LmHwp2bfehWcxzMTaQXzPmvA3",
  "key20": "iJEppnoF1REVQG23YmmDPrQ9QQT8p6iXXddHXAkisqovvcUHoyQHVFzH6fGN6z5BpkWahdV9SdoFCTbBqAjF7s5",
  "key21": "Ef1yuuTyU2PV62GrvsiYHfER883ktVUMbt7zQaJu2G4HuPwvqavgRkosTVRrFBpHuqCEyEqBTnZkX1APMZuFxwV",
  "key22": "5gxW1ULRGMmg7BG6t7KTbF1DU7uWxtFGHdwd99KxgTSAzgduHoEDayRCq13c5qxtfHF2tj9ZabHa4QYDfxJVFU6R",
  "key23": "4uZ5W2evuZMU2Z2TodHtaeayVe2wN7UDFZE7Ga553QW2kawiQjAyHS4seRCXogmy16KcTDuMNpVzPAKxbiRJ9RTF",
  "key24": "5UvWSc9EykhDbdnuL5CZEL5pjrvxeujCGSwdiTbTpAN9iGWiN8EeYJ38Jaot6uKXEQdxSJk9Sj9JLkxAs8PESa6n",
  "key25": "u1vBDktYHxr6mduuynCmE4Qo7rpKPQwWbwEKhtb2EBraDr89iMqjMcADDoyF75yVzEtQkojAFHWkxcdE4fn84MB",
  "key26": "2dseK6s8BjL6KQea3SXMCyv9TDjXQbVFXHtQWiTYSNMv7AfkMkzPgm77sYreM81jcwFehhPX7JtLphDqUmQg2QYX",
  "key27": "dPyjAXe1ZUhVKPM9WfzW3dC4uK1fi8rgVfdMbR8pmkFbKU22jiZnx1yAtzohcx443cNsVikF1pefiwshPgSUDft",
  "key28": "2jac8UMMmFx9vheftZ8RNY6fsRRigU5fE4rYpDoYM9F3L1nxgyg3SJzLY8e7DuKL9vhNYUSHmnHSurQdYnwM4jqM",
  "key29": "2aWfxdX1hUCDMZCHpmwkLdayaJrWqmXWFpnghgYgzDRRjGF6xxNbzE3VhAiJP84xdXe1pyHWiRjBFyEporfjja2F",
  "key30": "3oULgfUFq4vDEh4GD5JFYjbGGrcsG5q4Lb9iaopoeAtoNiHq6qtonwJhuR794PYSq8qpS4Beg5qSt1aEAdKPhBUK",
  "key31": "4M5a4dK7qsdVxpXqNuTixVrbLNSxXS8Yn77BPZDNJcH9pCKBwQ3cTV9kCKe2BtZzznTokTZK2GfrnfCy3GXvAhGe",
  "key32": "22FdsYFZ2AyzhRPaSknKijnX74Taw88geTJ4LGgVTBwrhQRgMPz4zzRJS4EFNuHzJkSVnq3oqYFktu9HcukwJPt4",
  "key33": "5gv3BQDyTvsoLiFsUfQsDFedkXmdn9L1F5jbCER4kpaeL3zUgcG8LFoxK9PNksQssTnFxmFWQajBvduBzQAS2Ltz",
  "key34": "67HMuKpKiRmdMvkSYAjZ7RZYi925HV7pQQHeQpLQq6TRkFraG6Vye6vK1hu8YmC1UQwkKKTpexPEjMAsefYMrPcu",
  "key35": "4ZkU5qVy5zGvz2nFsBgmSLJP4uhsMatuciUBcCwMRAt9jaFHzi8KovsQ3iM44Hc6mdr1L76ostoHLfno6sdcqf9X",
  "key36": "2XhujbwkBc7x9QnWekS1qKyAzQm6akBhp21UZKNCHNKAYG6RDE2huXmPN7KNAAoiJsQBTE9rmF1wmpBWUM6EdXR4",
  "key37": "yhAXQDa3wYcb7QazDxpF7Vy1HSwWRjEALFbHzDx1ydXHHSe6NUcWAPHMgTPm7r3qF8cRRV26kAQJpcpBnoMaHHt",
  "key38": "7scd6py3iEZHyq6hnmf5Y7ysiFKeQM8A7v1HFaUzDGvSuNuUGm7aH8QMkPAwTbQgcAzwFFqwgVXfTvQzE1Vay98",
  "key39": "5EmKvyPQdDt7xqoiuZpWaWWfAr6Pgw6pzDA5n5t8f4UusMt5afFyqtBgmQ6zhMo5R78DpSBfAfGiGY3D3Du1aMos",
  "key40": "4zKEaHcSMuB6i3x1rHX3G7PYgVVFNPRayJQwZuABALbhaYHCx2cn82YtJHhAMsg8dAkzQr2ntJFQTrgCAHX5PpNX",
  "key41": "ao5mFgG4A6wFTmQnV94rzywMg9TsyeyF6tiPyy8VXiDtJsD7SjkMxwYj1UaE1UuuPvRo9XpqVNDn8hqVNdTEum1",
  "key42": "2EjCvED2VU8qoDdmK9dhNm1C421SjCM3psfXRj1sDjPAEXxuExxJo2jm44EzoYzojeZzxQdYuUyKDmhasqcV3d2r",
  "key43": "5z48ca7Y5Nmr67otrbsyaqRgnzwHjmkwEtRr129AX1kV1pMgtnUvue3j1MnCo2sq9pCrxF7xqwCq2WLUadYeeTp6",
  "key44": "hbUJfDzResGQiCiB9caC2xNkyPa7iYqJGdsdnLetfvYqtdmqpeeaUDyfvM133RKH5gJti7LaSQrdQ22sMnLJkyd",
  "key45": "5Cpq18JRgjN9zMzgTNnSAtuXw7rFTNoUiFTT9uPvVSGbUr6jk3foEyVmG74EferrYjqWJ9pmebLBnagbhXvZ2HHH",
  "key46": "2nAJJWKBu1jJZmny7sYw2pJivYRydq7oogd3rbT7kFJMVEGjR8LEbqNMSBwHQjMSNrAd9pZhXgdy9AbGarXuAWEu"
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
