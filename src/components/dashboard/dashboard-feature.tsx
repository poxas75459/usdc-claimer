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
    "3Dcenub8JJVvuzQqVgYkgL2Pw5qxd3ixBzDM8yiiK13ue5XW5ancUNm7CDicVh8so6Mkm8THmfpui1WnAGp7xXuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSfeWHhRmWoNVjK4eDqX5LGkjiFpdduXG6NDkir3TFRVzd26LUK5PnNUG41v5K8SvXhQESxLbGzoY7Y4ZcGJiKR",
  "key1": "2gHrUQpPaE4MZTDT2CPPvYXfo61ieS4fXSxQN4r4iU18JdB4qFrR1VRpywjPb6bNG2ehXokfnx4FJ16wUG6r4Nvu",
  "key2": "57DwaT9mGR8P7776PxN8QZcF53NEsUxweos5MgeTXJ6F5cknuiJSeACnYu7eNptsQyipfNBZYoLFi6QnpDE5JxRW",
  "key3": "MLbHRWZQM4zpAca9i8o8iWcNKBthiXjmJrvwY4mUrqKrt628ZtDmp98UzPYMn8kwpbp5guoZJCN5r8BkTQ2rMxe",
  "key4": "24LJKtA1jLGPSYUrqFqZC439kpUcoftYhmTgqzRiM5nw4d1yEu8n2mcsG2oYCE78f1KGgsUcKiW6tQFn6i3eoQPf",
  "key5": "Gn3Qw7Yi5VRfrYMNRJt3PnJRGjmPWXNQJerLQWyJTQSCtTwk1XpWpD5LhSc2uu9R2MJJAyeHgcyENmWzvUaYYVH",
  "key6": "3HpndnAUVU3gYZ4sHUGB84NRUe6dk5ddhVj9gYKFYb5ZEPxy5w5gN8bdotBP7Hf3C44M8nZBgPcwesQjgYTrRPVF",
  "key7": "TumCYm19BHR5SyAA8DrdL6tGo2Mpvy3eTwcpe4Uqez5y9io5hKshzCQ6prvMHBQcFGdAvC41HXPqFDpggC7mknv",
  "key8": "26wMr97fJraDPvZKtZEorNMhFekbsgd4tZpip7KyoaQuip1j55YvuExpmMYZUxcM28Bhsjj1f5v53mokBde7ew2Y",
  "key9": "2JUcM5zTqVMpR2iTiXgd8xCVVFGHUwSQ4haG21CUWCnf5zzaaeSdzomdmVDLRBkyJ4xMXPocPrYxLmZ4wftchxVv",
  "key10": "21A31RUEjqaoGTGjGTT2ajSQfCJHAGERcS3cMLwhSNxWRjTuaMh7PvsTUMGHcyKwb9PV3BkCp2MrDXvzUvPvW8Q6",
  "key11": "2CJnphb23Fjqvdwn72TQCcupBDqi4gzF2AqnkHvHAzmDomuLCuWBaz3YPForQH9Qz3AiuRMjPecQ5SLLdR5kd7JT",
  "key12": "zBqiSSdnQpioJ2XuYBaLdy1mW4fEQksFyoG4sUKkDka2Ds9c7B8kQj4UVECgpm2VsMPfxgdn2VM4hkPV26TUeev",
  "key13": "66b9otKKWF9BMHkN6U8FGFQojPDGrF8okn7JLaSqTxbemWpHENubH5nVqWNprnnN7X3rSc2h6N65tbWY4EzSe7dQ",
  "key14": "3dyTcAZLnHour88oEUCkicyN921VHgiaTxUKz48iHrGNC1RzgfD4PTmL6t57xaDvBH3yHSQ3RcshMDBUgR4KnrnQ",
  "key15": "5vwwLGuNT9HRkehf25ofPHhxu26gbPXSxsr3zp2zmet8HLGWyEqTGmYuHpxq4DxkQFAqWEgyWisiq7rGks8p2xsV",
  "key16": "5ruqqC4KiatNKN66C9bw5F6KKMWdd2Ti6aaaQSuPe2fmM8cBAnsTv7j2bWbehjxwFimJdUfLLEaHzq6Lw7PrVkre",
  "key17": "vVJbDyk7qURewZ3J9HQZLK9i5RFDBuV5mqvChyvTDowBaQXdxm4qvWayfDwddLnqnKGXuYx5NS8f11RJ3P43kqx",
  "key18": "71TeXEmELk9ju3Pr58MdwQ7a8ziB5WJU4WogTR35jLCrPKiY4bspkVP3nFdbNjQALV2Vr7PcY7czon282dVefcQ",
  "key19": "51iSwQP98K4yBpnQ897AJR4BQzLR43iaFAvnzZeyDWyf1xNLjWeaqA7NPpwSzipewqih75LKcdrqPCATY8TbnERb",
  "key20": "2j82i9yhL982ZPPHhjTKuMuCX7DbEGPZxadm5pDNc8wrmGp4fdN7uXuneBsWR98zDptvytwPemypzjd1gTKmgfXd",
  "key21": "BLgv45LAg22VToiK5vLJHAttKS5ETn7UcQFKZADi8NrHPj4cPoTojLfMK4Aac7QfhVytoGKnPfQVJWbVKcAhCD1",
  "key22": "3f9yVTtutLwdeEaYzUTPXKAwHA36VCNjhi31DLvVVwtc26HFUuVn6VcJEvTmRzC3tHByjRKwJXmMJauCc8t7ufXj",
  "key23": "3bbYu5R8LSzYisbV3krCxRNmQna97EAjwg1XB3mvGANnHvKwX2xGyucM8Bp8W8eZhvZEio4z6emJbU2s8G6Qecow",
  "key24": "DXfUX8pQvPzrGWjFMgA9bdR9GVyuqjZdM1WeQTVZE7Yz1SqaahLeusF7iRo4otrPCkNiewRK4mHa86cZ451yXoR",
  "key25": "3rvAMfCsEE3y2xLhfeyncrLVWNAGxwU1NqHGXALSfjmQM2vKqAfH3L3vMkLmut4J6LCvsWgAmrwq8a95ftftPr52",
  "key26": "5zr2jV3udnzwjsKLcBPxj5EkWyfD2f2kKe8rQCu3afNziERwG3qoSdRJ4eCQmEbGzXR35uHMKqWbkrv6w8boDm5G",
  "key27": "5W8xXZtrJ8Zz7PEpjk1QVdEQbNfxX8EGpmDNP1ZeQnBEdfmbnMzUkz7uxjyRAm458f9j4N15TrVAUEVAjqDFaQ3L",
  "key28": "5J3yrop61gqcWs6MJbP7JVgv7sX9NsV5FuB5oUXJNg9WqgugeRMiYHfx862zsLzty2TTJayaPHg6ZGhm9RATJJ1P",
  "key29": "3c5UcmhAHVdBwmzgqmRBFWYEC6Ceqjqc5ezpi7Z62rjwpiURdpDYbAEJwxBLFCXZBmZju4UF1fnXYTm9HujBPJtU",
  "key30": "2TqJMvaiRoGzTyWnXsidP3FfvpGngJQ1NKPQou2VHZqLX3i2ZZvK3G5Ums5M3eHfYCegjW1W8HG9sjE4kBG6AUDX",
  "key31": "3tEtgUfY8QbNQurFqVENHixkRNoCfF8qHv8kWhyXXeb5zPVcznRQhqxVCjijZmbX2z2rkJ7bpSwY1S1bjnVaDhwY",
  "key32": "4XsJiLPYPeFF1gBy6cmcMUbRiVT3cZVJFAAbacBYxXGP2CzVYCYcfVyfhwBcW66RGewaRUKNAYWrb6bDEaF3C8om",
  "key33": "34u2uSwXeqTQ8s7S2HvhZTADEApjVwTK2YpfAefnHRuaqnX5CczsujRdQJtxYXx5u779jzJhHCuZfdAHLxhmgHmn",
  "key34": "3gkrPpsqVHfAeS7xh8bkUSywVvYsXUcmMiqd7RMeHu2bEG1FjHihFPmv37r3ycKyfX5LUig29qJh2N52pw9AD3Rd",
  "key35": "2weAWDBVQjZsXkioAHjLzTitgLUf1AkwHpa9f6f1qXuSQ32h5hx5oi3a9rJfWaW2591MSc2K5irZY8FGZ1PaG6Y8",
  "key36": "38DDACwVH1uAddXJULxu9LwQ3a9RMWNnCRa8yDJRZXQDy5PLn5XKWPvtXLHGXkhZGkqC1S9fYH8pLg1JSHdwsAJu",
  "key37": "4eRkZyi5iVVh2Kh3628FczCEz7RrfoUTqddcLr5hhYsKHw8qE7eCMag58EzcLeVQ8f6HBQCBj1HYzWgwck4u86Di",
  "key38": "2q5U3GxcGB7cCGQQmttgAUWbzsskb2DwHhE1VrntFmTMXe6BhiJqJH3h4QffYg9veCChCLMHRZKXapQ4Zq4tCm21",
  "key39": "5efe8R16NettUnfVTBQdgpDwmh3tqNz8qPHxNHFErFAFh6aLBZNKQ7K6YYihVWADGPMReyFhd6YX1j624z9feBXh",
  "key40": "nLVboCe7EtA5nErr1koGn8aymGnXfVCNcgWZxgiwpWPCMCxcHp6Y6aYf2Mc2dz1VEBhNcEEu7d1keX8myXnZcNW",
  "key41": "3k8TywsvgB22RoL4vg9SMnHmd2BSpVjepB43wRYTSTKrsH8PqyBzRF4TVHXpZiAzPArSuCjSBijfTpcyAScWX3Hx",
  "key42": "wWRJTJT59B47usSvve7t4VUfDmihBixteUJsvuQMC124E8JFTrDjMrjj7dW7ULhd7pDu7BFUN4GdskJBZ58QGJz",
  "key43": "4g9c6pBo73qBHixdVXveA4HraUuhq7dg8GrD2tmKiVkRHFW9Z66TDBsmEUqxccb8J727uoK3tYStigsVv1Y1SKty",
  "key44": "2gCMZ5cwCmSjFhKdGsgb8siNvVfNCYKGnZMu2ThhpMdPuUoPgNHdfihojvayP9qz3vYMg6kZJ4gHMMXY66SMnC7E",
  "key45": "t7w3htyFdL6jz3UftrRpbfABPMoL3CmBMKbj7mB5Vgjur6J7AbBo5batNzRD3TXuRkJr3zguaNrbSoZRJqCsT55",
  "key46": "2s95jLYKacQ1meKdT3ug1rSSr6CDhzVKvum9WCrDKCQp8U23yXo7MHeszZRC61z35vEaM6P7mH5mtcMxfGDXMi8z",
  "key47": "3EmnhdeC9cp8zYSyGX2bCHQrhfWpwruGEV5m6RWgsTt7xgqQhoHnsfx7Q5x4gzkotYd57oppq2UgF3UrhKVp1hyg"
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
