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
    "4DeskqooKR7LFDwTKTTypAfmwnv2WZMSH5uCGeddXLr74DhNmCztga5m3vXd4zyaqBvvNQee8b424LTVg59mP9uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TEUp1a8vEw2DL2DrEj5c1NyXU5rXYTfUp6NrBzNqf3ErMLsdiv9iUj39UgPVAUEzmzxu5Bsjwx7ChjAvzeBVtY",
  "key1": "4W1hH5eYHxYDxD4PkUywzZjEoUb2UE5gqQuYLHteqKqVZcMebP1zH6fMPAbptREcKMBo3ySJTwXkUAchRtNNLjXp",
  "key2": "52qPN2Gu7ejHYUsnP2LMKHtejm4mp4F12eZLUHtsTyL9GCa8fZ54rP6bgvLTUiafgrjraVsHGSYFhv8omgahmwWC",
  "key3": "3YEWWTTq8qmQ96ckSfMNEWaxiQdvmqrXXLQVjWLoFWrCkLSB34SzTKXWr9xjAoJBqwtzoGckeRaKxcfQ6jnDoCST",
  "key4": "24xqyx2LtLc8cKAtXSvvWcM2ZhpmrBuqSPbckGCsYkBHcP6y11hLRGrZqMyQo3crBxvgRRKJPQq62QGd2D3XoBGD",
  "key5": "2DsewHLCwGd9ZPuY4MhUX6dazy1TMW4BdvfdsA6ZwxKtkA7DwVSigaftSM7i9o17AEcRNTZT6HYNUYLfV2iw8teu",
  "key6": "2jxCoeTbKWPTkmQNoVVkSkcoEYwHMrDPoch3WacqDRGNNoves49P4quQvgLHvFpgQwDTbHirb7MXqRxpxjbabkzi",
  "key7": "3nyc3g69xEfBdJfSwV22EXJVuixTGWX2VaZ4D3iwnrzvcijwzWep8JBfXcMDbtE3eu4xn7NWp1DxY5rtpQ3Ee4B3",
  "key8": "64bS4T2M2Y1vDGVcGY9mGdyCEYbtJxqYvfAnGbPDQLEy6bqNcSQ29H5EG1EbStCrc1UJ9DdwHBq2GM5Pd8CvghTc",
  "key9": "t6wVTZTtjBnhQtZr6WP7jQuq1oxutsUMRkQt2P2kuvJKpyGXHU3aQyvV9ggCpUmFgG31s71cLPLFBVzfKMA1JKR",
  "key10": "4NiGxPozgcPMVEKCSL8uNevkC7SNWMBLn9Tz5gdGBdFpZetqiXzYyXH8DevhnDwQJaBRCtaDKwHgQomX6kC4PjLa",
  "key11": "5u2ycwh3FTYizZSW8ce8QNEFwv52a5acEDZNgXEzNjfCzNzKPiz6xBkPzPE4oUnEKKmmpqvV7o1fwf46SyR8sAAM",
  "key12": "3cCHiom8YGd2t2NrHRhTd8nKHroC13w6YfvFySK2fizP7iPc2hEFqHpsLBb9XgwdAjaQp4rk4y7J8oB5sCEzao3P",
  "key13": "4LhjrYXU1gKcNcrKUhvAa6fQCAqiSQQS4DBihYj1XftzCXWv7jTw2JTvwVxEBLYMF33pgqVzCKRrhcVXvFTXvS63",
  "key14": "5PVhE7kAH9Ut9FgysYFPFBjLTvJVh8EQ77Eh4sMW9fewAzXzJXUr8T55F79xz2kYoZoxw2x7aovrm5QifYiYBUGA",
  "key15": "2SpmNbL3jDguMydUeDGGusYUsyXodA9qSS2jeNReFBySepTsb7NV9x79qxhxiuyrvSSQw7W4afa8Bf3hYMhyKE2p",
  "key16": "45qSVaTdrAX15JNeDJk6rZNXP76gx9KMJJgA31h6BKgmfrxxskNBQSQTmwi8iDuFAy2mqemrNDH2yBoikUUAGycS",
  "key17": "5nZ526sd5mswZRXZpjXau3DXyuEtc2nUDDETnRzWAGc6ErteDzWF9KCSUbbmvTvxQPDdgGNs3AvYQj12kWiLUD3x",
  "key18": "2Y14GC2ut22YfjgMJFZR4xNVSQupTGbAsDav73EFyycmkpDh8vBZiYF1pJeyhaKxo9B4p4YbBUMwSXUEyHC5B4rv",
  "key19": "2JM6eseqSBJu3heta2YXbJXHTewYTE9TpDuuaaNvyHp4CXeXqTpWQoTY31u6T8iwqEApFyo7mQB3r3pDNUALA2e2",
  "key20": "3rEK7Jnp1DtgGpzXPBWc4x7G5ajRzGZEUXE1HUm6EKLviMymnvGU1LfT9H8PptThz4ekSzCzbcaHrEAFWa1wx5xe",
  "key21": "4v77PwYAm3ez8HvCVeBKVVQ88jmVPyvzxQtythqSzucPUoD6AjfM2ZUgCpiiaGXJZ8t3WqeBHv3oaaVucnGRsRvK",
  "key22": "C1pgmH4qdJJcZEU8PxDqfGHveLt5MpMUc731xpYeCo6hssZW4zVGXM4gkVDgwNN1AuYheBeRCxMwQk3X7thnxn8",
  "key23": "2rvYXth5CahG1oobpbVq2qTgG3YMnWTqYE2cCW55b2ojQBw5D9St9dDAgxb6AFsn5vPwhSzgdnK1HG5dQGukVjFN",
  "key24": "4z61exmwEmD573QazGF7QYGyGkcCmjMw5MqyiGazGgvg2VsVKyfePn5kBfTxCnCn7dGnpD1xvZuzif6nK1KQeU9d",
  "key25": "22X8bWsKEZDXxyFbbHKzBoo7fiEWYVEjRT5ssuADnBSiMXTpBq7Gi2thYJHvSz4PMwVi3v8SKLR4tNM3A2R5Ymof",
  "key26": "4KdcTnTFYKUrDpSmp61XErFLvM6KrLDwbzqVKqicd3M5h2GYx5qtXBX3Uydjmf7Apvf9uouvxNHw4gsQMM6PjEKR",
  "key27": "2M26k32fdsWWvA5tYZf2WpuxsAWQAU9FQrdxV5CU6qdjpz1BCipHRMyvErn8HZ63NbQzifL4nMc7nqmZHPZ97hgh",
  "key28": "5AmRosxx37Xv9hH5cTDC33goNQ35Q8wNEYTv1pimQskkJ8cdcfBxaNx2GQG5fXwJs8LmQVoyjx987aWeQ1xYTihJ",
  "key29": "5ZUqG5hBSfDtJaLC4g7YguhmvTPePuwSEtgP3jrdzTDdw1Gs6YoAoy7x4SgDuR4zRT9URuMe7sKpaSrQs94UXZHq",
  "key30": "2W226qhsRMkb8T24e3CBhMbV45EbACgveJ7eZ4qaQUP9xkfcpqn6pRFaAM2agzYCfHG8wWXkWUvGCJ1Rpvsa33V1",
  "key31": "5b6JHUVHWkxKUGRCVjtHt2VwUMHYnAJV73HxrxMkrqWq4UBbKMXJEFhyB9TjAj63oSzFFrauDKW26ur92RqvG8om",
  "key32": "2NCBAcs8djqb7VAaYAjEzQJdjkJCgL2cCHxY21R82JwToYRtEvnuB87jKF3amnbDpEAXBZ8E37gSRhYhvqh2daJX"
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
