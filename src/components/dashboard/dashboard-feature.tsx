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
    "3QsuUDVCJHTZUZD1Hed52Qc9Kr6TgybXwr4Qzp2ZKTu81iLYSK1gtzVaktcMjQ8U2pAeUQuE8apvnJjxLM7Ai4cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8Exs7Uhtedxsf2hHFWsiLwPjzVucRfrp1JJAfBMAezBVHVFXwNNWu3eUtSxNpJ7LkDhUhc8mhnxRJ4H5zSE3yN",
  "key1": "539Zd5gJDu4h9Di9ts9Kj3MUDGRhVnN2cC8rDR1m5pSShx3WjgA41foT3w5YFcdqoP8N524ootV2HY9BWyUkZa1F",
  "key2": "28399r3KfrEQ4M8j5W59TcM6mWDKkUgtue7bevh4qhytkESet77cVT1JfaNXB9UseyLyhVigC8x6v24sN8ZUh5Cn",
  "key3": "3D75fKUxYwvAhCfcy3Sga3VjesjxsfhJRfftcozZhhgyqBiQNKd3DToLon99xG2rhfVSdFEkL3s9nuuySSCRqu4c",
  "key4": "31XLiPFuYSC5NyftwbTeXfww36apSh8ZsLVSuPQWY9HAV3igV1RTbqgzGf6QQgAUgjAT3AHZcd877AmZsZPjEFc5",
  "key5": "4kGs4bxAeY5RkEukFR7sgVshGkQLTcBGnAB99NtCUH3KxcWzZDS7nt9bXiHV5Gp8N2Q5Zc5XBLWt81vndEgJu2rW",
  "key6": "5dYzP6qrQe5W8kJ3k3hJudyVoPyWehLVdbu8qUTMwAGYGUPwaF4Cos4m7FGVmQEvg9jamPaEjMGxiCqMzPWnAgsQ",
  "key7": "4d5W2dUgT421bkvWxXDuekpKsh1K4fDus5BBwtF2VJi41HNWdKBBQkktmupqkkFqX897tGU5XyugQjs8vu9KZ4Fr",
  "key8": "4Ef3Tgxw6N3bqGLKBxHq6ETyAamvfPhKnvSq2qWTusxyNTe63TVxEjuqeAXrK9Pio5VEnSt7Q5QfhEFejXKCmMiQ",
  "key9": "4geJg25iTeo5DKZtxM7dbqexEzq857tzCjwX7fZpsJ7wu1coq1fz62X4ZhJfzQ1YgDXwJs456dPPNWRZJebtKK4A",
  "key10": "z82P7gMZv61MqyqBudtWYcGMKmgKfnnZ9oPJjLkS48gXmmVjbv7o7WFjvu4dK4bYVSRHTouVnjPQrVkUjK9kEU5",
  "key11": "59knPvi8kbvDhX4iRHo5PTaAYmwy2XhegnmUehkaDhSadWwFdo6ujz9AtczbeGTbgS5p3611s118W5iPvRDKYb2",
  "key12": "3ct9KBnH3PBVTvYESK5hTkpSHXpyMZjyXZh95b6AeG7Nc1PXszBf388rABKBFQm2Lb1ta42GsfLJYMi3xPE8xutK",
  "key13": "2ceyych7aff3j3WNz8mUKheuT7L3mgN1wrsWGKzyXXyfeuVcsFjv8sJzpVY5XYjeyNJ9TvK5d87Jhhk2vu45AgPK",
  "key14": "5abLxtCugBu9asYW5guJmxDYuXyTLsrjM1usqV1JD2qSj5PpUNM2fdfQFPaMzCjQyvWq5kSJUNuPQpG3Jdjr8rtM",
  "key15": "iJLbEAnTJes1bmuvqqwYRJje4UGrsNgqramg1qCQCY4iXXdrAGixREMq7GTAQeH8cSbGyc9svAfU15snauSvgmd",
  "key16": "51aBpY8zpughegq4qrkqnLfXXdkSStb3e4qfJzisCVV3zTCRDbLZxsD8e5G3TSDEHja1VYnBNCZjZnvSz88QBVBU",
  "key17": "3ZUddcS9Qg3SUKfFZPn9ibt4WoYkc2BWr9CiJ9SeUM3rVUeHB8PJxwz3rFRwPVon3uRurP6RUBFhXzY9pbyYJCyb",
  "key18": "52q39nGWKa1yYpUnmUwvypCcm2kDvWCAjsnc5stFTsPUhTf9r33Ykr9ckigiJvLtoHLGasVAHPamPPfdt7Y2kTC1",
  "key19": "5ohzpc9mXSHSV7ecv7eLbmCTKUKYuGobVdGuiMLS6yQBmbRgARLMzf1muJMztb8SimsuvuYfgtRGyAh28vuQqkS9",
  "key20": "3r9ubeR3X4L1gJs4tGGUgmV18iEgD2yuwYVN55AJoYbpEyyCDo3Y1h8h9wszw8TZg2Ew62AiBsHwnAqw6YjEgDez",
  "key21": "5HN3C8zvr7vA7KctjLtNKnDTrBzq78K44rETfBooBoKjmbHFoReBhDirdRsfiNaqsRbHA1pzFCJtFKheoysdv72S",
  "key22": "3mVpaVs9x5dpTM2iSQzWfw5M676ATQmtuRtYbbWpzcHvuakNbjPEditV9taYDSoyfUTgMB3vXrr2hCZoXngQimwv",
  "key23": "5svm6PXpFE52tSzcEWztH4eKd5BHoYU3VAmC8JRC89oaJQbzJQFRtfZR3arhVLvrbpc5nUMmcxTz9zw3uXrVi6FQ",
  "key24": "apaSz4tuBx5zwYCEfBP65aw9mqjaH1n6nzCsHp1BjvaHsBVRBypPmVCBRYiJdxKVH7tjYLxF88S6g7t7kr8ydrs",
  "key25": "593JyA9g1gQrec6HW8FB5UuXkxjzS3hSDEEqZajiJ8aiesCoD4Ubs2gvwGPKjojDYjHMGqWz3bxMWom2uNgpaTiC",
  "key26": "4F7rjgKffwBTYFh6vtje4jHSCsAo5ZNdvGmKm2wF12yFpNwzgxE8Q7sT3XyrbDxU5ZpaBk56rGYziNPGqqzXarBZ",
  "key27": "5h5cRHmPVfyKGPesaabfR7EYqTkyqZWXSdpk4zGvuXX96FjnMQK2boNJ1PfZSYPPaoX9gQdGs6Ed9yLAGJS3aEMi",
  "key28": "3drGqnQxkzY34a2CDKhehSzaHNPkf4pu5aB1dsdv5ecPNjbDVzL8oemHXWr2apPdPZHMh7d7xTUcDckBwhuB9pFB"
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
