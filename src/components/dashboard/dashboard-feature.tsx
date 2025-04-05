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
    "4wPF1UMcAHcaZWuKfrpiXmUi3PZbx7ggYG36NvWjKEQmQrpyoJukJjfXpjbdouCbBwff94uByw2omZprvGxQMt2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8fkNeHf2spwDh6eZQQez5R5qFKvnB8gN4CYCWyJVDM3Er392FiVLieUUy8trnPd8ozQk73Q9DZPQPnuwcSeYWj",
  "key1": "3KfJgGPCLmn5uuuiruXcdF9Sy6V6kkwQtFNtnmhdJnysKhyu6a7s14DSjrushFcmubKMwqpuFFnHvpupYC7asVGZ",
  "key2": "3W4bYCZ15Yp4XS4s5AFHgh2SKdQNZZiym8vDWg5qPvXqwEm3J85tJaXqmHrDxdKAXv6A6ws3BVKNaYYpTHhzy7Rd",
  "key3": "4uqHom5WBiCNpxwJppo3oR7p8AEGAoZPvhGKL7WW4dWDKV6DnPjPGQedsEtBLXsNWSVwmUXkyeDMUZHnDzLRneHv",
  "key4": "5K66Rg1aQLcbVCenEpRaXeNgruhaYhBTPqcwgTLdVaHyGDVixFXihZ62A2JqPdUYrNgpx1jSsehJVs6ANPdU7QhS",
  "key5": "4gk72JikXgb2bPTpdDPEYkvR1CnRap1C7mE2pZD1gy4nM6997HPvNJ8EU9qap93HmQ34TLJ2kqtwagA5D87C4PtZ",
  "key6": "2kRaCWtsrxU257JBsfg2W5rH2QJENUEvUWx2dj44ULg7MJm4vBvkrpmtf1EJ3c9ycs3W2WxKbYzrBgT6pAtnGqk9",
  "key7": "2dnabSr9yXfWFYAkL7P6oYJhKs5oHKB4dh9A12mfwo8NLAt5nNnKLWqELWQPEUusJmom6pciDyDTfKuN7RFPGERC",
  "key8": "yyNesf8YqZw6fJkXci8T3hxJNg4ypH9jEG9Kd5JRtAonwycpk4p6QBq58GTpW4JiKEdAB4VBTUcFhNiqWtRFLBH",
  "key9": "2QCnN1dXTDmqBGNqNjqNgNjBRWR8rqB8QwPXvgi4GypaYWBuikNAaHa9ZKAYLooepKf7yxELJ7AfVC9GWMhFexiZ",
  "key10": "3rXKBYZZuhxJnVAp6s4xYrST9wzPHQA5FR1Ypem7LMofecsfTm1efphnScz9JrBnG8Y5Ffxbfghd2yNL2pB8nTY7",
  "key11": "4MffiHrQekMpkWJpyqWvVgYM3AMjRAy5hqwc97texeuxR6KuvW7GHo1beS1T3JaHbByEkpYfQ24DUBzZ7mWymFCV",
  "key12": "GVW4JhwBRoJMoNMWA41xoVK6Up25ecQgojHva61kcKhiXpQTw4p6VQEVfQ6cGZi34dVncwckasgEaWkdvuGjNcZ",
  "key13": "3YMYbgAZYYGA1dNWqLifDAYAHtvGQvaWxosup1z5LmcHF1dtFbFhAyxjrBfJGU8DgQM8dnLdjzY4dzwXkFJiuwjW",
  "key14": "4dR42F4ewZVceELcEEWPa6vUZztVT3RuNq4XnrRsNQ7gBTeggaQ7ZLe5Mxb58TixkV37uXP4x4zneuoKc9zjTGKt",
  "key15": "z8irYZ6prWn9FXVcuepC6DkSUQKgBP7kpk25MZMHWAYh49NGnBRwtkmhngchLSv8hqDZkFyfrMNucQ53rdDKY9U",
  "key16": "3uvXBZmNADXEVQBQfc2jNJeadS9q32sZL2JNrKdCipYPMFrHBtBGRuaw4FerK6SropaTaBm3GJfh1ht9tPCoQWfP",
  "key17": "5xFH4ydG1JqhESGtd6xLwxFUy4agV2d7EmgvzdvqZTPG14PmrRhajCKj3WpsFpT7JHaJSzDXqqFKaxierR6njS8J",
  "key18": "Psargt2nYo55cnBF926Bwa679Xr3wq24GS4vXW43oFZQbQeKvMVy1FgTzg3duSbbiQpZLrjukdRWqt1yueWHnvK",
  "key19": "3x1C9F2EyBU3XPUwmLtS4fizrqS1XRqaoX52jGKZ9j3AKc2D6DZpQG3Ao3thAoQkat3S3h1Hm1CjecBu7eS978zv",
  "key20": "xK2rfwFJbPrKTu8CaKjhHyASgXbZeZUxWZC7qfvYSumb86PKWfbhePgcRysavQT7GfZ3XTkuXDdxvPFPDXkv5C3",
  "key21": "3S7ChyozLkmu5wYDJHtHXEVNqTuVBPAuQdDDxMZ5rQRzj4yTe5nktmHh2aYP65kFNpbqTWPUqBqrnKArfp14dXv",
  "key22": "4YS1vJusbPxyWwV5hvmAKAg2Lr8mDn7LBkEkGdbxuZ4dnF93Ta7NkWdChnXougQJQkrUvnWv1QXXyFz8xihiB5FE",
  "key23": "4opdwUUe4Qb3Eawdm5cwm781dgf6ZPzepPjG31k1f33MMBuVXuhRgyzy7NHSr8REs4hsvMS1VHscZuX86bUpFRwS",
  "key24": "63V84KSHQd9CKVR4EhhxYbit33m4dy2nRkNVvM4buU8f6214T1w5aqLdNGvjLZ5kji7cc1bgi1KNYjGWC8fduX2Z",
  "key25": "qmZ22KDB2FwAVYsYFGGrozn73C9Ex9uf7ZCAQ9d7bHGtMSfmmUh8EzLXSsS5YUr3BMN7sXRPvmWVZJnyLS3xEu9",
  "key26": "BEJ5EZbd6qXrPWp1DtrKkrYtzsqxybjgZDp3KdFjBX7EE9JZyNTrysVmdUovg9EtKuxjndFWk7ersYkn3UPtFbf",
  "key27": "3H2nxW1jChDevQEycjUEHfg9WiRDqaaqvfW3qCwqrfuou7KwC6P4bfBB8EQUuM4ZN1L4MV2BRpy1qrnLqASFCtxM",
  "key28": "2LuQYEwsQyoE5FJZhi3cqtUCuvN46ZiahTV5PzXwNV4tJroj2uXbX2T8sMjV5BWp5W6xEotgQX5xNL2tmBSMvqbA",
  "key29": "nutKk4r7N7ZYLgnQu31cJHryarPr7LHfB8vXqSKxPRdSpWR9vMbdH7jZeSMikDi2ry1sBmopZDTrFmFzhDXXJjh",
  "key30": "2MJMBFvSDu18aZ5wiAZifEnGdgycfFrKdPN7gMJAwe2W8LpXs3DLmCQBCeZCMVnhrUza7P75kMQhnSFYzRjfFrQN",
  "key31": "3hwcrB6w5JkNM7zoXmnG1igYE3CDaUMJpLZ293ziQLxkBbjsP7VDgwmj9Vy2Yh8A9Ts6WU6u6xFRzoGMQwfYUahr",
  "key32": "5cSL2CYkzfbncKi3Dca6stjUgXvhnfV2a2B1vW962TSPPYJrKXyi9LweaRr9yw7S2uAP1FMbi3qCYph9aYAbTLPW"
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
