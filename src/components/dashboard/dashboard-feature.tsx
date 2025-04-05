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
    "56jkt48DR73jnou1KqCm1tk4rvjKBBMDWoase5Ua3GVXZjF7MvQLJwdiHiKRhwdiTNsfhtwRWSLmyMGmCxB26f9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGvFWwqacwrU5wQErEFSw6VYgfQUSYfvjHq3TLh4ehKG3YuLXWHkGxTBLbtRa1nMUXktZ6tQehGA8NnnoUfZdBc",
  "key1": "2LjhM2aJvzW54vGtLpidtiKnz8PQ6P91XFZPMJofja7jCyHFTsTxNXN8BSv9wkbYKpqBJ2Xt3FUeWbYs498vTMia",
  "key2": "3ZYA2z74X1qjFbp7UsC7ZkF36Uw95vgwtBHfesEBw3RCHfFvyPeedr6eRgL7wcYMDbv4EzQFHkrx5eUFuaEjdFo4",
  "key3": "5jawAox3utrXhgWpivb3E9kHejzAid3kzKGva9JLRmCEyh9qKeGacBmYXH1eCjEzxsmPmLLpw7YYtXKBh7WLrFPa",
  "key4": "5uK2xwUP9YGANTt29td36wFcJsAU3wh5H2DQDvVuoWkNj2pHHbvMPvUEC6CSMWRwp3sG8dqyPkCuoZ4xAFe77ed9",
  "key5": "3LKe8xH4YGJ7zRZ6arn2n4vc46Tir1rpxZNhny5QZFwHQzBqsE16SpVpdnSMMKRShNkWVgP1DGcmsYvCXP5GoaaA",
  "key6": "q6AxqC4G58hq8TiwXMmhyEN2AXzQ9uNtjwenZemNDLjjqKpeKUCkGGbtkhy4pCpDukiUfUAtKuj6Dz2SDn9FKSH",
  "key7": "3F6HoZFLUL1X32qHsrhbsz2T8kRSAQnJxDYVAzfHygFpXvS3HB8eHuqbmZuer3cqKpsXjA7etEcEhYsmxL5YVYyL",
  "key8": "5ELeGqFdhvnfF5BoLs3VTxdmp1vbmwUYPKj7CUns4Hr9r8C8u31byBtDuSnQ3UZ6aKSPojAKnkkJiE57vtZgazgc",
  "key9": "3HzDruS4MtK4shZfVYeC7ja6coTJwQw3hu477gNQ8jp7bR2hBvXDUS3XXGWbk2S2ozVjPwfmnZJyAKG3mVcqysup",
  "key10": "3XzEhKi3r2At9CS18yEAhMDEWVRff2GMVNQccaUFoJo9Q6GZAz3YAqSEQTghCsixJQDKY1xZikzEVpAguxTpJmZG",
  "key11": "nRzV3FBLwCqrBbgyx87bb4zSeP65cK6suWuCroH656g3CfLy5cyrLjctfjRrDbhcJmDDdzi6X7knnQ96ZhvLtfT",
  "key12": "LspTuyA6AnASPQ6GwRMdj173EdKQx7MWpBkWSsCgLYPEfdWES4EfcWB5ZzNaxzsiUMhehPbAwzZSg12ijYkyGdC",
  "key13": "2zxAEbup6xQNuJMk6eYXcCdaXLoDKCwuJmJAyZxz8vURmyDYkyGwyYdPjE9StsF1ZjkvpsG4pRWHSa3eUpaQR6Vd",
  "key14": "ZaWj5VFkCzsF972gRqWCbWzT3D2TG2JJNb1LdSMuA3EDZ1D4tQtThpe7DvL3JrvjeLqcz7897rAs15rAPsVX9eJ",
  "key15": "5iMsGVVyqfqg29TziytWNaEwZg9xQZfRn6ovNMm6RVDvy7ndNSJdDSGbNW9HnjWWRd6ijKWsLnJj2RbMuD7A4gUa",
  "key16": "2KzbzCmZ9kn9ExGtfuHhoWeQJwWemRA57nH7u7t1Kt1kmLZrb1syR5hbqqJrzLMsQnQ7EDRG6VxKLiQgzgyfJaVL",
  "key17": "2kMberLBEpyMWZxoMxeQZLaK8ZFWG2BymuzT47t3fC29vs92bxcJDkDKFZpRNMSovFz29KwM6vWv8KH1dDuS54aQ",
  "key18": "tVAeuocWa5AvFstrUmaTm2wSSefkAQPPCNfp9a9mCeYpnEYqjV9Uqnmzs6fbRYBEarPZqstzsArrXYXDqEy2GiV",
  "key19": "26EzbLSxJaovMuRHUdfoDStjbcqyZ4xQS37jSgKHvw7KNqRwJ6Ceo31hzPEjZazJNH28AJgxTonysqeEJPSyM92a",
  "key20": "ekFXVjBjGAfq7hVu9s2gs82v6DCPCgRcv4hEWjCGQNMR6HCG8dgbxtf1ncsAXp7sNwzhxDKTYXBJbHPiffqQNMY",
  "key21": "3TFpMWAQWnpHfNuuC8eQYhaEDBGz6bM1x2rZS63Ka8dZStWWppAhYnW7HhoCR7hw587ZDKW23v19azRbZwSu9mLy",
  "key22": "4ywoyG1EWxcUG374VD9mpiDX4yEJJYx6SJQhbdEGhi1YYzr7AkHpkFdJEa7wiWe7uCnpDt36CrqhSbYH7mf54mD",
  "key23": "4FMqmscfnQCcmpdqDdjhQcLHQ8DCKP9EGrvXHQPfLeDqHE5w2dc8XRRuBuqmZ15h7jnJM3R5ZGu5BRGcbLKkLeGp",
  "key24": "3TBCcfzLm6grxknuca2KuR2s1Fged8SB6GT6SGAEvSeiXF1yad4RFjZTExh2Jp3fJXRfzarj4CvWpt7YoRGxsgV5",
  "key25": "2iRTAuS8m8bgajNeMF8pudyp2RSojBHnmpD1d45yMhvwmYCnusfb6pjhXSwcFqeLWEKnVv89PuAmPFe8HBuVMymY",
  "key26": "2iyLoBf7yZxgnSrjjFxh5GkzxCk7bzCgLeJzprkScwwFvdqdwbxgi8z751KgnsVFmqvDUAE2DD6fK9c1rGhZgkC5",
  "key27": "H5M8WW2vQK3K3QAFX99HQeo2ydCHBqEUVyF7hP2cd57BcXvqgRHo7mSK9U2uwDJKXRqgQUfgL7au8fTbiso3ALb",
  "key28": "4LWaX2E4UFfATiJ9ArC1bWmiFykGeJ46v8FBfvWZLWvwco1pCjon8zML2VQwCcnreC7yrNAbTUCpXVf24GRKHvbe",
  "key29": "3yLCWq9Rqh3EhiMWzMKvndp1cr7GR2KLmZnBETqdvGc7M7HNK3gkJj9Ptp8HyrxJPjeiKzY714E2XaEqmdFnyxw9",
  "key30": "49VytoEPKnQVN4NvAsJ5usTREdwy16ekv4ijx9ZQEfVD3FqHrJrjJMzxvK5pLfDym984thXTi4TKtguD8PcLZBoq",
  "key31": "2JN9j5rxRPkWTkahiUyS54cLmjBLXt6BzX9gB3VEvTpGx9tTxvMMaBjU3iWxvdPMEHC4aV77coJLZuBmSuQxHXrx",
  "key32": "Qb8cH7hjMxZW6vhTUNFavoiU9wzKGtcPf13fxNiKaxdcLsGyFiV4tY4RWKaLdwewvNC7zqKceYDvkyJUiPNw1Jp",
  "key33": "3i7ebuJ8qShCCJiXDvwzDTDa8fDNEuem5k5U7bbzy8Fcpvj4rH23zQQbcaFpDLp6qGMUACA1TKk77YBWhd1LjST5",
  "key34": "3yB38QmZiPYqYX1n2aeXccm2W7TKEecKVXWDWoQWr6bQxSaP56LuQjrouypkjXyFGj8mJk9AKErysdfVtTMY6S31",
  "key35": "5LpFxXtVwYddDcuLxid6KDfyVGRPdZ4H2HYmjF3bdUYB7coecLJy6VSgvZNGW6qcg1EKp7u9FtaQTWsUn7cjXm8b",
  "key36": "2yLwCXQSL6ydxAU2pG7RMdbbYk7DHve8DtJmvNJh5kBJ8BvGvXZarbEbmSDtVs8JbXZxtmY4pjS7fCFhu7bKNnhu",
  "key37": "4mqxtwcWPf8h2QU2J7FwedhtqxNE8Bsewwxo1J77kJH9WCQH16SuCjcqhscAByq5XkNnUybM46839rUypzqRrSKW",
  "key38": "4qA1KkNFKH48VS6EvKxeZFggutZ4gZjmLZvfpKAcBJHFhM6s8yNDXRCmha66Hr1xauNh6tLBVGxXbKRaCpm9of9A"
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
