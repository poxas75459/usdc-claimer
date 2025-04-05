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
    "3XqV5zVNt33qGhMFKSKUEYZR9fdhLqDKCWEqfsKHkxmobkcqboatRTuoyrVFSHGYxpF45UXR5UMJaKhvyHxggMms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygwgQXsDeWQGDDrWiP4RnZRM8JbUW1Vg2UFqqmnTpyL3Uet3NGj3m3fDYUJmbMSHPwJFfVM8TAw7mYsmaS9Hm2Q",
  "key1": "3QhfmXQ7B6uoVCk1xHUx8n19dLh85v8exLr1vpyyVgw8zdtYsbbX56EFBRAb8K2jJrMmmhj16GqWKTdgo3VgfQRc",
  "key2": "4oHKFhFL8inSmb8o1dHrsx5tSFYvPCw6DEXpmXKvcszU3RKeHQo331ys3Fi2avRrSoiyN4Wtgi6FmaGhqwe9inzi",
  "key3": "4fJWeJbKgYTQ1jGopRuJXSqiYAsJVzrJ5mXS991iwGbpZVVxcxxj64vYvVXY4gf2dWo4uX9StycMoM1JwchFNKq1",
  "key4": "299Hp4Tk6i2kFxJcztsWNjxE1w4x5gd9bjW7sjaXbaK87CYR3aHH7JF6SQKR4dcAneV6tWu9zhWiqtqA5kA9WWrX",
  "key5": "SaPGGot1ahC4dzS8YrE648QgAFVNkaPApzK5Bfm3QgEJk8JNkebEjJM9cifrPuiyQJgyoBABug7XwfgPLRRFzKY",
  "key6": "EZX11VvkYcR5siiYe8GMUioEAmdrzELW76ZHFTVEQcnXMS9Y1Qxa9vkvAfNrTvcJLT8yJpgAYt25wXJeV9xAErS",
  "key7": "35YJBqaH3joZMeNYR7naYUhDb6eQNFxS2qn6Zw4NyTpvaK1RMQpfRrYAqUSAzCwJh329nDkTDz3jDSXrD8kz2tt3",
  "key8": "6RFmimavEwHsE4L1Mhga52KV1o5gC1jDt5Hb46tiHgaNvyKhWE8mVcPrAVANT6YZ9A5k9HmUELY5Nfp2YujbHbZ",
  "key9": "3yGWKBQYDrpEeQHM3TBwR7KMUUvhPUZ1Sy3VJo7D9EgFvtAJ3hEAPzQTXf6ypGhrKxn5ZV3X9mrMCYnKxXowWriF",
  "key10": "4oh3GdVi3V7u32pq1yF2qbf9P9PuiQmVyNQPyPXBKwu1Ec5jiXGEgMTtR7cVnzHGMMr2s4VTmyjR6qvDjCWX8KHU",
  "key11": "5jq5AYZz9xhVDo2opXgczPLcL7eA9srBFjjgCwJTmCUbGsZq3xLKVPdfqvkngMLjAzXUnsBUr4M9jRZprnosHjah",
  "key12": "4VUMMrJXKizYGVvzTQPRFrUYmpTdj5N3Aq4aiBpSjQ42KT1Lvk2r7pUPCFJjQqyxhd1UyMaPqB1DZwpYgGo7hQNz",
  "key13": "38tzpCyzweqZG1taSnaNiF3jabPxubUAb91fvcfePkXPXndFfdg51fS2Cu4WBNu9U1CHcttYpfcGghnCJCbxZYG2",
  "key14": "4PST2oURyjZPwimKZpL2c96cWGR9x7Rb72UBr7mJ6aoH4rXvRY78QNURRXuRVoDQNtZvadj1TUtVJsoyybvxSUmj",
  "key15": "5oVMr9g1Ep9CYAsXg9TTN54os5T23Jz5jZphKMGnfGfvroAejqa4ip6AUFEMGvyBwyGAVsWjYHtbsEA1ztacxm3S",
  "key16": "wGGwzKfnUmVEfMKWhXQBF9x88ujwd3yFRFDJtyqriKB3Y1xdupTCLC5QCCVUgeJFD32ZoebcYajis3ckti9n9q5",
  "key17": "WgzKKZaZCvE7e47ms1ZYfK2xLpk6tXoXYDoiAsXq3JnsKGFw6cv4uFiEiaS3kXC3BXiXPjJu7dB8i3UtFJGdvA8",
  "key18": "66DV2txn4cKWcAtsjSGjrA5Eb59pVsrX6GU8Qiq9Eb5TerDzNh3vDtsr7otkfdx3jtT92k1FBaAPF1gVxDrgp9GZ",
  "key19": "2ZnnQMPysRztdnPwqdr1qSG2Mns4NT9jTWP6UZ3P2WKGx2QDq2LiEgbvMBqVo8vEPArnRXYVVfcUQCFodeavyETX",
  "key20": "54imHqSG56zQXs86MEiraykrL6rZWih1zhmjd8kNuFW9JjgJ8hVq1uRFmKKJrLBNt8tncQYebWPc96wULkgRcjRz",
  "key21": "4FfEf1cfQvmziC1NRHtsNbWHgZBroPZx392XJm6jG2W9h3hV1yZJTet7hzPY7MzSPFwsNwGcWDvgkBNXtsYFBcFS",
  "key22": "5hjkBhPyXKPKm8LHyEGY2cGx8BjfmCR584QEnKbKYpkWkzmAtHu9BkrD3YM4LstKbgSwF5pTZ4HBGAbvF2izXJ5t",
  "key23": "2EYNSaJS6zB2g8kbpiwzj5PDkrqHYvDKsCLh7JYcaeznyR7txcoBrzv8kZfw3A8xkSLxypXMpDm1XeA4ep6AmKb4",
  "key24": "4ZDunNwtdi8jXAFb92kyZm922Li1T6B6qM1GWafJvLx43HeGJSut1esaaVf3ypwoATZ7brAgiZgmLWr66Z9nBAGC",
  "key25": "SwPTZPRApMVXJPhnX4cN5dbansv38EJWueBFADhYu7B83Uut5Yh7yhtPKaX16d5GR5xAc5tFscMYEZ2QYWZ5Zuo",
  "key26": "2uFqZVtZrjQm6rD16UyPFG6oAmRFtAc2ugJa85Eg788r6w1gxzXWJT4nsUqjYofXZp9DFK2ZbQR83CxqUhtJj3Ss",
  "key27": "Jm6bUxrAkoZ4TYhZqG4t5bDfsVXyPP2oYtTQPwUqkBXSuTEqCSJvSFjcNNDB452AV5xqtmhNwmJGDr7GLut6KZf",
  "key28": "3my6F2PvCsdnxqjQC1Jy9VCdP43zjrgz1SVfMAjUmsGDGoV44EKz2cRNPhTeuqM8zWe7kkQtN1gCZVfSj7aUz7Y9",
  "key29": "J7TgowMkXJ4HqLqASB8sZzTyanHpgWWoNPCGKojX3wfXEE1d5P5ohAmCR7sT3wRyfWfduFuw6xFUFAqqqvdN3JH"
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
