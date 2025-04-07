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
    "4JBNkdiLDCbkmiwmU5Vnim9RACyfVmjYBZtmVSR4TekQRNYQqZP9Ln3yVxUA6YysnXEpuWnJAdbQ3XdBELL6X1MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kv6otpNvCh9MnscBzmMqwtgsTBeXuAa3AQfzieHxnxP5Vs4NEAM8cYwmbtbzK2QQS4FMpGW3caC8z94JbttHWtE",
  "key1": "2t7hAp9RJk7jrAzw52jAw5Wi4kABGAmdHFs4Yjs4GHvky3L3FrF9cugYxZzpyQqKCKZz9cyWLfqfxp193QcMHhuP",
  "key2": "4fD1WviqLhzqZkQ6oub8qnepCyamFrS6oZj7e8h2iQYidD87CvFv54CkyyVYacLjPFqeVB2JziG33AbLUDkww2s9",
  "key3": "3SVxG8Vw8r7woHkRLqMvXiSR4VhMCYfhHqgAF8ZPGoMNafp1rmZYoVBhZLqA2nHfrzM3NpVoWz8R78ySo2pdyH9Q",
  "key4": "W9NmDCgy68LVgZidXrt5bsbTw95gMC5bM2rD1GthiBneakJ6oBGBg6SuLFavUpDFACAicf9Dw85UJDUuN3V9e4y",
  "key5": "7Sv5MjXmNtBk9rVKfA7QeSkxs6tQsMDLbEgCNviyJ5jj2PTSuHdgTrG45VjHjf8a98NitEviDtbfhoGbqJUnQn3",
  "key6": "2PdBVLVeE1dtdoDEgxrNwnP2MuMDQDuEBsyT86T4M9JmEykUKHf47c9H13T8xWFuHtvLQYCq6qkKjbXmNitTuPxn",
  "key7": "2GXawipNHyaYFWV19bboicMUPXVTHq3zimkzDXxayUraZn8N6xW9KANv44WzRtHXjYvMbEYacny4nw3jCqC4kUAH",
  "key8": "3r3L6rwHWvrnntUe9augucFeZ1eKuHUbJuNQx1upuX76ARguJ5wksrZoFHnPH2evMaa4FGCxkjyPtjoYsAqCqqcp",
  "key9": "2m38grDz3dBXALM6NbW8KokYWRyem2RgTbrGLWReaZNkDaEKGXzM5gPXceonttvqQFkKTiEeEF3Ra7hUF6AkHQPn",
  "key10": "5dNXzf7GMAymZCqiWk6RySTzLzJ961ApqWz61PsiNND98thwmCXdp4iLENgXAkA7AfbJkYNNnrysm2Q17MMX62t2",
  "key11": "5JKL4p9gbwXq8pZKE1JJ5paYjqFDhvompz84XGJwvS17ENXifq9H5SnQh9RHbxkaBSmSn3YBUpg8htfS46g5VEjp",
  "key12": "5pj6mNcwsGhS79UygyJYdZNgaKxW3Fr95oUfke9ShviWYfe4n6rMq9ZwbWvDTjtvxQ4cgA2Je4neF4PfXJMdeoyJ",
  "key13": "3UccTCQM6Lepk7LcxN6k3o46qC6skpzXdUGn6XH85eo6Bzyj6UnLG7PYvfjVGe4aPPS4TxWMBNhcLGSQRuEbTLsq",
  "key14": "3pFmMu1gqDm5ikEzQcPFFM1BVmBYVixEi2akjbaFkRDMqkfFpkXuNW57e5asaSVaxirVVFdi69oCi5mwo8xGXsFQ",
  "key15": "5j3DhQp1FUs6YA87wiqQqp2FWZxWL4xVHMvg8B17E3UTH2jj9bfSD6YpcKcLgTvyMHtA297yDmk9pqaYpoTn44jD",
  "key16": "2WMbXoNPbmtyK4Rmwod53XyeNbnDraF6CQ8maHBqkJBcGCG6H7xjwrJo7CgZSFUfJCcV4q6eTw1eyhFiMiBr7c8E",
  "key17": "3Q8zWJ93QSfdSUM6pzCEr7GhmxfCXxErfDrXv4KmPrqJGtVTrsNgfmsQD4TaSgT61eF4hNex2vof78LtcbGDD9ZS",
  "key18": "3sdhLuv7xdkZhYdW4CbWNMnAL37kDznaMFxK28w1GwW9ukdsAtQMn4pnRRbKgCLbVGcnmE3PHzeg4UmgCkJhoxXJ",
  "key19": "5RJSPe3wkYPF2q7C5zAyqw7bUS9x3m6qhGTtydmoHNDMmk7e2EW9Ld1RFZabTHkst4vf59f9UfM7kRJQwpzSBB8t",
  "key20": "5cLHyL41n7X9SjQdTGBA2dMeXmW2kct4ktHYHfdNMPZWG3dKtY3c55ephnjn58brUzEc4TECgwe8cHSVQiDMUnJm",
  "key21": "3SHk2U8cvbXizpKU82dWhZymvP7jJu5tacUyNoLfEe2u9gvgA5dzHhjbRV5YKd6TF5ucZyxGE6Ux7tcyAmwpFcL5",
  "key22": "4ZWQRaeajjUKpY7ksPJ78seoNC1KJiA99Enb4tk7oiL9No4KwArwPtR7QDVdhKtjwQzLqndvXAiusq8R7LM3jBxK",
  "key23": "5oW2jR2BjWhivAgSFHMKxKHxskEGa7sjJgKKu2qNtxKwbSV4yRGFAXKD5QHpRoUeVAXukGYeETLtdNxJQhWCXgp9",
  "key24": "32myF9gj5ww9KyQnfpkna39PRuhGYxvKqMmrDf4iYAS4rUvwSbE6TdUHTjQxXz3xR29iUT1THWznmAdsBb22w8h6",
  "key25": "4Qa78jQ6f5ThC5NJRdEfFycTjzZaeDcxUvvg3TPswYFpuF4ojNXZeyTD9neJp6vpm43A5D3trsjM8RPbr9LgU71y",
  "key26": "2r36nrjE7Vio6qJdrHusV2C29XcSoPmSE4e2fpuoFdfa8HLLP5Hq5mCaYCnyba1qd4aSCT86UeaPfWZjgtazYynp",
  "key27": "3j3gRPh3Bu1BKvUygu7Vs4ZQrwfujQTGtELfFBZNfJz1cg8cScsC2qUC7BbaRazje8uTKMp4oQZeoJXAvJGoCyLY",
  "key28": "5fpGRw5VNYjnXpQCwuEFeWJXkY3CdDa3ASLFyh9g5KPKj1QT6EZaHcY2YrrBpZ9He9SK9664RYYuouQdr94nfDp8",
  "key29": "3CAQGc5RrPwPUddNqxbraP2ntxGtxaiCfei7ZJecrWkPd6A4THMVWNf8Jghg4BYncFpJrcVsucCmnvtGXoth1UCE",
  "key30": "FH6wb7GQHuQHNpjqHxopXZQbeBcExUnXZZtk73KE64xQn6vQQz8zm54y3yvvsxfWjWNeLFd9LNg1wS6R2n5CYs5",
  "key31": "2y8XRs6L3K6YJ7cy1hMihgPYQVef3MA66VdZAj7GvHghwYLbfGQfUkZ7a41oL1NUeMWQab48XVeHnXfcLKxCanvc",
  "key32": "Pz9VHRwC1JcNqYw1tMeq6XUGW1y78ehYH1UhFpaeVqZ9E3cnuDGWVwYSd8vq1GNuVgzsDzRgpxtLnQ2du9f47XD"
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
