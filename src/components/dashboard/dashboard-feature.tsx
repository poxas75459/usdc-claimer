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
    "3VYRgeLMogL7LZPE8okAPdL3Fcw83Jp6S5PcqtHHGDMEtFqxeF6B5yYVWAY92YXv2Rh8UCjjCqiBFesdcXeqj8EJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HztToBhJM8GDpbDWrjzCWBNnC52qRuzUVamNws3HWaBJm9LFLi4cqGKdE4Hn4rGgVEMTZn4CkMWoCjAXyVe9gpq",
  "key1": "4pCvmoT4Mjr8dtZBHVw3eLXC5yZqMBKUNwCVsaot5fWoRc5MFn3XPFdM5itJCmK7hVmZKrKA2uUCH4cw2A88tZJZ",
  "key2": "PS1R4Ch2wn5RPqvTbRwa5ABd7c9FjTftP75ix1FYgjKjuUDLX2Rvogm5Ko2vYKu8nwW4p7nh4WzAKkU7QnQPT2J",
  "key3": "2Q3ZorSkWLxbwtNX4zkVNNWnnFCWpm5Jahn1W1tysEvrZys6BNQZJfuUVcQtVM7o8zB2ksQMNowDSJ4z8SUa9RZ1",
  "key4": "4BQooAVuu8khC2aJ75pp2EA5SzUtsfarBuev1iy1NxmL8HDsR7ipvBABSMZmeJVpiQQ56nFD9xFCriCC1H9MYjWJ",
  "key5": "5v4iD3ah5weuNXeE33z7YHZsrHaF5K1c8ucznweJK7TV5c3uGfhjfhURh2DofukkcAyBdHvuxdNfHVMSto5qFhVf",
  "key6": "4ruRQjy1Bd6CMEvq9f2yT14yTGRsZZi97N4ZhvbtCt6J8Zpv4j7Be4uYyGyECg8LqmWMzdKXsrVfsQAGo1Rkeody",
  "key7": "56JSEBqwGLPzLyjFeizLPDAcPFutR95SGvXH9sBVerSdAJXSPhBSodXGr2D7y5MG7YMBxDD7Q5TLqT383ag1XJZs",
  "key8": "2W2oPtA7Mz3mDF4yqaTHt718EVyFbS5n5qaoqcXNQwdHNdWGLuDFktLnDLLSsxYc9CwSjqg2V2SCsti5MzFP4FjR",
  "key9": "jcAWip6qjZNJRFnLMh7N6nkK31J8wzjMKSLfZLF34MJks3igXu45m6xpgc35QZhNMwwetanL6t9TTPEJcGTMTpB",
  "key10": "2RgWP5L8jSAvzDYj5e6ukcJy1D1tKDaMc8pQvczXV6vE5ffT4NH6ZxSCqbYzX9BLik9H1E1f9CxsmuMngJ4Qadq3",
  "key11": "RuqxBBsobCGCffAwnN4rD7Rqxx12gDBrymVz9vMck6dpFatD8SjiXWUe13FBNzhjv26tB4Q8hs2NMJ92gbDCBbw",
  "key12": "2mWHHBMMqNU3iGGxeUaj6KFnYRcwUwgoT8XzdtRtadmxqBvoM6YRpcswMZ8mwBtc8SADgCjMrP2McJ9k3xkx9dic",
  "key13": "4jF2iSi3Qsvc9AZWihUfM6QSY6ksePJ6oXnhpBcG8AkwbH47mhAY7QTWdADoETGBm26boiSYyyWYv68CoHWKVhQU",
  "key14": "4hcfWPj5roZFmUzwgp22RHCp3xYQQG7DWiJfKeg9n2ZAAxooESYntr5FkU61NP5ShV193zKDizJJCvuD5fczyb2s",
  "key15": "389m9U5pcD4mFZKoG6nHerV5ms5oouCtd7oVmuYSpqd6fbwHy2zCoPpD47aQGJFAecAQ3beDHHC3nWHiEx8WRTsD",
  "key16": "4CKb3GkLhKt8YwXsoaEUaivYdB2pcWLSrxBTWJvaZz7nDYhScX3i6A82UbiziB4vdPusN7eYtwZYWaTo6CjfCCrk",
  "key17": "5GkjrKa2nHJHhnpZucEM1mFRkLeRK7wiMwKJ9FJusp4NpKufmNcUMLtbPJLjUyof3RTXyUf88JuEVGuMgUwhcjZn",
  "key18": "aGvYvSBSNFsWyz9regLHoWR39xQ5AH8S4icRr5RoeK6ZFnPPAhKtGJy77Ztqz5UwjCtWtjWcgpDNTJKeWRNsHaB",
  "key19": "2LPnz4zMk6kGZyGxQp77NZdbbyhqnM2rfhFd8QcEBiv4nHwMGxfWdN21KjTtXByJfkB67aGzvZgwToZeWnZq8Qtn",
  "key20": "5RSiXU1mmVSjwacpagJcQKe4CDQCD2u9mtFGe5BBC1jSzsP2dmr8Jsn7EN4aHMe8sU8tNNWnZAXa9JccabfZUJDV",
  "key21": "2JiK3FRBEXv19hC8jg2QaW5AgL8v3HkDA47T4M7exxgUqdNFqKmRj9oGb6Ku7W9tM4C1YFLs8FJ3sm2VW3v1fy4h",
  "key22": "2WcUAX7H8zCYksNt9f7fX79Yp7wxhzsDSHmu3rLoxoc59NCKUntNq5UhMHMk6LnUCm5yF3UCMp5eHnBVJZXgFQEM",
  "key23": "5e5Wc5ayrF5Sjdf8NLyQu1fKZJPK2rZybU2dDB1KiJZpUtMseH2QPi3zSKgBgnfUwwtm4YZuVGdNHMgwKbzK8xm8",
  "key24": "3ibsKHhaGQt6bMK3s2UUhotFPTjjJBj5oWAWyhFxTR9GmCd3GepjjYvZi6DZ85uwvFDe3SeTKLNCw7KKBnKV4Tg1",
  "key25": "2AENKZdqsRTMNMfoxpwJAaau1cqAJ7vCJKAdTdPVYGMCGnNDNNV4ynQBPGfzGiPhPmAV7zP5oCx8HqRtib2WyeRQ",
  "key26": "311JSDuv27b7Vo63D83Bfta7Pjrs8kh45stZD6krU3WQngNW8qUeWQ17Sb2z3bULvGdxkn3ETD16Nuu5u7X3YqGT",
  "key27": "4RHi3R5zhAQ6UMR8GGchtLb8qvwWusYqPNWrHNPbkJcM2yJC4ejFUJMtJqSeZiZ4ZRdfZdJdKwumA2NrgVgTCLGB",
  "key28": "4MdSwEYtYYc6NqKTbrDHrk8iU9X1h5pBXvj337JyBLxBKZKoevszTPkBmvihkq1SeJHDJb6FqV4noQsmCppPozZj",
  "key29": "edBD8bp53vr1iZP3aNFrrfBB78WnpVdKhhtrNu2F3NtC7QuysFdJ1jUNHuZVkZ6PbrKmb2iacaHdaxKp5i87fN1",
  "key30": "5Z94jCLLwmnYQFRoEWLhD6Fn2Sjx5F3RNfiHC1HaAGbuUD9gcurAzFhxPkDTgk19V9ZrENTk4Z3EbJ32qPAV4mzW",
  "key31": "4uLwPiKozqJStmh4no9btTA1Y5JuPJxr2NgugBxDKJ6YJjCKzcp3vFERmRDpTmiKTy5fMyfZN4U7wmrJbwumvKJz"
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
