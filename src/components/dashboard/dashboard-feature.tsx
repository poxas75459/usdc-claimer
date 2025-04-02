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
    "4bWxgVoE9zFi2Vg4dLgfpbhJ2FuC7k9KBaEwTVaoYyt3nDhfVAKxxH7KaHAeToUj3GCCMkbarFf62dTu3nNXgmKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGNxKzfswEmENY1fx8d2NE9VKN5BX7g2wLDaj8AxeFke4AQqouiA7TAVjypbr7ZwASR7znX3qUqTCXeN5Fp5dw2",
  "key1": "4BpwE8JJJbPzyF8wGhYvjEKaxJDhuVpWTZLeeVVXps2Sg6FqgjtTWac1WqCPoTXNbWLUuix8eYeA81iXGVgc2ATb",
  "key2": "5f1qPfdLS4Pj9D2DcqvgPvMTXy6sGq62wWrimmGx1AWXsbsy8JWWE88FmqecntMHbpZRTNsYkuHJoVHNUkKn5wPi",
  "key3": "VY3hc324dCwHiRWZ3NhqpCgiZRbJtDvobDJAWQqzwqS8fobirxXDTgNeYb2rCpUMGRjkV1j7ahLM73RuoVNzhVP",
  "key4": "nhu814ms5UpH2Ecja96zHkVYQGDJarxPuFB4bygFqXGvTRVJwWsyNsGQrNRMKL9Zb27Zo8HfJ8PP4VT7R3nMFhT",
  "key5": "vzfkxfukK37XuY7thT5WH48V4WWqRAKpXdex6K8RDdB4xUq9WG3qZ8KPqd2vPRz2G8XdMCKLcuNg9RUWLmwhmfo",
  "key6": "3Wzs6zbPyZ2mLRhUPgTFu9UaZ1FMQTqcK9YJG9znrq3g19EmKGP1apM18MVeD8KB95BsfWQ76VqQSczzcgLNMTXY",
  "key7": "5vvL8tAUYa7m9dWeP5NhLG5jrmfuxsZUQbnJLWGvYYyjAufydWpLw8e42jRwfgcywYHRqsdTLUU6SWcnD33du1d9",
  "key8": "HHehWRGBgZ29EaTYmixdtqdwUWxPMVMRKtEEWJAkuid5PWV1jXffzB5JUWwsHr58T8dQQEXEa4AtiJWYuJtPU2E",
  "key9": "2kyBmW6F1AQy5kps2BtpDMyqkjqyxMwhFjSjHwswgBXm2RZU2RzxQ7j1QXfgzhkvYs927Ho8GMrNZGr6CqnXpTc8",
  "key10": "45hXYCM7uhzZjFJFJ5K25Xtfc1oDibE34b7ZuLdgVHaKxKaQZbmwQJhHrKdWqnnD2xsarLNEZx2jyQXdsk7YzYKw",
  "key11": "4EgiLk5gvheLYEtSYGnkk5RUgSkwHA4s9Xejpr3kszt8GzmTxHDkVx1Wjuu363Mhr1aLXWLT656tz4oZTY4b1vmx",
  "key12": "G592E1vCdgYCroHrvQLuUfapSSRSRJnv7PViZ5S5PPuWS8bMGpybodtPQwwypJ63S51hUBu8SAfFDw79yVYEinC",
  "key13": "567bV8bmA1vaDh9vbTWu6nzgWs8ws2qoQ25P7V5JaLQTeU1ukZrNiNNzTpEYuxabjW1zmuDhXQHPqpL3o3GurXkv",
  "key14": "2xwY9bgo2vJ4zLMbgpJ2uUtkm4zMWWuzvdbdM3KTiKdpERPC9HCSP4mQXqYLHa1SXME5YUMowBEgpwhhgqtNTott",
  "key15": "29tsxGL1MAdcpZ6HfGqHMR8UeUtRi5fx5jCXMzifAa7ayRzvoM4ydZJdT4Ce8yrD2uRgm2CUZ6AY2VkUsPhuwwGV",
  "key16": "3euHDjGLepiq9WqTQdiBq13CUxQJ4rYRxpkBX1sdsb8brRJo1aHFpX5VX6iieJfP4sQZWvgo6E12i7tMphkX5oHd",
  "key17": "5uuyZZRc7h3USr7r5tAorx6FVd5ZE5S4MuiyZ8oy7qZqKGBLpSWYy8kvMYFNoPrSXpXPHuY3v9jbnjwCA8eZ5y7",
  "key18": "2wW7L5GNsc6Mc9xXwufZkjdDw2J7RYSTvZK4hYt1fHpGPW1BiKoSpXruknXNgeELAvBnMdA3KZtEw65zvMc8UvY5",
  "key19": "2m1SebBnLZUZ69JPbizo6AWLgG4NtwedyzmP2wFG7u74qp5thwzShWXNpwyPkc6wuotLMTx2FzsfuZZYaCF5Z9c3",
  "key20": "43fivzTjpP8upFRZMBtADQ9cz6BYKGYBmFoaZjWZ4rZCCSuKRYE6AWkdFPPrdu9n5rjUnVvpY8yovxFwFUP6RcyS",
  "key21": "4vCnwSKuiPtDfUeFN9KrqbN2UX7zok452FEtbq15vJgygdDUR8K3kPB79MiZFAUNx9CEa7HVJwPCk67UHXEd5Nzw",
  "key22": "5jinaR5CuvnUibqrc9exLzVw6KiUKNNzzz5z7brtaoiTQZFdtron6VzUHKi8R18j8JLYHs6xnoarKMF8Xzz7gjGS",
  "key23": "2HkWmU3qc9ntAzqubyCXAuGbPrLzxMpJuEAsxuEg8cdMLcxx2Kw93hzACGv56L1ZdDrubh1FqfEUPXaXuWt7pC7F",
  "key24": "2eBkcxGh7CrUDnAb8FoEihkswWVH9pFroSxnNVTxcC6MErnZeTMizDWNC3yUzz46Zr2N8z2KF6ZN5bjw1PeVNvzS",
  "key25": "gyy7K5hFNWYKXw8xoVyH5NLCY91NQqPEHCZ1H72hqPDVedkNLF57VhnvhRw9kEmU3n9RHkFoYxP5GcbQx6CYvsL",
  "key26": "5c5ibohC8mBy9whAg8PgXfTpMiDEU4qWw1LaJXW4yLGcTKkZYmpwtFLNPXzZSZ7RRj38qiWAEXHgkyyjKgkp2YJW",
  "key27": "4t2kLX3bohn4pPuKBqHfcM4ayUWZNWtkxdUgcMznrk22k4kJ3yvA7HqZTJkHfy5iU7RpT3mt2vuNf9xd7ZsC1cUN",
  "key28": "5YgavgD7e2nnfRr2UReTuH8LYRU1kFwZ3sfojB8fYhaceDeD5WAie9dD65zTyam1PFPQ5JvV1MiSTPEuqs1KrQGv",
  "key29": "4oHJ2hD1ZczrKJ92R44anFvXLaWwjhyeCYZRVWhxbW2CKfbrkguqLtXEgwFoGuFxoCUrhkZiXmqeRa7xywQTgBeo",
  "key30": "rkcgRNtQFoNiufQFjAQ54nJNbdCezRJ8nEYzTqMWzv9sNZaNzpzCP4jo1m9QWw22vNbmBk6toHUU2JgwMiEbPya",
  "key31": "3sp7XKDzmWczujK3XqEZGEWjx2kRPdC8Fm2zsPf8rd8YMQKqsf393FTbRubHgrX7k3xKGwng4S7v6ETSgY6Aie1n",
  "key32": "3wpbnVUeHELHvh24Dw8nEPM7AX1ZSqnSBvF7ugkfgBgipdf8j6RezV2NFfinFY51tJZ4zkMPZiq88LESChgz73Qd"
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
