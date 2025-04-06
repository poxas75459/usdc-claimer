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
    "j3sAxdrXt9n8LrhuuSEy1U8ZxLZGa5oNCcHRmHY5ftJEHLXrXrU936XXaVQ6pdaitKg7YMqF7AkEdQdMdYZxyQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QLSGctr2pKGo5krVXa2rP1y5jxH7NPLDYWPJxn7khjNArNsfhm4yWrGwWvPn7GsYT3QcKCGJtFWnvoMQnGQcYQ",
  "key1": "2SUFbyMoToeoZggEv24vTu5mFWapGR8yMYaBmJDe3A7mFnxYwDzeP73N3my7pNPc1Reyh7VpdhsuY9QSBCckZ2qd",
  "key2": "44M5aJTj2rcxJ91YTJUfMw1YtahrjSBm1PFGmeBEtd4PyzLFkjkVAbb2E4X4x3WbGUBJwUEf5z4Bw6TBeahGiGt3",
  "key3": "5u6ixRFAGxkf645tRwYv6B7KjWQQQCxRGh2Hf5cMG5u7wGx2Z4CDxszkhdaeqrjx3zwfSFND6utaxqs4K7dWPsoH",
  "key4": "24Vg2EpUCr4ch78JA6wMzvosPbNEeg3GkGRcaZQpt3PGdVtUqh9WcHezCXrVMg7FL7dsn9jLfpFygB4XnMea36F5",
  "key5": "2GCyUgiWA5UTJWLTkjcFsVqgTX6JSsQkvt46WPmcgaKV9SqJJ8UtQNNyf8Po26Uxpyjh9pcveVXrPfTKVNVt7g71",
  "key6": "5oEjFfnS4YXjYVHTeMynh7iHD81kMCkzFBvm1N2qfVAiz44CGxD6DMWU7kGH2Q66WJetvAsnCEm3teJwezmgrFTc",
  "key7": "428VCDLqFVGdjmHnC4y1Lko9mwBUGq9PvcsWHXvCbn9f5ZGh4aa2suav9RrdFG6bxoBvBCQHMHaVnmaDGChKWBA7",
  "key8": "5tssjwqgPRh68orhBunDNNe3v5JmRksiDTCqPduzsExNjRQ2Aw79VPiDTGRjL27BrYRdnuAxCs6jdjTXYC32y37p",
  "key9": "3GxSTK1BVCHLVrGbokfY9EFex47JBJ5QeBfd5Jrq1nQy5L9dVJmLD9PVVMAycocXqS5y4x6dHT3eWvDcGnYLZUjd",
  "key10": "2YbYy3wxVTbQQ3T6Mw1qfGWE3tzToDucrrdTR7VXopjMHDgSAkXSiHWovovEaZYuN3efoY6D6S2J8VTMvq1Dfpt8",
  "key11": "5QkgdxJrG5FLM38R36ATEYHS6GCbd5iShGBDJ8G5dqkntrgYgwnzqjpQEjS1uFc22EYNav9H6FP7EDFcNG1DDxc3",
  "key12": "3AFq8F2zyoXzELKJAqfupEDEpT1ARUGmjukeRa69PxMGVd9iaDYZaMhdi7yhBVxJanNtoSg6z8yzPgCWRXNYGFp3",
  "key13": "bYKMpVabbnKxBiK98V9gviFSfnMkDZCGeDXEiaPd6wTkfBQtLbSTBc6N6zF8u3xvtNcLYYkesG6S7zj7zvvfUpF",
  "key14": "2qukSXzDCEUfD77h2oGJHxuTjKyMrcincZy2Pt8FcQLXwgPcpshuaftnwhLpWcBnjDbUauu3joGFoxCRazWEpYUQ",
  "key15": "2vcAVYB9oLEMJJu7h9rSPtQcnS2YxRn6TyRiWMRsFmfR2HdY2bNvoiiCSbUpYpFfSEXWAf1bAPMheyp9xUtqtWYf",
  "key16": "5PuB9U1w5aRUbp6J4Bhq6iXobjfamAePqch7LVGa5pQzmmw23qGUvSXSaBSkVciHXkjjJJJewniCpzH6G9Ezy4Wh",
  "key17": "552NbWZzjtBs8MHm35w4LjSTaBV8cAhgUCx2SLtqEkM7jdGeiymg2fAL4mvT1HURQgZoH4Ci8NJnF4T6fpg65nzP",
  "key18": "42qSkA1mvw6AQRSiKSL71KHjw1Ni2TJbMkNGeZX6tWGXyRXvKh8G9cweRpFDmLhWdWZjbbYAdFXQhq9ozfJyvGiU",
  "key19": "YiHGCwaVBveuZv3H2v5KfAJWu4nYLVcfKLak4AozuQKm2F1tWiAmC4azULxa1RdHH55LkdSTns5rHP5EBpTta13",
  "key20": "27B8QHWAsFPmMCARUGNxHD9vsiF4xDNhHLHTc5dj1BNowtJ63s2fNSthxQTidNNnfMXNhsLAfjmkrz9iLC7TxdXP",
  "key21": "xWZhMwyfowSkb5M9FxhUX8ecYnAW5Nkynyxn1EooDJyp8hT222sy4KY5ghGFcU27WeiQwkrANiABDEebKY6P5Yh",
  "key22": "64mhpTxMcAJdWuGgfow6faj9wHfBxHmhoT9vu3zdgrXh89izJvFngzrUX8JrviumRqqwc4HPo4LXFWRDtB9aNDFj",
  "key23": "4VQjKCByb8HZYmoJu3JrFMrDAK8PzpXNx7y2ohLpqTFjnfP4GrbDBvbmvSqULgzNuuJ8AgeMXRfyb8Ve8W34B37w",
  "key24": "2kzE2PEmD9GvDHwjDfZueNszj4URkW15imzaqeXQjzY5aBN39WBA33McMhaKRkmAhNjFphMB5fWfeS4nq9PQ6QWV",
  "key25": "3U98G7vruz1cwro3sFMxi7MMS8igHZuRBgJqJSm5sgt8Ew9S6mbS4tAA5wYTFR5BhCxqLKYz4hBYm1au22Znx9Lo",
  "key26": "5cfvhYurkqAFeRpe4JkWUmjV6zFLSayRSa7uisWD1pPMbnbx9VtZyHDyGjD8hUWc9uUpcM6TUo4g6eyEyCb1mvSm"
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
