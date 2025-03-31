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
    "25FQWo2pTxz3s5r2qd5p5R18E5q98aHR6rPmtLK3SxLKJfEeemjEdj1Ux5ZDmdpF1KajjkdmCaMLxSZW85SVLLqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpzRQYbfyjxY1UELwxP5wHgNwPvTGxteR1Uydq8midKVdW16RHbjEBbTcKUvzzQJDywhDb8MYmd32Vi4atjJHRX",
  "key1": "4E7JBB9gy1v3G7ZMVxnojK9KUhbDKwJJ8RLd5v3Su6LwUhcc5Geabt1QCWGsBoLmfRy2WGKD1CwFey64K433F5Pr",
  "key2": "itVRhSBFtVQaPGLa8vyvL5ueVdiuVjgBosdnR3rfYdJiUQRwyiWUV8b93AjY7prjTcJzzdx9AoQkwX2WUB4Ss9W",
  "key3": "2dnR5suBzvVDQGBy3VUn3SvpACxQeEqTE2sMMnDoSvK9TeXaYo8WGtC33UN5qiJ33BFYrjPqqe82s9u38NRSVR3F",
  "key4": "2vrP2eaW5FZWhBxbhLXCcfGgXSg4yPECZWKBuNnV8eGBLodoPVNsxBV8NuummqzYYp3w7GCtKKt6M1LmS2rAkDAa",
  "key5": "nx5i2n6Szh7tapK6beT2wwV7MR6sxSz88wW6p9qE2QFb3n1MFNucm9Q2Wgp7dSCvmGw9u4astCtQCjrdXyGwcFq",
  "key6": "2Rfudw8VdogieXX6oUKJcNVNyb4iMGRyR4t2vrYCXSfKapZWmPGTUtNP6JMR9kxQpuQSKWt7cGtybbrpQNBFVJ4K",
  "key7": "2npdTg4pe1pXLr8D3TWSQfxqtyQ9MDxCztftRa2YojPGEEVX3iS65vZ94vgBR98GjjTirKVim87dZdyJTpRqFa4d",
  "key8": "2TYFYnYNRfnYJ1Trhu6cHuZs49RRCkryifWjW9A4YitQ7cGSvQo3DNm53o9pTPdXhHSHRMqKovuBmtAfvQvcHg3k",
  "key9": "5g4BPS2KaqiUpWgi2r8wzUhCos4q6BQABh2uRAg1Vs94Mvc6GDHPZgwwyzSeRvT6hJ2GZDJLJiGJcRrTB2gPiiFf",
  "key10": "3sV4VJg8ymo75UeUzvsuzyWz2TPuYa1BjZB8zXZ6YikTcFiSsMZ1AAbgA9AuLrC6KUxteXHupTzKpiwmNUzu25ui",
  "key11": "4TnzhCJsSqosBve2rtq1PPhnvQUQgd8WkQvyvVtbLfpKEDYBbBrFWswnKZa1bACJcJ2HB4owCknCs3pKNRqaumun",
  "key12": "4QnSpdr62NvUZMr7jW18zxqLcw38EzqanV7tKaaELdmgctdXYSZtdnyopLkxTqZsumxsrNLFsytejFtFW22nfQ1L",
  "key13": "zF3mdE2ZAQ9i59fppsva82evWbfMaPsk7DP25BHUcWSmdComUcMYzES7bQoNj15JpAn4RJvwcyzVYzEdzo8tayH",
  "key14": "5BGNHnzrKYnqKA2DrjrqjH5YyrDYsCiiY6JLS2SvEs4Q2p5r2KT9GHb7zTbBTP6wGnsJQzNSgvzXnwXN1JPCufrf",
  "key15": "3qwhjD43CvU3iXibNzkcvrKXUCBk2UY7hr3nvnLcvRq5EtimY5SpxPiAmb6A6jBUsBhmw52goYqHh9TjVA1t11Rk",
  "key16": "ZKZm35sFEyjK1bARVMAQckKMBMDZPpU8AuLy7H2Gw7SuUWVz5sTXgBNKjZK1HkTmUbP3JNFDHyysdCi6jiSiC8T",
  "key17": "51RZ1za819RthJKxumMmHh35ctLvkecs8qxJmZbtzHRePGTVDkp2RkBWyY3jMEcieJoTH7ewGtPS17dmTzfXW1N",
  "key18": "3Wu36725q1g8M7f8MX8tr9hDx9pY4wPha3JvgRM6C32eGV7Anngnd4F69byKLiozq2QMR4YnBKynmG2Ceis6swsT",
  "key19": "2n5cLUEpHAy3DdjNEd7igsvGAKFvy7gWRbMnVpMSGmskxTEs3vqb3Epqa9Aw8rdB5KstqntWn5PGS9MrtySeVZbT",
  "key20": "2NCtmFCqEoG71CGUSSmb7XTj9xyGAgWuCCUvfJCXFarMVFUywb8JDcdsiEvKL3xqDL6xoJy6NzU82M4jBaNuYL1Q",
  "key21": "4sUEEtXwShwNJr3yt7YNj7m2u2Bkbkf2XE9LMyijbxYpg7qdY6tazpqJcLAGGpwqGSSveU1z5HUG5hyAWGz2Ysfk",
  "key22": "4JwSWKS3yGdyv2i78G6VRx9WKVfF2ULAnGzzHyDjt5vjgZYsaRbLm8ms6FaAmepiUC83RiFmWJjd5wGbkytSRmA9",
  "key23": "3bmTr8ToAxYDudFFpu4QQZZ73UH6BUGdpmEfjZNMKuJpy6J8oteAEGRfYVpYfnmcpUtcuD6wV6TSkFq2bCZYhzGn",
  "key24": "5kifoj6VUpRm3xSX9ea2iDfr7XS3aEoWqMDhEhrhVHgZMfEPWonYQjUx4Bh5Wj7q6DEY2sVhVTaUshkDMu7S5puE",
  "key25": "5NXsRMLyCXcPoPnQVqWJoWcJJLYi6J7js7ocxhgxtBpSh2kNr1AdyLzFNLr2thQMS2nrQBbszgcwdPZ4feHqRTji",
  "key26": "2N1TQchsi7xgtyW4865sftduHpB8yWTxEhuBHZCfy2E3H5sVFNEsd5SQ66iHubeCjjH8XXn5b3zn9ks9hkgC4qMm",
  "key27": "3NDt7RDivQQJbXtAjF1FP5uWAve4hyHqvRHLPykejBTR1qWCWR2AzxGcaiXHqS8DMD2qT9qhBHANzGDyihLPqpe7",
  "key28": "4x4G7f7ik18915hv8oqcSK65LQPUTveaMayBDd5HKY7cXH6LagS4F38KiX8DJJ1ARCqC2naB1r8oPNPXd8suX98L"
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
