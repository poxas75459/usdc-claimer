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
    "4rWjo9wRpbnfHyfvd7jrM4nbdSj5feP1tVpRzdUhuoVmoBvgsvYZqi5yPKbqEHFAKNsizFaLeAKPPMnMuRoHcWWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igqbxKCoQRVQjS2hs3mTvxEtTcoxvc4XxCSWLKY7ECwrKUkiUuQBVqCBUQe8bbKPsNBu4RkY4NXWdacR8vYtA85",
  "key1": "375T6eCEy5FXGRGuKmZuFzbk58dW8BPujo4tLhjv6iwmhrQ27g2nFXyApUZkbCwxJJvu75uWHMoekZRkCt7UAR9y",
  "key2": "2Udpjbxy8NLpNfQYMmaw6ysifXVkEX83dB7W38XxS5KoSKSnM7MHRG6BSFQxtFVbNGHkT7CgbwHcLnFWjGYLZpyk",
  "key3": "2vWcQQgDFwTGNDLcmoYi9g9UScryAwCAHhtGxnh2CYQ7SuFGPL8XywVsxhWwYoRhxP4qb31zYFnrCwuPhcStuCxW",
  "key4": "34eGtbShmYpLgTFxwkVAZT2ttvSBTXRjcjjMAoQN5UCv38WgE5Kc4yH4EAkYwqhACHycS1nToFtLYFchGtQARDV4",
  "key5": "Quef9tukNAF6LmiKq2JvaM2f6EhkjAhcMfQQN5m9TruwdmjrtSFshYTR6hEcD8ZWNQjU9j3YH1mFupYnayChFbi",
  "key6": "3MenWEMvYAe7tcNqbFdYXAZyy9Uk7uzZUEFh6Gebv9oXPPyKyBiU7hufaepFeTNwQisGCehDYeSNr32gmwaZHkRS",
  "key7": "26sCygEGFULa8vVCMUqGEWdNdafSRxK1yyCz4xGzoUEBNLsG78FQ3BqfjiLmtKWsH176AvQBvUiwHx15c8tfnizq",
  "key8": "32ipwnnHVLusxmLJM6Dm6ecuBDajcYw2Jdz6HkN3k9QVnHiVCEhCMuRHfHKzoA3GZCh5a6uMSuT8ba2bHNh48MEt",
  "key9": "2s3KyxeQWrD3px3QDDFmeMYtFY4k7XMw57PMLnYtB1QMKchRrhMBiCGS33VPF8WG4HWyPWvAK43ghsLXpbgHUmej",
  "key10": "2qp3YVvSiJnwkgK6B5iGZFxGgEbTRGqnTMBeAB3erEuUVv6bFQ5Td2apkSM9wXiDcM2cRBUBF1u4rvRhshqbLvHR",
  "key11": "3oQREbk9iS3cywEWtU6UtpkVkcM7yxw7GZkYMUDky4sV4JoMv3ayGZV6kUaTkBo8UyxutaECo8mQR8vB5HZjTb9F",
  "key12": "5oUXnNeNwCG6HgoEUGPWukQxzpUUPrY1RfLjYyNYCXMqYF5Hrfrq1LUrss42KqoNpseRT6qwg9ajvpXa4sh8YY2D",
  "key13": "kkV3UKMJjNpYyrABNWiRC4L9FZKBRsMEBaWF2e6qJxVdBcV2S96xpdeKMtqVc4qijGfhU5ebHiJ8cmAqRhXZC8R",
  "key14": "3gxpC8pMwzsDZXnCsVxnLMsQYsUJGhyfmaDJajhZqPuczBEzCXB3ngsUrsDTraS28EvHjgK51wkVinw2NXMMp5eY",
  "key15": "3m2wvcHrnuZJFFyN2dXYWVJ2Nv1Wdr29XESK21mcDcHrK5usCoy2KsXimWbVaqq1UsqJCAUN8bdyE15yZxbAWGqy",
  "key16": "8yGUmBNym3Ja3MxBud2gATeSBAQizasWtywSSpikF1RQMbCdveSW2jgTWF1dzQAKdyJYtabC5hqNy8jibV2NgFd",
  "key17": "4Xo7zrukaT3Vyc4Q9nqyatutwFVZzar8vASf6jDh2CnktFaEwRw2KHjNrLedCCZzNqAM6VB9H8NJHudsmWZYHKky",
  "key18": "41PRKKNDJ1DNm6V5itqmmNvQX3nzdbJdNbqAz1VdCmqxZKtLgbKef4ctArBcECPoKXNBt4gDrMKjJALnQDreBKaB",
  "key19": "5Las7fHC4itsbJZxHbR11KpNkEaLXak2gfRSmEBqFdFRyTXM9c3VnmBPmtCZWH7tw94MvoKGySKBQeAe6947HKwd",
  "key20": "41n2d66VueCtA1oR2K7u4qnKJRHGCU26b56VkMnHMJAkuhD39tWVBBrXXknrmq7wNfDwk8AeQBGTiiMHffC4rZ2Q",
  "key21": "4AXBuD5PfhnVDafvT1LwCbusFUc6DsWKcjHqgrDVZZjuRjMJNbbMEJyWmcVZdqm46vfWU7cKoLL7SjYQkDxXNeMe",
  "key22": "5PTSf7RUY7Wu5KrkR6wLwP5tZfLMQ1a4GjBo978KK5ucMQBEnjCWhTubCKv3k4KmJntfDxrhE2PNBTs8HjGCvwEf",
  "key23": "3zxacE6QU2kpdqyJdzyb3wZDp2qg6K2HhiUBsR97vYA5PfhohQazHAjfP8wR1QqpPxaJLmyDxF1TrKbdfe8E8po",
  "key24": "5drHaqyKvEJCLJyk2X634FtYGRgeoAhYiJBoJy6WVqj4zbFQaa7pZPxV5Fk6s9opJj4BFVPqjHuegDfrxdRiwSwN",
  "key25": "4FS1BkBoj85rgA7n1ixVjX1RirfTGFxeqL9tJzQGZdf5JfFRT3jwEDKLBsNKh2nvzcDYKxhUCEJS1sVQUWbAV58r",
  "key26": "63PRrtWtddT8LpmAj2LbMeo2aQcfwPrMpeenM5u9WLbGaj6cNv4tEvrDi7CHQkMCyPwRu4jhSc4hZj9HTjzYdXwA",
  "key27": "43AGYBdEs4gtywUrmgH4mY7Ys9wmJWuvEi7j1r6u5xzBne7cRzNHWjjiEqMqevXegegpGJjqwJjSrLJh7naSWpBU",
  "key28": "2JHehWKBThtWXApj91p8sg8ERzqqLqmL7m7K9aLEU1uVUWhFskFbrQQ3kvfmXdJpBXGRdgYHNx2kbWqykzYZjWWh",
  "key29": "55LDzzJLt8ezARroX7g5UsPptfkdsYUfsE24w1vnyQ2D1XBguMbrErY1BETExXRGQfdTm9jbLaPMqiYVJy6uTy5m",
  "key30": "4SQwKGnGarDysmAdrhQ53hdGm1iqbWwJf1ABVh436rZwJNoxvYVRUhGwAyRfGCUQqsia3g8C1CLvhiF27idsH4T9",
  "key31": "2g5AZZrfSp2YzB614KQ8WgBAeX6vBpmsY1SdLVfkSk88YibdaQtxE31AgHihPdG6DG1YgJjsQQnZPYtJACumzUGx",
  "key32": "5kpV6SkfL6NQgoCAQxYsdNZSSzGt2TrrdiT6PrGDot2KYtUkFEMsGkm1yaNrEj6B9CjwbGj2AeWMoshmPJkCZaMH",
  "key33": "3ZHfe4NMfKwVNMV62YygSU2FG3UdkRz194Twtw95rwEbaphGp3evJVo15rFPyb1ZwbAmfkSPiArLYyfu8d47EJZD",
  "key34": "GMmTvhgcA1QQD8fttDvPZSHYB6xsgmLbnc3AbzrtNgP34CDovTekbpMXaeTWGGgM4xSamW8cmzppQgPKLZgsQhM",
  "key35": "YD2ZqPqVgwqUCnePBXERGRKX95FSZ8RCSkmQnXgjD1X4wf29DercEnBdbNFkmQWX8nkw6Zd7yvUfMAYQWrwukhF",
  "key36": "4qokt988VTaQt9Xr43Bn5unU91vQiXtE9As8K5zYQXMbGALeJLqkAkGjaXBvKDQPK1SBNHcSqNafUzQfN79tyDCv",
  "key37": "5Cu5hVUg2RCz6TksCj2WL7HJvQCt7MutVRVymFArrYiwt4sgPyYXk7EqMz7yotZJ4U5WutQek6iYcK8nWuQo5jyG"
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
