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
    "5WGvCG9uV8wTZdXZyrTxkqcELZhUcUSsshLerph3oBXkX76vn3uzfDLggMscqpxsX9GtwoyCt1dkgZT6bYK4ffv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3QCGDGMi4LuR7E82Xj1tfi24Brr1KXvwLqQnJHAvK5CxsRPd5W2sdArE1AB4ZavzDG3po9x7hvYgfMPj22hmH8",
  "key1": "5UqosHh7tzZ1xur1ciSeQXyWkVT7uMdB5w7jk2YpVdW7paX4o8ggtxBNoSRDJhcqnznHsYzzfHxRN3kkLkotrADC",
  "key2": "53h3Z4YYqLs66w5vhnnkGEKJARD8K9Uu2RJCzDzB7QzwWrnxFfvykLkSbJGqFwdquD1AYSGe5bXjs6t31C1GDNDJ",
  "key3": "5mk22TmYfoySjN1UA48UsaPVfXyEhZxeAoVaUQ9X6sz8WuA5ppbeXrYFwZbHxAj58RXZJEFTbGET3NfLjPH5AoyW",
  "key4": "2C5eLfXGbF2MKoi8jYNktGpdaBtAFrLL9NtuQWe6c11nThjtKnY8KDoU5573fPBu5zB56niSmuYtWVYezyHGfgEH",
  "key5": "5tM23AS6ceiyeqQpxvg6xgoUoetG75N6pnXG5CEPAri9Vgn9QXqzwEzZTw4cAFes5iPfeQXyXV3kcepwGooKR5Xj",
  "key6": "3ZGHhbZYFD6ijzAD76LaQJgbvCMwuM93mpgbexJAnrdTtMMUkXiph5Pp1xiJuqG5htpBofbZK5rGe7GGi7wQeqoz",
  "key7": "54rp9iPdouRfuTwKS9UoFzSmXKKPqCeAMpfwARRBn3kYhhXNsJbDR6NAu4RM7sCGjCyFDNT62FvN47SnyTk25n9d",
  "key8": "3fXMf3Woxd4yXz1t8UEGCLCqeaSsRp4QPWFjNSpxocLb1pwPfxNCU5o7oZtq7t3AyX98s8W36UWFPkR9W1qJAaa6",
  "key9": "5za83tPTRR2HK1ej82cJVFFxUXunUWpaWAiCrncdwXYDbqLi9EYxM5yE9bgHiafsLh79BmHk5NEjzLV4WCgytLtf",
  "key10": "2zx9MLHRqydnSMjkGooRQPgenk4afBDvf58T6U61XgyRJm5Kq4eQzUPKVJ8jL2WEWeLrGigdJJ4BCw1AYXVUc2i6",
  "key11": "5fLjmoHHTyebpY59x1YUuPuLpt83NghHbQpG2vPWvNrjgF2AQBBeBbq7JKqmHCN9zLQ7UB2utZL7Eipx5YDkTyCA",
  "key12": "46ByWyZbwpynVHFxdebRXi9AEUHXrF4Xme6T2nUQFj1q2pfCN3zhH4SnVLwdyTkkztJD5jmfwr1RguZEQGyRnHYs",
  "key13": "btBF5gPYJQXFStuSWBfEPED3JHpviWQpeJQK8z6nGFfJvDz3hy1fPzbFLSSL54CdAGVaYuAEGb2DC7PusZ8CU9X",
  "key14": "3M4JQSBNFLGzsGvxYfSg9tN9YZMoFbejabDAduzJ5rDJkZ4XcgwwY4XxP7npGkBi2hBPuJGV6zoaerux3siV8JT1",
  "key15": "3ty4jwnLGhF4hWXMWgo1DKzwm8EAtn1zC1Yxiu7b9wj6UubnyUjNyFykng8wwdZ32epvGBS4NjRLTf6XGnLd4pF",
  "key16": "2WN18zoBgQP51MmXKuD1ygLVDTVv2U8kHh96MXC6Eik6HnRVEeRLccWmAsgSkyPz8o9wXgX9an6BkiRUf7p9cVfL",
  "key17": "3GPkRUJStpx8tvnXez8f2L6KiwA4mt6yMjwRaymiMK25xkUgK1p9uVJ1uqZMW3VGPH2mkvVo3LAVJ4Vt8P86yiRe",
  "key18": "3DJjFVbkiqYwAqVDBFfSV2J1z2dnsmvSrwJaca7exSToMMNyG1V9FvSeXCRjZyqBAgbAzjLUMbWDJPBh5nx7DULh",
  "key19": "4p9WMmmD6uBzZSfuH9Qx46DeHvTNXKbxCgBVy1Pq1sncbuGEpyDvreQkXBkdnN8RTyq9awtbLgfMb44htdR6edwq",
  "key20": "2uqwoZYq4UWD7oFqAz2ro1ujKDH3g1Ek1BnBXjErx1fKnvYuocQLVtv28fBegJn2H6CPHu6wdALC44syTTTby2QC",
  "key21": "dwJDmbcwL9NK56EMg5qW9go4AQd39Z4nkbEmFU3gE3TPk6CYuBiKMx7CVMyTJ2Unze9VqjLTjMbY2HXJ2WRdDsM",
  "key22": "37bB2oxrsThaEUroRo4s8HVPPMqyHmLtkazHFn4fpANmY5cxMWd6PeETHxhHb3hziteA3BJ9aHqhqLkmQT45x2fU",
  "key23": "328YEFZv9tWq226MS3rzGp52BUcSFZ5uedVD6hbBuNT52etsWZs3uEkfC2Ae95CghmJ54QXmpNLJqaWFdZmS77Qf",
  "key24": "43oFV9pXFxpskReGWorfTUeTtrvWNtqGzy5LVotJTa5fiWVf1AhBwBNopBtGyTBv43PYWf6xLzzYqNn4MQcedzF4",
  "key25": "5QJra5bksbZn4TGjQU4TqpCNCjpNCKSeqJUf7iDS6C1DjmAsoPw3CcVE8aAU8gaKQLKZZ1LFsnwH1Bdk7SdgD4dC",
  "key26": "3GFDhwrjsQ8mhUKjP9K4653tPXavaxFbXLsaPEkRs6EuaNTYD95FXKbDNbAhMNRyQuuNM1spg733vJNw3xzxgZT",
  "key27": "TujH5Zu8A6cfqjSXzYocyPy7utcsrxcpUd8oaCXPJ7M8toyUPVgWJCLnXqqqzfcWRfWeBiPgjN9nudW3mcbbtYM",
  "key28": "4qv8Bf67gvE3tBHx7BhjvY2u4Zyg9iqx7jyEmDV44Sw8NHVD6M3PQnhQQoKTKNWfxUF97ve2wDzAZzwZqM4UMxPH",
  "key29": "A7VrpmH9LaWYrAdvdfvRpBkiBfSgHYk4KCiasqaGSvgJ1HKxNTVaaj2B89QCRXMwvHH28LSd1nRbPdDATrzQDKn",
  "key30": "WryvsXGhc9jekM4t8kMiCMSQWqsdZivFGjq2rEc2LAMsoqHpaVUCJqxchLviaU3CuVC6CVhpqZtdd4JR8m2K29o",
  "key31": "juFbhyczCLSapDSg7taBuMSnZMpbF44Vqrh4yQkXZ7Nz22aYYgr83NxZreVZSgdQyQnLUFAwhCVQPSbETArfmVT",
  "key32": "3M9LT3Q4W7HxXhvBypry6nNsyc2dcrQKcs3c6z4XJodfjCVDerAs4JaCAoZRv4v8BBtvVuN1RnoyZbWfUgrjmyvH",
  "key33": "AuERpbrV1mQHKtS1V1fjbFqF6tdsHD2rsNzQ2z19y5RgmG7RAvnXgTd3adEXdYHFtjZAAVo6NFmf8DzREAhv4Ri",
  "key34": "4CWhoxCjoPMZrkBVRpFnVf6VTBUVZKwxPLnCHppZYkwPeWXFXSuTFUB4cvu9FaMdLUhaWvv9Ri9m9z7V4uSJbJQH",
  "key35": "5NgWbecdZJTpcGikMQRtrFs9N1So9zUGp9A3GMjUVW6AT6SKEG38xjzU51XQMFC8SjKnteHZR6cPXQ6AchoPtBcx",
  "key36": "2mzweLuMHSsvTaCHN7XmxzzEd9WZSgPSjpHKLn5r58c6e5ruG9RrB8pz4Cocie2SMeFWQxct2bE34LgxYZ9B81me",
  "key37": "3t7DFLjiqx2sCyqznYX9Yz7eDJ2ZH6dbE5bTr3GtoSaGX281qN8uhXbHD5ew83JaJBHdVihzoZQGtfV2H7wXWaRM",
  "key38": "fvV7Jchr5Qq2ffeBRMa7fujPLa5esCwK2LdAxYkhh6aoCvi7wQrUhz2E8LVBv82iTZ5dok5TWHN7gG2r8yFvmEK",
  "key39": "5M24iap5UsBKaNYKNKW8mv6c49sCPWUfafiQSEjX39WUYvofsiEozjJehxNdXhSZCrrNnijtpgk39T6ieq6cqVEh",
  "key40": "5pUBgp55F7fSMtVas1vZcXFUC9JMVgSm5WXnCWHTd9spNXaY19XnKGW9giFS5xAg7Yc39TtRiyNvYFHijZDtNJ1y",
  "key41": "5xKoHCSmrNeRgdt8JGHmeZ7n3wCdUBX4SHX8CtjU6m3pkk4iYvPvkCSuQi6sCCMeoDZ3QNmvrZZgwBadPxHzq9A7",
  "key42": "5i4a3mGQY1p9YNj7HrcUk3JD2p7RMt6at9iQpaq5yW79MC7fyhXGkHoBzcAZtLRPnMNixnLur734gvYuo7GMpGoa",
  "key43": "KQu7bMTqU4Qsxe23DWq52TTn2SoGttnCZWpCAP92iA65pD8PzMcy6hwXr7APnq48P5pfsXF2jFMJ86wJk91Cmc9",
  "key44": "4D4AS25Xo9YSUgh8ptzkD5xKtJph2otEajs9KeUwygERDKUMhEGomS6BZ7VBx1hbLVQmJx5yfuqxHZSjVVDxGUDk",
  "key45": "6pYoZx1nkxSKcozXZ5W7QYssCZ7MEPLUpBeaUFXdQSYvviVti3AmUc6rfDxHnN8UoavCL2PCQyhnUotH7CR9Ran",
  "key46": "4q9dGERcQyrQWUTt64aekV3Rgn7pdqCP62XxY2TAJXWBggnqjz7v4YR3s8HuZLdcn5UurPuTJugT2VFTbtbndq7h",
  "key47": "3nHHr7vebtNccivQbAkFHUcybukVr5oPhd2XoH7rCJRnNTtuBqvu6ieDYJTSnQQp2pyyXimbGSo6xAPswowU95ih",
  "key48": "4RLAsqSkBQD4P871Sg5BvawphhzxZLUms3xYxWXjRyNunmJ8JeGKU4Z1MQ3T4exAsGeEbX1KKX9fdrVir3hovmBA",
  "key49": "5NpFapCKYhpSjfp1NNi5FGnnfvT6A1tdbfaQ5sm8b3o3tpbAGWRxFiFEPpeLopbCr1xAzCJCR7iKNB5qzbQoWhYF"
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
