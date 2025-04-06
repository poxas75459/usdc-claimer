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
    "46snodGzPp87Bv3vcDEyFbPwcWzG6S2CRAJ8DadnEQxoT9ZEzg47yb86ZDb5vga1u8QMsAnf1o31hSqvnyMVw5HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwLb471xqWUzxXkeqNvigvnwnftgsVfLPuLkjf8kGLyMyUEEVaoaj6xo9mJ4Gocc7cJAmaUkZCFnhQWEPBWvC61",
  "key1": "5CT9PyhiBqsby2FBxmTpQBehdm1dZB92hTpJtCZJYcgJNiDXP8yZQ4Nsw6TucPx8nFECZtKya9e7HP8HV4AugXMT",
  "key2": "BqK56S4ZwoqsB4F3DxvTT6KmWtnXsUSwcpr5DLBPZd5S2zdThnjXM7r5cTm2rufZPBtcyY69oVXE9FXDbNjXC2n",
  "key3": "Tucg9PJfV1mtaQqMRRFLSUkmhSZ1CgpRhhrswcVCJdGdagPjQbuqt3XJbFZPbRsGKywp8kS4c64X2wzopFMyErn",
  "key4": "8KguXYSo2gPd6ezTubfpCVMhGZPRM7dveLqP2nCdHMytcKf2YcHDxF6Ggb4oNa2uwSnpguG19BwDuR7wg6NTHwE",
  "key5": "25SKxpH3z4M9n3hcacmEMKLyCJxGNDx8fEsfbap7BGK2qGf64DtBTwnB9xMcARFySu49fKRiwpFDSbqS8M62FLpi",
  "key6": "36LETHF6dh9cV7nYs4WTorTonGUsT1y8UnVKkVBiRHk1kHp3HUFnHqupoLFr8TfL6V9JKcUCiYncN9yBvwKN3ZBy",
  "key7": "5YdvBnA8pnJMhWucmWfvz2rFtbMV7oUKv1z5sqSqEfbw9f99kmrqDgU6MMGmQ1MigRVLbRqLtQ8fXcLZ2gYt1aNx",
  "key8": "5XPBPXsguz3KSeVFgWXRPb8zDXyx6DJNTk8WbzCfHsF4TTWKsXvbWC61nmNnr4m5zA4qXFgkuD1CXxv4SBncZS8A",
  "key9": "u8XcVsUpEfZQ2JTCMrCqDMXVSqLX7dVzwoj5at1vzhPL9Bc11GifthpWeFh6gKDPQPjbyi5vRtACo1sQwT6ASE8",
  "key10": "5kiD49KbUsy95q6M2kmxrbtFZGZM8vRW46gdefEx6jFoWDN1yFYdqq1HEDwv7VD5sXW3ePzWUAU9aVmhzGuZ51e4",
  "key11": "5kwo4pdjg3LsmxeCFC7zeNQPHJ2RJRSrogExhiycnj4mBicKdkZWDCyD661idKzKADPTksuSBNUSQMUE5wTbqfy4",
  "key12": "4E13U8MCVTgTr1BgBNBTf8VnLzEJfyGMjcjnqg6Svj2imm9JhGyYXidrvowAeaERBMfNiGyqmkQ3EH8G2R3dQLeX",
  "key13": "24a2Dau6qTwxHKUQwvJ6KgLEodxa2Nwm8Q8A4y5LsPXSCWXymzfSHENVqoCGoLYyHz1ZnmhwHGiUUDuoRjmACdCR",
  "key14": "4r8cTEeJFmvuGE98bscy2HwZUCQc8BNaZHemkEQHHLhLjjv58ZzfhkwPdptRLTNkLCyxtPGjjqGvUzQfsqEExGdz",
  "key15": "4iWUiQAojghDBsVs4pc4nidyMmLSiTTf7ggAyr48NuhP1eRg25apmrJE8CihZ3Q8Pzob3DqWeBf5Nwrcb11RaNnF",
  "key16": "3yWAE6NDYzSuBM8pNw4o6UGoiaK3ww558BpT5pGEWDwmcr3x7qh3bm1M3Ys7T7AE1HwNbgZi6djaFoT86uBjGKnu",
  "key17": "5LC9nnc7y45A4MR8p7StQrDrmVH6R55sJAH7bfECJozfxH9nyvfoD5PKbHonG2FyuqMjFAWTqQJ3obvyP3NMNeMf",
  "key18": "4cwdkAqzMjmkvXpnFm2iCNNMe8LZwEzKRcYz5HK3H8twPjdijWLkE93siVby9aFfq92mwpB6Jkm4x9uewU3wi47U",
  "key19": "4CXu9EeJFwoRFCkFQXvkAZEx6UDZRbbAz6U4dtiHuaQ8gQ5TtpNUj6bTEikwUk8KvNFQmUapC3Cgby9rhwkF85Ep",
  "key20": "4qSsmSS5iY4X5BB6i42HwQs7izujMLmTDnPnDuPJ5b8ff2WkCB1jJEhKPAot2fe5MBW4bX6VdDJB3TFhXp2trrYc",
  "key21": "FrRCjFJpa26aej5yY8bTey3UyxVzBA59X4yfFqVJgPQtS3HT6i2ggNQXo8yRBQ6zwRZ75xUKNgt48PbdbKzLP8M",
  "key22": "4rjS9hK3dodFs5KNsBUGtKKrdN2V9uCNFnAsKhBJ2YAGo64dP8BN7PJcavogXV3tQDi7XPzBbMbiP2bvVuWA5oy7",
  "key23": "2ntHHw8ZgJAhzs1ajTzoDngBDZN2UUQQxp6uRbStMuHfPpjHCEeUbGtcdhEoYqvw5qz8ecgHZJ9KvHvYDLe7pxC8",
  "key24": "4mtHuMJfGBoVh2xkeUdQMcNNvMWzmwz7tSNSnGKLVR8UN2CNoAyGJo4QYqmsmpAbNtYVSUabWANGWxmfWwX7S6fs",
  "key25": "3EgTL4J8z4mr8zX3GpKmCFudVpDrQiqyvTaV25x4BGA7ph6mxLbr7sf2Cjxqwf5QKXqnQKRLQzT9mkJUmNLmNiFY",
  "key26": "34PekYDVo6ouK2K9s3LL9ky3M9wQC2iuxkCRcpriGCtnCD6nJEyv9zsVn3JqtSZCkYAsyz6A3uiPXfAjmNFjL6YB",
  "key27": "64YkUDdxYaytYJvydLTizRg6FhpL3F2iWn1DXgV9961L2mRyy1d2W3ZgRNWvETdvxewHkQSsYfr2X1MHKdqXheuB",
  "key28": "63Z7q91Lpt4QfdN5A2pg6XEnn8gZUsnJQwmkUV9LiyL9YJffQHjtB6KyDFvn2aVSFCbLcK9sxaCDQFxXPprxdazu",
  "key29": "2QurVZY96Ap7xUafZnG9XpLaKJ3gqKGr549dbY1Yioua3UuNs4aueEeYzrtsBfLRAsMS43Yk9T9fN8DsX6mq8nvJ",
  "key30": "2DruKxhHZEAzAoKccuXXy24qvAE4ypfxx6sXpGFAxvF18b8P7akwDLNqzsSZ9LqYkeRXTTQn3QPnD1G2FRWeS4vW",
  "key31": "4eEcgK37dXMyfDPwyUi3fGk8vBdffv2w2kFTGUTD8a77Vn7amBaLYPuX3UESqjoPXYvRcj8sbpBCbqGggZYnvK5R",
  "key32": "24uYL5HB1QvmgjLDqGEHU7USsA6fLjP1RxC5PowBehYAZtSfnmkXCjXhjKhubMzDGGhrNYdr8Mo15KtHuJYur8RT",
  "key33": "3a6PpFhGP8MmUU4Wti3dm2w3S27H8fQYjdn5WtyRuTdUyKKfYeednroCScwagvQUN2fcVJqhPDV4wv7wKijEAS5q",
  "key34": "5TFNkrS2ddLXPFfFz8ST2BrE8n6YQ7wXUTftsubsehNoS3j5F5sun5xfLjp331VRHH7h9KhTGLG3KjBMV1U2XpXa"
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
