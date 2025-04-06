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
    "2Jb1Vijhvt3i5f2LAq4XauaYdPEGBCQkHq2T6FmAUBBYuJQEQLG6iKxv7iyo45N9pDrJ7ddZhVdd3sBUXkAYaVYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awUuj6LbbQds7cuk54KrPJN21yi67mRuUkVXD9J3PgFipMBQUs4jiHvvGtGyCxftYSYMPoZyVMHAENTdHiaj8KJ",
  "key1": "5kVW2jms1AmxKNDqU97Ce6WBhwd6kiTRrWgvDiAaTrG4LB53vBNGNY38E6xqpuTLtowMQvkzfHCGMo1QqaJA9yoT",
  "key2": "4jfJdvzUiHta8HosdLwogCFnhyiLzQtgD9cW4p7L6dwhgYp9NQkZKRaAyytiLVDW6YNd7UuuumSXHK5dqW5WxBGp",
  "key3": "2C1RXhPZSHPUubeEe6GkMHtX68CxMAwFAUB4ogP9yPPBdWZ14wxA9W7xJF6Af6SxXbJBCRvDvWXtJqKwZmdG61Us",
  "key4": "3K4oPcFasiSiYnPu6LD6jBpeMzSSkDG4UrQYMv2hB9HhzFENwG279RZo6Z2wEEQPqbJSmi6BaYhXN8qg3WBMdPqx",
  "key5": "5XHWmPZUgZKdrASf4UrM5Up4ZghCmfcydes1HmGG96qf1pTLF6cgA8mFv51aErbyM8epBfnmqpY6b6pj4wSWNNrX",
  "key6": "3YiBWQ9zAi22HJKuQJ5AnKpaM3gFVwN5qPPuBDrryj1K1X7PoiQDVpeXxCQ6Y6ZRjNjKtJmg9n4Vdy9iTwhHejH8",
  "key7": "2v5Be3mmUPVp6qVoTdfVtoH212w4WKH8enua13jzMy8SPKNrm3x2mb5etm5TEC9MYFeRdCbbKS2jt2C9XKNBKzDv",
  "key8": "3Qagrn8dRDBWFcnmwV1KusZgR52V8NucQQeiZ3FHCiQyU3kqAFZ8V9Y5dTUeMXjsdGWCY84LjuKv9UVTXrQmZDow",
  "key9": "3iLHcjuM4FGMaSiEqGTVm84o9UsP6VTZQS3QJbjfyS4RNMqbM94ptbenDGXVAg1tggj8fo9odzdLbA5MeZnPEE7B",
  "key10": "65MLLGj6yFwP6XC4LJYv2wykyboyiNTJfSTU6qzcgDmHorBFBwCnWiPF6uEgwgnfj6ZTxFT8rYN3Y97TMTCqQJtj",
  "key11": "52PnwRbViEqpoEeAv14VRz2iYcmEpJh53ZKtSJJu1SYSKCE1xpNp8UJkgBXGtiMCzuZhA4dwKj5gyLyNs8TMpTYt",
  "key12": "3HD1hPyeQtTpFq8HtpLjdBMptx3un1oba9T2jKty7LKuWkGcUSzzuHaoQo6Qq2qPzeN8GdYUzyv8P58ZRa2HpGyq",
  "key13": "32zaZAPaVD9ddKPQ7QtzJE9oVfX8uMbnPRiMe5cNLHVw4SqokZe9hyEBDRJRJUtLMg9jL1BakFQ2wHskBS2PG8CS",
  "key14": "2nwwoDpfY3U2Qu9G7owbU5Qs4aCDcicanBBjHJadGRztxGyA4YKsgu8LYVk5rA5ZuRCB1GZPc1uDbY3gB8SjuchX",
  "key15": "4XF4PkT842o26oQEN5XWnfVa2Deek4ZJ5rRCttzwB9WnzcMPjhnb61UcFgeALkrndwA1oC2porMyfY2kAXcyD46A",
  "key16": "2ZdynRAiTxmgzfSTESs6zjcqCXsrwT4uNtEn6iorKwTfvD7693mDztg6Eyd4kaczyKq2LyceBhugtgtjxc1S6WEC",
  "key17": "66wUiRR1SCkLPeeoM3ftCwfJJ9vpDb8YCD15i5iU9bUaSKvUmX4UFn2WRvmxumfcGK7vFffV5yEMLuCCwp5cZZmD",
  "key18": "2K7tht7pS56rDNxFrQJ5D9Pwad5ur1j6THVgoRENRx6GfFNJKB1QY4uW3VsTyBaLfsxzJ7B6wB8RyJZNYC3RjQMQ",
  "key19": "VycXHqaGVcP2YnUpRJzZsAZeZbkg2tYWnS22LaUj46T5wFj8vtLsidceGE1xxTTtp4aMVx9o5gisdMmrNdbG1MA",
  "key20": "5rdKx99BAQ1WdjbU7tgvFSSZztdW2iSnjAWw7fAmcDwxxEsBxUZtqMWeN7CRwuF7gVYxuqugjVw47EXiX9jRNkPQ",
  "key21": "5ZGdb4D8Yd9RUJojwnyTCAQEEoBFQ13r5MmLyiZw6p1kKgS1RgQaWSSyQNDG333SSk3dTWHUSdqUd1DdDTqunkrT",
  "key22": "43cVr1JQCAni7X2iZGGawSrgix2TcnxdNZy6yYWNJJRaxugE9KbECzX44TvkyRx6G7esvkguiivDs8SpdjeVAHSr",
  "key23": "2ai1qDAJ3acjWQvhFFcjvBEHJr54jMDsudJD4yAsF7AJbQKdhn3Zw9zCPYS39xBZYqLGAzCj4aubHnTAGEiycQS7",
  "key24": "3wmAE4uiD9nobD2Q9zCC9rrcSzwYvGCQoA82jquohJJoVJaCheVkb3L9kTN57j2hUpgUiCV8aaMtQvPoWAVsShpY",
  "key25": "3bwStUx9gLbrcsLGBhQYkVJgWMmiDoE2swhY2qd5h1YZGu2TP9DBA19iwqKbkz7nhhLuRXMH2VTjSJExjaJBLZdw",
  "key26": "2Z4Zs2rvyUmagDdW8NpSN2uVC4h2BXzDcWTCgLLps6NFEuvzpPSGBdc2eXtAqyKWGBVnm3ZEgjQ4vF6VyKHMAezx",
  "key27": "4rvrejBaDbw8KahHFf3Z9MPtgxJEa5tMSbZj1bY3R2DBJgpiAfFQywzV8yrmehfET5HxhQWG3YDzaj291esJKmNR",
  "key28": "3tCxJCFibFr92b9TjR3z4GFSDZEhhe1SnN676WiX81ivUP4JdbxAJF1xQwvXqFEVBYgLsSy5JTH4UWLKdBu6Nzsk",
  "key29": "omgbovckHZm5jgg5RAwsYV9SNnT6vkhsHACiAE8MvGtjy7FK8PSKNWXMiqjgzPcmYZ5Sg2ggsxvf7DeDup1b4EW",
  "key30": "2Jg8HEo3vZNWzpEh2gGik48NYrgKCuVEquR6HrVNWm6axgrYfZLQxdk1oQZWkvzmcnXEonG9mE84j95VQANaxWR4",
  "key31": "3Gu68RBNhJVc8SZENQ18dkcikJ2HLQUCeL7RJHXUBTnJSECDcFwmenogGfmR5Ao9ZGBnoMTqMf96wf7V9QXkUnT1",
  "key32": "5W4kxL5V5jPV6d66HhYoYcgjhScpzb6bDvRd3UM3pujDw7wdoY1RgbmDroD2kqK393G97JrQ6kA8GE9Ljj6C6QnM",
  "key33": "37uR5Df1iDVGFwzGaDDmX5fNGrKAZAWbkt4gnxFzvKgdg4JwaxEm7962km3tJnoyDwNGrMM9UFqG949TdHHnQGaB",
  "key34": "2tjjTEXD8GYH2k6V39neehnYZircBRuYd1XBFDoTwLXYQjAHopwmCMJ5trjDsGv8aTo74Xt1Bkz1qEdhwjHLU6Rw",
  "key35": "611MoDbo1WfGXQsarTNvpYVaeTkfQmCKtuGNQG92vwiJNj9DuzC4MNsiMhZoma9VoXHJ4rDNRCp3GuVN5WuPsu7H",
  "key36": "3oiuVV3cRL5jMfAWtFy66zUwLPPsCDE8jnE8vhhd14ABKHjzhyCLpYRXeZQUa1PfQYL6o5n21Xz2Zx5i4Fn4Sfiw",
  "key37": "4abaCNsPdaSRSh1fFpU6ALpGT4XhHUpeqf3U5LH2McJNgFa2brQmBtN3ZSxNkXGN3sa3LqzCwhk12WcNU2R6BAKh",
  "key38": "5A1FpzroeTYNYJfc4FErd5xnTwTSguJks4HeRmaAmsYiDwL8mG5x3fVGQy4TGcwxVi17HFF86x5hqxKQpH5D3gMv",
  "key39": "5PV8o56xRXPgyRCWmF3zSWkfjHZyZhmqbeYhmiwiS75bAMjTMtn8vSCwQQeP1R5ri9w3F9LZ2vch7uh92aaMgp7W"
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
