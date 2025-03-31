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
    "2HRkrL1KEC45HXYjfU612WEYWtqJGHjZdKvmmSKU5ZS7wMYnBy2Q9W2d6aCqcFTPwVVZh5hNmomjjDRhL4H2g2Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdvdjEVU81jNyHbNQpnmjDiWA95hVRV9i9uLE2qjLz3KaJtP91qugke9Tymw7JmFnz7Gq8yxfAU6RUDCWsexLXq",
  "key1": "4UvUwaQCnws96r8tYpfY6vvo9KtZz38JvJJVyGdoiiiYZr2Q1fHFRe1ZujgHSSASC7X7LQxrDa6QzGFbpKJr9uiy",
  "key2": "3dTYGUKKg1ooCcLrfJxTwZMhdKcFsNvA6rMP1kcbLXzVtR1o7WS9ZKzQzmgVtnA7t3GsRRz3jYrd3oxccM7gHeYv",
  "key3": "rHb3LcXwwvNAEvRN1ky715A83FjjfWY5L5QWykdZghWuB2XpT8rkQNnWntt55xETM7AcU2KZyL5hRibsxdVV1p6",
  "key4": "2Jno6ZQrGenjySZHgFMKbpRcrNjxYgqcm85Rbc5UcsibRUrZ5NzdNAtvrGVTb8QoPpZmsUNuBZBysgc5aR2ip1gV",
  "key5": "3pu3eeA7LXkEDSDppC98Tn41hz3vtE9dZg2v2gz9QT6TDGcByfH48BXLKVdpvQkDfJ5yNMGfqaG5B9kXxVYUe2HC",
  "key6": "3srmq25tdVL1bco9BHa4cfy8k3fMQpWw2ecfRG11MdCoqK6goveLUqZU8a81cHRkDZXBdiNrpGRDJ91bQWT9nvbq",
  "key7": "3h2wyxUSpYb7RmpYNsgvzeeFNuXCBzLb8wFCgQwBkcsWEDw2aEivc6rjGFHcDstrFqp3TrDEdtCLXaUWrYXiW9Ux",
  "key8": "2mTknUFPqFak2D2QVSvkyj6kDevS8mWHMBm1FY2jjTJgfKyfPd8V2hm6i67P8aWzJ1GW81qTwJ7fsSRj41wi4ehr",
  "key9": "37EQKNxCnz6XsYj8yMmCn3kqjW7KjvU92adP9oCqV3vGKgD3eTyWVvXfeinhRfVKSJnDvFN48NVWDbwdKcMPQRB7",
  "key10": "22cPT53JuZbEjj74k1t1obihXnbENqX6yrRKuUyiciPBRbNiYw421AfeB3rGJbnhALG9SE6q4zoy8gBzBHk8VnaQ",
  "key11": "2BfDsVMR6CSg1cwR62C7Zm3pYXnhyLimQZyWH3R7v9rqx2XZcFwmc4hfzzNZv43YHs9iqo2px1ekMYQwNJAz1fYH",
  "key12": "3GrCLCt7b34oixR4mL5JggezYaYWyPH8ERbT1f9SPWSdh55WE3Buv7AKB3nngpWRxpJnZ4apyj4E8WARqP6uDZSU",
  "key13": "3VNrY2KGsoWJR2UEYYtdq67nLcWAmrN6aEACe61wDxh8Krp9ZgLF2DGvWv55aBnzTEuJgfMGz8h34Cm4hzoxZ54y",
  "key14": "2K731ShoPDVcBnjGQTL3uvD5TrFxwYrPnRJ8xSqhCoZrRJkwbnCFHb77HsgKvxaE5iB5qUhpayRPRkVhEZLyRPBg",
  "key15": "2R4btQf585toB1gdSpaKiaq5GB8zmYGYGYv9BD5vjrzDkjDAmvUixZcU46hUELdDmuQo28ZqDvppy5Tj2Fysv2PT",
  "key16": "5U1M5RFmhojR3S1wZ66Y3BrBJPzdXWejbZECUjtkthGJZ8D93x57e48w5xS4iuQ8yz6jScbtjZm6QDcVG1veyjvx",
  "key17": "UHxKixTTuYAdQteWCGaKN9YQFaWd4EGnR8iDTTZNp8hKK3Thxsn7xa6VjAdCUB3kLg9LVZ9FHfboWnXa28fx4Hx",
  "key18": "47FRJNEoNc7NJ1HcsNQBBUtcFyYhTtTVnSZMziZqzCJcFVmfsdptcnhvcghaUvHa59WMdnaQQXNY6uhu2KXQKNCo",
  "key19": "3WZNZkM9sG6bQKrNZJvLRZWdX6rx8ZW4bxzRJCY3Tm92eBYLMDoTQ1cZ1inbMVyBiwjEGjNywE2tv2XNM1bymVCa",
  "key20": "AVa98oCRR84ma9TSWMXK6uo57cWWFn31TaHjF8rMLfZK7vGyjhRmxoxZbGBcW7S4kZo6Z6RV4vrfKSFUC9rLd2u",
  "key21": "4GR2sJWnihqnuVv69x7VDf6y7eNxppYvm77QQzvpkLXLbcnwywbZKSu55sDa3xBQE4u1VCfM6sgFZVTsEK83ShqP",
  "key22": "5nkR6NmcdZ9hTcPTUoGEYRyjC1PeBYhK73cwWaDpfe5rwmSGjhvBU3GK3vR5qKExjWKbT5dkB3jRWEqC3GVjGtCg",
  "key23": "4eFjzJ6A5pFZEJHb8SYXcg3jHPdMTyWVryxN4oQiEu4XWb6FpytnMVn66o7YDgapCs9GUb27V4cmwcwWUHp8vNsP",
  "key24": "26J99B6pqxqxmDgsnodvYwDTPNVuJZU15i4as4tuCcHzx1dm5v9CN24zFL1yGaZtmsjcF11tF3gmeuMbbNSRQBiR",
  "key25": "nBxBVAt9vcTZp51v4v2YtUvxnV5bdYr5ZKeE4WaEBda2TjtXTrNvdCuvBzgdv9rZP76Bna1p78KeaTSH57YdMAR",
  "key26": "3EiFMssFfuea1TvVtq2RwfhFQpM4ne8AeyCBgJk3PF6TNtzoaJiA7uiL9MkDRt4GJqPLFUriWMxpA6mVcfK3VzSz",
  "key27": "4sYDZZMcKU2TF9UNUBs4JhxJVFsrNoNEBtVYVPRiDLPHkWzS5EzXArP1NHMX7TuUeDzFNTavvrw49yQ2MW3NHQvE",
  "key28": "4xC2ZC7cyXHiqeGDpLz5fyyATTrxBqBJDwW4So3v9RkZqSjUk9ZvDXSc4cnJWxZnoC5bQgaLbSj8g1MUf7YynY85",
  "key29": "22PuNCawARZJfiqrddhdSaYyujnavzbwGV8aS7EbJcqshctmQGZm8Svm4jGw7DrnVSU1H3BH2UXGH5wYLjVAexYv",
  "key30": "4P7WoZ3mRPmSGYkHPy5S7mjzMgntH7KMPBHDfCmskRuLjtegpTLxFgx6bW4HFerNARTrsseNJ7yVXV1aabHdbUZc",
  "key31": "4EZNmXgskhe2JGeAs2RgZGbE2UndjST4cTzQnzu3hqKjnP2iiHKbhvB4pD4Sp7sZEf81mppixSGZhkeYhkQzx1GF",
  "key32": "5gg6QXDWX5gcopxBqpf9mpezjXipzDxrHRQxrcYsJ4VNwE6MiEaicNEyMVFovoB132Xox1fvgUdapLb2QjBcBJUw",
  "key33": "43wtyRRYKrqGfKP52ZRJZENp1sPxXJerBBbLWGTkRq6wMRYzQMrWU6F8C7We9tRqBcck85JeMA6frKFKbBancenX",
  "key34": "5YjMEaqkxTeL1jREU732RvY2hHpjBdBZxaeW9fDSiNRegLGw9jBT7xHcnYAqKw7uNSTMhBeQHBpNA3mNphY3Law",
  "key35": "4exyNBDyReHJY1NeEQ2x6YgfYbdJzx3i65jYpLu4hLnecBoiV4btwtWKStYctge7PoVGUKhyEQ1VVvyaJSsn5AJX",
  "key36": "4RRTqqtracQrWgam14RmaNKJJYuREFyfwN2Ptwy8MbJfTbcz63Rbhd6k33XoD273ZvddqgvG6prSHuYncHAbQBDD",
  "key37": "1WdVY5yKj6SAzQPeaYZJ34RdZQHEv7qYV1HDXtCQGGXQESxhdbUsTZFpmXiwqVy7oGSBpZQQbcpkoeX2zGLZaB7",
  "key38": "3hfqCAgXGJUfZ4GjBf4n1kUtWdXCPfJPteeHEBm77LwMSD6jSK5bMyU9ewGgttU5u63NvaMfLkpDRU5xmTkP5fDv"
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
