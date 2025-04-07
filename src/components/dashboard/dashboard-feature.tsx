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
    "2jPBAuMUJSc58EuacQFb1eGw4zcgHQ1URyvEybSe8EBexN9pBsogXuw9F8Jf8XnuGUG1emEbf6L7SEDMa8R5rFrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49d1WPH67TuPe8iQ8M3e64rvhtG4CC6ZgeZg2MWynyS4XiWp7uuPRkrGtDT3CNNU1LqS97E2uLCDVGuAcyFudRd8",
  "key1": "5pCwHKR9YUpvDKVuxeavT4VkzzZ8xzedGmp4BUEaRXRtheos3ZZFRkPfQqPdsaLyB6VyUbBedFUgcAvmP5g2V93K",
  "key2": "jgoaNhNsULwPhLXh3eHUgRPjmxcs3J4kjvf19WGdHPZrBpHcTLykXvZypTkuqLKnzwzFChTv96Uhs8nmP8Vm668",
  "key3": "4HXvu8rpxqgEAoZS99M1H7z9kfAz9fMSXtjws6rLrsWLqHJsr5SDW5uhF74QcYkiYCCTbt4ge4DpDexbSBBf8TVT",
  "key4": "4SKfTXFqUNMGANL5FVUYfJq7PH1kkYLPAGEkysVHT4R5D7GCguBw3GURiGgLFDx27CjxJjyKJpcRZSZjUu8QdhGy",
  "key5": "4dsiWDtm95m26Vrf5KUFCjENvXVGfpvg6HWoahdvRkFSpxEx47FdW1sZmTHpAgWtpK98x8KgaXUo3KvEeE2CHt35",
  "key6": "4WpLrJ9pWeviK5H6UhYU46cSRbtN3q7A1F2jECQ1v6nhr2Pow6HbiL2m3UxSqnhHZqjGcLdFrNHcu4mAFxLvA4ST",
  "key7": "5gFFzbe58S9gRQc4ypzmUe3kP317s1mL8EqfKVWxD7nLSbnDnzBo6ob3H9Wd6W5NLSX6TwHm1k5huG13DetBiKh5",
  "key8": "th3PgL2ShWtN21FSUDqMeLeuaMStXc8YeVDwXF1EtQQE3vmRMSydV38Qn4TarsdoAuyvHFKijYdPzBDHrHZa12P",
  "key9": "2D7iTDqj2a3BixmgsZC6bPQtJQz8WYo8UpYHZu7W9N5z5H5fC7gnnUnkHfcNyHmjFjTLhzW7rCpVZAx8cAZ2nePu",
  "key10": "2hNfFh63zZnRcdwKSgB686p6ersBwD64HoPhXhtTBG1Xk2WTemayfd7o8DGg7jzavR7AMvtjLDhMqbcWJ2VjrTKA",
  "key11": "TXzCRiBqWZrtGnoq4ehjvFmwU9kGQKHW1MaX8ZooA6ypNtJbS1XusuKTNyQmxHjTe93nh7mZ1RyvJDaJNSjZvDp",
  "key12": "4VJgEBGXgo1tp48xnZAVCwjm5LhhMk1tbvxqNH3qGjgFrgfShFpsHgHzTEuBM9GpMixqY5Q15GHsMcpj6xtBui2T",
  "key13": "frNvcjMrVr4v2G5nXk1ZJu4pMb8mqhjVEgS55bUpP5wbdyqk8YktZtwVf92GDeJTgxsYAYubFykcfH5JTYd8jB6",
  "key14": "5RQXu8aYvGY38p9ZyW1LCBGMN5ZcdzAH5tFunXEC7ZX7qgxQj734J7vDYk6FAP68umfaZsi3XwtWA5c3oALqdMLz",
  "key15": "4Luga5DmdHTNEg2cGPVcXUq5PaQkkg66iZM5HKgpZ3TFC2BakVkrU7i6Jw9rvpc4VzvCRngDY9Djn3peR5E1Ywim",
  "key16": "dk8TYHsknSe2z4X5WGBBnsqoPQYjXg1g7h2sWw5QB8KF71qVW1FsdqkwzpiN6cLaPAdw1St1X7rCwe1pQNtcxZX",
  "key17": "4WRMo4HxF3UWchKAFuUbyj3qCTUJcBtNe6LxGrw7X89L2EXgG3rDKVnRph67SgTn8XPMLqJqXHCAaJNVTcNurBQu",
  "key18": "4WwC3PPbq4DYTpADC6GK9PWpgJPQ2JtBbAm9uovfoB7KS4KfMsfwJP8xeuNbc8kdR2ZNBihCZDsCe3B1EPVgduib",
  "key19": "4kcLuLmv34DzeYmUy4iWjgQX1TinLeGLkwSBfcZYPXJDxovxKLmGBhi2KWdStPJAhcpyeHYZowEJW7vGmeGAqyvq",
  "key20": "4b2KhPVjtNm6foufAeHLbjVxaYYGFnVtw3Y5ZW4fuCbF32FjJ5eL3BF2t9C6QLmiuTMWzCwN1qYCBJPnxLgvn5Ly",
  "key21": "38yKrj5iKncQ9da9ifPV63oAEXZNyuVSZi4Z3n9SgQWQC3d18gFmsRCCggEemrQbPADqDtJCvPQQk5i7fHPPxBZD",
  "key22": "2MT1pDemR4gYeihUYQkwf82M42hQKQaEAU1Qo96Rh6minvVe5Vm7PUYEc4c6wuZdN5Sz3JzN5oLE791oF573124Y",
  "key23": "2tKriv3hXXkh2sMJPuALJrKvssLMu56sN5bc3wT5HiRZk1wqhhDSZa9ZbU7sqEvWjMoNXnu38Eqg8C8bynsybZDh",
  "key24": "4G9nvwk6JSMSg2NbL47KvAvYm7kmqZXK7kP1GswV3LaYjxC8kkMY84LeqRAcnuXw2ACvBZ4uWcDqmmTLg3ZSha8F",
  "key25": "3JLr7mbWKS6Pke7cJFz69E7j6KEQVeqsHLyn46pB3ySxDYSKC7UHfLsAMu4Qd3YpdydVA8LgrLNpiU7wRJgVLLpP",
  "key26": "61Z14CvrY8D7rN53NkN5FmALGg7i81Xk2FG1FLu9EvHDgNytgKm1s4DJdjKiymWmEVZtiyepPSjCQu4S78zt1iMt",
  "key27": "4PPHeTvJiYTbJJHZAdxsLR9A6pvN6TqbaWzW5MKecbhufAJbZ7UqT9Xw4hXN7gvqRuZdJjNqhPqeTDedFmzuwFqm",
  "key28": "5p28KF7meCSSV4BKQouW8ALJHhQwS3TZzBcwMGXR95AvJZW2hhHuXMtHUyMbP7XEdyEmY9mYFNg7xwKEurrbNicW",
  "key29": "3i4hVboj7tEYLMqKhbJq8Pyt2NMrh7hqaZ1tpKhRrrzgnk5LKhEe77S6VHtUNx95vk6vFARruQHp6y3uwMPhAx9w",
  "key30": "3ixbjsJMQU4D5Gh1dVarristzxGUmiZZJ5rVz7HM92LKZxTeKMR9c9z9QYQtZCLcGYMteGcM4sa93Cjmq8mCmaSb",
  "key31": "2gRZRE5kX3nAia68fQ9hh5byAU234QHZqBxNYuDPmi1eBbDQrgPKqmiwqtEtdJqbRahr3xbfYBPzjt6FYF4C5cGG",
  "key32": "43V1wTjqtrD3iqrbxFU2h6tSbyMP514AgjDgupbT6agpDBCSkrthR4GFQKgr2GR8uXKJut2AJLnP7TCqiiZMrfpp",
  "key33": "5nfLJ7QngtBojWwUXi52nJD6E9GHj6HkTZoWTkZ4so99p3icCU6BRbavkYgQNXBJYtr2XG93DYihUCBqdhekwUjo"
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
