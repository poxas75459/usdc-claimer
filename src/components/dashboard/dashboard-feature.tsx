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
    "4PEUMgezY4TwqRNy9nbwB1CvpF7cVRaQRJArf6Ui9t1JsHeZC9AgCbk9tzqSikxkCGw5RaVdJZYFfNbUP9AdHtRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zAL7EvbQBguDuPS3fu9d1uTjVSfA7sh5iPeYeaseFnsAkwKZPMHvNM3r1L1gpayjJXJcPnMi9YGpFRgNecxYgY4",
  "key1": "2rg3wqp9AzGDzvC7JSvyCajzUPxFPDUv48z4G5T9NJhN5WpjKYsVyYLq4ZBgocLzEmGbmLYJ9KxtE1dRVdv7DQjD",
  "key2": "4xvNWXX53ivGdE4ektK2WduqdRqwR3xmoErXzgyRsikrwMmyRxHUR8u71jPDmHLvY8k8cGLqeW2VnSFdzhnTbu5",
  "key3": "4UvTmiZPtof9wwAUWTqHPGq5o2iQv5TJRo6kTykWCqwKZczksxZ6GZGz7x7T4ReMupkdKv9jxJGJPTBxhJqk9uhF",
  "key4": "5o7bWbPxtRduWi93HqYZbXXZQR3XAxnYQaeMY7w8xMRycLyyN3yYkKo7t7DBbAKWWVpY5vR5ZVkYN5an6AzTfjzq",
  "key5": "a51SofGUH3BitSxvUhR4tA4wsm9t8BZt4W6RUH1KiJ7aw3uVwfg98UbS8MGKYYXScZRs1KdpDQCm1gcSCRpXFWY",
  "key6": "sLdKkxnJvFPA2Dep17wBgU88TfLLiXJJUAGHQnLPGmhYmKVRjhkjhme2DZ321WKrssyqpzQ5m7M9trtvKXCUv22",
  "key7": "3b8uFetxi8be1Sk1R3J6qL6UiciMecxCjfpaxCajoAw8qRZSPmdBoiC2qYGH4drzUPkUTcvmTADtnZYB2g8SQowf",
  "key8": "2dUU65Ju3kHET3qi3Bk8EoyRf7YLJ2P3JhLDhx8SGiRnk4JfAPS8YPHibnENw3p1gqMPqW6cFW2mJ3DcuRKsZS9Z",
  "key9": "5RsU4EnD2azRnS2pVNRs6u6g6q4dnynU9qAYYk7PihZFbZqZYcy82w8k9CFVyv2m3fZHCRfSGomqQrWdgLJKaUfB",
  "key10": "39kajb4JNcr5y9pytPktaaHnSmsKqpc2yCD4egWv13T4tgLr3YxgLh73jvjnDay32wMVNg4x4FUH9c9UbUFVK4mj",
  "key11": "Cxzfku75eyouAY7kKyEw48ZD1keu13748TM1YVrqk2urZS85EgU3q7hF95MDhPpkcig2sFHV9ietxPw65CCnrzW",
  "key12": "22dBGN6wKk4YmhYg5AqxFy74F4DyBcv4AwMnePGZFtyjsinZprpDnXuTQ4LWKPsdCwvB2wpFTyK63abvWqLG7LS6",
  "key13": "nQbtWds3h7ZSD5mBFaM8Md4qDdZwkQEk7Wi3gJwB7KU5ds2GYvNBCnYZZC4S4MaCoMxVae6bbzb7CenxHqbwkbP",
  "key14": "4vCGyohY9LN1Ck4xKMDzArRbxX5WctBBgXF4ftahU6Fk9FBsjmYwABxVYxbRV73zFrduoa7XPZQWLMFcASE9NZop",
  "key15": "SVMKEi2Keeq2siy4VQjUChCeW44sJpG3naF56hvQWMi8diCuKV5hnTtPLkapwdA3RRhswcdnq2CmpipuLX8GLvX",
  "key16": "omhsmM2FAezcBqNMj7YAzrjjF8HyAqoTV8rvUi4GoD3cqTUqetLTGeZ8YG9JdFxM9WHE4mwHBCf23titneGrLBQ",
  "key17": "2o3CW8svd3Nez1RrJSjrGo2svuowLu3DPikLBEhiFcRZrhkrqKjpvkrTZyroCm12xPyNqg67SaNXJvvsUinWJCbU",
  "key18": "3ZWcst9rAknWBbxGQQ334WNT1okdGhawhUArVdAriv1w3yp9G3pjVqRk3JgLcYAP9kX6NHypfyM8LtmkGQdEr5Lt",
  "key19": "484chat3W2Y8pWoyLvUWKjX7LghLDWicrJWGrgT4For2zYwrEhge71755m3Qtm97GR6pfsoZ5cP5Q2Ag7CmmfxxA",
  "key20": "2Cpos3uwPuq6k1qFbj7tWeQj8VgJ6tKMZCnU7NqDhMMo4bWggnXqL47dhdCfBwobTKx7NzDy5CiE2y9dHMMrx24z",
  "key21": "2cZthUDYTNMuQn7fY4CuFo9UqCGhJeCQH2QEmueJXGJohAPK5Buy3aC1d5mGZFdVVswJzzKQMqrb2RyNfaq3QfGd",
  "key22": "4oJ1QwqZoKNd6a6nq6oG4BXzc6PvUbbdPkGiqBZuJF3EKzj4pKjgXKoiwaRdzyWNvNSFBH4MCAqqSvL2Nu5Kyk4e",
  "key23": "ps9zRSznpiSkYHHSYGasFnBkrEfsYHUApHeL5PnvA2e6MCxBnE6zXrVMuHhEe9SKshWoMRzTDArh4djgDJLVijL",
  "key24": "61eMpbkAsSFu4vU7rt1ok9Ef4SjwCQUfa5fhwx4toMbLd4wDAnEBzgc29V3r5Mm7uyTXfKCYCA7LhLNN7H9vbGVC",
  "key25": "dArg3Q2maXBa3QhAu6JizYnM1tjPNwMxrxjJEEDuDa9iBPU1pQ2zqhs36xnZzDb5sAootPzeagFRuzMLBAebtGc",
  "key26": "66WYL5CjEpaUCrMncFeVZ93GmRrnMRaaBE5dFdNq1rAqWxMRRUz1MwFu8FWzxmdGjLAVHPXK3yvB7fcHjryZWYW3",
  "key27": "2kmavhSGV5E22md4BhQoMWMNtNBaTF6ncjQ61VRkg62SJMWY13MJzzCmbwRpZVEfm87z31m9SyKY4dfxVa5UqCRe",
  "key28": "CyM2wY6zdYeF2MhZ9TWDccu77MmQuh32qYtivTLNYX5d624j1xQZvvru7NXDCzMymSXtv5x2r7c8ZWBCud6s2Ay",
  "key29": "5B6ZaCLCxY7MmVfGa35LhU9wUsFmpaHVQEL7N9AjL6cz4U5rWFZdNjZeQhMv7WuCrdqaNENSmgZqYxrdaZxY6CWP",
  "key30": "4mZdBU3qUPtcLmG31DXoZD94ZKoPboy3qbkENfwH3gXi9L6BhuhMazLYP37g2ngMkJCZt4sspqrX5u9jdu4z57hd",
  "key31": "54wNJF1FBhno3m1gFiGX8Rwd3DvtxPgKDcHTedB8GN2hBchRxZcBWk1WT6uEJ6CtRvumZEamTFkTHyy4bxPZvgDv",
  "key32": "4d4o7CVkc953szv7tMczEhANYNYtydpJZhP9KRrz1oVyk4Mjmx34D1qwDt5PRhr1zv9ZRFAc2jwGHJq1vbX2MXp8",
  "key33": "4xQ7eTcuN55CxRF7UjbbtBGz3pgB2YTqNC7Meq8DD2TN7ynKuCL1sHA43hUj2bHpR8D7BVd5NVkyLNXBsQPZp2D9",
  "key34": "3TPffp868tpo3PLSco7B7PnE8VtD8ibGpEQMPTwDzrRNUdEpLCDb2bH6Vv2fFYBqRPoLof2U4RUDETYWVptroAo",
  "key35": "5K5c2LY6aXndYvAaF6dz75Ej2xzrxVdTvHAzWMEPUA86PU2iZdjRv592EEBNqovPSGH744inHs94pKi8Zakda4p9"
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
