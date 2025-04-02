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
    "3y9M4zBGnPPA33dVme2K8kqhrzr6WBeaQMXCnUXrPQTR4fRRZeZQgHCPNVGfazFZCnaA8aqKQfM99WMH2We4prYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbMTuTFzJfAKpEAKLpytNCFRGtJUqeLD1rEhd9w7VRjyFY2uAnquNuKUrvgMX9w9NYCX7YSabJ6TwiRFJsVciam",
  "key1": "RSxHEurQ2KU77GjpAsjFZ94tQqvGbJG2cYnw6ycUrxCvtMf8xvfAxAiCZeHKpWAHCE1eGwhs2VXgukJMWzXdtzD",
  "key2": "54UsHUXj3GqtMoR2M9GWa9PRwwnnPvL6HgE14p7EZBZKn3kpwaXYYi8ZCtc91gRfYHN92xE6Ck1eHeUC6zLNBQaF",
  "key3": "3PvPwBo5o3WsqbnDo9oG4v4STmVgbo282ResPKpfkHd72esEwX4us5yQTP4yWdsQBSweJfc2fx1Ym4ioqrx88qja",
  "key4": "4N8ydqzr79nfpC4cirFUrw9eYjNfr9pvLd29VjHPVfxoV3yfExxXvW2LZhcga3Cje6Dc1xpRyaJnGnvfUoiKKzq",
  "key5": "M6wLGJ7rfgqBYUy3XhbddYYmZhCgp49KuEETwV1ggaqEb9MgRcMRVD53vRGPBYWYTcXaXWZhwzaSm3UZbpmcW9g",
  "key6": "94FkqDsjJW5RuBet4LnBP9Gm7Z3h5ef9mDujdDwZnCFVY3gw2sFuKvxWfKUh8JEiw7L6bkUxzHBAmwe9Gvev68L",
  "key7": "3QwyVQ7iXgx9ebVCiBKz9zGs9kn5jcFfB8kzTpRCt8kpxztxM6dkpvxwsLfiPKhEGCRf9fph9H7yFUa95hx6m9F6",
  "key8": "4mQjm7ERjwp1ASrYkSvAgKQ9tgj8YfJdcoT2vg5o56TiHfSAbvuwK1mXjjxraSYZuJHZfuRy5PP5S1F4RM53mcSU",
  "key9": "5iApD2ou82fEgZCLmVhWsfHx1Y78WWimhS9wKhgUuCoRZ8eG6ZkNUXqLtZcLcpMeh1r4WcrCvhsJyVgvp6ERdNpe",
  "key10": "2doudHk2jTppyzX3TBcwCe7B48SaQifXqaiFSghYkykyb5M4QeFu56dYEQb1KNRUg1ZjWEpNjbEJarci5GriefDQ",
  "key11": "5Zqb13ZohwzCjrCdfp6AKiPavghmrw1detr4NqZCz9KaKzSc2sey4DvdinUbBSYsKbfAhZaaAREP6ZpghaCoMooU",
  "key12": "2dG5Wo8KrE9dR1Wu4vmwgb1gnsw91dtNHxMcKzsAN8eo4jwvK98fJ8tLeu3weTxZAb5bkLuMs1TX9yVcX82gewqP",
  "key13": "41kaht3VjUyULJTwZNwUYe4Y9zoPxTu4uzsFonBkZThjRLzSM2LGMk9dFkaLn6PX3CCwsUMbEqhQb6LbKHhuFQJ",
  "key14": "5GgMLoe3UbeN38pA2yR9d4vr2NH5NMKEjDP1iStovD2nB2afkaq42H6J32uh9qXrjhuURUkukEsUSK6VVfKKVcK4",
  "key15": "UHZzMcms83buW3YetftYUHmYmEBbx7w7AJhQQcr9W3d9rGg965dj19jGEaeGXBmrEsA2yFLCDi4h2uXotcruEQe",
  "key16": "u6QgCPE2ovK5bjKTK6VfbCoVZMg2h64tpR6HCai4GK2tGh5mvaEiYs3KdVEJzD1CzShtLrJyiPDqivmnQXtJELd",
  "key17": "2vKpEJFtUNAxAU2USZGyxR5ADATvYYr3kQq2e6kkJimf88kobrh5pKRHhsHTsA6pLbddDBqWVDHz9reYWHetadcs",
  "key18": "4uy9dNmGHuMe32wXpPJiBTELEB77pw1psRrnmUU3jCvH8oi8GgYHKwXnEu7jWHGgrUDodDBvhEG6nKvuQGo7gMBP",
  "key19": "3tmPUG6G9Knh7uoHyrJQTRFYyhRWcLbEJ3nGCHwxoATxzBNpEN5LZgAdFXNvgipXUn23VqPHTrXBzzX97hKTzWYM",
  "key20": "3SCBkv8zHnx1NdJubCcN5Toyd7ThcVHPVWmbHzW9hjiakkSTjF6nGkHQ2pRE6gKMPw2ZZjmZDNgHi4uC5pEG5Gym",
  "key21": "XA7QTxqbTRXpWaUNDeDCH7LiGKGkvyatSE3SV8dZNJ2HvdrjoYAPfK3Apy8XRJGReLmNm4RVCAhXzFUq5PLQhNV",
  "key22": "2a6rzyXpLDgmiqXTfMv7kFjgZ4qYy6YtLSy3fmX1fQk9GP6pFEgZpyD5UjAc1rBxnN5fcqcjKWnBPfWscunqEqAt",
  "key23": "knEwaH9K79gZLwSjkEuctghcaKY9Ew8H2mHBTxRfudRg6Ns4AvGFHVmzhh6CUmP2KzXe9f4vJQWZZXSgfQi5iL7",
  "key24": "3xGZLRPQ6TxkTigeJGJohAeMSz39w99DPLw2e8QLY73hakw8FPfCurxfEpftw75Ts9WVbSkCv9tCutvVLotBvB97",
  "key25": "3wkta7XLWHMikDp3JXL8HuP69ccXH9gq3KT6WNKKZSVb2x68LM5voxWq2Xw1XpJc9Qsi95R4HLULuj3LaTcK1hyK",
  "key26": "2QmdyNLtnyxXSsTfZn7HXXdngKQmaJzW44kHU5Jj2fZi96TrQTxESnuV6inaHPv7XPbn1AD2QrXBXkbLSzwuXCSa",
  "key27": "584p9uBP8t8et9GpL4PUEJgrEMiSgxpoPPTAQXF5x3xxZzT5uNrRTK7p4Z6U5aVdb27h25L5pGA1mYz9P3CNxvX8",
  "key28": "5o8kPmK7REsLMTp5wb9qTfwvHXUDxsbxKa4HpBJFX2aTW9XZJqhjVfAr7ZvLohj7MiSDAmVNVGtsfbHx5ZqACvoz",
  "key29": "TKjU3YYLmsDBp2emZWtiQsXesAMnXeG66iNux59w92SfA5KuT4LCuyhSv2vHnowzaHNcGXbSNn2y9rJNGRzR7k8",
  "key30": "3ixNE4FABYQhmpjpHmNkMC7vu5wve11ETBqUuU2FHHBQaSZpJaFGC1hNs57FWQnxZvqfSbUzMmjGgZ7osCaNu2QP",
  "key31": "61N5dGuyhqprBfWEhs23ypo1i3CuJ7ZTJjis4bqc8CcFQSfyTpoYcpUMNamaSKAD7Bo3vMZte2R2Tr3UJ8uLp4xs",
  "key32": "2XuG6KEdWL4borbjK2xmBLdTJwhR1abdfD5pUKnRrz9h2UkqY3KVgPf8f9te77kENabyhKz5FiSsrVtZXPi4vuVm",
  "key33": "4zQZsRb4mBk4oe3DLytjJg5cq9G8wAo7xP2di2SHrueUhT3Z3o8h428CVjJKnrZkFPgoMhPjeZJt6Q3bYDFoeoQE",
  "key34": "5aF3tw1zyMPtrTFBAtgbQCxshWguA7nCTKzH4PE5QrDRKHZcSs7KyyBJzn2YW3qLTJPajU6xnZT8rA4WwmJXtGpM",
  "key35": "4ksBYeDd4jYFztVeC2iFA4sp9iKc5rxi5ADSQxJs67wPVGDJ6fKbNoTx9s2SzzZeuimRJ7cyADgRfMpTe36gL6Ls",
  "key36": "38wxmkKvPzaAzbWNv8BAQKUPZ2z8YxSa8BCZEm1D1zHhoUbi72d94GeUZrVpCV3ukDrHZAbCJ93xpF1PynAiXwge",
  "key37": "52youLFtzRwce5aiymzjQtBXSCf7mfmHvpYTmpcv1EE5o6h3J7R5xFkiXdAKnndkkWAeo6bLw6DoThhSny6QLW3G",
  "key38": "3MgSGj15ChqFBp5Fp6Uvg3Vf22mQKUNJQjW5bfYuDgDXC9xsyJBVbfZSPxveB7KgoKtgidjGagVgBCSgAVAVzfN1",
  "key39": "2hiw6pC8V7VfzMAgeAKniJjvY8jZ2MtQg2T41ACb75FPk5GBWyZFsgpYDC7f3qmPddKmayP9mgr2fhgxsjUizkWf",
  "key40": "o6R3SPnWEHEKEXEnPVLbMikE7AMqzwLtcjL3SDZbR9wRo7D6UjVcXvc3omUopTevUptLZuJ9nR2C7Cr8FrjAG6d",
  "key41": "JqCuieJZxP97EG6ejVm1iRyG43Bp2KbWqJwdAkSEeQPjyPoiqZH4WRgdcoenJ56q8QAQ2ofVRvmQq9iKw2Wb5ji",
  "key42": "5cCzNBSqCYRaWSUbqHS2nNqdgLQzwFDhoDsEeJksYwqjM2w2o5SkkTBBJo5pvN5NVAfkUTQ1R11uZm7inNzZRWh6"
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
