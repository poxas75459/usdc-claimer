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
    "56QHozKktEi2HrT83MaxB5HtgqyWHxNq9Gr4fwbimkh1mgDp9rNegKn74LRWnq4VWfWiDgCpE8MkNUYJfwdJsEdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6wZ9qiQmMJURPiywoKPk8heEGHv4o5sR9wT7PRmSRWzDGhNnHTQi9CXaEr8WbQHHQYzKSuJrYkvWctN7vSehfL",
  "key1": "2hVa1MHfNngzeGC7XK3KNcfxcNRzQ67q35BHCApKEbKq3K8ydbjAf2NKdHEM2BSvYbUkAQHo48me91YC7q9ho4ym",
  "key2": "3fCmu4e7H37V3nFzPp3SVYsXNK6p1wthPijq9aaoqM8mciM1wjqbNPwAvA8tC97NSLFpn4GzaKow28wwuaNzvazP",
  "key3": "4EA5FAWSy5bwpFak5g98sNwivRZE1PNoXpVoZG3k3xbqM4EyKdk3BFhqaMGTuUmrXr9thbU6BPB5enq9yDuR4Fez",
  "key4": "5yjfycfQS3C9ac84G55aj4K3cqnxyyBfTcLFwb8dkGkb31q7g3LK3dzpCkxjTKVAxBieFFsz43KbqS9ZsPHXseEH",
  "key5": "5mYNtHpi6VUQ3jvbK3R7tzo3jVDxk9rYBBRYW7wSrL5qJMdmnJiA7SYePSi1eqovptToMgkeRc15Lyq9b5FHEwm6",
  "key6": "2c7UbDt93NhFRsHTF9Lx2n7WJ2ZSxBdWYwyJeQHcFDr9BG3zFU3poo7bqBmuezpCG1QUKiFWH72nqFjLumHkxJKr",
  "key7": "2Sqy79EWsonMebuEpYJ9RzwZVKqZfRUrHLe5EmeA31HQSFRhAUwf299nNRjUWtZEVBzGB3WdhC2Ce8ZMAb4JwdsU",
  "key8": "3WTAkNmAC4YMk8RAsRgmwBKH4rprCNvLbx9UAaj8y1mVGnKCHYGFpaDR4SpGAj8LAb7CXBTsmniYzGvvztg5q1Qp",
  "key9": "BPuNimAi7tJMeRaA3HrAE5p6ZVs85DBQ71uC3B9m712KA2RBAHoDWCPsmtng9PrWwkZxnUDwWG7td1wPdqD9fFM",
  "key10": "dS3Ry33aMMvRrPU86mY8UmwkzBswLPWQCvUxJ3X1Geah6CeEaDQcwXjRkX39qDKjJtKNUyePDRA59uNzYNNeu84",
  "key11": "4ncVEyHQR58wpfbhtofwKJbUApQCc431L59A5ahnsagNFcAVagzN6hRvxM3FCbRnoc7F33FRJ1Ad68bTDEWRJY8g",
  "key12": "4mRzqpn5SL9QDZMVrC5Pmf2yR9fZA5WxZuApoVh7UN5YrmxdxuuPabqwGC7n9GJaPDsbWaWUKFgRMNqw8gyRiDhR",
  "key13": "2zqRZCNhhPd7GqTi7yVcHeWZsLzCykWd62vEKVUwob26hY8NJovGGttd45khNg4BSFKbwPAWmdjb88LtipjVqFkT",
  "key14": "32tTjiUZWEeHEcZ71PkYu51tn7uDEpuy9uauGb24rPXrDoyV726VfNsd6QSEAjFddkxZBMtA4ujNcgNv7pFy9c2z",
  "key15": "3Uage4o2C15cZwcFLLJ34LUqxziaikewyUu2DfFAwBiegHUGwk4Q11aC7gb4CUNgHpjgpfHVkHBYhHUtydpY7p5t",
  "key16": "3Cr3NTVpXfEqjkdboo2MyXTVv9MkvZpCT6CmwDWCPMtd91UHzcUuEPbd8s2pe3wvCNbcssLQo84ahkTx3FKEDe1t",
  "key17": "3zW4xX9djQewz7CVRDZ56Ydf5EEVAy6PXP7t3hXWbRFcy5RpEvk1ek8wfhu8J8h3DpRq8UKpmtd4aAHLSBd9XaV1",
  "key18": "3wwPBJMyPcm6VBey8WdTRyuPaVPu3VHZfuVMGuqq98t8mHSxVoGhZ1szPhozvXoRsFYZjVhY7TVazP75N3jaNLbg",
  "key19": "4QujjKXZQn9YF9PhQVb1nHNynZRx6HFbhCdixK8u3Wg9qK7hwBRfdzoLmyGPrXSmMyz9DK3NLfm6qDoUDTiDEdTK",
  "key20": "5agebt66dLc4ea559ZzhpqzTJC6MNHhfYYv91UXTx4bY9H5Y888Y5VpKeyDhCLPaip7fPEHkJTQpR4eE1Mr1ue2a",
  "key21": "uaFobDBET9MqUmiMXBMxkLHmbBWJhoM1Pcq1DKtnRmwiHhV4YmZYXsSNfsF5jwZv1hGyqUTPQUN7jUQsRyeHc2B",
  "key22": "3WLXrz3cHGu3MeXSWFuhAmabooHRhePBkbzF9AD7RwQ999DymBES6hNzhwkJnL6JPKWpfQvYneAcFTEVMpBrGXnN",
  "key23": "3qcgVkPa5h8gprsMNBaB5CjPfc4MHBisr2eTGcFBft8YDM8jBEcNLRjqgnrTcbkLxvo4zKMNaNBP4iadcrrGCve6",
  "key24": "3ffvYErST9FgLdofmmfo9tEXYmi4KFoGdb2kznpfoKX1xNyGsDkGEGJYFPUXLMfcNGf8geHi3rogWfi1unm5UmNq",
  "key25": "5U1iKx4YttnVnT1zKcK6HdwHEFdNfQpe6Rvb7GgqzMFaPBWZoUpAYUuySfT4DANdzhBCgc2iZ5hRwYcaGHnaiS59",
  "key26": "3tEiD5igVBoDCEag9pusJzTcJMw69xe6Wb4iYt6AJTcEYv9PsUiX2k7CaRzXKCovdbNq1RTEWiaE32GJAUxj8BuN",
  "key27": "3LTQrMrfSLFbD1C5289zoWjdoUgiMC5RvVQQEP6zA4iTvHUGem5jtb1Sj5hvKDGskqgRL4WTiPBwTFGqAKaLyJq5"
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
