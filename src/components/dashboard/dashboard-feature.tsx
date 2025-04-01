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
    "ZbfXnR2d1PdJJnNrFhNHDNZifeWH7NVeHUUPMpPXJJwzjD2gQ2vPvoSWmj6mqufatKrFx7Jh1yDQU5a62A2qX1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9JPCpgW7anT2a7HJqKuGx2Uj1iwBjGZksnMAxFBCyc8W2zAENizdHxCKWXkdXGSZkrZvuPjngUrubc8Lw37NqH",
  "key1": "4bCWJVAPBxDTu1wJGamggXGCKcQXVsLxQHAykH3WGxP3GAZSrQa67WYjiRx6UNDC1CWLbSShAAP4UYqZ4ov4MMap",
  "key2": "65yDQ95vDMDDRAQTffHr7wLnEz1FdfEdyku9XujTV1kxdRPFemLZNuHbfRXfv6RXX8CM7Y1vMaSJdg9BB6sd2nbc",
  "key3": "4MGMzdLqAbRNYhjArDNG711uM4KWhyorx7pS5xQ77ctqP4vD6QRiFbh2kBMKQve3gjDDKHbph9MdEWFtHfCzi1Y",
  "key4": "3HLC5RhT1hG1i2diYQ9NcQ3T153qfDJzZaHGMvbjPRZfuYQBXrd8bXhsX9SCecymrCqt3JzRqZQzRSSAdswLmA6t",
  "key5": "2xPJRAipGrAi9hgNHhiED6XqCALAw3yqt7JdU2TcfCCMfMicAkAAhVR6gc5dGvFtdZ6KSHjzGmwd8WBZ3tnwpBYi",
  "key6": "4GrrerbCwZG8bWu5jnQedpfeWMG32iqjQfnxfcXWSV8PDoTYJgxGyu3AnG5d5K7iThGP2FkSTiNq89N6yzwkZKNE",
  "key7": "66xW6NjUmXW6CtLWjTzAJzMZnYPw7hxZtGqMnUPm5bL2uG6A9GNwexTYdZ765EoWpP2mRqHjJNUwJNMP4xaBgoUX",
  "key8": "3GGVxM2T7PW3Km6YA62edrymW6H6npTmV2VP8x2kyf3Ao4ajXPPhi7MBCbvxh1ikf5kgxds6BjbmawKi62B9cHGV",
  "key9": "HCSu3cNJJpGpxDYBRJX2kSAXvC57n5VndBDFVYxQE4Q7BoCAJN6vWszWqD7eK16PJFehZFzTRFocmh7j4pyzpAA",
  "key10": "4LF9SE2oJihnsGp66mkXfEMrZMKgx9htnbZeMWjP1mE25JXqkKPVyFLUVJx3k8aBDPjbW22fUDyGkeY2WiuWewUW",
  "key11": "3cBijXyP7G7zrAq72w9YUBmVA11gFwsxr3z6W1FWohrwa9ScjHaHbXShnttUZAA9tmKCKFLrPVo5iEeNgbAMSG4y",
  "key12": "2ZvKqWHWDZx15mMkrFJAwU2uEqggf9Zwhreb8Q3ymuyFgDrjEqHEWLwerJXcAcxEjWozVkSWXZGc96MfwDq7AKZS",
  "key13": "3XGuASRqZmv2AvgyyJYzb4uUYQidA78bD1xJ9jsPmxYr89JbNdKRDbv1ZEJdejMuMts2RFMtQC7b9b3du7fwQuUm",
  "key14": "cU4fNrqTJzW1uMdLqpuJrtBpLoNXKdT37pD6xw9N5W65vNSTpdFciAwY1oWE85BvCuBxvEVoWv8143z7qcFEvqd",
  "key15": "5gtdQFUNZxo9dYh2G33XYmrRMUihv83EBM2d7geUYhV9fXzHhaecJyqWrt5sHvELf6tg9CbSPRbPU8h5WATBWjmP",
  "key16": "5MUAVxz6Dp8rz4BJRr2YKPzuURqfx3XNZfhEXrQSRjo9Wwyv5vqYre5su9B8BxkaQFWMsiAcYr4i4xXeYmh3LTK2",
  "key17": "3vECXfzYi1hzohwCkjdA7SuZTg8C2C6GyTcQo49RDsNXn4SCas7F9YJiE1MibnZiqqoTzwXpVaSUiSHtKhU9TjEo",
  "key18": "3RPi9qwvCoYFisgEYBt8ptpmfHM7DhdEmbnsQV8u9UtcZeEza2reTNa6NgJAyAEjVEHU9VsXDB3jiocGNPQPgKVd",
  "key19": "3uaRkgN9giseSX5GwAX9hv6oBH4AYy4SQFgo2ArFsoj4yfjXrboPjLaZCaFvYBEvjsFa3kUUWGvezbN3beynFzRt",
  "key20": "kXaraL3F5N6inCSoBcJmyVj2ueqazUdMcKSGgWcTH71EPwnSbjEynV2SiiV8F3WCwN2w7tM3L7sPEUq97aYijvW",
  "key21": "2QRTdqKSUdS5fsFzBScSkDQNBeexRQG9sEo6tainuGKASknBRvCC66nS1EJ7aKH5zDHUCVFWouq2vWRqGENAZo9v",
  "key22": "3DMhE1nrYDVpKcimp1ApjBgunUsHJaEiyxbaRCFGdkBzd2aL2W3UsV3ZLe7c84i3o3meTSwXK1vvBTA6Pdb6zoBZ",
  "key23": "2gtuGmJXvMTVmbavpcDJ76hMXQvRsmtvswXBxih4FfZbXKsuMDvRkzL9srAvaRPmDvUXqiQJVobuWHCQdENwL9ER",
  "key24": "4x2XzdQ4thE7YsgyWwaBWqbFp85xgHdeTJDteE1CfK6BcNT3GV9r1PU8gUk57MXZrCZRBhvzffUTQcJDWs5nAcci",
  "key25": "5vAVKwmJfFVXEV2cxjCtptYvtgHnGLpak2PyAwYUJA5J8RRu3sHE3XcCkHPmpgQX7geynJEgrF1ctffnTEHP8aWb",
  "key26": "5jZXSLuFG7ppLEvS2koBokvoS5Ycvvvg5aPvjgaZ9v9KTQYxskDqiGpXVKMnw4q4EnPq7aUU59T76kQFnwjEyqpN",
  "key27": "2JF48t1DURuojv4uxWV666R8KbewRQy7sXUu3idVmU2TXBwKwJs9XRoFSLYupAh5xY8bv6q9YtiDqpWSMzE1G9R",
  "key28": "4X8Z8yrpFDDEbvtEmPUEJj6rUoV7rCUUdWfVur1BsPqfCzUqTkVvCFT7k5j1gU9E3PuvVzgysyBQWB7zrtz5XRgF",
  "key29": "yFiirZH4oXtNdXnKbiAQ1WZ7NVur6EK68JpJRJ4XTdTgr5JXvE39qGyYswQsThtcwRjrYvvZ3Y28kx5v4hZqEvX",
  "key30": "4JcM8q52pnPsiYrN58Gu9gbGzN1xw4Smrp3YWuQz1hWYGNWGiAL4eLXNYEPkL1gdQWVrtt18i77kFuVKCt61fMJ5",
  "key31": "5nmDP7eegVpP3PWka8JNRHj9seYk14HH42arSDLsVjxaAjBGgqvXZukA28YjmT4mded3ztHvrxmAyXwJbRgGS8cN",
  "key32": "5vUvimQK1fDnYaCRnmzk4VbcXBRZpgXjcFNHrQWKLGHUJCQkabh7Js4y83W9LmXs9GWE5ApUHNnhXNwBQEndxHPv",
  "key33": "2VnxjqNcD8bf2umYBdnpSsnqRWWdS3qNRuzVvUWf7hVtnRszGFFG4h1Ci7qcRs5hRf6SGyN6qGEHQCGFsVJb6eoB",
  "key34": "5TUxTgPo2Dnc768MD1ePjTiEZCGYZknVBgfLHsyHAmniZUfA8Q3n9copgQiE4RCX7RuBwMBVR8ViYnBZcQ69NJv",
  "key35": "5r4gEHixyrAYQphyDMfEPPSSJ4Deo5JVq6i5ZiGAEjAZyDrzLYrrfo2wVL6WQHRAwKdqmmCtyEsna3HpdKVEFyHk",
  "key36": "4jnHBUATV4GdFy68dr2dvsKYBESw6WrE1N4eCqwXh9SqCCCVZyWkTAeUwpRhhLGPWDXAAj4Q1EyQUXgDfWjCa3XZ",
  "key37": "2dZ66L58sWVGQtP59ZMeeCp75YoE5vKRH7VyNYcKz1wJ2DHiQF91unS4MgECaEtG3nx5SaL9HrqjobCkcfw4Rbyh",
  "key38": "UE4BuR36dkVMypZWYGZbfWr4dVxwhKrNDmxg6dfkktCygXNj8jC8WeqrxBB2j8mr9G6a33LgdehuR9GHmhHqPSY",
  "key39": "33oXNEvfyrKyA4RT5xfbgtisLciB7GBUYuLGYxRTu67EkTWSojSuRavXuwNiB5z4S3ivYwX9TryCA7aGqqZDCqZB",
  "key40": "4V4A6zvYV9UUed8i2iEnWX8dYmYEwqr9VKhWyzXcmTy2NPFr3xHRWipMBVgvzXzRBBSz4zPHJgE5hB6GfsdTBeSc",
  "key41": "3H35roeLvfyNPLjgARWYhCmqEgB12Wet92cVysj3jenNthC6yhSgA3Sfb5FG1J6mFDJ7cRF6MxPtBNdMPvQDULkW",
  "key42": "4wDmut7V6J6mAwMqzDMdfPDeY9uA6tpA4UJQ5U9VECibfyNYkwtfHcsdD6ZrB9rDthSsKCMX2nQHomAm2L1QnAw6",
  "key43": "eZUEFA286ER4qM5pGwHZbX79hRjbTiVfmLcKQ7NMPU8gXhxwexrVgiCCjCkudaDRrcoNc6gt2udPJAGuWqi9gbB",
  "key44": "2fsFA9K4QKZPzpnX8ZxUsAkm7wGru9owBnhfQgzkFLzGMqCPB6raRzdiecaxNYc9ZgPXEdyo4khxm7W2iyAbqdtm",
  "key45": "VXED9LM5bmLDT1TwHgKhY9fJb7cVqhGju9KXQjAZouUu8RHLj8uXi68RqpYq18R5teaFSKxP31wXSMXWCU5prZC",
  "key46": "5CQHn4ibo2deLH1zr6XYxjUh7gfuv6wxAk1g4w39krQFYJ43VV6FeZEfm2WF1gfKneHQZUHWU2LEDZVCCrPqjgZY",
  "key47": "2c4yF5XSTzv4kftP3h2Jt69QFnaF6twASpQkszAoRKbTSQQMDSbi3U2qNitDDL1XF9RzWgFrqa2zKJnggQAYLLfp",
  "key48": "5WEr5Bk3bPmBf8bp73uPk4naP3RGRLX9vvHSxBfVR4KDaf5A5oZVUJ8yWf5YHhkKmHmpXZ5YokTCnyccM35c6sdz"
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
