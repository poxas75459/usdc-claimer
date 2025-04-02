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
    "5HMjr4kadAZgeQvJRWBzpoDYQDJWuTWB4nvMZEtX9FQFT4tR6eoQzodvRQnjqN46XokLp7hujeP1Dx4Vd1Nu9np2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zcLHQR68DG3iSb2Vsm54uJSWcXvAXecBR2tGPaHW9ZshaARjhvnHjst6NsNjnQkBawWpLfHkNbrV2axbaS4DrT",
  "key1": "37LzDrHqiWJKAxMcagexqhjpnGd52qdFHMagt39P9ruQgEyYZtAMcYtosGy2e6zjUpQhXi7VZGnNSfo5eP9GABrj",
  "key2": "53jR6bhQVQXhGQ5uTtAcofw4EgLMZ2XqtaHaJ5WgV8cwH1bV84gtqMfo9DTFfgm4ZDjLfFAUmSiNHKAecgYX3Aip",
  "key3": "4f7ppvVULWBvYqHQmwhXyMT2SGEcQiPsL2nyVUhBUbSGaDnyvoLF6pbE2Y8uJJYzF4X44nzrrs2A63uMqR2YJcm4",
  "key4": "4bX9BBdJ6DYXvVhrjW6m9gocJiTtxN6uehy8uVPhD4g73ZZ4WP2ufLxdJ9d44sf12MR8NQ33cL1cHy5HexmvK35C",
  "key5": "4i8PX2p3Yan6PUhkp3vUJqCZ1nyhqpXmWneLFhL61CFAVcNJttoGLycRm5LZVLHc5Y6E3eZ8VCc5Yqz972f1Z3TG",
  "key6": "4W42pE25GZK3hRNvY6HxN2qXfNWpUs4RPafCqRZgSNrAgUdTBkVKSFunZGPHF8Sf5pgHv2ub6UDz9zvtE4kzpAFn",
  "key7": "duZNT9BczA2dyCFACsomoQSP449KAxyDkwE5nwAk5EuCW1UTy9xYY7fhyz7BANLs16vLaMHLRgJMRDGpLHG7wcK",
  "key8": "2p6PGmMmHn3EVQDUYPYqEEZPAYUDSMLGwbX1Gp44DbVegtxM4UUqGabz6QF36e5tfLQ8ebvzzaNMzDWQTnHic9oc",
  "key9": "5nkM6keYx2JveDRn7PD6UD3iNgpWTYCr7FicEW7nqqLvjGfMzqawpwiCwQ66ovDXa6FrfGGmpSSeiddVVRyqnwiu",
  "key10": "2tbEv2TfBDj47A2tSQiNw7qGLdfVkGq5NeVXZJ91Aoui8HvRwcZU1JaWbFrUq6cXtvpuhTyRNA6hpuFbFmrHXwKj",
  "key11": "4QbdL8oYJANRk4Jfr3AYSYHLz2ALMXxfgZpRxy4TuzrEcjQsFxRJ43X8mU4K8VHDqCGtn9xWhDvLn81X15hdBkpk",
  "key12": "2aq8F6Q6yk5Tjz7Gz3ZxwEqRszVT12yifyfES4dHn6yWSQbrYet7KNH7C4aZm4vjZMCrTvai7p3Amg3FvvGcDmTN",
  "key13": "3ANbyNYUSo6V4MzL5uFU8wpJ27AYH1A2jVf6t1chvRLon9dg3jWM4BsG5GC1d3iNUVziQnbJM6kHqCpRuWzEThHQ",
  "key14": "3Ln9ieLMhEFCzTFr99HaTW3oa9oX4Lpoe2vwYaM3PDNssMydvVNh2uvoFHgeDsjLeJui4QP593Si18pQXd2xmGwM",
  "key15": "gwTMpmpLtzuWrCFGJDwL8bNGtVC8E8Bvk6e8REwg7BNzMLep5m8e6LZ7TXE6WBT6WhnbLpCgQsNXucLVx1Fe2YK",
  "key16": "2umLAGdDgkgNgkLSZmBviHRhC4nwnVqVdV6KsdNPn94vwTkpu5iPwtp2CMwcAuEJVwgqZQdTzzaaWPUDyD6ohkFt",
  "key17": "t23NpwvdjcXWgAsjkK6MbfhA6peGSef2eAxHo4hFKd1YusG7uUL1Vekxy3ujSTB5RH5p5PTq7Uh7K313xpQiXk3",
  "key18": "CUuw32HSoTdAWV5cVXPHmJkhN7BVJHoHuE393MQBmuVVUWKsuZtn5U3YytyHGiEZrMfLHMAWVB1zKgyVqBY8oqj",
  "key19": "3xbceodCbTU5umXoYyGvZb9j3cpMMrCh1iVbDP1kGks3T3fA4UecTiQpkPhwKANuLLdkJWXcv3udbFe1mANyFivj",
  "key20": "3K3FmJdm8E5FwihNVJKuR8iyFDVC3vi4hhgCSSW6XvVQTWzdwX65oWRstKEfEzotvy8K3dDPtYExptDjAHkdJpTZ",
  "key21": "2UEX9qHCqnbprLgxQSQwP1Z9fZGMAf2GQXf4CYhVmCr6HQy9vLdwbZh5uD5T1LVVyNEJc9kgnoTcEAxkaDUbeCsZ",
  "key22": "58TDbMscxvcRTPg1FExU2aXzL6vrLZZPjT9XbY5V88JZL7Apf9fsnNaaTsJax2EEMCx6gypVeGM6nc8b3RHroGZk",
  "key23": "5QjTaJysujdMJxGu9nufhVr1dEYk2fSKPfTiiQDMWubq9WYbbmwQxYwWHrxFTA2WTNYveUD8niw4BjwANirivjoH",
  "key24": "4Thjioovqi6PbiKnyko2rBedQyGJQEMV3N6UVS8QNwJE3bGtmZyFCebCLb6vvQGm6G5y2RN12UJ24qXLEuhnyHoZ",
  "key25": "5DiBNFRYx48wTA4WVyHgoRtgW5pkDJW6NbuHZf2bgXsV7JnHhtZ28ZBujtcarrb4QMnm6gyLy6JsdhYpqzXQEzjP",
  "key26": "5vPwPTpBQK3T7s8tnWXcCgKXwZhiSrWFgKvRYtkeKX4NSooW27TnvXwUWuhzcaj8S6ivZqYNMgbmCjXZSHMPfvDT",
  "key27": "49Ye8t1JsCtLj2imm85DD9MPBUYxDEMagPifok4X8mWseAGtc3XuxUciAgMRP9fEWVrdjng5hzWk2TKXCYR3PLVa",
  "key28": "oowZtpMYvwC5mFyEFB1zheKoMFpGzQqkcRiEmJsN1a2Y1hsL4KXLu5EeCE6oaYK3KWDFXfqjYn2aqgPAc7vyH7P",
  "key29": "2zjVt3nzhwn9i1xVxTXZwWuTntUVN6P9WCm4vDVj5EPXvdEfe44a2gyCXSwXWovQMWoXERm66y7YiFHUSABPYEdq",
  "key30": "yXyisfKLjbv1JnSaTZQafJ1ckMeXhocBSD7KJKJfSAUuiWFKNjPiXDiyKnijjquLL8ZRmEntjW62bTWThCDiS4s",
  "key31": "4qh5vqYNv7ymG4Qirq1qEV9tY4pzoz8DEujeCG8vrLYKZC8QxGeGvzekbZKZw8QpT28L91CgS9PT3dHafHbJydgB",
  "key32": "5zV1uAynnC2Frc9C1ZVhpAtfVGDuagYj5gSzA2iygbRehChdipxuVvdeESaAe7QWde2EW28xW1SD5FJtjDJbDNvB",
  "key33": "4t8RcJDJ4GMiuAezYTar1C2QhhSB2p55fCfRRe8DYA1a6Ug73gGbTgKqnyh7FcSs93hspPacJ4bwJrKzTa1TPog6",
  "key34": "4C54Ej9BqizLHqLPXNHYm8huXMxcpKYmd27Q946gmguYMDVWAa843stvMGaD7goQCPftG8RKpKRnYmSwDa6jZYD1",
  "key35": "4uBoB54fF5muBZYJMENQsz4oia3M59kxm5JRSPbzxF8z4SEib6ge3njGZaSrNpfShif3m6F6FN3kDiBR84MKZdgg",
  "key36": "552PBN8dEm19gejPuqjqypMurCFYXhxFA8uSs8vPRysPKFP3SqZ2MTmT7iXu7mHNERYwSEfoqMKJQChu11rYfabB",
  "key37": "3W9z6M8C7867Khx2KL8CAeYyiy9XWUbKApiMiWtZZVZZ2TB7mojJ2dcgqd9rL41AgzK4k1kp3EsGecRvdurf1VoV",
  "key38": "3h7VcQbyXoNfRkwGqzpjP2ybPMcXgCv6A52m5yqUM2dRQq66va5me4pWp8F4dgx7XkLJWqSNCyyL3NWfUNs8eVrA",
  "key39": "Gs48YRWUFqTFhBh6vCzJ5pjTg9aMM5Gm5Gf6AQDFEDvGwCHW59FTLV7rn6m14QH4Xvzad6fVqgMtnsffar2gJSM",
  "key40": "2agnyuGtWhpszAGiSRnbiSz1xwmjJpfUEfUGrbkrFKh3LVeD96V9LFEwUDwjXoL5GY1HrX9YZQzKG4z6mEKYrSJp",
  "key41": "3iNHPvGhb9dSawt8NQmofRSRpBb3kW5yxmFRx35ivTb4dLZ4qDYBVzwd6YFTTZjMZet7gfecHwFFHiqH2nMZCNcM",
  "key42": "3yZwasuK177StEnAx3EarC7o15jLQQi9q2QYb9SWuDkMnDhm6eBD1Qw3HCDW1ok5dXdMxeLHUbZESuG4eAx2WKGg"
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
