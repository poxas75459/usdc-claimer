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
    "35dZX84G9AXXrikgqzuVKWjKRS2WogBLKewykF8JAzjpTqDGQ1LGrEgxTrY7AX36r87odcLrTKHr7X2SnMUKgP8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSAwN6HJipc94prKAZRqVPAnEsa2G8Tgeo6aJAdPpHXK6iajf5QcPisPbTSjT1cFkcfPjDJMhMRDyua8yeiSzQN",
  "key1": "3tACTrvC5GarxSBxnSuik6PujDQaFTjGhLPv5tf1QgYDxvZegfhXL1fDpa6WBuPfGiiw3CuDBc26e6w3bGQXDztt",
  "key2": "4weAqsQNej9npy3Nx3bKJZ599hq3pDaNK6xA4EtwHjmG32gRPo9NfFt4i9UG8xWcP1tptWN6XzfupyJVNqVnkLB7",
  "key3": "5FgnwmXJu1dJGMyDjHsPd8Khq9qMAdSyC7PTnNdGyw6N7NanWaCELCCFj1uWEpYKdYsB5AaTVG8zH4wZsK7jLMDh",
  "key4": "AoFSBYPyasvtY8UfyW3vToLEGXvJkotahj5PsyT6WBgVXUAsbsvMasEhxbByyV44VtSNKthAPRckysuWuEdgWeZ",
  "key5": "2KqhT6nYHCm65vXwP5gniE6qsTcwaRrLxmLuAq7jDeEkXZQiHhFEcdGXSvYFYMZHyFHe6EvYyEKBr3CT7e7bRJEe",
  "key6": "2n2JDdApv7k8vd4LG4oetNisB48kdthLntWgjpAmyRpoNZyxUcS4YffYBCpHYZoSnefuCM4L1m4LmcxR3AtFt91R",
  "key7": "5sBCGB5gyfgmXqSeMZrsjwV5VE3vVwUwpYMFdKN9bWP4Xjm8EKfrUdZBcrS3XMikRYPsmmEsiFRXVQdsvNMbMHY",
  "key8": "3gMaRLRo1W2meZd2do9iJjgmUnjZw7FWg58ms84P9xkNs6y4F35mBe9geQrZjYHHRRTTWurqiV7LqDqGnEGB9h8h",
  "key9": "3NGY5HCY5R5vBi2RRr2isieZ7dMzVoN4BrQh9PS3jhhnbSkPSThy2GHsMEXiRfvbH24PzkhxcZ9n4fQxPUi26cEw",
  "key10": "3cfsCkKoKXdA3Zk2F5cabK9TSUgF6movGUahfBFiQ7ed2XQm4wF6mvrVoVZkZBY4mGsT4XsvdwBSxSeLqw2dEeaR",
  "key11": "c4FqGhgoK6V4JdwvdLHZXd7C9y4sec6WgPkDThP9oyjwp6A7cpxok91czsBKtqnMECH4UvFpNZ19fJ9FFo8A8Cu",
  "key12": "VGgFABDEzYnSpBK8yWR3xcTKaso1Abjbda1hwfAKNMsLUCoSxaM4cop827ithX9r1vK4sHA1PhBNmuPSJ9RdWDj",
  "key13": "4Vx1Wo1ZChZ1WiN4GKbmbECbk8doRpj1ZyHnf8aRQpSoZLkEgj6QnZBC15xvGFpKRBZvH4fpNw64W9p1zv3RtJKb",
  "key14": "YhPYSwQo8z2opptSEfjFhe2NBB4uSr3jpFY4Mro29grQUrUaqmUFZT7mxEmsZFGwUcYQK4rFZrEtZq9W3ViZeTn",
  "key15": "5szwYquLiwDVABaGVdh5RQx86gRAH6tjp5NqFjU2C9fH2Na9apsp9EVB1FmS1LwBt2jBetKTt5RtkRkULosHmL1M",
  "key16": "1PvT71dSLKa4Xo7evy6haXbZDds52t7xGNGpkYESmAaMCE7XLKdCNvzJQ9kJtnup3iDbSkRjFPL38XZvsaSSrgm",
  "key17": "62BbqxXjZfFx2Kv19GHideLuy1NeQFfghAr3at4SzsChf4Wt6xHiQncxUA4xK8mEkcejRxVrr5tCwRtePeeKh2yC",
  "key18": "22D8bja7BhVckDCqFKDT4B5BTdeGNqA3PrVcHGrAGT4P4Ckoepoc9E8eehaoeELmyGNLXtwT7GkoXg9mfBV4szSQ",
  "key19": "2Hfk162UT8Vuo2sTxT2iUvkKX9RSkHQjM2ZKS1xStcJCWiVQnjPsArGbHcfxgwQCHE4fmD8jAXFEX4NPHBa91gQe",
  "key20": "2gPPYVdGyUg74oukXCaQYsoowFxFrngfgKQdbqkmzKcCDALYQVXfFwHkzwo4zEGLNe13Fqcbvsu7R5LokhKZFxwU",
  "key21": "2WG2yVK1JBtL8SQpAp13vM5EBEAVs6XSEggrsZPZUc9iJAF2SN1h3cGNz2yYA36FcEEmtJVuYPCfPfHUZhkiAXyA",
  "key22": "3tqRYRjPYp8QJYEN8e8zZWPtABBdptKJjoZHmegxVnirrkUsMGpvoiexvnLWvpb1HApecnHU3EowcGVRPDe9HGK3",
  "key23": "2hPSXjJL3Hjr7CBxT8Y3jVntm4L1ZurWGAEHisMUJwuC55czR2zs8g7sYXz9LfYrEwB3ScXr59roYJrun3Ahj9H5",
  "key24": "37AUmS7zthyd8QKDvZW9pcMAcY3j7xDXbLTVCAhfA3BLWYs8UCR4T14bdgyjAPDTkGHf2kSaK2EPhMC9uQQvb6GR"
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
