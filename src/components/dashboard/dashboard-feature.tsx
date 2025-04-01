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
    "3Bh6MYqCgypb2U25q641gUYBikxHxLbYY3p1DYysEKNJkTEyN63UZLp7SGDNZyUsTRXCAggQfcPQysH6zA4eYXy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41PdUTvgiF96i5LhACbNJdVhM94EqYd1uYuLppFTVwzamo9UbJ7R5fLRsVbYXiTqWpbC6F6oYXUPfjVJWybyjqi6",
  "key1": "2xTKAXfr86cyJGHKrCKjRSyJoP3K919GPnyLuiwuisiGVNititBmMNbv8SemoQArFb5LdCEJVvn9UiBPrir6dYkd",
  "key2": "497dQfSMPfYGkXrXqmKhVVWiyrgAMnPfpNsGT2Tzcp8kwwoWeEvC4w9hPAJ6v5DrYSXqwRSsp3qrYGT9gPFcttVt",
  "key3": "3zsXyYhSVYM15GDLW4dS7JqMfbmPJA7sFYcg3AMXsGXp8x7Zqo3UEZyerWjSbbMLah2jSzmxd4phb8ZKK1KbpFZH",
  "key4": "2owN3jTB1gDJoNPrWPdfpxJLySUZqpceh1YobNRPi6vmQxAu5HAAGPCm33f1N22fjAbZ1nUWP3oYimBDVfjFp8mR",
  "key5": "p5jCyXY3VcSH1KyTjF3v5pXuFqiJbUt9aESyZD21faX3iSqdPLkja7Kj6gPV39g7yG4UTfBSFGrvgy4aRvdyGn1",
  "key6": "4D76NNQZn6GyLRreBAZnYYGAqEwVhGGa6Ht1ywtjM5vc5U9qt4ugYpah6YCBU1sQ5hTYo55GoMPf7xBja4e5t1RP",
  "key7": "55AjatNCvutC27ZiNS8rckfw3cLDSnzz7RZjHxJu6jjZgZwRmoH9PaCC4a19AAsBUD4ea2vroahVhowgq7FPMJRE",
  "key8": "YfLijvGiMG45X8Ee92BmPDk1xyNzEGvsPG96C87rbLYgwKPm85f7DN6qo2JXN4k4kQo7uvN1MzvJcdtzeivSFPi",
  "key9": "24E735Z1qGyzvg4WwtRbVrTdALzBBMQ9BPegzAMt7rf9thhCeD14cDJ6NZLUwMuUih3BTirQmfAsKH6mS326GWG2",
  "key10": "EwwyTEx5kxYWgKatY2DpU5TKzPKtXq83YumMKvofMURCPtcwoxjCnjFWzryfjffVJtcVodPFSjVQ66sNj6F4PeR",
  "key11": "BGL9mg6Dqd44iRdsLR9KdacULE1Sn9aU6M2xMPqNS37i9mQNDV7VwKk5dRRqSxxkYFuFGMZNqUsqpgJiL546jmZ",
  "key12": "2tiqrdbbmL3jEVPdFpWydsfN8xopSWRSTqu4Vy4YWnvmLFsqgsRRcv7QQPgKstZFJJv3am11njF9wmTyLRVxKKZh",
  "key13": "Skv59ogskZi2XN8aymeNMtxjJrRXguYxaJy7QHy4o6ane3XSTz1whGcTm3PQJmcyh9fbcPFiL81swfoHEAZzD4u",
  "key14": "5F6WKW8NNFzt7wYR7BPrYSiMSgNj99mJyAwzRVrx5VUbsJmAb5SQRjnzSrVLWqphgA5i9JHtgp5gcbUs9grdhzsR",
  "key15": "27887rbRMaaFCZfzaGSuDFDgaA77R6FD53ExwCZHEQrBLSoXtrvUSNZeRUZnLHvFQyW3Pop6rjPFxsuDJ2Ut7MH5",
  "key16": "3zr4D4MEaknLsh8dF97BDBn62pEeJe6DZj2KJWzrAVSdhXcVSzHDoC1ghLQikFvKArRDNNT7NLS1FXVbu61f78mf",
  "key17": "3USD8tfXAxMhA7gQ4pKpj7bbvSasnu62S3myFzcTstY2BXbLUQKZRxU9wuE6JyWEAWnmH7iVgVCMPaLPBygF8J3z",
  "key18": "53YLzNKCLMKSEZL7VNJkrDLpqEZP5QdkvhnXBUANXeZwhXnRQBX6fshy59m6aKQsKfYBY3RmvrhTACHAbN7kAkzj",
  "key19": "4eeytog182FDfuENEikk7J2MBKdQ1HYtH8CTgFav6v291NtLLzszX95m1hbT31aaKMAZiK55RHFHzBnxgXbmaPCP",
  "key20": "b177FRoqeLDr7qQ7H8HJJYqHEDrrE3jTh98pCmGcwtp777JimgpoVZAiaHGzqgBoABw8QKcF9jPGBGxhcYviF6a",
  "key21": "2pMu319pBeNnLGZ7hpLoVinD3s8BuUUrkHLgbuYbaArnFi9VdwVthwZL8aTK444ySNFUXDxgXifwvWhDzowre4pd",
  "key22": "4YrfJUbmiMEaJf75WQdx88Jpqp22LakaMt1kY89DJ1dvQzGAACNcFUhaqAYZnv2CTSDbH1Y5LCKiT7GJpC6k1ZGL",
  "key23": "i52HRME7NGS4TbnmLqEyVmPhuMN3eomqkBaf2VvHs1hPRCoSE27AbBCsrsKFj9HZXYgqfTa7i9YPmFjvzUxmpDj",
  "key24": "x7hxbMHbU2gjUbMgHFgaAyYB4UGwUWRiDvTu2ALrBdtYPhFEEfcGmSRBEwNshXM1TdUmv2bU321UGVGQn4Vcpjz",
  "key25": "2FMRMwmZsXLrEsy7FSh8e2GaydUbfcBZbftdZRoi3VjAZC3hmZSC9zwVeABAwNTKX858wEMgnBsr7Si46ZfYxuYQ",
  "key26": "2i8xWVvcfnBW9AP51zaKS5171oZsHReduJV3dhEchtZGFb5Cx71SydvsUQ5c5JN48eHnkMuj2DhoaDb1q9oXhLmD",
  "key27": "g9qdrBfEEwDXcDhrPUdn1mkv1xhht5xs3nSvM8BVkXuhWJoY4NxRVzVDaiUF5TCZpBoy7ZigM9L5cjKszsdedbN",
  "key28": "4KKRX5kN5Jxm8zhVjMjTs7AJrCnVWnVQnhK8m3JATHjyPhiBcEL5pYR7zmyn9ZPLaZ4b5e3E4KRUBmP6mGvihqM8",
  "key29": "5KPKq2ANWrx7AnwBFUmpVQaT4xhSvcSmEYdcmi4cdWo4XC34v5aqYyKQWU6pn4U4ZGphKMknGqnimApiYbPKY6JH",
  "key30": "5zGDXxnGQCmLpqsAKMyj9xLQKZWQMtpgBzQdFEoruKWQQnN5mGPNATVytjGbp65DtMxSiAtQQqEozigggxpSJkna",
  "key31": "3MekMou9scdJXQJzABUid14A8kP5Rb1ZcVUYr1KLUjSN1XQ65ZUDxgK86XiDKkKXbvGFqpvkHpY9dKRpmjzJxddi",
  "key32": "46wxqYyztbcbq9jLD947Ahne7MVbJ89X5pSQQeUAP5Yp2HqAg8r5Dd7QdkMgBBo59MELj6AeSvYsU98eeAX1AzNd",
  "key33": "5dVCE1MgyPRpsC4E7rxAk4hMkymrdDdNmKX6BadHMWSPFXaQzxUQhsPZhatDppbXtynSAb5xNrrk9WjFsemQ3Yfr",
  "key34": "3XgGBAWeHTmABE2xvBQ3e9m4WzR8bvR4xZVV5pH8D3gNptZc2o18bM9c7bAd6cr8V7AVenGfVvHbBBvJp5fNzcE9",
  "key35": "3nn19pUSx85fkXQvzr1tM5prXZSB42APycMy5ZoTvfNTgL5P9Kipr3wk4yUvfbGx1r2Pw7UT5BYj3xCHiLKVWP97",
  "key36": "6791wzAyhrQTb4vy5aB5tMEfrda5z7BjuJ5hBJDv6JMe437xnLy7Y8Ng2LDtzCFPoXwAAtE2VBmqxQmf1e3GtD8F",
  "key37": "goHVtiYYkY8mAv6k5zXgxmeXnumsKkMe2BwM25JpjcpQtghAPUguowTxBWU56r2nnJMwqKRdVGb1fP2iBpU2Kzj",
  "key38": "GeSeT3tDQPgWoniQdAgktZsMohASPr7dm41kB5eByDDgZd1pDFeaJFTJGWxN3hwSGrYbyh4q8WLXYEQT4wLwhzr"
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
