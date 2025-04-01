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
    "4sqhE4hTGTqNQDp8iXhr3LrDoJjd5N9ZRn9bgEw24gWYYnLt22VoU9t73A2xpAch63HpNEDB63iQ9ZYh3ufCEPtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Do2otvfEsJJGALohitVANWHrTqhLBaYfLz2V56wCNnWEEqTjYhjxE2eHyGTGYmJYwXy7dq5NGfZcBoWewg4qaed",
  "key1": "3xiEQfdPDmSwocXT1Z7EbrWTLnuzwt9nnHV23CdiTFQ7G7UaGXbaQJVCmCmNZTJWjyxSBejKVqTPwRZv12F39dVu",
  "key2": "5ggfHmsS4rUcnp8GcS6bmGcjv2EDmvjQvdrTTqZHTR94KLQNMCm17fQ7BHAp1zRdQXV6zJeArvGMCKzEXp9ZsXqA",
  "key3": "47uiNmHtzRozuJd9AqEhGgLb8CXwu5tNjWcBxw5wpenvbXLZcduFvNCzCdSS2xwDu4NR9y4RfxgbyGkDVGGWXPFt",
  "key4": "26Hn99tgDdCT4bUb54Hz2WakE1kioKGkzvray3P3tQnavGzV6Gqfweyu5R43U4JaFKKRy3Dy3TYckAKS4FQBi1fM",
  "key5": "3iRTkg5zMtKtwmB2oNsweQNdKQdmCx4RYeAcqVZGXyZXLgHWwpkh7ikaxpmpxuQxSFyWf3hCh14KEjqr2avtiye4",
  "key6": "4LUDS7GBEDkwBwjSUED6zNiDGZXXYnEkHUkMbE639sHSmnFfHDfvsknLQ4VDb55uQ4EXuSvgRyYjaLao57ErgNGV",
  "key7": "3VFKcxWxEin5uR9BHv8NHdCALCbrxtmJk1Si87Qy5Nzva16MqdWwQsNozqgjNuQr6Fg1kSnh8h3kRD7poWP79ghK",
  "key8": "5FZkXSACgWgMVeGAJnJEe9wAFFvnBo5hLMCWd3373BLXyWznkAUuUpzEBZJSVx6hTixJ3fuNCeGxng5GygUBUZfJ",
  "key9": "27h6oQGUR3d5VJhkUjzQMjSHeGYEkGtA5y5UtFR8eN8ubwPRRuDmpAv2dsFWTKYJHT51GnFW9RfceffZtVSEb54E",
  "key10": "2ATKdL9iAEAxonRZyu4QPrAxuqTGw6uAhZdrxC27raxcrHRbHHopqLjkpZaW8YZ4zwnSP5Ha8ahuagCvawayS8Y8",
  "key11": "4PYWTwmEULFLs4vaoLUu3XQ1jDztFGErbgYCP7tBsSFBXpGGfjWVR1z6LfFateEfNxn9R3JT8CHwjgCVveV6XUBP",
  "key12": "ugEJzfFVJZkYioLdWkA1PQdTEkWjQjWEgnmB12KnB21jWagd2JMk3Vy5ia3EEzQS4o2oJfTtandM2c9zNQfvhkn",
  "key13": "2D9C9EZD4ZFncVGVNBk2QQCm4CnDXxmPCXqbW4ft6FtK6AZcunV5PYZHdb4k4mrWgjhyPL6p4AsEtUifEvT8oE42",
  "key14": "5RcxM4A4zciZhobUaunFezds6n7GMujnxhCifoNEgprgZ2haXWtwMNGnDNS4hZ7EkeRBYDgTsgBwQ1ieqCNv6VF8",
  "key15": "5agFr9dYaSc2bthMxJBsanLVqM1yL9gfH8wREXaPVamABpeGmf5yKGbMVNGRDdM68t7q4nesF5vsKYxMx6Yz8yM1",
  "key16": "546LVtZmSoCmsAUUsXhYmgZ7PLgcqHpEg3sg28WxAgpdzBkha8mPkgEtzUMEE3pbH5JCJQbJzJK7YM9S2VKXZoKD",
  "key17": "5oGEcFBE9bNsZaSZgJKSz7XZ6xyXRjoZQYid29Th1S4yKZQnqnxrhNAGmy66nNEw8hEYNVF2Qn4bqfC2PhaWsTpz",
  "key18": "5rPgqKHH96tEjCkYjWRCKAJNbNz6om12peojav7mZLptgwsKFZtGoPCiQhLFWLbMQxWK7VqwyHew2rcqBWWA7tQd",
  "key19": "3tkN3EnjYiZDnrQsiw1NZ5HLd4AuZCzjqzh5TKbTNQN8NSMiq5cEztSGfHNcYALos2o1QaCABFgKhspk9hSzS9CG",
  "key20": "3uCLZGtTChF5iH5tDtGCBHcnNjFWqZdyp6mmjyMizLiPuzjTPy67zhYyfxRhaxNLZz3JWtwUyE4qAnhsdLa57n6r",
  "key21": "5p8Xv7jCaXUbithkXwibW73VR28dqmY3PUJo27bjmdLUBAyCX5V3nu2rsLqzR9XCemAk15JiL17hSUjLMs7cn2JY",
  "key22": "2otyrm3qsSQwxZmjcNMvCdggh8qoWRkgmUqFXuWChPvJP8kL7hoyitHPN5hykyJ29HhnNhcCYyg42KyVzryvvR3B",
  "key23": "2WfGYkCEkc8kQkzuMcPBtwTinLnqdYMWBvKRBtrsBA3njEnHQs2DDgwN8dRN4FdFUAodz2nZC3ZMkJjha7VQaAy3",
  "key24": "5QV6SamoohezeFJniBdGzEyuGbZayCfAHT85KWpfQuDgHoyw9tU1Si2FvYFKRY1Srg6mwYD5pSi2tcK5vQzJmkbm",
  "key25": "2qw3iBZDhfpvHPLTXo4ZRQftycEr8wsTP3ykoTjpnUyVRQ45pAzgoK7BC18QSxuEtQsb6BhPRNwgqgCgL1SYFvy1",
  "key26": "xvQxZTZEsqh2Pt3Au1UW5SPHvF1NncDAaZ2eYSDjBNEmDjQitVxfApoo1j9xd13MRhyHWsEgMBK92mjgH3CbFUY",
  "key27": "2vssKTtrhJjpN3QoenevGc7SX17ZLGiTPb6C1MZKCL8LLYfQYgarmBn5s85MtHDYq8Syc7kxnqNAQVatE8VJobmv",
  "key28": "4q8jDzWQ7EXEDnHWo9gnYsjWUAU7houkVb1bUG9F6Bsha7CCgpf16LF9y3gzaNwbBEPYQnygpDp1dXm2GVe7NiJW",
  "key29": "4X1Yj4bitzsxuEE5F1XLaPrNdEgRszgRN2Byd5n6V7Q1AtPQxT5kzwpLXdKikWfpP5Dfga2obTB1737uRRR4YbG5",
  "key30": "3bAErVdFL4vPEJ6BJNMvZbdWpuemqCQ2ExPTwJUZ1TDw2eegTCzwbLKGxNjpCih3rbPXHtghoPDFfPfD3AKPBqZz",
  "key31": "41LRQjsxADR6Gj6Mxh38d3AXzQtgoCFWP3Wg1s2h4YqQf1wsTZJ84CodUftvCiST6imv8iNAe5njqSJJ69fqMMmr",
  "key32": "4kbnZetG9RZfU6YhpDUcJgABqjbEscFsw4t7vPeFU9n8GRB5jniAHWL6Hvi18bfah1vrSSX5GuDoSkYMqFdCjHCZ",
  "key33": "7nSLvfEegsqyaSPC5SgwgzU7Raz64UtLeCdccVB92vpU2ogHGFxLA5x4NEUTb6oLjbM6FZCEofR2CPV879CMmG9",
  "key34": "4M5BWxheXyPmWhgZyamwWtwm9FKwCRsco1RegVfrhupafcKSMzGmd4vQha93xwadkqZshu67YkJw27ttqkuYJkPC",
  "key35": "a8jVrzvLnRayE2Ybpbq3afkz1mkNjFw8s21tZifF5p9SZVspzFM5LyHuWbxRjrn4wcDemXTqRjBqM1ULeLJrhUb",
  "key36": "9F9pXheSBdxjm4YHUGxBGBeAVnmhJFjQ7pShxzdbdfpgH5nV2KMHmyDcW71DkKLMZsy4x7PEuS4EU2RKfsADiRZ",
  "key37": "3L8Qh5WfFUrEpbPcKGv2SgJjTrhWwrschvPdJwPfgwjHZYzrWqwNCERS8xaef38azGZKbSj4gECRPkxgEVxX27mA",
  "key38": "3ozoeTxAyLW7ZTC57EzYJ3SzhDPAM5v8NZQDsmBNrVhLyiXwhbgNc1Ae43TRgLsYRFN7bVmhnf7RedvXyXMEpdkd",
  "key39": "DWHkMYKQwFi6eiqkwZQSNg1pk32rMTQ5THfZM1Z6bAT6qXKjL9xv9eYbR3Jmjo4q4vQvAzbFmang8zknaSLsYmx"
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
