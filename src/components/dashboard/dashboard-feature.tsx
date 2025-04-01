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
    "4WSYVJ9gzDUUi7oixZv6vBFeaNe1yERH5spQ4dfvhHGp398YMipfEaQUKJkDtG5HMtnDUQDMYd1NhXTMtr4N5hGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbjRrxV7QUkRnau8sxcLQgsPLpG3vDVZuYFSiwarzcgNvX2iKDwuJvjfF3KGWDdJFcvz4tf1Y7Mn8dVSAJWHfuk",
  "key1": "4cJJm4X8niqb9KTyyUwWDSnNuM185Hf66n6MJTJvHZKeqDkP6Y6iBVT7zFJfKvfGTt3oVRTmLAwRwHHpV2SQqG4t",
  "key2": "hACZzSWmLiHM7Pj7M6PkRNfeNNcB5Rb3SEg7LH2HLuvKBUvpyFps6zrF3gvqRA5STNKJrtg5dPouDFVmgUDwa2K",
  "key3": "5DGSQunaKmUYBSgaByy89W4vSzaU2pp6Hg8wmrVib7tVZD5rp1dEbSVqSqrsWB8BqxrSSRRipBeXYypQYKNcyppN",
  "key4": "4H4VPDGmxGiGX8ZzV5Xyeuss4MiXmpRjkvgbgWkxNQergRjmrBQe3XESjkLkZpKDeo2YRziBNJYPnVVXexCzpkba",
  "key5": "3fqdxUktpikgPgfRmA6j7TjouR6jYs2x1dzDw5y38wUJGiLY7b3JNhVDRAxG1juC32hNYP3vKeqvkFn27we3oLje",
  "key6": "2yhx1jHekRKzsKpMnvRh5hLXMnfxgyke8K4aUx2GkseGVjQQY1zWKfE12ZwtYmVMThyYoShtMhQ1AUoLCwur5wcS",
  "key7": "3fuv5eZyUzGdqGd7RnXGJ2fwCwHkSM9oRhbX8tEBQMUg5aBnkk3Ug9jbZYRuRnSs1hceEEi1MW47Hw67SfWE5JqE",
  "key8": "3wCmBM4yECT8fXkusMDywn4yKrhuQFV6trMwLRPregfSvpVaYrBGjqSSR4BLcBn1YNDhHCUv8wJhtEmdVQPjSqzF",
  "key9": "VxqkCpjHegDfwXLDYxziFXcNNYvrcqThKrT51PSAJjar3Kfs2wTajjw6rBiJpd4KkztdK8MnQeGen6LNwN9MLLe",
  "key10": "3oFd6KmRv9ArDZBNjfjWVpmea9GKhbFJ8Pk5FsXo6MFhvRBLDWJ7ny2bTj4CKcLzyLGX4SmwMH87AXLKRYRQKZr7",
  "key11": "5UvEorHcBQFQaJ5aEYqtRYKXo9WkJQUueJUvBm1Ng3cFW1GGsqsrNA5oZDcrPBXmkTmzYiLPnHti3aJ2cLAbdUnJ",
  "key12": "5HPQy19Q3RE4XmRtm3ZDvsoTXgMrK5ra1cQyEyroeh7gr31Bnp9yAUNVhARD9c3V5w2zZHuzdHvvMr1H8ziXg57J",
  "key13": "2bMy28LXBEfVVFhUt2DA2Bw3KEsBqkqm1HCXuwS5X2jYArQ1gvjd6Eyr4ZK3pop1MPHWaNsBwV8w6bQgJZAnmvG2",
  "key14": "4gvjirZ92Lrcp7yqFJyfN2KUoUr28RAQ1hSik4jLQcf2ZEBnGtsXtgYQqdYgxF3RmgY2CxJusXcMzPxiCRyky9jN",
  "key15": "2b8sdzuLxG7KSJTTVo2ZDxE2yL4ZxnTf58Y1nhXK8KXX4suAhmZAanBLMcVmy9DU3tBgJF2qgQ7yCw9ZYZan8U2h",
  "key16": "3Syuzotsvk1KDGB7JJJ4DDRjq6Cd3ekao6Zoymfp1FDhh856kce72oYWjagSZsU1g9Agfx6vZgVPog4BZPutdzuQ",
  "key17": "Q86wWUQpiLavt7xbh4hTD4n4h9gbx8vEfxeQbcqXKYW2Xns11Uqib5vjeKaZZ3auLjDYbdoDJ7Q9RcYZiFo4vMv",
  "key18": "5NBSUvvVAPb5oXkxwYSb7e3Jzvg1UuNGKGDbuJ9uQdXrcAJajxDzgyTY5dd7JdfdLSdunRaXZfNTAj633SLxgBXy",
  "key19": "bgSPTMpgdvkmf1P4eTLBHfMAGmKTranLFxDCDn3GUyufdWGwikryMRBMhBzZ7skFpGCLcBRgeYvqprMgR4BMUAb",
  "key20": "5BUTKztj5QPizuKpSjYVjhAUkdNiU8zcisU4WVeuFjrJ3TFFy48WWFL32GEuuuqsE4CLbK1fxiEabHvBh51ueAXN",
  "key21": "5xMW6fzG8mY8UQUEMdAkKQEFNbHiQmpFs7uMM7uignDLUpvu7zBWHRXtCXajS6eY58gYzp48H9NPHKzCwCZNMJkE",
  "key22": "3FDjjtQarwuMwsKrKxs6H4se6yKvFv5kmMpuKadQzW6YvMaiWsMbWUkgRkHfg5kj4iZ6iquoQ1cnyuZwNSAwumoX",
  "key23": "5b6eEznZTzprhsnkBjkU8GDeyigdfqGR6Xry5MbWLVo8d38n3Eaz2qTBsaLona1q83izeCJf19Ji3kYYxaMnNoGF",
  "key24": "jhP8XdYfAEqf4UMGsQ5qwX55swnE8WbRVw5ZwQTzMLhdE2bLZmZt8iGWdc2LDuhLwqZum2JkGsYaN77pLmjCgYR",
  "key25": "fB46dtdPTggZak8nVFG3LhzKfscAYLQA73h1hfmTdey2uaQL4L9Mztfkt8T65m3rEN52tKPuf2cGkXFuHR6SeSo"
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
