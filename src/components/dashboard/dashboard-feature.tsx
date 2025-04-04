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
    "4QxL8tABHWA1U4b9dByRagRrxYFqg6u4wAyVrPRfgjUMtQV8vsjtV9Eewz6qMhjmySTKmzVmgbq4otJuKo6iwc9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQ2VZUjeEZccnRbkjU2iQZGTwi7fB4KurkPSMvi3ooPY53EK5BaDJZfpXcs4tGab8X87JP3WSRpQPqvKVuozp7d",
  "key1": "5XkLhMsPqTiEfsRFhLqVD2wuQUZjAPCt4n74bxjY9Xo2daApzdqL2yKNuKfHgPgH5NmcY1ToE9pRKzuUSbRH2JbZ",
  "key2": "67kNWLBS76RGbcDeDfWYXxpD4UDwhjxL1rBHjpx6ynT7tQ4gd6Qi4qkrp7Zmz6EcHJ1mRgbnM1RAXJWe5ihpzZQ6",
  "key3": "3BQVzZKEvTGxjB8Qk5f1PTpF6pcZFnw7EDcp4Tw3u7PrgCPy2K1aop5imWjgvtEvSBxAL1udEair8kVyzn2FNDJV",
  "key4": "2pCshR1mx9gBA8bHwL7s4kW65hLjcSXNQEiNWTkMhBk8HN2TZmiPfCQ2PrmUEGCb3YbUTdkcMaUV8HYAfwu9iXun",
  "key5": "zRdoyfdLuHmpApJeRkh95vLjDoRmaPKJwikRNbWc1ZfSKTiLof7tN4ZPCc6YxKuiDerTdBDKSH8HBLMmSkNum22",
  "key6": "4oWRN4XrgP6Ky9zBUifTwCawWUegpgvi12L18RniwzXUaG3uoA5pTb3JH147TRYWmAzyNxJugVswRbNv5BZsAQXx",
  "key7": "Ww6YQ1HzzVag5dVtMn35RrJ66Ae8ReSqpHLAveMnHNTRqUzmCke7NPb6v3aDh1iLm18y85ALHgdPWvVv2qMyk6S",
  "key8": "2kiHcY6MyYLWs11V1DR9mMQxDHrHj13qC9tbsTWHtueMUJkPQFYherT62uaDq5DokLprr6ABqhPhggjbGzzf9eHG",
  "key9": "4zdk5pQwT2y3XLf6bAzhQQFBbyVLtjJDis8TZAQPFWjTcnhJ7WSgFH7eVuswdsvM73hA27BX1T69nuXF6ZxrLagP",
  "key10": "5tdiJ4K859G5kU6nTJASzTXcboye1tpY9YRf6Ei3RRAFemdgqMLm6CLBNu6KLiy3MLUojJTF8mFsQJo14u573jE5",
  "key11": "64SG7naqWP69p2jnpCVqZXwmezEZUvrtE6XTrX5T9S1nj2ZBtPBiacdmcNqJcQJz5tzSyjVrdDwrYPdo4HZoZ1F6",
  "key12": "3j8kdAsxprbosTrmbYwz1maMaBkxBzxKZce9y5JHoumzZneuJViaJXgJqfWn3ocC8BYXT6MbNkMgKLHzy3W3bpeC",
  "key13": "49YhpWEJ4YRGHBWRMYD45Xj4ZhWYZCZvfKyZbecSTbCSX6yeTf3KstvRadhCw39PtNqz7JquFvB3m7eBXhTQz224",
  "key14": "5pwiss2WrNSbwF2QEBjz1si9zSXFn3RRSuU9ryWt19w3HbTD8gRHEWVibhh3PK15mPAvPKA36zyPpVcj9EMebuC9",
  "key15": "2XHUEikJRkLLgkdkh6SFUTftfTzcNrRsvw3guGyw4aUvp2WGtYT3UMqLxzWGCyRB1pbi6YDmRpSuFAsusN3M2mkj",
  "key16": "543SWd1RYgTrpA13WUYDTWVKmEi4KJdMDFMSbxiB6KspdyCVbJDk4TzfV9pA481NN3N55sSBW6DwWmHTuMFyWeV9",
  "key17": "598y3WJsKCzKFCjJhSqxBD7qJ8WXyJr48XeBYfAL7Simp9aAKBV6HMUcaNpAEHGNUZmGV4ShDw8gabTYvgXyUz31",
  "key18": "5rQ9NLyLZC6QW87bcoztDaZ35Mqgamuv6GVkJHEFnnJ6xZyHAXJbSUVSUPZPvT4WAU4RZCtZJ2U7GwYztnmmhiBJ",
  "key19": "5UyqFXDmvNyHXYR3LSZkmnzrqTWcMWZExWDYot5xLqLAqgXZfK7nSpKx4CC82MvyNsd5Lj3hechLNZV1xXzCyMMX",
  "key20": "5xMQHHoB3NJt1uQdvUUmdHdSzh14UsRd9pJirQv1LrN6eqKUnYt8VHVmCFQGf1v1cbczmHsfwcerFAVZHsyy3rKA",
  "key21": "5f8vpbctEeExCjZKJLNRy39LWgBBxKAMBNWuZ1Ln9MB2ydMN2UvM9XuJubdWJTscGNu6EWudaQajc9tmpUeXix3c",
  "key22": "57m5bG2d8yaMuP4A35qsFHXaZk9FywEC1gZBoLvt8oLB82arDW58iakkvxC4b9DkiTpTaJazFGuEBn2h2CpETm4g",
  "key23": "pu9vk9wAGfUZ6PKJfb2iJMLUdV15oQbBPNkumAGH67gVnAZZ1e3uwKmPbRX23qCk9GQy2JzK84N5eG6rfgDz2Bo",
  "key24": "5c6Gkm3Rxjzwr477eAVmWCiVZCBeVCFQpKNkwbB6LVaiAAL5ba2WVAPyCK6KJ1ugFPQ6yQgawwRWtjGCgadBLNdf",
  "key25": "5pEaccAoGr24sLiVMvzViK9bwQyL39DznGSux1onevF5eHhVQ9kjrnZ9JGoZXMDE2YdeqZuVCRqiLC47xL8ceuYm",
  "key26": "4Wj1QYk4afP1hDcuhvTiH9Td7hPEdtqtJMm5UmW4udUxwEvMUUqcGLYRSh3mKQMVTP3sAstrQV32KNUeWVmo2JHk",
  "key27": "47VBGuqj5etu4LTWXuFpUDvih84jLw8hLhLPLH7wrejMkRw3EdbZhF5ELMSx4KGvgtkq5qeKaib7UuaUAesjcYLC",
  "key28": "e4eumPqsGruyFW35DJ59X7qDDShDeHGNDpSSGGAdEQWCYGoCzSnpeXeiAkA928XAE7KgYLkkM7PBh3uxEEAr4iR"
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
