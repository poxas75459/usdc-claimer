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
    "2HyBjFm8WuP1syHrAcGdn9KWTe77MYdqRKv7Zi2TaZuZd56aHsgZWdrdoFJvMsAhsXNvAjeQvu3zBqaEZdu8xuhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFknPDAn97wHfWPwcWyhgnvVTkVW1dj7QE8PjjmdLF1W1mf8aepxF6wsLzYE3MFsoASUiVweKVQjknQGVwpdoHc",
  "key1": "5UdMGGAhr4v3rhpAciuH9Vic5VvYTASM8QDaXQD3A7w46MS6MLPMS7T484gT4A4NzVKLJTEBTTsFtGJfkJjiz6G2",
  "key2": "5duCACgCcFDfmq7hGuiaQJ2TY5jGQuLGQSrZWc66Q3ttbREfAVyhFBkxRoyieP556any83a2pAGorBtXQ7eBshbi",
  "key3": "2uvo7YG2ibnVBQbBAguXeEqJc1huHGvSZpcRsUefb7t3w4f8YxB4FxtWC5fqfyvZDLP1NPvMQtc18Ps4RYkaMeZz",
  "key4": "31zJ6fgzGyBeD9GJJrENdXCQfEmtcbeoMpuKhnsEH2LvZuFUsJHa55H65iRndsA3ASvWNcJ29aB5HMhvTw1Q4jqn",
  "key5": "2ZeJcQpZzKo4WDWgWKQRuPwTnS3w6x2pc32LAJ7McfrAmKeVLrqwAR5hRVeZU74GxmXHpMQsTsv57CeyuJNFCwTa",
  "key6": "2truPFvRwbK2msy7qzsaBJZ4RcojLi618k5UdU3uSZpD5aMuvevSmsTyLzPuvzBvtHF7BJRiCvqKkaBDDt6yHg8q",
  "key7": "2uJGsha3RCoGwCk43n2hvCaxLWsqSGUyWeZa8r5Nart9HEhmirJHz5eytjJAC67HMeDq1fmXECX8hkb2dbhQ84R6",
  "key8": "QJSDbs9jenDYRKTLxLApuF4NPsWAQtaUoGCAcKcX2Yxnew8zfLJYsxK9gzugh5Rh9kPTfLt94KCXi1s5YDVBzEd",
  "key9": "tLwzugQHxYTKsma1wNJxVDM9vuTQs9ushCGRmy7UdiWkrNvu8QGfPHP99Wk8ZB2y6J5NgQ9E7BEmQvSFzzSJuK6",
  "key10": "4qCLsxhiZbS7W1tP2uZd8eHfXyYczyV4qjTgqjydLN6jqKZb8H1vfWQwSHwBwNS9joFNaRbN237aKJUaGAvWCPEt",
  "key11": "3EifpTNFxJ53YpJS2kwUoBpkT5LXeoWwGtnB2VS8D5N7JK4VzeEZMut899MdqdXg4ioDNG6Krmdh21R3RqzcdVMk",
  "key12": "7xDTpEmnkaWH8uy5DKQ7yUghXoXZ5n2zkqC6LjKq6N3AXaBbnqQ4Z4qfuqcqACzi3irCYFT7c3CPjaNNMcf5AmY",
  "key13": "bCFrdu53aeFwP2BfgAAxL3qgdTTXmjysAvnkVqJhXBMHKkwF1QMAuc7BPjx3kPH5y5Nhs1FygpTV66TPuJAX4H7",
  "key14": "62kGACx8UPMYK4bR7kJqgt7c1uRx8BXCL5NZxToBj5VAPTMk33bioLYiYM1N887L71TDx8mvot9vjXVv6nQggB1b",
  "key15": "48J8QpGvBZ3muQEHEvMj1cR7obsiaZJU4pDU9aRZLzVUns8GHXMVH8r6wUFFUVS3J8zBuuiPrjHidQAwmx6zb2id",
  "key16": "4BU6vfgKhpsQyq6tZmE1j66tP8y72XMVAMfYJcEQd5XUnnyk8Lz7VhqFM6MhEe91Re7LpFZsY87JLPaAzbA4uj4g",
  "key17": "55z73iuzYqFwQTy8zBFk7hpj6StdJVai31b2BFncggnD2TEbrjZroUnMZcgKugjbDWKsdTGsDQHzL4fPfXepHEHC",
  "key18": "43dEquSdoxmojV1eSApxEa3xWFUgfa2n2RQqqN1QR8HxByQXVT6JgZGkvFpCQ2vxKnFZkjJNdtBX5iH4zFno4cK9",
  "key19": "3A9mYGPKiAJnLi2GZbR6VXbRuP9MBAJTokDMcKAVQxqi8XWyWTv55UtMo3yjD7sHtcyzHSjCmdzHvSQZAxXw4THv",
  "key20": "4iSbDeg6WppNJX4iSH8GAzaJhM54VoajnaNKk4kFTSxxS1v1RugCSK2ULmMkNLY7STy5E3G363g73M5PuYWbos29",
  "key21": "vHFPzCgRgW5NeZxZXxna7rdQMTMTrwVMdf3KnbitpFdZbWKAhYr1K47WqVhMfvFXbyn1GyNkJcLk5GFHLvxs7FA",
  "key22": "3o7s4Kgrf2EhikF8wJRXkbhCd4GXjW49m4LTbETYXxYEoStfbNNuCwUqhVzi1cePcTTQYfYgpwndkogRmh4VYBDP",
  "key23": "3B1LnCTgr4gpUcZfHj8nMcSHiUT8wJLVGYmSmRQ8XsLYJZJuQs3UzZaA3gLTQMfo1DxiogNTU6ntBPednofhJagh",
  "key24": "QbD4qbMA9VqFXYo9L7nFhbnQgQvGG1ijiHXy6nXvX8mmC3h8tgwN1b1qGMGdYUBaXFmqE84Dj8cvkPLqFycSuTP",
  "key25": "2H1PMkVSsjvVFEH5qXc2WwnVsgBSiikUB4TDYtBpy6NZSjVGX2oJttcYmPgVoCUUikiyjQjttcT1rcfdaNAv2kur"
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
