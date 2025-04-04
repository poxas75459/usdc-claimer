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
    "474tzo5jKZFFN6f8JHCmjdbZDU5nQV7QGviaXVUQYSsgN8RkAHSvRZ2hAYPXFAqZZmtPCAGbDeufsyASfzyKqFQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzQFet9cjP6mBEhLgxANZHJAZ64pFDABSsjBFMgoPWHZkXB53m5PdrxTq8poKCK58FHLu62bccgYmtTbxCxQyAX",
  "key1": "Fh4UmjN5oK4VDCudBMrmPLHyopexwVvuEfjsUMXXqgA3xrNk3RFdn1Ub8UsRxzQV7Ad63NNVsWPiP6aBTHDkJCN",
  "key2": "4UgTwSo1cPe8yyUtLayVbghDXw9bKTk7bpEVFxgZw1G7pdnJudr5J2rV31Ft9vqJGzS9SWZ5YNcQ643iM94MEkKf",
  "key3": "4qbQ2SFPHYe9xneMt8eCoyBrDJUPLtYGGPeY9qvZfZoHan5mYWvbaiLmxwfJkWp3dgwRjH5LWdSW7sU3QFQvv7Jy",
  "key4": "2XbicTMsLaeDSzxuwcZunbvEr3zYkUG4AsR9PeQc9HEAaSP7oRZTc4HEHU8j2o7RQfipEZ1ipJjgLBBmvBm9sDdU",
  "key5": "4xu9vgTixuwFRjMV5DHXHFASHYL4AsrXfw1njcxWdH9z334pypAhJE4LjGG9NL3RSrzUMKi9nhjwEvwNaQB5Rpj8",
  "key6": "2N2L4K4Evy4yranTPpRmBmBp6Ti1GP6fXyiYAkShvCDcWarGSSyvM8qPvXERJjeP47q9vSBaQKWh1gyDLgFUtkPb",
  "key7": "33oRU88FxGZV9BwqTZCwKeCYdgLzeyBes9xiGB3P5xJyMUNqKpYRhHmJNihdkTX1FhDeyhwgrVXxvbmC8dkGcK27",
  "key8": "5d94f8pmMft9RD3EdUJPPP5nGaa9w9EQs4SanYFrVk5cXC5MwDJ3nFzQFU1Pqy5mRDwqWWd9K8mJtqXTy9UQ5myz",
  "key9": "4CQsVxkfafm5aRASGr9aFQuR6KNXwDo92agR2AHmVHZfj6wVs6phBo2za8FEDFd8C769jdR4GyeMKsXU5p579svE",
  "key10": "3cJ51xGtPPNXJSoEzWPCQYMuQQzSQntB26Ne2UvfkmsGiEi8wYwQSkmNfXpTufoUpUdZyQpnbxM4MiUoGZNBEST3",
  "key11": "2GVaqrDgbHP7ZzJGwp9DPf5ReoHCcBJJ75yCq5qCGvh4wp9h2Cp8Avegfyo1EsxuMdphwVXbThnazmr1qBM7Z7Kv",
  "key12": "3ud2ErsocB5DUqrjsR1uNe9d4sKKcNDRePRwcPngADvLgeNFFLBxR2TFUVwAYftY18Dd3rFbHGTBjqJPJ9qvJdQ1",
  "key13": "25mN5ziB6b4RQ8iwv8TS4WF3ACc9fBbVwK2G4qujhJxZYQVaoADdEd3QXRYRvWUKN9U472WJ7p2Gs4EnpWY43Cni",
  "key14": "5y8mxSo6SLcN5WU3uXosm5RouBHFVB2RpXnwiiARu9n4JEbok1S977yhNCD8R6gM7z9phdgcfQHuFnTzvQSWYz1D",
  "key15": "2LuSb9iF9kxL67snkjA6hGLaTqpb1RP4fSQdb9yCdZCG2BnjpjmMZPBwbYMWE4KwF8ecws9EgBC6dKGgpHBWuA1c",
  "key16": "3pbAFDBvYbqCTggDyytvikapr4VChHNABoHygTCugjoHEPA3QE3qLgQDaupT4rhBkwZHYZacgqjD7D13b48KqWM6",
  "key17": "5SAvcfihsx1u8U4iMYH27ZobmQ2yDm7H5J93ZdAiCihhfKkA8QnSoHDA4qMjaGMihF9u4bXqBKuLoqGFdCHEaN8p",
  "key18": "5fQd6BXacVSPhx6tpdK8t9A9jiMNue5dkgLdajWKT9bY3MB7qH2HtYPdiohYXbV5stjayuEKaPehKSSwgUq6PWwx",
  "key19": "aJCQQZhDBPjoixjeS8QhqR3XTKvHSih6mLnhFBcKUTrYzYDeFhMk6ne12qmmspjfY3XJjgNZpWqV42dS9UgMghA",
  "key20": "vtgJHoihxUHQk9mF27oU27syQxcruaBWsKuZDX7ZnLGXWzmW3dPHKiRiYdvuTHKNGxMKsZNuYDcv6veuw9mBCvy",
  "key21": "35XzmrzGZpbqrvRxoM9p8inMzfzHv989t4LHEd3GWkw4BsZ1xdHKFFjAiK2kYehpzTriBMxxmcCLZbzBDAkRKsCe",
  "key22": "1ykh4tnJjFDtFzXnTneQxnXFMeXPNujWZemG3qhbx5eXfFqTUHuYL9x2oLrqQrwDnehGNYMigqeJf39r91Y32cd",
  "key23": "2nEeAdQeicxTMXY9B7meEK2JTCX7z2dRt7esrYU1FTq6QvarM9ki2q2jv7jxUHRxD7BrMGFAdKUoGyTT1nmpKg2P",
  "key24": "5BeWMuznmvdPFtRPyQuW16Reytd5ddPjQ2azwhZ5Qxkf4cXVzN1QvLyhjBmrFMYhyPe9TkydZux5tzUuaEdp7RiV",
  "key25": "2qH1WL7tfDx4XAzNo4A56Y8PtmA4rayqNLWfRrEN4JARUmvZCTastoidq6kqUDCEe3GKzNEhGpeBcwJ5jXfznA9n",
  "key26": "3vaM9mkZ7LLFE9ZVTSmy79VtxTKkUmbKsEsiBJFitPUMe46pn4Nd83szMGRmunb3BjRSbhAp7EpbZsZErVGod3Le",
  "key27": "4NuLa2Y7kA8m6whAcSh6BpUzCGR5sQs1hPaKs3Whup28EmYdU7PrpEuTTx8ktczcaxWfgjwzR6Vnu4FcgkRLPGvS",
  "key28": "46WW9vutRGyFrrbjfWae42P4jvwvMTFtzVu2ZmpShYXKs4fp1G7fA8ZhBsbLuB5YB8Xq2EEj7wGMKSVXcjF8C3cg"
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
