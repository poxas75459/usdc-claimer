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
    "4uHtAiYRZQuxv8ivxd5YUtn6SBDVZXv2A2FN6vttTLbm5nKavL4n6EgYR7QsbfzGWeJtH6iyqdispLyXjVbK2J3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4r7bzwzAVsmR7ZpgsHPa2kv91r3QE9f1H7rtPnA5RrDqXapmUhRPYxj7xKPpYLgkMZf5jNhGBAWh9Jc6e21aRu",
  "key1": "c3eWwFjTWkddfN1tRU4awrFu3fZutvz5rGkAjsar6FFBpYeBg4Rjf7yjHJHNbLMXkt829FiP6SmazWhHNX6AmrS",
  "key2": "4z2T5dB6bTX7gAXdRJfshqvdU2ccCZeJXKrjbWJrUuarFpGDxPS7FVRqsZC9x1XKmFnqkAiEF2GcUJbwqE7Kv9rh",
  "key3": "5xj7wUcz1etpP3o7mqd1dfugzCzzA5xpU7PZ3Mt8AZ4ZNyX3ZUcePmkkMSSJzv4skTmAU6hS6LDYnFZt38XboaHf",
  "key4": "55ZreuTMKcwqQ8jKCZDbBukgsHXE6dKjY4iENTsH9BG16eKqcnM92CuGBCktmB2V7aQi3cazRYVnfg36NQ4ZDCxT",
  "key5": "2TGvX5ZUYk2f97Yhs2vBXXScVZHCdaNB6uo2YEBPWz67qrDRocrRf8bWxR9mtuSwEUCp5mNdFYZK8BR4eKTKujpQ",
  "key6": "4v3si2zZYvub26pVHGZTGaMyPEafubEv1EKo5MC2F9nc8L9MdzrXZGm7Ho2sRxN5mJ8q4tgXqLWv1vAojdj4woit",
  "key7": "RasJxuE4SDWjeBTJe9e7oW1Bgp5CSTtqDZ17vKiEhaUdAuq24FU4QcB2DUVa8fzgF4uZpmv8KQnAN3SdKWBtb4G",
  "key8": "5Pz8w1rtBRPt75fDweqtR2CDpcAPT2Hx3srVZUj3bkGzKwFgyqUbBQFLmaLxjLSnphLb5bNE3dQG1n4zjYYZ9UpK",
  "key9": "2RcHh71QgGZkdJNQGJNGxHwcFsfRBdiJQDU2xXmLhZL1cRXUhSTbugxm6z1kbsJavMExyAJ321TDb5bdThZXsbwM",
  "key10": "UEVD5kwQWeXBt9bNycfhCDsgQsVVCrLuTExmAQAmyFBJqBwqQMoBJwBS5aCWtZNoWP6ktS6ANwi9K46RfBm2BDr",
  "key11": "2peBog8uFCiKM3scqGxQEhzUzrpGYK7FEegEX3tA2j5x9bGCiCSo2DDjiYZQ7GhNLevjd7kG3LvxdDZ7GnkgEm6S",
  "key12": "3PYXmuPH4EVgj9gNAH7mQCYvT1eRtXVcr7vuF9FYr3Cyjmk64xvshQCj7sQmHGA1aWdRF4vPS6g4hWp5PRAU9CRV",
  "key13": "3Y8hnb4KTKChZJr8QmZp5Vd7pC8N2uYDMY2NPjtPGi9vvZj7cBtM68bx6HPqz5dPj2LKwju13yLEQmgLz7hpJJxZ",
  "key14": "63WFAYL6VAq4oo1okd4Lyorvjfj5wsvgaC7yfg75fBK8H3qD16x56uRUFoNcqSWQiybgmB4sAkj1s15HQxeGGKTQ",
  "key15": "5RFSFr6exL3kCPJeoBkb6BG3niUhUpCeiyP3pN8SqNQg3uLVnLGQYTzYMjX9GMhgtuzDJpwjGHck5JJgGv2vsyYk",
  "key16": "mcYh17kLEnUdRTnL17MR3FDKeAeXu7J13qExb5gKnszKscgprra2anA2ZiL5Brr8GeYAkRp3YfMz6JXjyTeTnLW",
  "key17": "5FuVx8q99VARJ7Mtx9Fe53eizAo3DsyC2vCyuhWvRr1QAGJvToGyXVR2V3vfhEeFSbQRJUSQdURWj6785qH6JuLF",
  "key18": "DMH6fuTYJbWFrTeS8NQu6KqHwZ3cEUwQdmproD9UdB1ghTyh2u3xtCwmjQ3yhe5oTSh3yBsd6WksjE9XXXZrzk3",
  "key19": "3g3Ls7utHo87qcTn6io2A4qYngrNhimDvEqR11n8njAbhFLCi6AHqPaJpYxgJGQLCnLUcXr2ZkNectxPzBEKswQW",
  "key20": "5VkDEoJfdZCdVj5YJZDLFD3yXdjq2RjKw5LteEG2ia5tEe9ByQpD1QQdH2yFAjU5RDTg3HEyY6jGKsrukL9dJbxt",
  "key21": "5Krpmx8GomHxQVvzXtfm9X9qoZL5z4p2n95zwhF5FWP36JNCyfjTSLBQKNaBr8k9ZKoUnouE14wKz9yaLWpsv2Ho",
  "key22": "wsjRJvFQUDZ8d1Kb13u14HUwWw2EhH9BiGHntudN2AH2kXuezm7bRWMzS4Pv68MW6qjpRiT2cnxjBVDXZQCNqTv",
  "key23": "3E8UHoUDWbec9xmZUY643c75j8epbn6tfS8miyMnZcCyP5hF6hBnCJcdSQ9CFFMgf76WTuNJQn7YXYkjJkiFaQoY",
  "key24": "226qPfjywkhiufqM7UMdtYYpRMpgX2JFup2C39kQcdordfGfjWpNNaPvhkeHcBnchizcHtqcVV5WPVfftHzq9u38",
  "key25": "3s5jyjRxQXXWcDrLHYK2Hj2rugBSKR1D3VsNAfAGJi7atcNEk93JNczPQzQR8ycTzqS2Y622M6uLFWHcKbLbseA4",
  "key26": "2x5mN54nYai4WZHfTPF3tKQVfpT2aKwKAvWs2PNLNZuwD5hGnjEfx7RbPH4tdEDVL532pHXDmkBYZQxE4vwYiEPD",
  "key27": "4zex9Lyei5H9n9U5q6n2GEgMVhBEDyEa8xtP1m989XAKuY5CaTvekGXaiiBC9cBUQbcZQyYo95chYt4RfpkbyM8U",
  "key28": "66xBsJvJDD5GrgDRjDLw4JPMnEC84FsGfPLqqGbtmdJwa3L4GirrHkMGxXBFbsrXAr3CNZt6Ek4Saw3qYp4JDQ2H",
  "key29": "5zd4gUDyWsJ48FxR7MKd3CxfCv4eikddjnMLaDZtJNHEG3rXoNXoSHoEMEgE8bu4HxAVEo7aCHgLTw5NCcdbwTGz",
  "key30": "4cJbdzq3BaiPuXcke8ThjprbVUaJJqXbGrSTAJ4jaVDFmpS4dgDciyEzw5n1GXYSu9A8FbQe9dgwYrLuyJQev1ys",
  "key31": "5Tuzt65p4SED3Wh5bA9PUKhnKe6kS6WC1WxRaB34WnNg9qaCBNjcHpeLBVDJfJaWBoumanQLknPPZ5WfnDf8FHMB"
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
