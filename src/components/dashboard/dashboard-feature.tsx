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
    "3meACEhroYtbWvWaHaEeepXfE6jZVnQCKMUbDkDDTiyphAoWyEpWPo4BUV2mvqZn15FoHjKZesGuBPJ1L2wKHTqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33xUvaAvXwV4vpGTewYnAwRvARjkUjDvUtZHeTuE7vZzjZGAr7Fc8ohftsW46drwU7PCV9YW9vsz2afn8PWq6aEo",
  "key1": "2veZh7X1b2C7YrG8pKEeByKZStz1umqXig8dTq1p2tQanqYp5XMgw4Gnfo4pcXBxeohbvmYTQtUD9r1m2v4Z1Y5x",
  "key2": "2VsbvqiMc2PVh3heot3YgZwF8VrNeMQC3eSn326Yd4GikmS5RdSX7bGCNjMTxkQgRWqoBMYiJfeUWAVo1n5bpExM",
  "key3": "5HPbJY25Zejak4aPV7rpR3ZxYRe1qK3yr1mB9sBXvgaPHy3sETFAndeusFgpnkSZaMY5N4wiE7KXiuWBLgU5knPW",
  "key4": "46dTqHsTL3yRt6nWFwq1WcboGnSgGYUGfPRX7xiTbSamVLWAdhZuUyZ4qiCaZDMdaMW72VTMwXfirqBjqd74tQ9J",
  "key5": "eqcX1A2bpDjUrXW8eJikZMrt2HRP3d9GKTDwVfWSKf8czCedGwSHmXsj7ArSPd3FvmQ3Yf34ZiuLgD6m7xBmoTw",
  "key6": "2JMztzaxg7UzPQdNJsV9pMoAGFackELN8WfaBrzme7MUPEeRwXJtBFXQN3cdwoSVY8LWzDrV4btA1iVzTVsDrQfn",
  "key7": "4tnjySr4XgHnDp65iutxKLxHYL4kMHxUbUGvm8c6kZJiZozhdrET2wocvB4zWxfZS8yAPQdeqMwgUYV72MF6ZZBE",
  "key8": "3DVw6pqD8K9CTUiFKGxsJJFa4rfpBhBABiyWCcoxKrJSPpRzUeXEkfUaQS7MoDn22H8P6DYxcST9inDmqENW3iKM",
  "key9": "5V79Li42yFbey8TSZBcttacjV37oLvLC84UEPSgVmi8fNkM4wA8aTRUfrNo8s2HHMGU6sFyi6hebYzn1oThR76Sr",
  "key10": "5H4Prh2AZr6bF1XgHYZdnrk344SkZ2bNoEn4fAXJZuUJiU4zCbP49DjcNzFamQKSbUWerAUkAyw3gHhok45oyJk7",
  "key11": "534DXDorfwboivv1BwoZnXczMTfYVbaEkqD1Q2SPQ35Btw6a9rDq8MQ1qR2YxnWaT4PD3N5qWC5W1gy2hLwLCCTw",
  "key12": "2DY5ShidxTzspAae3X9Wd3M89FfuAzAvjYcszRBmX5cK4tWJA6c5aM2U4RT6pSZcVLESzv62D6Lp5vtcDjx2wGUX",
  "key13": "2zfzvZ6XnfKD219a3UpYLWqMFEKnd4fXQy2Y748Zq4E9JpD74Tqm3G9PcF8XLM2BhKkrjwL4VEqVu2y3P38mm64M",
  "key14": "4DYdtHzXT7e7LQjQErecZe5zhG3HNghHEMQbbbw3khMDnVULFRtY1cS9nH7VGYcqDdEoz7xx1M9iuu1yZhoFpxTq",
  "key15": "4fUaGzhqj4S9DAzH1U7n2CqmBb2VJfS5TN1fdi4HvUe5Tn3r4xY2Rmxd4AxN6G47D27AUBcS2d3AUo4TfW9LARY5",
  "key16": "2Wf5Ji1jN4e26SVJHYmdhxbdN9tpzZmuTtunbjRfVR6PVXpEizejGhoVgVeYP7sZU456Rvfskvw3kXhUCmkQUt2r",
  "key17": "mGTRRuKtYQUJfoxANdCfcbN8KJLTfRPQWqUefceLvMb8TLuqusQX6vS3TvNcwhLtyDyMF6Qa5BHw3iedUFRhqdV",
  "key18": "5aigQKWFW2SBtEE38ga36JyHKm9Wcjji7fSSeodgmBaZtUA1kUxtCEiisSU1iySsLT2iX2ugvU1c5QxXeXy9yWfp",
  "key19": "3YfQuygjR3uhHzeoWEP7oFtoRSpPagXteTbgYpe7fUnmH4SQCaUziG73kiP3ToScddkdeXseMmHG8meJm3asBPAP",
  "key20": "3ScP4qZxAKGjai6NEN8nWtwZNzwae4tvz5dusbmfpup1LCv5BabDkFUiR6UzqhNd5nYmxKW5QHdnCpvCnC3jg2f",
  "key21": "5eJnHLvGrMGae2gPuoV6fS9Fp2A7YN5Duie2oZDfkPhVRmPv2MHusArHGRNGDJRm98Qg6Y63R635X7xuMhqwxGkq",
  "key22": "4nHWkkDiPWeFMdkAbCVBvGUA4dTy6DyZ2qiJ6qWCd7uKfizzAq9aLVJMaWnbmgsDEnGiMF2haHL4BKaPFyqdYddV",
  "key23": "5udVHu3uCK5n5oZ6QccCeVv3ToD9oenj7bDEVyT3eaYw6xgn22NNrBm5tW7DcRUjcD9ZAqHF9jAboungMcpQ4Ju3",
  "key24": "667zgubRvr5qkpcbyEVKoXVfxWFvRrqUdMQLA47q1cmyvQjcwzW74SwagXbZUzHbAe9Zy5JCVqaYpfrG8wCWhfEc",
  "key25": "2AyyZmJvwJkyr1QDmVmXHkMrhjjMF1j7fvMmKdRCXythKK2MykCmoz4uUcfQsXawx1a3ycn3MnTjgMKFRJP8HfUm",
  "key26": "PV6T2BAk9BuHCpM4K389U2XoVXmTxdHLKi6zLqP4eG2JdaFhHDmCPmLoAQydfZGdtJN7wxtSPrqx6AC6DXS2UKy",
  "key27": "2AU9jN2WE7yWFaWHfYp2sj2wxg8rtcMy86UxD1oFzP9vrTZzcQ6T2mEQjSc9iRFgmatuMdVv9BpAoPGy1nVYAasX",
  "key28": "4ATkHmeG7B4dC5reZLxN1vWUkKhV84q9N1trP81VMMKT8eMnR11MwCEzwgXf1NqvngP23kd4LTN42UKmrveLgESo",
  "key29": "5pRrVHsNbPsNeDgCgw1D9F3miKy7nGFRiSh31FpMfzwpHQJaHvD59gdwUXaDV4Y7bgAhweSwVcnKVq8wpgN1pvKp",
  "key30": "no4Zz9pbFsehm4UBzWjBdLYcjfSU9r5apetNbdxB7WFKN8xtbrV65RpkiUAQPY8eE1uDphYVBVmUyU9eK8yt4x2",
  "key31": "3J6RN2jJmq6FuQvFu3d7VU19rDuRaUT6mGXbp7iKoLEq6TY4hcNdazoPFQQU6km5jxSZmzxaJdNF5vsCHMEKjtHM",
  "key32": "4EUuuEgzdmMqxtQxmgUM4P68VSHy91f3X9jHvdccn65EP1h8Mt8UHqbKwj3tnp6JLEoK2NMF6rh57UeMzFHeMZzj",
  "key33": "2g3noRpskhQsBsjuk6AkQkxcUhHsyzDpg5kCD8gDasAAV69ofArDW1VNfdh2Y93Co4GfH4zPCnUsbPrC6TJGKeKz",
  "key34": "2qhbnj7NaP7Th9kkfB1v7T26nRU9cZfTKbGYiQTVzUf1YDXAbw5psQSioyyx35KookS4mfVFB7i7v9kVDfkT4T13",
  "key35": "3yhEZFbxMWZHRdGMJTDHcsBPnLtr1Sc8NHNDFZCxs5brQADdAD8cPQNGy9i78Ymo6FswuduMDgGcL3fXZdVAF5bh",
  "key36": "2eNUnM9iHxH8Ay5FLqHu8tgCcJaHfLr4gQ9vDFgLDUXbAqP4VFQDAosvdjKYMVMdNudnrv2JL7cfFKdhzciEDSND",
  "key37": "31m9cZmabFka7JDVfDtQxqMRPEhm3woPwekmKgttWpzwdK7Xa1PV3cWKddRHo3tXYV7RtWMmJxDAnXKg4Lm3Mr47",
  "key38": "63saXK4ewaawEpqYHxbXsTPRMqn2W1xjbWqFbyFNwnWeyLZuEhCDqiSNtHNwgt59HH8QPXNK5Gbj99aGPKQWeJLU",
  "key39": "RwwuzJRZxYXk9jr1FK29cqBMi27VDF8SKP6Bj28dY7JXD83KkrBt7SzQHy7xXrvLbRLwBxj6WeJ6hWs5mZnGv8L",
  "key40": "YPiwG9NC4kzyumGp9xhTwA9pPe9wyZWXRAsXtSkrrynn7Z5Lm9kKCeUpPEvyrUfuW7q1wvq6NwJ77YkRYNefDSS",
  "key41": "MSX8qNAoVwAji5B1LEgLTwAsTFEkiSYtg37EEAYuRx7XB3vzUijmN2B5iSqZxZu5VqazBebr7RKdqHcEqY4dXtL",
  "key42": "49xVaDuocw6rqWiP1kv6bpV6DADRwhxB5pnaQ42Pt9LkiLrdBrRvKYoW6hiEodQEKAGWJQ7diF1LQpGc1T5Ht9Jb",
  "key43": "3S2YpzjfTyQVAA6Ai6mCs3XdZJnA6n44KRB1djkNQziAa4Cs6q39YLEd4KiKVKtuSB6QhZvBaUNE77xr2pLd9Lp8"
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
