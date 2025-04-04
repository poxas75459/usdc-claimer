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
    "q15XU5JsHghXw49L7gB7UpWwh363H7dSKZRtfAdQaffroWZiXhbqihwC4HRDD5HLxjqc2vKyLjrtK3Msc6QRXXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHadWLxzAxgZEKSmQ7qD2KRogmKCXZnqdeNPRF6pU5Z1fJzpUggPz1rkjYH6s9JCVJMFtCF1UXtSgCyco313fWP",
  "key1": "4wV8FfNy7yHky9pzar9gmZsowqgeQt8EKzneNeZjP783Pxv7LefmXP3g37nQVNf4cnWRa7MGuTtsbfraHrtGq7pv",
  "key2": "A6BZbt3pSaVmNW5SBo2cqcyLoutwU9jdcpCzdUc95ztHJYUF4Zq71VAVA29a9vYHH25a62pKTzuaoX5u48fQP7H",
  "key3": "5ZuDeRc1ExQAhpkc68Jetcg6YnC754egFVV1KPLsyPTDGzeqpEotEiJ9wDpXefRs8QtyayCDUhbY3C2za7N2Ajro",
  "key4": "PcTm6vwQuXiTZsYyfsBnfpUkFC4iaumHWzZC9nuuz1tw1oDR1m2qkkV2NP2CNuM6S3Lb1dDqhRaDALZgwtV1Czq",
  "key5": "4KBz2BSzDDcc7dHREMJdPipuWhEhvg7bCkwmk1A32f4YKdLAdGX5a2RKBasG6URgvctnWL1B6AmVWC9mGU7GfLoL",
  "key6": "2xU5a6fUJked9HT5XcNFFRRgotQhaCjK339n8Fg3ZBH9L5jR9EAQAGQuWQSW4E43Xd6RpWWscYcSkCc7JoVeN6Ew",
  "key7": "2PuXo7JbzUW13HCDJPxJ12H1VkuUkfpZGt9tsm7oSzMTLy6SvhoxSmRjpc7oGpF8CrjSFqSJapSf9vkXVQ9LnNX5",
  "key8": "4TtmntWUHxTKrA3khBPi78qagFZ7QCCppU7u6Y5VXYMPShAqypnkpaBW5CJhohSthf4oyUtYQTh9hRcJ8x2DS884",
  "key9": "5BCGttTsHNsWeG915FE7fJUxarfH6WSTrxwYUyRuPFABNPE7MA2tu7fijCiYgq83xcK7UDxmY8PWmkZSMMqTe6Z8",
  "key10": "41JEG1CGPGJRrN5gqDuZNZAMtBFYySpfe3XLvhYsAiqZbgB27r1bJBwiLffPRi3egtoc8b2ynsjGTm7CAPGJA96F",
  "key11": "3DxzmkrmprxJHAoVwsw6a5g4sPpnh6jTTzhoG8J9J1e1pbctJprd71RoBxtYBeGmqaEmzmJT3qfyQTRsQCUeF9au",
  "key12": "3rtW3U3h7yvFWK398BL7G5cPCHJffSzXyTTTCXVHQbVh5PmvCrGkQHpHsQeukstEvZjT8XBMKCNs4UnzeLWTX1ZV",
  "key13": "31FQBo2zreimRP3JwnRKBRSwNNjWqcowiycn4RqGw8xVUX2LHMVwswzAkM422jLJWK45MWTcryDNaRrH4bLuRk9A",
  "key14": "pGWZGZkob38qbvwcFyutPTZrsTbCZ9iFtvnD8HdbH52r3raJt5XqadoAy1ApejaGpXfzpnrp85mdpDBf4Dm2nMr",
  "key15": "5e2ZRd6LKdUzNWAjqdmo91rdWZTDqwQigfFyUVkhUSvg8zVP1Xkus32NKNDFf9krwoYNDDPZV6qdFFkxfePn1afw",
  "key16": "2VbgnmrENLgsszCUSooNZ7besL3GGDfmgWCfmhyfiC2u5A5oqXBi7SbYX2WdbxjdyHWtck161xFwxvGHk6woGMiW",
  "key17": "2uAQvNRSjmSaFuV38NDPKUWAUkme5xuU5RUumFnQ1j3fcHJ8vMGPvCV3N7YXTWjQb4JPwPFuthTGJYWxr8HUJp5X",
  "key18": "dK9RshBcimx4NX1GrNdcvbymiZ8YoQxbFs7FGZ6RDzMhJV3idGfCXVwcCogxQdEikLQ3gjrZoiDZ7CAuDLGxtjz",
  "key19": "2GGsSvjtEQ6LyZP5Rb9k4kHZeX4xUUVeJGaE5PVnp5Q9PNkagKtbFF2EbQWcttCS2vDYGdY8e7AB1gRHRrava8fe",
  "key20": "4M5PjQC1nR2t4qMj4UtaVnaLorwiNtCGdH4BTrMGzyhkfxhEnJGxreAXE1iR7GkLEWx6ExWVocupf1wXV8yZqfmv",
  "key21": "2mNEfRskHMj1SD1GFmzq6KQ9We4LaXbWDDgnS2pqBA7NjBDHjyXwjeWXrCxrgA3ft9wq4V6vzjoviwd5Cmfu5RrG",
  "key22": "kfzmY5PhaZqhrfdtrq47kgwRHnAUj7g6LrNXpRqo2FP88WusCDkXKs7Ek7HmfLiznLv9HV4iuVwkVYExmFturxJ",
  "key23": "kQpg35FdMSNddH8J8tTpTRFd9jziYkPfhQP5kekfxUzAHM2fr77oah8yc1am5qkJNELBu9axhfX5cJA3Hu8PGba",
  "key24": "2m67QdkPGwzLptBtKLw5vL92M7Dd3Qj2ZPPyuaYpbDxGSW4eUeBNmMG4ZsR1pu3Poz9hVAW4xz8WqfyP2kNN6Bhb",
  "key25": "4cZhymZ2iZAXJakJBZMjP28dQNLKnCnnFu9K5KkeBJRGuasS4MBsoDL5fjY7wiXGvV8RsjiEiZdX29NA8R1apczR",
  "key26": "5kvKEHFETLENv93y13KPgYifNHVZMJH16kEN8MEJb9fWY4ptFjy4RAFKciVCumwFb5cAVoG5oLmhoFzJZBdBDMcc",
  "key27": "KKzrDpjHS27HHPD3JtMBbNMppjppmDYd9BjK6y78HMyWe61E15AbkQRLnGWscTSs4sLRTxbhqyzXMNeEnzwKXtQ",
  "key28": "2FyqJ5xens2hFXg7oAfawLhhiU7D4Sk2T5oDtoRx4MMQVJ36bpPxJvtV4VJEYoASdvbP5rdUZe2woRnkvD1qbyr5",
  "key29": "5bEQ7NHnXXor1DcLPteT48vgpafoTXpvY2DxiUprwX6S5RdUHqCMdHJTEcgsweEE2wGFAeopFYuA2mCkMw3qQqwR",
  "key30": "4j9tKyjDmQnAqH2ZsgTBXrvvnhoNiwsii1A5Ldk2MwNMgq1DkubGyDvrHrQrKsSUEFmVsGHc9XuPJnidTPYSdYeJ",
  "key31": "kJaemUep4vs5jEjzAdBf58omFkcWqTUUi2vU41ssujbLjE1r1hFJ1qGUJcVsnCFkncsAHBb9FpGo9ADFyXkPzfW",
  "key32": "3q7TNBvVxuHH1ooa5VK4GVxpU4Z4aVdZuUojDfc8kkaiu4qoVxkk7ubxGK9Amrtv1bpwhBP1XKidujPJEWyaPPUn"
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
