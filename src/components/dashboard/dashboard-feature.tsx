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
    "3Vv3S73LjxE79puVPZrcMZccBW2GL21gyNa4rn8r3jb8pmHvUbxiVxqqtQhGpUaRuGvfBsgzV2cdAp2bT4bxZ9fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmgkVZ9KsP3zRUc21dh4NrXGVSzAYD5JTB99AayrvqLd2zcsUNmb1uonjXuiPJtTThWjcxW9Kw2xH6R95Vw4mR4",
  "key1": "3ckq452VuZ7Y8FA1Z5H1Q4piggFfvVsyqbPGxdx4biVAdfjekzYYdzR8dm3HVWzSVVpXoBLW6uLRLQeR7gogHCNa",
  "key2": "4Wn6ppC6ag7rnFbvTT8PvfqxN4ZDH58ZeDwqAxj4tP3qWFtFrzuAGBBVxREJwnqRsnCCYTx9pZ2JwjZKRyjYd1kx",
  "key3": "3wNcpf4e56Ve4WuKLyeKwEYZnGWxSB4Jgia4sG4oMetfJuh2PRdwAEMfh7Li3aHHNko1ih4KNub2ZY9EA975ibsj",
  "key4": "4ZTjWy4F9afPDV86PHN7ZqQM11p1gvpzYJD42uButJ6mFnWyu5c1UeLiSThdhkY3g4VVbsxeh2rvLc3KfAM11krq",
  "key5": "2XwW1MoJbW7vezqpQwhBsLT1jXLaH7dWxexQfL4FRnqFCbgUWxWh61pxRra6jdHDuMfc3Sk8ZHemX8Y6xJRNEivB",
  "key6": "7nFGJNWoiH74mL3aiWFrj4ZkvRySDsKvj8GDR5HVC924YnRgVB8UHVv5HKAkkAxVe7wRi7md83SKGz6fGfm39Kn",
  "key7": "3JuNtJWFp5mTo1B2XqBeZhJk646iwtKTyDJLr21AXDTbPTzUA9pBnofnXetMzUYizJK5cFdCsUeMRxd5i9U6FiMK",
  "key8": "2dgqjaiR8Ch2vA5WEt7qzUuDvRZ4o5B9zLyTez35HqDzHgaETif6oyDVtVcK4XCaEttxoK5P9wpmoxQEE9ZM5vkC",
  "key9": "RkbHotAnjCVvqHuSu5wMnX1uofPScvhYEXHCk8RRH3sVtMrodyyiAXk1A4xMotSL5JVRCHzqBygY2qRnK7jZB5G",
  "key10": "5DD4ZmbYmrpgQoUnDT5tBmroi6ZQYbP5TVGhSUqtNBJZbXaXyigzJh1L9bRpWnHfyX4sCdnYqd61pkpMwuj1FTK7",
  "key11": "4RBKQRWkvk4Ka5KaCdGLf2rrdU1yQ3WPr1Sb6qc9qb3hfHeq1Pzg6Q8fa9QLxwh4DF897vtPLqYBufKy3nqnHK1W",
  "key12": "2UQCzkYg8XTZdp6neNLWfVLUZfvGjfm85y6TZ1bHQk8mtDfptm2mvVHht249SE4tgC4vJXTfFbEMzFETFYM6qCSB",
  "key13": "57ZDC8pQezSSghjiyJpaxL8UqouYuAFfZGzkvNYs3Skw8TBq4X6e7VSUYCr3n3KXRpUBnBwuBoedvDhmXCeDqrai",
  "key14": "5eQv7XmRoxunBKDJGtKjk5H5L5hyigkmKSP9yNZNJBPEaAE7e7GoXbmr3xp9aDhQa1FoB7MAQfyoLgFj84nJjguE",
  "key15": "3DPBpSpWeVc4hb1mtgipVyt4KFY8q3BxL7ZQjdmY5VWgmcbFGfh87gR6BotbA8zHyJe7HyNYRqhFAJ3iz1o7VG7u",
  "key16": "5KUcvWi95MBi4FRayRekbPaKQSV4RFvU5aEQaSVGy6nYavbkpuuCCKBpWM6x7MqzuMPKFvNqZ3nhXae9nUHx59zn",
  "key17": "4MC8xZGEacyNpE2PQHecCxKhmwJXvZuz13mBxUBPSPzjebEZec8MMmqPXqUCV5VVbgzadYb5AN5U5atz1VsC3rXs",
  "key18": "2u4jggFJ1CDp9LmsDZTCqBvjrpkpbgDQ4ERebJi9QjjMhdqUm8ryvrRQHvijVqjSgEy1H3RDUjdTzt3kKD9pzva1",
  "key19": "4XeXTeEjHAtJmYUiEYQ3eqCUKstmhcPpQmcFk6Zpxj4PAnXnSeJnejp164M2faKAhpGe5ULGjtNh2rTLEMubFKAj",
  "key20": "5nJVxzX12RQvqxbh8m2CuPrHfQGgQLK85JrnrPofv276ky6uLKK3ctUoeYozXRnz1V9PwtUtzdy5tPiJqX8DxYPD",
  "key21": "44k3cHRgYYWCxtK6iCeC1M5xZUWpZsi1Q4DUWkaqFxMZkPvQEyKr9owFFNc3BKr1qFTxQgYAETB4uoVMVc8AoFVJ",
  "key22": "4Ge8Bm8Y8UURf8Eq2Uk174CgGGa2S85tR26iPezC9Ppx9o1ra6aj9YiFscpPUDjkC5rn2S9syfScH97cJaZHWnUC",
  "key23": "9qHrEFb8QCsBsvF7tau67cC9k6T3m9APi67URckgNGwbWRrd7u4iaHmM1iuTTSF2QwjkEUPjd5wt3x82GxjFjdU",
  "key24": "2RCKqsr9WnN9Kom9QYy9DfZMAKNd1XWfhjLH1qjveGzRVfwFu6JbTSwKQuHyz4jqHUH4mv2dAwaoysb1MV35xp1P",
  "key25": "5JCGWiGuWPX4W2zEN3JNthxaGFgC7ktP4JthfJRHbnaCULhjsx8VoE8dnSxMuRo6kdPp7Yyqa3iVyrrhmCYxUwSw",
  "key26": "3hiM7LjwYDP98UJ1mRyGR7tr36ooPEprW4T2WUPsg4vcWq32kQ16Bwiq9YjednJ6NA3L9CeTuwbZLUoVhH3TDZAA",
  "key27": "5WhH8ysyzoxhUZfvcZJixjeWr7kSF3mjXMXb5PY8TaXGk4tbvDCySTspLcrA7DKq6T9UCMcwn3WrDFfTukQN6EZc",
  "key28": "5XkgkHRrmecbjLThwDPidEsqAXUaH9RrSYXeyKRoNhQ3QZes1eKZJJ3HfPU2ZrDk5vZMVbYmzZgnt8frfhFzyrPq",
  "key29": "21pSErkBthN3qX9Dsg74ETW7QirE6TkQ4rLka3hjGZ8wpq9UxrSEVHA128zr2AdC2d2DXjvVxgFDY94JPXy7iRd7",
  "key30": "4wQKahxBhp5qWK5kgkMtMJXBpSXodvBxQEVYjtoQFc7sazwvvAftYVpqwGr7Dryia5RJFdEQmpvPijKuS1fc2WUy",
  "key31": "4fCywD736Nvf19m8K9unNK1AqC88U72aA4K1G4iQRKSdiAQSSD1rcdmZG6SMmKe1G5qZG7gzdPYqK4Reo44vF3wz",
  "key32": "EoUZwUU4YzykbDjuL6ahrHWohE8PTswFHnm7NvVz8fo8sFUwoiqmanY4Yu9Y1RM2iTWDsmCxVqXFR7nuQfZXVsP",
  "key33": "52PQKahHynfi6c9r63Up2QGYLNiYqQDJ5vGbK875aTkc9DCNuZQMoKGeozEWy2wSDn4jMSVffSS8QP4LiP2hPaB8",
  "key34": "4sFVxmR5rogTEGK7ZRQQ38h6dfkiueczonTE5zFruRXw4HX1XNfJXAyKa56bPJ2PCcuZT92RJ8cvbLBZKhpH6Dfh",
  "key35": "2FPY9Tf1ZvQXPnKgA6CVYThVNQPuWWdMbtp2UBAyo3vqfEAbwnCLczWNUZEzWMCTGqPSGRCeLhHqkEgQZzuwkSFB",
  "key36": "W5X47ot8a3NCpKAUZoPi77B457whWNcYbAhRzwxMpU7N3Ea7nuBLkcYKhvABbHeKWaKRwPoMjgBkC32heMmezCw",
  "key37": "biJUSqyqSKfFYQesNkBpt2Ji9hq22aKfQbycAAcurRbb9FEX7AHaGnwBRoh1i6ihPfgEhZSMo12aRCWprMseDzG",
  "key38": "3ZRVJeX5FkR2s4rYrvW718t7qxFNnYbn2BrL7nvtzk8BT8cQ2bPHJn1Tk7XCHuiHQE3vRiyMq5FyWn7JuEHLCoqN",
  "key39": "3Fkj8ruHugHo36aokGaqiKf6NefEdxrfGuWK1pj5xRRcSDdMq7MvXS2uPdg8pFzaMiJvuZEwDZmWHrL8KE8S2RUN",
  "key40": "Ph89m8JK6JL1QAHzNmxYfdwPf8h58RjVwULp5oNHYbbyKYTx7xjikRkkoPdXEf8MM32R8SXpv4fHQyb97MsXwc7",
  "key41": "4yuFm4Z73jsjhwMQrzctK5Fvp12xeVfFcAfx9Htq82bjeCwa2VkTFB5gjY4XrWeEqE6VAFan5w2frSpWovBL3pXo",
  "key42": "QBnWrLETssBVsRgQqvngUDDG1d8Kz9KQewC13ERF4T8ijxgaSE9HQuMaQhLVMLzRaXrezbX9mvyeRacWvx9KKaW",
  "key43": "4st5zyPFQ18HnYMEie5NyaTG8qdgbJkaz9LcVKwftWeFxKQLDRNorkidBivX3APKk4nunZEoZiFzirPX3peQRYUN",
  "key44": "4mFMHaopFsak2k3E7kzVqNqRjGBALgejrQUZXWE4PkarYSLWeqdpu1b5heGqoDvedpmKor3qs34AiENKybLiJkia"
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
