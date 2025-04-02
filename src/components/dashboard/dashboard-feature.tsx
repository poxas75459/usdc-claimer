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
    "33Dyd99KRiZCdBSyYvwXpED6Kuiqfnmrvm1UB1PD21Bbi9yVT1gqFgfPewPvBjuS9XWHdW6NdY2Sh54G9F158hEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oXbmau5ct7iwx2SbVCqq1bXJgMBQSwG7uX5DD3tCFDxahxy8WacZFN3CjDDDQGyjAoRcR6uHaF7TwiuxjCjzJm",
  "key1": "41qc9evLr1Hg12h9ww93RxK6ap2aKM2ba8wr5Ed6LAAFtxdep56ara4MHCszsccJ7BjTHYa165WLEPYXe3S4sLmV",
  "key2": "5AYgYh2sxgjnwKSc6midv4zXeDM5aVTAi2goNxsDWRF7Kgndv27dTRm38exWoCiRFAiQmd1TqwusCqaV9RQzzQ6w",
  "key3": "5svQnQaFeiwuUUBwMhQawQmytTde78hcbapkVV1i6hmZEerEbK9t29q1Wc8mkHCSC3d8efALLjqGB4Z2NwaHwh4j",
  "key4": "3yozmJUZ3f4yrLWwayRMbSyeWUAhiGEBeSD5MgDV9UEnP84AVT8Q3bf6nVTtBoBDLf3jPRKJYaduJfgoujYUgBr9",
  "key5": "2EG5EckCq9vWBbAx3X55LCXoYu6rGwR5fL72tcihZi3k4XbPPVR5FqDtX2JjYxsVLbFYocpvu5q8zjJkFQ5RLDvZ",
  "key6": "kfdky5qBu1p4gnUWCz8wNA46Uh9kgoNssXxBAPQypwyofmkfbgPJi13NfZTpPZYq5vcsk4LFRtH1wwWSiz2RZXi",
  "key7": "yPt8jKgjibSEKHgmcfKXueREAGJffHoUammeMzqTytJWaAJH89R8TRMroJ5Aw46tJjxXZAfNPpnMBWMpPcYQwu1",
  "key8": "xiNYkFV7iSMpzdHXAA26XYPugfsP65i1KC8SvEeKeQm96ATGom79svF6V88PYvAtvvD7RU5hpHMuBmZqDPGU6KT",
  "key9": "5wzCXov9L21UnfVYC9KH5k8Lfxa9Q6Zcx36WEtPmU6wqYzgKcuHUduxPHsy8dXTgctJRcdRFKst97zj8XVSh1oLJ",
  "key10": "UVkXBRTMjmjDd4Jom1vFvMBsT9YZ8kXuQiPFVYy8WUZmagbFrhRj8S7CHo8oFUyZXMjBG7mPsVNc5espYo5Py9n",
  "key11": "2WvF31gHkST1w2aDniCgzGMY5mW3DzBERVpTbkPWkCaHUV1q8VE3MBxT4nPiEBj8LScBfLtxQ6VCMAUJ4oELkcc4",
  "key12": "5s3vyU1r183di6KVmjbwCfPdjtsvanYbP2cmzsZuoUARwC4myD13MGvB8pyD8YR9qmnGoSjSX5YkKamjLCEeQqAt",
  "key13": "2VmJBp8DodosNUYnpaT9jgZ7SZr1exXnmQcQ83ZWyGZsDAwgo8dYQUwkH6YGuFewkNJwwTwAasp9VktZCKogx3tv",
  "key14": "4vLMwkmzNb97CvAdHtd2VTKscgCPKJmufRAiKAp84T9V8eV5TWBQfRcpt6Z75qYqXdJSV9iLJ8SK9hcW17v3n9hD",
  "key15": "4PUiZsn3i5QRGA6jbX62Y8mneMjqKpPK73sBN5gRG7NsAEmycCBH1hStjPp4jcGwuWrgisxqKTx5DSGybr9KLbAq",
  "key16": "5pBPEGW6T4woZ5o282TknQUcK7Zt7wEX4fcF7CdsPxS77LcvqH9rYjSP8gnWpRgdBkHE2fabTpz7P9N6xUSnSWTq",
  "key17": "5XUdgJGzpxzeDDnHdV51D3ebpvUpasscpseyNZv9zMx7UaJ8pSVEcNc857rXG5mVfVzopTdkq9iVdipaibCCXX77",
  "key18": "3Umzhoc775iznWiLEUHAsH57kgax2bUzWfY68CvA3TqGvHaBWCTnohf6Xjc7jCtASPd9vzNn9yqpBfNDU6FaKmfQ",
  "key19": "2QEwrBxmk6MZEWGqDVPVQqshkVEStyYypC4Rdtx4PzaQb32wmKLr2w5RdaJaSGVnnXJrTeMa9rdWyLkhHS2K5LhQ",
  "key20": "4mYxkUXqx2QoGANTQnveW63mzqsJZBoZvr4nh9ra1PZ1YjgK1tfWXxx541edgUmQKeuwvWBDN7HsLT8sZ6u97z68",
  "key21": "4MBnxKcvaTJd2S7LgrMcg7f3Eu8vHszBjVdV4VmvVHwVkFmWSRYhEtibXHQGgmRyRedsRcn3qhLmSvBNYxKdoTXn",
  "key22": "4cCJTEVCWWmpuUXkhicBLwTXrW8bNdAcCSHNVW7x9PaBrcH9yrfBVpVpA7SkiMV3rVDCjyjYBT4YqLYQY8yzXFUd",
  "key23": "3EEm5QhsGZhNS1vxQX7rXA6GNeGCve6N99MrYDHd5XgTaVRP1kft7PGnZUYYR3mhWdWZnyXRc6Q6Rby85HBymFXP",
  "key24": "2KoBTYModjW88gnyme1HLXY1ne9h5AWe9bqtXA5LaJDKYodGBo3FfLqpFQWV4895NPFKTDSyfVbmTCz26gTBjMLa",
  "key25": "62n7FieKaucaUHYudh38qPKjDh1vLrqydhjAuGRnXTZCbomwCqYrcsYGLmuWFBKRzoyFyfHJG6pqU5ZPX9ZKUKSV",
  "key26": "5VivXcKJao5XAT7hak8KAgXvbWcvo3fkqqYB9qKxczuU6AeePao7cGoRQFJHvPsfF4odXdWP6sBtVwD61cCPAxX8",
  "key27": "2XAFsoSCMSucjdPTDjuw5Bh5rbJzdbMEPWoErATM6sUKmCEkzwom1TeHUqAS4i2QYTehH7NDH5ztoXkmdrtnSpjB",
  "key28": "hZTozscCzkGxENsKBKGVcHwU61yTeqR5V87a2MhzD9Rr1EPE8gvPNDEiscg8hpQWQ4m1AkcHemKvHcqP9wcriBM",
  "key29": "5hmkUkTwxEoTiuwtSj4min6pXnXkgTPVrpzJFt4v9s7p341CUBpiTdgpnNLBKazq8sBK64UznGUC8nzznAfWXbnJ",
  "key30": "2TrTcXnmKJLyW1vjPCNZHtnbsmucr2Km4oheYKWH5rC7bhwDfMDJtct85qqKhEDATp1TYo823tZMtGVs3Dqmdj3N",
  "key31": "kWCCMZdvn8w8cUE5D1HrwiFxYkWkKTNxrwY6aK7LWiCncyCSsJTH7EGtajFy8UsiuGtacD6Qinq2MNL92gr8JKQ",
  "key32": "3pnrmLWK4V4NzQvztLUQc1QRUPTZW88TFSKhp482sdUxcsYMDtXHK8sXzQSTredLnkJ1LUumEVycPw7YmQQ63pDE",
  "key33": "2Wbf6tGx1teTrw4cn3u2SJqxFoJcNwpwrhXmFkyuKvyJtHu32xNKDAWQAnHjhp6febL7kjtdyzTHGR4ikF8bkEur",
  "key34": "2A5ckmNHKrw1d1E9prYsTXXNphq2yviJ5LK34tvsuyKyhUzGsKDtG8CVgqN4tMH6CyMrxiqNK5eMHo3UyFPAXH9b",
  "key35": "5bXcbhCBFrCSNG5cga2FxTrypKPUPq8L6hdjthFGBG1HiGXnX4H95r9FZfKydwZbgkpgSLNeh3sqCBRXMCnwjVUX",
  "key36": "2Jrg3GxRTQnmCmWV7VZRwwh99DQCQYFyND81DAsk86i9NQtnCbXcYxj3EjwXi8MkScVWCXANs9XQSWUjKTe5ga96",
  "key37": "27cLtaPukft46QPaNqVG7QFANkWYeyvrw9U9Q9A4C6YUx3SoZY3F7GzsEc6oiDqYUuVzxejao29r5cAwBm7waE2J",
  "key38": "2ezzsPhLTYm1nadZ6wxofyjdZ6eVm2W8Jsxb3osZw9hUeMemwuk88UV5V5LoEBZ1jJzyfSJ8NZ1kkRK9tRmSaxBW"
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
