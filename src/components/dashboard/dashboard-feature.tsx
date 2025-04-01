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
    "24tFLKtqvX9sZ5oxHGRbjPGZ4gt2owmC4pf7P21Y2UfWqbAKxDY1pcdrscb1Y12NUpAKZ5Si4fAvn5yrqXzRGdVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULWdUvYUFqhdaEJtad1fWhTf5Az5miiSK8Xfk8ACAtoPNdrCjeuBVW5s99F5pUNbfVQTDk8VpVGEzZzUgmak2WA",
  "key1": "4s4rfdnJbgCqJuDk5yds2LtxzDyxi4pyggqT1x2WnyRPBms1QWN84tV76jTBwBjzQq3QpyvGVPjf9UdkabpcRVx9",
  "key2": "2BBmg9HYcGpXpsJM5mX7PgSzs3irHGxzWHK9f8mB2bnW2KPggXZ4RguzvX75cHZSKinkSD2fh5D3Yx5U2z5ZzeE7",
  "key3": "2SLxEsZvzfJVXVzVPC4Fcw8ksBi6nTneXpUdUrZgsXHGtWxinyxZSr9xRzhooxByyEELwckyVCyxBKcEy3HLLtrg",
  "key4": "5EP4bi2S5TyDTdySx7PpWdsW8n6M9QSDL8igeUUwL2XZvsqQon4zmfWy5AzUUTyTr6JPCtcJxeXhQaQcTyWETMkx",
  "key5": "3CaJiik32WD1CttbQNmbENrZLjcwxsA1NuFscbLK6zWbSLx2ysbXYDGfKQ2kVyHQrYeeBDgLBdJbXiAjArPPTCqc",
  "key6": "vB4YJSDQG9cDYwXg1M3iKham18pi3q4rnLSo4K1DhNVjEKB9iV67bM621f1R15pnKGfYhb6HccVUZKqwNcCzvek",
  "key7": "3n1QcTBuJakJXJrxh3ntPNu5G5aSqy9R62B9uyqV7eWxxshAvsHu5rYgvYT7cyepr29GWY6T4J7aZHPZaQmiZfqg",
  "key8": "Zh9rwnCu1jXJzhDYKdTRxZQ1YPgAWcERM9WLM795Jv2c3M6yJZoyUvtZLhA8Db2c4NGqWdT8KGKa3YG4h5iXvoH",
  "key9": "79USDxyJj3DkVch8bv91R4cS27nX7xkSSdJLjJ8k93HXpj5eEoUsexwSyYGjwkvwXwVQozKBHSephirCnP9oeqD",
  "key10": "5BbnXzCFCi6WiLrcpFoRBUrKVCBuv2Jp8mJrfZzqVqaPgsaS93fHzWEobX2QqFRsY3ca3nr75dnjxCVrzaXQ899Q",
  "key11": "T4hnU8CHxpMwYaq8uLxBFiW8w7pZMiTFGRkNYjmcZC6xojtq14L7Gc5YHFTuEiiez9eJuEJVzDnpFtpWnDcvBfj",
  "key12": "27YmWaNbkcZiQGnRTHxvpfeP7usrh5xfCQb37YHZucfA4jEsqNZR8sn6ycJYM1QdBm9UQwXFyKAHmY4JtSE4Qpd7",
  "key13": "3fvQhuKu7NVBiDKp89yev9HB1LYndPJi9KTbBF8iWzaqVkbtxFbytZcuY3aGXpRbG32NybUT8he2iuzpUcGmG7Az",
  "key14": "4LnezyCiwbnjucnbLQwEUNY91vQvY495K8U1P2nqVsGgMpzhFJyw2aipTbctnH3Cp5k74bH3y3ECfRwWG4vdKWNa",
  "key15": "QCLVkh6PESQX2WfJJHmi3Jyhj8U3AYAVBqVPA96SoFUGQyP8PjDEmL6bJW3g4uZrK6FJ6KaJyDV7UDoymRZxshZ",
  "key16": "mhSpQRWjb34uZXYcJsMNfq763CmUh1YaEfe5Qz87HXS3JvCkQdvtxVyaKVisrJyQe6HHjGGg6ETrWW7iJQestGH",
  "key17": "5b8xFQTgZFHoQos6bei6dcL8ddazhachfvRcSaxL3c9uX1iAobLZQttBy7AxQqzrKNwRi4uTrZWCKZsSKRwG2kEn",
  "key18": "gkGAyAtHDh7omWZbYPZLKoqSKu9Bzev4V9tARowndaWfj3bejQXXJBkfptCVidu9aJT6ihv6PYmZEdS8H49gk3n",
  "key19": "4DU75mFvaQUz7fsv3TUMa1pJQPpBLTi4jhGh1ajAjfnKCJccuo8A6SeYbT1NpHaGFZawjkJkrvwz64sJdKDyuPRa",
  "key20": "5rtZNpmxV8sUJnbg9LVppzcuVj1GKzC3K1oFvvWPFEHRqPfhuX7uaE2QnD69i3gEWaj1FF1FQrNZgozopoh6chSu",
  "key21": "eTzsu1DUKU4VPhUWP4G9KwHSX7XZKvZt89kkEnF2tLCUEkhcYcJqD4Vri38XKi3i7KMa41VMgRhhtyWdBBFKkuv",
  "key22": "61gmA4zAUnJwfSm6EQXt5k4zGwmEv2go2Ywhbkghtz51mnUYgAG2ms69eByR1sp7X2fvAF2JFA7pQphx8XCjAL7d",
  "key23": "5rAGnqCsE3W8GaMg58Uu9qverd94MNXmNEqSd5RKdR8MtAXMxrz1MVxbVdbW4eJhuav9FeFZaDevuyWEnL8qUTAa",
  "key24": "2jsKVv5cK1ubnYwNG29yM31DAU5CvovxsLUKpzja7F3Aki6aUFjTwmCbi7n26mwV6SFf51mHSt5UdVXP1XcRiBzh",
  "key25": "4qF1kaUFzF339mTsSBYpN4dg6GxCS1DpoGFyYfHLGJU5ksGvFxdJz8bKrLoQFdQmLV4HXm2HGtSuXTNHAWS25jyq",
  "key26": "3tTgzUH3Eo9vSgQxgtja1TDc2QZQFoqtmBr2GPeJSvexH6Qbv5HWEJ5nzK7mmRqfwAM76kN5bXWrMahiBJzmeAUA",
  "key27": "5K4aF7iSFqQ16FCKLmbuJnJKYrFgcZkuvZnAsrvDZeCcT4aBYE1c66apUvNQiU1gAzJ3uWkvczzRcjWCg9hLGBfq",
  "key28": "2eMJtxE3eS6dRUWD4JsFVMGKKrL1E5GcZH31QVAuXj2oToM9Nko3qqgjTD7DYmH6FGZ3NcBrmakEHcMPhkSj7NUv",
  "key29": "L4dCJ126fBeAsxC1jfB8xhBWUtVrgFw8QaxeoeCdskhwpW2uQgcdGuHk3gLj1e2mPBpqsDRzsL74gvUpqzExqdy",
  "key30": "2rESqjpDRosnWU5eB98NeiXSzdxcjBv4pJu3cqNVbY74vuj37hmWagjivoCFN82T1ch2wpjXvdtFivNt4aYFnt9Q",
  "key31": "4g2MoxyBQXTJypSVGEEniiSC7JcXnva2j12jrUF5fG4NwDN7wxqSpQxnftjANxcvcFEMHR2Dvv8xZXnbe4G8wXVF",
  "key32": "3ug7L3wW2o44BZaaMbraRpzseLAL2FmGRV2WW4hihZESBpLLEoCqTXTuZLnYyvkaV7vUTE6J3iJxrXzpGnxU5k9Y",
  "key33": "xPofgVrswoS33KfVzepAis53Due44Y87apPvTWAotzDzcJUhZcRr4uytspzdaegUpJUWc3xx8C5SdYA54af1xzh",
  "key34": "3gM4EwSszMBy3rhEti8xqpEwMg5BnVgupVr6pvgXnD88cqb3fgohcTcLJPbNBq9hdiWsgtsXQSo7Dg1GmwCTrcn2",
  "key35": "656gr8YGXMsKgns593rKGQfcUkNHqAgWL15wBUxKxFFj5CGrBEdM8LXQpF6SBYhwJgUBMhMSc1DGC4NGWPkkeZAm",
  "key36": "2bWXZQCRg4sVcaAxEEzwQcvdxga6MwtF6XGEjFX8LV1WoPKCFrYVLrn94jr5LphyJoyroUiufivLujFXBCC9eRHu",
  "key37": "4AxtVyCJqmHvKBVWAxVWMTNA8FaaJt6QDboZKMgBRu18c76UYtE15Tz9Qt2RCBPNaz65pSjbSfZY4iPKxCBExNGe",
  "key38": "2tQeLbE8nuM2hZjw1kBu8YUQ3o69HwhWcPHaLQb9r8aqAQEowaJQZ7yBVLRa9BcsZ14UtgW3oRb23kUyGFgw6Aou",
  "key39": "52FeGGJzRJWxZJbkXt2cBFZsNNXdsfM3ELaoark4tNDdur5u389UZiCMJmUPMJfZE8NoAnexHcgmQhjYp3EiMCJ9",
  "key40": "3r1aAHjiCvXYH4gGvXcF4v7p2cVwuiWggGSeNqVxQVREAXBYoKxtoch6jyQFjEkR6ZGyriWW6MNYBQf11whtWmBC",
  "key41": "3miZEzUo8dMJdPjEwuvBvkxeHZYycXgThAkKMi2U97FiKFDscvDYP5su83h7YxCuF5iPdbuKHEtt3uzLzq7z1KKe",
  "key42": "55C9fiBrDozXe61jWcC1EAmtz9MkqpRAJGCWtBzMJx3Byvv2Gxm5i235WGVFexPVSZKdLvBTf3Y5ZmD1yZbSxL7B",
  "key43": "2KsffWYGAiHeL69NqRQDhYNQbnyKePMvVpTXbdBU5WpnPv4vsn7HAggccr959r1XF1r5ZQxNJ1eAM8Zdgr17JFmb",
  "key44": "3g8WsSBYuhYdJPxCD8Nj9FqVJR9ysdU5c15r9dCUboAhwoeVzDZB1hRGy1y7PPTvFA4SJkPiKqnxowHfy9cm6DPV"
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
