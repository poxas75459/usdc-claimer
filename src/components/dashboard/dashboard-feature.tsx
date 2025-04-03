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
    "2V912N1FD36PD3rdnSgqJ2qYeTG1Z6NDGmk2yDxPHKJR6P3MX2hQM9Re2iPxNyTwSro1hDD3KJP5KMEtRAaAEKBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwXFW3tPWDWGztgb4NobBcnpPzHiPX8aiFot9QwEySzFWSu691nYAoeYMU2PqhkNWVf1iXr7HLZLUNYXcqFGExq",
  "key1": "5C9AS4w54c1CiEyXXG93ed92k7fiYPBHssU5rhZE8Pqi79vp4xNXQFYqRo9kYFucJTWMdZvq6VSGgYG7SpXZTWaq",
  "key2": "4pVReqbod8tnRzSB8Y4J8p39fQdPhuesmSdAukKDpCuQ2joiDg9j8ozTk9Ku9fYSuHVwvjmn9piv42xXPDad1CNf",
  "key3": "2Ub3DUhFUM1fmgn9AisZhzog6rEH5QP1KHzobQfDixELsBYGhCxZ2obPp2B8gqW3qM9T917gvLTyoTFUNSU4LUxS",
  "key4": "U95wiFHHDbVGvi4XmLbDbHmqjczcMt9AhMEL77KmssuH1Qt3ce9jvedX8UfaCXkU6c7rY4ZcwzeymLmC1quEuqd",
  "key5": "4f4HtiN8Ed8CR1QzwPZUG94gpohBmPZ8TGp4A1sEEDwXuVsQWiHezQfij3C15TgyJEk5kBBEvbzNSTjFtrHG9f6n",
  "key6": "4vxic5edXRTnA64C5SnvCkVrXc18GJRdyZ7y2H1ZRfY2fWvGYXWLromH1DDRZMaXqu7kRhURYQMqDSkvfbTVB9cJ",
  "key7": "55X46kKKqbKKyhfd2Mbma2seLWT6xGX4aVZWwSF9JafiKfowsHJQqHqTUPEohSy4zf6qS2CWf4MUXWyZ7W393Hjz",
  "key8": "5uK39W3ATNvRjr5nwhY73giwUb2wDHhQpLnHZ5Ymn58mkZ17HjkpJo8cyes1haRwyeeUnSRU8g2QiPKSoCVP2spe",
  "key9": "5whdnx1ffrPLwbWBQnFt852oqTSma8ZZtdwAN9CmxrgPZvaexN7ihJu4rLVzN1Xz8TCAkXYMfquBPEecho6FPXKW",
  "key10": "4Btc6Z4jUN3SySadAwNFQKUvr4AXd7yny2kzXQ5c7FpPurH2FK4va6VjshWJ8ee2LYJyHKcSyf1rUxMcs2Qq2QjJ",
  "key11": "h75SLXvXsCJ377rVDFzS8AaYFrdDKdgfYQKCqZaQLAUt6jbLWmUVphdFmz3yQtJv6GuXFgbzsZDq9FXP6VejfGv",
  "key12": "5wBqfY3uNAQcCRD4oieWyz5GCKVja5PZi2kWTLqNviU6ZbxYKcX7dv1kfzWu5mq4gh12QSEAohyANNx96LLfjwmn",
  "key13": "4dQo7pGNUzRZcPEziyGcVa3bbExrTgaZEX5s96doCwHLn1JMK9iV9gNmDpFGYP6pw3R2mBwXB6QzDAPhXwfUaFrA",
  "key14": "59FAq6JXU4S7rwiCNeRjZ4WHxAdEQ9TeS4VTUgpngrhKQ6U9dJbWrzXMkg9h8X6jZ2hp8QBu2SqVTVdRMt41fYa5",
  "key15": "3RjPsGDDeCY9BhUTuc8mrnLxYKizELBb1g8zcGHMbUjqNTgbKdLmoA1K7fRPkNH6dE5yw1eNUAExwj5QQfBarrm7",
  "key16": "5NVhmgjXiSNuqqTypB8K74NpTUfYsRHFf85d9HRtraJdj62GccZTKV8pW8pjbt629aPxGgi9C25s4WfGQy7619J",
  "key17": "28aHYZQSqJj9KriRoveYkALj7ShQ6E5W54hBmwm2a9MAZeVLtoBdbA9ebhguytLHPNg5UJRhdCYeoS6v8ZfVNJUx",
  "key18": "5rv7cpEbbbYkFJu6paemMqTiqmmiS1DdTCs9DTbYGoCwUDX24bMenfpD7buLaLm6UcSDu5Guoe4jjLdQrvKor8nb",
  "key19": "LXGMTj5dodP5wNG5KArine8WNVU3E2TJXYF9ufCjqqiZVJk6RBpbriRUzHgMJXwa8P1fEeBW3j3GzzieyXZ1Xnr",
  "key20": "2j51R8yYFiyCCRdbpJMHydFs21wdFJAKn9ybYA7sWr3GU9RNYb9TteHh1hBXAvzpHXz7zNrtCdpRJwyLtY66RzL3",
  "key21": "xyikGxsA1yP1ECsNRsL5r3Qxv6ea8x71Ap4dgxUzbdHYDDfvMw9w71zwvSzpVXztoh9sz82gt5F6UjSxczekSoM",
  "key22": "5MVUAxcBNUe6szEKRyX71hoHXFBuujCZjmBqL5ByvXSthoLU5YAa6HfU9fvaJ8EM9hVvho2r1MuenF34bNy5ArNf",
  "key23": "4Pba23oG14yUwnY36eMAuqKLa42aXYZJBy44jWF38qDAA3p3qPxHiS2WReCey4aCZtNai9DoxwmFLHswSjbA4g7y",
  "key24": "5CWNZtZAgzfvAXwt6KgaLwQoahvWfMjon842GdANCSpVcC2opnhN1hyCLqcGdou6GEsuNU3dhQMsgxV1tVu7dYqZ",
  "key25": "55igWZzwKTgtG6gTPSVkRWD2zwBp6doZxqMJQP5ueopSiBpDPnvTrxJuboGhWw9rGpeQFKMxmFK53TherapoztpT",
  "key26": "eoYkeqWXF5WFFQVFghYWjoW5ZkHPAHQf7axrvxBPbqJDwCYSxBw2wt86ZajNTaPjvdS7t7LKvX5G4WWqxmLnRHM",
  "key27": "5RiCFvDD5mgqnqXfyTbRk1bSdLdPpArhGTu8PzjDexc6YF5ZBqsGvi6WU36SpbKs7eLMRUdiPbfGtjCzvvgiNSAz",
  "key28": "3n9qruL8KKEo8jJEE8MZ7AqU8tcLykzu2Jgw6hQHUpbaVmiVrfJVb2L2KUGKbZa8i17MDNSBA9xiHf3ecnCJR4U3",
  "key29": "SdoBZkqCsHMk9sHjaRe3UJ9zTftHaJiWZXDXqN8imEtkCAPx7gDnF4T4uSeDu7b6SyrN9oj84D4N4N2QzCLv9n9",
  "key30": "63prqKqL8p2Rk8XyLtt29mwr2esXizxiFy6w4cS9krKLhLEQ98Jpcw97M8UgsAuqHrvCFZEHCwm8rsj5PRtqRBHX"
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
