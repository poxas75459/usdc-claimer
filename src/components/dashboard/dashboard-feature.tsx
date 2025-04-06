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
    "4JPY5B1iqKA3YnXUo73uVnUG2rg9V4qi9t97WD5RgYBp2VgTmVGLP5eWYh7qjPAHNEDAmShQT95d16noR5z2G7SS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1MKNb1N54e3XYXeXMqKRU5X4t1kZ7joZrHEfDpPFFiryToAdaoZEd8BgE5SaD9NDh3WXvEogGeymT3pd8Wvvca",
  "key1": "655Y8F912sBMogfvGRePhWaNMhZVLjMpnJYkbcW468eh7Y6TZMbpK4MrEAXTx5gh9RsRRr9QAa1WkqdmNtW4Worv",
  "key2": "2hPybmvfSzdHdbfNF7x9j12sqj6aHZQTKBFXMFqUjijBRRA2yRtKURdCDpt4DFYfV88MBxYsvBZYs9BGBzpJsWEJ",
  "key3": "3NJZsd3Z3y3J4YLJvJWDUiM9QCwFgyU1uD9L54i4JCcwbiibM5dZFeEQGWN3kTvkqEKXrkdeQUn39pq4odU5RgJz",
  "key4": "2r8CMDeCQMN9Kd6wMqrSuzmA4iAYGCgnBWvzYErD9HV5BBY52pxXCZ3BvJSusDYZnvpziyBKCum8ETECnSnkDkGY",
  "key5": "2E8NjXbq74Jp9PDi6HZEJnRAECm3jpAVFiB2b1aaHzCcSNt61PjGUpzJAY3N2hd8YCSmwnuKQ7VQeXp5xEkwWgEu",
  "key6": "4k5FPhHKts2D7wkqK8qx9pHgoSsQf6Tk8bzC5sDSqCisXSiXhB56PzeUcvyv3eVQZZAWMYYdSqRuYfPvEytgeXPb",
  "key7": "38xGuFpV6hyXbB1Lt4yhRVDcvqrMUd2AaeMkjHs2rAzhVugZrSkjTcfsYYbxmUJvjwZcDjAWhKW5tzhXwKLieTUX",
  "key8": "5QtYLTDdCcrpWPxCbjYx4ARGDMpmgJkUxhWWuH79wsKU853B6Ga4mXN7nwepsyB4zZxhrbKcCjBTajzz8K9AQTV7",
  "key9": "2yNTZEDjjVRypFUBdrnN7wtPFCx4JiPniijLonWqDXD4o57e4X3huEWdiLBYNbyYYzTa8KwM3JJzgJ9YT1VkXvoG",
  "key10": "5NReY4UfYvsh5a7ZkWpgn8mpYjpTZAvRtudRKCXqBZu9xjcRJGUd6x6fThpgJF38daRHudNQvpt6XeLMPVRqsvVP",
  "key11": "2uJNJyHzf4GTE3dpAeFR29sbAc14K4k9iDVewVXbGGdiiKkETpRkaXtfASGtpVUHMjZho6htzy9HLxjvvyL3RxT3",
  "key12": "EUxFNm6GpzDWW1PUDWbmL9NGDyujHGYPrZULi3YZUchzcZPrhZn6XHsaAow2uxRYZTQzr3psb8Bf3EYhbnQzwmr",
  "key13": "3RdKj9hiPWFfJVPokKDEiRukQr4TMtcRJbWVRrR9aTssyZAwGxGyZGFFcRBcNn9WGRvfR99gfa5BJu3RfwBY621L",
  "key14": "2fUSG64p4R5JYACrb3rDHCNQDXsCWiUq4m2ai9rReGRRSYqKpN2QPm5yKT7erWkNaAiRkoaxyNLYxWcDC1feyHz1",
  "key15": "5a3x2BKkU686EX49AMo3p3ZWUguZVEC6xbtPs5D54Q1awiZyQN3QFSvScSoodTx8BB3APtZ9n1YiX4MFrAKsuuCt",
  "key16": "5HnZqNnCmaQHnxbjV4fDHywdso12AtW6yfJpwrJDkRCZo7RL7RpG1EWK98YHe9q7rmBJnS59Xo3uhJFvgX4kmtgJ",
  "key17": "3qpFon7M1tezPg9fJqkdFsS3C71s6gQiFww2w2x3XM6C9Lm8A1wkyDoXqMfLytTn86Hn97oSJSBu7pKMrejJ8yYM",
  "key18": "5XDRPk3rYeFAHHSKYsuFybsKk87zYv1ZgH7F882yXAJXkkj7M2eEXNS54AyYT2fpddDVk6mdiSqZFeHjhKWPP8CS",
  "key19": "49mhGcVaZuKfwkNPsSkHPeghxCcUyNBcD3UuJbeUaxkAY164HfWV2rZzfJC6eq5DuDdi3a62JPCcgaveTnMLeFLw",
  "key20": "21PhMD679nZLi7MB8pJwp9FsM7RnScFVh8Zehaffd3kzJhi6sjjn9z3eRCbjKZsx8U8Wud9RTWzSuRe5ZhYaHg69",
  "key21": "eVcP58wxVgG9jerweGHWUhLCUH8WqJHhpEh7aHiPGoAW5jAvB1LGY9CpnTkokuuwMf4N1uqSv2w95crqfV4NUh6",
  "key22": "3B48PToBxbz3dTYmKdFEcsx3ZzfwjghrtkVU4g6QrqmQKCza4LxCm4j2CFYJ1tgVgU4ktiht13hzC95LqeXEVM19",
  "key23": "39T6SfQxBCv6P5UzamKsdK4t5q2aUmMu7L9oQqmwbFABmRPGL7zeRMfLpqAPaAWrtkuSmcDLJZiNw2ao9SjpYoUf",
  "key24": "2BX34HeADWV9zQiEBHRaDBMjq6VsyjMtdDMM7zbg9YmJPKXPPVyYJ9dBmdsxVp5XsdaXEfb5B6bu4V6a9ZSv17id"
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
