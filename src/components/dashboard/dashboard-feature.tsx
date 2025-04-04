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
    "5C1haBjnCD3vDF7XcsAiSCtaG7F2yumVKiNUF5dZbcqQKmi3nVhr7EZUwzpMvZ9TK8ZheZsSxMbo3aVK7pBVoL6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roT4vAuhEDHx3ZPbW6e5kqpZGdkUr4gphEczvvnjF7nUtGEyWTpHauvqMJEMS5EHUoJbDVmz5v7ovsJygDrbWg5",
  "key1": "2ZF62wQ3z3JRHZcZuqkDqSgEMHTd3QGKgYGbZL3m6fmBb8uyL7riXid36ecw5hJ3TERMYazNKmGZ68Yu9G772h12",
  "key2": "QKg3N4RPzgqnCcV7Chb6LfvUvEKd3JkgA1QUKLLf1qK7ch3ZxbwdvQnyPRdKRPnUgsoswyfcA2ykq8d8nrCZiXr",
  "key3": "5cVZVs5qG3hFeSbseHSpSjRYuXUbBmrYkhQQvqKjjKxMFXozWL4ZNpAgsKFDaSpErwWpXzYDDoodAmJmVfUvKSKQ",
  "key4": "2LXD7gQtQNzRvBsnNMJJ9FaTXSHGQgHmaY1n473LVn4mNhhya6b7268GoyWjRb4X8JUzu3ieZ8fHbzPq4iRJrJXp",
  "key5": "VZWLPkRjsdsrEVqVKPe1W13KjRGePqmTyZMNa871icMUJD6kffVibwQh1AvLDBSH4FHTQc9GV59ikaa3gjGu8YP",
  "key6": "32NLbr9KpuqAMA6mzqUfauQSKe6R2hGx8qdS8aWVF6Zb2teHBpL2CBMZdjAtcRcKA8c4XJxt5sA4UYVVrzZzAW5x",
  "key7": "3X9ev4tWf4LEpC8vEgfhbAMKbvhNQYv7Ykk2evW4rxXngyxFRJ2pSWngYt2q71JekAdo24uQgnK1otE6uWU8vuR1",
  "key8": "VnqkhQ2S4vsmi2ijStAetsRfwwbhuQcC88w7ur2fBWAWUKbbkCeiYCwxTQSUmda1cb8t3N7X4ecuvZrhc7nMmun",
  "key9": "5u8e5iMGspxNd8ZGEvGXA6FvaQeZGcHciivsLEfVG1pHQPK4mb3DmHue7LtR7G5bt6WGhxK1G2NpwT882enFHodx",
  "key10": "3otz8S9wqz89vBiVRsAh6BhQdzP25zWUqEjeEg79X6EP3BPG63A17N3ofJ2qenkcVHH1YdUkP1q7aobeGAAiXNMW",
  "key11": "25Guo2cebFQ7SqCthtJ2bpabGtF4KxSbbV2RFtSiqDFoMtVLrycFQrsSa3oPopqEm8Q3diLsuvWaqNo54Bmb4wCk",
  "key12": "2yKQHjw9EFLcWxVXDybRjCgzPHwW9W9G9KvgwsY5bbSanknhRj4hiZC997NtEEFbww8HyDUGZKM8aYeiXsqiKUed",
  "key13": "3F2ExWAdGZ9dPCm2GECCi8ZpmUyprjCo24fpmibeWRU4nusZn9af8zxCTEqeGpkpxtkg4RKQGtNo8Zmjct2d55jj",
  "key14": "4XdeG7URNkyaHLPzBMaRng7n1cfWpgUVR9xsSv7E58VDVyKgnxJvAFH9str4SrZLuJiK8kQQgpGDqVnBqFTYtfCx",
  "key15": "4rF3SkpWj3eTgjeCA6bXp6RXPQJkRd7oK594ZNiwPCMBB5znNwDvoGZJyWYbwBDzDfwk7xD4mEFJ6EnVmDzuHrLM",
  "key16": "4hY5c2Uw54Juk4UvQSahXud68Z5J2HMV2y1ijdnk6suTrAGAU4c2kWdXFeESoXqi2SGphPL9uh7mJQMKaB4X5kWB",
  "key17": "3S1uktPiXvUeGFBrL6iywfigc9QRgdSZaz1GoHAgp346fqEderJUAEqcKrJqEvoh1iXF1oPqYAybsKYTkRuC16U3",
  "key18": "BeB37PqkJ3ciCWuEUKsaT5oecga6oGvcU1kDSZjHKa1zxnoa1TsdfpujGUrDTzTtje4oEpbBy3jCJn9qbcPTVBy",
  "key19": "4TmE6ySsuKP5fz49kFK9po5vR7F3YE6rN3j8MhtCkSGgwu4Cty8MZYizPo46aB4t29gY4GBfAWdyZw8FxGqJm7bU",
  "key20": "3eHPxTiCoQhJxmhUcLoJXc6JJrrCjhsRs8C2z7M8ZBUpkCHXnEDHkH1aNAUdPD9zGWQrsC6ZQrq6irRkHycg2KvH",
  "key21": "5ct9wnb1wt4LX6uNhUWvMMduy31qsXXHGDmREmRWBeFfHbKktFsWSDzYEhqvf8p7SvytXyANxs1qk96e9Nzd5Mc3",
  "key22": "2Q3dAsvFCzRsaFxPa7q85MCGF4KzNjxLsQ3wMtghnUPw1sQk9uMmDJvvukFfpixA1s83r3gdBL8YG5baRAVBrEvg",
  "key23": "uUkgw451VdXJwjtKGAZNBKtUM4U4GfymbpT1t9GDywRfqda8UVH4VPqEzhQGqxMYuY1nNkiN9ESAb6Tp3NniqFg",
  "key24": "5jpav8xq1QJSuEAS2Uh68egjefPftnyPW3kgagSW4gZXk2cknW2pUS4VzSmpQPYhgj9J4ALYd2XmtES67GJZicpF",
  "key25": "YMbXMdHqgthhZpfVDTc5z95YNUy3A36pjHkhF8V7GDCiiHFftP8zLhxYX44KC5Nq2kc3USQtoXhcsdtMSBXjLQ4",
  "key26": "3PmkeDAjaX537UButqQ3deaoX2Nur1df7Eom6XKJz96HG299nT7SGf2tmurQQiPqBgpQUiBdMqHDDWHSbYQ7ar8",
  "key27": "2kx9FKpd1ACr27DMWpae4QzgL98zmRvqP7k1qpyPnEXdyD8KhwmXUU1jncfdbKgNMN7QTLNH1T3JpSjktgQw9k1N",
  "key28": "3hs1i9pFowiSsdnLd7TZkb1zo4FJ6r5AEC7T3b88eGx7Q7naNvcEYtr4SCCrzN6ShYuRahoB6FeBRoQwdnDPGac4",
  "key29": "3UejazBrZtkE31EpqNcV1UwLXwYjePLS49wgX7Y7wJGHFPQ6KFWzWcCBpSGJbz35sTZkNtt9QvqjMBULJaTq8EAZ",
  "key30": "4Nb1VJrspCA8pdagxQjnQmnS4kj4ftwUH352XNFRWqwS6fBCkqmpUkty5rD59T5bAL3fvU8iEXLhB29eQ9PqNegp",
  "key31": "3kCukoVnHhDkRZotuc4LSYZgmgqR6YqF7q7hUK392uE383fZ85EbH53DKeiY7ey4zybwVaKbdmF7LQQkCvUCMRs7",
  "key32": "2tgFmDAY8S5dXwgQCfGq4yhcyoZd6pbdaixeQDke1G3u923c5494egQzJdyKdo1h2FZJZbeftGfu2yEwVXPSMgwQ",
  "key33": "2UDcJ9LG3pkoxWu47TqWCyZhGXiiUp4sovgvQsbkVjJsAt5KfpoVHY8L7XS2BxF7UCBP5WgBdebJHwVyL9qmvyrV",
  "key34": "4TWoWNeY4zd2s1GfoaiiUd23tsMeYnvzz6bQ7F4tnCCQQp6u2j6SJKLFp16741HaTsKoJL8HEfmYvwP51xfAQSdh",
  "key35": "5ZcYJCLD1cyaJMNHpGkXUGFanSKWJYLUyr5wrRYAJDaPwujpjYiQxrHxNjp1eacXNyrszoYnTqQBniTGYNemS6qL",
  "key36": "g4DfwquQGEJUcxmTRaayCPPTZGDmpR94BciBJc6Gt72RadcJvNrPW7hDmrr3vA5Ayygkr2G5b6qm49wpAAMB7RX",
  "key37": "8dVBbBsXtemqqFWQMj96Dvq3GNyr4A6PXbpmF7YeUsfR4zC9EEHMQvjayh1afsJk5BdZDrEKsy8kz8VxwjHQ1TF",
  "key38": "3v6UowRdxGSeHNSsA1EnGQmfbUCdJ1Do7wtAsk4JoJ5cocedvUPReJvDaPSyQK1VWJmygfAg9Z6BCArAyFnSwj1Z",
  "key39": "2zAHvH55KWPgHVEdYZbD3Nwf21HA9VFC7NXorEt2zY7U4TMpFdfEVv2UGngQgYRhXycCXzjCEBaXkrarU28FXRef"
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
