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
    "QHtr46bTAaNaieNkwoXiC4kXkT9Ge1jk7HNP9KWpyqqQenDfQiUHWYkmZxwGYmK7VpgXDYSDLt7mYHdVBkroar5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TK1Ghp3U7SBZzn6Biq2u1zPyK7LyR6vNZc42wkA3EBLTB7UVXNRf6tzFZcqVnYmc6TBxWcsBnt9x4BkD4ZJJGPC",
  "key1": "4BMVesh6CpMJMRP6QXKNuAycDAkKEMjA8Z5UyDXujwvSMEYNFqpq8xhjzvTt8TBuCrAfgm1bPuM9VAQYorg2Q2PE",
  "key2": "3RaxZL5QU3Lt2c3fUQVHp9UzZ1YB7vJU2sY31tYH8ZZZKYNyzPTEES3mm4PguagcG3KW936R5aYZ4foKSxwrkzX5",
  "key3": "33ShEmyw8ybfAB6e1AMfXkD9BNjXAanNnY2CKYWVspK3WLTuk6ZJZGxY94QZc8a1nG7WC4M4dKgKm4yTuVwNhFFp",
  "key4": "4uTBAHE8FmaxHuX7haDS5dWENzjABBus471ppTey2x6wRNwMJfVwBnbdpAgo9tUKz7VkRZrMfC6zE1N4Anp5UNYj",
  "key5": "225sia42XP1N8uqjLubXtuJ3HLi7oCx7TkvhrF2w1aPpbTGs29rBk7veufiADYUfP3AL77hNMGTLNBKHMASJYB1G",
  "key6": "2ztcPK599qYh7oB4jvSprd7nQa6jMrsrL39B3psjDwUetRoXyWyipchtSNHbJJjDFG57wg5omi11eTFTRu4SCdMF",
  "key7": "4qmzSQ2EMdmEqRr316AhPbcrQkgMiR3MXVDNG9yyL3iP9AFhNGSEFa4jdmnfWhtmrtjYEdJntksu4MLZYLWi4BD6",
  "key8": "5YVbjhw6nNVw4Qe3zKABJL57pavAjxkkST8XUwavvSAhurB2B1RzXDMzkJdkxsz7u8Qvb49iJcBZ98WevgGdPJpp",
  "key9": "3vW8GAzdLc8FfwbFMEVZJ1ZD2KQtv1PnwGHcg9t5yrFh57D9a6yjpW9CW3ZUHzjSzKFpmsU6kECnA7cNCypyDY26",
  "key10": "5f2fqypP5FBKzvfeyBy379qugN8D7cV3Mc2bSBbbLpYf5CWJgEfmpF6ypZSy3cXgGfS7ehS24qG1Zqqp6RgphYSj",
  "key11": "3eaMV9hx1NBTys7vNYPfcZziGxbtbu5LhKS5xuftG9TvANeXwXsvrEe9i5iQVY7z6geX4bZxwjsnWoMkYN8XPJ7X",
  "key12": "jy4ta5aVimMMbBQw2gtHbibdY6v9rhaveYk7qhQ2M1uUHj94fzUZztA1cyVv2ZYraGpPmJ9nvxrje5RjR16foVh",
  "key13": "2kkuoph9EKbsc118GgXtHTTyeqtNZiwaB9rJvzf1oJGPSDg1mFC9Wzwgh4ys5SxVMvipG7j1WMJALJjSiAbpdpGA",
  "key14": "bdouBMYgqUDHL2R6noFLGFoHuFiAKNZRpNA2uCJAYJTAUyHXDeNs2C3wNzRRQmDcaqk1vtuR5Jha3hapoPfCzm8",
  "key15": "4AGp17w8rQzrp4Xexa5X2NTfwBayxMEAg1TAmLUVZJ1n8UmCK393s1aUayJAPk88PiDG3yQx5X9FdFNdW9xW7eeK",
  "key16": "k8dATP8mfibRs5fksh17moBHLQub4FzXiA9e97FU6AsAMkKmher1XTa7gHPmi7Jmsk3CJ2jczrd5nSLePG9zAWe",
  "key17": "3g35Q5h14yEhYH1g7jFZRz7xWxcqTmYVJrpvDwsqdP1okcMRhJzA5vEixVwRY4evGoAix39EXuwbSt6VcAmpFLoB",
  "key18": "ZcwdVAw6kuA8kHafuBTfpZR5MCQrX7Xwe5NgRL8ziXRCF6yNyRmHxoqTuM3xd33uwcx4YY4RzPNWGtNFF64PCUw",
  "key19": "2KRqdHVnAE78apesYA87B7s92jSP8qB2CL3HvQMhVc2c78ZyLzTKpt7opsvMUY4x7c4gVxPYg8GgMGu5xJk2NCDs",
  "key20": "2Ws2xPUKQsevqBcrfpKSCP2H7rs8qapREiRSC8JMU87z4PvF7cB7z7fkiHAQkQBEzKpQQK7dMDj3BphMSjDjib1",
  "key21": "2r32pDLDvDGLYLYdFCPBvc688oQMnsKE6VsMGVksbeBRwQE2Uqs9AgazF8if3jk93EDxBMiRqZtDz4CdWGLL82o6",
  "key22": "3mtcsFEwFRCLaqSnrEeUe5kV7rMcNwM9HMbYDnGcW7vjsZSZJkEUqqPQtyBCFMjozqDqZfrzpk9PE38xmVqBGsQg",
  "key23": "3x7R7QHEDLEg4obQnimnJQ7iEDKtPbUF5WbmULPpHgN9aeVib4Yj6kkNttMXnUjzr118gDBkQegyyxsbjSzrGChU",
  "key24": "LhqRB7TZGxbdZMFwqknpKfvac95LDAnQwioaYsKZhZnH84rWzhMUQSTpCgG7t11o2QzTETAUQXG8CZSJtHRNHGF",
  "key25": "QBD8VuUyTzwQwchBRWa71N6Ec2n9rBvg7EjBzCwDN4Zp2r9gWPRtqbP6cRZi5yZ7Cpk8DzfKVqN97mZK25qRhb6",
  "key26": "4a92aU9N1omg8Xbr1n354nL9dxckvKUto8rgHFrw8PFgSWDt5DWCVe6U7TPoxGUpbYi6F9JuuiRXf1YNa1rK4YnS",
  "key27": "2JHsRZA7ZWmu8YXASmRLoHPr4exc8LUcnsitPvKBYbH7RFh8a8LzuanGC8SC7Vm6tt5rZdYK6W8J9vvBviBEahiK",
  "key28": "5wQ2933WSiGmhJd8sFZPsxK9wr1YNYL7hxYVjj6WoVA2emLu9C4aZXtZjDVQCgBEPyGwsS7a2ZdN1u2qJYiqPqs3",
  "key29": "443cMXnYJf3pcJYTH7rfYxDJWzT2jPAcia3P1vYzwBPgUjfHThz17hACCzxBHfJax14UadkhnUoVrevcbaSy3S52",
  "key30": "2p2RZ6hMmEWWGMbgw9NyYKGY1ozqtcbgwrVwq43KxVtXP4LqV29DSoA8Lkzu3aB4xGWSA2gRoTZQsrwVMnkQxUcx",
  "key31": "eTUjnCP4wZA55vthxRYZVH34Kedo8XfcgAzrffsiorokNF7KugdRZiSYhLWMoGgykhZxrzYKT22TpFjkfyLYBQk",
  "key32": "5A6UmR1qkYGpDwCyXQRXfedYJ8V8eB4e9f6nVdvnxAiFo1GPnRnmUoQea7hKZUiVa2He6YemwPX1pTb6YcSsnon2",
  "key33": "2hYTZjTWFZ1jyketCXKGPfBTsusfL4jezkMQVaLYye77ywndCft4D5mDRC9hqvmnqp4eXaB94Yziz9bit9CdDZPt",
  "key34": "4eGPWLMSV58HazANtAz5EXm2FxmuPP3rSQScLXBwfCBYQFZTNrpvYsLVQ3aAyYXrLq1eqe7E3GyaebpkWtZgdyua",
  "key35": "2zJ2hM5UqtECUsu9szRxb2e3WwaJonbk3azTKgCLkG1tHpvxrESd2aaGdW8kpdmJj4xKQuqpm5FC3eHkCvj925r1",
  "key36": "3Dvp4rjjYSYuJthq2251XJb8ZGGAhmBMo1GJ9f6RFoBMviFcPUfbLVW59FesJv3J9Qbm7BwmAXmD9VbzB7Keyumn",
  "key37": "2rXnRTuqroBTAMyjPct7N2vpxZx65oAiVVvsZE2TWhD3SdLS5jBABa8i2RuxTxVZJ4yMQX4nHXQmUVuGm9MCGeL5",
  "key38": "2YbWxP7vjRBWiSV8wAmo1tXD1y3xxAhrKQEAeNGHNhLpbY3LdvGss329KVuaJwXS9iEr5YAgEWE31dif1o9Kh3jG",
  "key39": "4uiQ9zbTZJKkuhJxe3sFjTGWJMTiDNdWTTLgjPQKcgNQNyZLf29DHR53VZpxhaZcQEGSHnHo5VQBwBGj5AHT1n5n",
  "key40": "2nCCduFctxxX5B1m4WGUrkJzw6Udc5CFZ47wf1sLdfsgqfgD9KMXZBKDGctrYxRKxwmBTA42Wzq1QPNaq3Jyvf4t",
  "key41": "5UUGh2K5o5Z5QX6xaioUNUxsdR5hNNPDihVQivnTggCKSUKTDiLPhg4G8MPtM1s8hoX1U4oZULLyahZ9FRGQJyhx",
  "key42": "5yin1PiZB5D5ysAnwZnDrrwczBYEVPR3DoXFPv6c57yHyn4DNtcACA52uhvEkSHYvmWoHwvDQWgd2LAidfxi3rGg",
  "key43": "4WH53A3CnHpe6kqbtxigkBYNcVmFWAtYfVYZVX2ACPUXGNEN5C7k8aW2ynRKZosezTYg7ye6Xe62VwRNenjDZAfe",
  "key44": "j6w3L61uT5GS5ABvkip2Doq8EgsChR1bx5Gbtkj8Vn4Yn4wERoFfJ82DCTyqVjkC1sdacwYhD2S86Y18XRaj9hc",
  "key45": "5fMCLLYnhnLD3x2NkLyGaTXZkRS1zJkAJ6ZHpsSZwCeRCoen2Bbz6z8DGNrZxQUHfe8GGqUK1a9S2iTFNZ7B9m7a"
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
