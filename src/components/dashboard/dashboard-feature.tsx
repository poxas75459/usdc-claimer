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
    "2nHf98442hxzDZQ5wp7v6t1akeKL9NXmiTjY8tKEJ6S61sktCF5JGVBaDcKZJYnQBqxCeVZrZbRL4rGdJAc5pKTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUCVCrdRTP6g5Z8MP5YHoDPesGf2GNg9DVyJEUDQAizcRKV15LCrpV2LwiEvRYs7Aim8u5gf6Ao4egXsGPyXfzg",
  "key1": "4yFB2Q1QuZtvFLxyrfTXx3bVjv8xs44SEmJTy13UEYa5jCj7P5k1xPTZk9GtKkr3deLaFdAeRfMyrb935dDSXmCx",
  "key2": "398twfgyRkrQFgtEtxQju7KUuZTSNV2ha8YCDBPWZDrVwvQfRmgC6sf4L8UKySX5tNtXXumVuGaW4bS2ofXu99hA",
  "key3": "3RDZMBax1cVmkV9J9noCwqTrARtARpK88YN7b2AT9XmxVSApbPYkydgDhMkrBqyJP7YvwkB81DRJxjXEMcZPp2Xt",
  "key4": "P2cu2pr7fTCvPadZSJf64Gh45uh8gjzwC4unTXtTzJiYnpYzjGbm3pamys1ZgDv3byfRRpeABSdzukEtN7eAPzr",
  "key5": "3Bfp5JgHyZk2aYgveZ9NF2pqgKTpZGC7KcVjWFM4kAfiGp46rMujtL1cAAputvwsK3Rk1sxHjEYpPuCovhmqX6Mq",
  "key6": "gEfRcXvcwm6BH9cg2xbR8W6BqZxvQ9scKLvwrYgKhjogSDdVyZRb6kMgdfoQqn8kKt1d5P2FWuAu1k18sfqFDbq",
  "key7": "5UtRncoW4JJMwGoHYzv3w95TkphqBc7Dna2MyBKPTVHEAgNJPDScbJPsdhyFMBqJpv4zXEZBQrbYNVwDhTaPUh6d",
  "key8": "3FnUvC52DXL4Y9m1xHFuYmjqPEviQHsTTb4DD1TTgioLw8j4dBTn2QeL4MJHjuMRevefreR4eYz3YhtiHdwVRnKs",
  "key9": "5V4bmdzyZbtEuybmxZjTpR1E8koKnnn9ksepNFEVfgbPcUiRH5sSk32w4f5jyc1mEPbtPFwY9Dg3fzRvdxw9TJMG",
  "key10": "2CUMDiF5QnD1yB2Fs66yiYnxctnBK8R3Y42kte3943m6JVrshTTUGbeuv8ZoXk1Gcxz8cyhzqtnBH8VBBWLkPDYu",
  "key11": "5sKAL9Mbq7wWz399kBPb3o16y2wzdVGZgX5ZNYm2kdkSyfW9Sb3pjBCRJGDDQ5ebNnZwXfou9AvxRBbgiXmmxsyS",
  "key12": "4XnujkXgLkY7j5WnGYhC1yVkbbKdkc58j7gJM8mjsfqbkqkc2C3H7xYm4aGNjFkkbuNC4ZdNTpGKrgFg5ASUFHmw",
  "key13": "3Th4XTQPfQoQxQ5hB69pxSzdWaG8oyYa9d2ABcoQAbytAbPSNWJLbXBsWu6RGpneJ6NL75LDFC6AhcmDkYLHXN7j",
  "key14": "4ShZkU7R8Af9mkvYkTMwJwD49oXyByGKi727nNrnMMB61jGcECVfhLNtXsp4S3pn9t4LqrGbTRu31TR5Gi7M1rsZ",
  "key15": "2qvgsHpnn8VqWBRv8beUYujc2rAjKm72tZ9vgC4hJFG1Uu77qLnrDoJhVpHcHB16rqUgVKEW6YkTFeM284kkTtah",
  "key16": "5hzsoHiPk2iWJoVQN9fgXzoJTdzXdLi6y1pBHAnuqkedVhAnMfY1Hh6QMHsoXzLfgsb3tLNvFfaKfaMMm52whDif",
  "key17": "Q56Cg6v2dTwSua28TqMsWmdEoA9wP66u7crByoe8byKtFsWVe6ZCHC5xramXUyanU94Vjhy2oyAQYKaQ91husCH",
  "key18": "2LPV9sc46iePDfFF5YzoGoQmzM9UnJRW8n7duB7Tiqhs5nkdqUydgzT1Rx6Fs541bJiXK5jYvFHwmHXDzC4fdq8t",
  "key19": "5FdtGVnqg6DxsAngFscddY7thniot2dZAeEVpbBwRh6Ro3HAizpLsuQcisdSeGWPPkyKrt8y6pSTq6yjeYNCTTVP",
  "key20": "3LmYGsmYh5MMQrJy41kktiqXnk64Z38FJjoK243pzTQzT67UxkavddPqrsx1FheQiUME3vjngewhVkSU2xUdQg21",
  "key21": "FQtgESbWMACk7MCUgVzFUqKgPeGcngVodAEN7KQCyt8LdRKWQhLptivpmuXcVVf2PYTjT9GZWdwDMyZfFmULMeA",
  "key22": "5qEdYLGKhQiSogpWjsfyrct7p6bZxTYPkdgzvL6nsZhTH141re6N9mEadKhbCawBWcJsJtSzeZ4ieBSPfgygwh4i",
  "key23": "2AVUXPScr5vjBHZHW2rCFz2nLwoKmKKfyvTXRF1Xkb6yQ2oGPYKbdeRd7SAPwD2obB7W6dCX2H5iySkM9MfVVVaf",
  "key24": "573GBumh5pG4ZGy71tzeY273iQ7uLQxwzjCthgycPz7k4jhRecDcMFQv1CXSgfRkvLKvY5UBTHRoAtjV1WdvxUa7",
  "key25": "BQstooFiu9BDTYwwXtcyaLQiJ5zWjyBPsi6bNr8ZVZs1gZkWPZ6gvr2LpgEGUQ3Vf9HjnjJyD2Dna4Skk2Cr5Eb",
  "key26": "4cdeAjKvMec93Dzv5CLmh2KqDQA2yhP5m7YHhMimwqP3nhJ5kM7cTqEKV9SqbNxKojuu2AwRpQ7Xdc4vPmhLkupa",
  "key27": "2akSLzbCuaRWA1C6C63Sq95dXPgvg6bbaVQkWy9yEdE64z6fXgahecLQXNTzkJi1RyetAjR3ArC6U5SVckbvTQ61",
  "key28": "Xg1L8MF5frUNqQaXdYiwcoA1dFknvEbeVoX7UPMx6P8t4muRaxYYVGRMVtuAMi4PUCSVQRudYJWszke2Msap4Yn",
  "key29": "54wDFLwS2b4ikFoodSpy6ftZuRoDpURCL6HHZxuF6zsV8qS6TZ8az7bgyBLpQusNXRn2XB6LvjW8DPZtwiSaUajP",
  "key30": "3Bry3XdmDaf6iy5fD6pQucCzhwVnWDMzRGSUc7vwQb43iaZJk5JsQnodtjFPAdCXRG5uJ6TvukAqjbkQvLnnXusD",
  "key31": "45uU4M4rt25BNP8jiPRyLJTkyCBMvfJprcUpbR57Te4eRZ4LHPb14UjWLBmpzMmcBJktdTY7oXryPmS791ii9egn",
  "key32": "2fMuaFCYkRq3Vrp6qdNoMvxmWgdqK2zEovKR5ovQvuKSYt8G3iK66GtJ74GiSzkd1JA8NiykF1emhRwWkxb7SFWS",
  "key33": "2M9snVLUwQCGGc54rAimwGhPX8SuZbgi35QcP37o2E3QwBcA3dnxVHfxsDaWWmHEhXgJioQqcHMLbQaSx3vjET7L",
  "key34": "4vae1QUXEHpEWvdLJFp2uGPpu1WHWLr5MeRNjR88qx3enT3tDhpHvjN8TqbsjQRercDdAqJDgpwqWFzQH1Pq1ume",
  "key35": "4Mm99LHgMQNxKmeYBAHtnXR7P4cWG4fYHGjadveibvWDq4w7C1ovPzjPtJssoyHzpdqDhDTjjZJVp5w6tcci487F",
  "key36": "5dzzZDKHkkbWFBGE4Ryn3mZzm6aEY5fuERrJ3EPeCcwqzcPeBskVA44PaG8n1aWmgLaSZrSEXyZNJvkk9k25a2ow",
  "key37": "2WC3yAHgsuh9oj2zUfaMQugrVUxL7heKgzmcGyxVobSTad19XU29zjZSh5UnjKPHB9VLcnnww5HfsGn8yHr3f7Ab",
  "key38": "3hSWM4QTfSoieLkNZkARF38vVVWcj3XyjCmvTd4gKZLkpuz4thaysdGyek8PQGHgHaZcArSa1r55GRJ9Gtp1Bhgz",
  "key39": "5LpBnsY38ueqK3efKqQoYYjdBiNgNi5HsKiL4RZFRTzxWGRRn1Jf88bTrKPME88awRcJfu6HaW2ERXNXaks2iK2z",
  "key40": "3KtpyusFtV2WttKHUKNUbhDemYhXsPwmgxnb6Pjc8ESGzB9RX6wJNJm5og77wsHH3S2kTBYWiUUp9UrmLQ6bM53i",
  "key41": "4TqHpRsf76G3fzBZvrT4hjRQi82f17rRPTYPApnraSNktwbcxBaNH6qTv1mfAfvmcxctkP3PdFKsKk138CcYiff7",
  "key42": "4ZCU9UFdZ1b2mpnTi9B1tR2B2koTobuboPKsUv1n1x8HjD6AvUJs9iwUmvUqTfNigVvN5WDq2WqSwiq175g57GVu",
  "key43": "3NDcA8wGZNoxwsNYjRQDRGsGW4bhnyzm7WjFu9AuHy6457DDU5NhEPsFJ2yTdTo7uMBcgEXEgqXEEioSrTzaGLgB",
  "key44": "2cSogL1Ft2ybL9xUDRc6eh8LWQVKcDVtQqadvPFZEck2TiWPrRL26PLfjf5fGyZdemgcrRJjYZVCfXeHrJtAzEpS",
  "key45": "5gA5YhMrrAMuaZrDawbU8WQLsz8d2cnSmBjenwJ7US478MtpbXer9hFbtBWKARSDrD8whiyLs1WRVpeWHYaZmmZp"
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
