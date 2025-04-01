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
    "2zTFqkPQy7LJw2eXS5eKbQdhT4ANwHrrNK35tjSuQ1zPq9uJdnY26CampEqu3jpSoFS35SbvfWnQGF7UnESztHuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gF44PPdnqD1SsUk1kpudb86MXiWcmXsr5YwkGPGCYWkts8G9TFFy1Sh3FShL1yvrf5STgfsWk81ZqMmysMP8iin",
  "key1": "5nvynj6C1YtJCj4inAEj8GyLtWF981ndjgFNDgQQN4CgRXJdrfLFWfe24zg7f6XQntUZ9ZQHi6pqJGQE58ry4wse",
  "key2": "4KqY3h8NG67NZpwcVdPK4wqQPBt8nyLajj5NYmA6BCPfuyZVHMvtxHZt2EiVqyADNKhxi4zGTbarSYzRMZ2VFnqJ",
  "key3": "4QnFz2pBDGDz93D6WXGzwq8gX4NjmewM4zKwTJSKz7S5rEAAL6pVyNkd2kPVX9geWTYoxBhXDbngn5mUoyB4sqL5",
  "key4": "MFfG3wdkPiXmXNFeYr34mEKaXyDKi2dnNPvGyHGXGZtN6TXMda2TiGZtG9MhDj1RzeooMwquNoWRViHDR4gF6Pm",
  "key5": "34SoQjTrFk94auvPqPhqxQdgjs1yZyW5rdsbBpNzGN25YRyJfRKuZgy27oePWbJXNSjeGz4CDGjhnKLFRqCTkn6s",
  "key6": "2Qtmf3uXtnKPa5UYTcRrFKKjtzfr5xjo3dZtsFCBPT5u6c5TVjW8hxn7HapkQ1fsr1LM4QUHsbz6znAFaYtrsQfi",
  "key7": "bArc91zRRMvdX3H9n1pNKVxwb6BPBTv1T7aLPmMUZRt7juGdETvSZoWFLzfQ8EcRvgw4tsniohBzyuy1tF4aTpc",
  "key8": "3SHkXEhFhs4NnQUi2x3EsHp5ucT49NNJ4PK7ChL3n8MBwfPHiWTDd8YNPvEMpRHfnhXGg5PMHwpvxRX3H4XrDjhL",
  "key9": "cCZEdyg82FfdGse1jBiUjoiSnF7ZvXDWHqXAjvsQxM9f4tKjGJRpuWid6T43cDsdAPBRxxyMfmBwQ6uqiEp1b78",
  "key10": "2ypJodMuS4J8Dcb3PJTjtHz7gBDUxcCPXCEuhfN4Q9mtURUMrmAZTdwJ8vkeyNWQJQqruNNBJWhJre21QazqWUFr",
  "key11": "5vqtVULNArwYoPt8PoE8uJGVUAnAuwpuzdnBvimCKRsCjXPHRd1GKLpAVdxyB5qBrCGmoXb1A3QUJYdVE5qJ9a1n",
  "key12": "5bnCaMp9EwYq3kAi5ZmASTRdFKsZvfyk8KUnaz1QmpMfgRP3ByRifmpc96c3txQDijuP3Ms4iaiEEDCwid5zHhiG",
  "key13": "2rmGdgRb7oHkj4jzZtnnvE6Unbp7QaEqEhdHNvrp4PC4SyVWh1JEWbeFuoMY4Qjy9qFUKNzaNVJVUM9DV5S97CsC",
  "key14": "5dX5zL3ux3Wgohk3HxaNpEPPufsAXoYCT4acpriqRYgYKxq9Sa2saxn9h8EUKANpu8crw6ctWEka5CdatvLe3YYR",
  "key15": "NqsPCkc3cJpCWQijNykzbf5Tsf5Hfhphdh3XiiYJ7sQqpmSn1VayviDEDnioDPc8MhUyKSLY58joozFc5a87Kwe",
  "key16": "26V3jnb9RS5Np4TCe2Cc8APRnDe1LrV6QDhUPPciZ6gN3XYHP814A8x4UyPzTcBkTdrE6oJQG6F2Yj7hyhBgoSQh",
  "key17": "7XGTCmfVZPtyuUiZXQ3Cr49LRwdEzpjQez4c2ZEgYwwpBCvKt4wuW1VtkRH8QSRnwt8E5AkvXqn9kcyY15GambK",
  "key18": "5Pyub47s8sW6FzGdntENFRvfxCCnWGgUCsgfvwpx54Lg6rwbKaLQ6vUky36cDStE9f9hB6Ge9jvM8Xv89Nnh35BR",
  "key19": "3V3MnGGTSsDkYRZBKjHt9KJMkjF8nJgVwXQhGsSGVyYq4uibc6Fk54yMie9HZZvzSjjPwU7fF7EFAAXv58EivfXi",
  "key20": "3wynCAyJQGi3prU9588W1cvyjx5pYDcDQ253W7r9GGspkMKDXv9X4CNZ1JBba9tcs1cTX4YucygBZVH39PMRtGNF",
  "key21": "Xj9FWJLqERtdY1geJA9Xszdzm73fKcLPKkbYsEtb9MRzrxtuAiG9utLFwMzadyrCLVLB4adiLdE1MTVanjGqY4z",
  "key22": "4qQhjD5k4nrydPsAU9AA5qkrqcWFm262Lc3r4iXFoux66w3oEvVYkPPtynWWrH4ktegbdDPzGvwuLqZnEVhatyhn",
  "key23": "5xSDcEjGwgFJmznKRKBmfiMDutiXStHaHthcgSntrjP85eR87JA9qLEtJ4tgsjpJdsMx6VXPxUpgZHkh33H7z61J",
  "key24": "5wjbecM9EoYU12AaHJptJUREuUnr8YendEhxjRZY9kri47n35akC7Xx8t5sahWnjUsWdVsAR4cppcj5jJFUsCtS2",
  "key25": "42kfXXQn4KNXpAoodMB8x1aEJbZTJYha6RhbFm8JkG1y18wJkfu5QYEA3UNigvBjNe8vpbFmHnw6TJxSye2HzHtg",
  "key26": "3dyjHsrmVCNrzJ1ms2Fi7qscH37pgL8dXjxzLg79QeT7Jr7rwmwvSj6Tr6HjHHHDVcTaeP5U23jiLNXmfFEKvRk4",
  "key27": "2i5ZoKwKfqB4dXR4wRRfWX6adRQCDZUmHGp5oA6suYF8Jyis7kbkuQLHBKfhT3NMcNrF67H9BVucrBHQU7GAToZw",
  "key28": "wYAi4bLU4oQ8eUcgKHwR739zfML2uDPdtruSxSzMUo9ecGTd3qR4RCnji71TtHRdYnJqHYs2A4BfhjwB78BuapC",
  "key29": "2bVEmxZDDTFSf1b9P71jQSvMfcHB3ZEqHdr2jPfpjdzKCk7ANqky6oo5C63oNWcecpUuCZCCamW2jF54Jnn3w9Yf",
  "key30": "2vb1AqF4xbM92KH2QGUW1gSum9LhRnUSUTcumehmEruXk5ymYntYrL3pMQLu87dVEYrACRKsQPkyujNx166XtYhH",
  "key31": "2pDt1vG3LwaXnGncYHgStc3RaUXgPm33kNc7VaoJeX1hRqAKy9dbHwwdbhyLDZ3ogL8sQc9vrupvmnaAs59JjxYh",
  "key32": "4XJUWWhDzWMt1h3c896AcZcbjRGVVqDGCcMen8JT121BkHMUaa8hqvxrYgUP3LyeZCVxhvh8td15xhrs4cD6GCxb",
  "key33": "4m2o5w6qBdYzorxwabEhd84JhZZ2gE2B1nFccUgFCknz9bwgmDVq5gpfaenMmKJHN5iuBue1kv8eBPvuwypLZFFE",
  "key34": "5UcMS33vx2AJicGZs1umJqFKjuEg6tro6L2XFARY5kxCkhk2umfZE88bHmkGMgqPA1T2R3TzWBUrwJNTGEtK778A",
  "key35": "4QVkvBm5WE5uXsnKrNZCRdp3xTx4ufWzVJ66fxCtdR7ig15CYcvt2m7yGsK1bR6FBALbbRbsND1wWud6C18erdXJ",
  "key36": "37zdKhKAarbCdftiMj1maWRX1Jsrw5KyURsnmw43e3Rn7qqHZ9TyLbvJfXGrZozDMKAgeVc4RP74CXy6aNpaBp6F",
  "key37": "8BH7vE6HNk2TqQqhjhmKje7kanDsk4UPkjTyduxNX9ou6AbUh2CyFnnLdEMXzCKRDbFrcjit4Nau2sgwVxKVzqk",
  "key38": "4drpeJgRLuoPEt7C1EvmhC6mXfK89LL7ZgszcLRKJxkrfHxjRsK4DVP8UhsA51F7igAwwZF8qXcLHbFbDjXHTwBd",
  "key39": "3uQsXDYdzVntTy6kRoEustiAYrd6hwrpGnfWj5RdntPaSEoXJRs6jtcG28bXzv4kxqMv8QJdeVAfkdxp2gbF5Aeg",
  "key40": "Ws5gyUwVM64njkoQKDoDxJnVu1DY78b3Tpm7tBYm3tmyt4vyRnsLAFF6eSNTqdk2ASEVrVyBk1yPgdbs2CL7PXh",
  "key41": "4wUdhWePEbjw31EnWxz6imBtNiPRzgF8ow6ugVVfd3jCXpTp2hwR23mHGqHWbgcoUXgVTaUWYjvMRNiZYhgNXdAk"
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
