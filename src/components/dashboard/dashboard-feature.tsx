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
    "z8nJBqTirw4EoHnTNNEfMS9NfGAnBFYMRzWTmNxL4bETKhgd2NC9m6uLrTaitvLSJW5UaYhqEiqC7CAJXRGXgXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzaMcJMcHi8Q8kBQS6z9ArArKLUZFHVvyXza6iRhsG5ktkDy5QqMy4BwJ46fUp57J4LdR1XqNPsR9X7SKepFqmn",
  "key1": "2YobJ7BCbo8moy7i4BsZQhHZrAnGpgFQ9QQgFhU3e2cRJ9tYtTurxXDwcEXBhwmRnAbwF8qozyXGEu7wGrPPeidx",
  "key2": "5oK2hRgCoMwhuWnPkZm4cLHRcZZmxdKcJn15ZonPfV6b8LwGk2H9AdybNZp9jnpo2cUwiWmemV6HbGH1yaNXQyBi",
  "key3": "4gGRDonsqixHAtwb3KwqJeLxzo84SVFkLhUCtnb6Q8uk8n85io69Yr56RFzSurBjLDaZJDEU5HLssi2rLg3LoeUi",
  "key4": "5BUKKGtt6c4Cqw3TJkW8xWffwv5vGqoFNV2sogZAqmAGXa5rq8CGHBpNT4E24LWMQgXVUzkJJvLe9rF3q4ZTYAYG",
  "key5": "5TXZPf5wE8nh3ts7KvURdgXWx2xi55rmUeXXQe5Vd5KjJAkxxf8eVrshxBRs5poEBrATobBvLrYm1xw4L8j1xQsK",
  "key6": "H5VNzzVxrWoWr5jVpBPHMW5pYHbQneRez7SDHbF3GeDwBTDqoUiM9HNb1fEmb7TGfZ7X4sNJXro2QGXvn2kjSt2",
  "key7": "1gjHJytnebF5swoN8JtU7SHWftV6HZfVWFCDKpMzBWzKpzZbHqQzPDQNX2N2BdSUP5N9A2g98YM3CpB5UdGkvHQ",
  "key8": "3wJPyzWaTZ6NfXWGaUxAV51TQaQrYVQmh8UMr6Rke3a3S3nZp8Lf49oVeu66boBa5kNBoVsYUQXKUBJw1uzsmk3d",
  "key9": "4hcEs2nBRwkm3GxQM3NPNmhtwrECyp79ngJHPfeHXEErEHUU5zwsE12rRcT39NQGoxHxEA5PNEyzvMYjKsQuUo3S",
  "key10": "25vX2pAmWDbJ6WnQ4sHdqjrUUqgbqsJSdWHirgbPtNMDRXKLmrEwvzxqSsyi45Y6f5yJ739b9j62dBvVVHzNJSJd",
  "key11": "2W1YNJQnVi34vUj9hr9g6enMHkGRacqfY26TkpWoBL6Y79bSayZTXxKBGLitqdBmLUvmgFA8svV8dshiL76d4NFV",
  "key12": "3cC5JVQa3sfimwKoRNeY3X6y2FoxNxJw95Mtx9Ho8NWGy1n4rxHH5fe652AD78CGuXVcB2MbYbKYeYUpaEmDX5gM",
  "key13": "5oPEZMNJGCp1imPWZePbEHszFmnbf92ErW5PvqDjCxAWTqmpQY2eCfuNxEFJCHBUpwhm1RGVawSpuLawRnxjJGP2",
  "key14": "27frwiisx9Shgj3wCyQWszeTt1UB9A6cLHVRMyoo9YrLDy3LojC4CdEKTMXjoTqWh6CXwn35FWQpE5nL4yEHrEr4",
  "key15": "NhvNZEfNYvn6vExa17RUKhEJNsX5xbKyjrGdv3Qfjy79MKUg3nw96PyzjRpbKhtcftbXZBLb6Sdv71Tw7RJawm9",
  "key16": "2SJ8cPNXqJQ5kQXUQB1Chk3gMPjyuG3H6Cy43imKVtXNE6iqjEUR4faaksKRpRtoPbUHspFCVkeTUzw7AM6y4N9b",
  "key17": "4oowVSQAKcGZgHyALs2nTt8fbForKHpe6gR1oV71k8V2CdvYq25B9PnikcLPpHRswoAWW3yuTGWuNwjXXRC6XpkA",
  "key18": "4iLrdtpuxUJKdbizsXU3oVVhyrYLWEoLt6fbDZSM8NuideZu5DVuPuu4MK6GAEjQVxNTCTY1c543vuGYTy3Z3c2d",
  "key19": "3GP1NfNuQKNPQTZyjuhTK5q96kfH37GXX8p75CandbG3sKs9DpLcM1m85Yyw9PUWVKXrsoqLhpgPtEQanpCg5k7w",
  "key20": "yxKTUjN8fXkycgmwbief2zDquXBhmUB4RfWfYnsrz5VYNza47khd1Vegc4E1rDVDo6N4zntym7xBCGPAVshx8N4",
  "key21": "2sSrhXdvM5MHJpEThAZiGLge8W8bh8s3RhRr9MsThnVmu9vW3znMbbRBGcBswBpEM8Yb6o7qyVn2risZA8Pr9ePu",
  "key22": "2s8xxxwXjU1v1gDrEocC4nt28Xam8Z5NfSvXi1Xa7CB4kCZrfvZi7J8QscoYLipqdZ6eaPJgRjsWCrWyH4EMsfiG",
  "key23": "3H9Xgygo9WXri4UNFMqjDbLcD8p2uzJhbv4f2X12Jvrvu942jcxQYzCzRsiKKS1wDTW7RUKM6K8jd6ncAZfhgRAo",
  "key24": "2GDjcAz6rrPYTWXP4HTfPxzAka7UFEEcLHsFLwah2iWHj78X7yMhbxvxQUAnin9sEjY4hpKe8NbPF1Viv3evXhQZ",
  "key25": "yuwVMRmXeNdZcWJ3Vh7pj4nX6piMtmB8nZm1EAZsC4YV3263ZW7NS67oM4zP9Mm8vBdB1sLDMH2ts2fEidWKXNX",
  "key26": "Hqofx9vkPC81hyia1bkB8pcts8nrrzQkJf8a8c8jUzNkPbPrCcyGUpHZRw16HSK4tcpreCiRf1D9piByVbJbauG",
  "key27": "4HMBYdrzQGWSZL1xqeDou9w2FUXwVLYqjTeDF4YJ4FNuppHb1R21uEuHwy1p9QoFmo6rCg19aWvden9zYKV5vXUs",
  "key28": "3rPVZ6ZLXjpFrPiVFgAYZGfueExYr1PTvb6dn6RqCCxxmLFg5fwcPFRtR6NHSkqT9pVJtV3NhLzWc1V5YDyM8XP8",
  "key29": "44rUTr1Jsdcj1SyxqeVQ1dXrimY9X3W3cuMHQKjBP8HfhNxKVsQi6kq4vYfRv6NRJpozDcqVxqGd6mrp4KdYqkBy",
  "key30": "5zVSzDEb6Q1KF7LFvdnbPNhVFi2rvsBmjNhpow99Dze4Y8Pj7Qk13Jjej8sWKbLYXoG5JeihZCAya4GUEoVVPBuA",
  "key31": "2qYWGiozC2tEFo5GypFdC9LuBXFyfXtDvRvzPYa6y6reCyCBXYS1BveWWEC7mU9LPMHYt5uKuaoN8vH7PDwzefox",
  "key32": "5h6cq2EyrWjocb9thsbXZxnbzsXJMo7wfGHeSQVXfhUApdHs3VEtgtnpozmEpdYLmVZpYCVHZ8559quFkM5JzM83",
  "key33": "21b6GU8kF1QxfztuGSMGnheGDRhvrtNVVh5Sna18ntmxmkPC5wJoybmWhH5Tx74AzJB5TgG3YmBRWezVBk2ruULJ",
  "key34": "3CqgdHpax7qiCsVufDdRA4fgtpdb26N51DLEJxeeGstKJd2hkPyjSQuip66UQuD9ibniNXpU94TybVQK9j55toKm",
  "key35": "bnfbNQ3qLxEyxhM3Quwmu7YtBNzUArWrEwmvbwXqDWttEyUvDXmkTcDAekVngcPTgARUjrdDwdtwfNQbZpdTwxx",
  "key36": "Gw7EZSToVpgzCNH9SQa3S42TBbcNgetdwYRHRHsBKuDy57jwG2rWAwEc4TivQrh8Yj3JMtKJ4rtnEwv6CBdQckN",
  "key37": "3XWbU68bnsnAZcraBQmVDDH1KBisA2pXiL14bb7JyaLttZ4LDEPjs3FbTNUY8qc6Z8aQKQjwT3caCSCny3GbozL8",
  "key38": "48v8B3LZvVXLb92Qk6w93sXjTcFnXZoHQimBpNd9WhhVDY4XTbVNhCuzXYSySaLVrM8iSH8FevLsndJSTncsW8ck",
  "key39": "2uAsmGbvHuG2BpA8vGcAfF1UrXgAvK8TFyb8BtiFA5sgd3Ku6wNZDmZHSEKsy3VEwMy32iWf9eF56SuPcvAmfHHv",
  "key40": "46sgc19CLP1BT6bw1mNTmKTDspC2UVMwuMxDGhzeV3uip2Yp8jSFxadxQiYpcvYekJf81eb1qvp9w2Lc7scuWTQo"
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
