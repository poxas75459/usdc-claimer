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
    "4smresvsoWAk4P4pLLt7zP8gzc9iv3vtTRr1F8e2wZgZe3ei9nE5chCfyJbxfaGngXEBLJaoDmG33p4A2GTpPg2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pEHWvj6e9pY7UcP31zEnupZNhjbYu3DXxzr7hz3TiDyBgbCRK2NomXHsdhgeSsJ8B7MGbAuJNii3na5eZtJ4gbd",
  "key1": "5emqyFBTsXNzoGMRhpaXsSdDHzbpKkZYTNgaejZLwR6DR9AiY3hPrTzBJL2sWQuSQcyzx5pVvP9TQLfTfxnwwuSY",
  "key2": "5U7Vwmepre1jdPzxupb5sooUMZTcYMLUE3Po8iUwJXyH2qVGJ4aejyZL7xm1JH9VZ4MQMuamL1KtwFQriwbnWPNf",
  "key3": "5XyeN8ufxSEKvHP18Rhicem4UR9CRhVTrc1r1wcxRnNucyWojPLkLQBa8wsoarjckZm9YKSWGGePUtegjuG88m7g",
  "key4": "2FQE5G62nj54TGpuZnQ7PE4V5NF3oVMVP54fhJ6YATKzjZ4s1FrKpakB9yQrQu3YbsDjBHcuE24mP6Z5sveeREzF",
  "key5": "czkrMLJNQ4FapQqMQNVFVk84NABr1DWGn6QCojTnmhk8LQ345xkV1VozxeAz65MDskCCXymaPPk8qM59jm1fNma",
  "key6": "3nMamMzaLFHZ8nVkiJFJL9NzbqLbqsoz1FCsFdRJJVpr2EpLRQhSjgvGa5oH9VYmaY5uDAXuoNLLYtzujTmog3JZ",
  "key7": "AFe4ta6smRnuGpvBdM39NyanxwfFXi6dpHbv5XWdEEcykTerov9ZyeWAieR6uFuyYGPwWZn3UXvdcfY3MQf6xqh",
  "key8": "4TdPygC74nuyozY3pG8GEnMBKBRcjMEx61SkUTb92vVqDvjUNR4QaSHbTUrE4YNauQQsF4sMXTuVNwRZ1VhavhLm",
  "key9": "LRci2siUNRaceGQeuaAS5JkJ1nVVgQEtdJZBc8kwSXdiE9uxKwz14pvWLYQHe9QkGE4WVF8nTNArtgumTNiugbg",
  "key10": "46K8PLNDajdmaoxQqqLYgoN8eAXi5VbSJj2cEC8Pm7hzcginNgYpgaVAgrX9td98jktwUSJsBz2iS9tu7XKQfETL",
  "key11": "212ieFzvAs2L3ynuB3LVKuZbzD4cf13rxLjrUpXxjXHTrnhnaS41MuJUXacedpsZ3kB1Y7EZ61pEu2WTSmPCEGcH",
  "key12": "4qVZ8jVNoZRC2ZeSbhRCojqiHKWEtwjmoczwL3EwmQDhq8SfDJbje8XgpNCmphvH2NJhwCSYaBWaUA4EVDCkWHUo",
  "key13": "536uxUBKdAhR23JExMT9y64M2pDahJWnFKn3TkXvA2qXpfmSXRY8z4779jUJ7CGf6CBkTGuFLSrHrLS9xLGJpJW4",
  "key14": "hiXETP3URJUQX9qvgG8PGG5UzwCZjznzS2eEtBNbpCZ4YfGnFdycc7UZFVgzBYREvzmrXHhTMga4W5aktU4ron2",
  "key15": "5eLva8uazKaXQhSY9biVWrMew2Lw2JBHkwxiuadsbaeELBbSK7zVe7VLaxxJEUsfxscMnUvizy712QKQgDtXGP4T",
  "key16": "2WegB5g7T3y8nBfBTDfi5rqqhCdwx2qh39mTQEpvPSi5481sttC9LYDBAuAqkPBxuxrrGY9DMgwuy4ek5HMp9Bwk",
  "key17": "4gYSqHvXjyRofXSpAbzV1fC5W5sRRNotMuCLeQiEQvaSTwBnNmnCqaWzLTQsEURM4q5x3WwXwuLHri3RSuL1H1ut",
  "key18": "245rPqJ6xJcX5PsD75paUeQdwnt2t4ZksK3wzwHWtn9W9gMJ2Xm6K6p8hY3kzx22XcLqQJ2WUgs3ac55sRkNDt4D",
  "key19": "34s6ntTfK4AWZpUBA17xaKdqAwBMpUQFdgkrjvHMmmtoM2mvRq2XiCXi9zYxxiGbetGLat5ETQACP6akguKhaLX",
  "key20": "WDfW5TP3Wct9NbzRVS6RJWpD6HK7KNUMBZGULD9FehgFMmRMv56p3DapEtQU9aepRh4FSp2nq2jRkgGJt1QFyW6",
  "key21": "4HgTvrpxXqt1ppzQ6RFHgCVLjwK2E4NLSF3MoDka37mJ18faqZfaTKq8E5MAB9eArBpNCWG4RdaXCXcsVZf5ipTs",
  "key22": "4kotr7YirvhLHPfYU77cRijwqaRTfUtuFedwzK528HR3RNP4RaEuYqzgnat3soTLrAc8HxtXfkrLGBeEao16nu13",
  "key23": "2kYQbwoHLJytrRy4E5wvJru1dsgC6YE6sBmm8oLRfTEuq4hFfPihBRTuyyPvhb8e7GXMgPsqqmjzx9ZT14Xm82Rk",
  "key24": "3bw9myA7UvsVo6fUd2s4aXWxDAjdPe485YKvegDTLL63pSXRhmyqXrjhKGtwT6TF9dpu6mYvTRwEoaupKrTkhmnW",
  "key25": "2NpTGV8Lw4QBWyP2vk6GJZ7QxV4itck3tLo1fcKATaVxwEU3HaLavSHkxYAkhTxFug6fwsAtufkXpGguiUAwjEBy",
  "key26": "2tofT5mrtD1DJMY61xdpvSnCHUK5JuG79vZ4adTdxJddBr8TatBi5Nh2E3Qk55FncBmwdeebPTSoSwH3aon41vUi",
  "key27": "3MkLQ1CA2w2d8s4qyDvUMQ3kHEa6bQ8p2oexRhoDSdZ23Q4REWyTHmzjUdfZibBq5imHtp53xNmBh3bPumjrekTt",
  "key28": "3BenhbADNc34SRgkjNkvva1FLifBdqZWXDZV5v8cszRcfNN6wqaWBJpe3p1cP1kA4WGSgDgNRFgae9pC6ngfSV73",
  "key29": "Rzqu4Pg9bsfkAsqoFLPtzUYHQEDw2Y1oFBznqFWG9zFshn8g3kYGxy3cAvTUpFtZmwpvAMA2T756x7bKzFpZo6e",
  "key30": "62tNwyKWQF8r83BFuuosddepk3GQtCzd1wdjMYsoWTS7zcWKejHgFRdKsyNQr38gD5US5rFYCXkeNELuMoaXoNrj",
  "key31": "ci6mN5BcfWgCsqyzBzfQZbq7g5sdd9vqANwakQ8C7EmJ1i6AWEkT4PVoGo9uAgDyH8PA5pTYPQxRogY9v5ZKeGx",
  "key32": "26ro2b49PEyrLRmhnW86RbtshFsJqhhStka4u9vEvP24SYNkvWxBMQNViUPGz7xxngyFVuoU9o1dUf5VkxReMcyC",
  "key33": "2qNGS2aU6LAkjLSPcBzigp8XB1fGimPXuNSnk7wK6gVYe6aKkQZMr7d89rWKUjpMyKzoUFetY7qhyA5hPNyb9QDK",
  "key34": "4w2KZoFhhAjBJZraxCvo5GCR8FJfT5q21opXYv1oYz2aJqX9RvtBMqgW7SgFN2Wzc8uKVbC8cPsgTNHAs8V2BkhF",
  "key35": "5Dw7xpj51p88NsfEsskJkWi1rX9Z7yCowegH8xJ8wZPfAQVSWkhgmXqN75g2NViNe3mcH9u7h7PugkSEJPDcWJGd",
  "key36": "522X8EVPoUzgzBdM9RKDw3SPy4EMdoN72DXRjd1fPDqHpLZsdU4oTQJkjJcUBvbPrBPKH5evc11BfieUPZdWTW1p",
  "key37": "GrzPvVSgDvH3LNpCy6eT6bQ1yYLRE5EckSMBBU9Euqf7CksJhVUGgjqD4E68mqSBf3783izPMSKoazndxRCUiX4",
  "key38": "2t5qH439HZAcV8xNAPQVjwA1NnK7Huv72k4bsWqrWzpvt9ejeJEWWuk1CNehvyy7ke9oLpu7RgPaYt49a7DXGEsd",
  "key39": "5ncWw5xiiVwgbR3Es9fKQSaf86zB9cXordnnSYPqozZb88zYtxsi4dUK3egAQy8AfP4SkBgHdAUA98pF5oNwcpC7",
  "key40": "4xUhrmC1n8HPKJjBRitvpoSGbaN5km4hn2XDp8HKXwAvEo6Cr8oYh2L3YzHVYuCgMv6QGHGffCgp1m1pBBAobY9P",
  "key41": "31hzCKGZDQcbCmRHyDAzxPRW1H8cFRHYUhBPCxeyMy7nCaCaqAUpoh1NAraHXoWWAvXytQ6q83t3NxUdgZfwot8j",
  "key42": "3N3Se1783xVKberxnbc8yg9BJYDyBNnFp9tondkRAKXYpskKxb5vqRH21AJKhCpX6wsat6KsH1RUJqijyoUeGBJZ"
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
