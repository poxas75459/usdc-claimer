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
    "pQxspKcYq3oYVbjm3wPBQ3r4xdMgpNn6mjRNmBCzMr8LyatpC4uzeNWjAS1LXziFxh6rnbGCWQyyBqnaVkvQT9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cP6yrxg75zoYBLvx96LE2FViFxWrFA2zsbY6HMNJQmbAZLCvprMoQYge9pWBzDxi4DQMcE2qPy6ZFiwcmccFDS",
  "key1": "2Bp8J1SEmrCWoSjmhphw3cd19r2NbpTFz8BQfJYzF5xRxqKLWRzriztkuxdUx62dMX8J8of8PjQZ7U62oG5LhX9t",
  "key2": "ksNKXFjnb6RN58T6HYKN4LSVqSiveCnxw6PQvVD8dkTKWF5eSKg9WH29jhQqz8Wh15MmRAKqWopNcTRRmoiiiNU",
  "key3": "5QjeHukbVVWpFH22PAUmBrq3rahHn7VfbMvgNMBdhB1yC1qcQ8H9qwyK4kWhV5huGmXycpUnhnHh2gouT4NECy7B",
  "key4": "S3iC1SypJFfqP5D1FDB67dxg85MFcvV8J2DfkpPKBd82z1QMBrXutuHUPoez8qxdnjSgvw4G7Gx9JjW8VWBUqof",
  "key5": "2zhCPYrdqEdbfDdgy9iz7T16vDJTBk5cJqyo4qCi9eEE72qTR8vhYnhu8SfVCPwXvgHREEG9JfHSUm4eej1Yw3Ym",
  "key6": "41xa7fHQoz55S73pJccZsUSMcFrs5oVKLYPWKKMTiBHs3w5UaAWqss6xEGNVeniNBeJ67e6aaow9GbZ6CNsyKKyw",
  "key7": "5bGi9RLk2VtNWpCvgPXaTd3rSN84Bkrcts4SbomWPc7fRJSUeT1wsmoRAzD4TmtT6CBJXcETtimcCBRA1YFbQHDm",
  "key8": "4KtRxMaXTzenj1r3o8QAFvjixziY6x2tWSsD1sBZDAus1fgFMra5c2dTxfAiENQTyJPw1suPTsqedpEwwjWSCjY4",
  "key9": "5nyoDZ5N34SsFmZynBK2cDUdvwesYYQUC1g6dyVhFYew4YefA51mzDjrejnkTPML7PT6ajx2B2px1Fv3DGQM11Fq",
  "key10": "4JVtmHNJ6ykwaKhrb1F593NJRg4AVEwhh1fwzRsLKEKZwpWLvnMd3vr3gBLL9nMtWZCuRpvq4jpFgZgo4ArynGsc",
  "key11": "5grhewasFVbfCD3dwzgSKEaJhKEu9otRBL5LNfRGWn25KnnTz2vhnor1ZbCfJDANBL5GdEDeU8Qcizr4fVavhbrS",
  "key12": "2zdS2pwrRXebgMqJcxgmUK4yNVuF59L655gtUMxMv6k7NEJRH2LFthNBzbPYiXjsaRkqCMsRkjV2zCAERQiUFW19",
  "key13": "5hg9c29vsq86rd6fH2UUpX2ymojt2JvpAxaijsTw8k1DgbK2a7qvRBsyF6anuJzssK8cFWxaBiT8KVZ2LbEyzHBt",
  "key14": "2t6htidkuCYkrSzznqCmhWCXPX1yvVcDW27s56YqpcrQ6egf6JzZdX5N3KZ9dBjuUrWs5AAYtGjmTFdAgRQU2LBm",
  "key15": "5L4DJDTaSksQacw3LJGnk2xXsck9D98Wg8wNdaKfRLeKf1LyZQafLY2ahfiHVu5wpXAQ8iAbs4d3MqwZbpXQ2VVM",
  "key16": "2bdGD2gWhcxYa9sugQQNK5BA9aqqPFScmhuYhHtnrrZKnP8U2eXMAmPc3QnrvewUKona1JmgCLjtFUh15MfTPkr6",
  "key17": "29Km2XD1jkUMmts2Wr2DyM33AvHzck3gxcNzXwmSdPxuxAMuzTRCYjRNiwhSpHmgmVuhYSNx6RYE237U1QuPEcEM",
  "key18": "2P76Keo3zrzs5KDhRHyQS6etsKc8R5RdnrJb8RuCDAWRy8jsBiRR1UhiA9ryW2HEfaYraHCBDeipQrk7sfpVg3Fn",
  "key19": "5SABuLFvvepGSUNHAuS6TBKj9S5wu4X1q3onL5ZerSQczazS9k2oyAzMw3QJ4Jr3PAUAG6RHg6tNinY4kkRzDi9i",
  "key20": "2SMJ4Wbwao3qE1ZoaFBgQkFPXknkjX4quWCVz4pKPbJZoBeJXNADH5khxgfva4Au55KT9hByC4GwKzNu6NJdKajx",
  "key21": "3B16nKi7qgaWXj7rSdXny5wmmXdMHZH4pamVkHQR39MuQM4DvUqWWs5ERPV5VdGKAQsMG3mSL5S7TgZaRiJELYfc",
  "key22": "22mHVcWJXF1hxfGKSxr7RwxHZC9Z3G76iS4dWFzz4WnMecXecpZh4uHXjc2MMMdkcW9Y9q2DBav36SUoZGExp9o1",
  "key23": "3smKLZwhocAtPZBehMoQvmbMxgWLKYUK3PD8wsXUBhHSsJKgXRk4WGzwwjuHhiaKGsKKyRqoUhq6tdChn9oz9yum",
  "key24": "2iaFtwV2eESbzm8GcUqJe35EANK6mJBca2RB8pvvBCXbrPdHLdQSmtwDcUVjQv52gYofkvHUCK1XxCGZybgtJfpQ",
  "key25": "qBAj8fWcssYZuLNPK6qBAU1g6p9dBGKCC8qQRPf3MVxNG9qszPzRkpLVUBr5CnJzUo9MDNpz46X2poWkTp7LZBL",
  "key26": "4Y3afG24R3ZYChZrJPd9SbZariWYn4gyngrn8hmr7usLKdro8eLovG8J5wFv2dY5MPNf5E8TZh5gaEq7GbovzxQr",
  "key27": "4tBT4QfxvzyPjsbVLCQ6hseHMz8LjJczr2DmSgArwt9bm2DdrJEbYh5UGXT2PMhPX4xERHXchmXiZMTMDT2yifHG",
  "key28": "2QuM9QChh8RfvjH8eJizeUomn1HBEmn68EfYRAtopnn3GCMQ7Q2ww7CxwVHT1Tjir9re4mJUvuG4kHXWb2MiCvTV",
  "key29": "BkGWtzkVgGsbLAX9HJm4TJfr2HF4BUtawY2aCbiVy4RY2iN1YynpxvdyjMp5zGqES4omnTM7iXZnLVhMfvXD44T",
  "key30": "4oKPdz96n7k8tLAevNNfXGiziQHT3hyeWoNuSGQ9xTnkYLSUFSLhvuzBhhzm5486C6ERVy316XQd2wGzNfa2bVHK",
  "key31": "TwXQguvtkaT5mzQnoiNKwh6nRBW9zKEoK4aaM3eY6q6yEUMo1YAM88msX4umpwxcN2FmYdLws32ZzMfQzCDrgxH",
  "key32": "4GCGkxsjrwdEJwPMVn7kb9MREvrP84e1CJ8EA1nSqFKRKuHgh3w4LnVFBetFT8DrqDV97ECgqGGWWCcH3g4ZH6sm",
  "key33": "61fXwETnHAzixXap7wWBzZ9d8kQ3DinGrWEZif6NwAKDyHjbBCJ4cBnjdh7cGD9WymmcuXtGPX7EuPQWc6S9hLTd",
  "key34": "3Bes1swueV5C68uQaWELMwtbdJFExbiRXreCavRYSaCKmouAio97iYuJDnwDEdBGNyK7n1TFxszSjxbKG5EXJSbc",
  "key35": "3RP8mcyoG8jSM4S4fQrKbYThMqpnuEekhLFuTpKhDGU6Jf6sFHK8w9fLiBWSCDhFBTxhkR3B7xgwsHwNqqLot2LH",
  "key36": "65XnhkRLP4m9Qdx3b2rKxLSDaDZ58pyYotjaq56eggCXx9XG1krJVugSYe1Y28dmgwcNgGxKtVrumvafZKUr6TBe",
  "key37": "3owPfaJW4zxpRwSV5zY2W4uewrsgaokda959Kg2uERdw2ynn1nUjTdVn2KzebCbj4TcDUiDGUtqAWpUMKQPG9n47",
  "key38": "PeP1P7dGjF3ggoYTiAHi2WbDsUeDvEn8ZLBTD3r1r6TwVRL9j54dgsrDW3ew4eWRMunYzHo2k9wrEpmh5qzzfNL",
  "key39": "41qommxZDhjRF8Dr5ZmtqXdGncqaAdAuJLa9252Vg8egVbA6oVWWJQFEQNsd5a2ZrqibgvsQF1A9SC1pGSJ6T5kF",
  "key40": "3o1GugaYB2pTkwsFxrjqvgnvNavZQ8WS4MA1EYeiPcCAa8EiXkkrY9zqzbRJUgz3SmW2RN8JhVEeXt126t44nbab",
  "key41": "4UVMGmg8yeqn19TJ9EapD4EBxoY7gsE1QJEQbQaMXACa49pFEJwxVBnQeW5UpGqfEjEopqMbKWpPRpRagrGqVeks",
  "key42": "3mPJzT5vADVedoa8V4LsYtLgWVGvFA7g5Dt1GyUEgaa665hJqdCJ46psxWxUunj6EJM1DEAaTyTYQfrnUf2351He",
  "key43": "KUR4Vfa8C51aQXRVC6cx3M7KCiaMfhmGosjHK9iSsaihVJ5N21gdfFPDJrXtH5TyVSWEwgp186RtTE3toUkeJav",
  "key44": "3D5h5BN7SWudQQP5JAvz1LtLf75cV6TvoBC9hoLs39D92i2cT99vyE57TjvBjtToUZsGY7j8QXtfMgo8QAevFwBN",
  "key45": "474Ctr84jswRZRzkbbAq4hyQ7rEM8PuYDvuSrrS8sXkrh53soBwnsMxwmvrgJ7Mi5sFDeCdJo8dcY7ihrHw1c8no",
  "key46": "58ZddHRNFo3Gtiejvf4CMD94YxqK84RfDb94SAQpoBMsLquPbmkujJ9pXY2j5boh8qRHQp2JJxxy5hQtADJxDEpb",
  "key47": "5SHWKo5XNg8oGP1SuqMUkjegvVCJiEynzbVvDFzG6kLjeYPxqNfzeaPuc2YLQt42EV7ExF7c9Y7J66ZJ3tG5Cbem",
  "key48": "5ApoAdqy1nV68VcxcKf5CFeq5FaqnqUomjYsyoP1maPxVNaBTkgoJ5jWJL5xsPDKs5mAbpdLeTGZHWSehn4WpiWe",
  "key49": "3K3voZ1JWRakF48e8UYHnynDLzQ2uiGMwPHw232VSJPSnym2NUFXjsbWQbnC7ZmhQTEjAa6uYdAPZqj9EQno8BBK"
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
