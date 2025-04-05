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
    "2fUPvbq395HDzc39jDyW8YhjJ9G82LHweKbGiv9ADVdQaiBpButz8FfsZR8SXRuwAYMMbwmM244pzB6GSmDjiy7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cvKFrM8AfrFy73rDnw2vCbCSiEFF6oxevmHHzV2Yuhkeg9M1aXG2NS1bL63Z8DBzKJXuPKcYkmkiMrDKGVSVLaU",
  "key1": "2h2uvtgoeSJXVepuFzhZ8reX9N3CNhhNNjGJqbs2APh7JgSNV9PuLdj2GDxDXoep6tdt8y8MHGE68HwMzhARp4BL",
  "key2": "26y6WP6iLxwFnXmJspnHUu9vHFPEeYvD6fYQPeSPkXuZMkv5N1RWkcXHXV7wmifgBgSqRZeAH4dBG8SXNmtE22hu",
  "key3": "5xS97mXyvnvwyoJrBNCZ3vj2sucJbhHP3MgiGsQATziLgWNTgfNBFaGya65ooLKG8vkexJTC24dEsqzpsx93ided",
  "key4": "5JB2LhzD54RiCQYxvtwVZQUoC8yXJweSkLJq3YthDD33cjqFphpDmNevZX9jNp9YbP6esn9eRWuw3ohU6GxbQeXY",
  "key5": "2vi73GgfzLcachLzd1deXSDAqnUQEbc67vRBTVDC8XqnUfLmx3q1uwBwWPmvBzrtyeFupSeB8DbWzdjavyTjdHqq",
  "key6": "4dkcdxk6j12QnV3Q3mJeteKwWUAmRfbzgnWxUXnMP618tfhLVQCfDGUt5rgdRWPNdtyyPZDVR6LY63Ss3uzR8CHt",
  "key7": "3CsNE5CTc8Y7uVKHnUxUN5hwo1hK5DX8Uhmqgp67TBKQoPTrzNHpa7NjocSsXzr35KtPM6iSNJ99qZ7XxNrrGFSr",
  "key8": "hKs97AKHYQmz4UmXyyVeQ445GuCvb7mEFUs8foJysngd73XFg6PPENFtZ9w7jdURiKAEtDQ9KXnXX4YoAdff9U5",
  "key9": "4R82dj3fYRYzXhh6zAEuftVRwgNkEHRQta5r8hdvzwgFHsjdTRcGCrbGEQjxqVtg11csrPvZb9PJQmHar5B84P9t",
  "key10": "2zsZmzDG7FnNDh4EUnxRbqg3eq3kxtA7T5Tn9BdvVoQfpAdUsWqYqKYbeoRSeLV6cMCSb94DaPT4tYPDUdGoQYbc",
  "key11": "4DaYNGz9nRi7Y3P4wgvg75VD17XAGZPckVqXcvoHTgfjUPVMcRXFYLinraGEv86nARHkjxNmqCTCsynvvwAW6iDm",
  "key12": "2fDojTKAjGN9hZw8ADXSKFHFje9Py7WVK7UzAZPAtQwre1qjxDzWACVmRHnpV8YdHFsy3L2ZRG1DuvutQeFdZjrv",
  "key13": "Ve2frRPtkZsAAsDNKMFF8mw5iGtmzNmSem4HyE3a27XD5K12ZitSJFvpGkPSVaJbzXFHFo1pjnLykjgAeiRzVHB",
  "key14": "ovemCZWJEbLermnqkMMU6uepCzzWykVV9cLzuGeW3z45Zv9hnXk7DWeqWppJWAnUBKkC6PQP82paaGvrQGdanMm",
  "key15": "23iWMhkq5fXoDStkCKhhFfpaMT1xvmvEt9uwgbUsFM4g9q9sSXfNcHTCBRFL2wgRCTmcTpAEhs89wn6eSQY7DJdW",
  "key16": "CTrBcJKZr3iTrHUrYr11t82eTEGQg8KfdfVsrJAkt95JufuNeS39eL23F6pRBXwgrxETU91Qh1UkUKcdnZrqZmD",
  "key17": "2VcfU6LeNsffdLi9KfEUGfBmGcvxyda7tzrCJhSrchXtFy9KdLkrxNGVSBJBs3zdPCMCAveDkHeQUSbXdk6hHEqf",
  "key18": "fi8mBNMM57oCJuVXhbX2ZxFnKhYeAumwBfAGRr6RJRrC1RCEzwkyscsVsruWME6TaD4w3zfsXjb3PEAcvUY16Bk",
  "key19": "5DcdJx82oZGnwBL6N4MeiHT5nmo9jcAiz3u7zwxPK5no9eYcdUUVQutV8AdZfMjZdqFtJ33Hfu8ZVmmrgKh8h9n",
  "key20": "2Da1vGf8HU2j5xSVfepnVctRGu7Cr4ipPUDdjiXN95zrDh5KNQNnkrbGJG9RMLEVKxHKactuG8FyxFMs3f24yTZF",
  "key21": "26Z5aAoWdm31vXexrbZSSooagRaBLzP1nnbJdwCCrWRZwcYVq9YgrH1J6qhjMKTM1uD215aqY9pVBhdaV3waPMJ7",
  "key22": "4fNWk2BRzqZtPjqvGqDG4un3ZYR5pDRqaAiG2JUj7ZfPBiCz1fQ85RL2euGCb3WkoMm2Jd63PsganKZ3HNpi25qF",
  "key23": "4uzRW6HQDWJsQTpVKFNHbaxuHrmFktEqWBQtmnJKqxN3oSbFfnqs4Bd8UmfUUBwuNr1rWJwkCqWnXnq6gZNfoJk2",
  "key24": "3PZ6mGempmPLZ1YDHqrTVgbCN3FBWiR4StvJncnYzsBFBUoz8Z8QLJ9MCaqDWJdWHHnbueq8pBkUNGdoHEti2RG6",
  "key25": "3ZE64HNDxy9DmeUDWnFmniXxs83DR3ra1TLZjgBHF4y3F43R4BVhFkZEwa1X8AiKaF5g8ka5bvFxBFFBLwnCiMn3",
  "key26": "37i9tgkHGo5YsYrtNiNoYscd4qX5VxivkXwsAbWv18fNrjGUqrfGGkrisC7tBVpwAXuHCh4V6utqT2HDTrCqo3LN",
  "key27": "3JEvzZrUmhxB7vL4MTrJaWgjwWyWJPKReDh2s4JTVVarg4FBSH88TjQjksngRf1ZPiyjxWtHHfN93x2js9sJ9vJV",
  "key28": "366zJrbXNziwogumZThs4MorxDA6CmAeVDDwWryZVvapf1CTNReFSiykxhio5pqTragApfhrz3fBAt5gLSLNCjon",
  "key29": "F7hnxpdhvgZW3jdymK5yAyQQ4vYqyePiDLfBGgd1vrwQRbZ8MvPwF2M3vpSThdD7UVcQTUsStTYUu2P96QXouxJ",
  "key30": "3TFvP4sjipWZKemv4JPMqpWYo4J18ja7cQsRiwp6HrRc4ZXqaA61fPEZBtUUNy9Yr4g6wVLv67goC2aELCnEDPoB",
  "key31": "3wwYZDfgJCPKddzfYKpXTUdZWDScQKUnNd1vbv4oj3ZgQWuBhrYXrM9AAZKkKJMyyR7SjqsgjaNX29LyaoXG48Ht",
  "key32": "27Hhis652nvThMeCFdqwhvTdmg7aGCFAqzVhEFF3GwqbNGp9HPkwLLTpMNbXYfLk7aC1XUNtCeDSUXf2QyXzEwtK",
  "key33": "wtXwBwM19hMHegsMU5A2X12EBrMWtnNgz988u6WGJTaHgxJKtN5heve6qaw4S5VF45UwUhML9Sx18uLtHayWWNY",
  "key34": "2HzTxqWzYkA98gj7zvBLtjc5AyAoWysRY1E6Dgncv9y33RRCcQtzUYzt4mNVKXxQ9NHqbpz3Nn7YxupkhQp3NPcv",
  "key35": "2qaUVYbydH7jB2R33Xgdf5fr3v16qJDbhtW9z1SfwL3PZbhPiznYgKjq6E5khK6RcxKnG4dTNbmN9Wcf6HkUd2W4"
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
