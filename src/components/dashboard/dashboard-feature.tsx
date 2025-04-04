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
    "2VBaqkFFDbb8EHvKeAiGyp4HPZ6mnyM6bLxigHfzDc9iEHCAsSrsW1fJvt8ABkFd1arifLgZnEx4zpQMMCwvmT8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQivyUQP3YxxyoMRiL9pNRSxbv1aw1J1Gq7T9MwSmFQpvu1FBknYthJzPRrsbHouUoAb41QN3ppxVNeRwuWT1Ed",
  "key1": "3SLiWuSjCURZJuqd2dKE9k7YFZvngvhfUvnAAQTXENZHCF2WW6WTXwHBTvtrZzJBauCXsGcNB5xQC5LXhHFDrAKV",
  "key2": "5b2VLwgcyoEphPpKHj5VNKybMAv4PNjAbsDAmtCJXox73LesKoiGg5RiafUap2fEtz3q1tji6HoPAsUAfJmtdQLY",
  "key3": "oUTiCDbKGabPPeSG6B9HZLTc7sxSbwc8SMFUE4HJSzEZSqhxCkW2i1by3CNvWzb2iPk8SNhxfUTx5jAi2a7Yhqc",
  "key4": "58pK6WJ1wfC1k9tQxPWiwFi1bLdjfrmXTUG5qZWavWrfFUCVmj4Do7pNZ1wPCdZ9Z2cYrGZ3SWcAh6kZN7xU6ms3",
  "key5": "5oQa3Z9ZQJwxwmjvexJskceKjUA3EVa4u2ZaCQWyhgw3AJ4r3YEA3GyYapdy5S1pnCgXRoYggKTpsz1QrcygkGKx",
  "key6": "3YLK49vy9WiLDFwKcvhp9q63T9M3X96ig6Eih1nF3LZvdBuepH7gCzxQCBJ4FksrQecz48GeHLd7BkmE2hM8BBCV",
  "key7": "4sAQLc6Ar4fYvmrEtKSQYJDxCxWsAxNi24FZpZPWibE9vkBFAp1XG5Wrdjr34xqeNPsuJsNbEbvYFhuBVoaWEYQc",
  "key8": "62cxStqkSLhfbR88bdmrqisJnJ8rKsLbrD6UXgPuA4EuzxTpqtGcqCGc8bGzbrquqcfBaBKfMJbTgR12tq39xYs4",
  "key9": "o6D5HxcbF5wpkP4psiLQ2dycftcQ4d9bru5BzonuUP8YTNkqutw5sJ1mwo5cpeNXcFKKHZuLDKWS8b7aaaMTsHm",
  "key10": "5QEQqiFE5MWa2yBk1QZ2CkJGiZwvSpk1gFPsw3T4Jkn9HBj4Zh39PZc6T8qnDfbvKu6Si1Rkm2thQeLGP3fxLBWp",
  "key11": "38KGDmpaF6cJDL3yLLUjpGqFw3pgbjvGPWznQXfyukk2bj6qLArU8FpjrtV19uxA2GmHRt7YJeeJFNKHTQbBtX19",
  "key12": "4fDvNyf3PqDfS6c6uMZuor5WjWBoinHRCXmqrCC2xeWX9qR637EdPcttcveYdDjHNVgUtUgzuTjDvpjcstGUMxJS",
  "key13": "3VGT6EZxYZG4HECPp37iwn1K7nTyFXG25NPahkazgvrzw3xhg5TWYLWuFsAWbPPjUgdajPvocUh3kFWqbuHw8rgA",
  "key14": "4iri1VtKBeSsmdxdd8Q177MM3RcFPFiMBzG8ZJEKzoMoNPEcn8QeicQWBGinoiRvyN7uAb2f65juMYJkmgU2TuyK",
  "key15": "ZFurt1vTZGFKYKoXxZfwzPq6YK79GNUXUpJbBaAus4FvFV3pigVosdoN6fc5dKL19mJmw4wLBQ7RxYpNo3sHUC3",
  "key16": "5DUNGFuAWLkhTArAZhPAbznf5eEx2iTtQzEqYduixSBqqbpvue3AYt8xTo8QyduW3bxdeMeQ5N7Hc9Rn2he4iwqo",
  "key17": "61hwwsmaYnv4q2gsmjJ4yz1N498TjiDBDdheEhX4WiPDS9tBciQXiq5SwE9hGFp5rd6KtxEAbXpMXRchbJuWqGu3",
  "key18": "3i7zg1GfcxPSPgmonzxARBk3nXjSevy2zdsEupyvfaQvwMVJrNe5CkeGKAVqMRdQH2GWr8Kccb4dndDytEhNX76B",
  "key19": "4n5ku748EwABsbUm4Gq4qRbrnohTyhxTuKqwei1C15eFD3riDVQ1gKktGAptGVipTcvmS1T2J6Jri4yfTJqqHhui",
  "key20": "3g5bBkprDU7gRN2jf3Lwqb25zc2tpzimXdfHssaQiGemb6aqovipAxzAWpPntRVN7oDerkRt55LJg1CLZr2hp526",
  "key21": "SEob7kSKwhzSay6eynDwcaWkFDhGYAwMw7QnBEnP3wGzw2iRvh9STRMk9cn2dYsWp4ZETWbuWu5LxDLJZV1MBVn",
  "key22": "2i6juNyfnDnCC9QCrDCm13HGq9f9QSmqnsiJLeCAMrHHHvV7zkgHBYajG3xvpKzwPxZPtcf5By2KcZ4veCfYjgVB",
  "key23": "54YrDfRA6yh1ngvUc7HSAXqvmijB62fW16R1drZwf6qJZmZ4cigmfaGG7c7yMT4cNZqM6KPdhAhJKHS2Cz8541Zm",
  "key24": "5JYGMu4AXJpVz336SVrZxGBRejUYPWSkeCZSpfWxkR4kjFA5o572NyWKb9xAjJDdZ9aCM48Y85xiSykP7kSQNobK",
  "key25": "asHAxBqj3tgGRPt7mya63Y4xTaynr7emaa5C9meGzBUMPVdtntDMy7Rr65iQqYyrymw3ukVD1oxXRuZqgbe5vDT",
  "key26": "47JWtKcNTgphFnDn5dMdS459qXkbkFYLSAQdDnMt9fYEcGhGSGdv6nN8Y8hutwB7ikFaZMGVfr3gsfsUk9fb5KAa",
  "key27": "LrLWLs7kcBVYLtjUwPhunUpdEmTSQnuuJYSYJAizYbjwA7SdeDaC8qHNtUsuSR9FLDrKBSkbcgfMGaFJ84sZVfe",
  "key28": "5DvYwfUxm8g1ibf36kmHFjYY2SwMqKoGh4zoy8LanxUwa45QtvCXpr4ciEBCYpmKVno8MjiKXcyuAFHCjUwNNwds",
  "key29": "3u4dxWV8KGdGMADt8FxbGKVKjCCbdDjs9s1XsbeuDFKd8k2usjmrKQoZRopZ85R5vsfkQcX82bo7usS5uYWWi5HK",
  "key30": "3hFe6mr9PuShF8zsg3R9PWf91SrsDyqFL1Ugbhn2ZHK292XFpJz5yYaBa1VsYAQ2qwcHTGD7abLv9dMiDmNDHQfz",
  "key31": "wq4M9aW6krLcEMJjVLMdTqN8VD1mKTEW84kwn5y6yUJYfS6mgXwmfDdYw8TN4AwqhyJ5V5E2F1LmmUv153wT453",
  "key32": "32pmVf2QbgsH5BAebLHcMD3Qf33sS91Fx3F7j9TM6sYD3djncsWmCJWSG6AQGdS1ad4tjQSpurJCLk2JNahS4gqY",
  "key33": "VqgB6mpMa2WQr2t4SCVBYpaCFAFnSccFqDsdy8VwqKNmVDJ7eF7V9uYzKB2Qiun1aMYEPiMFyBw46vAaWsTZH4Y",
  "key34": "5u6PkAg4GKAVCzhRA3ELfUCHPeaJZCAnE9Q58jBpWknEhNcjJsTUN3tGJdTs3tj9Afg6gPTNSCJd5paT5o16uyd",
  "key35": "L81DKbKrh8i5AoMmnb2dSsDZSCG4QhW7RNvGGzSaiJ6eUADKi94CxMJx9cQRvQvtKRwbhUWZyJtoFdnyh4tZB6x",
  "key36": "35MbLwm2Z8MM3PzhGm86d3VjuT6vt1igsCjkrBiLDWNi1RuTqU1nYhabMFYr17WzBchysmZtjpEkKPzzaFk1zG6j",
  "key37": "5oRP5K26Ggdi23YMT8xeak6CKnotEiSbAoA9UqNkb5YH6SjJJSvuzRmuZcVKnjAgAw2CJXLZJEYvmoQrnbwBD8Ep",
  "key38": "3NNjDdZxHihiNMepV98rRtMTwte7aZPf2cdVUd7btFi49wpBnGShq5d8M5YfxSWJ65QAgUXUN4Rwesxonoe9jK1q",
  "key39": "9zropKZunPvaYrtu9rpp2iepdbCitCEhMPS8F8g45qUvkQzzMKLpYdcduCfBCU65tyHDnZXFxTLkxMfR5enrTKE",
  "key40": "4JVc4Uf7mFz5MFAvGvAbXk8sBfr72oaJzxK7HkVteXgu7UhgPitPXuRQVBxVapBhYfcoqCfBKAJdxPTkjgxeaY6m",
  "key41": "4gV9kCfo2Dx3QqFX2TPrVtVs4Gv6dS9vRZYDkj3EsgLD1a57VVHKGgfDjd4HqQkoUBSgxNgEc7KDWWSKwXqCtUVZ"
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
