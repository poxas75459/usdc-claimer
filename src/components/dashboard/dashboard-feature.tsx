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
    "LdmHsTTn9rPtr5AFw8fsjHmnSufJRd89PcuPvbkHTkRGcQuvv2EZYXQF5KLcVYBV3DjTwAmzPqxSiP5Uo4gQfMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mb2bDhKrUi2uN3b9SNtc1D1qLKV2WwEJKuo8LBgimL9Y8opcUBR38hUwAwFQJEpKF9Rqf18XL6M1iqRSnDQDcWw",
  "key1": "3V4SHoaR1t64ctFxsE8GwpjUJNUy5eEFAsYGm5ffcUJ5xNyx4HXvnX81e92BMVBgjVpdMauvspGcAk7M1qb3WESU",
  "key2": "tM9YMJi13ab6GftP6bXeHzDoyk8zs7BcFp3QktqFT1L1Qo9jtuMThYmaF8ya5kpLebbEC4Sz2KhzXemic6dJ9c4",
  "key3": "27MLasZRx6FFPQjY3u2mdngaEnbUGTJNEa6FXK3gFPhLKcvHbvK8pmktaHLa1g1E7hbMpoYyQJcL8o29UuBUXFAW",
  "key4": "2dF1JAH6cv2usqPJjg7NNgQmKqAQQaG7Q784wo9suWui9H7ZKnaaUEefK1sqfyW2WpecutbEV7PuaxBRULa9hFQD",
  "key5": "4P7C4tAt3gx66RK1dGjbi8wfb1fvyoXTMFTiQGq2HthN6SW1ZC2JR8tXdmS5aL4bz9niQAHVd6QWNfed7SbLWVoy",
  "key6": "3XM7skiDKggApJ234bavvKNBovbD2qN1mriCGcpUHkdSp5FQiB5BZwZM27PYZq65W8rQ17B5uWDemF8gH3EJq2J7",
  "key7": "4TFkbwVLbLBqAqWhmMkCCDxxhayZeDebeLxJxGZw2U11mMWaA4nDf2AJZndY57oi5HStcPAkNEnMEyPKM6PrfcQT",
  "key8": "iiVdJzEEw8F2VMJTkXoHt9D4D4mH5q3tyqmzayBtX67bFALWTvonzJQ2BzmQp2ZsP6byf3sXytVScoVb4Hk8k97",
  "key9": "5Zxkn541jC26twFgrWrDSmvf49cW8ZiWs8eE5JwbkHPfsQ1mwU7tM8rmeVtwWt9CpWa7NKTXiDFH9daN5HbLm4US",
  "key10": "3vgRqaHaU5V8w2L5m24zyyYnBrKjK7UiN7jw2DUjZMRinsTCywWVceZVVrK96S5Yavc6jo5dnxQ2yMNMaxTrgZ39",
  "key11": "4jM4QNhqZXV9tbXjoCxqho97G9Zm2TamZiApgNRZCEWKVqeH27oHYeTpT3ZzWiRzpJxXnva8g7RCeCTG9q4KZQpv",
  "key12": "4QrjqBfL2oa6Z6vPxyxbc7zbw2dCpVpYiT1GJVqzpanQ2W4NFDNEXpWiruJKCL3xEW4DnzDimsznH2nMyPDKxpA2",
  "key13": "4zWyPCzwTrE5Esi7aDjx8UiRShwuxkkgihtNn8Q7pS7k48eKZUsAXzPm654oieSYT1KSXmZotJ1xBosuMLCdAH97",
  "key14": "2ZmEQYNegqxakGz6mZfsuivdZFGKGCKmpCwzw67MZP5BxUDAHULiiUeTzcc5a2QZYhNr6bXmQh71UVMGkFseWMVV",
  "key15": "578x9Dd6Cnd87dnQCaJAQgyUkUyrHUgzTjtMyR88c49p75vgin5xefXH2z9vPuGEq5Y3iWKpk1hRvrR2G9PpmhE4",
  "key16": "637fpJvL4hktWwkEEr8niSkuzPPh8nLBbvpgWNeEHNFMBfgRiyc75zFQZh5Q299opZ6ALNKLDX5j132iYy9FvHHu",
  "key17": "5HbcrQWtiRjpxz5aDKbewHvyoo2M4Qbyec7MViDANJ73xePrW2S5t3PQvh1YNkURdyRgrex6A7uJvuQJ7oY3mUFA",
  "key18": "4MHUUyksEU8oHH4uLp72Kt3MwUx6y88hNrio89ApBokvaQ3Bsu84g56eMVvF3hNZpGdBAd8Mi1CBh3oLy2RCyZMm",
  "key19": "5V1vX6S7FsNhQ7siTzYWEcVQsVfCr1Yp7RjPeST1fXcCwbLdYdZdq5RzY9PsXYvS28hQQZnDMpZarmMjRgzm3d1m",
  "key20": "VaQ5WL548DSqefgxwziJdjhBJGpZR5fkzZetpAPun6p1FPn6xdTYR5CafipErD5C8ExR5JiF1C93EzaRwefinGq",
  "key21": "3aMAYpjKempWaR5nPNN7ncCpfaD9x6CvtfxeAk9M2uvdEfBMQ2JYYgy5w6DPppNaTzaedARqzdm6gxLgeMdz6Msp",
  "key22": "2Y8GgtnJ3catYu7UCSg1CWpwjYrc77zdzgfsMjAm6u32iD6M9hmpH9q9zshMnrMw1o9EpnEJYChvFwcFytSuKicq",
  "key23": "ix8UaQzur5pyjqPo7zCxB853y82JxRtb1uV5ioBx4yP7WxkHoCwC3JgCadTTewSi751dxii8sFPbvvJ2x4xFoyL",
  "key24": "3T149JbdKV9tuSssWbh5yWKhnMYY2kziNQsiodDGJ1Q2nv7dtNwksDErLER7fN89YVLQygk35FDwDjdFTkMVLhBh",
  "key25": "2KNTKa8kbuVPx4roZUwD8aphPPNujZL7eWAiEbSNEx4xbR7upJszxDoByoHaxJojo3Af9ahKQPmPiPeuMTXGvuGe",
  "key26": "5S2ZnsRe1ZmCzDfvdWuqvLvoMNRC7ir6Pqign2T6GeiJRfQoo99UUYkKNc9GDCEEMcm8DGU3RnwyDQCdifJmBbP8",
  "key27": "553nPS4kWL6YXhMUausqB6NePonZPtsqMVtvWmYvpwv6NwdTfVKU3jvgjmeYmvvjS95QKtYZ9Mqrvi5ZZt5dJR6h",
  "key28": "44bX4vCzLGZRdjYKjrer49L6W9e1WosQ5Vn2DRnnBDSFrwVVYkDfCPUX9jsE78LMQHxAWe9c7Zir6VhT6nw4cdLH",
  "key29": "3iUhMJaSTi1APa38ZK5mnnfzwL6NkdNByqr3aRPYeK6EKDWVKNBz6kMiEXrBpj62uUnRG9Rc9gvLckuoaVwb2jF8",
  "key30": "5g8q9pn8Q6JmFzaKKSKwFcXt7b2Xy7ppwnbfraw7zRp4Fjd5bDpVKnAySmULgRufB2cS5vzrwSBN97qFuKDPxHMW",
  "key31": "58wpPiKEivUpLdyTK4pbVMPBGWtyDpxxKjJnt6XkMcbryLNQfBju9c4pns16LpjFBbWhUaVVgkJwg2VJbYa3UN35",
  "key32": "3MSgZyxDWhGmkEVTshYo94zeri7GF9YGhwpVNnNVopPNJHBE2Zn69cpkfPwvTnBefeD3zNcpPq5vh9yzzKi7KmD8",
  "key33": "5pkqGFiC4YAfJnC5zRSybwcgshx1FxxCCThtVNLhDUVuPxn54t2FXXh7CTK7BG6i41iMocrZSsYfB4W53om7eSn",
  "key34": "2norifgMeZHcK6wm2RJLgRZDtr2UEgoFkiKGajsx39NSuWBhk3DmvW3KFmDCY7j1TYerJM8wxKxRsJ6bq1gHHcif",
  "key35": "2KQdQV3UYqjcu9YwKbz9HQFLr5Xqm4RUigXSHTAVwAYTbGwngbTFdDSTDoxdK7benxBrkTHKEieRpsXpu8NFpq1E",
  "key36": "3scaMNRqQAEax461SjnSAqyCV8Sdovwi61nZQ6QEH6B9J5mg1Ci9peB9WYZg3g7ERrodMro6ACeB4o8noZqPdo1i",
  "key37": "5YpriukUDhVkUhYPsdfTknhri3ep26MzA8oMi1tAoDMuTxUEcLPC94kuxjJtv1Haj9si5mQm9NwKJGgHQFnNkrA4",
  "key38": "UTn1EriDDjJMkcJWNpctpRFeQUdpzXMBRYcnkvTNcxE1RdU7Cg27NNE7cMq9DRg1RhSirCHLJ6ASoigaGFqHSeC",
  "key39": "28P5hNUrMMZDPipWtBkgyjGDCDASLBffc6YDtgzFxZnAN9qKSHbLhSP782zvV9oUQfP8vMQTJoTAi8BM9iwZv8mE",
  "key40": "3zJEzs2ZTdQRG2R2FMhZQ56EuJnaQd7ozfUYgseEJgGLodLguBT8bZG5HkDNRprqGsiU8CUKJncttfWFY9JwEj5p",
  "key41": "ZUM3fxhP2G1yKNakmVfz1kJcvo7tpUwTWuVosjNiTWbg4ek2t8eaoBrGPBnu8mmLUn9RaHavjoo2zoHeBo2bNHi",
  "key42": "W2yi5kdn4Q9jmHRJvowimGdimWKjH2hfQb6ic91szBWro99kePwfaFqGZJmTrwEmUi4sGj2sBiee44PHpc38McD",
  "key43": "3k1FLhgSUuacmm7dabwp5Ub97TXf8vXBLTcG8qEe9tzPGVNfyQtdKteYSQjfGUVcm7iVMBmcDYeariQDG68mLQDE",
  "key44": "2g2Cyt2zJXHa8jhN7Zy52SfhhyAsPeE6EEDMmFkJY3JrPCjCcHzCA2SFjZ2f8KYgNqvH7rqpztjAdW1ZwXyBLgFz",
  "key45": "2DH2scAXN9mMR95Rn9jVYRnqtn2KaJ94ueBBpcCistBxjVFQe1ReVVmgn9LWFfhLbXxxb5Zk3SoZatcLBsPdGEmn",
  "key46": "4W4ATT5M9vuM74NmzpMy76r548u6vzKaBeZEB7VRJzaLHPoU48XPYUJkmCQF1cJbeb9hvdzM3UuZeVnzDNfFpwQR",
  "key47": "4YtwzowjFBM59ryfeCpF7ZXjVjTNyFirz31hcV3krAus2Y8qvc8fGYJsEyYXKEfSkHRhqdAtbj36PtMNWchLZAg2"
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
