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
    "31mcT6xdX9sFLGevHnzA8MfceUMgXsU2jsCCpCVmBLy8PmSVdvVg1qTmYw8wtH6GGSvYY8APYXvVZhwdsLcgjToa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j5q9VDnrYpkGqD42DTfJ7ndUWdFN3jNwtciBw8E6kLVQZjNzY81DkoVXq2Q1dYJTXCUU4Gd8HGKGBm9fnK7yDsD",
  "key1": "4KxxSuWnbHSZSdFZyJJpxAwM2U3HPEsMRmJRswVnBkGMsYaLHSBr5vLuRL2PVEPWGVcXonN1KC1V3HNM3SVac6RF",
  "key2": "2mAkPBgpAaafggeUVthKdHYtksPe8bFPnbwxYXSkW1B6GR66PbSX2FBDeFmu2pAF55XwjH7GV2mk1tJwqkYX6q2S",
  "key3": "i9ZUDYDane1ZLpGXqBPakiexHThamGZKknjhHPMGMhcwty1ofLHUw4K1d4kt2YU3ovtHY7Nji7s9P2JgEdUcBz7",
  "key4": "nM9uZiMCdrx6tsmQzCT39tD7ekZrVpUkkvGZUjyDfEyFS59jeWB4iPq7XAhgnnUhg2zEPk5GCnchGWbcdfe6VLR",
  "key5": "4PWXRieNdxGFrYytLBTf2hPWc73Gay7XwC5ovybbj4asjrFCd6H3Fi6iceznKs1PyYPCDKjuMakd4e49LU7n7kN6",
  "key6": "3CXZt1bS1xpZaxRzEvnbxNXDrS2DpcfPrkpyAgEkYqEL5BPTwmrqZq5hy3BJhHtEEecfbSnb5BKcqhVffpXQiLyF",
  "key7": "3gnUqKuGtHoMXwPyxP3CCixcnnaBPUZ5U2wx2adNoV9n3D4xno9rJiDpG118E8v7jULUe3HCz9Ey7jNMCWg8CU9U",
  "key8": "4K9xrxo2TmCybCZLjWxtkMcMNgve4PuGpoPHs4Gt33L4EJmq1ZFiT9GVE2sjQza8akGXxVrRcZz9R2YKprv2uULz",
  "key9": "22txNDCvp2zrVaSct8a3Qtkr8PmVty5iA9ubkzUrQmvU49AaJGRwWVTGtxLMXnAoj5zFZZGkMhYUu6bnskEhsKUw",
  "key10": "5NjUoVYcwaaAnGVTYhCRTqC5nv9mkd1FwKLZtFUoipSgCSccBwtByDzh23LAcLLaBqCHVDXnkkE6dGaJA1rgKAZ7",
  "key11": "3t4HXzj6cCSPYBwc8VcBiYHKFxyU5CNVekdcRgn7J9JHK8nmDDrFwZY477c8eKQEB3Ahg6Rvh2BpRGCnq9VWC1bm",
  "key12": "3b3NZFmnuXDhQYZWQ2qrhboTpg5ydcvHdbKnP3gnzoq6eXnhQuzdMHsMMHb2WQWoPCzMq4FLWSGqKu9LiadwQBC7",
  "key13": "3A3RN4bmvT2NPSsKQEq5nQiEY6VsUxFuJGBjzKqyqmncu7Q2y5wLFGs3ZdibWD35VSCDvdoRCHbhx2MXDingLbE8",
  "key14": "3cjTzJBwtafAVJX4SuegHHxEYRQwn4L72MFo9FwrnAavEdZ66vF94KiAsoFAmNVYLVfNShyXAsNDxgYo3b7vxn9Y",
  "key15": "2DD98MhMvdaCzRGqGMPAgbgzhjjtqDCxEKJiai8i4cw3sSNPxB3BX9fhAWDR8u3adMC6XBVNVvnJDpRr8hhSu6Kp",
  "key16": "tJhAxz36kEn6rbxDcz99XCtbTeJLAjnFbAyd3BEdhZ4hAkJyXar6wZgK2mhRR8Y7kf8aNxFKTK46mig5XGwrhqU",
  "key17": "osghwsqSJe1KCdtQWfjAXRGKPs6AEyLoYZhRMWwAT2ka4ZHC27cwZjcmPybGeW1atSxffQcNZWkJVcJ9BuisL8u",
  "key18": "2BvzYR4zDPFj57JhjDwirWBje8aqnu6EiHbUHis4wmE3qL9J4wBbT1BhhJZujEZ7Y5BnARX7j3bH8v7862YeuEXV",
  "key19": "5foNgE3jSRWzaBuYjHNkvnGvg9WHxDT4SmxJZcS2BBU1cz27UhaSGdyHAq84tPHRjtWyzT4oePBr2gnaUeAg5v6d",
  "key20": "5ZcDHjYiM6CSRBXnS8sHWxijX1M8uCd8pvfyPMcxmZTsve3tDUniGfERgXXxhYzSE2HEKETBBbqp3XjGgkSVzeBS",
  "key21": "4kmzAc2joAoPKf6KpYWQ4yCnSTiJrMfpLGfdHMaFf9D2ot4jGKpCefHd74vSFH4Cmi37WT4xNBrLzW7wGDXUQqST",
  "key22": "5HJ4k5Hz4yRRRA6RtF5QkTfANDTZ2oYTNEMDWoSpiU4MpeudNPs1evmU6hjEiAPbYvyEVvNZRvQT2STdh7dP78ZC",
  "key23": "2dKGNt3aFWZ9cniLx19tafXKxzQ5nQJQGFQTqwhtR6CK4cu7MdwU93ZsSxQrXCozjX2NPxBeReYx8wqfnmTEQP7R",
  "key24": "3hiQ5XXBjaZVZQReh9kWjNEAgPGUaUtTccvfNAKPHPPGYEr1HC9hbjcVchBJ8VujrEoRupgQbWMfF1jmVAw1dEzp",
  "key25": "36rCYYeXPengWPTmTH5CYgepcVggG4Y3kx13hRn7SVPhCCoy1ad2BTSyX75EXQRNeX4XBdw7s1qXK8Tzw7jg5jFq",
  "key26": "4eSYXfSwo8pAvoQghgGK72RBQq6yqdoie86QdndiUt1KXCQRJ1v8g7ZcX6g5TcDAdvCcXPzeCfsx1CQAQd5EY6dT",
  "key27": "4KaPymN3b3DsYMciBNH9Bsicr79TKSRwpyte893ahnG3HUk9PH534Nb8V3T2PxoKi7LuETt7crzCwnVuUpEo1ytE",
  "key28": "p3E9FfFgAWDDnBNopVrQ1q61Rif4KkJa9C49uD8V2FhKmYDmWcor3ikwRRc41L99REhUEocSqJUdCUpYLzT6iGN",
  "key29": "rhb3YseomLPe2GQM8DxQXv1XMWSeZAYbErxxjKmr7jLfQ6pWLLexvZwXZ5Nt8fCbmQbR7uEq3cZ3P7hEHXyH6eK",
  "key30": "5PncmbAA6kBXm5EdFRZ3GnkkAXhBT1udMHxj7GpdiepMivCqxWmZYQn7EueNvreSrM6LJWr6qTeDiNyzNT1qn5tC",
  "key31": "2PFSREWtgMmoYw83pp25p8pSDzYHVjai6oP6UYaHAtG1FMpBRuTZJvWxt9yUZxkSdzWcLUGwKjUJ3xvFcQV4wEdh",
  "key32": "3q6xoun7q4yU61burhTV3t2WmcXrb4qVHLibMRGFfouMbz2Y6ikF6Hh5y48gJdP5AU7amh3Lvv9ghrFMVs4W1hzt",
  "key33": "BVn8mnYiQfbgrQKDEAXnmJmY4NSF6dRrVXKQvu6dCHx98GKXofKufSVVdwZWg8VLPAaW4AD16MUR7Y4nU1gm5cQ",
  "key34": "5dNAtZymNuNGXKPfpd6a59e7UPrE7sgAFJ1ngRBwgLTaUUjPimtB7aj2yWcSg5WziCDtrogEDAN4Pvi6MwKkNvRX",
  "key35": "5bUu4SrAr5amvjtqwz6mUJLuHg4aBPmPynk3wiu96AJqoehFgAo6j56zPMGtFnZpB3gfMo1q6mUTB2mhd5TUyghS",
  "key36": "3c7yNduBxpV51xSWnPwXxyycrMV8XXqm132qX5DwhWGfp25JEnUBgcKnbEXRwkjUuL9kiHmSSqsKWs5W8jeNArwL",
  "key37": "31FRWNhJ6wFXDjt1AJyqH8gGCutmgPva6vCBnES13RgnqGyTSkHCbUeXXV2Uwrk4WjcPbQQ9LprdEGudVNDrP3tq",
  "key38": "YtRjhEUrDhPnNhaeVjRKwKnemKVNX5N5S6womsYSsLxMnxPej2nyMsvH35RepP1X9kZJt5a2UazeJj6ED7VmDzK"
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
