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
    "5XAovPgTDNnMChb7Y7EPj3GSxqyz9cU4aiHM9BuKxjrW4MiuNvFmJEeKeLdvk3w8y4c6pbQBnPKad11Y3B6GdkkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDGRYZ1XyhUmGPaoJWRtaAz8wfSUUZJEWU1B26uXoojGczN8UfmmR4Z2MMeaGvJPiz8Z1jR8pE9eQmnAXmcqrP4",
  "key1": "MLYjqfR3ZToYpW83SViaJKpaSXHkoBiGaNwMv81tr2YtGburoE4PAHy6fLZYnUZ3Za8nZ7dEoYFsgF3doQm2ECn",
  "key2": "2inemWqmoN7BGGDg2f8vd258Sx1sAknPdKAGGZrxuDCaQ3fVbodAoQfGwvjzVvnPM3kNkiUDtssjBMB5WMmrwXDB",
  "key3": "TUvh7EqJbgwWrCRzMPQJguDzvMvRbJRVqa4aV71nxG5f3ui5jNaH8YVeMGEEhvyEtcYqgE1bPHwLuJAtu1fT1Lm",
  "key4": "4ctMoS9mTsjWeGXL4SbC327CzjXrvydwYSEkt4Pdvu5fdGkkqQGh5JMQrA142Dc3EFtSWTuTUvGjP8RoJ4THrmGY",
  "key5": "4oAGXjRAFzuQcWYq9efwarr4ostdMDWRW8tFHvdgLeVEi9iwCNhfamJ3j7d22G9Q3sph67RnV7nKEj78eYJRWa2q",
  "key6": "4jump6q2SrEGPwaQJ2QyvUzXe4B2NQM9sPUSydEjxVrxjEwSdB6uET4QUr6s5uJJucgMez32msAfAYdSk1YeauTr",
  "key7": "JuWiRrCvnqEhSEyVTTSWFNTuw2MhvN4KN7boE3NZWHKVUz2aWpx2N1QRKCvjv8N3NtDWskaL1UhU3eW9dN7zinJ",
  "key8": "5S34G9ZmHe5YjSnEfX7mRYSmrgVCtavpX95pn8VDz1LUry4WqmRXzcUduXjRxAjWboXdjHxXLgc3hXWPk6XNv45a",
  "key9": "3oei54JfY1psXcd9p7nowPX1WQoL2H4foGcDohbQhdQVAr6zVtSpNPTTAhMqNBMG1yKeqJBarSzZiuYUYfFxxLiJ",
  "key10": "2VWaUpvU28jTc7K26BZKzWpUhgv1VbPBPU351N9QNKAhqsx7uL7cu49kfbYhpYKaYmnUKtb91bxLzv86G4ZqSL1g",
  "key11": "2sFfW3yZejWqxybLYNJQFGWzE6swTdMUQLE1rLft4enNX7ZYJjwJygDjLNpLmEmyXyjyfz5F7bv5YQswqidKKkq5",
  "key12": "41uXBN3jFdU6svFpgidBnJFjZZujCqfttb2P8NVbwnG2B8MBTLHFjkHNpbRHzVRo7yRzTmFwZCiuYkwRVVJLmVWP",
  "key13": "3ksnvhgWNmoFY8LMka5ECsugYuPyWw1ctbwDXkAx5aRw1cvC2Yr7eQVGisqD1i8LJhTUtt8HZBcQo6tGWxtjeMBV",
  "key14": "67poxGxqCTSVBxHntj9EVt3gY5vQBrUyJTG94JWbBKy9KpATeyxDtzCsEXxappetfdnB6MQGQ5aZYcTYLWHETsoA",
  "key15": "65j3XkmeraNhP9qbbrPXiAeHDaEFCYhahvwbcgteSTuThyEgPfsVbNKeQzfG8XYY8MN9teLjVdxNnoq9KtK2kqSR",
  "key16": "RaKte8QsCKuSGL61MuFbMrToxKHHcwaC42P23dcGU3bgPXFkdpX15wjkmpvN542MHWzPmVkCVm7dP1HgTaQMoVx",
  "key17": "2TnHp64Rnpjnaf8tQ6P8jeNWYVouEPcVQxbpBtFa5hEyLvc5J79EzU2pR3o55wAZzUHnZV4BaangiKXaGRUZys1P",
  "key18": "KJXxaFaEue3ANuGSH3ZhJZ8JYi9LovE1tsdCu5dVmGqRmEhK7McubRwZmv2pHzyK63hV7kHgnvfDkDh4j1SiqHY",
  "key19": "588Xc9jS3VCUbnDedKHBwHtHXgYVCoxQ2DzrwXJk9UNnD9nVAeqykyNGUo8x33XjYhEuG5HSPhmHhAKhXe96NYt9",
  "key20": "59UUCsB9iDnmGr5WDDxwAQJs8adtfHdDrTLQrsaEjfsvVm92ovAhomj3Zsn36HemrWQMAPDVxt7S66njKppo6FQS",
  "key21": "PhL5XU5DgLZZ2SjJ1iaBpXvgBta1WHVB63mXggZfiw6hyLZ7DM49pfTjjp8DUoHP9CHq8MX934UQ9DmAPn6Jx2E",
  "key22": "2iQinmYayrUS4amcBBmr4hJrxQggQQFqR2if7B2jXYvsg8LtMcMYgRCi446YJnE34xLqwXh5LXs6ThgWupTrHn7S",
  "key23": "gSEbtYhY2vAnabwop9BxYNynzNyZndquBpkzLMoX7X4qXmt4wnJo7ZS67FLZDjJNKtiP6DSzkenCdbmvWsYTB2E",
  "key24": "2nW5LwvvxKZWcz6Wub8htdw41ty1v3tUxYMkhzkNYY8EFuXk2eaTvTwjvFV4wRo79z1iFP5hdMoMdQkwqocDC5xs",
  "key25": "61xC5WD2CnGjDQKBPjkAaKfm6hzCD2RHTcvq2eS7FZjazQMds7BdvtPqaF2RJg6PtKfGovHZ6NB7jRkZHg3U45o2",
  "key26": "41aG48BGkLnuhrBLzoKEkzLXrVjntTjSoDfgpguqfG7U99tbwAz8C1GV7quEeRzE2TgyVsBGBPZpdRamg8BXRsQn",
  "key27": "2wCGBRezTVbiXhU3RBRs9UB6SaUJkq1hJDnQK9S11zo8tFqW212tH9DzzaubdomV2jwkznjiy4R8ofQcNW22ZfuG",
  "key28": "2buTF34RBdmogLJDiGLrrb4Dywm8ZaToFik8sfbaGehyHEy3qasQGwJEP2y5HcrfbFeHZS9kQPzR16VPJPMXJTpf",
  "key29": "wXQGjLsYADQNfyYAwaHcQP1ekyYScfjiBzkXVXD4fsiRnpH6kPxPAK4rD3SfqWmKPfzMJWrUuhZ5orkU4iv4Rfv",
  "key30": "5bvAyz7u1bqN9mxEUuqSsNLkGYPoh3NMk4QggJH5zVsTyw8pav2mvybgKKzUWAK57DzYHuXt8yaL7mtPawpSKwAd",
  "key31": "3sFAJwrs36UykxXfDfEiug4D36VYtqctKB2nYwFD6Et5TMmJrMLvf4iALKF4VVeT6pdxgCZbR7x4k2dg33cbKyp6",
  "key32": "4idoLoKRroctn9iXQNhAhrQwRNdXDQaB34ZPTrU5u5nFRUamtWofZaXGsSqR9w4XKz1MS5GtDwKrdJKqnvxCpVCC",
  "key33": "624rGbT8LKbPo2wRHpe6sgttSFnM3XcB9yh3WZDHCbD6foWMEVocthHYUNj3AHP3nuM3sdFRHAbVuqhrWLJdmkit",
  "key34": "4U9rok5Vcm28Chp9ftoGDsAuEUxKntR4KQwbGTxZgszjnbMFcxx7ATAep4SP99MC3uy2xKv2YMi6Vqm79HHd3jjV"
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
