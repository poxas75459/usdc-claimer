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
    "5qPjqGUSSErjCf8t1KqwsUjrSUAuw9AgEpfFRMhqpkmPeggwt1ovHuQpnVHAkMJydjiuGznWBYKaz3GKX5wNuNKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTUyfKj7uh1U6sKxnChtsCWzVdgTw4TXpQg7jnvVaQTYdyaKx44EZZWScvfRuMrfG7wSTMRYEjKMiopxJDQfdwH",
  "key1": "58aDe2wf9GYUjh6QyuqUbraWHPkFKadmyEATYA1eUaeZy9wPC2QvYRzGbfGz8W85bMsp9LHc4XpdtHVKDqAf1Fn1",
  "key2": "hcA4shQyqMd1hjuHe43sihVxAx2ELANfqPJRXkUiwv58rfmZJRjHRKf16xpBynVTgDSRuUxFC3Sa9arrRRYauKL",
  "key3": "3CXCmEtw9pKXtEn7L9mqWTaghsLws3QtAArfzB983FfesPevrc6wq5CXWJ8cmHYhQSAYK9VMAc5RXXu7R57AWWQ2",
  "key4": "2873AhrWZJSrCsuSfhfzTvYR8A2xAZYSQmvX1v5ZWGi5eaYrsnPPXGEonRL5XnQHtH9UnVeCZUfSLoVLqW5KNwnd",
  "key5": "5vYS4UKQ9DC25Ws1GpNoxkMZ1x8ooAwvWXXvZXW7kxybQHiSkJvzviXexULnEuuw1gu9W3LBTuUv6qXh5UWYuYDd",
  "key6": "2JpQVA62P3NrzpZ7yqHWmk47tF1gpBhrHs7V2oLpRNJxZutz4mfcNXXcSwH4p2nQHFZK4G7gKHmoWxEoVYS2AerP",
  "key7": "32UNhfcKcGH4aUP8BXdRdfKQuRHvyUdCqSwDqfbLEpSroa5ygwdFLJqtq5rwU4ac3qvfN8tFKhEABBohD6UFE7q8",
  "key8": "3SCcfxVpyMqMUErP3jJ4EZyG1m1ftsTqYZLNCzZc4JHGXsavChvwuxLSn4ykhpoffQy34MJFsoB1LmH3JVALba4B",
  "key9": "678epRDhjLURxW8j3QfMsFnPyVts26nEe5Bz5idDYNANqH72Skji27VTUpNWPGywk4qkzMsRVqej4bVNu8tXxAAj",
  "key10": "5bukCqLtvVF7aJHU3EpnAoLGGpdZAXfeNs2uZfUduqP9FqkrV5E93m6saW6Hmec2Lgr6QaLymE3Q52JJYzj1v2W7",
  "key11": "us8akknTPeqS7RxE6MGi31WZi1QxGGNz1Fyavzzb4caV7oj9TNuksFNnJSqsY1RzotqRtCFR5aa3xZg5v8zruGm",
  "key12": "4oZRWQDvbeGt1MHfDcCzCtkrvQtRDVKNWxTnqswmte3WDrMyetFqnwVccGfmsijaEFx6b7HPzP9McWocvsE3QVKw",
  "key13": "4XxjqXr6simcgmBdHupjAskVoJ6kXzHNbyubAYaBAs9CvAxxEXoMTT7YmgE9sqBHKxaM3n9RKJUz9pex7hJfkdvJ",
  "key14": "3Me9AA7Y9E12HaTDE3FpDChWB3AJ6gTAUaDxm59CoxR7PxnwZnd96D5tDmBEfbN8ngRhxL8f3uwZY3sLo4sZTv48",
  "key15": "4aL9ew4aHV6n2YrmPvZJ2Zpo5D18dQsXwDXJEVprDYaq8AyHC2S33xNFZeUJ37ygwqvFZiUqzW1EMVxEkEF8zKP8",
  "key16": "2J3N8Xupp8bo3tmb6QhAQRhhCrUfkQs2kZLcGBbjJBQu86AfuXT6iMLEZbYE8E7wsmcESx68dzjZbFcNEVJB7J5P",
  "key17": "5Dmwqse5ntBqJ3F4bNHtDntYBxAnmTFiXdVA1MQToVoKTvvHvKTTqTw1wgq4xxsFEDKcQrawJpdHMD4k8HUFteBW",
  "key18": "66HsXttv9fSkRs3wzKXewVHsZBTMa18haeV4jp446nnqnw5Ffg82UBhoMvjV5zszek9j1ezoZuir7Kd7Nai34JWZ",
  "key19": "36A7339j4bmFADYV5NkN6eYvUya8wwPfxokkqskg4dnY7j5WZzuJw7wESKKoFwze6dCZ3CRo4fRRf9dNY95jakoi",
  "key20": "5kWK5CXmkp6XAC1LhxYZF5J8Gw8Mmhk7v4bmFFk2JtByg644zBE24tAtZGEX6bB59aSgx7DKK3vYsCW7MkCchjnR",
  "key21": "4FBqTWuWU8Lih325xW5QSV3w5prXrS4tHCnA5ZP3gJcWXCXtBUJj8iioHUFqigmkNb2tbUYRCCFyZsX1MQsd5GiX",
  "key22": "33yuDNNMMTjWzWZpRHUrqGZEptt3WmQp4xTSnSnboqY7effYU1n7XQvJpmNXth5Ka5NQFDNKptmWshwVxWBPvLxc",
  "key23": "5JhSzoZigYzfq5bYV5JBiA4dvJyM8JYsBrFCNv6vzfDKLQzaY9FR7jEDGRch45u7r3ZmSFqMfDnJCiSupZ614PK3",
  "key24": "64akqR1Gqk7akzNBDLatT87ykJ77c8fY5d5b25SpZ4knnx2fDsAyRzNcEChaS5BgCDFo1CPjp12wR6LdT4jotgT3",
  "key25": "3nBEPCf6nnJXAQ2ZnToWWK77Q727gWjHtuAj54Y3Lc6aAfhvMtuRZhh8wBvBNrHVehSpPn8P4iT3VSUUJfPJDYPR",
  "key26": "4GSDJTJSsaHqnnHsUVivSgMSvEdYq5NHqjw9wQNUVR5Ceh4Xnp5Gi7nkpt3Rz1AM4LBQbVzK5sNtoUYeMb5GR5Ub",
  "key27": "2keo1qA7nPZ67tRUayKssPiyWCKgcoyf9bdng8sc5Fj8dBGwgjTJHwVLYi58cMQwa2tNeYkk1ekjCYL6ERkSmYtV",
  "key28": "3ooUsQ6tNT2BeSBYqJxXNkodiQUVXkoYn2EEKfMiXFC99qTdD5bJQe54WiDqyLupUzqvwqySdSFxSRZP9zzy9XbL",
  "key29": "3mzhgAHDUeLw56oCandUwHVuwzDMrfVSTh56aiFMKpA5hyHvpTiKt419SxtQJHbckgU92kZFyVzykykbmMrSqM14",
  "key30": "4UnJxKNL9amSHLSqc3uU27zxbqHW6krBsPTj4pE82UQc44swWSmVbEi4uY7vvTeV3Pc5yr2kcEf1UEPDvCPxuZ88",
  "key31": "2eopRiRqqvEFTGcqCdseZiiyHnUyGd1DRWYPivtrnBmUkGhj5BPiX82LP6oac52siXxuZPNGDhDyeuFQnmd12f4f",
  "key32": "x41fFENgMRfmW4wMt3AkJxos7tFWnB42vDgTZxdEJqHsDRAtSZXahp8WBd1tfK1djiBqKHaHm7WsrGUnEF33AfL",
  "key33": "2Jr96didtCEndD6LM1piTnnZDSbWcbAyezp14NqV4G9hmJRRw62zZXpuPQm1XPqY7NhUmahDsWEHwiqGEKdMRAim"
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
