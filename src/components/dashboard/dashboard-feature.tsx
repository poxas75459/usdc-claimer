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
    "4n81eSz1wNnkGCL47ZuaBsy3rmfWUHQq8G72aYBwquLWudoD8L5bYYtRT4Yu3adtdeTC1E2fBkfqV7FyPdPq5Qbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfVXVK4sAKkryLThTZkYKzQAgNDPSNMHXCbHysozPECteVokhFF4JazMbcFf2MYcoTVzmH9Jh7LcgFCKhMvJRGo",
  "key1": "1219N9VaXrrNPbiQYpLW9y5QDuP6gbwPcRNWB5b499RyN2Eo4xY6ndWe623zFr6P8bKGUCMNhK9R8r3oz88f7k4u",
  "key2": "4RAjSrZrAwsYZEk9p2YLTd5zFCPiyLR29MRb4TukGarg9UwqaEGXsMcRxQgV1LUA4aR1nznzuVoRNqahFPtuyWKJ",
  "key3": "5H2VqunA7pc5F1oi1p4iCSHEzn9Bp48a9UDZWp9ndpv5DFnDRhHanKCKyX5Jj4vmjfoW6QRrb1AmqTudVCY6LD8B",
  "key4": "ZMXzLTJKCqVqj6oadKxaQ4DnKatXtffmb4eZvtsdrVfdXiimkTWfxtL3xzoMJXqKtbb5ncAy4ktbgrvgMfqggm7",
  "key5": "25JQxhz4mjaqRwCpqv2tUrszVBZjvBqDkEmGLbbLHgGCrhaR2oDy1qgwNLPuYbagK66yJAksfEGW6PAFt9JNZguz",
  "key6": "4L1CCJhZGn4gKZtFSm5QX3qiqZFbDwtYuD7M62oLdeuLmnbkLvMUpPooA5LkNrMdML4kHMVGAHEH1JmLMv3EKJ8i",
  "key7": "2KwBy3xeuKqzbmidD5e7Bk4cfpR2mjoYkBksYzSjU7GLFHQ7Ww7HsXj1MYEvcziqckRoqBDc5gMVfK1ne7Mte9RY",
  "key8": "2eK6rHfwSVCktY7AsxyRXS6n9ArFbvK7RpjTT7LYE1QE2TJf6Xvj69FJQZDutvAdb1sNmXSptpj4Dwto2TkYLMft",
  "key9": "3Ez3BJ3RgzPEaDB6ErGeByfg6bLZv1iKSPvLTCHZaQ85ZUvJaS6LZTvEncw8BPjE35bGS8ANv6FHiq7kJXq9N4Hx",
  "key10": "3Y4tjmrX65f5ASApipnWCXzfmjJkXZa7oNSJW3wFsCmtfU49mPUoDaeJjjnSttauFsCG5oQgsE3dSKmBrt9L8Bt",
  "key11": "4BvCrMdZJiogDJsJHSLi48ebCAkB9w4UE6tewPD5zjnv3GMtk42nR5cq7gkzZDx1fdcXmNCdoJXhg4eyjc54bi8J",
  "key12": "42vrmbwVRzfEisbP2WR83cQx8f2fXDsF53wF9EEvTrdHq2coH8ZjThRQrurnqYsXxdPuMG5HoApwF85R4beBRwXA",
  "key13": "66tqowyfA2XkTVAGqE3DyN8gwUXejbkdGfjjNBKfuqxp7bhR1mgTXBHt8wgDWCbYygC3t79gu6ZkBvYK7yhLgzvW",
  "key14": "26HyViuMdZyPTtVyZSj2tyqMwBS8ALELbwjzwxcL1caL3yFL1x1HN4kmv4LKrs9x25saSSjTDeefCBea3QPMCj2c",
  "key15": "2tEQvC7awrsmeMov6VgJSnqx41tjrUE8HHwxFxzgkDPKwwu3YMfhfLD2X7jqRssgLoE4y5pwBeH3aXW3nmbU9Dxt",
  "key16": "5nULMLGzRgD6cPnoYcpHuxbX1hb9eDMzXQbwevMZrGDsH2qJBHHCE1ST2t5muMv7eZXHsG2BpfHkpuuqZaShWmrd",
  "key17": "fZHdyRk9eSRzhDdaPQNyGxDbTaJqwjbqs41x4hXSyDYfnHMy5ZN7Hmm2CUe31jrRK9PSvH7JbryRJaF4EqJmXtC",
  "key18": "5bw2oerrSPNCVFB8VHeNEZozhL7sSCvCzwHD1rZQCYnkSqtYzAnojeog5PfdDwcKJcrLBY2VACE42TbcipBvB2Dr",
  "key19": "5JgY8j5Yzos4mrnxr3oTQjGhhhjkS1mBPg7qPQjvVYAWxeNqGy1Y6SKqq7S1EP99Tw3RvRcns8ALhhFfegQc67qe",
  "key20": "SLrg85wCECfWc3nTDCfJtk2TcAds6RA5CkiLGtmUxgQc9i2VHEk6qRDNqtEciRNWykYGfSsFvs2VykhqWZfxSMr",
  "key21": "5bnSNBweZENYXZoqFV3G6TJsv6aoyWHaEENwerYJ6FJ8BC4sJAYnAuP55Mi6Rdr941pFEYYCjZuhVpJtVxqAciVP",
  "key22": "4aPFz9QfF8WmYvEek5y1v2cGRzeJAmX38bEGWtVHGJRhk1QsxRx7sj356XZjYZ25CCQxPSkDcV1qLcxzKoyypfYM",
  "key23": "2fZxBEaGp53upgx7YxcMbcQ17R8zBBWTBXm1MotxQ4Y3RtgnmRSV3QcrAsvcjvuyE6WqnUq6U5Yj3ySYffaaGjAd",
  "key24": "56nCxkSFLmnCmJLF9JW63ZLEyusDT8PMzXL3tpNrdgJP8FXdWEQyPhSXmSijj4QDXiogTxGtiFwXGfmKfKr2gLPx",
  "key25": "2Yeif23mLgHDAis6a4LJzatm6b4fD8dCUc8GhX25Qe8G3cBhur3Xo9eCYn3iQULkdQpn6yjf2yxvjVL7bw5cHF87",
  "key26": "qpA1y8c1x2RcEhq2Gipu4RcPfXBKe5fmdpj6EkeSDeFbDvYHQy1X61F9zqRzNmzdsYrTUfXJyRQYCMvP5TjykkZ",
  "key27": "QH4WmLCEDB5Xombs1PutsgbYp1L5evp5qnuY1uNPpygNUN7VB7f3CVJehn8y9gFrE9bm6G3CyMCfBMC2hV5fBHG",
  "key28": "657tj6MYyPAUwN5HHweXczmJz7q2yaQgVS57v492gHZbsk2SWQfkrLRmLn9hVfWdDheRtAjsc5LvEo7NGk6F17T7"
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
