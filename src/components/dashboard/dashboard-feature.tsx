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
    "2mkfD3aLDvhtE99wkXzJAA3tXCvFP2WjVxhsUvhkzQingALWoMUVz5oL6ghxx8gb8Jfs6PhFVfWFY28iUuuxuUZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bPWWiNbfhwrG93zYiDXgZe4tcQWrT3VKajBJA7f1mWNGoPBj2tHLgf1Zi1GygeLrjZFdYqo5TBUunC5ZAb8KLm",
  "key1": "5SFs4WQi5iAbQwoyuSQUzxDxMKyxtBHRrMZE7wuHd7yGekmkv2LRjpBHxQpxbzzUXdjJa5AcYkP3845fENr8ZpRN",
  "key2": "4BNUUrGQN14tyrXfYqWxw72JLqsi6CZBsnHGoTYnjaE5ZRbWCdH4nDVXaSLfxa5TfLwS73kaQvzwvV5u7VZsXBjx",
  "key3": "3vKTF5zJn4v2w44gJAE6kjMzhxMx4ZMP8EtvwszNEydESsyTE1AiirbU1gQQwNiYFeaMD4xDnSbMfoGMkLz3g6Mx",
  "key4": "yEQ6yxLwPLb16kG4fdpva8owXSUVXqcRU3eEp5CZDCB2ZHTCVVpcBVadY5CFC9t8HtxvuZxyc1vSSBA4icFGsQg",
  "key5": "5G22iJ4BoUJBvfxzi4QUHmrmp86oGKaLzAVVHzb5NoFuTETEGoNEATrBJJmumMM5H9f5xSCbeuEmL8EVPR5a6mef",
  "key6": "5szN1idJPt9wTXuy5uKSmbEwQAEg7EfGymrTbEdHtgg2YBBMUzfb5U9BvPxFNERYXCjZF1qAX5cKYYzaURjjJ5SL",
  "key7": "XJR35izphBamuh9oiE2phjbJk74Fyix1grd4EsJesK6zq6239zFNJbiadNmgMK6FbngzfLAe98e58ZysGZyTgzH",
  "key8": "63rH5EBxkt1vej3tVKMFE6zDAybGQHf46dvkww8RnHjktTkMEYsUPTjjp4hS25MdG7zUH7Hg1LiGwZpqnM6vghT5",
  "key9": "qHQtAQ2sVrR9AjPUidCc3VvBzWc36R1jMRQrDNfQ1k7xfh1b4oWFohVGy8iaQBLQEwnu5hYsYjCg8j3Zc8HKW1a",
  "key10": "5QKE3N8xbdH457eWpB2RoGxBRWfyffPHkVjesh1gwXgHKCQhgZegYUWKkaWQzauc2tQmGy9wrUjXifcMtfP1jaYG",
  "key11": "3NXZQ896EBcCVqCp6Y4L4NAgvSC8AKF5gqMrDPNpauMJwz9Codz1wzzCkHfvQy5gwm7xgBKkvoQTsGKT8Dk9NJZA",
  "key12": "2coPwohNpAMutmGXg37fStvgyEgVFJ4xeWuCRbvXeHckpvQMrsGY6gq1zX7KQZrcPjgrLWZMr2CoCGYXWcg9JeC1",
  "key13": "5xq9NHHbhoP1gXoKUizZKfbues2pUd6B9RP5ksXP9JnbXym9Med9FvwrcfWSdEn4ZV77Xwc4Em4gq4LXNCQzBwCY",
  "key14": "5PU6oj25voK9P8HER8BFpUwUUma7rFwhAEhKFPY6ET4RidvcZWA3SqazYFECvAJbvtNTUofS5ehiCcDJqBqboKob",
  "key15": "3v1WRzgEqYqdewEF4GF1HjMzz6Xe9ufB3GovLaKUpKWCtom8D7wKHCTFN4ySitKQejzkWY7WrboRy6WgQeaHH5X3",
  "key16": "4tr7FXJCksGZA6N5q1gUAicyqkVCNyJVn89qU1MAvx4tHj3RR5hZTDzprmYLXo21QLYcWAV1BBQ1K3S6M6swQydy",
  "key17": "6BsrbyfgRCE5bK1GaApEvfumfK4bp1mpXkWALu3sQVkeiCSKgfpeRiLnPZfRd84FbqCooHFzZR7ZWs83v4PQ4KP",
  "key18": "4T1vfjDepKo9PEQiY9PoX1HfBUv6pmtYpCJz76np199uHPPHQ8MWBcC1ASLgSjetXrJJktuTt9CadA8XzMfiZ7V1",
  "key19": "5JAp8owNW3jHWvskehuKrR3m1uNW853NyDVDARsQ2dxzwKbz8xcHs8GdY151HDTQAvHrZMsiwyfFYJsncZzaTTVn",
  "key20": "3VpFPrAknrEzGtMcywwbZjZWLPH6jcecFfeu2MybPkkm4RQawDCj1Cky5t9hRLYthRMYLXnPYtTJwzojN8pNannx",
  "key21": "4Qw3vFyxdvbSBWXM6k2TqRZ2GV7c1X1Xvm714F6f42dHCy7xwJVnexShpbKvh47yctThHRTNQpuaPvefe1ewtLVp",
  "key22": "592RCQdSuz4t6fHgLbhfTMjEus9fFwij7wRpXHh4Bsy3LUXhpkcodT6L7KD9EJWi4GbbdNhDduUXU6hDLLBBXM52",
  "key23": "a9DSoiGbyWTBAimxEfUBnTEFoPDNteyEQjwBCD1mf6MrQMSZ8i1JB6VnojcZSNstTXhW7r72UsCjJdymwvY3RbU",
  "key24": "2ekKrcKnfYd73fr3zjXEbMnBcDVn1wTHZNZUcpaDu6M2FpJ2eH1sc5j1VJQpxZPUELo3dkfqD8XRFZDGCkw6qjse",
  "key25": "4QM7SSqeXrMMQdphaBNXyjYmGVmAowVSSvcunLo6DrxFnbBVQjNokK2Q8ovw6tBuDFUgebc7R5Wu7PoARh3XwPz5",
  "key26": "8tzQEXejtzJqZFJbLdYQguKUrMML9akptqBpQxG1Bwm4K78ymvvuP6HZCpVzV3XfPiaz2n1qj2NdHMrHUQ5F3tE",
  "key27": "2efFXeZsLbLU816epvpJkVNshw2DFCG3aQLcCECnJcsMUyExDf9y8o5iqBKRvwxqJtqJjx6yJio13CUPZmSXEQLh",
  "key28": "5XmHocXMfdqmPCcU16YP4g8Ha5p6xpptLHyUTovgDAafjVaBt2vmjL5ZiqrXM5U4zNMcm6tzLXv2V34gnZjV5hx4",
  "key29": "4utXz1q2Fk7oobFSFbzTwX3bLgXmHEd2tDNTA9on1xnP1BcUVU4QbvZCuRDoD1dBueNURDZgUjhXvJUD4Ns4rdod",
  "key30": "nRzKGyR2SnweoDN1Zag6AZFWMA3LDsFH3bQEPxvy8cNgd7fa3WABc7URESAKqPeG4btupnqT7ayEjsX1uZp1DcG",
  "key31": "65DkXfM4hSwu4rw9Pjq2rM8nYH7yf34wtPnH2yfakLPEAPed3c2r2ZHq24YWrJBDFqqV24X7x9RdELhqXT3BEoNj"
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
