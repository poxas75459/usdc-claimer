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
    "5APojyEcciWEb5iiJ8j4r57N5QCCmzf3Txt6YzCG9to5ATCT4d2pUjtK414tbZDNkS7ycx7VfaNf3qxf6xQiv3Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHfkntSKQxPR1Nxn3rWNZ5mLWTupc1pcWir7bn9hra91Tg5veeKtq5Bid2g1eG19s1MTB87Vav79ybZmHTBja41",
  "key1": "4i61mQf4JNNmXg3xbTUYt5Ksaksj6pQJD16bfo3BKbdTojedA5Aqb5t5cJR8XcBsB5TMuSq9JvNgAN8CUw2kimJC",
  "key2": "4bQXCRu2VXxceGTUQgrA3V8si3u3es2o1rGCoXqm8PKyHPrxazRVmgtZX8c6BzzuLCYuQC2hN4iLyBBzspMPARrL",
  "key3": "3VKU9KFBrH7NQT9ocJpjoKpcqNBtZRF75dZ4YDmWmLJA5RbbqXFh3pVD7FoZxhdj7nxKqm36gMxZ9YUGXSxfsqL8",
  "key4": "49iWawK2HUmnHUGjTq3GRVu1M8sJXL4vtuSRHR8SXYwLqyRH6xoEvcF9y9ZydFHCQ3SimTG8cAcLissTBZLDiki9",
  "key5": "4dQCJGVeemEwXJYUwC7MCKMHgjF9FXZSXxPXbZBHCMWNEXnjjC8oyDv2XVewg3g5agS8TdJ78NsW2VKgFjGSL6tb",
  "key6": "vvcZDQtRcSxtT47bLBMraGriJfaCoeTZLYnmVTFngiX3c9Zn87So8P8M4EcXsyFyaZgvAyhWd1vBNuoouUK7TYL",
  "key7": "n3RjCEt7wRgNKrJXk1W2qxbsuGbZsZXPVNpSSa3DtFbVF5cNbRtUFbJcJwAyDYyDgKu2zvvtK1AtfSzup2nWUNY",
  "key8": "5F1TqVYKuazP2XQYv6s9me5evytXoxt5xdgxeZUxQ8tQt2JZtq4RsFzQH9oGtyDkKD2m2G1HcYZPazrtnhqD3kXf",
  "key9": "5VHs2VCQ6pXKkxARDwXgWfDJeJH8QHBMx5cGpy8TWR8fRMHQZtBJZa9MFbbvysimqYRZYG29wgMvXoxSHXftWenH",
  "key10": "yvpEA4sJo9c2LL9E79VhuQmuf7SguhNqgAf38swswdLxZkuHoLYC7kyktuS9sdbGCms9j36HjRS9VvryCXCnqjG",
  "key11": "EfzQS3AmRPB1Ek23q6RT76m9w9MHwp6e8kXipf5ihtNSowppxgQsPighqcpkNKGXy3wqJB3Y11xSpwekcToFyNS",
  "key12": "49mCthMSE5EQ4vNa8NUw7HCqGNWFZ1P7EXWh9JZkg34csbhK2LSF6sbH2aUA9bP3x2uzgPMJTSJ6spqPETeycW5G",
  "key13": "4yri6VJUEwwpsGSLLc8B7nNFqMzTGRs37FRwrPsLHQcbAgevarTwVqi3NB9bYQ83Rxx2syde4XCSnYmk1hEaVRWq",
  "key14": "35zYeuZUD41inw1bKSb58AZah28SCKKvRMCSDXoUWWysEjHjVEh4LSZ1sjhZ6c4zdip6P6gbs9oKAiDGWAHxgzZ9",
  "key15": "5nFYTFNGtsqeYYPgKDuUepWZGchJUxKtQe9BzSUdCRKRf4FQstPVzkfPTR9WFtjqJUnuABj2uLH4W9DcU3rHqiew",
  "key16": "hYeyyMwYL61umGye6dLwKNvZgP73gnWRDZNJcr1FiY2hNhaHTm4VzQX4J7roq6ceb3LjJMDhuk5JREKzkUaUsMK",
  "key17": "5z8JQdo53vUdVokjfiUe2K7dvKSFCafnSrs98H3nk9DowRZLGiY6p42U6Qk616EVqR6cQRZkijBmh9M3eTyVUXF3",
  "key18": "4raW6sBxrnwnWUNNyXUn6B9593acbyYM7YVHi42QaPCgVsDHp79MuK6WvqHXZzpBMEezyU9LqhCqbB4gtAF1pYkg",
  "key19": "4bpcEgrreqGJi4WnnEQAcyV2kQWydgKY5uFsL4xnLwe2BmjyjzNqvJaKq1Fn2jLLGYiFzvVdSjjMQCcbtxMLwGGo",
  "key20": "3EijRpF9KUWViwFNYqeGrtkYpQfqmX8ACujTTfMaWafBLQqgvgKWmvZDhTsYchN36Jb12aoRYmEcVd6dZBs8qs7a",
  "key21": "23GZ7PtNDKUyGY2WTzZFHJJd9Z1Zyx8uHxFMrS2rAwSdcULac2JtzHyUMSULer4MhSr7K3CAhYfYWmUShqEnw7pe",
  "key22": "2zQ1cVzt4YdrHV4U9vHDYNczZyoS2egMtzw2rwFDqrX2vaPGHCgD3cxoUU32kVMUHNT7cJGfnJzhRmp8KedZPxqN",
  "key23": "3zQt5tjg4JBxQeg3UqugyqDpvSAnzcKwLrwFeDmo4azAnrTHMh5djxWUWHHswerS4eFfrofLr55XXzyGQwGSr7nk",
  "key24": "ShDnNMhoArr1icCH3VqLq9i54PuWZZoYAwSB38sqFX6kTDnsGSyq1rUg745aUvuraezAFoK19rDy9kjYBQ2ms2a",
  "key25": "2tghkLMgt5xUc8vEfC9Mcf7LAFNUc42MV3ijW9FDJoGb4gCdcrjSspQ54mw3CCRxeDoF4Ps417RFDcKZCnXbYp16",
  "key26": "5ecWv1Dxo5iHQ3uu6UvHBHkbqseXdsxmjiUSMbaueWDWBJghmX1CxvUmKvzxMd7hnkXawwD6RMBQQ2UQeZg7nHeu",
  "key27": "3vndE7EoxSeLJGr3e3sFF7mYxRPh73TywM4UVWvcC6KWQqdGvX59h2jw2i1rvGU2jH3aeQ5NcXftxW9HRDGuzyR4",
  "key28": "MDZjVSarL2NxPEmAeciCW9zgST3wy2vuu4T52T4MubFCteARRPVgSSDPz8GpzrLAvHPhVfSeLKEMeuG1D6HNgk3",
  "key29": "4xvBZHJjhVWmeEgiyXHUdC5i1knkbztsEgkfAhg364ezUivdWSxG785NhHwcPJSMBVLPkdD1kzVJPTridEWhEEsB",
  "key30": "3RNytLh3UCJkvd949pfZ3sBsoS3v3M2X8tqQJSTFuZB7QuvJiUsiHA3pb6dyCRhJ9vjuP9yp8UwcUzyWGr7d61qz",
  "key31": "59kPY1vG84HhLcrca9nkHFs3wFpkR2vsKpyMZ5H33kvezvncQtDpMvBNz4NweSprESmPSeDpDPc2yECX7XopEr9y",
  "key32": "ek48nDGkPyQyYiNNNLP3wngFEom9XuimoPuTwHzqrRTCghXWHGoMoUz5zCeHAPPdZhShDMFnwvnkTGGJDbRU7c8",
  "key33": "3LbSwjLtmnXDFh4d9ByHyaZT5ggQqMag3rvhaLCfx4tUEKGUSSiFcMYkx2zUDC7aTVTNaYicq6eU7CykZQZS75Vy",
  "key34": "5oKjsD49eAVu9aTTQFxWzGt9dNXfzzVMEDh8pxsQH1PebRj4WZSeZ8XWypbRxCfqifK3YySEgxqpveqrx3APkyqy",
  "key35": "36m5bMeHbZfatUvZEaR3MazdVJogYXUdodBEzYqPiK6o3M7SebMdeR8VNPaXtaeXKjC697k6gwrRMWiAvKGQQtHk"
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
