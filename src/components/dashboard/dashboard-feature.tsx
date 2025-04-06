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
    "2hm6K7NqLt3cX6oyiYQnycTFiA64JwduPLfUmTejRk5tMzSE57uzTqY1NWr1nMxWmPHKYXswqHHJc2fd7ELa5uzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAHE3BQL5FBsrfLJ1pfxxi2NUq1KaLzFHsp6WLfVuuDvbZRVNSoUbMBoqWzKDvUB8EZ46n17T8R5UNodZE2hPuu",
  "key1": "4TECH7ru5fivrWHkYhEfMpk8v9iShXEZqRvfybqpLj16bEf9NxwFjiCoJGerXA6CgidM69Yftm9besU6J27nqYtJ",
  "key2": "39xFrtVkpB8W64WaBDLyxZwUNiUrpKLtwYP236FHBBzb8d7bxKBeG2UomGUJKBPzDwH7cCLZ17tzDebiPcdrhepb",
  "key3": "3G2wvmMZGJFNXeGKWwD43UykzD6vLyyxbUqaaJVMLmU75ZwBpxMPtZrnFcq8fNJuW1X7aSiQwxWq5PmQNkQDaRPA",
  "key4": "5yYwf3BefiKX7nQxEG3VsYJJLWvCSaZMM3vuGMS4UpNZNVWXAYM9UeaD2wJbgkeoXgMEBFxSdgNhCMjXAp5MC9Tv",
  "key5": "WTpVppsUYLkJ4Zk7t9vWXXVJVUYdoYq2qS5UoJujKqxk42JfSAjLBdVqhs4VTJi1phdSBrty32fx4VEdaX3jrsC",
  "key6": "2sWxVsx6QNxY7ykf49GRuYcYQwyLvyK4skvG9P6B8fWH3RY72SfG9szNRhT2RYivZ6pCpkX2yL4E83vYDfGrPFHv",
  "key7": "5RLe6cHmDsc6YojKTpNZyxuUXtmfc1vN9Dgred5h4jKN55mFdZ3zM4QpDPzSGsjtitzKU5MU9csY5EhDbhQiFinN",
  "key8": "MJwPgXMCm5sgBkgTXY34jJZ5aci8Gng4j2dsqBCaDAEro6NJMe6uJqKTyUmWtaqQckr9vLfBWobD7bHsCY31cFQ",
  "key9": "qJLW1UHU51hdjCYgGaM19RARKcryBZSA7zZb3Ve3PRMNu3tb9muC8oEJTszTrvA26bJ4pxQn67zNRx9rH5YcHb8",
  "key10": "5HLVyPLmULEBfqYUALf7jTfoJ3heMpmPuFhAdxq1cnbiryFzqjqpFxdMJiHyDh7rrypiPYKi9XAkkaon7mcExCUm",
  "key11": "334jmYQT9417xsmwFoSDFs3i9frRVeQCy9LdJ1EeRwAj7jBJwwrykzco9VvwnwDsDa5FKbHanKeRfG9qaXFGmPQi",
  "key12": "3qdbdg87JqkzraJiNwM3uJRKvLVyF6sME12GPQhKVPLnuaSDoeniUF3c6rUmZxnKvh3rhb9uLbnHeSWqKqUFVkui",
  "key13": "2P1VBNsr7yPEToUSrdKSpkopMfSFwxFaFxtCmKLi6E74ZTzggwQS4qZpVQu8S4YwvrEtsxdDCd76xruj158DGJRi",
  "key14": "5Z4XjKr5in6HMQGs9XkiqLM8nsFMdVtPza1poTBz1L6ip81F3AcqjA3GNWk9T5AoAPSKcTxT1i1jyUQZRoUT8jdj",
  "key15": "2vufEBwa4RkNGvdEYtgDgAuwfXnTeeDqkrokWojGmQ3GFntkVfDHMrgvZ5FrkzjAJywPGRYM9qcMVFNYEFSbFULi",
  "key16": "32yNS6JmmHTG9CY1xnvDNsUGeH2VNuwtk4NZd5ZmAMLTgzfwfC5jGGvTKNyzXJwXW1dtqb7eFZfaCwLqahoo3wTm",
  "key17": "BKReAfTHyXsHCFath39KmUUpsLEwmVNVxSm4D8qbLuih5QJjEi7za9joJsUtJaQqZY7DStXCDvkdkDDPf2VjzYj",
  "key18": "42YA3Ksp6Acu23BoLZa7AA44pBNPSX1pMWKA1gphGSd9DyWXVx1MTg1fZg1eg2QoEU96SoPDxk4sfNvG1xYBLp4c",
  "key19": "3nZgtGBNtxwGqPBva3tuTQd6uBmRzVb76zr9tDkpxEBw562Utmif1L3YtZV6LcaD4RV5UsGgvnHPLn3QvUhUMeSS",
  "key20": "4R8Nt1i8qG8o96eYm4MVFxLxM7u7hVdmPY5z3f4hdDG5RzGzVHEcNjeQZZZCPcf7PZH5A88j1Fo1H7oj6QQcf6Lx",
  "key21": "5GKsHtZrKFMg4pDaZPuAJ9ouzrRLxynj3ekXMfPgFTZxNK25cQPjVjxnyCcFwXCCEMEmoHzd6cK8S8hqxUJdkxXA",
  "key22": "QwiJT3KmZChuxaE4aZxSnDe2y1Ta9quaVCHzuEsFVb9S3pos2i1ccSawk8M7kTZ3wGTbTLxPH4jLcbwAtFBMa8r",
  "key23": "5ys5bbXHMehT7iY3LWWgJd2TjUZwDiHM4mKiLGaYzQc3owtajt7v7uGvighU7LSTgWXoqj9SXXNrA4oDZkpqRrG9",
  "key24": "3a7PTk4fAFaWQcrb6nNMe1nQMQqHVQmAKWFPdDwC2neqrQeT3EX2AKcFErSV5DkcH3jLT8YF7cC543rWk6t9wbSn",
  "key25": "2DJaz2jQytXPJGyR31eMLguzt6bCS4zowWXvnvdCVfWC6mL7ReyFLqdYpLUdHVn1uFp9dA2fpBmasbo17QYSNYYf",
  "key26": "2GJrqnQtpwrzExNG3dYphRhDtgcquRGbSkSx1mddsZS5wW9u9f2RDjbkdBWQbXDX819m2WBFKGKiSd7VGmSZ7MjK",
  "key27": "4vJeF4zn7NorgQuWWrWx3HnQe7hogqEKu75hSxR7KvcSHebLKApSzfCedCvRWkFBNbbXNvCHzCHtLqWREioXhV9P",
  "key28": "4hGd925DuNW8uNiv4b4hKt7apyzm55oYSpmZj8BmiBF9f8c39neDzT2BfVwKta5nJSva3oijPsuwPMniwVV19ap",
  "key29": "3hygWqkQ5WYf97bNgtUz1GYWGHfmn2VTbn3cXRcpWcj6XtYjCtJiobQH1ZVvu689kAASA8Vpo69dq3W2A73KEuQX",
  "key30": "3KZu7v1gyTvD2ffjgaWu4hwosLB3o3x3LHksmQkxHRTWCDooCkyGUL2FnkhtiSkBtgtMWrwCMrakDL1ar3gHYutc",
  "key31": "3aHNBsPtDSDRMYbNKkr5ryrokrQMXJhQxzamWrvc3rHiwgBnrc1htbKuR4xe4J4cn6gz5o6P7vJinZUBQv7AhzvY",
  "key32": "3L7b99xn6tFsqUG9FYPoBwmhCnn8gWNKsR9MRBDq4hfdRF5CEwkMxt5Fb9erQfsZHSX3pobVqUPzrYGA96U6xemk",
  "key33": "4PemeTJmsWqrmX5AGRcKjpCWtVcRUgvhsyd2ZFXN5pncgt6AcHRLaHS7ijCcMicFcdRJ71KCTCajjyvDUZkFLyED",
  "key34": "4sVgyVj6umTgXfistxBT1tWrBiLd51E1QsxHEQ2bkKMjtGhko1cAbwvpyJfKjxTQR7PQtnUrMavZAzyRe3SityYB",
  "key35": "2B2QEVfB21k2G2vR9cSecFufrHP3j8TXQdP1T4BsVZcQ79Sx1dvusvBWJFyiPaCWwiKu8HfLQyJo1734SQAfHBwQ",
  "key36": "2LUDyB67Zp3AKbmphBWFyUhi2L5cBiUxb9vodZu2iMKtsiDugZ4oo8eStyAsVckndkqAqRJSWX438pTqWF6BdL5G",
  "key37": "sbuZw6tQTrFWVQrk8iPDEzUxBRT9s2HfFzng6fc4U3o91C9zuZkYc9SjdLoTXD2hcZ5LcLGpr96kZuy8hFAotwj",
  "key38": "5wou2dH2sopKpehvSSTzMCohd8r9gyYfbjo1czQmDzhFzCYRRTkfJx4uEixRHaHBVp21UsF7fsWLWCHfH9ejGQmU"
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
