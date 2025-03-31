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
    "2g4AuDkEya71eaZ38TU3qH67GS9AXcCz7DbXspBYAVmub314SL7zwBLtfHRx5mxiG4T96GnBEcBYYhCo6jU4JkN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nt9Y9FxR5VuFfAX9iX6E9f7NWNxeaESUwmns4ELWnqtaj7ox7bAi87cEtTSa8ihyg3jA9L766Ue5Q5Jiv5VXbqL",
  "key1": "3L9DTg4SHmmdiHv7e2b6CvxHCyHU8zBVGaksMxtmwGFrYXBLX8f2nWY8W2jVC9qwR425jKdH88wzbWoFsuvoarME",
  "key2": "456LfYvjy8MdNP8Jc1DtvK6Dry43qXpk5VZdLoqVzEHCQDH1hG2nzqMoiwXnzzFv3iRAKimvzogr7ZozRUbkTmSx",
  "key3": "5kFfkjU811L2qPgF69fNJAN87saJzn57izXe4Dy4ynMKS8Su25X4tfbTSBLByA7utsFLggK7hKJ3cXjNSgqUegYs",
  "key4": "3SC8cVfBZ3SjqhSwZ14QvdjvdkJJHnEYzQd6sXfSUNG5k81Gh8xEayGycvmPUzdXbYGaZc8DAyQSnm8rVXW1Z4GD",
  "key5": "7pLuYuCEgeZF1pqw25Ep1ziwSxq4vweMvomahidPNzLGWVxw1o4ApTZaJ5Bf8xK6yMR1xhbSdnbJUskvKQ1CVcx",
  "key6": "5mnREgrSYS14jX7u1pi4X7XYT9e6psc4ox6E53JYZByJFziGYmqpYhAiqwvLp6B2tH4kMVMoruNym9E89C9bPyf2",
  "key7": "45dGGkSQuidsn33WFNcVghTGUyrYQdATV9fsK4dunMbRCv8ihnsawvfPEihg7jjNW2RMgLptKTCd7NSDdy5yB6q4",
  "key8": "5GeRxuTP8WRdAPVSfyNyG8ABcVzr9FvJrZZCESTv7jRxn99GzCuK6PB9QubZChXV7bPysgznhsdUTEa14Acq5vTp",
  "key9": "2WeQRRCwFsnGQdBC6nbCLWwxMeFyAsKKY35EbXX3hxEdoqxpg3cdDHVq5TrhLRwkSRgevbR5G3GBcWfop8bTfyZY",
  "key10": "3cwV7PHw6rYFoCUokYpd5daJagjcjzes9JwcXjYsr59iyUmAcyupTioapQ1ir8xuNDwK8cG2wbB3r4DoYjbfS1iT",
  "key11": "2LPb97v7vD8Gzcxj1P5B3UK3rhT2F2L5SAtdY8U9o8RqpgsYxA3uEAuvaLSg4n4VG7W1D62McAu6NDjTBgjHpGX6",
  "key12": "64GUKb3ig6HAy2QdmHDfHaiuJ6TPUkFVNosBqnY4HfjuPdy2WjXj1qpDiW2rqMTu3oRkQXukFqaQqHYwAcnm2UtW",
  "key13": "3neo2M33iNZJ9QUt7LxzHLpSqrahkaAV5jZV6z9ydG2E6d5t5MQdftPy2tQoXYuyhvwPuMxqcnRmjH2qniiU8cSF",
  "key14": "gWJARpDQA8WTKjw8CsTbJVL3QdwixXmg6EpvpTALWG2bNTVg91Fir1RDzCVbafGBwEX8wDDm75cqTWtiMPeEvTQ",
  "key15": "4zaKYxUBvmgzSAsUsQA8RFnaviP5ys3QvfyNdWNPbCRdvnC5S9vN7UujDBaG54aXXYHw7ygqB6sLpGHtNKYWDBFX",
  "key16": "3U3nyC4xK6gcG5LGvRajfDZHkqYTsDDatRyoK41XhqWCrDD9jC56M2mWUGbp1uhU5sLbdgfjus63qJaTPoWyYo89",
  "key17": "5EoNC3xPsWbLevn5bo3zhxdSkCwTF79HQZwCdu5Gt28NRM6diswh7X7kZJ9cSPyBPCGCX7fuUdQ4eqmESZxBJcFN",
  "key18": "3atR1zecFmjQmgKstoRWtpt2VN8HpiSCZXtjzuDJwSiB38ggRvBh95DQkPfHiLSnbyJe7neqAGjiXEGBqtApg8Fb",
  "key19": "jdKYXfURTxH5xbdZLF8WhPhiig1rGc2i1fGMpKPNhN4qxp6EDVUdjG8BhHdUsDaWKCBeRev9SwGLyT5MRYnALgv",
  "key20": "5phfrPN41XXZtAzT1cnwKyumoPQ7YsSPJtFcNThq43QFnbSxtkuW9bGGg3Kge9LCjrVJUL3nEP4fKk5B3UkVrCeG",
  "key21": "2S3tGbundgdxd69GtDZEzRrJm6bcLBM1Ww7d7bQKPFyn5zJGr7rbymoju5iUdRKY9MtzSiqnFwq1qyxtawWjiZkJ",
  "key22": "3bQRfAiQMqWharQ2hyHm7srUKZzcot29aF2xVAyff9khaqhUArpAXVTjkB8KqaBVmLmcLBheYWssq72kquzeaLRA",
  "key23": "3NdBGBJuLnoLsmASSyunjweux73mLhWaBNPHnrqVXHaryVwyR2E8S4nwqNRzmwpBC8LYdNwEBKhyubG5o8okxjjJ",
  "key24": "2xBdYUNvDgWhebcvr6NHPES7FtkAhRaKfSMYzQsUUYpdKGQ7Gd9rX5Fyc1BzppAWocNgSfCoY4Yk3PmLGxETa6L6",
  "key25": "KQApcQhaoFkomZvBqd69hrvxTZSxm6jFcH9YeE4g77tidT6kanYQWBXvLgo8xvCK1q1TUPKLCkMvFM2XVXLmc15",
  "key26": "5CjVYFTbxeXGkckTBhsmbRpkdXTfaQV8UNbekQG65exhFpuvzxNbtvCN9k26HfB8xJxkeewY8cWgpcZ817kKDkUH"
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
