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
    "2upeS7wpfzVfj45Xp41Sr55f9cR2nn9Cpmda3Zr17CqYj2w7FdcveMXStaUspRaUNZrSrHZLFj572cz9Vdp9g2dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGHCpbgW2Zw8eEbQLBvjABYuWcqGppE88HUvXH2zkj3gU3w6mEphhM3W1PX4tqDV9odp2tNSuWE6uXRQwwnqtaE",
  "key1": "2tKrdSxSJcbH4SLbKR38TFJGpi5RDVvZjGFsbtXv5se8FTb2oebWburQAvuGXUaiDNdeYMatLZmCNMb9YKsATM4e",
  "key2": "5qkLLCoLXLTJGFdM17VFt6bayHuSvvTUkWztSBTXcW767jD1q4CzAUYDxB33zFrtCzCW5KKNDpwzk5acZPb3JGuC",
  "key3": "4gL5FFrSgdWsjetQVBxo9eVG6rkv6SQHh3FRyuwfcD9rXe4yGtTtwxC4kMfRwejLYvDr2BEkAuiVKq6ZYwDU1LZM",
  "key4": "5xYA9K1uQuWEksZed8bqf5xVgY8XQWAbgDPkb2XnJmjDVedZ3LHbd59EJAd3cd8zUkAEdjpRHMR7pXmLvb9fYyP1",
  "key5": "4XRacprz2EUGTjEkUpHFu7iHzhQaaAbEG7RT32srymxr67qZQkig3HqqoBKvcUS7txKb4jHjGSokyLhPWW5rV24W",
  "key6": "2Rbn7eaXs4JPfNUULrsiNMsrNkcJnkLBUVMCzcmQsnn744esXnZTEZahzYidurKETzkYrGRnGRauZ6h3AX1vumo3",
  "key7": "2ZJJgtw7YHDoamDzqGxRn7YXRp9yDdSdzr5qNMeE4KDKRrpaPSthYNqrREb31LekboRsuPdm8r9cx9SvzcfKb28X",
  "key8": "3U241r2AWqo5ebGMUksWERzHcBd8wRAMh8xkmewjxyGNiab4idsNvKhxJMk17UFePL7YuGw4cvVMJQUJbVCjpxy9",
  "key9": "3Yg7kbAAzXTAH7UTfYHSNxdiSPy1JMzzp6p6gowpw2YwRwmGFuTWmch1Q6pWLXUUXnGx7rCedBr8oTj7q4U2XZW6",
  "key10": "5h1YEU7PZRrFGgVrKDyjmG52LVUXqME8C75LCgUn2bieASA9YLrnuW65UkizZEjvQJLDAHL1N4RsKY3NJ9tFRVXp",
  "key11": "3LQQDh8tFDFkpJXceWj9f8jfQEsRMdLhLSipLzg9K4UJ8fmmqYWRjbzgeonpxKa7sQbLDVUFgc7mSGi3nz9eQ5J9",
  "key12": "579hXnDxNxmftaLGcTuY1xNGBLCuWDpuvbwgBPM4PjxZK7ATPhGBfLsVSwHFG6zKxDnUdqW1rFuS27r1sTuv9HBz",
  "key13": "AS7CoHGTeM9iegZbLt6KvBMbbBvTNpoWXA3RLf3aWP8Nsz7Yx5NUi5FyesP6w2jGqsTjFPCmhR78c2APxnM5uZK",
  "key14": "2FjjwxGA5RHMBMu8K9KU2KB8jUNhdmeEnkzkMixGnAncQyEsvRCV4RPKjy93i7CzFdej5TBLQB6Tc2iv1Tjc5QzK",
  "key15": "3LknRjoULSB4tEMk7fprBzRJiF46WmJdmGi36iSu6NdDtwywzKdGCW9b18iPFXgHgvEVvftuyt31UUWpQg16ECau",
  "key16": "ZneA1UDJ3af4DqeJ72s12hS1aMKKumMicVikgUhXkZX8GP3c469A8XeymjUfuqBMomRvVjqwGUYKRGSBv6sNf9r",
  "key17": "4RQFsRxUafwFonsZNg4qFLBbXKL1wZmAXFHV4uNyC1W265wgpxgUS9oGyyADAYqZPvLXJMVbyqS8V2DBSK4Ght62",
  "key18": "5rgkr48Ajqig3MXrsaqiUH2MuKNVc2uLBWs7Tk6aH4LhmtSQh29uh7HBdTbzA347KsLbAQnqMp7Fdk7N2xwhD5td",
  "key19": "3Ankaqec9TyPtdezzi7MgBQsGwvpfFHU7tzTwBMPT4JSGtEUEa62s3RUhNvhbWp3DXVEDz3fneCKNDwx2agJXz3m",
  "key20": "2NpVHxowNDfgrRYRAXECSULrT4dguEqppNwFC4KFkHYM8ZW26AwmmRRVscFA9Qjaprh6HeGMkCrvBE8F2RCyZPK3",
  "key21": "be8DoH9PJtcUVFLoMnQJ1rc6mfMDFVejchp1VpFig8guCAtwu1GTupU7jRDh8c9yfmto2tweTcfQVGGEMUQ4Dn8",
  "key22": "3J2pzLNh9VBukLhH9AnXnn6vTSg7iUF4j9VsUwULWY9EFsaHZ42P4h9xtLCf9a8AuZ2ANnS5t6SG8kobRYFHipt9",
  "key23": "3uQxcALeKX7B5VXG4bvt5F8ayj8gye7NNHkShpGY4aaB8WWpZ7StQnJAdyEh8hipjYv9nBiuvDSsurDLjwk16tmZ",
  "key24": "4j8G4u8p8evMnmw52jBswuUUv1spc7iWXc1VkjMXkBGzULzLBcmAafPZMLZh2UfATnhDG35KQmfDKLgiJUquNmAY",
  "key25": "2kUKHG9wCVgyFxF5ZvbqCdkdhKGCwttXC1CNnkQoEitm72QkXTRG3s1LQnEveqF2UGym6pnoWkNuJsoHtMkRNz6o"
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
