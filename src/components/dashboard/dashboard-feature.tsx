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
    "5VLRoKAdRQcEPmvkWPKmb1fsf5BrNFCyYoHjXuJ2mBihXScgePLztDao7kbZoSNhEUB251GL56vBPbgxpSZNZfnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6pCPjphnEMmwQBr27bQ1mB8QTxd9uyqFEhvSidY8hRvX1ksd3Y8qjdhbEVhz3XdypjoZ8UUcdb7nQcjotXSjeS",
  "key1": "4mZvEKQDQVzpuUCkbQJG6cDt6XoT6b1KRgXJVnh1U2Nkjv4Tcmj1NJZuaDHRkBq3TpFG74RtRTrZqNa8v6q6wEVX",
  "key2": "2SJexQMDBVawGctmXy5DPF2tMXxK2egqaXgZe5t1EmjNAf9h4gQEE97dJj1GQ5bkTjBWwRbUgVY3rZtj2XbfqshL",
  "key3": "5yv1ydfDhSFRYuPVCbYLbq4drw9dqQeo63bxrKNrbqojoJ66egLMsUK9s78hVx5AgxwF6GDQRpyivV1EJL769fqm",
  "key4": "41auDVkvRRf2oAcKLqPYAbJ5D4ypT4UgwyEdxa2Jpr6V9KWL65SwcTryQnZ1RR4vzhZ8pvBVeZUSEzk98Tvdgw9a",
  "key5": "TUeE83sX3WxF1rW8Y7bzEcJJhj6GKcGBaqdLNGhxhYJRsL9kcYuix7LGCzvVnq51S8vs7F4AdBZgsr6RXr7ooD8",
  "key6": "b2TDmbaWDV7nHqA3nKFJSurR63rwgwQ3R4m7DgfqH4vGLmLuAJTDX781H4w8LksPUTNoU3F7fbmYFBDryfrH3ER",
  "key7": "4VkNfQaeY8ox6p9h1dzMuPWrmywGk8Uo6yw4uy7EkJ7hdW8pJjBpMpMXwAfJyU4ACjH547qDjpr46xsZoXNspNa6",
  "key8": "wmWQv48fxAFPt4F6MZsywgoPUK9njDfQd899eZsemEYbKcnVqCRrDGz7M1H1sar2ribYu5xjFeRc4iKtRBUVQyg",
  "key9": "2udGL5U6tGAUbtGM7D7dcZtzZFHiZaEv6J4sVXEBRVJakgp18c3gmTUbyLUxW2xjpJinv6owQebtu6AAmynjJ9RK",
  "key10": "4VAJA7eJeacKbxN6q9RghJXqVHYVbPtrXsnSbZF8tR8in3fFf9dnpvHkG1EHNWYf5gPtQAtfdGA9Xz2gcpnsH3yN",
  "key11": "3drAB4SMDRUtMnkyQK2ERpecEb51tEbyhrMwTNUFYpMWJwHRdLZDeNke8dwcyMHSCkPpxVe4RGTRV8c3hVXtaeMY",
  "key12": "4mxvi7HPfousmqYrV7vpaC3ma4uUrXNa5g6fLR4Mh7ZX1yJyzmyFSqHm7mJwJVYnxtGCS3ZXrDBUjQwFB5m2JngY",
  "key13": "2uCjWH1JLuRrgSPgjUBYvurr9qEi2Es51RV66wTo7nLZS5NkkAQmReXuZDcBsdYeTqY6aLEER27Q4kJyVopaxZx2",
  "key14": "4bK7iKsxnC2Gz1WJ3byfMwX21cZpuU4FxobZSdBfHqm75C4fnXgsJPYyuVtcjibbxNyoNwwMWLfpUpCvEWb76VBA",
  "key15": "5ozAsvm2xdP74GLLjyvfxnJbU7zGDEwPqR4pQYPjhKrh9yHwm6UuVnG6Kx5UAFvDTxc9LoN6xy4RVnvhdYpA37GP",
  "key16": "5HGU4QW8a5E8PSE6C6nhyN33XGJxaYfCvUtBfNVswVor7jNwPD7qEoTKHPPb7CtDo94qNm6pxxMJ7mEH4i3hGMs7",
  "key17": "wUpkLjphPe5aY661kbJadLhk8VV8vtRsD7uj3zaUV1odwxwB6UwNjKHfCLod1zCQ4swi5yGUX3Dn52sGYM6XBLL",
  "key18": "3KNLb4XzSe8tnFJStVnhvjHR5uY3gys6hCQ3xsodCQySYR9bRUCJPy4wEaAjHvfbegdNve38jHd9qbZcWj51Dmx7",
  "key19": "3BbyuzYfQucQoWfZWPAjV8eEfW6MynpeDddshvFuGpynXTzxVxdmHhTjXTQcfxVDH1NEh8y9BsSjsx97rTdfCM6F",
  "key20": "2nLipJCYCXia4WjkpETikKXPpXjyr8KLEv2QizZhes2t8nuTb79BYDcauEn2xJQwgWRrBBf5ghcVNMQ8TJYeHcjm",
  "key21": "2M4hdV1Y5HbepuDcwwpivQYbj8sWFRxNyVih5NxGwjbDWf7ap6MLgicaZi9w7rLp7wsAvXCbBCMCgcG2Z7Bp1g8U",
  "key22": "4VCnieF72gDnZJBxSKwnXVmoZ9rcuc7oTT7LqYz9dnE8SzB7P7DeDj3Ag4utKntQYChZZUKh7QJq6i33JmTccQQy",
  "key23": "5ECKPb6h7dGxKhfXx3HYNmKuT8XfTmvjPgWuaWn2sYHoJZppypNzeXrinQUYJmCow86NfJwQ2dRt55dJjZ4SKULw",
  "key24": "4v6VfS3bNX2KmYKnWK4BzemMegsJVGU4rwczy8jDNk5xnDjA9jV6TwH7D85Vu9QpXuyxHTPsWhHfhgappRXi2hNx",
  "key25": "2vcCCM194LAMk7dpbqEbDUpXiHkCJrRauvtNzmcMd9gPjhoZAPD1RvH15War2V9UaZ2BpqH1CKTtXfo9KdWTzUBS",
  "key26": "245AtN4UbDi5oNQppkaVFZg92Y8vWpWTt3qZzPYeM8uFtJEHgP3MTNvRbwWU4eSGr9cRtFtqfzGkR1f32rQnmDAy",
  "key27": "gru2U8j3P8e9dsrcBveecQ45Dg2oPYLhammKtaerL7A8S3N6Jtv5cbuXxrWHRDqCwNZpsB3ffxj3zLk22e7cqGg",
  "key28": "3dCJixiqzfx4nyu4dFekwJFQwZNzq1gBb68N7zBx5vg7Ezbh91hUkHub8Ka1BvSbh4itgSA7pDbxtYkQqyTLcryw",
  "key29": "5Du9PsFqDjAjPtFy69qvizYZYtoYEHw6mmC6xaBppNiWHJDZ4Lg3E2NESaXMt6DuuhFXdNkLsGw8VWZTctY4653n",
  "key30": "3KdJR8c9uz9DJLaPRjoV2fb2rCxFZ4tXhAneGBKFCHMDyE3WiN87zGrWXg13px4HDA4J5PakZdXpCsy9UHnCgQZL",
  "key31": "4SgxANP4W4jNBCGY91rizd9u9TUdwyo8kttV8ChMk4EgHByWwmA3rQDVw3ANhdRPkjFnrx6HC217rESRhz5vDAj7"
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
