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
    "2FS774xsFMoKppAj6SeyzwYafbN3QJiq7jXEy9TdqUAc3mj257rk4UPDuB8CdpyFLGCNcpc5WkUkQEQ87yyr5q9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxdmHAMUF1LhVnxTXmPPBNVFbktbc4vmm8tr1mQJxgrt4bHmNSX2LjmJUqEf6KGaNy3UdFSiHu7fcF8aPF9hKRD",
  "key1": "5ExJKba9NQ4964RBaitof4HJX8gPd1m4uZ9sQKB8BvMAFjRH1uSgSSnkzvn6RSecrqU1YspDTjnvEHo53Fnok73m",
  "key2": "3sPhJMQnWKLY8HjwdmB57NfHxnULeKTCrQrjsXm9MCSWDmm788E2FZK4UkWhpJttX1zTKqyLZRtZQwrN8veCghrC",
  "key3": "VfM3o1135kibwV1fpo2Tmf6s4rQQLYd1te7Vpdu69XTjXgSHX6V8zoWxUh1hH6RpoSgn7D5eQb9K7d6ifEysAWF",
  "key4": "2Bf7g9DuCUny9GXoyfihFFGrm5Whu7W3ufkn19gqoKqqSqJ8xsBD2WzJMjGvwHh4sVukor7wyFALskhZtYhAA5CE",
  "key5": "2ZTq8dEZuf8fquLmq4ovhtZ12JgRja2decCbhVw7nhBC8RMT2b5itgnhYV2NMHrXFxcG1gzJQKhTupTAmVDkMKt1",
  "key6": "469kpk3oemDZvXUoYNRywq8xV3sfZYPnieKMvQrpwXeiW5bk7jTQFMynnmN6wL4qCKACbjP3eU1pAmy9seLC7dMw",
  "key7": "5MVm1BCjWFC7ug49kgaFe4RHGzfL9rJ3ea364Hv5Z7GBVSZPJFZvHPi7b3TU7jJXuSS9xusz62q4R5uQsFt1k2ur",
  "key8": "4h8UoMnfpaXD1Da2pKjToZauDfaWErLArxZhPymhyiMsyoYRZTq6Z7X1aTUE6nDG7JW8mwafUm6Q3QhJa8j6vQ57",
  "key9": "2u2Tgvwh1nqfhr1QrJAy71R9Jspwko4NhAMXRBD7i6vYprz7t3NJ2igZE4qwU6vehLqBmHh79Fe9AYXFzFzN9jg7",
  "key10": "irYDyvYSXpuQ7dPwT6AfcSThdr5ECnhQqxX4x4T1ejzRmMUA3QUmgkK6hyzkPbSQcFErQ2A92r2qLpR2sQc5i5J",
  "key11": "sdMGLfyabj7EcgF4JHJbQUJnWSU3MWZeR45mdkzxx7sykCSUx6B3QfUUA3ypLjKaVzSdt4zu5e8Gu4FP8qeBkaB",
  "key12": "5AABkzCxeUhH6qFN7S1kSEZvDgYrkrK6BNrTRQuTCYypgAhCVyXwszRZcAtHxm5unAPdh9Rr3akXPka1cHR8MPQT",
  "key13": "DECGtVVB31aVMh426KZKrZc9beXozKeJdMqya3H7BfTcmBjpSmi2GRhEoxeB1dm8QhysLM67HSsiLG67ZuseCJC",
  "key14": "3tPDSLjiBFEaN19kD1c9r5Wa6V8RRy8XKrWU2txS6Yuuz8u3WMdSqorVbPcayTFUCBNEUZ1HYFUpECqCDQuVStHA",
  "key15": "49Ys3jEJ5CAQC1DrbBMZk96zenxnHLm3zg29bHrreP2gvG6LWXLHoX3jHAuXJcbGND64ATPeE8nFad8tQ1QoYvRb",
  "key16": "Uj97wrE15ZD3fsJkYu2yd5nxvP2zNSgrLTUhjDAzfUeQ4mDLYr4RvUgDsB8QC58wJt9czHHSVq6F2WJjDeVauE1",
  "key17": "27r7mQ4dsp4kk5GVQRxyf6K8ikai9XS192GYppAd8GTUMcdPU3t6VHEf7BXbnY5xo1zDGbd4JiwgPCN5zFzFZ8LY",
  "key18": "5aNa9AdXhz48Bj5mHaxkbFkYj8pGFVEzjb3LEnf3c6Gmm4B3LQPJLMnAj5aMCGTfaR7tZ5tWpMEKhNkThfmXb5by",
  "key19": "1cQbUQPU1uLiKGKiptwEKKyLeKC2Z9iiCN6Ca38Z6ixfh6ACUbNercmPBfWG3N1UoSFkpTPeyKa5vQs2C2hTfXf",
  "key20": "3zxK3kJmS5jetDM9jzHdj6zSt553L8r783VS6zbmDdpFh3Li1pyQQXg4iGBpSpAuivBNmNeNYTFaPHS7kShBtRnU",
  "key21": "4haDssFnXSeTnfcv55hkKq3FEWDLs8uspgEVJax5xMPGMgSy2fG5TT6G3yPowjxmQmhrw1SqrVHADW7ziFUqJSjC",
  "key22": "4V5aT4ZvqYjaX5Hf31gnYXmguPDKU5eBEzD3vv4NC7jfW1ULKbzd8tAkSNLztcFDQS9AUU4yELj9ckWqAWG9Syqa",
  "key23": "3WYnm4PbL9939aQYH68W2vdZ3HzxwAfKyJy6Rcucn2LpAxj4i4xfZk1J5c2hL1UEwLBenxxqtLQNfbco4UBBVtUp",
  "key24": "QxjprXKwpmboWY5k98SfwJ2YYxZpahKggxoGGwgL35PKq5mjSDTNYDYw2LVjgr4EkK4aWn4QA2HcgPbRjCC8KHs",
  "key25": "n5PnBrHiyc7WEnVpAChrcUuPyAM1N2kx3G6kg9REk2NrFAyRXH4fgqD6umqTNKMJtrGupVMGptV5m9curUFd7VD"
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
