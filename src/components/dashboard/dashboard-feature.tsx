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
    "3Xra7EEVeMwRzJPbVBgJdF8KagXjh51vZcYuWvy5wsDLZ5BaRAMemG42UDB5MTzHCa1TBL7QNYt8nm8TcHRpioKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giZEGxNzF32qbUj5ja1Yjveww7ZWTKuy1LG4ibX7jaUVCGmQ8HHmkt8kW9okNA78raLM8VgRsLV8V8Y2gnw7Ngx",
  "key1": "2wvaqZB3VKcMsjQ1UsjszBrnA1M1zuNSUiZKZYMwvG2sPa78hy4JkN4WFisGpfGRPywE5GugivGaN44QQaDwp1W5",
  "key2": "3saYaKKDJfBNgWCpPrBgmZDJapZ9cgy4VENqoA76TN8Y3WHJvQSGYLLkhipoYoMSMDGxnEC9yhcX2VjdSzRPjUoD",
  "key3": "2RGVxVQepzYHinNe8HByDxXMmuUGu1yfJzdsFJNb2SG4cXv5Qzhz4MHQ6FQKTg7SdnUDCoozfoaoDymVXHPtjqgG",
  "key4": "4NQYMVQu4yCDSKo6MAFXjZJkKgi6gTVV9Xs311BxDwrCti83XaukbBK54HDTr3FgYDpTNQxawBQaGvF2RqYCK6J8",
  "key5": "5jYpiFvNrGh9thzykZc42qrP6Pz8fqEqU1BDYUfJhTe5Lrah9orqnqh8iJaGfBGMrF55r9uH8YuVS68MCDxXDBrQ",
  "key6": "5MD5JhnmodJy3VR1Ssfeby5FahP12QwT9Yd8d1CdokgVz1yqYKBJCaMrDnApMS8gCcpUaHYU27Q7nP6NozaegUQK",
  "key7": "5FkyWmdJVt2P2r7UpmyDtg7tdCHx3hgQUEN7DHuXm4SHCftaZKNGVNmREjuirigs4sqUoqTjRrpUARLac1vDT7uL",
  "key8": "59FfbrS4KNHU2mdXHqmqNyM7PZxZGRQ9dx41DbohNsLzqpVWPS6mWeY5H3HCv5JKBxbw8U8xyBBwRdK2zzWeUtPU",
  "key9": "4J5UGuTizzL3vUuuDSRhDBpChV22HA2t54TiczCpLtio22X2yAgFu4hn6MLcQ88JHDsXfNQhd8jXLt8j5dPQ9r7w",
  "key10": "652CH1hzsBXEYzk2fPrVqpxhPrbxyaJuKyr3oVYi9pDYhdMPFnEu7hRro8hewztSUETW9Gy1XAKLsFNdQuy132EE",
  "key11": "2epPmJVhN6vFXb4m8BjDoaFvz2mY54b76gDJ7orbfUP6Bk2SqtyJ5QJ7HdDhi61znrsUTufFTeSHKMzZ61vpygrD",
  "key12": "3j87T27noq3qtJkA588e8JzeJuVmftpEV2rq7sJc6md1wUDVx5VebuSVF668XvHPCMB1d1ww86xAxJ7J1Dy8tsmh",
  "key13": "5TbfFqZUyYo4KvEhdFQUFsJqA2rG4K52Z5Z75oDjG52eCJ5jtM5P7QkiFCsKvC1xCBg3LroMdqg4bwQMrsRuGuz8",
  "key14": "8Ck9mBix4K2msrJXEHaWMndFYmzjMcatum4XPEN4mnBWZm7EFj44oKWVsuCCRfnS6fpFt9DjgW5FC3SqE65UxSd",
  "key15": "4PgB5a5aDSFLGUDMm7VmirVp8qrZqXSwEEPnNPEUxwgrxpqz8Q1N1FTAVWJD3kw4ZMTQ96N3hGgsF9Sowcdeu8BA",
  "key16": "4FkVTbK7tCnbzNiuQjUorAAiC7YDMFc9TAHYBYNFRkgJCt7rsyy4tmnLHhM74KCkEweN7YDb22n6RbzMjGVe8bSD",
  "key17": "5pbn1afpNCG4gwnSZUWjtAMn9TUVJHcQ1d2oSQCkpugDXWWXPCJDAJrej4pSWK6VNFCRH1npeJyfNMyYvh2zubzr",
  "key18": "4zRQ8UT916DbhqFGpPfwbbMLTxsAVtwq44SZx2Woj2LJGaLmZydSp237sP7fmmisRito8qE56CkFWA4TD9peFA6x",
  "key19": "42bJd28yijCFQM3stbWZ3at1Hdr4pUpb4zkZHagKjXTqHFyXN7417AuwzuZXNvcfWf1TiirUwd5DqQQ5tb6LhDq5",
  "key20": "aWs7ypqez2AZsUgAgMjXCLvmM3WEV8dmEAfYiXovj2cvGp4TyxzK6Jb8HV37DDoyJcs5zK31hvsgo2E2L23iqek",
  "key21": "4fqLXMSF6xrreZQCZWKZTzhpZ43BxpCkeMKBmDBvfnKKGD23o93HNBJTQGUgSiro6bT8SQYUMwJ26JjU9DrVmmDy",
  "key22": "gQPVeZM6MpR3BwNRQsKMD5m4dFyW8TqTArqWQD26yGRKeFLpckP78xF7htsv9Zd4FcAYShza4KxzuQjMZgrbtDe",
  "key23": "rYcCaiHdv4DWeQ4Xww6phkw4GcPSp5JbyzdSX1s9GfhVdLohw8pr1aHfFY9Jf7v9UroMrYjWoivL9R8V9tADwfa",
  "key24": "2srGZHCWYuKeEpKMaNoP1CaM4Zs7Mck7uHmaX7CpkmKoA8yY5MQS6fWE1ySa35uPcQ2pXgYvK8GPqJbEoMPqdj7z",
  "key25": "2BXaUmbM86MnCycb1ByKiKNwSMCUFMLk3hUxvz2CDgo3eYcfCuUuq9q4gdRKnjM8CD5tf7ZoavLX5guyTqfq3irR",
  "key26": "h58aRYbfkxBHcAmnY8VtuZnjPTtsjJs9tPfS38dK7UvobkyPUFb52VEZLQehZDqMuVkpDyRsNfyYBQPHyFjpS9Y",
  "key27": "ov1mYhUPb8MVCwCDCVEJACetAGhTvvzzAfzpywCZNyxkTfB9P5b7Axik2Dfgjcwrf3t8UmvdHDwkt1rwPMNHuMr",
  "key28": "4MftFpz79uhXjXS677b8vMEiyinmkDTN512xs67kxa3Y797cTsSYoKCWUTMqunkzfPNc8Uk7Wmw1ZUosxyk8gE6f",
  "key29": "gQCHbZCXrfADYANcvtZdjSpYnsqM4SjwnudVvqjTT7gNcmRTz5N3F6ST3BYjFgPC76sZNwCfLK2kfzuVphtQiMJ",
  "key30": "3qsVVL46E6HoKVwPnktemtVE64wxfGUBw4GYThfA73srafUXMQprU3PDpVNpVZzactA6VrFLsLCGxUDQ6yETDd3p",
  "key31": "51nNfha7QZq7EpPzq9G5z3VrEgKXf8o1sxQdUmnTaetGFNscU6R4vw9mAaP35vbaY27Jm7f9fWPDx2bu3tf6VGRi",
  "key32": "5vSgv2TAMX7y9Yyr258nwtonXcp5MNLNmQZji279WYdmDhqxWJUstU3kYKt3zY5AotSHkPZL79UuNDJiQpL83jhT",
  "key33": "4UUdD7KBskfcd3HZXVqtqDzVkonNbxpMaWV1EHy6ReZv92LEFqWnHw36XarLFXGp4fn5YabreyiPtSeEZQJcc26v",
  "key34": "2LvUPaSgqPKawG4xYi2DcPK7zkEJJN41DgcQvyRQK9uTY1pZZ2TtpT1ddsnYsocwX1GaQ1Gw1QtgyUwFDDJj5UK4",
  "key35": "25U21vt9HYXcMZvo5eGY5Up3CEAQW86H14YKs7yXU2JpaE4crq415a4QnyrGKpEbNBwPipfZBQm31ETHNyGHf5dC",
  "key36": "sv3gE4tUua9udZ7JNhiEsrPjBckz2bcAUjGeh1fcfbhCrGf2SmqfMsYjp6wdZX2sJU9h5KWZDoU87E8ooFiSJSc"
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
