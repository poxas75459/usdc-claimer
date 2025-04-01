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
    "4BdU8zA2bmTdnsZgvwCKdgB9EXBJTZqNM7x2hx1y6TwrjTcEPoNBn88MW6YmyFvrTGJw6VNMdSURv9gougSgKTLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63N7HSdHU2CR7chX4Q4hgAsv1TrYyzcSA971BmQUPJruLTVw6QxoWcN4pxvoKdgENYo4nK6u56wGtkeRCTkUC82D",
  "key1": "CXcpwBD7n4c6J3fKwX1SBbFCunkZ4DRkUEyDC95pBD9G51SnUe5jbvYVtvnzK2754eMfiLqMxocVn4bH5Dtrp2Q",
  "key2": "4dw47gk5suyfDxxtTD7d9bGzBJCgrPRhpz7WsA5WjjYVpGWGR6GCYpCBuYhmyoaKn66D5w6vZ2BybPbKCbGBuAn",
  "key3": "2J13PRsBYY7dxKSUHuMcmKUMmspw5WNVXcPL9Xem4zpBY1kWinD1RmvePLYDhMVC5c3jJhhevc3bffHLGDUgkeCh",
  "key4": "3QgviXqW7CAGXYhBbxgjVjRLrHat7cDALY5xHs3GYT5KYG6zjsgX1csaVFydEDY2kPJBaQKkuttNxx79y5MHLQGP",
  "key5": "2x6M9oGmcUcXzWxfWnaqN5Mc9fyw9wfSB3aJ9ET9LTn864qrs9YCbs1GWohQLJxYTrpAixU4h2J4sMxtQK9efYb1",
  "key6": "2xND3pK9ofuZENT4MhGDbxK8tKXkjtSz73XPWR1KZugTAamg122EeQU9ehKMPekwVdYHEUMLVR1iZ2odaWPLcUFJ",
  "key7": "mjm1AbpKBYtSugoD1smkWC1TpwG9XT7ahwtQatx8oTdTpxw6gfjCKRMvsk5SZRfLBComW3mK4fAd9ekFKQSNtKF",
  "key8": "5g9UTnHyX2zsXECiwpea3qba4XMWn8ioQKiVuuCi3E6bKxXBLwDGcy79F36N4V77J4ve2kTTNJogCYVr24feDCXi",
  "key9": "5cdHXjyThPQ6R3Q28s1dS5ky8uTKEFHXQA4SUgdn8ChpUHCu3xDwxuCnn6RuZznKygY2KErLKjASjZEW7sjaMApQ",
  "key10": "3dq42Rsm97kVQJGzpFBmcWStRSctzfnW26hp9quXnx3ewqtjTuZB8m7rFUaXbndU221FJiNZ8VYHcTmrnemNKFWo",
  "key11": "3ae78Wun8BTHscucWdK8k5uzj73gzjUc7YfHKRTmf82UtcbXwrDEcNgAAGxrkv5Nf6ZyxPqgNHkS4HFk1AS8p2Ee",
  "key12": "5xmRMiEzTJUb6H8U7RMTjmRf2rGSmPykNwZV1vh9H4YghUYsNXz8VgyJweoJvGNKnwv8dfpDFVb3uZUtdRB9dXtd",
  "key13": "3pFgWiCCUhN8ujmhBfk7yBrCXi2rLxowg3EZGbKZfay3AMv5gcGzA8opf78K7RUsq9mLSPD1HB78TF5jHS2zYTpY",
  "key14": "3h1eW5biWtGCrM1uXD76pFvseztkQ2pxsdq77Xke4CX3MZsFEVE612vqQb6NHB1zhfN1c4KEMGMk46EV7uerPK1P",
  "key15": "p4ifoZvykQ1hmYAGnFfjQw1abnqyj1k8fjGxvKkfZUN8ragkwJNHuEWvGHPsSP4PAQHhxSpBBVyZAasH4CpSx9K",
  "key16": "34idfKZoH41Jff3YGs9Dpau2Gre9eKezdG2cUfPScRWUQhy1TrdkHLhZ7PozFHCQE3rX5vcbhcbaBvc3Vys9WUwB",
  "key17": "2zRnF8E1eqjAuxiduhfYJoHkCGwfihiLxwo7gWfZVFfmGk6wbdvB2iQkWvfYe3L91ak4gf7BWYXPQRsVPGahygnD",
  "key18": "28fUrrM8hQvnJr9ik4oYgkA613cGvBzmQiVVYYjckXrTqFXFd4EsmeTFqvMJAdpu4c4jgLi7Nj7ASzrFc7iBj7i3",
  "key19": "64aFa8fSLEH7jsBGAvZWopXZwwnd8Jnv6BKYJNBRP5UvXH4wrriLCg9mrFFhGCy3XgmppnevzVvCZp68vcyqV6HW",
  "key20": "4mXUQqmHH3fQfDhQEFhxeCoTyNe4deHBJB1XKFJ47xkcxkez4HxPDLpD9C7NeTGdnBLsiAVN1ZF4L5FASSSkbZ2a",
  "key21": "2qRark3Xyv81yvuQp7wQeG2t492R5YZenfnM3pQMpVEE8CApHCuYQmqzU98ZkHWagzoHXMF5Gj4t2mddCQTeS4Un",
  "key22": "5wFWQbP1kJtr7z4DJfUFwWqihEw1QHyTKHpp6j5JkttTvN9yp4zfXYkW5E9EapZ6jEZ8boyYEoxTpDRaNk8Q6G8Q",
  "key23": "2Qy1iSskVbZHd467hs9dPPft9Up2Ani8Jp4CrsqSzUNd2pDtsRm8UaspfgfeBDj4M2ZUzr753nxkDfediGDQa1pM",
  "key24": "5AdWe6GEPGx6C6ABswqQ2ydRKNPZp263QkrWBRcnHfE5jYQQhbqXBScDj3Pjvsy5t4vZEzymUm3irtREJLxNYoHr",
  "key25": "3A5sNfD2KQqg2veGPCY7kwGN5cpV4Pe1EZsUvxkBZFow6Q5F6nSjSZNkQPW8wWG6k6rP7LRrasGdqC8dnUJhP2Sw",
  "key26": "2AbqNXsuH1WiLi2poAQks3gEwrLz9fGF4bXrjG7udqzKM8V4sLJfVyRibU4HMYwBJGzkSmYtLfavCaDZgGhNcy5u",
  "key27": "3UWtotFHc5zxFyiUnBGqPTTz2Qvd1APU7WE7DpwK36DdeBKKwN3qAtk74JP3qQ4s2JZFbG31dxU1KXMRs7tYJmKX",
  "key28": "5moGs5UP3n6nS4usNKdrseY2qmw6pBcjYJvib5hvEckxZkeryTzBN9GWoZgAyrjTkTFf9VVrJED87hceUCSsLgfC",
  "key29": "5czTkKotwukFXXDc1Y7QJgj91MVbmdu3f7aMnNiNj1m5uRELEbPXyL9VWh1sKEBmiivNtJk2nKaWwaDVqaDK6dUh",
  "key30": "3pYzsoudzK5Zgo8UE2CV5pT6LkEZ3MmJPNtT3MfKAKwHRwgAWiUqRonhAQeYERLk97G9TwVDtMZEBFQtJPNQceW",
  "key31": "2YP7MSLLJ6EFd8ZpPxvouLWgvYtauFwTEmR8kPfT8QSRV5XptXKvazrgDdeYzst9siry993iWGn8pjqZXynz33fh",
  "key32": "2Wbw4qs86TyNT9sBc5UquipvAR3KtdoRn2D1q4eWEY2iRAeL8i99L2NhATScjGLe1L4Tzh6sLNRzxu6ZFDs5iQcR"
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
