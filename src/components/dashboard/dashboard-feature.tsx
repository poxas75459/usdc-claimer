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
    "tSMukrsSryEXv85WFLQKBUBZkvwsipXDXBz3J5oZkNFRhhsLhLVFfFJsP6tUdmFia9BbUU6BoHepHeb91jyBvq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZiHtsqxMUEMQ6PMjPJZjJVoQ734W3PDKqaSeXP3fopUCVWzYyhnL6wqgDdJ5tgmYaAHTgg2nJvsqBBA3RXHPpLZ",
  "key1": "2PhpSJQT8r1oTycPE5JYrBuWD12FAp1jXvPa3LkAmhNUMZsgx5XZbx7mYjkGgAVAvDu5ZmxgjeA1RyDgcWsPeGV",
  "key2": "4CoxVnw7A9KdsMYGynHzdMchBqmSiALqGD3LG5asGb3USaV75v7pFTTu2QZXp5hgahmCWga878ddqm4vp3WdAJw7",
  "key3": "5SPJx7qQsSThNMp1Bc7igS83U956RLvcvaPBUgQSsij8PeKGgiwMR2pReajLbXjjVVe1wAE3uSS3eu7EGh3V9jf1",
  "key4": "5yv15d7UgWPxEk7ZfFjAmSRxRyW6H7dVBgL2kk7TC4N5My1b3Gkjze7kV6Xye5w3sxbNWqpzvEMnmCBvP9uoE1ac",
  "key5": "51xVg6fuaURBEdYczG45QzENtHkooqYe8ADhpFG14FU8F6kcPAVpb9NKBgSNAiEEUyqC5rtykDFTZLF8btNNDRw6",
  "key6": "65TsDVW95xseppWniPimsUVewh14oDRhWH7xRLN9Wi1oowckPLC6ptVEjksQoXXshbxxLmqAbFEM3XdjfR3JJZkU",
  "key7": "4obCrZCiTEYjnCGDUp54rGSLxrPLoHD5o7Y2BYj7M5PL1zp19uiEjHzXw76uNdgT2BrQMAtHq4Ht3jBL7K85T8jZ",
  "key8": "3DKCC3kUZuVy4CQv4Zr7QA8sV5VMqCk2pX6BQWM7VSx9gEiWufnfmRjFyVT2WZDzJNpYHfAowMXugWppfLiY4yJT",
  "key9": "2jL7aPJ8y7WbrEyLW8gFjsM3YMpiApmVSXgFXvp3BGTQk5DqcJwdXj7eYtj7jzejKH8UtJKyyYchyuhCbhhvdw4T",
  "key10": "Dza3qYg2tcnbu3RDUMFKaamjMCiKDb6MUGYEQeZ1JshXG9bFJB1KZDPcamcf5PNs2YKYVmV2jZah2cQrYJFBvYU",
  "key11": "3Rqh8uNLA9XEWafkHxA13wPsrmn8EedTCDUhsr8PC5jTJTWLk4yWihjE4LqSi2fhGceKtN2Q88zwMKXNCURTykXQ",
  "key12": "5H7wnR7XjgpEYoGxor6TPSdgF3KRMmW9faByiGEQ1z6EmgAHXFaXiRdGdjad2ojtnXkmM4ma7VK4wofEQ4XBqkUf",
  "key13": "35F1yppfbGBWkDYcMxXuchRznYah5iE4PSGTCiWWaE9SncXK7fFB7kGxpkHc6Vbt6XPWnpyQkxrAvu7KyrAFC2q8",
  "key14": "5FUqMeWhh1nseYcy5KxvSo8nf6buSFVhsysWuvoW51Z6y5q5dH9iBfQyZjh2wFtWXtLjVL3sQttkiDCuTkwzHqPH",
  "key15": "2XAPZWt9A3owTnX6vuvkVWqMju41t5r1rVY49X2MMsmxsBZzz7pZ9Dkbnx1fMNXtRLWtgY9tqadNyc3TvX6GAvGy",
  "key16": "5EhoPNTqr1LrdaJC3Cp4RjCaapRGLQZksLshw8DWABJwpWC6tmb9W5jDNVUq84shoKzAUrDvFiiqxbuPFNUMVqHf",
  "key17": "4Sgpvu2qJLa8ghoDiwoykN27T3sCLrzsrZtCcYN6nFQxrkQkp15WgYdybDXoGGDvVmh5GxTkNKfFL1PT3wmhK1vX",
  "key18": "4cFVE98keyEaCe94BmTmRiB9iMLx1VgzKJ4Js6XZSX3cEixgvhNs8YQjb81HaLKSLaauaU7RDku4oZZMeVmUAzSr",
  "key19": "k3Aq74kbBG7Xbd6D7u9MiAZ8UyQ8xrYYLtyNZtQk4tkFZHjFP2p4MUhgiKRhbbcJ55FhHbvzmtvJeXpnDnBscGX",
  "key20": "67FWLHm1bBU2qDf4PwtAfnUyVL118fqRdTHozTvLmYkVvUh8cxCtELnV2rt2u32ZAnPWUAtVcb7VpJjKoVT6gNcU",
  "key21": "oyuDcvUMsQp6s4P1SkK7u7iZJd3QrhijxmwkhQpn8KRfY5YknkAtoykhYbq5XV2fEFwQnXHAsr9R2MinP16U7Mi",
  "key22": "5hLUiwEESyYhpeFtNS5mdNuvqNnZkVMLcC1oCtgWHPcWfeDH5xjJeL8ZxCpGc62KfJbWEq4dKjCrWs4SNZQdsNRU",
  "key23": "3iEG9DGndwK1o2YVTQjEVX4HdBQBbuBqddVingYxpZM315NZH6SLDDNbjE1fThTrixnveMZpxkgwnhghxVowaE9R",
  "key24": "2crG4kNsvLEZEFucn4GhtA6E14ucS7pKBLK4VCGTJPZmANc5X2cZQMaKfVmHCSUhYS86mXyug3RiWCUujzLzf6of",
  "key25": "5jxurtQzvRMPM2YWg1yQ7hYdYnZpJpWgzXMKw6chn1SWTo7MAJ4h61wDCPRJmzUStzNdeCkYpoQGgVXDg751Q9Yn",
  "key26": "2mSR4EvEnX3SvAf1F4YYFvvrSaUz1Hf4ghYPwVJZZZ4SUHmPWKkri8pNG4gRWiV59XJ1puNEBU3jgdWSquLoQvbU",
  "key27": "sxtyRdkj49rXQUy9cxbf8tSnxngiixTRZjBaKuEatMLgsjt6RC4mxojDBxEq5trRk2nPqDVeXQriVXAGJzcoEXd",
  "key28": "3YhEzXWnxbD7rEVcCwYAU2b5WTZq2v2ZWNHRqojztPuQWXhvFAp79TWm9V6jey8i1r1njJZVmXGD47yrKjbnfk9e",
  "key29": "3RDhFDVgyhPdqjh5UjpGZjpBxt29Z36V6TsPAGVxSwvvsCDAgJ6BPJEHcmfnJWtnUn2ygxL6btNsGTkeBLg8rd9W",
  "key30": "2VTC4Yzt2a46TmRDnoZDAvQQWddq8pdnAaWfELxV1RgnghZtPDM1LEM8eYyTtT85JPgq47pkkxnrNdJVdnR2dEBS",
  "key31": "qzLJ8rz9UEqoDpgPCNLcwDPCuN8UzArkZJ4WJ1rdZ2HkZLcnhqtuSkDrL6DwtuJiSiXfuuSnmXqpcS3pskuJpRh",
  "key32": "4csBJdPr9BM1WSpmStoKuPAiHmKyEdHWTRn84RU1ZaSHshdeVvrW5hASRYEbnns8TGJjNAHCDiH8uEw478z2u9Tu",
  "key33": "3k2dKgRpfohYaRijfuKHZNcjTHVvLNtZHAsiTdXXZf8XAHJFmwFrSjyz8WpW8bWirxqzNnoZJqGZ61C2vuxZPhJ",
  "key34": "aRvJji66cEGjdxySAsT7GyCuRM69ZaZy94pejc4jh87jfc245DjXa2vhSBJnAzutDCZWEuR6etaFHkXRrx7DCHB",
  "key35": "4byUZWhTmNHhTJgdF6FPxs2RUCBqzJLg5qtZ6QuPQQFYV93XK7gZ1368J5vLx7x9KzcC8sVVoaWPZsmTBGDHB832",
  "key36": "5kAcbM6wxL4dJv5x4kCz3ttaA3nLyBziRbh2dqtPqDXFn7r5WqcuG1qkpQwnknBJHx3B3acw2FpfwsfmZsvww3UR",
  "key37": "61SJSvuJY3W9wEjpUMtETa5UHbJg3wsEiCUJBrkwGpipYSfSBZhpGCGXvTzrxTGJHnxATyHu5QMh8D8iTC4ZGUsm",
  "key38": "3veBHe1woEGgp32b7PWYdt5FxjitmHziH2z1fNVGNtwAfYxszugn78g7wEtZY7RRC5gdD3wQCzJ2TYpmNJjFqsqE",
  "key39": "3VawiVMLzJvbiT7cMMejJmoWfA8TU7kKHDQXTgY2WTCrdWE62aeB7kpQnMe7Z3cnZcr9pecoSKYqCT2QuYvWUkVF",
  "key40": "4CuLjqH39dw5LLyDEke19JzWmbF4nf1eFXRW4CkwDwbS2wiTuYJ5w8GjLjJCw466L8Aoqky1yrT5ZaG6AvdVBUhE",
  "key41": "24f4raBTr3BUbScgHgLfMDv4GHRrbRW5mqmshjhLQy452h5rnbCQGvBwB1CMa4DCCUqzu1bUeeqKDfkJqZA7HocZ",
  "key42": "57jCVAobCnzSaJJqME3CmjUTCGaX6VrATQrejzWjNJ5GJrxcP7ge9P9ufBDofbttBbiZFWukf1LBznNL9V4nSE3X",
  "key43": "3tdWiWCbDN7oTiYBFZh5cjCpHKdnkdHVuJBqzrSqqd27BruL2WLmUmKyNPgPeqSUkoMP12NtzN8zqmhooVZWyx5X",
  "key44": "BZhsFVJvUYRngLEUEi4B1EZVRoEq9SBY4ZXE2ExSkbzYJJnTtbavZPH9F3VHyhDugXDJ1tFfucoqMoQGxQBu7wq",
  "key45": "2iwtT9gGTjBTkD36hkbKzEtifmfFHpQ7vAE6n2YAXjHpshRDi7WVWmrTkJ4AkY1WSBX3DBPWUffw8mrqi6Ba1vQ6",
  "key46": "5ZWgmFyNDJbUmojfUN2z1S9ebs9gRy1KsaNWmgnPCGknoYpo7BEwVs1pDSko3RXpUJ5tPGdkAGrWpBYS9y1nXB4S",
  "key47": "2yMpoz9sYaBaPfNLQGdjx984qgVrFxs24hYCAxm4BeDd6X6ms2Z6WqK5qeuuoeecjP7VwDQQ4JYYi623DM1kHKjH",
  "key48": "5GGU8URrMm46RRWE8n3mwweFREEeU5pN6wpay96XV24fSsk1Z9wFVs6JuWRJYZ5k9nazvjgZwCBXDvftEigj5T7x",
  "key49": "5UaRDLKDRPAGQJuTUpyYvwp3VsaijcMc9d6JYjXQ4epAJBCkY63uTWZKcL5cJj7h91CGz3xsFszZJS3hzWX3jGrj"
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
