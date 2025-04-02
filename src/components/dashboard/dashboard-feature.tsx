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
    "4iECggwt2bWt4cGv6nbxgebtxZt2s7XKqwvmQfyVBQbQwnng3KxxHyrmECvY5Yx4ZJsJMeWtx2pvsEwLrK6Fq69B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYNqPRZzr7Z5cFK7uLj2uRfK2S3nRQxwNw8iPvwwjkTne1wePHGwXdjjxBiPrmHuwP2JJb9T1Zef2br27SVVoGd",
  "key1": "sqhZYRsiZ4UkXf8tk64RqtMxpdDtR9kmjkK6U2R5SkFBtxRreLZ5ZMibrzaSnXw5BapBW1bsQEokUBwhbPDLZSx",
  "key2": "2YxUKDN5ShFVbv7EbdiQVWoW8oNW5yufpwznDFbq21YCx6k8gTLWThkkynPgKdVbWZ8ZrQZo2quU6i7m1zgBhssE",
  "key3": "4iqDYT9Jf3p4enHALjfbpGfaNQ3DdMZdYX9LfoGzksw6EBu53HejsWmpiB81T8vLeEJSxCmteZMgEVNfNoduVRTg",
  "key4": "5WFRVyUBQgf6kUS26sTbxFKyvXya7RtgANpWGTySg6u8wHzND92L8DCiAHtxT8VGPnFHkqEe6WmiiymZ8HCC1oSd",
  "key5": "4CSZVEM4svfxMQoX5y1XV7MF3z3PkDjGijvNx5B5AtmVLvz3RiZtGFg6URvHnrPSJZthpxjZukT7MM5oQdetRrpk",
  "key6": "2nKh8pHYkgzaadCGfnX1CmwP4xGxPVKNGxnm9ouragKDq9oMdS8Yi1trZ6FXEqYRqVRMYQej3FHewpjjc87hpGFG",
  "key7": "2QrcjXy4jDz796TQKpKLXHr2q8RHZgh9CXmJszdDTNCFxgaESs5o79Lp7wUuNGffaKYVofiYevoNfnJ2YikErjej",
  "key8": "4GrSPL6QDxLQ4MECVXXGNC6eqaDvpv2U313vtoDBZVT3Mw9c5Xnqnc8MJF9LYuqTyWCxyEdCJfvdQg5RzGCQwSCY",
  "key9": "4rEWPqUAAFiSL8j5EU3YZyYzpK5szDGbZzc5NtagLvTCSkgJ6hCJ5KvpGwJpF7maTUgM6ZUNgjpsiAAdiSWEX2V6",
  "key10": "4UZJuh3rExJp4VVjoFFSFDnfgANdnSM8mCUNB2pnpGffnNaafFkqmAsNNYJJ3q4kE1wJ4k8Vu2y3U1sAYVXE6kaL",
  "key11": "WPUB8Pq6tkTgZHk79d32kV9hhoQqh1yx3EkqJArfwVpE6teQXzeq3ZbDWs9im2QvRtLUMfT34BapsNxbqWQMMCC",
  "key12": "i76WrJ1wki9NiMj3JZhgux8vwvu4ivWkiKLH584Nti2Xxgg54QtriemxZTE6tnLoVRiyS1wNsHmmXDFQNQnkJbT",
  "key13": "4Ma5dpEtewNYPT86MA3DP61RvEcXaqFsH1rw5A5Cb8FCGLNooXKDz2wDt9qajTqaFu2dXGhZtK5kg8ar7QaDCkU6",
  "key14": "36PWpH3umdn54LkvTbkWfTLf72eHxqhxjPkFTPP4CMYgP95y6ToK732QPEjhMELhsYKrrw9zTTHQanLQNZht44Zd",
  "key15": "5knNRqEECWt6h9rj5fxRuerjDZuvv1U9yV1vU35TSBFXDNFbP13w8LYQqRJgjXeSVSmuMbUc4nuFL69WN8yNYFyE",
  "key16": "5PriVQ3e7c9VfuV6xCRfWBZBjuayv1CADjyTQXR8686gX91MoNvXkhudZKAmxnVFFjKQ8dbtrpqkVaAzfCMR4b6U",
  "key17": "7eYSMWf2MDyNHC9sxeiRKbyiUgiT6T5r4Yw19JStGYnRrpsCPkMdqBQgbStawmutNxMBfVkhdeEMULb5mPBVNaE",
  "key18": "3x36baGVw9WT5cHLjgeoUnGhGJw5vwHKKDAqm9PTFNYezfWVrU5T7wQJXx8yN52eKg7hVcLRkUoEXEwpTvDjhLse",
  "key19": "24yjPyfmq92FHfUH5wM8gcCoWNbWNMhGb7WK6rNT6E3anJkTUrx5q6HheHma2uG522WY6dH4hWbwzcwDNMSgvp5Z",
  "key20": "v6gkQbCofmboRaUDiaNpr6FKRWkcMmdsGMESLWQUrFXPDSLRz9BFBBpPx72TX8UNnyvXaQzq2Vajr5S4d1kYmoa",
  "key21": "3i9Qm7uHVs7AbmAkKbznvv24Gh6emb8bqVVgqa2hSLSi7LwsFNc81svmNSMxpNpi8ukfyUavNr2R5zF1x8iHk1LY",
  "key22": "3V28ZqhHB1Bc3h1saNN5P4fKMLF4RHi2jEHH422s7JVjMQDJEScxKZ44FwbryYHL4GSFhRW8DNLKG9Z29KWAbCsq",
  "key23": "26tgExNtNDWcoDYvrnvR9G4gRt1p4uvFVSXizDn1wtyVBs8xK2H2YQ9qCpL8rimyuQdEZoNEcMLsQgwuj2hv3HcB",
  "key24": "51MfvMxASueVNBy9rCdCT7qsqcS8H3XAsrzqXM9YK1K3ungBgDHZ16GLn4xFXoZrwrY6oA4dNcpBWzb7joEHYbhy",
  "key25": "3vXi84MmqdxVT6GBjxNho4oD4BM5DCFzHe8d8ockyKrNFBYcaQmDLaBQKaSFwfbMvd2jnCta2xpZB1S8CSKUt3HK",
  "key26": "4TAcvV6exvDLBjQ9TcUKngVZee4gqeQXaGLAYeHNhWH9VhgSb5bxNh6VmHd7Ms8keqMjov5dw6dRRnnTx1Ay8ru9",
  "key27": "4BVWxJihkst462pJWB6wZECZhr9euHiWnhZfCCWXkpGy4SCpoqzrRG91xm6iJ3EyM2qJ3jkWe7Wqho3qd8HcE4yc",
  "key28": "4wDwS7iYzaWiHZosiR4PWTvmksagfrMNrcQAovDb1ooC4e8HfY2hZhirWH4xesU77krjVrUFoYb388MHnBsVFiYy"
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
