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
    "4WmnPGanyH5tF6GmtwrCGUG4nwuAJg7UMsfycVw7r5cvbma2gn5Q9PebsB6bEknj5f13yYXLrMWtZ3LVhybdaoAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AVcHtqFPje8545mKRz3gJyxpnAgGJU4rTJu5oKyBxZRY8umXbfUzEWwtcjT6HZv8PVrKLa4fWUkp27rmnVTJ9k",
  "key1": "fUUf4fiWHY5Qjwdz7EAnGy22NjbPpRmAe1kZjJf5cdnj6xWDrzBXnwiSnTxBf8HYbg5n6YyKH436zohyDFTegRU",
  "key2": "3GvgC9oZXeYaJ3PHcbbwstryNnRmdW7EvBHvuB74R7o1m8zAfcyP3KRNNJwijc7N63TXbWv1UYfcg8Gx8JqNaCbn",
  "key3": "4dsdTdLsBErW4XsuHuP13KasKPra8VdC8vJFqbLndMyDssCthmYrq6ADR9mvwVq6iiVhbh3MjqS4cmz2kPd3roiP",
  "key4": "aad2i8yMsTVPRDDQzqRrzdCyyMuuhhKQXV5rfhEJnQviMivPZoz8jy4DhuyeGkrso4Bnj1dtyiC6GY1g73dU57D",
  "key5": "2m28GPauRDZnDNYujjz1XWs3BLL4jUdLAE4zmG3BA9NxjE8QhY8cXf8VMTNohPBa775emtzL71JFGCWAmpNSxF6o",
  "key6": "2YaANBb4QVj7EkxgZ8sWg9nmhQnu37K9g2rPrE5Z33hSEcPqsbMAW7NwVsctLkoJtekRjHvVpxwhE2qLUPTJoZ55",
  "key7": "8SbiWsGJS1aDfTrBSPDWy2yFzYb1uxCPGYLk3CNLtupB2MMHHscmcZXS7aAT7ao4Gjow6c9kT7QV8454N4TUQKZ",
  "key8": "x1okWKUA45Gvw8Dx5fUHTNcoPQZomtm9eBSidx7d5SDGooQMiM5nqUTE3j9Q8XwZpQwKdxZA3rr3GJ7QzCyENBw",
  "key9": "2hYEsDcHhnjBiX9ECtDorm6iQ41wGYhF3gvrkqChooyq3cfmCHsM7atg6NZ8BTC1WtSkcgn1P2oizxz6i5uH7ewZ",
  "key10": "nDHyi9HVnKQg5dz4cxYNXkAC9b6HodMGkQevoGnyug4MQxMSgownNX8i99YAC6FQT5UCz9wHwKKRquMqyqKnXxz",
  "key11": "5t8c4S2o3nBnp6XhvbDgrfCFtxw1VZmUXJk41hRgMchGeR7bq9Pcnw4ksDemy37ak8LYxsyRtXy9PbpB4HU5mgAS",
  "key12": "3hPbikbBXr8f6CgAzrajpLjqnXE6KZ9pTc7qeUTvRfQP9sAaXDfrZKETTjDynnSyRDeSKjEN8PLN5AyfrLHy5WLw",
  "key13": "4vFQ74H8JcVJKFHuNGr5gp8BTLT7ek4tQbFejyL2qRhRBWVtENKMSZrYHqNBdDiCeHoMNV2LB4tyJTPQq3NX5JgL",
  "key14": "jQanjfmXpK5HxszLeR4rqiMVrYcn9TN6w9SDFD5AaCPNqozaCHvcnLijGrZygqdWVD2cL8xj7XBiq8DeqDEK3vs",
  "key15": "2UtJnL1EesGeCdjrTRdBmFFdCyRCozanqz2d8v2qRvLfja77G2D91K3WL2EnUp5oVYcmF7GQzEeCAcQc6eEj1MpU",
  "key16": "64TB6xYKvmqfzj15r7zrgmXC9X4QtYbT53g5iRdeE6WL8vfMLKGwuN34ZieUrT1nNRbTZk4eJ1HP2uKot2Kj6zcJ",
  "key17": "4DP8gRYZBhXjG2dusmTDbGg2PonbgDabzvmAENystbPNadCX4VHXUPSJn45xxbbYtH1H8Ng3wdAPjUba5Na9d58n",
  "key18": "3AAHJLuLD2FakG5eaqCz7HYrwtR6oHx1FGQkf7uVYHoDotEeeojKNWqD18DFJTdqFEcRqqZHDvaynyr58y6booXh",
  "key19": "3uW4WAdAS9fGGYieUzhPMj8uKBDp8N5sMRsY9z3mTrJcJWuh4YUwnGqvgYXdabUC7EVrXhMWqELAgdKGzAzYSYXg",
  "key20": "4m1UknoPmh91YqKwxNYnvNTiJxPBtURS2x9VCG1346EphvQbyAQLA9T44YxsFKKZHUxFk5SsLAqNwBZptSQNwDTg",
  "key21": "ofWexySaSMgkqoHVJ2mhCiD8AJyMv9JXdVpqkXBm8wWFuWxueH3CZUpsd3XAb5AG9JUhJxNhDk9dgEG14eZ7kzn",
  "key22": "5VrosxDyqYiuS7mMbnPEjBJyP5VgYtFuHrhjogqo9T3N8Z4szzqevP91LjsJEuu4nCGoRt9LGo7dVeiyb43fba7z",
  "key23": "5eDE2msX7S261TRCdpw7Q3qxpKv8KZsaN6sWnG6bMoPo1jdwJ4wBKATVYmGK5G2rnoHMm9C9RWdfAbCVRVfAk6qX",
  "key24": "32wSk3pzJ77QLyK7UC5EP4q635VbjtJgKt6koEyn9gRLhwrQv5S5BN4UaWCB5sf9F3E72iUs3fSypJ8FGixMkkqC",
  "key25": "3GRtmTNzCFz4cnRfqf5TMVbWoGTovzLZTvAyfjPhfwGqzBxLgj43ByWDTDm9rgJva2zEXgezDiar8pxYwnjFKKp4",
  "key26": "3ZDAkuhwjuqvCpPHTnXAtqF1ieYAasTfLGXGBq3vPYLBgHaHx6wwX1g6qZnyCckYmGyga3EtFyvnswCcPJNP3dEQ",
  "key27": "28ZxsuB3c2zCBxkJLaeU21X3uHB2eG6uJkJZVn3ZsTzZbJGm2m5MMnZvPNma9cCNMhhxhMBuycBuFxq6nCdkRjbY",
  "key28": "2KSNTn9JCys4YYrS2MdY7ewZkazgfJc8QxBT8MpTMwEKpN9wUL9bK2vakUuPZTfb5ee64vTr3Q7Gb6TCDCBbkaBW",
  "key29": "5ZWLhSRLNqKWZ6hPvVfWpMctuvDpxzm1GHM6VnYyxjAbK4DzRYuC1Zy3YDmtBrRZEQtJF87yFDdC9wqPvapskKRi",
  "key30": "2jgFdzJmT7Zz4yikdCLSWBxtzmsftTtyWt5yxW4x5rtA8PpUqWHAGUNcndACAvZLnjZ1PUHc97MAX7Gc7YLsmat8",
  "key31": "5wJTJRJ1WMUq9r2vaTE81faczAKQifWPqEmM75ymt9VyYn6bo4LiEnEHMCSa43vsJsfDvC7f6QZzwwRGqJCRQRDC",
  "key32": "4zUPNnaNAQUrVaqiXVyLFPynVt6VwcJNx7HGo9rLsfnPt8GNE78mMDjdnratscLSScqPYE58TMxLYn13eGP7AZfk",
  "key33": "4cT9uyYufejP57QAWc2PGPi44x4akQ8Fb7u4i5yN55f9wfLeWYW4asWth49omEfgi4ifSuVXpPvrPtTBWBje9x2E",
  "key34": "3fUcRTmXsn9FVxjgb19Hx481a1mEqwAj2goiNRNAEk5Sk6MMtoB7ekJ7YwJELyS1Cnw2HNtTNMp54jQZmb4tmHME",
  "key35": "3wFyfMn93uPoxTD8D9aXTa3R47aFYTBAvpiiyWnuBJLX3LHSsYyqTUwydAHdLTCEBVTLeF2jK5eAarQR8RPZEgyu",
  "key36": "5E3mC9vyhdc8h4sXbkgzSQUQdtKAFd4Bz9gsxJXy87Y42M2PZmAgLJwUYTCtmkdTpw8pC8tPZkUpYNbRaSCxwoXh",
  "key37": "4casQiSu1j4Jv1KnGzhsgQN8KPfedBbku8Pqs4SdELfELopuaiX17hCa1StMtBXq2ivQtyvpbRpJY8kqJR5Dp8r8",
  "key38": "2jkTUrnKMLNrPsYEqJGRTBrkvUEiuutFZi38b48dyc4LScLyDNEDj4SCCc6wwRPN7aHH65a8oX7H6oLnr1WuRta5",
  "key39": "2u9JHK8FAnM63J9p1JvXmpPorrFBqLrKzp2B1ZzRKDysuuNP8yH9MbFuAqE5HNtfNQ1mcs4v7sH6hkQ86SEbv9eL",
  "key40": "4adKDVXpwi2EcV7QhMnxi91JP763t3Y3cctC5dSbYWuyyDpHEAoYjXqeUCMRCXt5MB7DQHKKFgMg4tjM9TZscJcz",
  "key41": "2PAGvprEnjT4Pr8x1seiksgqSvq2XxRryB4DCdpwboSPwFvejHfECp6rnEzkbSTXYMoEZ9Kmjdbb7PmAxDJczpNM",
  "key42": "53HpEeZB6JFDKdDXaGQdRNybVY78kWoWSycUNHT9uNWcXFUgChEACqDBu7tPh7mvBc2mZ7uUuqDbc8hytEZN2ybx",
  "key43": "465FPCYi8J9HCEFFHpt3QDt4TWfReV1nPfcZ4tgKcRgRKJGEbpH8Tzjpqy47nFhf1ciR8pZ7da8UfpVuk9kA949Q",
  "key44": "2NY7FhhFHC9E84zosK7Ah1bGu6dAde1mKZsgwJSktpcs6a1dZ9VDk1BQTmvjMUocxm4PrrnjUUdQojfGUTysKdBY",
  "key45": "27j3i1YBMfJ6CLso8K4DLeTNXBNADBNfY8vesZsjPxmjPeahqe5mJq2ciPWuuWPddhxqRMgQL9jkESKYxRzKJDr4",
  "key46": "5hhRN2ubKudnpX8zfMuGbVpeJex3Lqo6JpjUD48uj2cADHpFKMQwTta5FEdv6QDpCAbyoG2pjYT8JsqquDmAoPXm",
  "key47": "4x2x4Jq9opyrhwd67bjfWWq9b13g4vpenBhrriZtgWnUXaSRP6TQ5AUEx68Rg1jg1qusZMfv1WF7hZyCYhvA2JTd"
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
