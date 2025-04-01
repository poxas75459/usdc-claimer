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
    "3PHGUCLy82XcP3ZeGuce3pQtYK8Av5HGMMR2YT4Sb53rAKwYUU4VyNo71tF2ERzzNQHY3bHLucQXFDLm4zmqa6cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LrPbLmt4aeMBbwbaDogRcMUeK4u62RixChYxZnkshK1rMhF6jSHc5fiBp6wF5auKZV6qtFT2vvzq8UZW5S5amXo",
  "key1": "376864eTNy98R3LgDJQGbiE5rSaDU3idGeJz3WHyczENS3sD3fbgKyPmCXfFYd1eyTC4tuDu3Mk1jVqYfUZ5y16k",
  "key2": "55icuk1hRXMF85M3Wxv9PZHDyecGiwCEc4v86F3wPZ7HnsGy11iZ52qFMt9cuRW4W5ZLTmWAYpKkroRGvmZtaEu",
  "key3": "3Qfszahgv2iYDr4V4yRAvqCZtzqGbjpGi8cQv1qTY5VagF1JEaVPt5jdboMxfT5boAU4zvUSoQn4T1GLTbpUnXU8",
  "key4": "38Up9RtcvJAGzJLzmWygcKSuMmxQYEMQYsafAPVcmSJGgPsu1pQFp3KBEPj2aFB8rzNyyHjTSdM6nM8UpF6M4j5Q",
  "key5": "5fXyMkW1z11rfn5BfJnUDDRrUBzXRmA3dqbxB5zxqqfos8S1rYGgKC2nMLss3VyzDq7KSkVpEzbgKjkhPb4uN2Xv",
  "key6": "4JcPyVfreLmnTPi14B1KRcR5aRFrj1gp3KPFASYnoq7m7wA1vAwDLB3A2mZBXnhxj1PaKqfm3p5GAw1As7vunbXi",
  "key7": "2VL867nhYQUvDMaxnXZu8cEJZrZVK66kS76V6QZBYP9VqsHBpdxSGwh3FwSfuBRSVjnDHiEi3dh3CbeBxXevELKy",
  "key8": "3Ey6uWKhtaNLF3SmfrDT4mtpvEejDAViaCxj366i1FwGMRkdCPqc9yQ1XroRYqYKpyTXn6MzwGAGX59Vvcs3KgQK",
  "key9": "BWt1yMGdm7hkdqzbJWknbBRX8oiLrNG5dQFC1AnaY7SczHJadyRY3guZNH7L3hXnaNJxj3MCYNkUmH9pEZER8Mk",
  "key10": "58vjdJSmM62ZPQkt5Go8X1oesh1yeLcFCaJX4uUb6UyU6J6kzqNEszSZxSGfmgjEtofezuUB5tZRVh9DSpjHEqMA",
  "key11": "2QjJ8vnyHP4A9Vc6ahopCMN9SQDKmuCFdH3ySPHrftZJRBgo7BsiVgzvaSxDhdHGgySs2pwqiaS18ELPQSHE5Gds",
  "key12": "3Sgy9pMYF7WbagkKCHhyKcWWbbAW717VdvvSvVZaKghGhEyJScNMMoY9hhjAeDudfMA13yTE12SNtwRxs26qNctH",
  "key13": "2L4CnT9Vdz5RRW6mybToTqzoZy3HZjS1skxkHP6m5xUTdcUPYqSnMBBPT4Hx8aQ1WPR8CmmduzTnAzpsNbLdprx6",
  "key14": "2SkZ8zKyuSLxVyHqSUQBE5CaPYH6Fte7DJHCoCMx9RqMkjPfSaKd1WLtiV7oFSMoFjwDNfTdoksyZm1C8fP5Bk4W",
  "key15": "2Rjq5bxzWbvtXaGzquKHoN5xnE1G8FFtNNrHMAsBUPA1f3c4vjGkg7d7hJAogLxL2Xqs97zoPiYfmUgbhUpk2T9r",
  "key16": "3d1urZDNASeSpJmjTEbG7nULSdj1eHuPivEDQwNUWxHMJrHyqe47zvtEZikBoNjXQwDmfwrwK6q4ZPMkBpiWNBLk",
  "key17": "47XeW8szhp8dgJBiU2DV8u4eZqQvAKM7su45JU8pu4q2RqRAe46GtcFWvusqrwzWkvuR5ijxvTXgYGmj37Rtd2kh",
  "key18": "4hqforf9obeSAPUFG2nh1N3K9zQZfoJJFSmknp3i1L1gX2M3w3crtP2mjpxqN2dBoMHaR4BmPhgifQYVH1qyhDdD",
  "key19": "22743Vtmk7sLe8KYUBHmYnK3iFQPptNBfHQRaqWKTqfyZN5M71ZUS8p9tJydsYVbZXSgLz4n41KUtArxJpRVTdWC",
  "key20": "4bQyT5nnsHzLna2m3oZJYJeac7jEteaurDyw9UZba5est41oEr9MrctZLCw3oRbdSW19UB5JCHRuJmfRm3qYW38b",
  "key21": "41W4M9wtehzj5osUZuXH4o2X7whrXMm1BsTjGwUApA1hZj9ZcKABPeeB4m9xPsKXPj8avDihA3UE9yzdnnkcWKot",
  "key22": "674cjfWpTnaUfh7aRBidtqeAHgFxTgKh6kY4HdmFtgAHTXDK5zLsZ15Sk22HACSZpZESqgS6XnEj36JpQnvAY2eE",
  "key23": "LbNcNRjpU8VoqBbDUJeTYgKqvknw9hTTa1GLT3e6eBtdkSkLqVpvcwjmwMRESbhiD8BzR7uCrNkjS3TybcxZ3Nd",
  "key24": "4hcumVkMNPRYRSJQkjKtuiYPx1DD3zYZFEv7cUzjpnYU174cELWPSmxaWFZr7Rh2ETedESciUQFPxfUrg56tdMLk",
  "key25": "5WzG7SfAg95Y2qEw1hSCgY6m9dkgoY1A1D3EMcSkdft8oEDc82Ki4Uy8r7auUDfDbeGNxrA44NFxTKFB3xyXT4p9",
  "key26": "4uU2zj49Nf5JpcPZ4hJ483ufHLgw6avyL9CjSCsugfn9KVsE1tHvndikM9W66G5j54h1pWniCj1wKhGhovuigyYW",
  "key27": "2G5igoy8iR3aUwZXoFax7jWPxkq476ChujARqUhsMKA5t7MfEZicFxyJw5gAZd2Wmq5veEMGPqEy7jWLKkz63YeM",
  "key28": "4WTw3aAWCGLmd43VvkJPuS77bA4KSH8jwX6oQBA9whzQMznVD2R6nepjaRza23RVR5p5kgBFwM9v3XkyY21MzRgW",
  "key29": "8D5BQqzgzc1CrfHmW673ZTmhcM5gJRXGtCWNScqPztZ4xPbharNPwe1Av8GwGboC4qDYA9tzdq7EpEZQKhwSWki",
  "key30": "4WvYp9QAPBMNWeJ7Ft1kFYvJBYE7UkWMyLezDHaAkD4N6FuDYTyeVA8UJKRWc4otvKWEruy3rN1djpejm3zsEjfU"
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
