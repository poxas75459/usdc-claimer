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
    "5mWtuakrz9fwXRF8J4g3b3u6GLEceUVVNDDuhQAFvXVpzcBykRXqzygBsMc3U5JgBaHBNnDkd5wq6HTDhnXid2U2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxyAjeJAWTDyS49NCpVwGuaJ1av39rA5N1C5vP9XJMXVUjfDNSxM2g5xZ4uBXeki5D5xg5WQJwHSBgeWFctHoBK",
  "key1": "52xQTumPSKNSU9pA8rHtqLv7MiBcXs23jL1H8pK9e8R2Yaozdp7pyH2rB8utGaSXS6uiJ9yo5WxJbcRUiUySrAK5",
  "key2": "4t9ztM3Brd8KTE5QmEnvzRKGY9dGMyow6jjsAgxC5jM2xRfB7UDi3KxhtHjrYGWmRsLLRDMiNGFHUZzy5iBjRhvP",
  "key3": "5tNnoNRnaCHgwZxaXDXcvnS7FHzdWm2kFbXxMDwXp8SrLhJ1PYJJxSSZqmtPuAFwDcn9TPp98eMBmca3T9QKTjR4",
  "key4": "4wtD6YyEz5WmR7WbwzU4f1PN294vqHD7xLXaXrq9mRXjnWw5AVbDThC732XpG6SRgEFvJfMXFZzB91msVxiFPqp5",
  "key5": "3uNWRbsDHPjLJDpXwyTmrGvvxHHBMyZPrZcULzG64GqNyghk3qtwGWNeuQ7WTu3wvCC1GBsYq3CNpZxRnqz4UdiU",
  "key6": "2DxAEeYRTm4MxbNEaE4otEsqbMRkQnvYq8rgQ3E9x89abfrpujTNbEZiKtTWUEZnqhZk6d16isXWXGjJvkJSqYFa",
  "key7": "2Sij4PGQnhLhLtUfUqMdCr4UHeDyU5bLLuvNrvCXfTagajkvxGF5RsCYwLdaZRLEpYWRXiedYhRLo8aJuEBZ89ks",
  "key8": "5HKZitpk3nSNtjEpBpMxnBQvxPY4y7wNTfpsAd76KNNbbAm6eNxrpAZUjMD3XgD17qmmWmYdgFyXezW2uJXCzpaD",
  "key9": "3GpGTkWDSm4a3QQD9K1UxEM8HdLDCpqKtB8nR7iYhxGngbeGffnLLDdU8aUaQrKRAyLA5Ww1N4b76prYrBTf5Qie",
  "key10": "4t4ijHkWJw9G5GJ88fz7daa2YdEBXbYCR3mWejA5rnHaenUifqJYDSK6k8mAscsKEjbhmL3n64FRrA5bN3jaTGCg",
  "key11": "3AiZJyyiqYRCG8gitbQb6tFzXJ1oRo6x5mgvTWxhB2G8Ue14BN5WTketxJFhnTf8r8rkMqLy7FbuXgrJ7zZNZu95",
  "key12": "4bVBEQ9HbCzJS2kEN8BXfCwPTsrE8RNCWBgb5AsuzXg5or9hHW4KokUHZnoaBxECijVqEbUCT8qkX96CWTxEGsQ1",
  "key13": "5jcn4jSw1KA6ee5Z8NVUsPRh5ER6UbLznvvmfB41SF32ii38tb5hWMyi9jVuQAVtb9bDWJykbMF8ccM7LEZMSkdt",
  "key14": "a9UBcGMh9WPrkrF1inKZzgLVjY1sG1y5ExDzo7b6oxfnuJy9H4woZes7veVCNJHcw5qZhBWazDabmG9SAauQGWs",
  "key15": "5JjSKEbGbLh3vXmJkNv4hmM1LuwuvL9WvsqDVuDKo3a5C5aX4EF23xiUPnGHnap5xiggCvL3PUDon8TTNcNbNs28",
  "key16": "S7gusvV7FSPqGX9k4CTye5pRFMYC5JcMw2D6EkU2VGxAotk5zG76BBE46AmDko8a6QNqkcFPsHUAbMBxMpT4RBe",
  "key17": "8tu2LZfibgoyTTS8DPzav6U8qHaRFV6RVrjjytQKvf7nWkMVUd2YsQ9iNRHUT4C3a1JFMfQ9eGpZAhCwgArC3Yk",
  "key18": "3pU3R55JY9BRwCtVs7SZ8KC29L1Lj2XR3BbpkWjTxzLrb86iDFLxgxMGLPyNznbcruqmiGeDynaTxWuqcD7uzijx",
  "key19": "4GghttoyDxTeguR5F4yh5Jqv7GccDcdDrVQNyntGKi4fjrot7aVjRFm4Yk5WtpuzmqbyBKbtHXnekJtQPA8Ak3iV",
  "key20": "b99CGnQicxkMawHd1v2vUbx24YzX3Vc7rumiJFecaqDULZK9k72XiPJexmThvUMGwY94n6RHXCL5XCrBy3PYM2Y",
  "key21": "5fvc2VRKA2hgTPxxGBJ9XNfNG8EzdyoXf3nrrW2CkJHEzE1v1LT6uFjFjknDGgfRK823fpwSZmrkmH1Hk7ygrmsJ",
  "key22": "42Edet4RVSn62i22UWXqAoDzmiwdyBkwNTY8iPvgvWjZaJnp3jXdTV1PaoTUiJbMVSmgWnE8iUE68RpuKj8KbouZ",
  "key23": "ybPK8yzqW4T1UPf1Q6e3xV5Z12Mp7jUmSjEbi7qCDjffuFtQRPhwC1j2sxpnV6byVrTCsZzcqXBeurcyDWBZi6s",
  "key24": "cYw33eWvhfihVd5D56Lg1vVJCR26ec7vdSQCiHNuuPVWtduBhHLTbK9bKAsch2K5WHceX4xNxKGmZYHJ8Z3GFwT",
  "key25": "5VWTVM7vDX2upxaxh59y5Rm3dERzkvJdVJzThj9swPMzuoAhwxakSe2h4ajLJ9ZZxb2KB8gyTDG9zCFte7Fu9xLR"
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
