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
    "uGe9YhsJk7QasebXKNZqyQBK1M3cRedesxJXJk79htFoWbPqz3ebvo6tnrC6nf7gtBLsgqpsot8MtrwHrZaNwFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9CycCqiVQWgqRmfvu3yv74rKsm5iGuCcjqUJZEexnEgnrzVcvNct3f1g2fp4wnNJWpm3m8SfHVv3oy8N4hkSCQ",
  "key1": "42CK1Gv7xW26vJBYmQPmQVXL6J22qXW2wrnVJRmxjL46zRq9XMwhRCB3nca1rZRZALPcMVQh48SbFVTnuY2VuTZP",
  "key2": "2ejs75pJpHsjprXKPtnqKiPo5ax7C9C39L18rWSs9Gvr6PXsP5tsTpdANMgHTgSd8QxVgHngPvmfHLF8m38L7j1P",
  "key3": "3sD29Ttn1XxizQLTstfXEN7ZDE3qTaHEp5YkuHHBbWqSuRV3YDtDoThmatB7GYWB5ST6Urfoq6J9inhQf9BDpNBS",
  "key4": "3ZC5fwwkLRmXd6EJ8zrCcG6k6npQgep9xw1cecULug1ebHs8VXGzhD23B1X4ZmjTBzF8vSWuZc1X9fy8g6k6pWgr",
  "key5": "3JonRU7HSsBMtwrwvYcGycULrGaSRYgpFoaBxL8JXZtVbVymkgLxvW7hMbhBxise9o2QfTJrQRABSsHPsKz78wn3",
  "key6": "62GH278RLRfFZKWd6759yoWKzmKda1ZaHTnrEEZpJJyBK3iEfEKwXxowg7vpf8dBm6WTL8M5aUDrmxLTBXtgiwME",
  "key7": "3RhJExcPFs1y3TmRpfCHx1NYjcgt6bKaRnMFdvpoGnCF46kvwHRnZpdaEe9LNRu9pk98JvY5VPgZR9DVbFjRoxNs",
  "key8": "4bH3rCzfRBKca5NEN1WQPpN97Tupm87d8UPxnGKBrSgbcaKcQaQBM32iTxJhHkgEDGJUqV5YtqxUN6sWbRbVxCx9",
  "key9": "28ZUyHMFG5eRDN44o8NRtvFSEXe6UmjpjqAQusW2Y2T5LwBmKXT7X1ZURkrWMifbmtezMgn8zyr8yhNK6My59dde",
  "key10": "3mJskmES8Hbz6SxxbGeUrWsHevTuYHrMFuKPfJa7WbTN7d6g6g8casSucWbNCDBjN4wRKYMVWvaL8N9uMo1e4eK2",
  "key11": "4GwzA3DUvnjQMtF5BB53naoa9SXX58rqPKLFR8FB6pdNNz9e9axiX6tMhb6nRqRBdMSWQQGNefx7hute8kz6QteQ",
  "key12": "4qMm2o7URfXwJFA6QzG1WfyRK1GZm6oao14F8117yzkZa8pErhPHmGsKiPA58HGGHQkmzDXnugZAqa2XvBY4rC2m",
  "key13": "9B8MHc6AcVQ5dKjsmKfcbnmzoDfYiw2PwrPGRwhxK4W27kwkkkRWdTTxShuhYfswgqRD8cb3Kp4dUEyQtTatf78",
  "key14": "2DjKX3ey37RAErDry8x5eL1NFoJqStw4cq5XrqucoD1UBJ9t9Th6Pv1Hgh2QrFaXxHVJ5pGwXRYjYZKM2K1oNTsA",
  "key15": "4JXohymhhcpWz2QyZnveQYnUgswf4mGnh1KbBE7N4HQVvSX422ntKQufKwHNdXn2LCZGDQjx3FD8oH8hpYn8exWw",
  "key16": "5usHtfMeaTXxRX5zBWgM9dJk8w6BE6SVKNmdUN3791u5fFcGBPgoHN5XBSBAeRJ46D7xhHh7vTa8mXbY8NNq7tGw",
  "key17": "2JQopgBJz2rTQUCnq7Nrp8GvN3YLogyprpkUcVuxQn2MDt9gErkVyv16r8Hz8dzLmrrMy9qrMphyfsRmz7vbeqCV",
  "key18": "4LN6CYjJ1PDM8aJpw7uLTzWtmr4wipXqBxBVNcaFXS6QtXEgoiGjjkBGp6dH3dUbuhBo8kdeugtq258twy1AasTA",
  "key19": "38uRpADVvtj9Ji7adRvEG5MkMkfmRWmHv7DHhWVjKDSdLN3ctspqJ73FrG2N84NCxWgCmK3xmUZpCrRN2pVc3vRc",
  "key20": "4WGq82AKsMqBjj7iBw1TvXUwgK1oDPSXM5cgesb9udCd2qt8eGBC5p687zDebHzR4jBQ6UHHKX6ZJN2B9NX4dmas",
  "key21": "5vbWG19KsEU43USWCVfncXqQ1jtyYpj57HvDK3GxhMDY9b9BtzxfL23Yx632zzWjWyidXM3vPCwNbnzUmWQudCZH",
  "key22": "3iwUbHnCSHbYL4rieB2ecswWdodEQ8SLNs5z7fubkhhUixP7fzh5BjbWwCNcDCuv7K2Lobo2hNv6fy8Rj665m9uc",
  "key23": "EVLUdfKGoyCmdS4Tozjsw4EMXCiCN5XqXMJQEkcuxyJxUjjqcHTtGm4FZ88rjY9PLkK9Gj6tVUwUKYh2d4kRmkc",
  "key24": "3NEhMDMr8QPiV83VavBGRQfNUZ3BFheAsnMmMPVbtfShBF8UjUj6DmuEWyKC5L2tXa9oQoXjS8jNrRpxsM2gVw9F",
  "key25": "grxvhqEHkLtmkaL1NBxjF3fNrrpcB3d5q6t6kxGr2XfJoV8ebpXU6GUzTv4VXbn9fgamMyNCXWncD1oWdgrEe3T",
  "key26": "5UANcTCKLC74sFv1dKoudZq8PUJ5Uc3khXafecHgQ5KD2eeNVm6TLqJ4vnANdsk6e14tvRjoniQhZttbYkuJuvzg",
  "key27": "2Kqd9G83X1SqwuJ5NGyZGKKM3BsDkukzwq6B6U748P73AUGcPhY2q5xQ7cg8skodpFsmQbQMDZUsg34ATDdndeMG",
  "key28": "3uD5ZgSmFj73p5KgyUu6kT6Bo3EHZ8dcP77yWbQc557ZczWuqAjM11pohFZca6yasX4wgYnpW3eXq9hru1u7GG6x",
  "key29": "djqn9GTQRD4MaGt7JXnCqBUcZBYCRcSJ6UDdQx7TCLMnCnmLQxjXHJiwGNzJ1c3nL85ZDn9KesVBFuL1ZYzYGMW",
  "key30": "AE1qD4SrJ2SaxhkZAEfWrjMy23C2GfUpH7oREmiNNhjLM7uyYJeSJvLB7TxdwNMJ4b1oXVwbhjn2onyHDpunoT9",
  "key31": "38MbX1VB4UzWwbc9kVsDrQHZSnLcfgfBUQB96qEDRz2SmeRUUdhGnj5EAzcZBXyhLvfqBN6jZKWf4aGNx288pvFt",
  "key32": "AjFSSKXvZEJ5cM9j5oRKjs5R3fMtrr8js2yo4gssQJuSFmN9uCJw7RYUHgPw9ZMs7CkfWsxybExT8VbE1QWY9o3",
  "key33": "2nYfe4qTEzvtwakB8YbkenkcGGnFmaewb5UntnpxToVcF1VpqqXJw4bXpRM1kvQ4jw35ziuUvMsKC6yQDEUGXuHD",
  "key34": "N8g4AbJTr3VFKhqVJ9qbaPUFKTPgm1sp8c3j4xLMoMQpKiuE2E8T9Et44fa2Z8QzzR9EXnHtuKAdqwe627nyW3M",
  "key35": "36jn9JavH2YsmaHgqvzWwzizWQPdcPVCMm8BpKYmRrthvszLrH9wZmynMtoeRV7zVVGZRAqrvaMdibabWnz72zaR",
  "key36": "5hyLg3S1yqMse7DSGETxKgV6fsgTJnyRXG8RfCFXcjCf4kZ9stZoi7ownKfomhkCsbZfRsgH7KQiXUqLYVPWWWmy",
  "key37": "5iWSqc9B59ppYu5wBrUbPA9oBG1qHrSNMebu6MSMuHQjzxE4p2WkKTf5sm89BLXHjTxwFxDxvPHL77LivV4y46g5",
  "key38": "43qqNWmwEYTtBJGTBmaqYLStMqPYn6LX95BB8kBamh8WMffRjJzk6Wi7tNC42oXzVbHBqJm7eSeCN5TRbM5hTsDY",
  "key39": "mkkUzCprVwp9eWdyUea4Vwx5pUoCwxXf5pbTrwyUsMCgRY4PwnZ9NXji9RwHyFaJySG3z6dUnCgQ7ryu7B7UALk",
  "key40": "58VmPRwEfD9rRzXr8hTP9RntGx3kS1d9SGNHFRkUFNSBFWD98eMDPmTSsZABnXxehGMBNN8NfG6PmnQFtACEHdER"
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
