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
    "2Xd7LnTYTA7vT6uqZt8msck9WPFjF5m12xrQH2RefSJWyDa7vaHf6orrC3S12xkiUiFf8Rzer86ii1gsWMT6Xpfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icUcW6UXLbwqUtAGkUBVzqLApB55BRbvX8q2Sam1CRnyJjo9PtMWMCSTtLanMr1jny7hq48XBJbrgSWZmzCYZKc",
  "key1": "5uK4oLAnaMNgtD7AKG9Ru2o3mdzPxzXAwBezwQ1VimCMfNauuZx1WiJ2n1kNRZMhRnTHzK9tbsDQMkBbZeNq1ttT",
  "key2": "3RY4c2z4zKGsoCkZfbNjWGvEkdaykdW2vceo1QbbSH3T61w2PAczCpWXRYu1fW3vcGExJeLU35LNWE3DW9vkmSrC",
  "key3": "2Sn5yaZ6WyFKwaZYnhoMRvxWpFnUcZzxTUXCma5fskuAhH8SiYFU9WDssoQrREjHfeFb4Xz6fReYXqA8czbnd5ji",
  "key4": "5MbDpuToFyTfrNPCL295En2JuSZ7eMonoLd8Lcy2BXiMUA1YhAFSY1CQD3CfGPpE57Q4ZcNcYHSZ3eMaxPH9HXTN",
  "key5": "57KmHv5XMJgFY5RiLNEpqGKxCrbdbCx1c4k6Vfa8PXVQhvGdVjDLyK7yziqPgeKHFC2ap8iMVBbGNhaufMfTjPKi",
  "key6": "5CKmqZ4oevF54ymrrrFn6GoascacqkMRUqJqLpkrhJF3LoNmyAtabnh37n35WFJ8TWLmkTtcvt7hq3tX4YEvB4aq",
  "key7": "4EZqXcMqTvGh2SPeC7VQRpyKoGD5AWrJpwo7hjEX5NH2oUsCoBEG27Bz98p2xuobZyoMBpu9usZHH43bcmPWwRHy",
  "key8": "25hXSqNbHePXcfP8oDzC7j35MR4HWASbxQJXRTfaj7aFb3U2HEoSnBg9KCpFGtBuc8f6xNBKu4ibFHQ6cK49D4uB",
  "key9": "3kk4k52RtyA7ejnZkbVm3stDkZgKHc3ptdAhd47L9AHFXTtZKsWHvFvV38iauxkTpVGsmPMEbzkxbDWaA6yYrDNg",
  "key10": "3SvqQFdBPEHNr1BEwiQjhsE5EuGwPYq14BFTBSELE7TH52LZd4wQXEJ8K4LB23dy1AJmi86gDrYvhVwoyAyXbbW2",
  "key11": "4p85mmVontAvf7g5iJse6wGRfJoxvVqww4WzefB8CAjeNBrz9MsGbK8x1gqA7fF8mdJorHgUH8FeWKkFqHUr7eAP",
  "key12": "3DmwKLpSSZH2aB4TZAH7c1vkLdj2sR5Zb6sb2R8sTGZuwadouj6cKTpSLkAPTWPugEf58bVpM9tTKQ9CKuXaffLw",
  "key13": "aiBfDVEHAEbpGS3MKzsebVWuyUuP4aGSDYeMyERVAa5oaXKHBLpibeNnnbbjCaQg1aH9xDnjNyj94ZqQYdXCNoD",
  "key14": "3cwstwUHe3sSVHzDFXco53MbeHhCjFFXVw5Bq5RXPACQbDZ1HDNAobWmjZdQgPDJk8q4kAaBwPGRrbxNWd4JCCqT",
  "key15": "51wcPTz7omFSEKPc2YosTe5paWyy3b9fUM7FnFUDbEdHJPaKpuGJ3s3uc8R2oNncPvr8VrFhY77473Y5vHYNgLmC",
  "key16": "4uwhackzzxfd9nCFhKeGXLhFBmUzZH6hiUtcZJyZmAzQJT6yehmSSbeTB4iRjdPuFt8BZVAJ5pCxPAY9W41ciasL",
  "key17": "65iozQcY6o2ECZtDsaL6XXGj8pXTK5sd13xeuWTCEfRdEZ4Y5jkAEznUGnkRtDjDPRHR4cLUCV7zJHYfWz7oYxtR",
  "key18": "2FZ1vbQjpQwJ4iDSF1qLdJgPNVXEDRoaRou8nBwUZ1FeLzUyJEX8Zr4a88Wt3AkEFxPBauNu82ueqwsTbK5RQsmm",
  "key19": "2NPujcGYCEXcjf196PgKABsM54fus4cVEp4pibmkJFjhhL9ihkjSkxjBg72YWk7UyiE27mPxiDWeE2kACLsUYdNr",
  "key20": "3quRkMkNVjwyYv92X7YakUkpz2axAXytApjPWKqVGniZaFrA7aMUVWowvMKtvi5a9fNNZ52uReRkfuqS5ycF2cP9",
  "key21": "3Snoq83tgW23hXMMsVy8HuSN2teZqHv3jPGjt3mK5LVJEd5sTY2yVXwDq4VrCpnX6WFCk4xHczre3hwpcnm4f2fU",
  "key22": "5ZyondaTyCrfg7Lm7KyZ6Rd6dyc71woA4FwSNvuzqrL5P1k1YAsudSM8JBdKszGrTCZ17uZezYVQ7mwC8Q47oM1C",
  "key23": "5Gpkzmbgcn3nNvUF8HJZc3swy2Dc8jfKtZYuhmJajGz8cCpuLLVHHL9AJEfbRevyktECqZnzD2AfQknTLHEyhR9b",
  "key24": "3iPagz42GdU9oCbSK5nyHvRm9ZfTpLhVwh2JUEN9sVGa6r7jZ2n7Zd4kHS8RZHpvyKtqiSoiQuun4ZCTPwVcGt4A"
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
