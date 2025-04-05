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
    "4pM8YB2zh1k9sFBbFTHvvJdHy2GKvoSt8jJTqemHSPv2x2ggpPPTKto5is5Ki6zW7mvbmGzkpGnQ7iVBViqigcgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWW23bzx6K5WMT5mNm1gLeYi9g4gHW7MaaQ68Wf3WBkYgncjc9KC11SD9BFjmKWjgPtmoaC5TeC1ufoUsUecNtd",
  "key1": "3DrMDKiVLXLn6xrvST9Q8qaubucf7ktRPprReeEfN34uVdz1mRzKfFxWR8hhf32n1zZpCreTPkNvKrWnPZiTtpxg",
  "key2": "4FJvMhVWnLdtwEs85XEMphdtRCnWr8hjywji5T7jmopJuUfxNQg84L5mjDCo1TbwDbtTzuVBGGLezw1mEfN5NKtz",
  "key3": "4RuNch2gn4PaBjHVV8fVGVew8gn3NdhCwn2B3JQVNbad67yTGzHFfwmFuGb3VTDvJQ7t5Uo7r5yrdjg9La8MTVQZ",
  "key4": "4FCtWz2oie7ALsyzoL9b22vyhk7aPdxna3LWgq1r9EUEQFv2Kyk9C9VA5ALxGt5KQ5TaAiUZbqDStCKrY9TQDDQg",
  "key5": "4MUuTNXx8S8pPQ7RCe2WeXXg46LV6ThJsjyapuiugqCjULfxEAVbCdEtU9vqGf6zm66debRiYKC5ePamH5qPuJcf",
  "key6": "5KuBsczDpCSW74trPWEXi9ZuXrXCFd23HDZUBFx1CeknrxaDovku72hmASYAkUf9izdYMockXYZy96n2qN6GphJP",
  "key7": "39TCKgK5pRig8Aui5LWGbubz8wz9jwL8kg1ssyyHuaeU51iVLLxcvacAWFARNfisUcSGCbRpXPeahZ5kJdbo2NVs",
  "key8": "4L7xtfKxepiPuRdnFKFK63xE7iRNqQAQhYj7YvHjtYYunbStrqTPGkmY3imNRZo6bTiCqZpUt4nM5jvU4GyQk8TN",
  "key9": "2tJ51u3GzBMo8nVtVoe4MwsMwT9SWtPxo1zYvwkJKpMSWr1TBHe8n8nnuLsdcu1fuM7zEbN8J8QkeatfjTMohfUg",
  "key10": "3DmsFCsXxdSBtGTS6LXNvhBtu83Vc7vEpgM4UigeaUKaaJJduNqstniEnvXqiikzcbxaDfM4FtDwAzh3kJJrrEEK",
  "key11": "XHj4h4xsnRruceZN5Ttxcu17UDMNWCMiQBCxsQi1zyZRPtSLAXFy6CfBMVgkw7aL1ozHeoyZbxHbmQZ1gwwuFGM",
  "key12": "52NuEyAY8iybibzRd2tQBFXb9xxaWsHKnmDxi5XDALwnLsNvsJVFw5QkDW5HU5xKLQ2VhMKjB4fFoj5m5yTLKw4N",
  "key13": "3i4zCCbBve48Vvs4hDQk8kRdVYCoR9J7cKPFs9VnBW4eJMhLhchWrKR9syDic7XwL6uDCb5fbnT5fDbj2dnbwkw3",
  "key14": "2kwunRRpvSBpgB2wRwL1gs5Gja21tmUYGpW3iUE3NCRL4Y9RHKbMdKBqNFU7HKQJzJCsWcVuUipTYjcAzW5CHrf",
  "key15": "5o4jZXzid4tgZRkBJM1ZBPdvceNniMJSLwn4jigjLdghiWgJxZmDsNQesuTbzoZ1RLgUX6T7DVEYuX2N7yERqG8M",
  "key16": "24ShP4H3iwfXSrLwHnHv1iAkjRs9PtsnNEZFtWmZHur5HFoEpNN1kzVBE3yozL3rWdcpRjGSqfS6vBYh5r9JeziJ",
  "key17": "5rwyCEjPNJ7pd7rz1HhMdsfZ3eNHwF6RhtqKk78F7mzKWYh1LiarTy2BsNGepWgTwVG6vSiQrJgQ2nc9z1mRMQHj",
  "key18": "2fr6N4NCAGwepePLLYVqyhH5jTGiuq6SVUJKyvr3aHHM3KJeNju7y57TR4zvHLGBJYZPKe8E8ZvmwCYyDrgmSWpc",
  "key19": "3uQ6xAvbeErvJbs1o3iK3pF3fQnuZb6oZDZwr1mATEJWoyHTWYoAz4oyYSth2LcuNHmiKGeSGYrWF1DB6UHy8y1K",
  "key20": "5quxkxnWvqxmZBUU5r5oJ1PLTeNa46SwcvKGfj1DjEqkAYEKHmWLfkeS7KQkyDz1ubMGnQvq1EquGT4dnRoPanJF",
  "key21": "4XKiEnQ1ET958oVnS86jDTJr6Pv4kottsZoG971UdTuwM2WNJzaUrnQPMcT7VAxJ7jxXm43p799UfZJmNRz6BAgn",
  "key22": "4QyjmUyZC3C1wfk3CBxTuAXrj3o1zfp1bwf156Lyi31zVAA4UtcsYJDw9G8wdsRAD7UVbNMkbLnx5ZsGXxHfNmcY",
  "key23": "2HgA4VngqtQMD8mfpnRqk77Rwv2a3nMtsU551cUYNz427uFP8yVjNJzDgVJ4zQTVtYS8GdgGJwoqzPgBSVvodoyt",
  "key24": "4C1B7P2qfRVmuvoSF27Mkic2ETumFEvVgCoqoJUCotP839Wo4HfMtZYX5gwF2uso7JCMWydq5rQomsQt8cotfQMR",
  "key25": "3Gqo26SJ7YMjQcyChgF24zjcGNpUkbFGjP1vMTkxvwPfb8Yks38TJn365aSoRBFViLtPV3DcoYrCnYb4TQCxu2EE",
  "key26": "3fkEdDoPMJybwxxXNswUkCJqCFQi75Y2FVQpvWR6zVYsp5p6VmeMtv47ztBoYT4fQY3Ft3eeGbMG4A9ntr6CEVeA",
  "key27": "4qjCJMYpPUJDnobrdFEtHeroR7nJX22HumfrTLmpEEB6jSExM4LHV9YJzTHqMoxq9rUwPkCvTnaatsMGpVXEuXxT",
  "key28": "JUTXcyaKChd2vzfvDht9DQragfjPYmq4YAjpqsJEZrpaN9Teh6TD6yE6CCZJaYRg4baGrJkuGn5hHpNu3jcQB6S",
  "key29": "47jwJbXtZ9L719yJwXYdX1YurPSRAGVDh3U4VJmxEcUvD6H4FRwWdRNd9pRZxKk9wd7kYijD8MjDY2XudB2WHyY2",
  "key30": "56CM5fg4QNr8TqMLSwRgannrBEyDp7RKBu4EQiy1DDK1YdcVy23HcANJ3SLKdix9hdBu6Hgxnu1gzBcopqQrbtpc",
  "key31": "3pqoae5pVHAAoe6iUsvVi1EnegFpriXAKb3ryLDBx3aZQFHobHjM7o3ENehKMb4HPV5qhEMQH2ToqmhNH1NSGqZ8",
  "key32": "21zHcfFH6PPLbjDn311TdpDrkxPG76js8nX6eWuksGrdayk5cXPSQK1M6fGm12iF9W1ZfT847JVxmLaRbq6iqeac",
  "key33": "3UwD2Fbm7C6pFHaepcTHHMaxi4ZmF3t6zD67pavLdYuXggLESJNz6QqjidsAgqkBvuG43DB4KaxX6B3TDUyMCTVn",
  "key34": "q68vX6TFPXatNmEJs5CUn9D7fRfTbWxu6AM8zGwsPTatAEefp2AvSkGTJdAj4G7YYeSz232K9b1nam8PEhTtcZD",
  "key35": "56zzuJoMCXQydFAWXrj4LEhCUoQP8tobFBjuWtTjHcE8SKjSi4ysPG9TJAQhEgpgAEFn2E1a8cnxtLTqQwYmPU1B",
  "key36": "4ph72FFUUwCNG67KygGBnRHXamsZhuPfAzHX9v3FQzsYhAmPo7xvFXX3JDNw6fC6vxbSSn9dKgYxB2UNGaTNEXRu",
  "key37": "4nxSKDs8D5uLNjRoChHeG72tf9jnomZLx3YsjZsbVAoNU1TcTnjEjnHZPoFRPipc8sv7Dj61JoWWVzvYDKr1FbXx",
  "key38": "345j7VoGBmGqbJ1fmH3BReit3TH9Dkr3MDcBLs7eVNtfrJ69VgY8kvWQP9CuAK8pZXAVXRDJ8xUJU1g4kbpoPQZP",
  "key39": "2DWg2774QM3nRyikr8vP35QtZwRSwmfUHbtbL79FRMdrpBqkVQmQcc76THNgYS6ghd7Lx6nmhmDXSRKWzAJ5Qgxs",
  "key40": "2hvAwHr7WGjTcLk8U91GKdS18uCVh6SZe2RAYYThNqe3Sk7ojF4HSrRLZtXZwHaSb9UokuXZYb8bdPQezG7QyTp"
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
