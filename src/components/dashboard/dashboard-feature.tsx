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
    "2rVWS9u3rPmRN7FRvVoHgZv4gBUF3Y9J7GEFpA1igMgYvkQFzjMxesR1kUx9oCjN3SoG37H8WKF3dut5ete1pqRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hj4248dW6so73tc3cqv9Ez5u3fwDiyjykYyUaLwFeqYWiCFMenzjNzHtyZDTjisr6fhXeRm1TttyDgABWCazKSt",
  "key1": "5Q8ZQwsoVYpJrXs6TBmqnCchXs6ChwygRsMgqLsVYXrBJzd36poehkeuknc9CYBqgbc1keB2CRdRoVmh3MRApnzR",
  "key2": "3Lnwrt9kGW4yGK5rjpxqA9iLPfCyVZuP6wuukkgZYgqjw3vwMQkgjgYi8md76qXchnkhTSyLhoFS8wcsgE1Rc7aZ",
  "key3": "4NaBrf3DDEvsjPmqn4uLtb1SSTqX2BP6FPRYy8Du4oZK45QLmSg3hGZKKXvVe78Z6XvgKDhoWAZhCLfLjZ8FwEGt",
  "key4": "26wpz1dsqf61UgJxaLZTkeQBy8ufHQd2LQ6rfE527aq9F6xdgeX27mL6ouqWB9UCgD9Ec47SbhLQjuCbnES9ABdP",
  "key5": "5hHotBAvP8mjoWwsW7mZWQBYeUsJU2RA7Zj6rKcra9y8BMpYo1QgFDrk6F2NPgKrUEV4ZvUyueWW5XG1sD8BCPPU",
  "key6": "2C9GVAUhYptcJbPL3em6qR8cQEumD7uUyE9WpgCbjZuEEALMeW98c9fdN6TaHgRjJK5Ux7EkTrkb8mkgmYS39Qm1",
  "key7": "2aRpr2GGzTonFthjttByQXemCXvFRR7fqLXbpD1jaPo8poAHhVELFYQdyLbyhNsZcwD6ZGSgkrAHAeKUZQ9FQdfK",
  "key8": "127jfGj3xuoBMeg2x9n7rAQ73BVVg4BtnxDjswTxqr7fYj2iw4QpzXmSztL1Hetb297ihch1fGUcriQQxNgeUDYT",
  "key9": "3VkNMxupDP2ggpH5xB3DxUzMDphDNqrJWyZFPPk92zeuJ8UjMcFLgNYyU4KJrWwV8sMaeD7vF5ty3Sen7gwChBeQ",
  "key10": "3GEuqHTMvhMv65tSJn8NEcmCQrZXmzXtVCCkQCafWX5d67P9tSBSsvbEScABfQafsgKmze1N9uvhnWD7fTZQq9xk",
  "key11": "3uu1PfhPVQg8jL7fuEbDTCU514355SThY7J19CvFdHN67drpv3BYxYvQfXJRfZmG2XzrNvpPTsc73aA2uN365ymx",
  "key12": "29V81eySDkf3jXvzNVNZgKdJbsALcbi21y1YDUwLVzzKfGLJQQ6jnSYVSGqHQD3nQpQdotNnAVUWkvN8GcoSN5fo",
  "key13": "Xfj4tCExsGYn2BMeW6PKprushocSY9j7uq14Kd8j2ddNr34YB7FT7Sx9adcmzxiqHSWXbneoTj5vNJyEZcx34yj",
  "key14": "4BaLLVnRbnRCx2fHLEWkBJm94FTfthtnAaZafhCNN1CYrbLuHmazuDB6DnaQAw4vNZLrHVA9yiPysq6UQFE7Ac7k",
  "key15": "3hJa2ggvhWtjsjUfePES2BCn3JWtZ8vYKLQ5pJQJrCsHU9imTmTTnhNqem75F9aL62aRHBJpSApzC5VCkFPDT2Uv",
  "key16": "hBKcteiudC32SxjVzecteCz13HU1AZqDCRvcGubYrA2i3JbnXhsM8ZpQjDKawbtsBZQwVPi8WSLAF88c9jNGt4Y",
  "key17": "3EGKVjWnAcih3ijrSRWQ6zq3RLBkaW4V2dQVF1HwnqLCMGYrMNWjp4aZBBXviioj1LtnEpZLKncPbz14dTTcYJ5F",
  "key18": "3TsDE5sm5BWoyUm9UcBZVCwS9zLMyd8UH3EqKWDgN4X9qbYQD6Kdv8nBRpF2EUzKrTSjr2GHbyYxr35s86kRYEv8",
  "key19": "5R7oKqnUapefHKdP38QaaNr265TuoUxLoevCmk8FG3S9y623PKMwn8YhZe47g2QpyquhzcjWXkyuTBJkmM2cpp8R",
  "key20": "3DSpJQQudQE3xqSK8V9PmzGtcTMUwnjfy1f6fB3UzA7ffTRiMH3Q7Gc7KKMg3fdJ5XnKAXxBSLUEw7dVPoe5asC1",
  "key21": "5R27sRxuQY8KhiXdSzjWPy4gijuWjSpiwGwAgCoC6cFKCbAspwDW2KBBVydVBdZ8hAW5qKDfXbMBSSXYNJ5ZmCMY",
  "key22": "59SKjXFqmmFW9xiamo8rGdsRzs8D8cMDZjuY5M6aANd9cuT7bYyJomy7GLCBRbvZgzyn3ey5n3Pc3kdbz6psRgi3",
  "key23": "4UwJva3DYA5CfpJNs4mXeTyM6sfgKSpZ8oZTVz9muRiompVjUSK21wSnUfvjaffciwnnkbhzUZkSGsJRVKMeQL5Q",
  "key24": "3bsEYMnVxQgXevYVoUcFYnnAr7HfBa8q6p35doz7tFqBWZSZkSpc5ia9WUMx6Tb4m9sKfBFhv1TN7iX6ykkT8wJ9",
  "key25": "32W9FF2BPeyeA9U8CrSDXLCWfH1ArNoLg9S2Re2cQJ6So8QbZ1dJrs1aPVNHLRGgiXdtz7n4MMHFMjb9QitH9taW",
  "key26": "3XHTpKvHE7Y7E2u6F6GxospVVHYbPLLiiFtBe5qFBkrtjtCF78MAFX6sARUjfpfqheGLVszguToqoGDLxX5GLWDN",
  "key27": "TxLiBVaUg9CN5gRuN1rMojbrvaDeitaxf9RLWz7ok7hbGksRbpsADXJVkdbVEyDrPzWVbh75M9L9XyEYyfy7RYM",
  "key28": "uPpBaJnAsvxvofZDT8wvRgRFXgXkjv96JDxjJMNWzx9dyu6Sm785yyFehxtXbGZqv5F86Sf9Ddn5AZ8V8P2WVeM",
  "key29": "2MimWoakmwU61R8rEJq8LHU933oCx5TkEbGDDRK7WyMWomcgCDFShD3BhoFeC6gmgpSYMRLCLDL6WunWYHgKHyqn",
  "key30": "3ctCJf6WnWcoDLu4QiYaH7PzGr7Vqvt4hb1ZCemUFjYvN7pr1EH9TSsgpUkq8phhfbiLWQ9J48D6HM7UJfhHMy8U",
  "key31": "kAoPRD8zWtxZqiVWhfJb3esHoRxFkidZiomaf1bHEGCsFvjhihfnNDnCLk4ka6gysydcV9oNWGMmvgmA4zT5yDJ",
  "key32": "5yAQCDjCWPRMq1iSd8Y1mYdUeYZEuy2MyALwhmLjZjgrchGq1a8pvg36X1ecv5fano4QtKkAfgeoyrpErab6aU6S",
  "key33": "3GEGaZwN3VWfCZzFuqD68rPdsWokUviZKjNPzsoT3jgp7FyyBon7WRNEzZPMHSLdrUo8FgjkiQg1Vupfi2Gxptgg",
  "key34": "4Mkn9fo82Nxy3uzs2TgW1t4UJps4KuUGK97DZydag3qxLihRnqgcENH1BpmV2sqjUhogbjGkkCHVYfSPJY7e8K3k",
  "key35": "GmuPk5GaDceujiCnGNEuyuryNCC6TK987X17NFTcGPCyLYwMABerPmPCeJ28QfiWVVzRnkjXQG6yxW4AhkFTEkC",
  "key36": "2xXB6aUxx2XxRzVxF9tzugNQYhoVHH6CvPCrQZXo1HjA6JFk5tzCiZwVrCPGGQPTrs3Kie9pRZJFnhMBkgv3apY7",
  "key37": "2qGbMqSLCnMvFWFKYYX1Qp1pvg8SsJ2u8SEbfaMWPDuYbBF8RPAFEknKD1cZT8K9wK65dH6tYKxozps16HzKrdxX",
  "key38": "4S9ZVYhpVBDF6q68aJdveDy1zDgMB1D25qDnJDfXHzcLDR77fBxyX3bcdxNgd2ojJfoxRPfrwuWXrchMiKLSY4Wd",
  "key39": "57kT7BEJcn8yK6CTVyjFSqyteaR4Mu3gR5iw4SZFEJwoWHvGNskgrLm2EotQzdKtVQrvZ5AFf3DZn2Es1Qs6qy9W",
  "key40": "4aZMgWGbeqv2Ey3yHzoqHx8bR97RG12Pgh28LVTNXRaHMBLQidJLT5Euq5GfRf9WVmAsJATAwEKACAx963ZtUNEE",
  "key41": "3XNe56TLQ79jBg8ZXbKdBdHAVKNMkMW7fEV9e79aDrQ6ypbULLbAoRdZdQzZSwrecDT7rRFiDEz9VqoH91vC8Lfm",
  "key42": "2ryQRbLEVMHnFcyMxjoyUJoyR6rDCxVkX1E82VbbaN1BvkZp7GqCwtd4RwX6aYjahoHVKvZ18PvdwUjGE9zPiP9U",
  "key43": "5jPRoo6ege1UcHgUL5587R6hNmBasGitUesRNQTURXNMF74tMQWH3JRzeniyNffj87ufKK1uxJ46MGzZUAywLrSw",
  "key44": "3b7HmpNQr9C9BMud464jC86TZddRzqL8wwAKYpU6uNKV81zMKuChauc9xENioRRgeSk7LvDub9SpKRj26SWzR9Rg",
  "key45": "5m9AaMcL2C3SYnTQi5dttjk7ameCabgqb5t11N6UbuRnCDE7ABZg1CdgXAkpNLjHSd4B7zPihGsXkhG84SnXDGTL",
  "key46": "5fHaLg2DnR1D2Daz5AZVyehs9h2JMsvDGeSHqe7eH7yNQsZfzKEqqxwxCcAHqTzYJveiwchRwBVbYSpFkxdVJwSC",
  "key47": "5usU654Vbu5QQaVrpw2fEc5WspMqrxtWJBVhyJQTNLFAiyXQBwNTUmX8CR9DNTtFdY7NV8PsAA84Xtg1g1VWSAAp",
  "key48": "3qRGx3LDkXRLQ725jTXukwxcWDUe4Qp7LRFmpT966FUFtJp8JRALKrVrgfCpVyZLhgHyXxBpSbg47UkLErdjx5Cn",
  "key49": "2dUhYUVq17yuigWeBrJnLgekk6iXeo1gj5zB93bcHgEuYB9qd2L78wSxT7yYYV8v3YsdNkCrZpkLpcGa297HbKcP"
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
