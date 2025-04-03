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
    "zDCb7QGrTgRPHgq6tCdZ95gVLoC9Bg32k5rXqqsvCosNuPQiJnHyg2JMuYsxu4Zt9ZigxbPpede8wNxdEVSK83J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8GVn9EahLoX8auo6UQwpkwjKqvpPKdeGEuHPx74pEraDLcmaK714Axwz2My2Uirf9yMS2Rr731XVxWBc9sXKpxZ",
  "key1": "WJjVxC7YJQwQcCMU6Vdom17dK1vfrtXT24cK6fn9oGY6eusq4sBaXiXERb5U9yCgdJN81h1pdRQfCEVZYXDU3C2",
  "key2": "4fztzWGFF1j7sh9CBi8MFqtNcKYPcQ12f1BgJdtRLAmS1Tfu79J9N2kQ3Jka4kNjZhcgapCyz5nqh7Pu4aM9u6kQ",
  "key3": "64SytLjgQxvut1d7187rtChSkJ2oVXLxHH87xgXGoDNqABKhsToNrXUDWLJLk8QRKQqiD6Qh1FTLmJd8EqPqwV5q",
  "key4": "54CHHoHy4WjUPMnWfxR8p8YdHqVCquHWn6w5YkfS3rePM68Q5ezJ3RT38gY9p4dvFA1rWNar89p98T8NQoosEmWc",
  "key5": "3qyZxo612qzCfxBL5tD45Ntv9Kxu86BzHf1pD8s4ZU2s6eyFu7hQTi43Wf6MV1ebFVPtDYnXSBFg1hscaDVw2jAZ",
  "key6": "4n9HnFFZjusaQjjy63iFhMMjwjGx6QW4hJdmDyW6Cv3kgFbXaW1eo1Se1x7EzCoVKdxaRLGKyW3y7KG8ovZDM7Mh",
  "key7": "5msTyqvnZYjK8LpcBn9i6iyg8MDUKMEVu5h9uhVZyZhTGqxYrf9pzb3GwcupraoWEiGaC7YgMUcVL1tAM3HqWEFg",
  "key8": "2Gn9YsvSVpwxPZYpQAWQcaHbSw3JmJRrErbfx3t8iihHPoobMR6TRPv4yZvMWGVivDiZ4gUpJPVptSQ1RoYnR7qJ",
  "key9": "4KRKWKvoGc3XZVPMssJ3e9X13nWXa9y8grhsr9PQYaDSHeMa4j42ry4w2GXTRBjYTsqFwaS9N1TfFnrHoqMdRxZA",
  "key10": "4mvBco5ftvy9jSJCGLcM8HjB5q66VoYm6nWe4ctNh6yBWjdmtUYuHKA6wdaysxC2ynDwvMa3chtmjf1Bc9i2fNyC",
  "key11": "2Uny2F93Y45dLD47yiuWZQzc6wBPPtWJpquqfgmsQGS6PBhbVrr3E9PDRtyz8aNrqTx8vK9JwxxT8Ge6d6N8fjuG",
  "key12": "2W5HB9iu5nHTHgQnZvoFSMqvKD7Q7PyAJMqYsUk4Z7RCvGyVL6rUz7djSLoBkmtZtBXzvASkzR7hRFNekTYAKca",
  "key13": "3TPu58d7NjQpvqj3Cvpd7ZM596buk7iKXcamEqN6T1EAxJ1BZd3BxqyCtvLZNfSNXvm54WcJPe8mPMzU5MBqk1QD",
  "key14": "4hq2oLBAC3A7JCHiuQdAxSfWqQwVxnLK4TXgpWhky23neHpqkSWijb5YMUcVz97XHDG56wViAYJzsbrs4MZ4VJHb",
  "key15": "3g1qnN29kZDvHqtgEgvmqQ7jNKjZzKNKMPDTfMzNgUbanwwZgTy4zBvVRPbPwamoiJkE89rzHvZw8S1AuzEYWwBa",
  "key16": "5SnRaSdj8v9bE3apNQxnggThV243wUXG1fe3jbRA5vYGsaNZepHACFm8jxBXFcDEv7asR16PHni7EzDRxyqbC8kn",
  "key17": "4Bekd57FaSejrbhr1JoZSYL9hKhRqkb5rHmUth1iKmjhMXSKohZd5RgS7XQ9X5n8SvTufJdaQysnPVPnoGWsMN9p",
  "key18": "5nXU5dwfjbJugbTdE7WFNb71yiWGKU5HimZHzgeVXrgk8KBcKMRBfr1qJERR1tZhMhhJQqzyBhGPPCYMUooCfVjW",
  "key19": "omCXZPuFXvriwcgfUw749QRHM8n7m6zs9X2EgQDAeybTiNvnqjuQ43STJkU4yQ4vuh5s2cg5MEy9fF5XqKQn2ZG",
  "key20": "2psxN25TxAyxRkArvNAiTVJLddSSkRZ9otnrQGd88aKyqpRjPCnhooqeZbqSCFaH6d3Lh4728oPkr5vwARKYcU9y",
  "key21": "3U3jNZCfXRcZjoiZvaLtSumXZg31bJA7tKpqjHFxqPNVtyhhM8ebmVpiDot2gmv6xMDVjr76jo5rmRuJza7KhyC5",
  "key22": "3aKaR1jaTgoBe2ZGAGGqdoxAhMTB1x5qKZc2QHi4RpraF4TNMTthAMmW9sg71MwKhqj4KzEvcKAJvYU1RS1ohay6",
  "key23": "5QLjeChaJfkusBRzmBY5svRSzYkBy6GKZ4KNJcwz1HMHB6Q2zN7S68fRjfG4fmBVPcZfgfuVEvkfqnrJLvFhfEo",
  "key24": "3LgBqay6c6vmTYLpK97HqbGYV8ruTN1QRaDwffFcGPRF5NkzpfKgMW7MHzAMFGifPuoSJboVXuNz5o3aXdDAsZEW",
  "key25": "32mwdmApVTVu76qU89SG4QFnWwAGkhqXhwibJtEvJq6GM8GXa9zZp23QxKt265zkPjsRoX2xgp6Hxtr7p2LfvP36",
  "key26": "46GA1gra7x8jiQvzDXpQHqEoxH43mmTvPPr1VAY8MgvW7Z8zovX7vsLwNkbLXetitKkYPxLxGAafLPgxkDvPQx7v",
  "key27": "2tCZ4RctK3PQJZLgsN24pq5ptfJbFja2Rb1guh4srGKoGGcZZ6NR2tEGt1TsSqsyLCG9SbSJb17BD2HmvHD3r5yA",
  "key28": "3UyTQFoG1uULMtSF1b7bvpBCFpvTZqiLqkBPaAwsu9Jy62NJtwRDx7CVtNEKT4CrmBRskS7wjMWT68NX1sD77fr",
  "key29": "2dyhmwJ7GCLbuQQLzXJ8ET8Tub15GmnL9uomgzj9YuttddcH4ynRh6d4t7VrQfZeCcTESkSNQf4yGA6CdC5Hbudv",
  "key30": "DqAxiJ9o3T7MJ1hqWuR1Fp2ika8KfwapBZG3WpaTodSTLAKuPHb9fUWpHF5qxdTxpr3SpfgRSSUGt51P1EuNxny",
  "key31": "21LenTPNUavgCVb3xQYsJYbWHY1zzHVHzhAaL9gYmMuJskEuYQ2Qb1Tit5WAizAZ8sdvm16WkawTmESRGmCaoecq",
  "key32": "36nncKDnvR1tFcqHv7NHkWncmhWm4CUBUoZwqKX7WUAZE3vF29Tzgz6tpCXtHZuMgv7qj3shfu1fVLD71Ge1hG5T",
  "key33": "57Qo78N5c1nEEk945KA1pVdkgFGYV6czUwADVC58SAfGYsP7hiu5T55dThzno2wdC3mTHG1ccjNRby7hrZVTY9es",
  "key34": "29yEoVCzQnj2aY6RYZmCXTzyADR1xL5wTZ6N2gVT4AgCMhY1Er4LFYipyBAasAxTCcE2ADXCiJ7yfUuZ59Ga6RNh",
  "key35": "2iARSpn61YyHT7EewNjeoPF3iU5Lo1Uhjcozf5TUPNLCvfoBqBpdWcv9GZXqE6LadSYQRDm9o4fL79HwfqEhbp7L",
  "key36": "2zQqFThxs6RS74Lxah9QnnPDTky7eBhmtyy5Ctvpg5W1ufCEFrANCMzMx1Ej8KShrb9rYfzF2fTPqii1ehLxDKkb",
  "key37": "2kXu3TA5yaqoS6YM8vFfV5r1k5YPySB9GtfY5M8ibXvuamgLPFRKav65dAZRLSB5Z1xtoxBio6LoDGRUCsvmFGBP",
  "key38": "nk7s21ToDo73SzPpP8zAgHLLdgRGD1m6QtBoFm6y3mPcjxMSiknBMbcsxz9Epi8qVSd8Q1RujW5EvrnSJqueouX",
  "key39": "4BBpmWMkvfLw1ThZznaGZwXJohTpASP8GqcfmjMkuz6uHkAaRF4MMLr2noeRwnkb2rsTRzQiDFzAsYGEF7oYAg75",
  "key40": "42NoYWzWXD7qX2V1Wxbgr7iC388Bn4Dkrdpvyita4mstnukCwqj1jprChQaSGPTnDPUNw9hMV7HjEgKoD1NTysm",
  "key41": "4kktkA8LThasDtnhjop4g3FQAeAyGxBUchTAtkw1f166DSfZijoUzFc3Dbp69k155RZq6BYv7wd54Sfkj5VtNgT3",
  "key42": "3a4pNXXYtq5NY6vXbLbfZTavHKj5NLGwUqyTqaK1eN9uqHdNm6E4vpnjmhVYKSamCYogcZQLJwRcgUkwSj4PwWE3",
  "key43": "4NpT4bjM3Qqx7G24faAG2u98npJvAAHw45ABXoUHhA4BYNbkGf9FyeY4LVTS6LavbAVEmrYS77hNyy1aAmC4vRny",
  "key44": "3RiGmqH6rgdz3VQW2eJFayTioPDqsTN9aAKgcGTjaWLFJyBfYRND2LvH4QAgg3MYS8HNmpjLBXCadrq5iH3oGRWB",
  "key45": "C4Dddutkg9CuxrXE1DJAkMVcfRj6jRmQDSSFcB6dbzQAtJzS6AWBasTyvGt3egpSpmBRTYev7U5iH5UBBzXUGH2",
  "key46": "3CLgTzJmHhd5UfdYakd1cZ8ws5sAx3q6bsfWpoAEunmYkcSLKfR1SDhdLYeHPxFRoPBvzDKCP5mLpXG69nd6WPJd",
  "key47": "34ZJt6j6MY2GaQmZUy2NiLka3WuQKkpjUea1ffTc5V2QuJExZ374CbhThnXF5C2ck5AafTKW6VaF6nQquhVf7yPa",
  "key48": "5f9cCwH7TouKoJW7655etK8MKqNYrsD19Bw7rXdpKwYK7RBjgHjQgeHydjJAhWxrWk8XMxVaavmrdfLTsJdAHpJs",
  "key49": "4Zf8RG3ErN1pmcPCTB6zvd8yMr2jys57ZBSsaMeqfN8Vx52CGLxXNuLuvHpJjD2bPeuAMCzbu7J4B9nhSVvLkV9Y"
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
