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
    "36p4tXHUt5djKN8onww6fuRbUvMvuyLBuParQihwKJSoGv2MogDJbqW3yfis6g5cAkHaDGSskVQtm6RiwC8YArxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRCMyJQGPinKoPyWkAPpHhJfJHKbTKu3BoRPKD5KrGHLAc82iFvjpzaLrn4tvPdHoBKvE9c4DzZjMLjquVAt3Kf",
  "key1": "5U2a6doLXZGhm8w7v7HhaQ9q3jtYU2PEKNE4xsRC1T812UjGug4SLR4o8suK7c1KCxNwsPE8oWEbfqKkDAbFJRBY",
  "key2": "J61Q6J3cJ1FZXSjYidCsxEravenbytLLgFUruRNpLiP7aNg81PDBKaiJVz4c1ZxLKRRt2G72Aq9uvXWk5YsTpc8",
  "key3": "4cyfzocrxQc81aXaV2Fe93B9RKQP6MBVkKF5CRCmsHY1qXRZvAJthi1a5AM9bb4bYpqtWd81H5nnK5V1oQhfDHuR",
  "key4": "4wXtPUsTxGMF7pj7HxY79hes6SG9QS2v15zga3wdA4JYu6zGpK65JxxF8nF8hn8oUG6eX1hYD15PskpJoJmALidn",
  "key5": "wVdbBpXFEDHF79jVEJFmxYH7okzctvyTNtkTaJ1u9JQdMoZD91i1reiErF4c2LqysbxMdg9zLkuaksHpQX22mYM",
  "key6": "m83of8MQefYxZwbDFYy57ACHn12uih5542XPytAhRteg5eLuThwvEuz3QderKvoK2PkbxJ542GP3wrTmmq5uupa",
  "key7": "J5BAhpeGnRGmshzKHXbeUtSPBpoWfscebf8MgEwkxWUctS2wfYwZ4HWryJYx2LYoUfceuWXAYhzuZTqSCYTDBue",
  "key8": "JCXQhJRRiXD1AMC18nKkbNXc4mVZGYnJPhfyEV2ojPwx2iuDrGLmmxNa1q8NtnncE59REV3QfJ2JbR3urarhN8P",
  "key9": "5EBPxecw4L82iJknYH37uzKG1pHCXmaC3otXhy6Ai8TZbtAZ7AqUsEdLNBdFBWAmVsuk6rwkoWA9USSKVeGse3P7",
  "key10": "4gqBL1Wzqtu234dvFFej9q4y9R3wRDwaCFxSsxg7zhcnKn4HDKnpAsBS3yoYiTVwfxbMXhK5tdFNsALWfe6cZ8SC",
  "key11": "25spiGxeayD5CUZyeuniXpqX66k8o117cP1wTtCXpWR83JYk6QhnTnoTEKwDRfkkYgcJ38AC9JFYKDRqZjkLkhCj",
  "key12": "5WeVo2HGSrDBA6kA9TuyHBNdAd31U7GLePm8w4iYx4AmzrDGD7DFDvj71VX3oUUUnG6w5VugrUrMRTLRLEkj4b1V",
  "key13": "2w9fQQByrvQ8wzReDVihHaQVQr4j29BJuvjz6MFJ2rQddjv9eDrdEgashihc7bEcvkwcbQXnvCZcw8DRDL93rD83",
  "key14": "3WzgQnmKqp9hnWUQjGohYATxZv38wxPR22YDSeZecBrw4EjBnBV8Etj6XH4AN27ySWcwE5d1ysr7AcW2U4CJxdnF",
  "key15": "36h5zJGVxJngZy1FJxQRtHJAYoD1pT5pj9C54dxCv973mV2wJKFxdv8xgJq3SS4C7cBUzVwNya126yMiRGfMFf8A",
  "key16": "2VYQfSw8E2ALwAKRLRBpgQPixdSHZoc4XzMPBjd8ks3Z1uw3Ntozem7dkMX78cun9SPqfCdKGhaNAQMQQuGuS9v9",
  "key17": "2z1MY9s5PdB4e92So5mUxjAjMyWoTi3ec1DB2FfkDy6T6sCE9nzkYEqgZei1sy24aXAcwrQ2rMQeeaRuSd1tmbCk",
  "key18": "3kRmLSggrWnrD1WCnH6X5f6V3JQjkwErHey456w97JKikgw6XLkHYQrATVJgrxMPRWnERLUT5XdfGMppbNbFTHvQ",
  "key19": "4bAg6EgSoBAhEGCZnDs4UKnhaPQjSsDF9qAdiPvMoEAQHzub6LepEhdQ8ZVkTfUUhBbPnqgYxk41nFtohRxQ741E",
  "key20": "3mSro9LmXQpmrGk3za9EoYfcCtc1WJRbS6RrJx4b7jXMSRGS4zEBogxNvkk8nyv9NJdxhEKgvpAeYzQHFUMDATJV",
  "key21": "5mBsToVyMbv6VwZ7en8eExcNbkC9vaKxPezZ3zMur1bDfWerHF5qEQMV1WWW1eGV6UnJvWd3EBwbnQJ69r3cKNFB",
  "key22": "3VRSKthJGg6m1AbzhntWgPqNsXXZvu7gkvrCvP4ZwWyfjDRj5X984daDBPzqErTDRHQ4pdyV2G4ocdFHwUVgStZW",
  "key23": "oHBZJLiQdXtQM7yx1jxteX4PpAchFbmWqnZcgXHHBqmzeXg36BQgYG9ipzbYM1qMxEc5EUozEkKN1yrVkpQdvpt",
  "key24": "F69FJrHhM1X6yEcMiqVuzJfXnX1eEZcWEcYUmDphgsimr9PVrZ7uwGuTK2R9LU2QX3WAQ9jip2nGz3sJURyGDTa",
  "key25": "2hx1UTf5v2TmVqtkEdfunrX4Z8aWorQgBi1ACJhnTv7QwK8Bz7nH7p9fy41TLgtF6i6JgBBDxyHW6KS9rWjfcrzc",
  "key26": "jLAC5VGNahLnQmjic6gg3veEn9KDsFMNfmXjSxFr6LkeSSNFwWFKgLCUyfzXM5Vyx5CKR4diwYd8izxRBSV3ouE",
  "key27": "2d9hwVhoRbod4k7oqiDoXLjNZpyaHMdv92MS2J1bhELxFcnkMqX7mJmKLhM1nNKpcCS9FRH7uEb3oZkZpz29ik5s",
  "key28": "G5CzFeTcuPqfmwxuQccgTwNAcqsqnDGWwuRccf1k2CAT8CUTrvgUqA2AUXnPwWV5GEUaAWbNmjo8pPcGkKwWbyu",
  "key29": "4fQjXuNdwYhhMhG6Tnwm3RN2sqcMbbvxbbw7xqy7APj1jH4DzbBDocxRmZB2qzGdUguUyzX8TdnVRjqFJNdzjJ6J",
  "key30": "4Xn4unakkpZxp6yui3Spd8WB542jSzWp8mmwHtaM5rEc3mTcpjnFs6jYp3L5VAkvUeRjKy5K1uXZD3E9o2e9kQbG",
  "key31": "5qGvTaNAZeiZCJjqDyaaiMfVejq3uJ6ttdH7jJMg5HAEtywbLmSS6M9YFoX1SesMygq3Zu6XHnw4p9vRvxD3Gavr",
  "key32": "482tG7UfMqjwwgwShtbQ47SdB8uc7TysSpizExSqpS9QpMijmWMGdcVGTznxFD4Uuk7q7YrX5n9cquvpUjds65Hp",
  "key33": "PQgN6bDJvTU1xZAcZQLTXDsLho8MgyNZQkPYDxkLQF2zsPKuiBu9i6PagERA6nB6WGxLv5faUwjvp82YxpFBHCJ",
  "key34": "4MqnRMaugdRU31RGVd3tYyZgRe1udfoUxc1bdw9DEUK4AyT1yxSBd4YyHB3o4ktcr3a73bYB32QESSKgJwygXUSC",
  "key35": "QTZZnqB7ZaXNsFdSd8CzHQXS3bT1xREDBJqFRcAdFtxME1wkCZvTy6iko93GraB2jSqxwAVRLS8CEWuBvxJpxvk",
  "key36": "4Tuog4Nv83yGuPMDf4MmGFBVY7B2btho7x2N6bCdkniHQqntgtM8EvKNjRccyCthSu8QH3iYx6TpfznnZXcp1GFK",
  "key37": "KnSWBWteTaFJPwoaskMFSWDAV1FdV6KJUgi6UshPyMKN5L3CVYqci461iidcTrCUh8nWhLjqq3zREFZpE7Cook3",
  "key38": "45udwdUemqYv7APAKbVMHxbE9zfwpoiNPZz89ngv3PJ9cXSxL5LAZ45vzpHjwne5PXDXeJxjckU9DXqh49o7yGgF",
  "key39": "54TSraGhXu4gRXt5SVswUxvESQsZ39Rf29WhHDAHjTXYXfWEnkLBqaJfvFyegMSzoV4FwSP2pdBAJHMkmKbZrhB1",
  "key40": "ka4PwZri2iE1YEbAnw5zP13oJuB7QiwsXjSxZJLov2mzAXob9k4BbM36o6C52um4YpqCgEV6vuF5LySTWnfsSEB",
  "key41": "5CwxHx6vatWTjdtQyaCjkcjdPp79ccrRPV1RV8gjmiHCbjjXvF5MNAKf4BVSGgkG2RUK5igFPywNNBk1biphDjEH",
  "key42": "27nstNjTusQkd62tiVx2pv9tEUbz71FqPG4igJEocrkraoSuAYxqFrXEWZGS5Xjx6Gag3vKMG4FPCMY8tTfFZ2Hh",
  "key43": "5JR1YVdU7kgT3HXDbKhJKoRrYxcyjzfpJ6gxvAiAaSRnacuzkaFjuP7vkLDBTDorbLu7Xeassg1hd5kpFC6Ggz3P",
  "key44": "2neWHyTHzLvDfKhGZCE3r1F2o8JkmfdT3aT2UzzX1xgcVFTQGap4b5hXCc7vrnseQJx6TdSAhJfRy2B9Gfhx5NuP",
  "key45": "5g7JzYgm4iN9FmziPVu2t7WxhQkMrG8Yu4NGrEHMtW35j6wLXMAg9uVPG2sQFmZiVpK8nCw3YNue4b2yyWBNJXg3",
  "key46": "3LaWnJ1uyXY7JzjzmXjgV4qtQyTHx8cwDnSyBggfww78wWid5HogipB6Yrj14Wsfhu9GwrsA2m969wzLBAJaujM5",
  "key47": "55iqZkZQP4y4kszUj9tAFEwWzJzHenbf6Psom1kLUZKrvyJ4GuRVNDuDtJGhL2vSHQkgDbhSpxrCxecSWYercdyk"
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
