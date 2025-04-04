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
    "2zzhRs4G8LSyyT3H4tdWc2Lh57aTs7RGTGd8H52u1xD6Wo7GB2hezV2GBwqmG9xqcPbigBjpRkG8NYSasuVW49GB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9jsgzLhzeUgRjwDxcW8FvgvaYQtPQpuVXsbtqW2k5JFMmsKU11NXNXJqD4k9DUqyzzmj3SXrqKXpXybr4ua2x5",
  "key1": "5WdcdtgLFo1g1GCvcQHYXLbYLjnUVgXVQM7rraffAcPT9PnhZUR16gbk3CHnpGVbRgLWMzdaoPZdc8zPDTWUcivZ",
  "key2": "2Yi9zxaYNfpVqbjJBRi5GbQoWdoQyfkTTwcYGkTZtyJGyhzXbUsCBda3eFD2zyEynhSAwm9XjoMREx3GJSQTLPpF",
  "key3": "5zZG9p6Hgrwt3ywC69hVLicdT2TWd2wFcDHX49ie4WPj1yH8s5EaTsSHBnMXeGX1bhFVmuGtpS3bpxrj661rnZiQ",
  "key4": "nHo7sEpAX8vkfZKvfU5oEVgzgLkZjvKMp8ynBZyLcBWgggS7ohKiNa3Z3DLHpn3pZgCW5PMHPbgYmE1yGWxo4u6",
  "key5": "3tpeDU6GFNN8M1c8YRj89Qw6gm36AmoerDCSGgz4Z862jmtKPZBWHwZizT5b6hZ98WkkhgoSLBAhHoAfnYBvd373",
  "key6": "2MwPLNpnKQbmKTYHsEKTG5gGJYhnyhFpB5b3jRgMJkKfjPf4YyTJmMEA3iCheLK6FsGhU8HUD5xE69q9ixVm8WEi",
  "key7": "2MRdUdWnXCiCTeBHV6Vjhidgezqd2gszMy8V5YfCXKqMaiawvZk8mSATmdu81qiuG4f47vZJS7YRPnXGbqzpG75Q",
  "key8": "2cpSMPQxjwbPBa4EwhL5VnzCZZtyu5GzZvKimqNNnWTAz3PketK8YufsiggiQwEGB1ZWMjuCSZiThSrMqPeATYa4",
  "key9": "66yv68q6bX6tQJXSj9vPtpzveqfGT2VqWhp1aVAzmVkx9UenLomsLcfSsRwowSjMPDR1qR5zcNuwNFwhGkq6ADRq",
  "key10": "3iUXXwvPq8Q4iyoar5QAsXwh2HhqX4tKDdnr1w1ABRtk7EBn5H1X3mZUY7tzyFFBfQeZVR9qp4FQzrMhS93aZxG2",
  "key11": "4QsJVYzHZqzSkC8AmdmiPimBWJJVkZtASRN4YKL7LQqL9mAMdwJxrDZFSfRbZZdF1wqP28NDsJ2wVN4YtKfqLk3e",
  "key12": "CfduBxBAMtWYub3adDCmFBqvUgVhm3UnRZiuEJAEs2mb82NgPQfBqjL8uivJQMPpsyrAEQw5vvLDVqvmzj6BMtk",
  "key13": "4gXyKVYCse9ikVHnosejNvbRDYSu2pDGTSdsZxJYUC5sr93r1YPw2EZ2z1vEcym6ErdF1fVkW88VZ2UUySokKcwB",
  "key14": "RWhtkWRpyLBskFJh5woACnDnihi3p489vCW5cV4V7e8EjQdrGhaAx5nWKEoMpHkB4SeEoD21VJFH7xz9zvN7xLQ",
  "key15": "3T5L9nPWrYco9VyCaeZNMKtUPauA3tgiG8WuicBPoPmnRRE8KmukMBzSsvinGmQDvbo8KC3zfe2DD4dqPVKkJLLo",
  "key16": "5x6RhYvRN7bQojpx8rqzAyWquCcu9WCpUbhB11gQZh9bMjaPX1nRCjVFTForZnBTWixcor16Qgkj1ZoHJAHxQ5pR",
  "key17": "39ZtHaffaQoyWGFNrHewKJCPpYMzj9yMx9NpRbT2zBpbnNj1HE1SGc7BXWvVkTqfXsSaZqZQAg36o3hJZq8J44Ux",
  "key18": "4AokDEVjsGAC2RA8w1Bg8kxGB3872j2WWvW8MFywZeWJoyQ9beHhp5gJTQtehWrENPxi2bRhKb5g34jPGdgYBBhT",
  "key19": "343d7fHmbuHqSq7MgQPDVLPiusd8ac1y7DsZGeDSGMU3ZUaCVSVDUpLdZiEjw6trznLPrSgbFtycXsczp4xymWXw",
  "key20": "3oefzeitqJfqyrt6cWR8YcYnXcu4u1gn3mVxz3r8Ue9mfHXVLT43SJXrj6MRrX6eGhG77mFyscizPg4qi8WphpdT",
  "key21": "4J9A9DM8tadqKZHreNWQC1cmycs4mdgQUtM5sV2jKErrpAbob9wZ3HQ1vbWMudc5EcaW91e9M478338xyXsmn4im",
  "key22": "4DKAEZ6G76SC9H2YDKYRpMgoTZfgqQ3us82k5MBaNibBahZMfLzY694tUJBSMXrqmPQnxpd2svrp8r1Z8bapmYkU",
  "key23": "23pBw6TC8wVDg25QUX7RRC2dsH3TGk8JdkyM5AWQ6gwMJ7EfSfwqctZCzXWv1FReBEtKvxsfd2poUa3kbE49gom7",
  "key24": "2x7pBVmKnVx8dQ8Lc8MBbRAvCtdhwrdNamdJYJWCtAhWp6bFMYVx3K9oufCWyF8JW6EcELv65h9mK9uvDyiyTDUP",
  "key25": "34mjUaYm4Hq6PxHmXFvx6fMzp9yKSzUPz8j3bro1htAMatKsQnSegMQCmbPspWumZYVzGi6Es8fh1e6JDG2PYvgM",
  "key26": "2e1qfEE8Hog9c6TmAaTHjMEdyumZnHbHB4Ua7HWrFVMYHD4ZsXgYTNJnkE1DtrxwnijPfAy5V8UigZASSGqfvGwy",
  "key27": "8ggCpfpZH2UW7s5ArG21LLPWVJVs4VnVqNctwFzPZN9vPBUonTHAWqUfgJ2oF8xXDQ1mEwhXePM3dq3yuwnLHS7",
  "key28": "3sEkoEReihNzfREGhEr4ohaTNgFWLi7heDsroEZetGt7ByfcgiPJmyXQ6EdQ3822nYMvWrrivudNJxGGJKNc9rMY",
  "key29": "3uzQ79MvQU35Z5UjUV4UiSZwHFEtDjEZj5F4DiLzgGLGQXAzx4JwtjBAHbrorQ5j6Z98EgarKAmFpwb4MEzVeFgF",
  "key30": "3GsRaEMJeHRQL8X2ZiSBiPacveX5FtJgW1iuGBzxPUuv47Fdd4vtiM13bPcAmrdYmZDF6tAjSC3BeeDfc1ncQUTR",
  "key31": "2xcfA1WaFm2J8LpdcfQjphPGUgs2eXjXMFrThzCnxxrScQp5WdsVFf8bHWWTeDFBda6ycJ7wPutJjkrsdWQa6Lec",
  "key32": "64gbBqyoQQxHtfeXo8i9wXA3W8qe11mc9N9Rb8KkvgCZypMXq6FcVr5fjZD6bgNJ1mwiZbphcc3zwT8qECtqsd9R",
  "key33": "bSRFPYsi3SC2L9x6MZs849YcoesMhenaWAigRrjwx7HThhtEHep2qs2uQfKvXLSQcdNgedMQBPzApm59EB6ZQue",
  "key34": "3UWViFW92w8syrSqeQ2YZW93YJKH9RGgyiTf3S5TPLtSduT6YCsGsar2GUddmKtJmo1LwzvAtPKLrCm3SdfBL1Jx",
  "key35": "4C87pvUywgDdjEHDGspwm6Xaic8UhfKRVMKcsiuneX8gQdC7CHffNiCHPXYKTc9oHZgmgRFAnogTAbsMJYrFZHQw",
  "key36": "4BkxaTrkua5rP53am7UaxNxPpXLTAL1C1ApToh5xTCWg8eU9FYpmgDJnfPMrpYvQv6qCo9TmupqptUffcTi6cjhD",
  "key37": "5Et38VThGTRR5F5hNKWSUFcTB3fyY6TzfdjwZZuf1wbmhBckWjVZWRLQKJR5ahEDR1BfMSdgad8qfL4ZULXF4BMh"
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
