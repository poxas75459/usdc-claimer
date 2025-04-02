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
    "3qxLiBqy4KNvPcA91tH9aEcDXXJZdfxhYXGs3i9mbu2MuDQTngQGg2dWwM2uFbCRo77zbMTfZWBydpffvB4FV6g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4sk3Jdcx8UKMUDGHcVX3dJgvpxkbUk6okfwtFnvKaaydFm9JNEHVWZLhmxmdcg4r3nbrZMZcihgsnY8FnkaaYK",
  "key1": "3nBxHeyoSRHE37xfKt2r4L6avMLixRMPRZXMMHZoB38qeBXJR3D6KnAGw6CqXEgexKV5Q1pEMjKnt4yqM3g8e5Vx",
  "key2": "2LJgV5ZNzmR8v5WWB6tnnM7xnHHhHqicaHAhVZTtSjj3PWchJWdrBposXmQ7ytqCX12rUSgewwscXVR3PYrRkxeA",
  "key3": "58jS92qE9iBjngDxYrbeR4LP9bQypWgKrSRtaFESxXa1WyPChNdFQ7hxrwpscikxa1iRjeComAZCknwJfVUKYoHx",
  "key4": "iRX25rLhKGZDRo9bKs5xmrRLNWKghkj74YCXSiMWx5wzy6gw4vn92nm5fC3u56bZYtUe1eZLtgN6DDCQ79F4QUX",
  "key5": "3haUNXcAavpefKDCFnWXDP7tU3dgHuBBXNLf5wPwLnjHLpUgoXkzRLi2xEm39iDYo8ZTFeXkn2RGGon6y414Q8am",
  "key6": "4E27r1yr7YZefCLC7DSfjHyBqNpF4rD26dQLfe6ew5KG9wWKF7pJehp9xdK7QxuXe98NeexcoQQmZXieicTm8Jz5",
  "key7": "3fKjHksaPUo8Dm4jrqzM2s5vmBMd1yT51VcU25eHqBmjeYyRJj5DTnnxQh7Gz36TELpAKgqRKR2MFvJMPd9qz2sR",
  "key8": "5EHAUZQva7kHBy7KMGzW1TEL3gp53STGhNmcDEbB9AVuN2E327Td97XPa87Pb3gf2XmcoYjYjMr3zyP4hcTVcmhe",
  "key9": "Z5c6xBbUDP7xiK58UMKyrnvjaDwAWn7ytHW6Nv5rt9purq2j7UmmpGDgvEqiK1GsPsUjic54m8kXvRKXZ3vp4sJ",
  "key10": "48kkWwPJCTJjkTbQkQRRQAvmb7iuhz5Khk7n6aTWtpzmxRyBM64iiefU2pYtJUtCc78kXVXPDz7h25cBHwsZVotR",
  "key11": "5D4UyJF9mB4V2XGcHTd6JQskHRMKFynYqfxg31Kpg57KS2gAehA4PQovU34DgfrLHb39CQnHXs1vEWhV5kWVarYm",
  "key12": "5dwD5YoVTq3vLNQwPTbyP51PAN6b5byaVPH54obdgMy1WEviudHQ1wBPrFmZVWrRRXT1aeJah6ENnA7fharqwAhU",
  "key13": "4d2TufrNYwfB9XJKbZbLHCdB5P3vbccgLWDseSguWHLV3cqUaDZ7XxL1RoAMA5JdL51iuiLiP7mqxcpzN8SsBrh5",
  "key14": "gnahSCxrC1DzjwZxFsYccXEZgcxzS5gTsDrPtxy4ryn7SaJBB7A8HAWn6VWtCrNrrHgHD3Zk4VaEEW7a3YQpyvX",
  "key15": "5vuEdzwaYtt3wHpxdZcGZSEnwcoySYjScDt9hEXF59HLQXFsKWmA6QLc8qUVfGiMycQzZtwRX29mZbmLyhSraytU",
  "key16": "4puGKh3QBLEXH6S7wk8YNk81H4zu3BkJadvijhJoV7LnWMbAdgkCaYKxVGz2RvUUe9LR8jC82pk7qzYt63EZz8AQ",
  "key17": "32MJ1jj6SwyCANWfDKzH8qXFodVVw7Mo56m6JjuqNfoCHk7W8DakzTzjy3XU1igc56MEwZP6fvVzBEeo9N7ZrKdD",
  "key18": "4kGuAwdZ1DrFTS1rb4HARa2LiTjAnBTvsAqeyhWK6aE3Mpipq6jjBreKo347hwzdeJ1YjWcvqSR58Qy2XfQr2qTZ",
  "key19": "2fxCsLKn5MtHFMSsJyAcX6wff98KG487no31a5RjsZeNC8LEMbE5KuM7f1W7tLJoGHvZEhKKvXtyXC9tryZq9w7a",
  "key20": "5KapLfjN9kxD53wiAvSNaS5GrP3oc9mzBCmBWx7BjyHbv8AgrQts183JHqdtQTMtEmvZ6J4dcGr88hoGv2Cr9VeY",
  "key21": "55PMZnJwkoEEfNyFSP3hrxsKug1hHgNrv5d9BxNXTquHAYnvQL8h6m2t9Xvdx9RQejnXugHSyH6RzGukYkQ3ynx",
  "key22": "4cxG1PigvXQ8iUNiTZu3zT7U47mvT9j7uSmxoMZRjhJy1AwDDjFd2DuZYZj4MxPT3hr24eKXeA9uEZxx8eu6D3LT",
  "key23": "5YL5cF5VBU7FHDg3gko3urP9qXkbWS2G6JQYryNQffUQg7eDzsbxLcWoQMvmhVHt3vBhAT2ZCmUy7QpS7KVMKAN",
  "key24": "3cK58zXuQnggda4uRAyUVBMwjxhGYJRnmeRD4fUuHT3mybQ3q2xWRUUYJJxEeLMYMdBAiPhnDu7b2cPqJAozQptu",
  "key25": "3xE8pC1pWxV65FNaxYCwQAfLRXFfNndn29y1Hd8CKEZhTeJB5iCXhkfMQcsgoVMMkdkkNN8eZ3MDgjWxwz2aFtK4",
  "key26": "5FYcyHHFCqzeXpYjNxjbyZ6Cjm8xjsaQs5TSfcKcYkEiKFFK6A4DwKEoFV8ZntFN6ZFCoeZT7WWZXU3i6eLu8AJu",
  "key27": "5f1erXKjLPLBbpsijZcpFrDDfeX4nf42EX4XbeFNnYeZiqmDy7TZLEkFjePHjzDQhPfh114sLcNXcC2FgQ7N6YwL",
  "key28": "61hZaPravF2nT8TsDPuCN469ziq9SrJryNojge5ec33HDyGBN4v8CUnP1WZNQp68mehsjeXoh2VTVMqJUdmQKcSE",
  "key29": "KPPD9xSuySVJfB98XT5SwK9DT81GHUSynfwveLQDipjwTvv161bZFDqv4G9uXAocfBfCSAPVq6WMCCSmRmEFTps",
  "key30": "46spsnAe3nUW9YtUwnJZEek3AQjE1xcGakpkxoUHrE745Jv3JUZw7qoKQot2cQh22YTKRT7VHdkmXMGSxHA1JNzB",
  "key31": "3a1kqsGG7M1rWMrSB5sr63wVWEfFLirgRoAy6YjwwvhcksBportnXnjjpjPzgzfPmHf4fe9QgNQVTMSxyP3z8xef",
  "key32": "3FP6MhCXvqdJTLEuU5giKNrkrLfJvw54Tdx8NbGKiGw8iPw6MSUzEcSbKGdYZZAnhbWdoBkPwckeJV1F8uegdSbV",
  "key33": "HXHCcSmgBPxA9mDxCWC4BDU8cxhWVHtDDzLE2dec5t29gTrtoqGEpwWFxqoWRM3n3FLdtjgqo5ecYid5aLUVwzY",
  "key34": "suRr6xwPdtsk8fn49pGbKP88nBqcYwD89H2JCQEJTWZkcpzKzqMneHqGkQ4yxrYxi76KXXY4pFrmWRxgbPrJTiG",
  "key35": "3g1wnLxko56wm3PFmMnyUtDNVNu6ifpZyjqxyz6VuACPvJvMtY6UYHMW8wA1NothggPhCnU1exQBBF7LpyDBEmYm",
  "key36": "4NrViS77utHCzqZjNPD5Y1i66orZzULnhRy5R8HXx6hMmh9YTmLFbRfDRmakoqNxrdQjtLoVitZ7qCqtPgr2Fteo",
  "key37": "39h1fSoMw2BXMZxxGpKvphqAz7iE5YnP2kfYxGWZPQoijauGhbrnoJ7VA959BcNv1JH9ATsNfTNSVMdQ2PGbvPMN",
  "key38": "4usEEGozbgG6LEbSwrC4WaZy4RbjnHJxZgyHzaoTt4nvyXNEb88o5DjKUPZfiFi9fDW5326QnFG686vSvwUsYVXY",
  "key39": "pAoGXNNWZ5yGmprxABmjTUkmvk6Xq555XBew8TB1JNuPqkRojX9e9AxWYmM7A9t5dqBRCKoDKMfH4jYQAXU1CdJ",
  "key40": "3g9m1HcuXsB1oPkG2pRLxtJr8sz51X78SByE5sEp24Da5hdEhqM8aavJPcFph5eTsWLZAYUqBWvykJMpwGiFSYAr",
  "key41": "53PFo9R56wZt6tJ5mt9n1KQkpngWxrTgXYsEGR9sFFUGK4A313v9QeQRh7SzcHw5So5WkS1ks5wznw55oZaofBho",
  "key42": "4ZhoqzNeqZkJzmmR3gS4hdA5W6dRGMwiXGEBn8S3jdkzcs2P7ZXatkTnf1qdBQ5VtkLVPusdw6ydhT22ZZEMv91R",
  "key43": "2djsvs3LprGUK4X6Netp1tPG54Sfnf32mKUV2MiJkAzQJSMVLqg6wktoAzzZ1DkrdZkdLMBZVHnhMerr6zRghhrM",
  "key44": "5vmrc27gJX5rnL8Du4CZmmRcCJmAeYV4zhd77tV2RxsZKZP9N3uVHVCZ7SzBYdffbmkA69n5uCZt21Vs9Ea3dK1Y",
  "key45": "2GhJQAm2p9cQwXN3oF6XS6dDbsfEJmbd37uB6QPhw4kdRSwoy1dfbgcCcLR6txnCFjNzJ562WEnwYamRSU2nr7ES",
  "key46": "2TNK9UPh6ZJqcDa41sWzwFNMk1Q5KW1HRvLiHf2rujYD9RL2SCKhNKkjRXXuKLnUKvT9wA7v1Q622yMqYnV4Lbqo",
  "key47": "2Ah29nQkhkECbz1WnHE9L2q2yf3725suxKLojFV6Hw9sTdpW5HDAvgRxZUA5srVKtsnWcAcBQx9WJKjnT7GyAn5F",
  "key48": "29U7wvmWqoExnJnqSwicrXSmea4XAVpX2LUqHf2puKFx8dv7kbHEWwpHypwfj24o1deDz9CnQrGr3NJZztpjkKQP"
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
