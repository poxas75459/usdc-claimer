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
    "3y3dsL9DqivWYq1dcXQkjXx3tVWM3dA2g8sgpM3kYPnUM4xvWawnkKtT1enZRnhKRKKUn73NVFWBNkNosvUtUfXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sp72mWZNQM2b3FP3ckYtAF8gCXzPQZzd7C8i3ya1xCqHkJXQkK8oJdswLX1LyPF5MWTwiz7djHJLHwTGpHUzfDV",
  "key1": "4MGHR9iV2S2E6YTKt6tyFbMG4UDK5C4Ws5qjAiZp1n8SnhFNHkXFcCzWTb8mrnWPiUVTm2Ys6ynWKWcEW7SSSoZ8",
  "key2": "hXMdTsktjo3ugMeJSE7PAPFNidAHJST4BEfavZN1qGGd37LdaCoSGyxS1uWGyCsk6YPWQDYog7n8YquDNBkC7Lt",
  "key3": "LqybnRXNbYuUCvw7JczjCCf9uVH9FuX2HtFLXGVFJJm5v3nsirRNJ3nzqaJ66TTxcENgkC4oz9veaMryZ4EfbuH",
  "key4": "2otZQ4M9C8quaU1BmpSeUwJJbXLKxysHNdtGJZi5h5LXTGTL8FTsTNQ3xoruYqJQHTBKGm7fMNnVBgoGCkND2T1D",
  "key5": "2GN9JRWcRAqsqe5msJrrU7GEqx2ZzB9nStSJwXV26KMYP81C4QG6K9rm8drXCh9qwdX56DafqeeYN9HxzZzuing7",
  "key6": "2CkD7M5YYnLWNJLc6rns2bX1sdGr3Xhd6aBnU1n2rVhVQ4pBrEBmdaBQLLKYW48soKAqFajmq73sGa4fqLx2pM4y",
  "key7": "2ajg4jW1HT7eZDSJCNEhoPm9zs3poP7cmdUr5evt71rJMUzFZnpep6dp5uZ5VjsjTwAGGLWd1ZjarVh1b3F5U259",
  "key8": "3Wf2RWcrRGSPYebWUgEXnVdyGTmcuM6MfUqTbWVTcLAmQ9RfEfhq5MFfTxsgFWUtLmCBU92CAjBTgpoU4XT8KgqM",
  "key9": "2VZfLqgfpzMYVKXZsgBtLadLaysiaMK87c5ety48a4y5aURBZPmDL3GexpL7RLS1WJZGGqQCnUBfbsk2dA7s3v6R",
  "key10": "5mZibGrfm6cFZLGiyGh7DEsv52iT6Anhhcjcuq6AyhxNVWnWGkmSAzmHhGvK5diZejST8S4ZkjdjkVd3jT9HY9VM",
  "key11": "3mRfvtbp826d9yXbg1cWmVYCwjTmZWjWqqLdxHufvWFhjcmu6bYqz1SNmBLvu5snsuA2f3YCS82tuMbo2YavZzMs",
  "key12": "4YVuCZ69NxzaWTtH3TGSQZ9pRPfjciVwZ3vRAr63shBcywXQnNWjzaAcuxozHWVuz8LL2E1RfteuphNxHsboYKZe",
  "key13": "5xkJCSxQ1iFZU3S4GSftmyvfUd3nDBghhiwz63Tyiu1b697iU5WHcGxWFNLn5p3v4sg6Zf9x3HJMgppKUU9Mjr8n",
  "key14": "21wT99PLeMC37aRWUWCUFEU9Bbta4uLxsAHB3kFHHA19nH21zSE4QBfy2HPnfXwD8hKx8rVWbBcaKhkZZUcEKLpq",
  "key15": "5uDhkKmNrnM7E2c7ax1MNCT4BcfEokctyGRG8rrRep1vJdgZA2cTUc9jJ6QjCUcNT42CsopvyeSx1j1T346gjzxj",
  "key16": "3zFCfwmgWzAWpu3JzN7ATzn6FF4c8dRx8JnZuotkdLgTGD9dEQRarPDmMxaQ3Zy4Twiy8i2HHPM71GRTnRh1DgyQ",
  "key17": "5k7BXHKJAnQ1rAR127hJqxSHaYP62kQsx8mVfiTvEzfVRuAqdXqiLD1d895eP8DbyPVxzSEsvqhD9C7fToHSL3jd",
  "key18": "3gPzRMhZtMEJQmCRzfzz3bVW8D4yimLckxB6XgRnXSikDZKJyae4v6bccU4iYEXZmwxnrUFUJSGJiezU41anodLk",
  "key19": "kMQD63obtRdWz9V5CwuTGEtEpZkdCbXwXXAJwGaaGB2pXfFQzAKE6sURsV1u7zuvcFfJqXpsA4Jgqr9Q98oMaFm",
  "key20": "4o23R1fWU9GERPcB6hH86u6nbndFWRBp3PCKFdV36iPFymFrYkowy6wdKWoRPmDGY37kM8CkVpmsrHpEQPMvFqBi",
  "key21": "21daPM4GipjPQF9R5q4WZgLtjhAF3PU7WG8ntPsYDW17BkRvh4L4LBEWXRmkyX5tJE69TR88TeNkMdLwHiyeL3bj",
  "key22": "4uJfzBW8FEVnvHxEM8t7ixRauJYvEqcbDo6Cz8YDzz5gWaVhGnWQkrujTtSzNEZ2PnzkfA2YraFEPMTTDJWkucvd",
  "key23": "443frTnzNioHBJrmaPka7SgZkAbVUJqJAc5N27x1mYBQmq1BP4Mwfe1wAaYhJK6zNr4gM58DbwnVPf6ZgHiuHYiA",
  "key24": "3Q8Kr7RqZwyVnMT8E1tCpSmSHbUQe3ajbmtsji6avCVG1s5yWWSY9jfvszmhJTeNeFmbjXdSVr6moQXdLEJdYhvF",
  "key25": "37EXQx3hKQLJwi8c3d596z3fvx7nCanooZ9j95KcuXFdSks4vWRTDn6aC5Z8t1biGdAUZqG15k6k52mScQYSDyXZ",
  "key26": "3KrVwp4HBvUCDzZftaTabvMhi8mdg5wPi16Puv4VXijXVVmauhGdchdFt8Xdij2fUJBmTPCzQpsK85vDnA4cbCrA",
  "key27": "5rYXGokHDYinAzWpAn4J2UvPz7YdPjm6hJ4StbGVy1cuWqJa62f9yKpPpJfUmtx3ooedR21vDc8ppAHVy6GJSzMw",
  "key28": "2yBPgX5SQ5B4J7VtaRV7tv36EjkqzkyJi7EAaFfxfTwmLyQnXbJVAbxLuRNoqeUtgHdZXhoA4VGssd1X8UPHnkQX",
  "key29": "4WSFp5e9x1yikwypjJrqteGB99pweHdWR1hybEYYo2PrEin4J2FBzderZQ6N8hp8v4DGoVCbXZaRk42z7S4WvG3Y",
  "key30": "4cWD7wuUL7379M2NvDi8ZTh9aVcYVAsqxeo7aMcSFMa1VJQ1VTHXLJJE1xCJChAfoNP1A1V93vgzkERukiGTKaPL",
  "key31": "63tLDuHAX7WjkPAobjJ2kopfuhcKDCmfXjcKuHariFAyTSBUvFoGcAnB8pDTkLjUGYGVES8gsJ1dsKnu6QAgTMoz",
  "key32": "2H5mfPTeNsSQKU1Sx6YAo3JhnCXT4n83DzttwnJGbBmjPcLPXdmbGe1Lwi7ZZnxsGrP1S63wqvDkjeiVGP6si73U",
  "key33": "4KJjBnW7WwaGGQwre2bGt9z83o7ynUg8eZ9ySh1a2mD5JX9dpYiMe2npq4GQgZ4GxU7WWZodCfUo4t2MBoH7Vx6v",
  "key34": "vmhperrVyCNaqG59xQJ3wR6j2dFNdh143R9BvgTTHBFsixMt9JdLAX7jVmsAQdWMKf9Xy3FBb5mkqcxeun8JWxb",
  "key35": "4pEbWhYgekGXuxzksKxDAXjT582DPqww2enagbG7xZS2QSkQjeR3JfxxZ8c8KzEjMpTPvL4s3W1SEboe2Zgz6RDW",
  "key36": "4GgWwEpuXRWJ37wLmmd2DRcC6fPVZor2LNPfqANqCq9kM7SiW8vy4pUoJ93ynLFYeLQ2dhmFi4mNtrWZ39QNzwdf",
  "key37": "kVfQLtcWCxw4RriDbJRfK34CkZjwDGn8HL8oiZuZcFErtvHmwKZZG9MhErnhvNjUj13W7Epmpad9csVjf1YeV5J",
  "key38": "4ja4Mdet2MNMxNryg36nk33KWz1SW3cNfpYuSALTYLgSW5m1Co8ZFJavypypDMQ8CXgqFuaiEQRc8SWanYniqLzX",
  "key39": "5ThZNwNJeAyQwVrjoa2H3VEW2L49Zn11mTRheuuV6FGXfYQrZ2KTBLn24A2NWZqUy5jzUaFeY4ZGTXhkEVVxuBbU",
  "key40": "mgYrcnGazwyVzr3NCaRqwYmMwYvFdPibFCg7t5jSoJ8n2HiZpNx9NEPFrToSZu8g13Mzv7ftGBrSmJAgDcTpEpG",
  "key41": "2UZ6CAvUXaCuqkjyZoKaMmFZQhN5jrPc4Rd5Yya8sSCD4wZfrZNS3NwwYgc6b5oZ984poJAPgUBZ5MoKmELV4YDs",
  "key42": "4TQoU9o1xYUtckrqS7rNbHpTxo74kFvR2vw8zu3q6BuRrtKYUEMUsbcLhaZSwcq5z1BZV5ncDsZKknDvJ6AvydJQ"
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
