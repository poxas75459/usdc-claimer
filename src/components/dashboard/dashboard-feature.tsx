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
    "4rePA6PmXNDTXYWjkYyiwQkd6C8hbmbXHNVuSMSfoSUVGVzNwMH1Eunzwo8EsAPfK2jtc8MLii3MN1VKBpfUQse7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBH4wqLQWJfHLm1GcDaM6MNj7BFXWoaHJcShgUQCDvttXoPeGtk3hVypfvrcvgxaVPua1DkyW3a33DPUAp1d1Wy",
  "key1": "28Wse9XJcbe2Ea3RmwfbbcV9JJZjwpCQ67Dicavgdctrr8bxh5SoG8LL6uyL8fZEXUZML5UhwnReyrG3ppyksAdE",
  "key2": "zfE5VHK57ekbhBa8jg8JoWpjCRaYH6xpAmgDzZJHAziASwDDfaX1E9ZHGzjF2bw2jJvmsknVZXXm2bKzwugewBL",
  "key3": "5Xi3C66oYJxdZVaHT6pxFaWcy1bdDcRyV79RwdYTADHoP4iAEEBz2M1i2a284DzE2kTGFsNQ8DsqNub3rGbzjxUD",
  "key4": "4kUUu4e478W4mtSf7PRaPeoD54SfEZx1TgTzGhD6YPteXUmmYQdutPK8DbnybPrBEtk26HdCqQ8Am9Je5sKZ9obK",
  "key5": "3D86vM62DWhQQaxLZJEJSiPZfjKx7rGMNGsTE9vgGq66sP5JTyX3K5Jrtm1tXzPuQwfui2SpL2Ph42LWj1sHmJiB",
  "key6": "3M6kcwjiWotRE8Gwu7Erhhg3etdDGcA8292iohLS5AZDsyFWhri5t3hgd3pQaixGtywUHEu3Vpfs2DoC572un4Uw",
  "key7": "5yeutMaBhsdMbyHcZiTbudwuyrM9jnV73iaq495Vu4BcCfC8MCbigXssAdgGJxeNemAJap7DqCG1hRmw7EKytmY5",
  "key8": "2y6YGDnPop9toKEQiMR8WDnQeyuu22hEN7sv8SNja7Nn2WGu1LuqwhukHJELAfMf7xd7g3zWQrqG4HDjAh4DA3WX",
  "key9": "5JnAqWWai3VnALr2jjK2rFFD3LfeL8HteP3iKoo99tTGK7QS985i5xZfEmuWSRzU1CF8m7D1Dinh3Y6iw4QKdg8z",
  "key10": "v8Pfrud7wb6EBZXkAr1HkNYpNuBiEGHLVqsRRAadyBi1Nr8nzVwXGU5FLgWhWceYNfZ2uJ4G3DDUCJ33iTxAMJ1",
  "key11": "3fvCM7ncit2SELTgae7XzxQYCrxxoU6gUQ7QsaJzuMPBnvmKGKMAPPZxKCvNBDi5npBKMYSKNH7okWrsAf6eQC3v",
  "key12": "3Jj3mENRwxiM8esBGJ9ATCk6yqH2PCs5UFamEQe16sKLG91qJFM55rGybP6gfKn631T32hmGxSrPLJ5SGJFSQgXj",
  "key13": "nXnNPsyqe4CuAGpePLxUkCUmMB2qxbcbc189aJfoQaM1HqbtHBP8ihjtR8B91ZDYCueyerNB36q9hDsSw8BWnHC",
  "key14": "4tGMTXg6F7uS8WxtfNzGWXnHCAc41ebKNe9oTRpQYSSS2x44zEsX39QdigwEtwwfvesgVw2vpXR83rtaUbJzmt9e",
  "key15": "3MW5xWZzCHV6Yzp9Uimgtrzmvm9gCQanJ6TNrYKkCxEvHVr98S2g31ro5t61xAGYpbcW9PWbzR2SYrxHwwDjR4m9",
  "key16": "bqsUuTV31FL4WTQNq86AGVZKWgLqWAnPLZWfCg7LackEBvPFXKfVEqAsGXrq6GwF4SAyYq46ahLTuGWHWWUGC9S",
  "key17": "3rGBwWiMMtiym7cA8qv3hsoRfGnJiw6gkMcBUc1aHsLCRV1fRYHgUYbzqBX2jS84iX6sqwiTLC3eLj5KEu1A2gkX",
  "key18": "5Mz7oWHYUz2zsiJhMhyUPxwftr2LyZwwxsS943fywPxEzRWqGj2uQxPgryAmq6tWTSfiiZmhmnkGok1Cnfi3YxFR",
  "key19": "417sMurTZAcFLhrHzJZcYzGy5Gk8EQHt4SHYwrRkBefiKpZpN3pFjEaSQPPHf6aLVVNLwHL3hiiJQQoPTJrfWcq7",
  "key20": "5wuFQgoeJbm68gMrYKTySajqDh4awwETCPWpcG3JESpXcEKJCsUN4vRvM6dvccNcvpJzhQJhwJov78jkXATJEy1t",
  "key21": "2RFr4YSbsSDpoit3a2nTV8qsytLnpK4k1F3Yd6ZRf3sVBRrFh5ndETwhpzQpUYWePpVz89x2nn7jyxDR3SyyZTXJ",
  "key22": "2TK4o6jfkUvcpYSe5QTULCBG8rzqAeUmxUaxPpk3VkH6prn38FvnEo9AjGQy2WvtY54MLAJGraP73DTKWz8uT3cT",
  "key23": "24bTuYt8HYGrHozKBei8WSoR7KwVXkm5HC8q7gEG36LiCp2WpBkKPfr5qcRhrvygZTwKeNqyzhwEdjybmznpwVe5",
  "key24": "4W9Jn7KMKvfN6doGn1x6YHEHfXoeHNPDkxC3bU8yWYbbTCG4aaS1SPfHANmgBYrcVsfwTkTRxHR5WrMs7dq8qT7q",
  "key25": "2Wbz7ddp2KiBFBca8KLyCSSMaq1D4ZqERCWJsYDMVku72sz921MYihxJQ1bPHT9kLoVNjMS6NX8piD5GfZA72WDf",
  "key26": "2SixguK5ygb2RKgYgBuDTwu5XYTdMxZUW5rGpL5hUQyzjVJNRuf64PTGaZafMUhCqoxGpvGmFDeyM6UL93t83zzx",
  "key27": "2mbkQ5txGDUbhHjv5ZfuMnxayuWHi3i7268AfGBBi5xBsQZhKWy9iBaopNZJbHXDJAGSq4LZ7yLJd7dbWJpjtcRk",
  "key28": "3mUAoH9LgsmBsvikGWaCqsCX5rGV4vkyzskaQGEnawY2xPECxb4sFHFr2zqahkpnnwnJT8XyDxJ46zgMBYx4JCBG",
  "key29": "4pi4D6WdqWFpEJ4f3jPdZdEZfSfngSQVSeADnuse1xwpEHg7oYedD57QtqYQQ2PpzqzYPL8Hi5HYhsrZz3nZKQJE"
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
