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
    "24irGRFQpSwCwp8VPHqaTDqPg9qfRsu28d8aFvn4gHo8248n9PrNgitybvDZtVNpUQZgxNdWtbMzi33XcuvpbRUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRgsWtJ92Px3ZPqC29vi9Nx45hxG46B2wUfwn173VKFMvfVxzZhxYpcywEN72yaQcGbM93L8tZzvFdzXctH7s8Z",
  "key1": "iiTRVMnTZ5Yb29r883XaP8UNygqxgAwVph9b5QyMuDukGK5vaXPpiFyk3UsSfzNqFVGW43mUdzWmAT3EfYt1hLT",
  "key2": "2xTnEyKk8LQASuLWxansF2BkRv6UH71AuS6e1pteG5b1aesAEytpP6NCHKKsRTfiVuveoUFcjrpgqxGGdARzzY5W",
  "key3": "3uNdW4rpX6x3kPVcQsE5HAA6NAAPkT6u7AtTjbofRGUZU6K9JwhzZCcmWCMMJVToUBhbYjQGnPAMsL6wZLJg7k2a",
  "key4": "rg5nsBAKynHf7k7QqpfMzWyqRSbzZPMhiYQPkCVtaJYDhWkxdAsP7oYVndtV6c3RRz1C6Bgpg48qDpVcLBip4vw",
  "key5": "3ZUHrqb5tY1N3aA3rzXSfAdj2XDz1PZmESorTKvmUg96e2fnAqAeq15fXaqteggeFDe7VnBUeaWHCTPisfK8Vd5M",
  "key6": "3GeApDzQuMRGB7KToqChj7BuZ6Lrr8yLQA7hYQsP6UvTNuDfQimXYQ7rEtx6ggn1r1qtGgcs7fK7ynDw3ZENTx98",
  "key7": "3k2PWS7epjdL4MRjwNvunkiimfbsoz6kUGRqjPWQ9D4kNUm2QuDBftwH7fHUh9A9EWZG79Ze3sbRFNZNYFDkA7Y5",
  "key8": "3ZjR8e9PBD9SjaDLVju4hk8uQC3fsFQqc8DcbUghumy9sxUCy8yWKjWEc2azLZAZPWoVYWb5utbYEqqBrdWWPbwQ",
  "key9": "4BJPLrp4RRoToss2LrCigKgUwqeq8uvFiVZm1fvYbaz3KHQ8Q4CNM2GDYE3sGaBhVyQZhsu2SUDQQWVhHf5vLwGn",
  "key10": "2weteg3Z95sZtNGRbseMQTCspPEViqpawujNDvNRuPd6Fqvuy5W7q3uBg1shS2gxAWdmv7yJEKQ3S4Jq7Q9PHxGd",
  "key11": "4DtLTpox5TRPUFXGsWKwWeeVKW97jSHLKivsdXTmmZvnqH4Q7EXtKjWhpK7mcvfnbASRTNWYSSQsASVgQ9vKUVzp",
  "key12": "2Gm8PVGDgtrEyFBbq6hX1e25F5QsE6q8hd18PJZrvfmd9LYANhJahAdiGYcs4WfeZnsj1aouiuJZ3sR5eGbwBHeg",
  "key13": "3CVYKhmsmpkFKWkd2hU5cq57ND4dCBf32UkRdHNmAQUzP5sxVPZ9Vb5q9P9tTjRKa3DKjWhXoMSizFMbwcWo3gp5",
  "key14": "5Ymem3sPhtsxAgbP8YVggENbTk8N8udoW3YiWe4CPasWW3r3G43QuLPLPgdJKMM26RJQ49j9qotuzyPWGCKYQhmg",
  "key15": "CRtKviFdqWPrU3B9qWoWSXTZxP6N1BZe5ezQgtvn4B2a2vd3AGSgk6r2CTGexdjikhV6i4y2mQqMUYFWzs3y8BW",
  "key16": "5rP58bFYYgh5jo6cx8yZmcvH8C3j8kfRssDHMTvLsPUutTcnWw9BtSM1iiLf8gYPnr4tdvJYbnVNmym2MTCqNqPT",
  "key17": "4x9kWcmf4PhwwXUXxoEZdgMcqAme5wr7VeEwe7BRhFoWQijS7bTVUdUXsuSeWkH84JV7VwsYYo3Eh1VN3732VqgZ",
  "key18": "2gbJCsQsNR37m5dKWpXWh3VQzqtNS54fLGswRAkZqmMnMkkbj38ZtbRxHqaeGiTSVnP362TD6CFZkFxna2txU2q2",
  "key19": "2NJ9X75dEmA3CWTX5W99jUqGt3VVcYT6hF5uScw3Ps6DsKfDacNeinv5GfFvmevWq3KWV3UPc3uud5nTxKpp9fud",
  "key20": "5LmJsPWoCW3efU4XXnXp7jUVd9wDdmmcyFeUEvMgrnS1JnAVHm2tVn9HLrVTCFxfAzZnWa7Gmb2fS9hBrNYt8aaK",
  "key21": "3qmjQypFCFbehrwwdWBWHs4qhaYfPxBdvL3vddek1tun6LwuRRpFn3FodpQ98NKj1eKUrjZ1TJgoX2T3vcfmqNBy",
  "key22": "5JTQyH7Lbw7yWE6FtUa6KFWX9EyBePSHQXRPf2DDGWZQF7UvpKPxfNZC2jUsvkfLYV3SQm6tbiXKtxUqfrkG9Vki",
  "key23": "4kK1mhyzowQmFiHG45FZd8oUu92sqSzVQavGGKAHBsZDpPLxVfqFDsV3P28LNddFwCY6PHRyvFuvckWYY411UXXD",
  "key24": "3BjHsoSREHyjxv9vdEpyxsyMwRtLnn9tuNgk9Z4L6yEJrwyhLKu9hysadV8fqAr9P4ugn7vTMB7oEoM2XkLDVSb5"
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
