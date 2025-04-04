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
    "4WPC15LoNgx53miZNaa9WfbHptwvSJxZBYjL4ZVr9ZZgNUTAkvWXt5e9c9ztNNDaEWVSVVb6Ujjuf43w3TSKEXmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RP4nb56XVPN29VMNVyWtFBpUvnpacMpeR2aqcRmBRBrFwvZqN3XZD19wj3oTcPjvnW69Mb7HKNRcDqqnqrTitLo",
  "key1": "5wrVUocUn3B4cMywQE1raiuvrkm7552kDXFgA8RQeR6NGdwAL16fsWgLPGTSXWBUcsSRLKZncwTagrLpgZsSFjvs",
  "key2": "4vPzEY8xUjWJvsV8aNudqmByc7uQsGF8MSkxopcrFon8PPdvqH86CkhiQfsZQ5mDDucJQS7VBvYJAjbF57fi2YWN",
  "key3": "S4XB8iK6hZidMjgnUfdFf8nXiTZ4gSHLwJXvi3MaMumwzYMQsdGaG3qCBC2K95PNYtYMuv686n1pkv229PwcQmt",
  "key4": "HnLoeJPHcNXJWbDidQL6KmyLLUbEEsG1QsB2MjmssEjdAQGKJFatWkUSTCrSa4QpxYeaTyt3yYKkrK3WTjTtVHb",
  "key5": "Y72T1ikyQwsD1WhhTk3sxdb3PpGQfYkH4TYXDL8YJibrGnWa64HdtQ1Q74FoZjmDytZLEnFZQ5waybkmnQgQAo3",
  "key6": "2VNGqGGWRtBX6QdbK6uM9S5ccz286fGVcW7xkpALE3Sfmc48niX1JyjDhvf9FdNDrH3tQv3gevVzhiwaJW1VfQXc",
  "key7": "5kX5CspXoKrdSqJgkZUFimh2nGaMCYTotxEnujg5x6BRCkJAWdbrAjrFjaNqqLojdFjhQ3bKNdZVzw1RKZvbAFH6",
  "key8": "4Hfkdzu3VKaa6ftoUoUy9BmaiwGencbjm5wNadBpd4ZmeCkNUsrriXey27CtPymh9sVABAVubMNw8rdVmWBi7MTC",
  "key9": "237pr4du5dWh4Vt4foZ75mYwp9n3AwFvURtxddnktMiDR91BeULE6EmJ8yAMjrhtvL9ZPDMbRMeehxwptFDeN7GJ",
  "key10": "3KFDoczQpn4K2hcEcFSLNL5CKb7hKovXsenSHQ9F9qCZf1TVsh7STaKcFuFB6KqrHPQi69eJeXwN9SjYvr1gAVwE",
  "key11": "5AWxpmKrsyf8oBG5X7V31qRP4YDQkCGRKcRKNg6b8S1AGySYV32sHdzFH2UTYtsdz9KUNRWNFpipyrggUGhA7qLE",
  "key12": "4sBDpKcdji4iVNgRQ9TphCN7jPYPRMrgGUYcjAhVs9zXUeivsohYnAX2hcDwMxyKXAHkuE33jA82kabR9YGpbVzm",
  "key13": "3wnow4jRyigf5FRLuAMCe6FtBhYuKkqvN21tiStQY2d9dqkWbFXV7ecsHrT7tjgMJ2upoB7NVUNVQxhFbgQ4q2ic",
  "key14": "5CDv8y3MBV9TA67TfdHJJ3EYxX9ujmnvhQc3BbUUVe1GDQKy2yXhDVyaz3SrpjWg7YdBAq4ptvLRodRiny3BZix2",
  "key15": "3mDPiJJVFkoEBETWXhZcLYwYWSY1oBQ6ob1v9VCcQfsmsC6wYFYPfbViBnscNxNiLNaF88dKpFpQEV6FYeFUB5V3",
  "key16": "6711pgcmnKxSvGcxxc6t9f3MF1xg1HM2uVWryLyNgUT51wpUo835VGXmMSb9pgtZZDEB264X6kj1aXYAUWY5ZYmQ",
  "key17": "5mgdvpPn92FnF5PcXbcANcuqSsRmeUU6jgWQ7K2GG5SKTUjRZD4UY6gP6ieHbCfZth8dEvCMi1x8PSnDXmGiHK7U",
  "key18": "5YPSKiaBiWrQxdvuFw6HpQsYRtE66w5oV4LkvZ7Cn6GdDWbiuq5yj9Mx5okUaZsDVdUEj3eB1LRX5sCjzikPq9ki",
  "key19": "nNGV4BR1sZsLbpzFD4RGUyQwApxnUiEPhJvYxiqmZSeKifh4copnLhLHeKAa7TcDAL7T2aGNaET6h8UE2m7yykN",
  "key20": "45c4bRghnHLTjjBepodC4QArnGAFBM4xgkxJuXyq8uT1yNbd1fT9gkaPQjrdDUJUiApWUmdH1riKGDZYNxmiFGbF",
  "key21": "4LwdZVhKEuSVhU1upvkBE9Tp7asYXjr36y8gQuAscW3gpzbE1vuap1vxt4xWn6R1CF6TsnPWM9DQne4H2MhZamTP",
  "key22": "3ZeNjKo5nFU3SPMyAiEPukR5YXAuQtW2CwR3scFE53i8vPN3EPthS9mpUJMM5P4jMLgaXQtVg5UgLoLTuTkrADxT",
  "key23": "586GDa5VXGrs5ZpcwJj2hcJhhExD2gJqvMEG1YW3tQ6fEzXjUbR6HYQM7QBSnnSxpbxNfhWT1mzVg3yWG1GcsWve",
  "key24": "29fhD12fP2BLim4ZF14mWFdsP22hgr9FHdsNE4VT6sAB53pHBCLVcWc4oMFfZNLCWTMyw4whX33yuMB3XthD7jxh",
  "key25": "2rFRKwB8WcyChV818tD9bf9zJaBz2d5sLVZsTbSzarP4ETqdewzmoBDKZietPRwdkDQnoEpr2zM3HnBhW34ppNmN",
  "key26": "MS7v3S8FCxb28Cb43awNdwdWDmsgZP1iSRJfK1w1mZPTBYGY8tTz8VrBn25bjNPq1YRnki2RYkyuUyjfXQLUktR",
  "key27": "qXW42FDMnxnE6nBwF2H8A6Ctva5ehZiwW5qGcn4X5dB2LNsGJpo1NH32DRzcD6CUp1iiapQF4aS3iDoa6ddLCEL",
  "key28": "4xr92t9YfskSwAYC3ruoiHsiHJ5HEMgDonMRKyM8AVZvXwCQh5gV53n1Ds8dKe9npxzk9LscFWDS3dgSUnYQgTR2",
  "key29": "2QpSEMKfypG7wzGFEc72ue2KXQkmm1rmDKBTYtdpmyK6DxDepiAtJxpsXDo7TYsoQw4rRuHeoYzub8kdN1PhfUkg",
  "key30": "4oX8qTEGUNnJXuwCy9vYXgv9XaZqe674iP6bsq6d5guziKSzTXWEymExUhRc34AFUzDg1B9dRVtQjS81ZVxLKnxE",
  "key31": "5wS9QsRYmoXYSeS3Sb15kahnV6PsMNxpXc2iCTCuy5xU94FUbeH7NW9P4eMhdryufi98GSrJmqwZ5ywzYnTZf7q4",
  "key32": "pgvABsXYZmaUD4jWmWmrezrpQ6GuoGdtPgyUa3BbPBE6AhPNnYt3XzBJbAbt6KGLuKwP9bPVyug8RY3d2Ga7dCJ",
  "key33": "2HptLs2sjW8TwegLSUV59gg7Lck3Umf7NSRFb3V9Ys5XZgUBpypRQ7jf6RhDC3CYwG6fNvqgr2Bgj9HqhNGDiJSz",
  "key34": "28buAWFCMgd1hARMRughTvPntHFkJfD6jSAwij8ykRbmc8xHDBzxF6v5qXfBPBJf2NNmxkMX6tr5sd9UnbMr2gL3",
  "key35": "2GhkRcBBDgLoLS89koFQs6PNihoGqs4MrySqfzpjGvzc3rAtutq7XkK2TUATnGbjWwueBGYA1rhonJAQSwpR1fRT",
  "key36": "5fHJg8ipc88sN6E9zXJY4AUcxe4ULvcwqsMsnjoSA2xdv1mS8tiP4NZ72rE5BgFzxF8Z8aETL4dSbGDvH9WSZEXo",
  "key37": "zdWp9zLUfEb2WmpdLY3CvUforWKRP85rkXyToWvM8t7WCqap54ujndXTgcnU13MBhefV7qBHBqhJ7N2tMWBkLWz"
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
