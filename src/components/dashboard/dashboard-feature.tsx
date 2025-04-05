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
    "UgZ7GFJzdGErNkJnmJieGxFQjZdFWbD5NTcTMtVUNJ9HEwLwBKQQWb83hXAMSDTkx68cc61UMw9w5jq462Y9Wqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFBK323ENAeMdMpP48u3Wrd4kPgddXFn2EaXhvev8mbHjaTTNQTqpca9nV5wpKZboUTN4UsqCyU1ATHxx7VnEep",
  "key1": "65y6iJGKhBmh1GNoZnh8SBUPmGqZG17bkwmfDFyvy5PmWNJqriwPV1rEB41xRX9aqeTSuw8GBXqYLpcktbKtv9DH",
  "key2": "4GRa3PVvgBkQoVxckd8ndTJkktSZ8sBGwU4jtbXDCPNx8Pd9b6yf6hk2Xq4F7CfL7JFeoUpTDeVJPJKfwxPbYEQe",
  "key3": "kp31Zz14ehGmomGBJCoKLsQez4bZihjE7H7u7i84LQN1RGtvV8rdvWZw32dyiXa3sAYvRqQ9TFf7Fpww36VXvBt",
  "key4": "4oR75r6G3GLBg4tMzhVApX35ASY7vK38GTiuRufxhn1yLtpS2j8NKfvPXFKX1daLCTVTMeAU4GBgP26nLZJhmsiq",
  "key5": "5Kmz4zmzwCfhPLmgi95HyokaeX7bqZsRAN9qq2ufwE2fKkdk6hWoYkeWZBzWsNNVn3UmXd75qHiz3XfWW5SoRxc3",
  "key6": "2jFG5jgaCN8sBjQrJVnzorjmNToi2MTGbDcuN8Sv1S4KhSqomLuTbnubxxLAJLDUFmayb7eZvTyyAowBRDFRogRa",
  "key7": "2pom5pNsV6NdcEsjxtPrJQKF4Ybq7VQmxE21Cyk7DM8VfXYuuyXjV9bFNH3Vnr9CXktSJYXj23V28bdxMMYFhj3j",
  "key8": "3Lp6vobXvxpqhrnuENLpUB4jpsDTe58mLpKjNBujbKrQiS1Fift6hf9roUhoeyoGvj2zS9G66SFTYpUjivGvstym",
  "key9": "4biFqbqVes5y4tQdsQgpYD959nMsdBNqBw3Pj7qYaMbddwGdha384wufqeiG9Z2sKShVUBJwEC2uPCaj6p2E8X3o",
  "key10": "2ZWrJSYWSjf3QRRKiGZp3LLDGBBKooFs8TAjT7y2j8AQUjqBR8N3gdFZQWVdyJnKEEeiTqvxQbn5XFMebbsMwr6U",
  "key11": "5uXADQN7dYnbiZX6grmR59mZs7YHh9VAcXPrLh6LGJqVtXtVxY4V9vGxbz7BSSxoG93Ep9VGEEb3XEsLdxiq3KFU",
  "key12": "4i5jFL4QuYXKjwcmj9Ca3MfpUrmq4vRCwNM7UwJrbW2FKW5KzMxt3oePYnDEBqfzKYSWXJN9xSzGLEUT5g7Y5xgR",
  "key13": "571SaBAaSvUXAyGWafcj6cuwJpKnHZjYrbqPTdbyTcaYqZmz8Mmz6SfRBKXPEHRGmCkEwRqt9pXdozyBGstoDJvQ",
  "key14": "2qnmYyXLWLgaPs15JPGCiiYKEHnUAWLcssykjHJwDxkzowiuhDgQFgcEUqHMJQeJb4jzRd8J4mFXRAxtfJB2fhvf",
  "key15": "5Ui7H6VPAjUSEMcT7JMr6d9gDkpCmoZ18TWwWWBz9HaerBi7RyL1T9tuQgtvtvDkseEyHTp48JM3t3MK44ekf3rn",
  "key16": "1xiWe3FCPcxSe6GqX1HoKKPHMzRuw1kcqMYTc9REfxv3jcmvYi2jAAu6QXtt4hsryYbpmKNRFMhkmViLNNobFqB",
  "key17": "2DJXS9XiVhmZD4w2nsVwAveUpsq6hS2jnzLHHvvDsm3hjaJ8iQpKH6vzXBczz4TnLDEt8wUGmGZjBzGEH8EtKS5a",
  "key18": "2zgBbLhGkvY7qneMeftZWuDQLasJh8gfExRY1Fj1FbF8oYD8TcgabcWcK2WJerQYNsMtLyjoSr2ErJdXMK75xkPR",
  "key19": "4wzv2RnMYFJRQp4dUKuuuN2mSdAj3nC4dkmMeGVGaF7ukvRnEiF7ozGZCMqUfJxU6Vxo8q1m5GDRDxdKA2XajHea",
  "key20": "bqaFq42JtAWKEokfscDpap5cvgspxZZgb2n4JzMHzK23waM43yyH616ry5vLxUBD72U62PNxQKpDFfmXhz7eieh",
  "key21": "4FCCqerjokkRoYpVmoKSMEphHThqu5bpjJjrNQp8AKKFzUA93LdBrLLngUCnR2m8gWCkGURSj1NWAtctSNCZVT8A",
  "key22": "jYSsvumQtHD8KJ7kbhXJNCt72khJyWirg4uCpV1GicsNX41dAQU1ETmqABWSs3vSc5iBbgDt52pM6cQKEoTnpEr",
  "key23": "3NdLBiumRE7AeaC5M5i5XzCQPwC2YHKwUHnd4drNBayXPSERZZtMjDcC39BNTWPWCgY3oGJ9A5F4gAKQVHCuY5Uo",
  "key24": "FFHNyyoTCVce3W2CoVxK6D32umbUe8LQttXVocKfbLGteR39hE4RTS91NBtoQmeQQEnhwDZdsneecAYCSh36yjb",
  "key25": "4vZ6VLAGTi1euHBpeJ5z6BJFk6YNzZ6aa2yPgGdWbT4DBwojKvfhHN8ufSXUzstD7V5azASc3Jfmw8X95mopKJBT",
  "key26": "61gQKE2q9N3XkMsMMChN7iZ56SCmLFY5GK5oGX5nFyYrAqjwvURs6SHpkevDM7e7gDC6VbipBxaibMrKyPdw5UDa",
  "key27": "37U1JDXMNpgktS6hTbrM6bRQNTEHAKYkVt5zdG3sMNBQfdUwnDFmu9jEbjgLBra18cqgTWYSZy9fb9dPPToxezYS",
  "key28": "5UwokwCMh7qxVVw47gMkgacAdoPUuGuioKzkmuioesE9QJAtDaSQY5pSFeoYPjBjn1orCMj7X9qMsino1TsZUQcf",
  "key29": "3qS5uY7XYQDBzZ8PAtBc2ypkkCteEsMe8B8G7FBH2aS36KoMxtPUsW7UtPgydLZpwNjKt6iL8EJFn8Q9sHwU4fAk",
  "key30": "3StCM2ncNwst2H2QEWqvtj6WevphkVVjMTdCnA5PwPx9D6gQb45w9Z6GjfceJvu5B3mh3CR1wJzVYW7G8i8h531T"
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
