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
    "4w3AbZStLM2kutvTwJcZGsWQaVZ8mAH3Xa72Xr8XWntPs289TEUvsoQ6psbaHvMaayeaYUaSovwayNkuwpR2Wpqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfkmAebhMVxRiNshcLH3aMwUsZ62G2gjL9w66YwadqaQKyeqsegDGy1p7W1Qa6bhecvwik7dYPeQo2ZaFY4M1dJ",
  "key1": "5ifKNQyhnCtzN2rTkuERCr4QQgj7kGfrfm1fWiaZzytLKjt7CcWhydxTtuiDoKyGW7dKPKgLsL5qdpbHojJpzhT4",
  "key2": "2nXbnA5iDALzBwJSq4GQZo5tYHUgSywbwK9RfhJMVrT78MqYAYXGEuEUAXZtzdRU9u63SfWV25aakt8sKEPZSnTB",
  "key3": "4E1RXHBsZz7LDb1rdu7rWiM9kHJZPTRb5rtbYvTvoXMW5R3bS4AuSdsb6SfiEfH4fZb1XraRzd4bDdAwbCDZTgN1",
  "key4": "39XzbWTPcMx2GhVwcoMj385brX6hApu9F91SaqRtxDxV1gqWg8d4uYz2tK5anqSXx6973MBwcMP4UQdpPf4b1PyX",
  "key5": "3mvcQJLq1nFh71ZL9uzBQPefrBFL68oDH1g7WAm68tSBBKY3hJhxpAhzfZAZcYkwgeCQT7ybTfJXgzvrPAufq3jv",
  "key6": "5hSQJFWwBhbQxAsj5RGwv8P7vg521TRzb4VwrtT3GXfQXzJ5aqVaSciKT4phc7m7ofZSo2aPELJPW7psNeAk5ssF",
  "key7": "62zVNeEnQt4s2kaGfstUZGpnLDVWZy86293v69V6qZ2GMn7pYsAgh4VeMrzLSNpVHRVXnS3YSejXC2WJaAXHDuwa",
  "key8": "3AeTogGCJCp1Gh26aYDX6az9pbLpGfwmR8rZ7wzeQVVNHPUMobcAa89Mu1usnT5dpdsTN5pgrui4asoj33kQes89",
  "key9": "2oLmNaCibY3rVwWEVRiwNdifFGyJ6ENv8zYRyxBy7UyXTgGiyJSkHVbXVXzdcfDjGitg5mxsnAzWsTQ8KYtdKFL8",
  "key10": "4Z9xnybF6apeJQaprbAToDX5wNUwuqZszRTDBL1CpDHDGvJGAryZDDME7WyGZK6JHL6pumyosCDGtQZQLWjSsVS",
  "key11": "3uuLviGF42L9rUkEzoSh5z5SqXaMxFffpqM3YdegREqX94Mv5QJ7c4iJw9h1LhQ4mnGdMt6TEgR7JdU5yVeFyAdG",
  "key12": "rzwhxUTmcJmkf4Ht8Mf5MFd8xQtgo3QXZY1HzBNUroQNJhq9BQkBjEVdE1T3TCiyQeBfJcGY8hBjXS8WANDiV5h",
  "key13": "41MXFZDqZSYbzafDXpuKRxnh2sraQS5TwdNJU2R5VDEkmasQPAWZQUAF4n2wfoUAkiai7wvALhuuyZ8NaGeZrGvN",
  "key14": "2y8m3NXhDZZfqYcA2qrkeya5NmHTBWErrLSPSGyngeVL49hQHFFYKnzS8BTpjw75Yfb8f2QrboKmAZHhVNG2G4CS",
  "key15": "dc8XN2JENf4iemTpFSaxrRJ6jpqFcVjxbb44FG625pV8yrw3jYnLA98BV8Q41EAFsauWrdpEPNNgfbXkTSKYhjz",
  "key16": "3AT1ueWDY48QdX1upaFcKCLFzzfUt4P4qGdrBtaa8f1fQw5tXrBSVA4KQdUVV9rUywhVutvVTsaQPCJFVKEMwhxu",
  "key17": "PhwMhb64j3k2Zy1atGe5dzMTTQ49dZaRL7MR3618ozMD2oLnpPq1YnnmESDEM1mmwomfA8VbBBVHxNJXLT9uLY1",
  "key18": "5A9iCvcnzKdL26bv9pwyYe6QEecWj9HwXZYQ3otxwek3VcNWfpYe63RV7oajSgeAUPBn7zawEz7wpFMpb6H6cN8D",
  "key19": "4frjFj9vwLaJ5HbZV8wuAPTBoTepHJwdnaHxT6GvLbzrLGor6EhinVtxE11DNMzyXSiLsumj2o8ZmTRQWBwPTD1R",
  "key20": "CbmDoVWoLLo6hTR3Xyc9TxUWhCfYfZTXV5PJaxhwuLN81btcYnW8Br56Q31oBPX9xgZ2AXGT6ZRDTeTepGVp3VJ",
  "key21": "2Z7XCG1u3KavkEo871fwRY9YZz4Kj9BCXi1HSiwDfKymKN8mBTHHmPy8z4LWXAhUc3ZrNakNEoMHnYc3S9oBRGBT",
  "key22": "5Tx2E6axkBewuBM7rvDKzuYV6XjXU5Y4yMhfgU3oEBJzNnobHo41Dioqd549Mqs81ed9zZkncwiByWfofYmLtUrZ",
  "key23": "2n7XsWYeGfV6TsZ4WLwnYmKFfatuJWRkJcLQC9ba6PdvuBWX4HCdr1jvJxrcCzBMvz1TY3QpLZNtZ4t2GgDYEFVa",
  "key24": "3BrCjt8UtTXxPSZcU53qMtawPKijSvQvKbprrPqTDsaMALNFSdRwphQhjGuQtnXDZnh2JPXjxEs2P49ZzvCYZmcd",
  "key25": "2rhmYvyT8CFpGAkuRh1pLZttxBjioEa3AdAE5N4BsJPzwLygsvosXLQLcfLUnGFjQhYFTtKmNdFWuShgE3cy8RLf"
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
