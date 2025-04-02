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
    "2WkECdSKWmRs3M8bcXsLi1A4cz3q3wZEgGnXCwk4zUr8Ehh9x8RuYhBP5pKkVwB1V4yiZK5acuSCVQMnzyRDonZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FhbNfKFLQAzUZSASBhd3KbZ2WAUunkWDE2JBU84wbET1EM35J5x73BdPzjKtqmSNsy7A4aftHKFg1dS437yinhs",
  "key1": "f8pLBhXmCMzN73ooYphMEBqpnoiDqG2A3mpoEuATAo3EovMARrQZyEJraLodA4rrnsavSKCNbMdDYCxBVotxtYD",
  "key2": "5wmTkm9qChZiDZRjxX2Wn8ZYfYHgn8NPuE3XqwBJki6p5sdKx2deFdoMJXHvVPFNxwobmyxNMDupGkWCHeyB1Jdi",
  "key3": "28wiTS99aW1Qcj8HYHSN97WjDRcs6k3B7UPH5dVpNKJsjHZW5mf5527cowAzxbhzcTBZ8jCjLoXHNMngF1K8nNxa",
  "key4": "5NNbfgnnvbrHHAEe9ayjv76uShFmH58ZaiW5DzHPmy9mSLRqMSXehRW8dfSbakfZxqDQ1Dv7v3oxkdp4yXnHL3jr",
  "key5": "CubF6oDPMyJ7xhJK7YimExhbSo1xhkbRs4Xf9hBJ217Zyc84ybinnNuueWhPciLRL1sBZzRiYBDReyGdk4GjTDp",
  "key6": "3D4wJifFnyugiJp43ntKa2DTgSUY7RduqFfg5EzHdgUbc4NqtT9cT9vjXrvNRpvqZtcdtd4wndAaMseobSaMSA7t",
  "key7": "3RUspe8kHPKJGcqB2SJpabmbWtpbXDxuGkC4j4VgevWf89TwNFNXEuTZgRNivn5u7yDPQXkBcJS2BiXrhCCEUPW",
  "key8": "2KqbkTW2Lvk9NZGCRkp5nCP6mrDjSYeGprkSx1yeUfSbAoZuBpYBuDBZdRg9wwShUZgNGQutoHYmJMjnQGu4aKNU",
  "key9": "3nuWU1ChbDCYJVGbJNvnmRJL3rV8bocU7ZSVQTWCAMR5bs846sRp1QVgqATKw5W8aP9rCZ6oj1DqoU1jDmn2ug37",
  "key10": "3E66Y637QvpYdjcqqHKsvNNbvXYjGR95zUjz9XxidY8cBBwPTYgtAJpRv8KUxL65StnKfJ4T11D19c4Fk6x655b9",
  "key11": "QmGuzymN6sWCXxh8S9BuJMi8VNzWsuN9P6AJGZSVxVeM1GySn39MPddQQDSYRKahNchtvmBQXTKExHvUmAHUyru",
  "key12": "2FbdBKPBctRM131iefVdFysKVdVMsFvFHPfdn2ZBBg9NTS3b8jXzUgNTUHchPzwGwrovieYRD1EG8h2JpukhEYNx",
  "key13": "1E3xNjjgyxboFmGnULaCnLWAAqvnPRBTVQFEEe3EZ8uMYssEVhp9oB8yzLxztjBvmtm56qVTTNkVuUW52bFUoPR",
  "key14": "2wmFo8Arug2qDkWsJWUtgX8Ee3uhp8M9cnQctHyKA5Ytgkad3TqiPmU3BWy4HXb5DSkZ3sUdYqjEyPj6jugDsZMA",
  "key15": "3djLJLx6BxeYrB3n3NE6eBfQe4jpafNWZ8g33Z3DoPztbDicpDZQvC9dPeeBqNs9xse7zW1zZoDCfbXtXvBwFLgB",
  "key16": "2AZ6KUMw7MwTNNWGwuCFagJ4o6dFWuMkDq6YFRdCctFrrp5rTDAY24cFb1BPVnWmagqsvsjN6Md6dZL2tw5GKuKY",
  "key17": "swub2m43r3KZ9QQYuR18xwT3HayYZvN7HdSmyCvQiH18z7MLAXY3novosAMbrrieXZzts7mrKD7ZYH3LEhkUAxr",
  "key18": "53ZoSz5z4B9nRdLm9DyiaBDpp4qYYh4XsygpbVbw6qXAUWTng59iwhLyb173NDXsUHwWR8uD6RHuZn5ZFfwwaReN",
  "key19": "2NRhzGmsR4k8hfvdb3Xf1zobGEk4hLitdeyNPwRFUDNzPzjPj2UUoKGt6TNQgwwUmWmGy4gkRjuwrUTcnPokmzZv",
  "key20": "2ynWpa9AviUTUg1b6V3eH4YGxURTftUnyJueTku5LPDbBPmEpuDbi2RNeUtzwwmYzJbZRuH71FEQRB8RNict9h2i",
  "key21": "5MF1baqwpiw6xdSBHwMS79dLxXgUvHgjeG3TDyhGMU7f1Xc7ZtNWgsrh72Cv8uimr1UvHMTGqF3pALZsVxh4jhuM",
  "key22": "3atgKpAUZCqnWhrKsniHrKJhUDYKq3MxnVPEdWzLAycSqsLhYAneMn15EHs6zEJsokXhYZrK7rytRYz5NbXRodM",
  "key23": "2D68thEd6GUKrNF83QfFu7XHLSU5zcZNPAK4dgxJHCMGB3siYMDRPWz4mRybG3TqCV4nD97XqEcZMdCbWXWEnZb1",
  "key24": "38YaAKC5csrGjmfPyaUeaaznSUwwmCFsPkaPyJJv6pEiwBoxz8ieEtLscDtys2rZPS2MT4hZkDDuWGpvcKDrcyuo",
  "key25": "5VVBQYHpJZfz88pzufxeGdpe1DpFmHG57GyvRJ67J8iZwrVC1cCzQjWVVzeXZnPNDGT1Aw4x1ZRwce4DhtFBnYGt",
  "key26": "5LapUbwfuMoC2tvqPSr1RqB3qK5KG8AW2BF4Z27jzqfMEoQeQTZyWnmYox5AXHBTYvchCBtb23FmWZQqTCMbwqaf",
  "key27": "4yNc8rAXoaEX6Gnt1WBwTS9TaTqvtykHTXPrPVQtSBQpsd8Y1DgJqhvMmFFjzpB3tp2un6PEPcyMwKjWD6epnMuU",
  "key28": "45GvEgvbmM6X9mSa98oa9c1vgVn4U6Sg2NkAkXa7kNPD7Q7vqiFYCzWtXVuHdMKvDakMCFdwRBr1WQ7gnvJWzg1E",
  "key29": "uQUuZdKsGR5G4ACnN3VP4kPVJgjd4NJarHZC8gk6VW9e7oRoy7ARHBMrRZeQiQDYQEqYreuhzbkt1QaunywT8pr",
  "key30": "56DZMyVpQcqfz1Zio6HB1AreNBDyi58JfXYsv6BoPMrwToDkaovcDwVaD7C9qpj3H9VXP8dEGB2vgdZLp3LB8QDD",
  "key31": "4gR16rRLvMmcEwVdVw28ygsz4Axq1f3D4n5NDUsJ5JtGL972LrepFvqAwX3k6qgSbWVaDJkEfstQeGenzzwSZtHp",
  "key32": "3KP8vs14zuTz1jaYSJpYP8x3GTTXWMv2niyb1xUGfMkcXH2MB23VLTisVA2nNaTYgHzR9aZ8vSUAUDsBLdCTxNzU",
  "key33": "bbGnbrAPskAZAeJ6KqVkLgbyapZUqsc6yjfFisfmPWfPUrw8GGf3P9yPohqKppJPWveYUsKyPjUfzBHQJRp3hzq",
  "key34": "Bcv761ZV442sczHDs6C8y5hzFaPNLGvv2nQVQ7WuS3Vp96J7kjhTkowvyPAB8PtyX8wA1Nwiig5eSjEavk1sRQF",
  "key35": "3NkVpyQpmjW4f8x4Aec7wwihFLwK6pD9VqZdxud9jmrhno9vDMFCYKdxnDs6kk5AYAMBKUkEPcTCFnnYRsxC4Ne1",
  "key36": "NhJFaKGAbqrKUkjzjrX69jmz65SAcYC6UqNj1S9NVZxrih36BpL5TY1vZdNaWMF4uaPz5RZY5csYiijVFrBKnF7",
  "key37": "inbDqrPWM6dAfr6SZQezX7n4MG74N8bZCoKPSidgL14aYtcNH4USvNe8uWng4rkoSDA5XZq9MNpkpWY48oNoAAr",
  "key38": "jqg5bWjr1kt8xrcLYQqcERF3d7kCXxt2Ppin3BrQXzbq3rCduJV3V4tVs29TieWU7niUw4MhURPToXF5BVBaxpT",
  "key39": "3x7MqfGcswfFaQTuk8UttjYX4YL8JUvgvD5jE5uNjxpqT9jbDrt2HGn9XWnjdEoF1MfiucobFBBVSJ7wteVAFKNF",
  "key40": "51GAL3Xn2bx6g5We72u2kShutSPGoKqe6QVLChMLe4s2cqAV9V4kXVTntZs7YC4NThG6h49Rsq25eb1Qp4d9Mf7p"
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
