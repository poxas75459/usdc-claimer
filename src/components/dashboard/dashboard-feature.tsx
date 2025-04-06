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
    "5BRLxcgtS3fmK3TzN93SG6osw4X3qwE8SSw7zkSQbA1vzvvMymiMxAQDmYZJj9ibuCjweajgSLrxHrTiVdmYxGAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZfxHzxHFCSYBCZZ7rXkShCVt3niHes5BVzTPotiEWQbncgVYgCCtCznYdQD66vDSBLU6zPzPEsVHhp1fZHVoCf",
  "key1": "3YNH2VvUEQn6aPEGePup3vBuGFTQifobN1GvWLFd1S8PoQvqdKNeixC3594Eux2MS1f5zhRC7Ca8QKWo5qoYrFgV",
  "key2": "63T2u6ULe6Lqm3WdUtW8u7gQXqixZLgNaQD7XQzcAG4Euq6qr7dkR1QfR9xNEjjbNDXBM4Xkdo4maMYdmG5GfbqJ",
  "key3": "4k1GsUotF7bdD7phnSMPQmWG2uYGiZprrCYjAzyiHtYJ65kUCCdEZrLHbF7wg3wZ33sT9fF5hb5EoFSzAFELGqjZ",
  "key4": "5QYWdXnfGJ3DcxQjSY7hephFgryXb7ZU5hMZKDbvVq1wUWfZJFwdKH9pMk8RLVGdGmHMJKQDRKu1vWZ3bqTmqmf7",
  "key5": "66hKYiQFZEEvRFQawJbzrQbkWt1wTqd6DBeGsT7aY9vcABz4Lq9dyaXfxHeZVTGtQD43qdDJ2Ukx1HzCpcTFSkZ4",
  "key6": "3QiAYf5CcRUW7jThhVojsFJY4aTzQnXfZKr8zYmR5HQKCxMUf7EPYRFjj97dC1NSfEdwojkU3mdoke4HpMPyWtNh",
  "key7": "427NSveJNDidmjA2dy68PMwoDPLox97SsCPxjG8CAJYPJ2Q9WPZT26pGhRCpEcwS6DJanaZWH4pCNfAPaqJoPetm",
  "key8": "3kDLVaZQoVc4tGDBg3FSwSwyJq3D4wdnY3sQa2RJREgX8cs34kVhWCpYBBgCTztP2agiRQH8usCvDUzG91XDk9ek",
  "key9": "2VrgZYJG9eGrKzMrGPmrQCPE75wWxD4oR41eLt22Cq2BSQ3aKWXAsEdgJBTTRuxwERPgXuZeTrqDLTf6VG1eYXnY",
  "key10": "2NQ2qa9FDBzJQVEFHY4pDtzb4nijBk8DSeMLDcnq6Tpvx2K9XMUbsiN9m6zFqcKTnjYMPDZMWm9uYEoWEGUiMJMx",
  "key11": "WQRTQbRgyAsbwAmS6xpeUiBWLrgNkfhXcLWTtXbSjb1HHX5eWAzwsoeHsUe5BmPwU5kshM9oobvd7cBb5fzNUXr",
  "key12": "2NEV1n1LZDKTwd5Z6pQKihzi6XfHNB3Ei3pYWLUoUJvv9qokdqns9wWV4HHxrMWKwTnQ7CStB2mesU6kBKqqFi7S",
  "key13": "Ekw9rcWm15R8C2T1BvRXJBMA7DVxhZvMc6UDzp3qWXg69zkUiuLMQkwLEsbJSVfPR5Tcidvo2c5wzmaPF1dnfrc",
  "key14": "2E8gKPjRAe49HRFEdpWaX57LGK8gukvTWDrVMdy4xHFbEq4DN1LieMY8VSeNEohKNwWzmzMQR2JDvV447yfBHYtQ",
  "key15": "35T6AMkip3HCvarM9jyLu8UHqwXdwaZr5VvbtiKxHaaL4frdqkBgZdyBjPaCuQK5hqUveUbqSUqodZdYW8QPDqjb",
  "key16": "5XUsMuvz6fBxTJBEHnqQRbJFLNQdYSVcUH1RAVS65CmNK4z8wbM2BgcdL7WSjxVQN5NP35pdTuVfCZwtvuPbk4wo",
  "key17": "5MZesGNghDe6ZkLJgmMCgCcyfiLajNge1ogtPz5LgKiLuc8rrTRN9ufGYugGzw73SuG2fFunRYa8pcCKwutjQhTd",
  "key18": "3TZgeCWuhzAendVyFz1BZwKtLtPzzibR3NLmZYPuRoPws85E9AijcFJ67nQe13ZdGpCo8kPB16u6u1PV7y1yyNih",
  "key19": "5fWrPwUJogLPhqpcQiPrxcDDD3ax3oufX2rUYddjMNpRvX9ve8JoQmy7CQL4eKjtTEb31qxYqwucU3zSRmf2zJny",
  "key20": "23JVC6FbUFj5KnTvvABQP5wpRgbP8fjz6cbmgYdbTA6Uk8CQWterLYkp6QT56dW927BybqxexJhUDNr99E9gJt4C",
  "key21": "2u2HViB92RNvyUfN4AT2cePkB5JFuMdiG3DJ7KNP1cvAd3ugjuRDW3wxzMZLyV3xmdbcjf7heoFQ6KZzSvSfouDV",
  "key22": "2GmYzw5eRVzoDPzSMeJmXxznrsqqma1jAbmq2mgF7xx5gPL84d47v18qfbJxDUWBsXLj2rieET5P2hKqdr8xuGYo",
  "key23": "5FcgixqTGjBcgcVteNz86M91TKwAKvcX2AyoHjuszNAP39oE2A1uJUe5CEz3hiPqa4TUVYyr1jmPX3NDLuutQdGE",
  "key24": "chemc6dsYKF6S56hSBp8SwqqWZuAqc6Tb42jEhkUXVuMXmxzx6Hd97XHfzLdcsxkeiMqz9UprhatPDcbCRiRZgK",
  "key25": "2UQKggWbigFq5T6BrBbn9cF2V7zjNAx1oj7PBfkVwupQbvxPytKj7CLt91uVz8kRTYBBKdWyoqn4zd2GyuhYyZVx",
  "key26": "5FYbLahxud3LhDJjstRabWNy3M4hVP24RDTyNUvQKZxefccBxp9AwxuhGys7E17KaGBjKREUbcXwNiySZu3CbBmL",
  "key27": "M7HH4pbG862PQyj6xV71ij3e4xgz9sXzsNPobZxXzcEPjtpLCdJqQgBBN9m1ZviufYPebtefujWTNAWbGRttzNc",
  "key28": "4W6362jCyHaWN5QDcAN2HZMz3VeG6BZJzCFwz6jViixruD7sXNYpdqBgXW1km5BKRAYi3sCjK26Rh1jD3B7FezkE",
  "key29": "3LGiKPdUqvLPQuzQQyApu1AFM8ngxmtBtfJmMkfqkcKsWtdAJ8naE68UeC578cXanhJVxHCCV1eoqHUVRC5YH2d8"
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
