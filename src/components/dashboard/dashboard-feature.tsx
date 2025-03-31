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
    "3uxwiaKPA3x15HD9j88Q6et6BAZjW6YXi9xMrCHqG5zRjjVgv3gumm3YZ3aY3TBDum4TQTj9n1JMbcqdAeCtsL5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gX4rpBQjXvUyfhFd5WyZakV9Mu43ipmg3TrbD4ro7igzCz5heAGD4sotaRhMjDPF3TL1CW2axPgRTe5w1CrjXK",
  "key1": "36Tu8Q65xbrc4Qh6m8pQdYziCGUZD3krzo9j5tue82Ahn8MBZ618ufj7UAygSLwxFhFWjcwV2hb9r2E83N1KdTcu",
  "key2": "12667nuHrkUW3LBL6gaqcobVvjFFs3AAAngvPsoTZCUeUzX7SdfzqPLYKqkuWa5qe5MLgK2MD1zZpXS1rFDZXAZL",
  "key3": "5TtAcz8SGFGCvHxbY2KCr2aHFTiiq6GNTC4xK9LJWVGS776oXBxjYRPxKuUcczjAWqE2HP4D2qDSvB7X4R7EEDqx",
  "key4": "4bjF2sLUyfhiWZVBWaqyQFA83WzzRX9veoiBqfZxqRyB9MddLTDznvkQk625UJBoFg2JLWwCzdkLfF2acSRTVPYV",
  "key5": "62LdXGGguKsyqbC7jEchMGkzGfXFgxVdqoxH26jn9RVCAERgyLZ5oWeauzJ4Qiwf6699qJmTCUvpk9nXkytE1vhY",
  "key6": "5bg5Dzd97J7VjfQqHZbxMHXJiz4txMzgsCmHynbUa4pjFce7o3DHLufuFXhARPcv9vQWLQc4PxFDsNnyRXoBLpEN",
  "key7": "ubzJkMAd4n2f38aShVb6z9afkfhTJd6aBjBGpyNtBiY9dgX6TyoCoL7gSSb71T9Jmkwd6ZCJhT3JaURtXJAM9P9",
  "key8": "26TrLk53cpBmTR8wnJdwuh7aofsyb6WX44PuS5ERq8bxUYtzi9ncMSLGJzk6mJK9JBgACkECNLESwZN29G6VcgSw",
  "key9": "3iKXFodddAs8ixh4YbbLazjBf6iysXSdprz965a3HpxwRhFVfMzkyr49tGXGH54qkmEF54YjyhSsKC5GKEuQia7H",
  "key10": "4UxzzmRabwC2DDwo6ZNxYJmgE2nSEg5hnYB1ptXd6fdoDZidzXFTpzrxwXe2kaoXar56uy868mKtEaMEuPyWmXry",
  "key11": "5SxYyLWERCbxHyPpN4sE29jiNP5MMekkBJ623PUeQ3HQJFcm7xqWnGvchyJgthwjR7f72bvViRwbb5JePFxJKxYn",
  "key12": "3HhCbeZkJzTMAXMKtgDLNHqTt7WDyZ3chJ2thqDNnNw4Tu33v4KRb6kF3Sr5UPNszkTU7asfci6kXvYv3mU9XZod",
  "key13": "34pkn63yL1vbjGN1HTjFXVmtfkZEuMDPgZeRtjCZHACwjGaC75iNb7svCGKF1bot5nqo3K5EAcbY59z7J4MJRx9F",
  "key14": "563RWisuJ2LNgQmyTLuc7YLgt9LavwRKv2ZPNUh3mYySKreiCb398NQsRSEdJs9yLQmjsPxe9cBH3d8LKQJ5eN7y",
  "key15": "2dMHhjAQZEmaeXX6kB2RUPG3K5efZ3asJ7k7oxYCXuzWH8qdCrBG1DiHDmxXAzoDP98925MVkqBWYQDK813ZeUts",
  "key16": "3nGN5joXNBys1cZt66qwUqhzRNeZdzVpZk7opqtuD8xGGeTfHscrmPsJrwZJYrmgFkhiFhNZxMqmi7L2xv2wzQ2T",
  "key17": "41b3nE3EdMtPwANc8p1DSgE4j955E8W9rmjSnm3LtpFoQE4i1M1wcRgQS5p8VvbH2bKAFCfkhnimbGuVk7WNUdjZ",
  "key18": "hBEYwBk6YiCFXXPtqx2AayBDYZ1Tyiot8Q3RLprUXqgsrd9Tv8j7djGaz8Ub46pxzMWEn4PCZ4RitTED88jfF13",
  "key19": "3FFTfrJVPjF6ymCvtE8XyvdUsD9SitFmsRi8dNZyFUmZWxnz13NtYH66fXh4mc7DGm8EfB3ZhJa2t7vNp7YiMMuj",
  "key20": "uXPogvfFSJDB5GKCRuVxWbzU9KEyVJVApgamNiwKYS4sHqyH5Rj31AuKkwzNWKxWR4zpn5tHrXVGVo4bhyREU9V",
  "key21": "kMjoPVZhUkTTthtHnB5FV7k5SD4DpLpjpAnhx1EYSNDSAcQumXWQPcu3ifJ5Xx5VSwW8yJ7Tk2UArpPH7Hwq71i",
  "key22": "4P7c9E4EqTbknpTiCJgG9v5t2L2F4iHSQFS4kVc1N12DRzbVqCrzKkFZ1qoGiyRrUWz9ezzbNx7wUpL8MwE5bFFf",
  "key23": "2cNTJMqY7Lh6zAZKMpVYdAZ1QeRq4FQFwnatZc9rZg7DLWXMJAFpCVgjLhyBYAzC53obD3ogjsnTBzRm8L6o2Jws",
  "key24": "2JJ4M9QGPYNhY5mZBNStoLQhpq6HvpkpAFeKHcDEfDe7Zyrbx3SpR5hnQkCcF9npGPVibazsf9aYRTuGjjs3x5Af",
  "key25": "xXCY5ikcRTs3AzMy53dYdDEQx1HnFDi3tyqtDyXLQQbpEvAkpVi2Xpn1q9mKCYJccLqq3BPsVwFA48ruR3DBedF",
  "key26": "5yEBw3vPEDfferm98McG4A3csTjc721VnC1ooFGZvn3DZbEXZ5LrREko8zTcD5kWv4E5xGS4qMuvigEcPwaTnR6P",
  "key27": "amu57sMyR1QKb1vvmZp3vx1yEr7XQ2nDRRXdTb7u5MJFtiBhCT5B1Z3HVGMGh5ZJNcRuBQPqo4gVKMH8v5zncbJ",
  "key28": "2bU5ta3Xi9nmn4GewNaCfGRhf5sB8sPxPmXXX4mzxq2gi7GXbB2zs5ZMBTKoJTwuTgTndMQ4q5Bz8HCRtEm4Dcm",
  "key29": "PTzQyuhCFtMokeTvipykXPBS7TzGX19tSQfi2FvvY432tRriNgYMrBEsFCW54QYoiZofLGYebjqv3wHedGS8BLA",
  "key30": "swki4PD4VJy1mNL7vk71jVPdP1EpDzyaXARALLgPrLYEaRVRHWfktGvcJBwwUNmcwDLhL443rWEXUK4RVn3pUbn",
  "key31": "3g7D8QLXVi5SGxiFqMX9iVdts63fm1qsv64nDyVYBmo2nT9GfKKyEmhYunLzzXmH5RnEqmc9NCvSzq2QuPVJhg5t",
  "key32": "62SUEJjhQBGL5K3YirTDtGgR4Ju9yiX9bLBMqWg6DBUp2F6jUEmm3aVUQXghTQahugnUvHnzjc6jBGQUx44WYTfU",
  "key33": "NMXxneXtxgXcyfnuoPTAD85PFrjdF9AvuDFvhJaJjCWdMqwL6ufdm1qPpc1Qsxebufd9v3VHZjLfCZipPZMhfsg",
  "key34": "4d8jEWzBV5Qas3FCLBXhGoSJ5dRqzU1qDiqsMPoJr8eEhULbsJTep9Vfhoq3KproNy1PZ2eFtXCGKht1bwBAzQ3w",
  "key35": "4areBDzDj11TtVNzjDv5Kj3xGLBPJN8BqHqT5KVUSorXkP5TLz1enU6pMTqBXZJen6NZMGjb7JRqgAxPViQek6cL",
  "key36": "4XkRNCsWF9hhKrKvTRbxuicLeAr7UXkubzXirZuG9NGx6rkxymjZUTxqeB8GDgi9XQp1Tp2MWFm7SKzgZX9HCnY3",
  "key37": "3v6P748BJM7GiSGKGWSe8DM9iVUy7bgAPAEedkKdubJzEtTePBfaqdGeBnnzkEpGJdiLqWXw3M5p8Frn1DToeEVs",
  "key38": "5H7qcq8DRUTZ2c9mCRbcezszyDT9kAGYrF6hah3gruE8wQxVHFDFMQrBsoXFpUDAqwC1AR1EW9kHeYmVDPh88wBx",
  "key39": "4LevVGpNuUf72uThSgAPdiKChjXcqrbS9LdLSWT1jnbw6RDrnJ6DrveZtwtmhtQnWSFBMMZGHNbnHxy8AU21xXEH",
  "key40": "2RPGnUoLXAcQ8tLG17XjKh4W4cjDNcGrxREMFtrkAc56ihVTcx9rry2Z6kTn96YToMPaN6vHKAoUjipwuKbKG6DC"
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
