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
    "9Ak1a4D678nMZ4tu6hhrK1dJ86BK1apywpiF9RcmTufSkxhSY7H571sPD5XRBxPug2c3Mp5D6hhr4uhwywT43pD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dGXMQTeAiSVJrtcGguKBKbcpAkHiYeeoWtDXRopJi5NBQvy266aW7ah3GQYVJRqsYWrQmqHTs9eHtRE3KVYE24Q",
  "key1": "3pwKhNMJc3HHKWYtbFNsMCxMEM9BQ7qVRg2TngbZUyoL8DN7cXvEFBEzawbSHdy5ESog3JuKfTf692yAy3JHUB27",
  "key2": "HX5Mrf1CLZsAtYvwn2MeBuKShVHTDXLX8XGoAXdGYeTTs2nniQY8JcMHFMe1Y3Tw5AJZJ4AKtZuUrrPmF3zG21K",
  "key3": "2g22T1RyASuQJynnFRJ4UqHq7TeGxHppmH7MPkoFk9ztM59S7XL2LDGDcXLRPNXgXdhgLWmhMBkRxSxU85YCMLLp",
  "key4": "58Sh4W1FBDtU5eUtyba2m8dSTZN6vUXPGam51iwtccoUoMfPLVmkHgGCPzwfkRP2YpBpCxhA5nZGhf3x5Wbwh6jo",
  "key5": "2wnueSJJWBXNNMcPyHqVeapHyoLgdhoUTtuirmbbsG1n5kBQE67y53mLQN3PT3p4X67RExpxLukPpVnKkxuN6CF",
  "key6": "5ZYM4NbLcoNPT2mWFigrb7yAgiP8ZUt7crbeNAGRNiB8oZMMdHzMbGgwfmvi7wqRtUSLXv9c4bDwZySvLiefs88F",
  "key7": "4sooLNc6fx94ib4jYYLQmCpDEGq66J7X8ZxbJ1uZTWWMMsBmCnq1vBnkBXJ2Du6DY518pLLSDzhiHfubm8Lhbmyu",
  "key8": "4EnZ2JjSpVK3o6UAseqyDvT7SDCHYHnjQd1o2TELLYsECgmrnry4rfyscSKPUnpK5vHMCtyHo1pFmngcG78Upimg",
  "key9": "2QM3v1iat4tHmZGArZt5UTN1DN8rQVWyCvtSnjbqUyxHGhaxVxZrbrRHqSqstChx5ptLhMth6WN4pgtx9a7QJfjy",
  "key10": "3uKVkvJjbUVQPyiru1hEBpJezxdtkxQJyW2Kr58mLjwKFJe3oSQBz17ZbkbBLY612twNTxQJ73L31ffnrFpHFCUf",
  "key11": "5MTMQCP5K143rDhG1ihNEe2DA5k6KKydN1egdeewFwXiWQSCdng4TjWvSYJdDJS4jP5sy4XfAfrrZgjoEpDx3D7V",
  "key12": "3vG3Hggdx2pEHA7WQjzGNtcmy9RLcX58c5t4y75psR5WQyi6RDMzXAiJMVYS5npmKWbW5PTFN8buY87PUDqH1Hdg",
  "key13": "4ZAGNfyi6V5yHJMuYBrog4czJgGtG5th2Xz1hsAAHzN4M1Sj2mFtgta6FtqBiFVqCFwUAUoF7VxhB3JHRywng22A",
  "key14": "QswSDv7SbP5BMXH5HkNNX5TLA6qWiKEgnimge3sLSwftGfH6TDb3yGYNGfCHYczNYqZZP2NBBU5C4gd1wBh1S6o",
  "key15": "4qRWWphCMWPVFxmSDYw2DPEU3AQM6n6vP62nDDRdi4D3eVYgApWiPLvTPTixYuPVtQBLm83xWDL1ntdxkYcF6Bcv",
  "key16": "2Wy8pRrFq2JwKVPJBvmqPgqffDoC2DXvN4pwmroUVekur5ShHDzAJ2iPkkJcJgJvWwn4hZ6fTgTWm5neXiWKDp9N",
  "key17": "2axNXKkm6fP7usbQXrgaSWyXSMDJoyGE3vGgU8vKuM8CwMHZR7TUDj8zn2j8ya1NVCP95mpvcpctnuQxH2ehDf4j",
  "key18": "2aqMwyLJkSxb8UkNs7bjHVtUE9jVE6f3VvY7qwMypC5go6khwjyDW6b8vFFaZRU1rNxUTeCk5wuwCLQznPcbJej9",
  "key19": "3QkfS9GdarhtRrraXp4LbJVgCmXc7VnSGh1XfHabMRCexFbd6s9w4SEgMZaznDHnG8kNQuDo4fXZUhKwDTNsibAf",
  "key20": "akLE3pD3dqRqgFXrcBtgkZfyx4M3paMzXaqmYrUgFLe7KnyNyQ1Uk8Japt2FLo9vRDZRdaCBYHJ62Xxq6LrXjTA",
  "key21": "2hZY7giKXMm9Mm3yWH16rd9geu7EbtEWkpshv7gfdXBGs11JZamB1hEkAqGaqhEttJ3yHcquuQrDQ2DdfARtxHvZ",
  "key22": "5f22BypzUqgdWDPjhXmT2C9CcfnjySnhZAuPTMnDWjb3XtxzzzR3R8FZ7FC36U3CAaY7aqCikW4bVmc65dXe7uf8",
  "key23": "4zDt8CpWtR7Ju4fLb5QfoabnhRPZ2dzbPFQ8eUDouvTaHkJ534uu8EFHmbRw5Vic5v1w2yrvAHdjJv4PFWcr3W45",
  "key24": "2aL9VXFZgRUsGf3jKApKrqokrJmivDQqLjQrzZA3oNEhYkenX3QyGeGkytyoFZadvLKiBoEkwjgk5fs3ZEaZ2qk9",
  "key25": "d4mwev2gpSSqPMzK9U4td4uQcX3AHbfnMqyH8K1aSGDL91Cz88rZ5PN2M2fXLWwsRxwhwHWcmKSA7XLQ6N7X4om",
  "key26": "4TqdJZ6kEyTa7rHdZHKazdeoHKYyyTYzGnYPV54Qp1HixU3N2vdqVguz9SrMqs9eGE2isUv42pa5RkcJZJ3W5C7o",
  "key27": "2obDLuTubCiexn5brH1FZ7cFiM3HabmN3mL6wU859UhmuExsGEx6DnnuCuPBY8iysaKAawdsKJqKDVVGnsbqAeFo",
  "key28": "4vA3Y3GF6YazCiYkiAiG3cG7Xz2okoHX5m46vDe13NJogZkgC9M16uhrZBJwacdFpjP7Qz5YLEu5v4osxPhPJtPc",
  "key29": "4gexZJVtxfq1mEWD7kFMzcncKbBwj5tPnrDq1kf4upJeRLowZZ8db4wcwoTV3pc5JPx5yzZiAMt811tcmYwGhHF5",
  "key30": "2mDmJ3PSu98Hbb6D3CrHcmzhWpDbUDXEBsjBGLEtj262ZQThmkhe5a7bmirySwyVwNSMc9QeTZn1e6zbH4rxRZL7",
  "key31": "4HyaWD5GjSMm5s2hE8PiqDpv7ySjyBg8pXGyPnpRyEFHZgPYmBRweiLVec5VmWkdbwhkyiDTSuHLz4BzFNhYhMCk",
  "key32": "Ce7qo4MMzN8bneKkaXkDwZy2AXdhqLG4RKeAi8zaoGTPAUZb5hsuLoc71GpjuDbQdt8XEotjxiU6q1CHExpEGZm",
  "key33": "4bwwxt1zUfbu63p5EgTxwYzbS3h96puobsM1nz1DKkz284VKq8L9B48AW2ndYVhUzmW1AaSiHjY1225sphJLuwFR",
  "key34": "2vrtSEfUtP26Qk8DB2zU8DPxmPRWm3DJA8W4wEMPqwz9YDiwq2EAp2ApZnz1tWMqWRKpvcXSKrtaCE7sPX8xaqVy",
  "key35": "2eNVNkjx6eeVaUftLnoN3byrokCKdHWGLx45ogrvaxJsvCYdijqobPE3mv66T54a1w2aD2Hi76tRysdjCXkWgaYy",
  "key36": "4ooinB5MXg6GpVS4m2rqwFsRUyf1ePfJd5rP9eWCQfmV6oZtXw3eywQNJW5bVQW8aTAT2oE2TSnuTGw41huqWHyP",
  "key37": "49BKcWnGmh6dPyC3Dg7EEQ5J4X57qqDuUfnmRDXHM5x8FbRGCNSHRSuH3VecpUojaLFt7idvjFTQPUZsAEyE8cGT",
  "key38": "63sVu128tLqZnLRJfsjHkrPDfXFqAsXLSV5mxo3GkANeZRTGYSWPrSsPckqPZqutBuepVKC7sHYgC1gcxpp1tbjF",
  "key39": "4ahNV9nhwmZgsYQUzMv2fjLwNMVFnFTgobnVJAdMG6Qf5Uu2qCogTLu3inqe78gpi6dvktQ2y5BdRT7DgBM4kZm4",
  "key40": "Q4gAXc1cFzX44qG2SQoQyZrzfHqaw5p9j1Q4EAFSnZBuMku92n86qZfhKDo1BwjbXWbVaAvjsJ8os9zGJj6Mw9z"
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
