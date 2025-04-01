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
    "4zNyrLznMhJSnrj7a6ep5d5HJmZiCoDobXuhJPEsnFvRCr3PnsMu4PtpL7L8rh5JCUBjc4RJf7fBTwHCKvBuPTFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gx9DyX8sT2QRTCQE2mgdEAyrJ4KpQSPu3kr4AKRwWNBPHnR5AHy3u83568acpGb6HQDXWLjTDqK4LxVTLjJECfS",
  "key1": "3EuoFCHfXgnVukNafsZsvit9EgcpErD6Zjbv1DH7ReKvKy3qMh6XXSbYGoWUQn9nYnayPxCTK2vqk7u6BBrhj74p",
  "key2": "3K3c9xQtVLenfZPJDgvjk5Cp6L6YasXZfDdkFYVDX7UtuFHvcirxkekejbXFHqN7oQ1Wr21FXGZ4T4BitBESJzBh",
  "key3": "4QL2cpdGbo7vzTHcypEf6Qm98jJk6qPef45Eodje8TDsSu92mPbAZRqjPvDyEe9geZX1Wa7hfjMZo98mp4ZtDy3y",
  "key4": "3D5rvCoSNhzPiK9MXDHGwUd4SWqGvLyEJAGYuBdaSNJoyVpYLRgt1adRSh19a4mcW4d4GnPifZcnqUycaaXHM4U5",
  "key5": "qXrQ9d7p54a4WaUkvPGJoF6aRfYdSgXXK9YLB8wmcczUNzZa3PkoELK4DwpYLLb3T1bnd4hmrC3Bz2ERmeL4eTP",
  "key6": "2zqvX6intSkTfTqQeo7koRQ2sbA2H7vPM11ND5VuCcdQFpw7wAusE8P1eKkbvZjfHR6hLFLoiW59HsvvG6ZSRPjH",
  "key7": "5Jh5iF4X2ojDuYVRVv5tEGkUagXzj5sMhUgX2cNhyaMphWsF2qbhUXhUVhZrwP5WwMtstTzaR6pJQpXpV71RRa7W",
  "key8": "4iukyUgsMnXuMGruk8ERRKphgjDj58fpB1dczgZpEWJaTVUBsz2p6mXzYEgnvxBAHtkRy9F4oHNDsfkMNMMP2Tzm",
  "key9": "5UgFPtr8A61ZkpEDdeqUh4U8iGHb8LXSkeahEaJHFeTcaLek5QDB6kCBULQvtwY7LRr3ynQZG6cZqVd1KoMthPVj",
  "key10": "MpAiqAF9hSo7JcyR7oCkJVe5DrA3w7cYEprNHQJyADovLpMcHbVhJut8dC4wkhXP31CPMiuwfoiJLVZ4fp5jMhL",
  "key11": "666A5FVvBCV27p3ft9D88c2UpXHi643oeyU1rLxwiJH6R61UKoCkNWCsoHh15ef91gQU9QitrspUHrj5dpUAQGUa",
  "key12": "333yrDvjCaBqhsFLDnraT6QLWGeetDz7uhgCXQVLpHZmXbpsBiL2qfXusMrDHHpXQGWFgaNdUNhhLnRoqQmmMeWi",
  "key13": "4WGyXwmzhy7eMpxmepJtfM2U5cEkTySKECZtUeC1Axc5rJP7wGGyhCBZys5xtmctXMEE6AthnkBMQvLcVemJfr8C",
  "key14": "4Xm4LeEtg1SEsxbDH1wShvHaxq4pZUHqi4Wpggp9Zgxz8F2VdsGzxVqFhyjHG2P9jtdvDTBaagZspVdQGRe2xewm",
  "key15": "4scq4zSschdz6uNZgaxV5Hjwa1YhzrJ24kQhubJ7KH72Xje4HCUPK896tkYU1A2qDUTCH4J12gSArSJ8KaSGxTbK",
  "key16": "29f1GkojmGVjNhbTVJDzuHjNtenUvrg4H69u7VADHL1ncJWKZVLZjJ9N8jrFA67GPuo9WCH9pqcCa8wM9KtwKoSH",
  "key17": "4B5W48yXxNKkD547mSqmWnvVM4SPFd6oYBrDdWiaF6opnU7JKb7M4pJJNKUJbYndZsEr7vNgXfaTijGBcQsBeSkQ",
  "key18": "3paNpDZKsN7zPUmYw22tPxJnaXPeHaL7nJR1cuv4eWLMAT76W9BNCYPxVi9wUqBnJJwKB3DXWnCc1YhE5LvXKsjn",
  "key19": "66qaWfBoy61YyoVMeGNsxwp2H3eLtauX1E8cqV2qeQvZWQXmdQyhXTY3izaVGvV2fGqtNshowWAzKQaxtsPYdiDC",
  "key20": "3QJq7Gb2Qov2bwUG8iRNaXzj9aMMvhA8aqv7jRdStdfegqWK7BuJ32rUKMP56UpJFXqGWSx3e1h9y29bocuVc8nh",
  "key21": "3WuwFA73hnrDNDpu6PYAFuXWMJikUSHPSV9cEABergvaCr7smHt4Lfj357fm5F4o8D5aUr671sHJKW7F66vypYA4",
  "key22": "4ijp4ENtym4mDTaap4TAidqVtJ4wnWaFfRm6GmzHtz9cGZdXCqi3u7wfLVRtPbaWtsEm3aPMVZkGj1izzBZPiKgd",
  "key23": "5ocKGYaSvcCahjuMvuEJH6wpZMcEHRtQKUrwmVTeAuQnhCm8Dnzw6irJp1MmbLqbodgjaxJhxPC8Q78wWANhTeC5",
  "key24": "4Q5e7TG9BRHVdzqEXnPzLnDvSXpaHYZGzhmrrQjwaMQNKufHfnuBq3Rt4dQvWuwwyYQxc6uzootdju3id1QNEK9X",
  "key25": "3rmVn7bQPB2vrGAA8Az672RqRToBgSmQtotutFSfPXWmt2atS93BQu3d9nwe2Jmr15fVqGPKvZCjdHmkPmAvXCSX",
  "key26": "4E1s6tGUCJXPKpU5L2tU8NAEppjrDBq9Svx5YTZphDqVo6TNbwmcr5zSbFmN8HY7gDpjyCLcNnKpJN2qhuimkfi7"
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
