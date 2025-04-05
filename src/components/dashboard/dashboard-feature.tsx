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
    "Ex9kaFd1N7ksEYKKfMPC42kdNsDe5jEzsektBm6vncDYCKzhTR9t7mNWVQAYMHkYP53mcCWZWozW5M5ngt7HvoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjAq35g72xfDPeynnsPs5kpC43L95ScXLdGMZ9mjwHSbtAfbKVAZ66z6tVnaykqWxW4B99e1hPQk3Qe8V85fLJo",
  "key1": "4nqrcTQy9va6zu6LwVatfpTs663dJrgRx5r12EBeyAoWLPnrwKtx94o3pJmeW9sC9YMVav3C2QF8svtaeGwnY9yg",
  "key2": "46HwhwCiX4itnx272NqtZQWQfNLhqQEqVdWYsk5MsYfiC3PxTAfN1RfLZ3Wc2ZEu3Cgv7uzGfSHHAAVveAmffXxH",
  "key3": "2PACV1FqcLKXA45nBrbU1g4JiEBvjsatbZjHWm94UZE9VKHTXM6XNshm2wV18UAXacrSak56pGRvbjB56wks3fK1",
  "key4": "2vPUvvTQAbZkmPCTPDbDiusdZrEfcHxDygo4UG8PQCzAbmhU5U6ivyXUs6FjC6KvXmUNspZG8NmqTAn1tECyKHd9",
  "key5": "2rnb3tqRPviX8gmy8rcgqLbnU3yt9BZdf2XUSsAiCkNJZU5ZMXMKTxsrAFVEWzbawie5ZnSeQuBg4LgZefudASLj",
  "key6": "5dQha7t1SYxsSqQBcDiXLDPq6rXSzQbigoXGR529z6mufRYowbbswjzfvFN4QfKf18qZoyog2UoWRquFAPQ8MVUq",
  "key7": "4vAKcQcmkR8d3TsK1a4SCN4UNzkvwX3BYe9VEaxYRqkENaeYqh3qqGgMbeyfkQuZGN6fD1ZNpdRaqkPKQ12ESCKf",
  "key8": "4wzkMKkWKa3unQVnEL5k6z7ZCzoJZse4R1pYvaEC4aj8ca8Xmd7Bhaqt1CQymKE4UfDEL8zbxygAyXaJaKWcRhTS",
  "key9": "tvSjzKsWSxvw9utHXvFabutsxssHLcbxRsxdXyKgqvYFL2yFDQmdeAdTyFaDuMQpVu1gyzXnsvaHaRUfXZgqFkP",
  "key10": "3xqiZCgXnPfC1rm7gxAWBReweVK4VQ3vfWuWuJntGKVhy8NPFgkoujLBAr1Jgh5p8xxAqW4khUixoReDJ31G4kKi",
  "key11": "2GjkMG5853DgSonf3BuVZ4i6T8ChB3AcwSDzbph2Svx3NdQJad7GMATuvZSc42HexGqHMPeprGA8jX3az6aZz2xr",
  "key12": "3vrhD9nz53Ht4ckGpULz9X2Yg6fWkB44QsRq9bof3SLzK6WKgmnp4gk7sanfywanWogwQBMGnEtcnLhzgQNieRPZ",
  "key13": "64ufZHGvrXS8svaz7Nz8rsr7YFQHTT3uVzJ6QbyKaiVSEDXS7srmHXN3Y7Z1hQpfYTNF6mEVPmjuPvjic4YV9PBa",
  "key14": "paRhgLqodHiEWKdf8R24z9dew5Q1oUwypZNTQwzd1f9aTBhJcrS7c3nhq5MeZGzqbHfdxZrbttQRNNSdoiGcUUz",
  "key15": "2rod6cyT2CnYxykqnxkA6PdTi5Xr3duopS1JErNiakbVaBzkxcL8KPVdA28sVp6wkUJLWKfcsqnv8mkxC2sVdLRo",
  "key16": "5Uu3XBZtmF2vaDX8Cjm8QuhTkiwwFKEPw3EDmwaYy98NQTvGVyUGt6kAeRGoxwY9RMTgXfqGBqacp5cTjsNnHYHi",
  "key17": "2KsxWsCYrwDJNQ3oCgTLXJvHk61o8ZsZbXYU3JgXRiFhmuLUJmzsyYjqf4ZqXGcidqdgCoWxxms9NnsZaivNRBM9",
  "key18": "4xPy7xkBBEHAALMbxLVnJsv781UqtSbM5nuW89why55Chj35wxvUP9jdqMU8iCCqTCSA8XjcEnnDZmZbV3wKkohX",
  "key19": "4rSBKbmFTidsSMFnhE8gdmG8BhWrwD3wh68unmaV6to4hBUW1b3C9rqRtNavUQEYKnqnJ8DCXwERfhYKN2kWGhQ9",
  "key20": "62QvovceVFjhUEwQWt4a28cDNVZurfp7Mb9rdhCXuSyvSVRYXwkBHSVDb38WnXudh9yhFVmExYiQmWneU9YHaqjR",
  "key21": "nP3J4h1SLx538HLZzbXwNBUFPmoECHjqr9n8MiL9NaGuDgGr4mKJFjBijh9UhvCMmz7eGoLqCarWJ1FUqaS8o72",
  "key22": "5XNEL1tbf9BGyFLmvG3AoTYsiS2Pb33rNYah5XbyYAwuZUkcyeimec5BLLATw1gHhcXseJUYT3zmVkx1u7oVBPte",
  "key23": "3WifLfqVszctqMB4PBYWHH5iDFqTfNz2Qfwb1mmbberW7LvhCC3Bj74UdznSG3Qfs4GocuqTvChkpdekKBHpZXXz",
  "key24": "5XW5cCegncja9dLvVMLU4xi4cAV4RJWx57dwjFTbYTCCrRccKsynAz97mBgHGAjY5R1JERfNkDZL1LGVq1aqkqZj",
  "key25": "63i9QPWNSAs9JhaV45BNBvrCBcgE8UdyrH8jMBozJMpGuUHywaNFt6c5DUqUgpEdrgPPfgieZb762oMUy39ZEb3G",
  "key26": "2xGZtKYSkcMh8UmBHFMykpw5QZzzTVRtMQkTFJJLd5AfzRpveHb6ixTCmU11V6XtmgyWpLZh756auozWW18KcVpq",
  "key27": "ukBih78kXEHtANXdLKpTCrYZ9zJhHXkDeat8CZbpXdt6Eam8DFxGMhXLWtgnwB57GeaJKPzVCumTUFhbZxNASBv",
  "key28": "2ubbamApa2zJeqVCh23QW9bHwFJkATWaSBX9cVP3wubs8EqBLWHY2HwsUaUDk6YvXiK8dSSybaGGQr4iD76CUGiu",
  "key29": "3itrxww3wiiGzY5mhb1Um1bHniYbNuWxbW3ChWzta9YfwdSNFkTeYmsmYd35Le7dbf515KgBXYbQQKM4u24oh7zT",
  "key30": "7v1w1d3myt3FAqf7pTwsSu9rxpK5tzBXvYwCyaJ55CdV13Ee4aY5AjtHGwmQzuSu19Wa4mDXiRgbbLCHT2thah6",
  "key31": "2Vaesngqsu4pXcSs2R5aVhFicz8w1ZCexhaQnue1pi5z2mGc79xtfzkLyn18ELwc2TkDuAFJictyawNy8hZzTct8",
  "key32": "5XECPMMet9YnPkzgr9TpZ3tHb1uwD9uteeLdL1FWEK6iKfqcY5jPzqeyciCG1jREnHNbyP7Y3WMRdemYSejNHnzU",
  "key33": "3qL4BXeMkGeZSVj4WJSnNCjhSHuqjV3r4Ge1UWrbScFPZGkNyJtyyFQjDQLNkqS2c1dVnJGuuFfkfHw2X2MufnGh",
  "key34": "4PriQBrH7bA7Vh6rZoprqyHyN7CTYKg2ZNVUsoUrT9adUnW33tMVEgfzqVfE5u1r6UsfyUW7QVtDSqnQC1Wir2i2",
  "key35": "3PAHfKCiNB99Y7Q5ZDctXtf31AyihWxYQk22VVbUUzoYaipuNmujnWdtWzZVibmEzRhPPtjUMdw5Q8MZkPKndpVm",
  "key36": "2GsFX3y5NYeu3zjXmZdEm5Xh27kJLrDzYJhL3E5YZZn4fAw8yd7RNnTdtAiKQHLZSgVAGyN8h5jiAvoGDphqpsKP",
  "key37": "2hWZ62PLNH7NGLooJ1XxvQNQ2wrXw1PhD3fFK9cCFaDyYjs5kZ4zfR1kefKCMxiZjNz5JTP5DRQHgDQvnpjVqwzx",
  "key38": "2y534EvwCMrVWaiTQPUVURGdc5G4ua6bP5oh2r3u8ZcNKWQnV4T6FzWtbTy6VtfFJrUsvm9MR8vLYpfXGGD4rP6q",
  "key39": "nRSqbViqpqEkX7ABpJveZkFWvxLyG1Yhm6u8o7TRRMMT5CyeoyfBK5umK7oS6fsRQjf748wvizxfhHyDGUVXPK8",
  "key40": "4tHpiJeohCz11aVFdgYGRL26xDZXu9tXvSHyEsSPy85tF6iDbft2LYDdJS7ALJLFEGi1LeX9rtc8tJxP8ogpg9Zo",
  "key41": "5PoU5XkkqazjBk8LSBgveNW8yTntfaR4kCupCrZjMqs9ZQGGY2kZeQFYRU14nxJMSdDtCETUurVNEarT6h75k1rH",
  "key42": "5enxC87WeUCexDSoxfrWmcYtcCQuwkTeafaHXubg1vV2Np9VYwpxGyWZaRtv1nE5xxAW6F8Mf2mECYHNFgP4HxU3",
  "key43": "2fMz4Gkut1zAJomgGwTXiRF2GBLUQwWuuKHVYvzFq8PkdBaVgTZ5HqHNT7nZa8b9sHA6mCh1uQd47AYZUF48ec2W",
  "key44": "5uDWSNEd3aF4C1qKfmdPVgy2U4qrSz4qhz4Fs8pPWbWnauAcceFm37afzKC7AHjrTaeDDfcbom3ZyCXLa7YhSnnP",
  "key45": "2bGv1XU4aVjBgUUiv1uzh61Wasgb5cLtxXmySXspqo9Ac6HdFd2nRYY3wESi6BWvoLxKS6Lkfjiquxr41HqDm8ej",
  "key46": "3DQ9KF7ZARvRw78LLF3EyxuFjoSMhkGq1KF2Rf4yx5PAFdeQQkmoHeHUUwYPHy6juEYgzGsxXSSpomfWbA1tp338"
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
