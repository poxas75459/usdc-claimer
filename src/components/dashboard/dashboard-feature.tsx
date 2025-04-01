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
    "2v1PcYKxEDPhcqnGXAR1HT3TfuVotAvNY4WR1AANNZuaSn6xsEuMjncrKPG7nyNBrsRuvUaLLHU3y6wekysABY1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwZyNSfzGYHWbDiGTs7waTtj5edGDmSsySs21qAccDXzvXNWKhMiX4SwA7sL1YnXrjgT6FiQZTmT6j7RAtsN8ro",
  "key1": "oQJMgZEoY1RSCobQ52kcio9mfSV6YbmKHSeCFSMG9uSJZVU61mVcJ1aD8f46WMsqvBqvR6Bv82Tmt42iWj3bRyw",
  "key2": "4fvfrD8K9BMPJdoqJKUsxFvbFqZ43gUs336xfdicEn6eoYfa2XTbUoGSDXgpynxavDaBbKHyFwRdBTA9QF3h18hR",
  "key3": "5HP1qRzjsyaEaJQTyidNCtfhQNCNiwAPmphxDxhSTr1kNUaicoRTXvevons3d6pMHDK57MUxseumoVtBBwDdv3Ae",
  "key4": "1JhwaBjVx5myDDeLKiHfAe9dVnYRgVgTPhECLR6gDEWW7127PR3Bdrn3Tc4djZJ1w589JXk4Lmh1WABXurmWSzM",
  "key5": "2kHNkaCuc3wMQzCx9Rh8QxS4NnaMUWwwCmUuczaA7ad4bop24JCCGQWAvbetMHCf2gfCdQ94nKqKCPpbcLDCgigF",
  "key6": "2V5sEJdLy4RhNSSHappysURJ9HcFHg6eipzvhRjbzhWAFmuGYyprQHiPqkmUBhUDPjVqePHoWggwAsvXxBqnAKEs",
  "key7": "5aWuKZm1WrRsQxzxhuT5kAnqAcRC5qxAjKHyLHfdWhWsv6RmpDrALLidDb4QsSWgU4M2cJ1UhoGdfdmNwe2WKDiJ",
  "key8": "4ToE6gUCdHQMPdRnGWtudUr9aeqc1WJAXNktHkRiYDGfZdSdYWMqrQGTohs3jUsikq5RydTHznvdWQ8rzmFTvCCs",
  "key9": "4zwrutQkZL2oQFPJUtVvJ1iS7Sez2Uipa8M51un9nujULyXajN5rq7X9ndxYQYcs9JD99LKDgJFkLj8KK22PqjAG",
  "key10": "63kHgQJ7WSMWLcr1dUST6L7QLY4t4qG4KoHBZxVcvJs6u2BUgvFEudKJPyZqfznbRsGiaiJvutK9sFKwyruQZKdZ",
  "key11": "9ra73za95CFTubw5PKxVB64zVh2dYscxy6UXqUWHN3W765vLKBBg64ZJBfZckRZJZQzHKWV9t2Mp6pTKMD1wgJS",
  "key12": "5EfyGJmjbLEwL3sMLPjCDw64Xsvz3pcgDssj1GbwNk7mCvKmPp5UdKdD9XUGhNTNpTh5G42oWRWCv5hZ1M3RZi7t",
  "key13": "5f52jMxHQV1RT5wjtRDBisoFW5QcmBV8aByzuy3KiPcAEC8u3GAe5YB5s3hPR9zQnp9czKTvLy1iQVe7WQy3bUDg",
  "key14": "7q9pmj4hUB5c3d1qKqMVRqevAyQxVhRzLmYV3wvFtNvSkLdM2BVhroBPVbkN9Zrk5KJCnsrvYVhc1uCjErn5EKE",
  "key15": "2rTC2Z9y38jUpUWNBuDyrXbcpSmWUD3ASqTouBLeXu4QWbAS4z8BeJoBLFBzDu5FAPegB3RKeUF2E2ZoSv7iMNFp",
  "key16": "5jtu42bEnH3te5tMUdV2Aw8m6SywqvngiYJUttWwMJCirsrPadgHAzSrTbLjZyUKdkQsHNPtGjoVHewvL4ybUz8k",
  "key17": "4f1vnwUVGZtftXezoorn41h7G3VijDSCucQsUu1kkzeUacJy5PdKfw43zQp5qoVuuAsnDuC1JdvFixKwYrLQmNo7",
  "key18": "42GJLWuvVUWssHMhYozS6EfsLJnZLoZjW52tArcYMgkPXWpB9sPsmumB2P4wDgfL3FmyZoTdqgSNSReQZggJ4p66",
  "key19": "5ZDdw8yX81wtVPdAha2kQXETTjFEmGw3Qwif2pHsgoWpNGheXswKYFVHSyk5aDudDnc157UGeU4e8tKPFRcA13ue",
  "key20": "2HDRbKhNDSrAAKhiP2iFbEcMqBmb849BYS882sHKWQLbAt4NGqyYGduzoMQ3Sd1KizLDEUDHvs75Boy3uxnjUKc6",
  "key21": "5zYpFzwpCo7JsViqDxUoAttmGgSxT3Zzp3cC8cdJY1vW7bD79KevBWbtKfHbnfFrvCwgejTXkZsE1F9UT5P8uSAJ",
  "key22": "2p7AcKZN7XpB48CRQ7Nq27xMYXsXdtgiTSzkgM7qp2Xg2cdLNjwruxXdfwc9mY4TDD94NozNkwVrYBeGYPdAQ3hT",
  "key23": "5EkZLoGx4ia4AFZdWyVB9V8ecske1cd3ZA9a3TcaT6jwJFQnkHjKLkWC4jEVutcidXPxv3pgxxz8uHFpjESKLkXt",
  "key24": "5uvu5xaL8xRuzXN57W6e553TTvvcfQY8Ts524Log1xCq19BBXonWw8wP7ycHTNZqcGajv2u5Bucis9oz2YmH3d7",
  "key25": "37GhSwXf7v1q3qfFbNTvaDcCwjeQyajtM3zdevXryQGE6bHyeZwTRGQN1Po8c6ixC1aaqaXYFDvZRqGkjHKhQCkJ",
  "key26": "3bM9m6dz6TJLJPSF9JSDJSbVrdC9ACqH6r5SqTAS3DnK54NpqA36TPehiCod1rUrBdM567siHYDfjvWJUH7tBf3m",
  "key27": "5VNANFC7VV8jw9ZLv27Q7N9ukBnkxYgUTFA78He2uQ4RSa2puAWzxFKEZ6N5bVqaY3d2aRN3X4yznxm5fjGZzRVb",
  "key28": "4aoymoWK5dKATFkTVA4TXHWZrTnYQ3hASpzzfZNtceLqrCzepbm7NjeWDSrTHjeFTgszCzehQm8DsFS4HvAtA8J2",
  "key29": "4GB4LPWTq8gPHh4g7s8PBS7grg5qgJSmDjQpofXHQFfpn5D27WogwojPisR5R6zKX6gzQZS6pTF8GSJBWR6nLMUm",
  "key30": "33fK8MJESP6f5GKf6GcvFknqb8hS82Jvogx6yUPJjXAq4qRFWXKN2AFpXn9rNxNjW5L8KDFJE3vpJUb6Xz4vYeTA",
  "key31": "deAwUHzrHB5zGzX7JaczcrBiVxqaQFd5L2P5NEwgVgMian2mbgvrPre2cmBudV5F949ZqgXfGd6TsUxyXC2rbDV"
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
