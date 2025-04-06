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
    "3mRMYjmqRzNarHBKohdEgXouAdiHYXkf9fzH7WDw6C6AMLRr6spCxPZBrScNwWHQnZEugKic5NFXJXhxwvLgYyT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5ifpmEnpsmwce36U5si4WQtqrHw36LZiktVjioiVtnMpJCCK4EkrACiynMxVah8F8sd3yiuCyd2wnMGpfWPiDU",
  "key1": "42EGRTHLk7dwmxjgcJFCUtR7KQB1wsVLwoprXYSBaK6Jt2xJrCqdjHCxxfJh9a3TkHVgfzX3Tn6gWKk1LQWK7Liv",
  "key2": "2c4SPpUmj1aiMpMvgczcRv7fvCcvqLz7P5JmBZPGVf7GFVByBZvHYvJGtumybnCp2WMGT66QoUPK97h9nfgXZjpU",
  "key3": "3h7KeGcy9bKppVU5GHTgZGYqJq9xj2fEXrDCn2RzLDvqaCHVemU9vtuNJr13NSTEJsPdjM16wyHURXy5ZFUcLPq8",
  "key4": "4Uo43Mcnbgy733awMt2XyHjzYa7SBupWDiuSLGSef4YR1BKmnHBkkGfBJB6nXUWNPvv4UMELpPVWxZeaCAkd58PT",
  "key5": "zR71nYGQ4JuPA5bKsjzbvdcCr8evsi6TRqFTkfcGjehWSUkb2bAiURbm9A7ZpPz9zbqSxRJhVTEebi3U3FVt9cc",
  "key6": "3FXquh9r9sEBDtw3C1vtFePByoRStDAvNVuED7QWQ3vobmKrKrHeYAZxHRNc8BGveYPMZ9RU1d73ro7w2yJ5rUzy",
  "key7": "4TRBuNLzN8Q5FAqCPjSqzDh6KkHowGq6ybUUs9k3BvUoCVC1bzEapeFsyf4SP3LQUQgM1QJjhkdB3sKzJKaDraYJ",
  "key8": "2o7K8KSo7AjgRfgXx6C7RPWwudVv3EV9fub85zWKBWmcwxPCK1HzuLp1BQAz1h4qdnSD4pDgp6dqjmUHauPX3zft",
  "key9": "3NqYETFuQtv4yUkWD4cMwBA5w8PpRwDMWJWrby7N9tH1XszzqNrxSB3nSKoX7jZUqnRZ1GGia266AFhzGvKtcg1G",
  "key10": "4eYVo9eeYjUZqF4eM7Qb63MfDifLHurYprcjhtk9yX1rKhG3WjpUoMirLeL7cvCyVQbsQ979PkrYEbtKvWgsgzvm",
  "key11": "2BMzEzu91dvP8xat1kDc6bbNe9cN3HvqY5fRBUZ5a75dqYWJzZmXQTEQyKFSyYDNyv7FFZnQP6pN4yu8MuK1xyb3",
  "key12": "4xrSqD598GsqCLH2QxmciXtwrCUpSvpCoH6VUQR4dJZBezNbeF63nnS5H8yqNnmFtPEaEp2nvym78x5y64hj5FmJ",
  "key13": "3X9VSSdBo2gjxQRXjxzN7GMYc7f2jPjFXSsqVy8AWzwqVpHKTYvSxbyk4wUkLU854ypPWDtjEtTgQ5on7Y8KFgMZ",
  "key14": "4N1fEFmnLWnBhn33R44xAC27GdQUpruHeVEEj3HPBh3XgDfoaeP1D4CTYutqkmssZCx91cs3TWvnof2v1rTf3PfJ",
  "key15": "5CuJMAg9MsqpHtkGSqDbkkKYeP2JmCzQwNc53oKLc2qjFXUjtxmH7bT8s3jifUxJmCAXyR3EaoDoqUGFvPgQWxS5",
  "key16": "29HWPdHNV27ByH8WT6cNqJPwH2BXwWmGvs4oBJgv7bP47szES5wWMMkavZtbrYct3WGDsuyu5v22jDejvRZCAJGG",
  "key17": "3u4DhQiS38nW5ZY9XUko1BQJx7XdAuRTpZsNGHXZeKeeuCi81QvXVX4R4R7RVTbiej6jVyuFw38Bf4xEdy4a3MEp",
  "key18": "4FBitEfAukEM12vkudjPhEnq7C5yeqAKR8mc5V6Ckrnnf5kj2edCkAiSL55b6i6u8oKG93AfSqGo8owhvFxVDotc",
  "key19": "2FepGptQrH1LBYMM5EwsEjAburWwgGYoCe7GpCTLcXSnncx77szK6C5kNttpLjsTXoJAtjLENJtT1bsovT1MPdTs",
  "key20": "46b8qRMoz3Aqm1ffNdffXG5riLHWzj1E3wyk983wYtGSjkvfMDsj7pX3caJdhdLFVGrT7J9gev6bSkRebpihYEju",
  "key21": "2AWWkS8Q4ZEQoYXTzWt6WDWJHa1DeFzoKhu3XSPGjFA5ncEUx91jEhAbAvADJ6t9nce5aewRWshbeT1PU8tmHMYn",
  "key22": "4vGYx5ynCg3FRr5eKDwt4ZgvHwUtCeSi3fviqRbrQWiNUAQGVy7fxwXpyQmjwEwFwQmzRSCQf5EdZS7pVWJqwirV",
  "key23": "4d41ipUmUK8BKGcALrJAZPYb3Z4gUpY9pLLecjRcRZhrcKYAPzHyLbNWNn8jQEDqUBAKGTfaBfLfGcLqD85DEY17",
  "key24": "3WHMAjoRDJEqNs6guvcPRzVNanDcoJHcLbW7xZvHzXNArsvYcaDKi1egS9i1PyEikHExCNa7xhg4zgv9iPMm3dT6",
  "key25": "444BpMrEjn87BSDsw2skpbArUKHiShf4DR85Q17HNiMF6kMhZkuRFCQp6aBEG7PKTR6tF1LAQavUzYBUNmuJp41y",
  "key26": "2wUqEa6pVHgPgfKV1XQ3hcqEbDKYjMML9Sp5mtgWHPkFaa2oUHFz4Yjf1t2yoVV6mBUjp7zQc37SpCYMYYCyS4k9",
  "key27": "43ucrF7exbiyZN9Kv4fZMrwWVwLgRgZGWcxZXZVsZkkbgzRkmQsEtpvFYeDyFK1zZSiYGdUD3wfLmkEvQ7PUYjdK",
  "key28": "2eCPGWJg2x4n76yYF9pJUyQmhtZuw5es1U1fZcvT2sBg6XU9YSmhHNzBGbJiikEEmUHx175EgUNpYMsJDhVzskiw",
  "key29": "4tqJ527snRMTqACTPVv5hpsamn13f4BnVo3Ck48q3M8PBT8tjLKadNjNmsPi4WLDy2nWvY61A9FpmifTt19L8mTc",
  "key30": "4j2migV1zAGhBS6taBmhjEXxkMbPcjQE3DpeM22nC1RduGqNhrYp2UdQTQStLV8JbHtYcRLUyaNdUKQ67rWBS3Sx",
  "key31": "2EGQAem7yrqtF2zHZJiBcpCv3Wmj6xfDhci5z5mWHB78dC9K4LxXRbh359JhgB8kSDuf2ReNH7UKzPkZYNMdqFkh",
  "key32": "NL7UVrAge68VHRXXxMUMx7AWjQThLhF5evgqV23BC5Eo9trYxh4AWc6EijjAmxGKeRKWCjSK9cxPL1WLxvyApd7",
  "key33": "52Am88336zjQQjVaHP8KQcXXxL2sqUcU2QAv4Em9i2WYSGKXz2sgTBCj8ZhoSfTsqJfiXKLxytdmZk8aq586fFV3",
  "key34": "4xK277tYddrgVDAGAsg4dzTViXiTUfGsw9HeZBcnJtH3xSiAPmFvMxf5ubWbq5Z6XtEapAJuqX5Sj4B48F1yh2og",
  "key35": "5DqLWXUTNJ56MtNyjS56kN7AgygRN42w97jkeehSDhUVa3AfyChniX8ttdYL9vgTY1V3VSLogLRKwKfMHjVmLRW4",
  "key36": "5pEWNmshfn4a6m2ZjNe6qdcBaSpbznfh66G3zNHTrMZn8KnXsjQQ2TcRvTg5F98End57xFMi81cktpMQobs6WcbR",
  "key37": "46heDku4GrpTc6CAyaPkov8YVGaNS6Gw45Pik4m3y8JE5epnvXqGyjPAf3emY9TBAPbN6xGpYu5DZFaavCWt6FMV",
  "key38": "649uo3BSZNi4RwYm8AUcMA7hVgKF5XS3oERB8eCpWhzjfitoULKyfFBsrftUazEBCEy7183cqvmkPzbwaWvSyY71",
  "key39": "2Wt6JBdNX4Jh1JSEYJcMhuWfFBV99nruUCtii6zPFqRu3YtQrzBpeqqTnURaDKcprukC8wM6MVD5hAZZMtpBqxcV",
  "key40": "xkVVXZQQWqYDbnjdU6f7hbbuc7tPTZfuFh5c1r7xBqbdyrXdDBcoWEqaPBkaJA1RYH96of2NF87zrXGnJE9ZW2b"
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
