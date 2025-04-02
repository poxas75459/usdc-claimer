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
    "46YQggFjCk3Xcfa9ksCcMkicoaQKKqgJDnvnRHCNqJQxgWkhDk9w939C1p3KrimUyDQXQSEGu8XfpLFyjb6Xtn1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJg8zFb4ssKJ68RTrTYeC2nxWkiuQGdMaikvkWgECZPrWiE4EpbeV62E1mUhMp5QygrwJL37HLcXYbZ1NkEzfDc",
  "key1": "2LyiC441n9sV2NGfLqNfJJ5GrWTYLarRr3eNYmk48a57FxibnWo92hbJDK41scR5y9ReD9cN3Km3CL56QuN6sGgb",
  "key2": "3dVqn8Quu935ovAfyU4FaVjt9vzYkaMzRdvBkAGn5ZDJ7yDaWh2E8fX9tw5vGKyMgTcuoaEHKsXpu7pfNj5owrr",
  "key3": "4q8r9wj4aYYXvdZGWAphwQC7rwy8xwuxLaLq36HEWYtsCLFy8bJMvNrYBvXC77UPwD1LyZmqW5waPUKPf43d61Tk",
  "key4": "55i8XZFxrPBvkSFpXunZpgt4RZhzwarReUihSvvaQq8zLEFEVtaHb1V9hjH5MgNBSUv37wVkXG41GTbfUMDSTGr",
  "key5": "2FtGYAy66ry1N1vm2KCWRV4FUZB8LYHX4zya5CCzEatSYuRuhu2ySqTDm8aPyFNyCB5DNuPbm3p4wTxKGd7Dd8HB",
  "key6": "4ormJayTCDdQLJCtFZVkNsaaBNbZjr3h5aTRysgPEubSVaeXACVAiUJj6hTBZYV2z5n1U7gsSzuNBcQGjF32G5L6",
  "key7": "4rqa4F3CHP4MCnSYdYDfCjw9MfLh9jgcdEHWrKFvFHtYnM7m2iAztBpzw5e7mi1CACB6KnU2pfEEsMK2rG3Ast7s",
  "key8": "5enAAv1vBNQv4No1VC5u1o7vCsWh6ka2W4RModFdEVbvAsFU58K2VaAwKzw5VtYm2UyDaFE9CGJo8h1ZhXEWnzjS",
  "key9": "4Mn1AoknNHRBKrLonTxXFcYD8UPW77R7d5TDNMTuf9Z2kHSkrDLggu1pkfgLKFnGs3dQSMokvaxEtR5Ufi6zpGgP",
  "key10": "3p8PsCfwgur5MFajBXLHAxwV4CRbRFAszUW2c9Te4wLarx5zphha6N9emz3zT8oT3xnqKmCDZWdQND39K2L7xHND",
  "key11": "2G7v8d758fwAbTrySTnUDSQDKyMm8LSMzV82i2EpmdZBtFP1wBjZ1PPKuG8s1b8mUZPdKhw9NZ7T61Bn21bZPxCy",
  "key12": "2V7btFLwwgbctM7xXgCpB3MpxcHuL3fa33LzGvZqQ8bPY1GtnANF3EyWsqVKGyrNfvhH9zphCR8NNxWztG6n5CQ5",
  "key13": "3kpAXCPiQ8qBDD87zY4BLPEnxE7JYwNAa36gaY537v5dVuKmuhhg41u3oJHSQQBzwNoEtxAaJS9CAAeUzhPE7KBq",
  "key14": "hAT1QJqvrppmzVAxRkc534fC8RXYKj91j7NWzvdtwfz2DVu5XxRZ2waLCz6SByzfhYrQr7nsipmisQ5PDAoF9GH",
  "key15": "AfUkCvL3PN1HLo28wH8RY7Th88fKH4ds8RdqQWxTsg9RSwQGD2Vikx6RHKdZTq8jtzPy3Hzgq6f2Stz2zeXgzD3",
  "key16": "3XmooUEoDgVMxEW6NnyuDSZVt2YBUuEKnmUih1wbSvHfQgyKv9nTeQR8DnonAoGbveWf3Famx66H5FSXof5mR5Xw",
  "key17": "419es98zdCzSbJ6QCGWwD8nssEqRBBEegqPAUqriZuHDEfrmipDP6ncrmYV7LfggJ7sVgUshQdaZNTPx6Px2DH7e",
  "key18": "Gb7zuBCBJzyXdpUMBxazCb7cktnu2gTzn5dnSXCAFpZtdZ7RyUNBVm2zZBsjTgX9X6nFaENjrhfUPx9zcKu7F2e",
  "key19": "3JxognupCbA7H2EuvLNZiKZGAxLgcrR8GLFMzc9eaYSDzn2sCNszpM4oCfR5EQZBwnG8dwxnqQwSnSw9nW6t9NzX",
  "key20": "qLFkPk6mrbyHkaHr8nEno33YJPmDN9WpMu6Suovo32riwh2BV63RQ6PgtXvnCyanphJxh5Sbsohcbw6T6BT2ibR",
  "key21": "58XdYtU1ir97KgTkR7eB3EBNWTsUXGWzNDpnw3qh7K5uSRsAMqnq5pDyyiigCgcMPN3g37azxxGodQY6gXtUuuSs",
  "key22": "4hk7c2tkJgPTfWYjqAuV9G9vscgQKdFKTvgxfay4hGx4BWY1jpXA672Q1qfJhySi4iqtzm76SXUVdhteEPH8dyjd",
  "key23": "3JWDoMkh4iwQDJQ5oLKzSdEd5KS9nwNSt6fKG52QmzdPwAF38pZG6hAbdXSFmZ1UnEsJVh6Qo4GfrhuY5i7Tyhgw",
  "key24": "3mzrsg1QsEde7G7JSNS2GKi2CD7g2qv8mtYbfq2omcMeH3uZZS5Eh7dDJ2bQqMt8izUdCvxmwu25JBiSf8GXXYho",
  "key25": "3HoFNhS9yNVKAHT2NQMwDnm6MCkQmR8kBz5mED1Eg8ndzWUeMtGmZ7FRuw1tLxyaxxeZUYj6g9P98WGtNKV6i7A5",
  "key26": "4X1QHaNMmcrKoyTN6sX4Gthbd64ZtajkwBERPhJFu8qzjypFTxgd5RH72c9e6vX2KSgbgUhUiSkFkEWDqj93d44o",
  "key27": "3J3wWwjv9S19VjXuzmauH14kGJUHiSNJ4f6KxdbAYLZbV1KcD6bu5TqAkaEpQ5K5rBCUc2W43xgj63ecAAr9tDBG",
  "key28": "3ETDQt7jLbgT3p4bhYoMSSKMMUZ8NmjBUWKMDtjkrZMLh8BFwDLogjfU7qJPfSyNBTaFJBz3eoL6rc3MWsE7F9Kh",
  "key29": "4fwwwyHdHFh7NYQdkzN9RFEjcmba7e6BUQktM8mqncAUoheNPS7DZNafSywXrjao7L75jHPRgJ2KfXVV6gJSFXsh",
  "key30": "EwzPBxHrVoHnnHVHzqfqw5NouxpGL2jYJ2kMVZBobWjZcmuVfiHmYBB6aaiBPC8wZeewvNtpUxqgbd8hnWbn1Zi",
  "key31": "2xwp2f8wT6NyTz4MxxFEBvih4C3i6SXe9XNhc8tWgtoXpXcBEy82krB9PDdfiwH5EpH8XZPTskSTPBUKW6oUztRJ",
  "key32": "sUuEkCdBD9XnbHcBB3yxt84xam4rJbEyRNECdctW5THoZT3Szn3njjSzB7jJUmuLJhsq6zh2cL5VQCFzXcpe6Tf",
  "key33": "5sZYurK7ggxKVgajBs8BG4iSxpCxGU9HfJkuqWvAwGzJwuoxCzwiaZPEF7mpTGqUjLPrav7TpPVS6WSgmFbnt1W",
  "key34": "2P8kLNgx3Eo8M1p5RMznmoWiCtCG2ZHtgrsfMSPCq2RUHtK7hmRWksYegQLx9zmeoKANGa8xFi8YGjs32jz8hcHA",
  "key35": "4bXN56Th9kpB9sPQCjchWaJFET3uWS2qcLSapoqeAepGzqzFivQ78GHh1m9pigHiviKburo5tbgARc3uuVUBiiDA",
  "key36": "4JTCUQBNH4vVqgnVtwzKQKbkGNZ6k4KHUtYBYwSMQhaVsEbfjWV8jb58DZSQrUJK8WTqkPL72PJaRHbgsDSAcoYo",
  "key37": "2T8StsGSGifSDd9FA1UQLZdQXUPXJUJBh3P2AodAEuwivAbpXwhcCEgN39cAz8NwGAXpHB8G9hbuBVwdU3vjrQaT",
  "key38": "5CDGCipNZhM9Tg5gpimj39GsTTkat89FkTcyCSEtJgFSDyiB9U95ZNp3LWhM9n9C4evi4yBdMh8KDwet5rApZzFw",
  "key39": "31ZAtVUPbPVkXu74BgXaQEqodYh38WotLEkwAtWCiEuKVvn8CjNvjYbmLc9Sa1bNm2vKxpjSVbUGvYDSLZgkWnYr",
  "key40": "SJ4dzSwoMQoxrhJ9QebCc5ZcNedXM7fss4YWL52885cg8JnrLrZU2nEWwSFGKZXyEnzagNNUvvNgXhWQ3KECzFs",
  "key41": "3Ewc9kKVCyWmHk5ygK6aHifZZbcMtMtYKLfdLiCs2DY32Lgd4N6MA1E8syHHCH2GeMJXspLkHgT1oetsC23AEGoL",
  "key42": "tCnS7VuuBoHZT61y2egc97AqPHKvb1SfDm1wSU3UczJtVnFVduAG1bJ93WvzM6EBEDkcs3JgHEvBAQ1eLJzizVe",
  "key43": "5YGRZFL7VcCmh9UsTTiSvXkqWow7kpUiGj6XXQEkm63332A7m5sy2rH87GtHt7vf7zDfcu2pq2yp1DopbyGAKKf8"
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
