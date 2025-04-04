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
    "5vZVFC5tNZxMknrU3NzCaT2YVmT36F1EZ7tXz5UALx7Soy5oUFoPsvMsr79CQtPmBqBhnahLMEtVGJQANJzNdBQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkUSpi68uLHwW48xkvRHTRYHTs6kNJk2y3xN8s6NPzJAGbhN6zjgUJmTxgPQgtvq6eJTCwp7z7f69fuTHAtxYh3",
  "key1": "58PUajYF7NtwtpYDbKWUKpagSPFNKJf2DvbA8SoWLSoQrzerSUC5FsEuMQodSPPZvxGtztM3rcB7jeMMS4fSs2EL",
  "key2": "Nht3RN7qtxm1HtLz1UrRg5Nq1NRCYEjeSbQReMRu5JKwL6T3xj4cEeiNLFDC2JixBJeeg8aNojmb4ZT44GrnqRE",
  "key3": "4L6mzCvJ3qxsQYwhQkVqQ2WhKc5RmjZxJkTyEoFfcV5ieYPp2XjMa7jxkXUx2texki2tLi1gDavM3Hxz7M26HDGC",
  "key4": "44HBZbdri72TWqDoVq57VSRNN31EbJBmAFmE18tp2tQeWw8FZQYnn4qHhP6JCE6xnD5PYG6M6Mbtth6YbGCC5kwJ",
  "key5": "5f4pJVWMSZGTg7CtJLvcmGFEasYwzS51GdRh1SSCmBfoJSjePhU89Pdb2WHJ1y9tWN33c6JdPVzTtELiSzdF2shw",
  "key6": "4m1sMSqXqDekYRkUZKojDFK9KmR3LLx9Z6f72dawVwM3dX7aXmyzmnKwLAhttMqdvGmfw53mrVo1vTYfPvL2tgzR",
  "key7": "5XBe5E5Z5po7Q659i4qFUBMcV9YUhdVBRnWJcoDN8qpZPf8EsZ7NorAu861QKkhfQNSUwH6wjRoj7ohPpQ99Y8rY",
  "key8": "22F9fJzjtrb6MJTGJsHnmxX6K3QoPuJtG9ZcMmsTUEaSWXBxhi6GXhAFYrTzgMFBpJCjnuvCddCXsVTpE5VuVBx8",
  "key9": "45aQPGNXiUD1ryBN8CY2tRuznmmFn34L8gmFrkpqWMhcq8vDNb7gTEVSR4C5NLcyDeiCz2jbsqzCm8pPyjzfdbWB",
  "key10": "3gPD1EVjWgDjH5a2D5hZYwyGGgUAt29SfjXPEfFqs2JMRt7MnkDYccCHb47AL6j2qMV2aMA2cxEZbuVAu8YfkVFA",
  "key11": "2aUiFveM6kQxdLzKmvH4PuW6g5cnjDx9gUVGxS2ojWGjwUDDDzUrxiJdy8g6FBKy3BmBpDMZnxfoBGb5bgSZ77HF",
  "key12": "3jBVNo4Hgkr7PFc9z26F4P58ebuLWfja6DcKCyv92xtAsy2hCuyxGjkQ3FnATerho8inww1hHp3ttCpKa7qQM1NL",
  "key13": "hNK9o6tRZuA11NimpqpHnoVCnwAb1iqurrGMnDQXQAsFofr9fkhGttHTvsEcXkQcX3HVeArK2UNJ9Yia4XX2rTZ",
  "key14": "22HG7wmaqf3X1zHqAjD382nZ3s2HrFzQAdrAcwnN83esneryiK9sY7ovcdNJchcqRzd3oWrjdsn49R9ZQL8dgBSj",
  "key15": "2GjwWboVwGHzVMyiHzhrAUEWvYw2BzWJVW27DBFW9ZHRWML5pKB7gYLFUwMF5hrF9FARK6wHAoBFTYCq35i5Fha3",
  "key16": "2xzCew5hZ6GB4BkxfmX8bQiNiQRNL34rAk8KRMJcoedc7VFcHLzbncAxGrmwFMJkArz938u523ivPGxtzi7twQGS",
  "key17": "4hJ75YDgvzgdrsAWD4ENENmr3UvrnEv1EcC1vkanCdoosm3ffcQTezxifijmYCbXV9vN216MokvsJxFPsTBAtmMN",
  "key18": "3kTbaLkj2o9AFGV8ztBXqebcBSuziQudytSyMqpFP7so7A5Jq6KA6naB4GWJH3dkXderHPksc7xXjZoQcNybmBDY",
  "key19": "4R2YNw1GZXsYW6JXpgZzELVmSM42W6wb5yEXCHp26mDovHjyS6PK4YfUpEjXN1VnJJJM5inBAedyY74jBsMudo84",
  "key20": "uqmGSeyroCdxLrYHzD5T78ucukMfHDTC8J7F8ENg6NDwHYraBzr9Tk9k1QYAfMnQLCNRDR8VhVW21MLRnVQu9EC",
  "key21": "3outMp9Ki3wzBs7yrufrYbYT7rNoZyCVBzwHQLQ1n7e4qa98SJ8NPw5cxscufVjcJJGKRzhS5QhSd4d1cFe8xQP2",
  "key22": "2DTfmFtJ8XbGgH29DFnxYA1j7aUiGRAvZyeZJ5mJLb6S9mUUNMMnfXAdZ86uGLZ6p2LgfSANqbDRwwcUv8GbEC2V",
  "key23": "2nystzNSkeU8D3KcJnfFHvM5pRMdjXVXr5EwxKXNUTMPN8bzuen86noNsThA4mA1kRxekpT8EJdVrDjk6MqzV2SK",
  "key24": "4JGUnDP5Y8dQW94wFbfNA5tpnQx73NhM7MDPAyPhKiricwmSThAfLNTUeayEjvg2b8s52uGmavrDB2ALDhTirBnA",
  "key25": "4NEfeYgn4NZ3td4iMbNbSVwTHsk6LTcTpb4CbhvV9ApxtoesjFSFUpEUWXaCjmPNdops2pBmtt4zLpX3g4kUySdr",
  "key26": "3T96ELRwj52Cw41v6H2mAsYA7DB8snoX7rjhhsGMK5GQGr4vGiztGM6FZJkdaJRTpXYdnkzmNr4RZBrAHutPyCf4",
  "key27": "51Qv4vCt1D6HZANLCxUzpyKFyvZWn4FBmMzcLpVVqdD2SnBpPR1jLUdYVWTx5FA6gpnGtXbGBvWeEXF78u7jPTjK",
  "key28": "5QUeYmPQYgZ3ne1HJhr6166cqt6tPiHuThWykSkMyS3jsAuH7mKm2csiYbkjGQdLdCQNbyZywcn4wQUNeHvJUoSi",
  "key29": "TjxugaQ6UdDt5Pr4nnsed1Zxoc3hcUSBRU7Q1fhjQtgWivitB3t2W9Bup7B4aBscvnAZ9LPVXFomUda86J2TjjR",
  "key30": "2pS5DXGn5jKnSKZQm8L3xvzoupVskJtUXRrczeVswiUUEr6EDWKMZzknAjkixbxLb5Kdv5A4vkwpiheK5hc514az",
  "key31": "5ymwZW6wnx738huJLV6y3osiCRJa94piLy67i42QggiQ9TPicTJLaZ3NyiwqTNUF6cFnBQgPqxQN9ABnLuHEoDTt",
  "key32": "4kjtEVKQZUTADvVJyF7ybuj2rtGiVbHn7eQrpShQxh9pnJengyBZ6BU3boWta7ppmxWsRijd3sKb2jhyocgJi1MG",
  "key33": "5FBUsSKLhuccacXUegYH2dte1iye4wA66eFE5yWfdMSgsVdFAKXPkMamTvFABbTBDFu7ex7k4CTftTA7BqzTntzt",
  "key34": "5F657uBL53mqJU72rEmGwE6JjDDSoJCUUqFqPRHDYkKuk6kRsyLzCxcw6fpXs6Cem7ZVuvrxihSPh5pjTpyympF",
  "key35": "4Rn98StAY2VkMy3PLkUJW7QC2ceTP39TPFQCiFKmYbZcFQuFT9vS9RWALGeTyJrFcZbydKVJJk21e4Z815vwbQAg",
  "key36": "3EoTMRovwf6zHp7f4BmJCEnkHPZHhRKDr7worP3VEC4fyfCa8asPB1w5saxRSetatpJ5QswfJmQhL7SxLf68vkUK",
  "key37": "bmzmxy6M5yf93jT1C6JmnRgfv6Z3EvEKanrVy6nYet68R1iJDLTXQQewEy9TXMaNMW9uB2j1fXBxBTp29Q1aM2C",
  "key38": "24UZJJpBLotiNy5DByRVMNykYcr87a6sTJfGiTsotQ4S3TEpxxUdALtcmDAHGbAUzjVNL3eztgpvmMPfkwti84kP",
  "key39": "2GjU2HVPi2a8Jb7uS7x5HzWiSdzcafu165Cxkq1jaju2S7LUb24MPYuSihhP1NnMrC4Skz6oYdDhBNKzcSALS97H",
  "key40": "229PXYgyRPJHUjELXRY6S51zFzbKPhnpbwwAsJLFvwv7JZ7nWhzB9djTygWrowVzrq9snfJMxVqrTADzx4QwCNdS",
  "key41": "Vas43ZYSnyvrdftRreHkrCzzTdPJ4afxGru4rAqPZWPBWfvMhknzrx5zLfSbr2WmZM1QaSBTJKXdDGUJpEV52KR",
  "key42": "4xRxNHpP3t7n59icftyvJrHdKLYyYUViVn1CBiugnG1sBUzjJSyTN8Rbf9WhYPD72bo8CVPXmbnSoVmLv8MwSefe",
  "key43": "674Y74vLmaT6RUfNanyiYQ5DdCqSi5zCfsEuYhEkbtru847KGnxqMmD66H8KiZnJC3EukiMyWcsDEz6HJvixP7Xs",
  "key44": "4ZAtA93rb5gRhFHFpy1VCU8irDBhE5dpTKtxqJsHUvDHqw1BcUExHQwSQBgU8FeJ8vLWgqc5fKcrVneGRvqVhaBz",
  "key45": "3psh9pcMjaBWoqNJnkiFW7d4ozhmpSHK37x1HsyGeywZSRtY6x2oiLacmdQdwmiDzN1N9TTFZL5zHpKREdcCym16",
  "key46": "oPLypA1DVSSDMghRRNKp5b1bhBENrT4KqhLEqspFWKb7vTfe3Hc5JUtnaupnfJcRmVoJMweRmFVK6ctmJn7Nw21",
  "key47": "25ReShH6R4vhBVKAR2DAK5RvJGCLDwd3vfJekpahy82RL4Bayy2hzZW5RnUcBf2o5V7e4mMstHyyDEA6aZ1nPF2N",
  "key48": "vUwNdDCP2XnDwGd37gCRGWTqu7vU61uri5dSt77LCkrE9CUuYNt4tjPzR7BRGribjUYxXUV2sTFfzHsSZ7gLQVt",
  "key49": "5sYj8kzVWigvdT6qNbPwDhF1KgPNs4MEjySHaeDzGeGz4p2mtZZW8dUBWGkNTKHVmSEMwnRb9uUWtMqX7cZpJVvH"
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
