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
    "2R6LMSWNytVYV39MQgVC7agdYHu2KQh2D67fyBtPEQCobExMQ8Rt7gjJQsxXg6Yd1Ffj5LmDk3TyJs6QUiosj1Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJqJ1E7RyACDhQDwERd6z2ZBu6C1GxGDe8DWMFJowsLc2ScBrj9LRFSFLiNbaFr9gxtdQWmHHoHEwZMfHGcP3u9",
  "key1": "2w5bctYRhJkQ5uFYNhTSfkgkLeQ1b11TypY1yGq1BnWxcdWjnZfRumr1Fh5Rcre2bfPVawG1MgT3LEj7EsgZrj42",
  "key2": "55QmVHaZwiYJvBzXXzKtoUFo1irmJSUaUTzMFnQDQ4RYYS3U6AJQXePk2fEiFFNswnDg4Z7xnPTecYkSKtP42kw9",
  "key3": "22VSxf9xZvXwmcwYps19gD1PCqRmkuiAxeEmV2NsiEmgZXjELwYW3vUya5inaWPyzkP53eEHJGovrWyWqhew8NAL",
  "key4": "5UDoPxaNPikQ3hEQpGR4YNgGkUx3ZFvtjpS8CP94sMFkq5Bhq46hMB1usZGSMyKrDcr1pQBfxxgcx49BBMMSGTbK",
  "key5": "MKKnTDx23TTYDfaT2VfpJYaM9tJS8cEGeZRTU7pouR2CB8hsBXfLrTt9WMvqqmGpfNfiDfFuLK2ZqzEiGtpY2TJ",
  "key6": "rX95dNFpVSDe6VNdBbWb6cHz1M993UqKNTXf8YxUxqpXHZTUz1PdJwqgQzqthstwxUf3uyfvrG2WX6aj2ZizDB1",
  "key7": "4aZKxrduQatKK7E1YNAWNY6LGBV5hgYfhA2pcqG3UHzcKRqWWRAG1deL19kT4rR7sFbvKx6VNeAfNgz87boAncec",
  "key8": "2XituJCgiVPSUC5Q5pqTyfzz76MpWvpYFaW7L2BuB6HoBeVr9bFNnsucvwyTPUr18tqAjgsGZ2STNrj96eqbUjx6",
  "key9": "5akeRa31rKMmB3AZjGC9kb257JfuCBCcd6Jut5GG8nfTXbGUZ2Ux8Ynq99oXDz94Xu3z9SndghjvgCUWw6ytCrgH",
  "key10": "4NzmtnFruYyDBK7sfXXL4X2E5hM3P6XJ4QVDLYwt3DEBGeErRVYxtE26BRUDLMgpf2apJWfSG1kFdh5nKyxCRUXN",
  "key11": "3VV7WsE5QZ97ksUgU4V1EsTz34DuM4kzpJG8D1FYsTVQaLhNQp9oabQegQm4kg1ovyZj12B2YTJM4ZuHwtLeZLwT",
  "key12": "5ewZ4RXd4Tt3T615GMpECg1WCNhbCugJhS1wKwcegvRHmRAhiFErzdmJ57zh7LLYqaM7v2EByRjZyHnKcaVeAboj",
  "key13": "qp68TxuTR2DTzmQ67xPHRbiMEznEXwq8rqrh2suWaQ91af4pn9uAMXso71jb1jm2ehhYkvnYVg7TxekxF72LbW3",
  "key14": "7zi88f19ch3vcNWNqWFwD3thuhZGEnKsdo34P5tE2CJAX1Y4Z5VMQRsjDMi6cHHjGv4y54KHYJzaQm9UZNPPzdL",
  "key15": "ySSxFVLfU4j9yCyNQnBz9V4SohYUL3dkXpSwyjfeFGVqj4kztGyV6p1gmAdQoqpDoF4bi7Vy7pn5UsULAaynkRg",
  "key16": "412kf22oSa7HmiK7SMt4Lv1npUcsVLbfoyCJJwd1P4JJ7sdrKJAgqt8gV3gPYge5yQGmhHoSqzF3ewTmLpNh8Qst",
  "key17": "4mAT9tzKmCwX67k7zc6AveswwyRuUuwaPn4kDbV1UwT6pwkvyw2Hiwq3gJhsaZ2U7BvRgvLq6nmPZEougU6EZ3J6",
  "key18": "4XYVTSM8ekwf31vLtBMZgt8Vsn4MHt73QTiehmGTKXWaub5AvjM1sZA1HEsxF2nEzsjCasPVPyD4RjvBdZx1KPyV",
  "key19": "67KpDMFJq4Bqw54VT5ykGRKn5gMFCFF1zUAwR3WnpmNB8US3FHjd1tnGx42aJWjDRE1jwFD35yfiT9wfaq75NKKC",
  "key20": "LrZoknL5ecCauzqRwXRFgXxnAPaUz6FT33yNSxCG1iMsYb9PwEaRFV5T3rcQW8uQrCVg44TsajtUePSEMybcA1F",
  "key21": "4oHzNhdRAyU9vaBh3TEBWDcEyY1woYXfALFd3CU6VbSgzMLyNsGeSjsVd2JYvKQonSqzeHmouX9FfB39PNxYYv9e",
  "key22": "4UWddTiHqzzLXrMcjRpL7ZoSUB8x314SXZMvdseGnuwW63kTGqtPcvQzeGbSyV6w2hX4qwWgBXrzXfT6eYhFCvNX",
  "key23": "41hSynea4a6kpXXYrytK7hAGRq6uEzoPrJpqWTRgXt2eU5PgKcnuyKGWMgHa7iovrQHmMSAPEQ7ZiV6aiJWLSq6g",
  "key24": "2s2JPNyhMk2RzdFgCkURVxKdAW7B6yyBG641pcogfmCrDiZM8orY7fP4TUkbXiVL6Ym4Hg8TpiqvwajWxxwi2epJ",
  "key25": "3eteZ5L2PJdvej1urLzy7wJ2HJr1mhotRTmPbAoZEUvAymjZ7pgPtU3Ld1ppTy88AeSUahU7KuQHuN8YazUuMLHT",
  "key26": "2AdjvCSMax3xrDqfcPG7t9Tzy7uXQii1jUtQBPQtrZJhAtGbAYSWLFT9gYmGx9x7CK3ximeNsM8yjcd4Ye8xQwky",
  "key27": "4SAG18mHby2yw8SzVoCNLiMpU3p6yMRxUSyjfVDTnwsQrk152za8yKKcs2t8sJ5WLHHi58i7VFbUYA5P4QQVsX3y",
  "key28": "K9HHDEtvR1x6N8spSJ9EMx4PETVP6kRGB6VE4vq2azEZ1YnAHoEJLTA1NKWQnDaAmAArVw1PJZDRYh922MVMbNt",
  "key29": "3D9VZu1m9ySL9aiQCHqrsgNj8FcmgdsCuGMAFeEBBp3cuZ6ZbejwZtpTnuYctoi1s25mohtGFVsrcN88tkszsCMb",
  "key30": "4CcU72S9XnQ2GiR8wqkJ5VscNPbFgYFeLRTWzpxyy6wHNjYunXQPw7Yhqunh1ntNAP3QYasF7WQSgDHwSqagaNqe",
  "key31": "23HrxWwuWAhSjapGsoWE9q5qSQkFF14QbMtWSm6vnuBtBTeg58M7K2FzG5KXTdHsdj5o9gZrgCNEHujkD3iAYk6L",
  "key32": "2TKSZXSrfDCKDsuG4s6EAyazGU5YARk7VAqLMUhp31ey7NQwAh3qmegvk8kCnntQMubqXzPwwjB7ckqUQuGqB2d",
  "key33": "3yFhAinF4esuHe1KYXLBHSPSGyTXcSNpQnUfHoz3tqE5LKeHR5yzgP5A1pK6X1MPHqby3CL9tYsJybyvGC3J1Kxh",
  "key34": "4kJCaAhtx5eAST4c9F9ZDAbLRJFgtGAGuYsp1ikKCxZbh8gSACnkVyrhyrsNLAtrqwuL8Bu3NBzw3oa7R1AHEBi6",
  "key35": "2XenVvgzcaaDBvGVqNyRAMvZFyiZpknofTQ1GhX5efd4dXq2Go8MsNwdHHsxt4CyvgExUbMkFyoXraumj99NKUX1",
  "key36": "2VU6NSyPM2p9oBhv5Rf2amvR9jWfKuPKhitCiNceSwMu7eizHANJ9p9ovGy4EM81zxNFgNno7qc8tJrJbKYfswzY",
  "key37": "2wXhUgQEVxjj4AbxRmBMxmUa39EgoEYLQ1d6iWHrdM6EK4H5cm2XbhEHzZLmMKAmvzYeA2eEgJN2xbKEs6Qm9GQ2",
  "key38": "tR2QZgkbX6fFXxwPq3b1VycfbbNWJoSWpUUxU4u5j8spzwdWJ1HkZimkVPkrPUhKNvVffKzkxRfK86HyTUpDPYb",
  "key39": "nCabqm9KjEZyydw2oszmXGHwVhxgrrmXMSTpnhyzFSB7kJZD7NBzGarh23CdZcyYWFTMsAd6s91B6quWiqEJCur",
  "key40": "5FJU8sYYNnN3TixBfziWQzZBJM6erGxz7kv8SJWYiZdkfp8zNf5kRMxWvAF1bW4SydQppMJbRBipjz4NEsp68hyF",
  "key41": "4hbZbN3qXyvYpJvEfhryH9GkQx1aNnnWB98WJGQw8PBPNYvBds1bC1tWTuj18aw6m8cGV4yjsvqwQ29BmZYxqGZv",
  "key42": "5Zxrd5Qv61k62xoSiocK8tkbSzDdXwGLXAFWhRNGY7PXT6mKJyudwcxhHmti5T6wqC1os7CVgfDPMQ2RrCh7LVPP",
  "key43": "22WswqoY87nuZHn4RTwRCXZsBA624HTuVLpJBLAn2T9DaWNcYFQJfdRkj83Hh9f9vYufchytSwiy9QuEbGrHcBGw",
  "key44": "2oLHC6ChCfHgkuf7arkcowMD8yBWJNfTyzQbgJTLhardSLESvFzX6eHq2B7wavxL9hN1Ntj9FFi7NT9mgmS3LDjn",
  "key45": "3ks7WBv39vTpgeytQY8SFiHxs7JQtE1awcPLNpZ9Fa12YzT3h1ymdfQFUjoppAbNnGaMnbPz2mq5BLYJVAJhhFuh",
  "key46": "L2ttBzhMBdjx1kMrPA6qKKhoMBeThTWrc9wxNxp2LkWQZr4xxbNTV8WdNRiTf3Czad3QU2dGmZ5Bfse2uqGUpAc"
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
