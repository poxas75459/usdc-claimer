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
    "5oBvkAfZ359Ck5t3aoCtJ4UvMAuvp2ZqHgca2w7VDmEnrcVVuWyjxaEL4jsLGtxbreEyVrWEu4ByaJoLwgEch7vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bigZEFBCCr4aRLwUVU7AJ1SfvGPLdC6onYkx9VQfSNoNcvoR3pgAqaTnRj3T2f5zAUYxfST4ccebzaBVeBoM9xT",
  "key1": "5SQGCC6DWoZKXRJmUEEYNWXFbvGB58PiqYtZBJEEZ6maZY2rm3cnUXC3Qhx3MU78ZLqLbMoqemyUWJUugZBvUjnj",
  "key2": "R4sXdiJSp76QCWrrJcVgBsfGLKFbKkbQkHybqhXMgZi1NXqN2LUAfvRBSN2rKEJwdAm9vMt82Mso8awrCfiA7tv",
  "key3": "2irQ2g3tLW1Zh4gqET6PPymHB8QpWayV1Jbh3memYQe2fQp47KjGwo54Y35DkiCBmyBC7gPTzziYP9gGHNVBdq1K",
  "key4": "5M3BKKt3GmrXfsAz5p2boaVnLtKAeVyLgRUnGymgKqinn1mJEX7pyDkFak5zNE7xbhvqtYrvP9FRgohnTUYBEzmq",
  "key5": "14Q8mRiM3prLVRszPSEERuBUTPqf5QNpWUHwPpkB4WxnXXY29quzLLcNncTVvTPSrLEsEKLM5251kVHvXbzxNL6",
  "key6": "5bNMiySFfLQ72Y7fD7bsnaZ5ydydjcEHjA4pUZFDARDSBAguS1LnP3ZcjBMgWESTuhT7REAoe1TM22fHqqgLXvsk",
  "key7": "4MrJjaJSuFWBMTfrwBMcgurYhJNdPtwAdop9Hh39ZnLrimieVRRzxrHqUkHD9VpetA85XWE4HWU4LM9t8uDcwK6Q",
  "key8": "3UCdcaMGwhMQ7XgwYbkP4pcNjYWbyPiMDvjwyuk15oSjq9NV39SMcfoPmGoQX6oYWs2bbz3aQyUCuE1LfyMEjmiU",
  "key9": "8rKiFWgoXUWA6G5SZQq6m7pHbq24b9sKEg5WGRmfiodCSzmSMzQWcLfYeHpMFwcbz4RS3hvYRdgtdKdvBBneVJp",
  "key10": "3Ft9FGtgqPtk4sW6fRnywQCzPUBPKMbdGGcZmXmyz7oKvTGgWTfL4cHGoVHoA4zkj5jPz6EMQ4hg24RfAFWF6BwE",
  "key11": "2NgQsWCUutL3CafvbUEK8W8hVxAf9kxTCrPCq18RjDed1paCHicAWuVCLyTqqH5SJYsS1KanEipzqpdmP2M7D3UW",
  "key12": "4SMmFer9VA7vTK3Pgf7ax85MbfiSVi8JBi95SeLeRnk7yV5mHUMpUrgJUu5ZMgb9itkXnNKxjAqhVrXnLUBXHZ9Q",
  "key13": "m1455DJvzv6RmjYgzvRQB1vsYWCQnNy6C54kmTL2Sd6ZqoytqNgjfP298rkFS4EjdZeYvQ4Us1T3uVRzHBpb7tE",
  "key14": "3pRd2pJ2ZdgFdU6oMcgcjJuFBb2UJrdkamQgmqaBvk8tdwNqaeT7Lh876DWKKQExBHFSG1fw6X5BtrZuD8ZYgqUC",
  "key15": "3yttyVrXrz3dzHzPD68XqtNsAPrgKVf6kB2MvoSnq5FqwxfWuRGGtwa3zhZp1EK1R2AsovcsemiFxHR4ciUAnScS",
  "key16": "4Dj1t3U8Fd2TajX5svmk72a9vwKAfgNmSF6KY5JnePG5Sav6NpXuPnjWDcLn7wpjhdwfwLwje1vdZKgvfmD63zQu",
  "key17": "mxzWJFvuv8yCgMeLK6xjQqw13zAxpxUp7YySEBvhsA9bhxRcdLbN59rnNJd2PbGHb73CsWjZDcZeXqmNSmeC2Gk",
  "key18": "CFdM3VgZrTX4e1Sdk7Xspa72WxmR9TezEfzUQQEjrpNnqmCFRt9CJASpWGubMNT4ZGHVtgnQ4bbjAfpXLjXkL28",
  "key19": "3zJKDGZcGrYkzwqvatk8LNybck7t1eA3oPQzE6crDAgmHGqQ6hwyTuMrhbMCNi8wAGpWFFA22PTKQFAdcmvfBZSQ",
  "key20": "2oGodRQrPCmRDoFRghTNDGSwQhYoAhBTHxsWkgcT4d58Wmsa53dqbtqjehHuu3UDHYCAruG27shkwmSKD5q8Z6C3",
  "key21": "EvMwL9YmC1ZqZRdbx7BJWAPmswtyVZ6cA2FNxJ4YrBQnn8KYzGJWk9vRF3xL6q93FaXWtVYNk1b7WYadPTP2UrT",
  "key22": "3uwY3iNqryxRCXNpCVT8QzFGTCuRVZF6En4BDFqQ2339jbmAinspJjgVSSB4itC5pUNb45DH3A9ybP9VD5XLCjJh",
  "key23": "5BmJLQR7u1F7MkJ55bsxcLveJwrejjJz3eJ4rMYLe6WxCiAf8FBsVFdFaSJDNVrymnkF5S6QyZY5ksqnp76ntjD6",
  "key24": "Q8Fx8u26QwjKDyxrkcKG2PoYRP8Lmg3h1kDNFR2S7sEW5EvCrSkAqdrw6byAK7rDdCjwUoUxXZpKrRvBcNVq93X",
  "key25": "4nkTvYVr3cuT8psVZXorV9uynAGQLGukGKN5qYTKQggtSSe622gSzbVjBEU6xkmhwGMU8uJrkJdzFUuAJfbXbwQj",
  "key26": "4LN1MSZngzbrn5XasCKUtCFjLVGj6kLuiPxziEcHdWdC1MhBB4vZUykvkL6nZaCe9zb54J79FtBgaHoGFxpqVgx7",
  "key27": "5H5q4yLhFgYxtFgpTiLBnoo4Ade2RLoMZS1e9hWMvhVAvaD8uQA5mJYwR2M9MwpupRnKFFDDrdvfRbSRLoffwNtw",
  "key28": "3dpJVQYDZz2C3LqY9LZHVmy1bMqcr5mh6GG5H2NZ7p95skPAWdRTJ7dHVKmJZXsAcdokBZPt5c2BjnRrL2qhKn2w"
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
