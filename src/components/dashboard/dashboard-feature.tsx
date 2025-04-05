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
    "zuy8ATopZeZ2GVEZLUM4AKBFeW7QW2f8a6cG3L5t2GixuenB2CAf7cyqGMFmaFusZXUSYYb1owjuxkkU6s3p6Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394r6GnKVZpthm9TpwzMfJbU9Jg8guLi3VrBhKm8GiSJgo964T8ZQ1zCucQidmKUdjEPGA7cKYnzE9GWwX52Vwbk",
  "key1": "3fD5fdEJeUN7FhdjYsiqzB3sheJkmvmdjXF75WtB1B41ziS6Wzdh3Ejrwquf8LX6ptyHqt7qNdD9X6N66oEpZcZe",
  "key2": "2izpxCtNPWGT1iD3uJZrvuTLQPbrBVWtRvnJt5WXgQNDsSpWnFCNybpqj3FiY9X8KTmkqRbQ5DGGWBrPH4K5xiPU",
  "key3": "3vZa72pqpvgD64iiQyEQiaGkotoyu19ML23YVaGoy5jDPS7mxtuqL25M8Y2mLLsAk4mDvTc8tVteuJyKBoXRJWBo",
  "key4": "eR5pdCCsPrpZEo7tmpBZkuWchTiZxxYh4nAatmG2m5KAdDTSLLkNiQsYSdGRGQgZ9udvcZVQGLuTbcQnRU2PzAf",
  "key5": "4KzVB5S9UxeucWFWdJDAvhrS4MxqYcwJjQewSbGTHARy6XJGacVFYC1gGy1ddGWDKJZvsTwiqFhKPNx5GzPuy6WY",
  "key6": "uTVAyTRjzLaCFk6WLUGTVZHFdYdmFCJbXzXNRMknYZKHnGeP7eWv4pv43CEFLcXZQ2eKv6GP5hngd2gKLTFdE2P",
  "key7": "2uWGko5zDaqTSYvvBK9TPjhyHZ4sAk2mQfwo5F52gDdBaZK454ZN3qdNXHLUbmYwcZg6o9JNrZynazaMavCdksrq",
  "key8": "2VCbQYcoAHLA6bBd989T7okPGzjKYgjhuxwJR2PAXVTAyYPJxPE8WrvKYe6FUehnMq8VNjPzHtRQxsLHFdneoq7",
  "key9": "5RsB7jPknXPHbk9BScK9QJiVvNgBpNXaJsVg9sJc6fzGHEFufa1RTkJ4o6rXiAo6r5TRT6YfWnLVTXR13fdQXAfR",
  "key10": "65YxtW1nZu5M4xRrbhqvEv9mMC7Y4BhmkFNdjNrnmSUUUeuJWUhZ2ZwjSCHWWYZWtrLeXpGXHSCGAUsZT2pBzf55",
  "key11": "3DMMJuzynW4BNhtuKnj5qErZqHaUZT9JS3iTWEJaxvLkgWHahJiFQL28EjvaVqhiLugr6ATNXR46CbQjbPUQAKHR",
  "key12": "2qkQvsLg4AK8Q4TgspW8SK8BSrfYQEwAqkK4Mw2rNcPMfhZMm8dz5XcW74jy9gVA7ZbWiudiYXgQXS6LkzbkFCU2",
  "key13": "2AEq6viJWaqVnz7DoGHWkQuTMfvSnkD1ftBA85oZ87EMGKkEmimjszPWW7H9KkzZ4rkcj2AKbPv78Tv9vXztKRiC",
  "key14": "5F6gJAzy7LKr1C91q3umie1EHevCgXxGuZ1vibLJEcdvzqYpXr849k67szZ8NLkNL4wKLLSgU9Vf9onGBzgjwLqM",
  "key15": "4QRk6ALsz8sKRcnuJJN1TTtEb7gY8kTBP2MXXrajiL3u51HCeMXLnDLcXm5dW7MiWnYTcA796UgQNry7HCc79asR",
  "key16": "5iA1jf53aB7XSVwLNQtyWmojsCVktoBpvb1juEt6RtSzftZHbHK7JHswCJiywH9Kj5bqWwKYPC6Mx8F5zgSnBtyw",
  "key17": "EjtHaZ83y2QtsoRmjkt83HsmY7CBjiuAoNGFM5ZmkQowigAhMqsj6GQ7mxV91CyJpdm6EFKAdAs3N9hc1KqKHa2",
  "key18": "3w5RgJiTmpSXgngfN7wHbKYKcQH5mUi2S3iryTy3iBa5wM6VssWHcoFQ7Tth7Zx29rCDR174VQ8rJyUBdpAAcM1Z",
  "key19": "3L6XztnV9eUcjJanNBaYsvHy2jHih2dqSaivRJVqnP2CbAMExkELo8SKx1ioGZuhH6g4B56ACqn5ZsmjFZT3mofd",
  "key20": "m9K1UyCGMCWfxsUQnV5BUHq1xsqMrNv7pqtp4rExfPffEnXcoWgQKgAkBeF8c79mworNpzrq18By3QkcQ35Znip",
  "key21": "CJd4uosGqGRmYKMV76odvTajm3TZEKUQeKJ64t8cqhYYskzp8uMB7yMnnwsSJZn3TzPaKYrrX4XqSt1xMzwvjyb",
  "key22": "2Awu9n3iPUph8DtxVKinGKXzYmsqTYdLmrECVsohw5bYfZSPkW3TXCDkEaSz24VQEx77QBXtzv7ajtqbac9u6XWv",
  "key23": "4g8CxZWPiZDRvSmzDJvCSJpXQSRRw5EC44WcBCnHX9PdoVjmNSTzXspJyix7NVJXhHaQd9LURXsN44XJNZMCDoYL",
  "key24": "5QmQfBqtbSwX2ArW5k23vipcuRhxq58zXUi9FF3dYXWjYmJfWz5bM2qqDzXqf53CjfbZoZgNprKDRzr6eweochFF",
  "key25": "KNaNTf4dkyFGxgzfJSZmCJvdYVrThPQ4FgYJi8JREra5AzMKDW1ho6yXB4q9kaR8qMUBKSPCmqocvSZpELzASpd",
  "key26": "5Rm85cvkzrKt7GKXd9jAFF7Gpud6QG7Hm7rBQzrJ9N83LnXfCg7QkPfBxcjseVErWbbkv4xePAd9rkkNfr8XmTCw",
  "key27": "5C5CsoAyPfnqiHwuAqe4zMWaCmXFdSnmDRfR6CBzgqNGHqxUF5UwfzCNZ9pkcQZXvuTEXNF1dRcEbqdZ1mTs7dXa",
  "key28": "3q79io1TNF9BxR8BPfC8VkocExGpD92u8zpVbMnqkzjueFezMW7ZyWToktGnVPuKfoVjne56DsuL8dZ6pUa8R62k",
  "key29": "4jPamUjErtjQfD8jWmJj7ZMaK8nG3h2Y5KeEdyZADfa458ChGsc3Ye9n72aoVMkJc5daaL7PJPKWjhh7p4157qHH",
  "key30": "3tC4KUmByZihH6yykgb6sHH5Kz3wCfntoy4gfyD8jrJ2MJtYmiNvr5f1y9UTvEUYaAaxGTVnFfVmNwGGgcDTCjot",
  "key31": "4x6bG1SG2o2ni3cjmM414PxHBpmStX3HM8Lc6jKLUP2aHWP57rYfxEW53mtG76J2WH4EDsc2TQfT3dTbf5ZEfxa2",
  "key32": "2iGSdGJyz9DRwmNFph4bjsFUYThHjkJ8eQ7GgVxDQjyT4N4Yc2rHozLeRzqho35i7yjv7f7XRFTSPuSLS3926MBN",
  "key33": "5w38Z6ryHFUzoX3qbJyvD3oaNnQy7ejc8myyR84dWn5R1W1jkXnKiLazUun8b6GjRXYmX42rdT5mH3AspT9vXJui",
  "key34": "3eeoNt6ciKSiMzsDRU3nim9x2nyZ47Q4VFGQSf8uQGYz8oModusfBk2aJBTmTwdjZBGqzS5Xo1WyQwDoVpgFgoPs",
  "key35": "5vUYUexLvWxBMiiqBiyZgxHYs9ShfoRbFadkfjbrgdHwrfUjUNWgk76becaRHTZEyAzFcf4MfL4xj6M4oJ5N6jUS",
  "key36": "66wnr22Zp7FFiZ3mwQvFTJk3eqXVs1YiTiv4sUrdtMHD9k4AMGZbGiubbNTeLSDezTB4nLp5rbwqL8NjYXNsde1B",
  "key37": "S6vMxmE3xqupKht55yK9wDEtnKipacMQqoR5EzPoPH9J9NgXrZy4cVWWf4k6zZzczXwy2SxbCSdZY7mVKn7Utah"
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
