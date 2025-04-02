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
    "497Qnekaj2TvHu2gcw7pC4hk4JCGh9ZV9q9kEKgLSYR4mrJNjVgESFBBhT1PaUy9AY9avfse8xGf8YkDEetuxoyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4er2za9JVVK6b7LLMR1mYSKyGfLsSpj7KHNr2ZNmZ2TVpVGWDZLSqfP72Rx6xgG9weuVVao2A8onqCLEDactwi2k",
  "key1": "2eiLuTg7Tu6CjLnYmfCczxLBM1kJgG86TXTjiVe7Gt8NR8yMDfQ2icbxca2HgwfMB8UMDVAPFNvuhDN6pffFyLEM",
  "key2": "32t3F44AkZcF5s73WQpLY7VSs8HQrmWAGEYKxETMiKSwVSbQq5pftetDX1f5ALmHcnZjNQL8BuhQCgy8VJqsFRMo",
  "key3": "2fF5KXw839axgpQo9fFo96BpdYTzCmmhKHtoZUEz1EobxVQvbNveBFD3Ubey1o1ErF5SDqVcEtCoBxhPxi1AdtoZ",
  "key4": "3pqoGqos9Ad3kMZsxUeC4u5CYWPmb91exbgptBgiCSS44M2XJzn7ZDZSh8tQ2aWuFJwhauBJMmkkDrb4fnvBz3XG",
  "key5": "3DzXUn6sQTk4EYMKbJWr5SpcNDHxB2iEorhrzPNURMrt6kjKQfsQeHuBzyEj9ogg4K7sfb461bMcuS29ZJJZzWto",
  "key6": "2QvgHH2Jumh7aHhXuKioEukDgD3eiThg7Eq6g3knhcS6XX5xkmtKjrv4qBSZBfySWVFNAcbBhZdZCYrT1c4bzzSC",
  "key7": "2wkqMkwyAJXJmdcx3osQe3PoK84BSv5uTgAD3kDr5hw6tjqoPEvLZyjANNX1HS4qqYi1zmwMRmyYVC8i3eAJX5oW",
  "key8": "FWdD99yFdAR6N2mhUZKxAeJV2bRzGvykeGRXpEVCwMwUGiGXByfBc9HM6sj21e3CuyFvTi4mhm1ZqGfpCeEkbBx",
  "key9": "338b5SLwBBQfkszZ6Vgctm8y9ugb3jmioqkX8m798zBbWpzcSUCXMPjuXqxAwHEEM7mfW2CaFGfQYJv4XoKCeKZD",
  "key10": "3ESzTpWgKjK1GtkAArgQkrhejMjJRKx2Dcn6Uw8j3BFEKkTgqVjLnpEKbUJDe9PrxazFUnqKtjdaXqa1FBqT5xs",
  "key11": "5BJwwscW96XXeTfTWcMTrRTwEA5eaHtK5KnSm2UihYfmwGJ6G9AX9pSHsnQcn2b1LeMJkXX223SgCtwzWMbd1hgC",
  "key12": "2UboYe2CvZqGCN1mgP3EW7yD244CzvJxEjmNbDrkGkNtKBLgoZr2mEgomBHyrwK7EXT7fjbwPR57V1pmoYiakZ8P",
  "key13": "59ZVyMWqJwAGcCntB5qgNVE5BfYMr7s9bZUZZLAY9XEqPpn7LYeiqdEhFDnfGX185cBEJ4yh3RvVMp7bwGtCzKNz",
  "key14": "4aSX1iQJ4HFkWk72bf8Ewk5BRK67BQn9FmvfZUt4iBsS19GHG88H6qHfKjaSi8KYWDoZ5E7eJrmKdcDrQGYHVVL4",
  "key15": "pzHPjHhosHUobPiZpPPWbRQoxuB4u3Ya53xa78JRbvDqzYtLUPTkSEkxRNetDmiuxwdFujaAwFHkSj6jiEsqowU",
  "key16": "2ytXKmjh8DN6BQhXDLPGB2X21qxpPLqjAjVUZQGPV7Mr7soKrNKAFCn4Nik1i4b3KMpAw5mM2EnWCpMfd2usGd4T",
  "key17": "3mYWvcLHx4mQug9cTrhg8ZKTLbL8UhPKXuQxL9bRDBw74zohkH9KubWKDT2QE5LXQT5oTMXYoVaeP9PeJxLr2Kzm",
  "key18": "yRNFt83QisULMecFwCXAsAMXCCDdWUg71bjnmQaAq8Z8WdofJcNSnPAwtEoGcLwYxG6TTLWRiqKkUrv8DMPhmqS",
  "key19": "PtvnHXuE1NdFwJynQ4hy1sgyjmJYb3dMBvPeopTWgcT3yJ3bnstPGALsLQr7WBmjk9FHr3b5x5zNoWe9wg7f3sM",
  "key20": "24QYwMtnfnWJKbbFXGu7QfDiKDfxu8X8PtWLqp993LadhqEHWY1zLE3a96rQvXt7kk33HRxT35ppaRo7dfyS1Zp3",
  "key21": "49HRL7CWnDRQtZ71r5SaZTuAnXtKJDF2q9baz4R6V1KiXtemT2MdxBsWbjgwSqSFXjCbVRpQi8ZCVndupDg6mH8z",
  "key22": "4FsW7g9J5CMt3n7pEbjsspKTLGhNSwDxnaFmAGwU9rmdZ3AVA6KBpnizXzd4mvyXSHKNiED5ifZiSRGboLNALpp6",
  "key23": "2dbM1SgbEvjRpvg7afoDtgB11SMr3VSRuCBxnKhxpbjv3P9R4oJRz8or7aSLHZkaft2wVWuXZ2BiXYmSCvXc4a4n",
  "key24": "5hNxQTjUFtwsg22ypREfi7aZ6y28mY7uf1npAq5U2iuckuPyjJtYpWjLiFCS47H7HWtNeeqeBpa7vLLMWWLiQDF4",
  "key25": "5rrK1FQmg3UNgBTsNY2ebU7iX1sGFzTfYmadFmKEfvibo1Nf939XH5gRgLdPDByyKtboavBxbY2bE1DXuNHBuSDS",
  "key26": "2VenT4dafgVfQPGhtFzrRpPkS9LYG7B5uuNeyM39QuZBDKtjfhvmSpYZhC4459mpQ18gmD6AaBtrtjVZFJTKTx72",
  "key27": "24qGpXUKrtCEKtJtw9FcKe9KnK2gEkZB5t7jK1mnByyCuPd5kHs9Tns3q7JhHh2uyBtZUJwJvCqbfRUqausgPGQn",
  "key28": "2LAGcD36hT11WFqLsK8KreaU6p8DdTP9dTjQyvJqhvUUVzv6FfR8M47fDfXHDiDpEA7GvrdZbCFcb7csXTLnvfEQ",
  "key29": "4pseKp1Qu9fZWNJyk3Nx5QdR52yc5RefguVdLrqxYy1nKoDvRmWcaaoHs6Nc99Aj5xEJWrynNJQuFDX6rRHS8gwR",
  "key30": "5a4BZ4YAoodDxhW8XXSUGVhnnaLpoCb66UPLwkm2EQ22MUGv787LE2h8TFUwhWxbWyHcQRXK6oz1M4mhnEiPYa4D",
  "key31": "3htccmsfhP2vMmLXCfenfFrCGhms2czhpcdwewE6REwfVw9KdNbkS3noK91q2bE67AX4PSH7nfs1784wZvNUde3m",
  "key32": "3crkThzzESyz4dk86zCzjFzk2Kjys4xn1W34RWAfA6ohhUA2EpSxzxaCtUPRaztBDsvmHHxXuNU3rKQ3PQAUrsJi",
  "key33": "4iJJLh21XJW5kHmobtghSUZiuyWzD6aXbkTDWz9VjC7xnXAwZZAiC6QohpNL6B5TwQZrjBy5zPupxqECzcMQ5oVG",
  "key34": "4cXE5qEuzMqRwZZjB38EtE1D4XbX3ZhEmhoodwuhy1jgHv9ShVu7bwQgPSukMAdZAQFKEcU7M9fqNEBCb9mSEqwR",
  "key35": "5DYys2LeWkt2CtwQ2L2oy1xqi8rifLWQH2fBqWDWHwWdP7G9YVV3Z5FdyX7CZxs3JVJmq9gi9VAbDGAHPR9qb53G",
  "key36": "Us92mpxF6WwPmvdFUKmhvEAaHW9LwbHyDvfZWWk1X5edGruvG33Jjv6VNPxvQavJWnJ4zqu1b6G4cUYUBLGFMfS",
  "key37": "2A5cEVEN83PrPezih1KopwF37cPsWD7xhjcf8zwoQN9mpeTcon7u2zWZNvqetxszgQS8QfEftRKsvnFad4wayUgD",
  "key38": "3RJs9jKwjduvv8r72FPpAkyTbnjM49dzg7ze8BhNZAvCH44u5NgPoiACHpbMFzZW4ZsHnLsyEs6wVvZWxKsC1zS2",
  "key39": "3427rg1UjyHLgtvHUuxEHeDyR53JFujDTQ4N3UsMTxViHo4trv79Pj38kuQo16FFR2PCaabSqemn2UTgAwT13pHm",
  "key40": "22XzWgA4erBHFjixqcTgnuDw8RB8GYgZT2rXyX3APVQZDzmDkQetSMjW91waEDqUR9jUYwFMcHwAFFQa3Yww5seC"
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
