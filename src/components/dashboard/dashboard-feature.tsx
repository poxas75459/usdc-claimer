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
    "2aHw2NLUuG2MgjovYEA8VfYEm9mLpEYtM5yqct6v45sEj8kXU1SsGjoGvMK6f7MPxSBwrJ1qxoxXVwf2qFsxjzqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eo8cxHHr6rQKQPYufonuqJoXi8D6tgjsWELTKbucZYHGPMjyS7rghtgaibyQaTp2UNe565BX4dnx34M3m8pnBza",
  "key1": "GhneKBxwFJp4odCRFcrqAW57qHfbL4q8iZwW4FY3dAYkGLD1EXJpjYKRerKv7ZEcMQwKnKLs1ctvX9WCQXMENTg",
  "key2": "4uB9uELGLCWSJDwrz1BfoEbcgkVA5PB1tX9jcwWFKtZbNq9R3PdY9L1cKqincsAF8NNig59VihSLwveDzDJuDs64",
  "key3": "3trQWtXZAaY6RDT4NsE68En8ibJabAiMJMqkSvhCjLM7hzUcsSt6HFzn1J3MoAAwv4RjCaqqd2akmLGGoaNn3vF",
  "key4": "3xL4xc7YpTzMoXWA8VWggBGdsntS3SBXzwJYzm8iFpg83Baf4UtEnDfefJ3WuRENCxGf5dP2cProK8j8XVc8wk7Q",
  "key5": "31YkxSutTK4eUjkDPyrvd9CZbsnANnjDWMyyTjFQenc6ZTT5PzCevgpzSs5EN6Px5ZTcfGquxBXJTgK5zKGwyy7e",
  "key6": "58XAoZ1yi7rAiypDRnU61fmxmSAsM4WyLu8ochDx5jDXdXJUSPvqsGU6VWKJQx4HVMrFyHc9ZPqa76pdAzLnnxGp",
  "key7": "369h2wFkraJc8pifupxXfLViNnv1NUaqgT9a3XFcFYx7o1MbwUMpbJYXJBc2gX5mbKeqfgouAYfZZsrF8zZeHRwd",
  "key8": "3GgVCQMmK56nqCp96p41gCH8JvJ8neQ39RejnbhVvAkYVj8u8Ph8kAHbTzuGzc3gumx1d3th2CzvJAtG1ZBA1EoF",
  "key9": "5p1f318hrCrjZ8YY2wFXfK3jf5v3eCnaEoSYkML7auM4UtzPZhtS36MQRQJUFqaG9fTLx5vvSjurGg14J1wyBmmV",
  "key10": "ND4PHxCHpw6CP5HHfYMFeTcni2s2DU1u3u2gncLLNWEGBRkgrrahUGyu6naBq5kfdDpmcj4WzxnQMgAAzoKyEZJ",
  "key11": "8FNoUCgawmGPvH2uhjFKQt7ukPvXvEJc2MvyTqk9amF79xjYPe4HnV8GM5w2xj4aiubnh3sLNy9e6BGmVQS3foy",
  "key12": "4BYYUY5nWmVkYZJPhxpoMu9AZn6eWPhVDxaMQxqmpUusjRSiUWMBmei3jCkDxsBtvMfXVvA8To34b1mR68EmazxM",
  "key13": "5EBNr7fUPP1J857DKGG9D5mTU5XpNjcHjh5DNW5XJNUw3n3AJUfoKqioE2XNH1jBz7ZMoAztsrasJzorPdpTJsDi",
  "key14": "24GKBpLThFH4hYpKeMnUUNWuedqC53FrBxkWT3JcqQBQM9jXP1CRKQfa7CeQSRhtzDWz7UuSp4xGsb4HVSUTYhMe",
  "key15": "2oNuJnS8Uxi12LwPLokBbDNQWAEU6dvbU9hCXXCFQAgcmMGYB9gtp9YVnG331kSR6JQzo9yBT4v8LG8xFPYicwuB",
  "key16": "46NXTKkT84TE4ZZeAo9omsJFQuVjvYRExXTUp9VMeYHvP7feaHbkukiZkVQeukRWgQSmKYy6xj413DpCKZePgmQy",
  "key17": "5PYdBBPwaknm4abFeW8c1AgJuMogyimyon38CYYZX15iRMBGvEz4b8Vt5pqht4aoWV1K8ncUTXeUa21GNzjFED32",
  "key18": "2fE5YtiovTyX4ZKpQ3feoCsCJTR75KcUAgjcUFwe3FbxpMvQeMNupqFMoWFzDDLwk9PYUTUQfJdUk7kWAtyMNicF",
  "key19": "5SGSiFYD2mGs7oU3PdVDankukFgDmceod64dEacCUtRC14dco9JzqKMsHGp9qufeaHgQRwmNKzypXT6xE9XJ1CfH",
  "key20": "57Ad4HkBHaE6u7Jy4oUc8fMNe2TPFVQmU6hYmiUvqhxbB8qpyUifKimxL9zNezwMko79WbegScdrojjnvVzRiV8T",
  "key21": "2iVMCLWFsW8SPniAoNgqA1bKx8eUasTkZWw23zLkkfhmJDWUng96cMb4qioTuyhAAqwrp6VGcz85ebairsPLWogC",
  "key22": "5t8Whunyi7SPqN44qyX5Dtr9P9mhWzUu6ddWw1poJCYxakab1morn1uD7RmWCCgpFSGktkDW77dcpBU2q22vjPAW",
  "key23": "5PGKYArJuk1sugMxvXCUh43WRRKssjQNrcgpmkTVA8VurHnYPpDjoneujnHwdkWCuvzHnBVdQy92ZQJeqAHgiizt",
  "key24": "4TjELQ8TApgJxXeGSmskHP448ofjR3EPbWcjGZWQKNewQz8EnnLZ5DAhn48GNrLjSKBqCD2AfKrWDMZjFcmS6qWm"
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
