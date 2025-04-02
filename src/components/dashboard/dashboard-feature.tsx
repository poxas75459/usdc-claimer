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
    "4meSS9Yra6DcYEyoCGHKtvVU4MCVsUzWT9bq1XjqrLgiu6tZi8tpJsJcNgAHmnMHJMmY5Mw14PLpWZoGutbbrHNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61L7cx5iwNtuSzBWJ7Pj4RY9jA4yhq3A3mAJmkH1wYohxBQmVLkZGBpwXvYSUfQxTiTnevyD6i4KNTFVbqZHPbFt",
  "key1": "31biYm1bgEMc9hdL6Kx9iD8qJi9yYMucGV894KzdJBrY7NMMFnkPKT76baKYSBE9f5sgnjzMjT7uHD7SQUvn6pyo",
  "key2": "5F6DoY6oZUoQGNbmFkaLzeRs8x7qXydzhZUxnnkNvney11AE4iQFdGLdeuBKysoUuoZuPBHJ91ZR54bsfJmF3dYL",
  "key3": "geJbbqdMf9YeXdw4ZfByHRVLZEcVL95xqXS8N1LwBLd3ZbEMnM1vJM8hX8UuEgT3gEK3pTGDFhoe82memrqgnhZ",
  "key4": "56ZuW3hZ5sjJepmYSHFqbN1Hqpd11PVjYukNpVUo51a6VnNSPyaaxaFYjLyDzUswqF6X1xaHtWjNoBGsbagCev7g",
  "key5": "h1dV6tc1Yg2vqxX9EJ1XD2Gvgcg6rmwa9qgjNxFaAjZemE9aM7TQcAGvRPSVdWhjouFQcEYWGYS8xa7uDXrdnf3",
  "key6": "3CjuM1g7r5PJ4BqQsNeG9tGeXqzB6uyQXm4Qgre93yeH69cPb7wjbmkiEzUMqNaSSwPDd5ucVvb6TurzhTydvMWw",
  "key7": "Vx5i2VvVzmUDERZimFuHtqBDeovPf1pnNxt9W7cNCdHu31j8PAiDh8Gh2oT83svU7yBSCRx9qMmpb4rBDT3FaY8",
  "key8": "U2TAwdcwxTy32fK63cqnYHVyK9HowcNBiRrYYPRR8YDcYahyQveUs2hvH1n6M42EZTVDcKYuY5wz6mDQd8VEZHm",
  "key9": "3XphvWuwbAhzYKE5hyjjYTYW4zMP1oXivvWVaPXXbcVJz3wNSozVDz82K5wh1d1dhwgK2DwYe7tdg1vbJa7hN4FP",
  "key10": "5WQGGQtKvvYvjTcFrN7XBKyV8eb1iefPfoXTByPXYacM6YxppckNd7m5UsdVnQYFVqJ3bwRKdc1EcGshoMXvC9GE",
  "key11": "4MKeJ9EGA1KcHHZczPzGLiapwaKGbggRKZdCrHYagMhFt4RGF7qRTKBWQvAFCGqMaiaChJ9cjf8WzgswuDzQVrr9",
  "key12": "44pxDZGxRhJ3TSwZ1rgwWoMBg4LDLWUXyKM51bCfk5FkyfJv2FgwaBnBtSAx9q4VcgViPy2MkTrmi5horqMKsW3L",
  "key13": "3n5DFSaru1SdwvVjiBXU1FCmZSV8HyHgdUqA7bHBofA9kwPiDiiDLdPqkFDvanxbGZxYFq3y18udrCKALmGv8RMd",
  "key14": "2TJW7czEq1qzKjdMsQGurddCk6fn4bmo4J95KzTrR4WLhnFPsrMMACBL1FKcjGxDr5UAVxpC4XoQfyj733ziNQSt",
  "key15": "4nVu3TqAzC7Zs7cwZhTbjBMCVfF9UuEFLwiaWTKznhrHi1tAbstosFiXdhD6c2QQyjJ2gt125iWAjTpnLVeNjeFH",
  "key16": "2s6xmbVi3ynKy5AZC9J8iN6WKNz6t1UJBwxCnwVFjvRBEkPWJgpfoBgaCXubfxViYLvvBQPjcuCbUUSQV6BbvcjY",
  "key17": "5TSz19n925TMJLnnCz5eMQbqJHKSNht6r7Xd232EbsbNpTTLwfKfFHd3ZJ8iiEMdnoz8cpndGLnqY8mKYBfHnWjc",
  "key18": "SJCgEWNjkbokxZkjnYWydA8LyH3Z3uHiG3Nh4XADAZXUPpCFAhsrxvM56gfysJXJa5HQm9jvmwZewQBL9g836fd",
  "key19": "5xpFE87xZdfjtKRJJUMbC22VJpvWfUtE4gDjXkYMVCgi8kbTtyFC1LHaxqboZaPZogRwhtzXYcYuELMnAbWixAhg",
  "key20": "2Akny35bw1ho75rmto6Br1Cj8ay92xQLAw3ravT2Xx82GuKBW3dyPf4BfQ3K2UtGcQdHWHjA17NpqSBMeqz9opd",
  "key21": "3hMDVTgnX3igttKzMQFhxD8GXLEfY3zzswXG2uqcpPoMCQBrcV4evqnvMok9rEJrrf3BqpDM3ZbV8nm3DUpmJcMj",
  "key22": "5Mk878mS5GW7LFG7L8TZj5aC69kGJDR17GwVdJFi8m5gpQR15zAKFxWrgHhwZr8gBKPQbHFGStPGp9jPNYBQ81rE",
  "key23": "4FAavmu4sm2bP55uQJJBu8cssZRgGkKJwqGkwRVEGrJgRRE1DW6kXJugQnPMJH7EefS6VuhKZLELcTeHb9X8ghY2",
  "key24": "2D9tyonC77hLPH8mDqDgfuLPkgNgKUBqKwup4VzdHzyuHyLhHdBwtPt6642nQxJHF3Kv9WkToGok3Q3f91eSHZu3",
  "key25": "58Eq8gJNQbDLqjVdXtdWuQapjX147FAPAcKvJcbfhfmTkVFd883oKfGTdA484yYVS6DLHqgmU3q4HDmcn3RGdZTy",
  "key26": "5PAAhfLk1EyemLjQK4LBwYwVNrXGtoZ7xfn25vUSCUdkFvQ4AVFySRTCkPhuiznnhUQHUccwXWRbedBekV4uDR9T",
  "key27": "2uzqv81fomY9ma8jSMymbrroce9BqewwQeoMtE8As8VqwkFJLZDMX6FyLRdgDqHuvkmsp9uc4LmiDUaZ2wZwsFse",
  "key28": "5DQA8ZfxdXUQNWdazaVLjD7f1HYUBJkWNQENHYUShdwRQe9BkaXi5xxY5mNFGBAiRgmBBuUjvCrTJhjbAGhpFx6B",
  "key29": "35Q9aTFWzVypiBvAZi3jTE6KyAEkicW6KPrGKBMHjP1jNvFoBXxqAq47tzdSszCkkvKBQjxP6k8dXCsavGzPZuVE",
  "key30": "5KwZjxA6xVE6WqG5k6ZjVgV8e2mUtxaiwQZzXHGaTemYMfmJ8roSGBqcX4W87dADFSVbTrmR2jjF6NaGBVk6ut4K"
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
