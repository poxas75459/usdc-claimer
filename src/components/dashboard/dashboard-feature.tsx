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
    "5oXDZJHj6d7Z9SXZqYtr9z28CthnxJjYpnaKvfE1Cd7bZJ3hdnTcKWefDPNe14jFrVcxWQziMshmXoBZMVK6jJjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBVAByZzdUUoqRAsxEK2GRcJVAZciWG6PsHuoWgoKCUmxWqWBLFXMAG3zvgbNRw3viBKZjj8ABbYo1JkPRdYYQD",
  "key1": "5isgQfvzUERnoX4muaQFZzBJUdumzrmJrC5zvCDAq4FLDYyDxcfWywaLF8HGu13d6EB8y23ju6FmQEp4DKaCXGot",
  "key2": "5vf6kpmnJg9mzvuugyP7ftFJzLvD8PTmd9Y7zZZVBc3r64BT35Erey7rJukVo3g6Hsjvpzp4829X5sUwXnJzDhXX",
  "key3": "3aMVz96tWBm4YK3wjrPZs6emqiA7MsNJE8PNaWNYczGCxKg4tt1Lfg2KHbRDuMtd8okevci9eMndapV1H8cTFYXN",
  "key4": "4ric77KcihnZ2AxcBMXtSCSbE9z93jLrLxf9fiRiSBSozA5oMuh5p4RHyou46YdTm8mgZaRWY7mwp64xwTaF5jsz",
  "key5": "4UpmPje3rochvTTCHxcQyJKj1zr1T96VxoXHhrvciacmW4s3pfwi7DsLFHCeA3ufkJfi6GTtAGiXcWSqcaq6GWWM",
  "key6": "2QMcoiJKSUxyWYbZFhBTpLvTzuM57D1yetdqbp3X3aaxWyR9DBQJXo5YWNrxuiK8Tf1nujx8AL8zkgM9qyD8omPB",
  "key7": "ENdkmsJcNo51y2j5invDkQZoEP2nzFJhMgKYCA9jZaJ1GVWJFfBenQY3gGaDCLVtWtGVKsKqVFJrYL3cF9kPkEC",
  "key8": "3iJhdpHzXMzac6q7bxoRdVqiUAbC1pTfYJCfPbn5evGxpFzu3t3gWQQYQeUJs15Dm6gxRmox5yNCXyZE3LGET9S3",
  "key9": "41uc8A2rc74QC2wLBFy4brv3cuN18MgEo2i1C2BwvkEzLbop1PnnwqNDVt2h4G9wYFHq7Bif17zX1rDp2MCjdRDo",
  "key10": "55pykEtvnHfX5SW5icjPAm2acBamH9QB5NgzLgKehGVLyex8DUbv3fnDur8J69VFtL5ebj5tpLyJi1jBzMRhLuKW",
  "key11": "x7haSgXDghxZipMqmySKboTr5vFHF5UfvMLeMXred3jte6wtn4GCZZmh3SM8BMaUWVHKSmRn7J3My8pKd7GmRrm",
  "key12": "5j53RmPfqGMbWXTMLzV8Y8qo7f5RR6mEiChdxRqMpXW6nCPPeXJyZS8oK8t6q8ymfYV765yPPafaCaMzisHx3KkC",
  "key13": "GrwkKkVPExvCuMSPZsvSovQVidM6WdhXTdj5H4ckapzRRnK43UZu6oLSMASCan4K8T2R3hshk5YTJffCRftLZ5B",
  "key14": "3KioAjRWPERasQC67WsBRwggTYwaEX8AmjBHGRdGFkFiZPu3c8BvT1H3kMtWR8QjWaqyi3etTsAHEdn5fmuwtYoo",
  "key15": "44syrAS1R2KG2BGNNZY7hv2uRe7CtUbnFMZ4UYhqSFFXkcs73o73FpHyycQL5QGbrLtmGMyQpx6CiX1SbVt4irhb",
  "key16": "2MqarWzVQwW5wWXBNatiywXMVg8MndK68VVHUHHehKeiRZE8zY3Ucug9CakDdLUqFKg5WvkYTDAjo83H8kf8SX9E",
  "key17": "38JHtoyQiZY6JekYby57TYb1AG58zKbPv1RrE363EH8Dpr6cReC9iXSjjZRSFY27vMYwwhzqpXGxWWkpDgw48Ydz",
  "key18": "2eUurUxwUupqoTij4dXnZVyq1e8RjvGFvuqVt5Ci1fGSh53hDvpZCZQePDFYV2SbMNRdUiQtsqkkrgKeJKyndVtq",
  "key19": "39PuA1idnfHcsu69rRqtqhx7HR1Tg2JcHugd8gj94L8dLCn5ZL18uX7D8eyExZ5otVJqBmq116cAQdAA9ZMGYZs5",
  "key20": "4p1K8LeWroSynrBae1g3x8HMGdmJMcWJoZ5n5Bno8ndLmb2BGdsHp23CjtZf3fr9qzPxe3zVrSiFJUz2cxsbDP6a",
  "key21": "499raZA43BFToVP3uUv8aFBXRP5g6eAu67bqBx7myVpUd4RY7kHKosYKG2R1MxnMGgHszrTurpj6edwgX9wehk39",
  "key22": "46Rsxp2ycA9XJNvQgjfzVwuuY7Btn1YPK3YVoJui2oy76YBLa6V1jBQEiAwwgpS1egp3B5wzVF2uWrvoyWELTc29",
  "key23": "2tS2cAvwMaVnhaXkqRPevWdZJScaD6dRGpugnH6avw1CLfXYKKho2v5oJBgP9e4Fp8uD99UQ8bnQ78tJrSJ32xXH",
  "key24": "3cGtEfrpxsdKLMNpi131cNkRmhtrtWZtNZBtkm4i8s9BGNayZYHZzsE1SsksJNY7jc3WhQfvvLcoyzBMDRHbASpV",
  "key25": "59EDdnaAsHmTZg2hGDRv56Ckw3hFKT8RvRxF9kYtng2nm2T1sVAUS3K7e9U4TLmpkN26T5dgHiHSCBM4hZzWGgjt",
  "key26": "mw3vfqhYje1KPvtD35Q6sCApuoXEdSu5XQgccRrnPdCrntgCPhKTRd3ZeneAFoJNDyqFHYcWU3VAVbztCuA7Bf2",
  "key27": "2Qojkba3YE91EdTkcwskBBJ37Yf8i5kEFnChyC2WXFPgg4m9psb29ReyonYFgbAMwfVkWXF62sUrPprNLMiVLnpM",
  "key28": "2DBe7GBwYQvFeK6gEsXGQg11V3Pjq98Y3DTHwoNsuhtEBAwRQpT99kMpdzvtdfnFvERBYoWjEnaCguqQcoMT47x9",
  "key29": "4SFNRTMzagqJPJ5dUKMBeTEpbZTufKtvyg7KVKc9AUKUx1YTh5Us9DpkBq4bJSy5pSQ3m7Bwqxxb2SPjLDFRwPbf",
  "key30": "3mrohH4Hezes9pHVTVsWoyhSC7AWWtebZqjvRvvqyH68rmsNawVxMzs9LqEHMofZDXW7fgAnGaBAzHSnuTvFdp9d",
  "key31": "38rdkcKVUrKoCa6bNQfus1a56assEWR37tYUgKHJvrBvS9F8S6PafmnMrqAHGv6XmwfxBfPzbAehFarpsxeWY3fT",
  "key32": "5qqLsXXJJkR99uzvuf93SMYHP3ivdN22f29BPmVnAdjYsowpceQThJ7nNE7ynKW1XBs9xP2EEq22HUFjja3x5Atb",
  "key33": "58Gv2QFzqdnVYnxpTdnBJmLPbAZ4Tbd56YMzT8zEJ68Xshizc4vfMhGnDbKYjAa9fzfpHRbMfcQUZ6oKsBbQB7gB",
  "key34": "3D8XzSVCkvahSKkqDjDPXLCLo7FXUfu6R5w9sGoU7eaHWwB5zz7JL424MgfEBym1fpz6Smfaix7z9uXK3NbRYfwX",
  "key35": "62xRkqzb8U4K6PBwQqWeApCYogUgDPmoup5pGDKwMUWmjdd7RCDhcoBeGp1Vm1Jun74n3p5sghNxMdAyqrkcfZnU",
  "key36": "4CwQnaqK6gom8SJh9d3qpsqm2ZyNypgLAMMpffvLSUqw4FJM55NYYmXh5Yi2MAQunLGRTbNT795gM1FieLdWS6qt",
  "key37": "3LV4E5mWUraTMDEopg1d7MwXRJEy6cs7SXYi4KWAkocRLopjs5UxGE9eFEa9qDuwK7hEEpAyyoGVthCjHQenw2pA",
  "key38": "5jkBT2ootWxER41g7jK5wu6AwUGWe631eA3ijGxGnC3RRbUdMtdajJtza4pzTNwKpbEDsEMY46xU2V6LEYDwKyPr",
  "key39": "9zRgW4bu8xSH7Cg7EeFTH5UJNefgowDbza499kVPkvScBQ9qhULvpSt6H84JaQ7aoH8cqmog7pAidUveoZVeh1W",
  "key40": "3MyTVqkU6JSmnN5hRdnCQHYn6B4Sb89w9VhqSKFD9542MjqGxk2G8mEBwHAA9qaRXMf2xNvimVgyZuFAL8LwbZd1",
  "key41": "ez1hp2HbgNKassaxFEXJi7eBV7BMP5ksgGJhQ6xeGLMGgozsXEoQVVchiv91WyUWXzV89U7LJMtyDatp9ya7Bqy",
  "key42": "2oZYT3rcSHaQHxJMvYwFSgtMuqhS7mwC4aNvuwX51GQHz9mEZNMxschTv7Y6d8ybz7iX2Vxi499KKWbqVG9bKMMk",
  "key43": "47BZB3SAEWcUrVBpjLbeQd1FHjkt5rQwiMED8n3eK7PxgPpqS4PV3ND76uTjVvyNg1RuczyQw1cZ9UBg3gstE8h",
  "key44": "3ZqhB3GKvX7QM8TZuNcAxDz5VEDSAaomwXroKfee2pD1MWzkEa5aiarDqqHDFcSZZ7u9712rJAUafBDqGi5efAj1",
  "key45": "3aB7XJiSFQRdEq7yj8rCefZLrXQKPLtJCuzZcBnp1HtVU5pp2nXZr2eGh5YWv3wimkK1JtjevdaocumQ4rhKP7Rg",
  "key46": "3q1woXd52jzGFWoedCp7a4CNd1A2bbosrybCVNxkRVaHQSseDkN4Tu3p7vzXQ5q2JtYZDVoCyZgxNGRdCuPqAmm9",
  "key47": "5Ezg72tFLUyqDM5GT2mXCNrBaAuDPdTiohpnLDBETpu4bmJBvN42FaDSAsmJPHVD444vWkiiibHytR5MM88kyibz",
  "key48": "4t5TcP7Tpjeizen14FswJqvmY4XTrYArejmF2w83vBH5KU5kndS451WXHmihgXxWcn8FUJkoe32bEKAf9dmMk6BW"
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
