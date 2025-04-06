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
    "3F8PNrwq7u8zbkpzm9gvSDtJ3Wuh9DD9W9sPtYe89gxgweMaNgZcYQ5tWnZmgB9WQnTeKXdrL1iC6dx6RfSaAsKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63e8ZbzSVCqHHpBYwBJAxBhm7hr6ztk1azuddFyvo2uGoTzyv2ioJLUqK1K2ATZLSohGDWoBv5ind82HQAzHnLWa",
  "key1": "3Xp6o5SLTySC1WZzc9fVo1DB2tQDfcaWH9zFReAinomu3vaQQZqd6h2gDL2prVygUjA2YKdnarva2YqdNpuVFmGi",
  "key2": "4efV3LVmyHSgQ4cTx2xHgfsBBQQmqjtuZcED2yWSf14v6kPmZvS5swrmSTaSin1YD4MfrUWQ69hfT7oDZkyzFtq8",
  "key3": "2vYiXfbUYnjWtzBS9NG8wN2uyxVogKJcgtdR61t6uWEzwTUznS1ReHKmVKKY55FBDrN1QDtZnvBwxNZGmdGUnAsp",
  "key4": "5w7Lvb8TLDkNokk7XDNHMFtWg1qihqfiHnS3X16N1xoYMvZ7ccv38pGBziGcnBCUFBgm9GvuA7qefZq5PqXWcw2b",
  "key5": "3GXxoH8CJCT9n1imVySTNNa9rhrNPu5eoaLB6gmtbPhWokPfBkKQk77ojEd8eUGHCJdVQb72JKeChX98sm4tDKtt",
  "key6": "4Cqh5ZRwsUk6gvmgB1dn8gvCHvMaBXzRBsZ48LeiGd8oKpGBhGyRiyehESDyGZLtjSnroQZPt4aE1ig1Wgq5M59a",
  "key7": "rnmE45LUNenpYbgJzAZwBoQD4Rwqh1Z26LLHKLVYXbotFE8rmV39QzwkD1k9VzNX3uCJABL8dfviGqhFs8YskpV",
  "key8": "5ozZXT4HDfzHyMcZ6PoxwSJxaHgiBcE7PeQnAekJLZPcxuLCjAxfRMkE5Kg2A81qmeVSWuKsG2vfdGddCZzLeUh3",
  "key9": "5jdoxpqmx4EzY5JBYkdD1yLdmJSipGJiwCE25Miqi8qQNHQtSKo7mVSAWoxEJwNVwng9K7isvFbdmeLVdfhLKHTx",
  "key10": "66KKx4VUF893vHLPiQBBEYXPNtv4nnPF7Q7TzSUkig1poxJzfDWZdEAKVu5MVNyMjKUfvzJHcED7AJ3whWZwDauq",
  "key11": "3X2MkVYLeC3QfVmTiWHD3Xf8wfJY8k8dqb5iMtFaDzzKRhNr54B1yYMVDMciMVLV4dT46rMUkWoXQdJ9yzNpQ6ZH",
  "key12": "NxWuNJj8tgfAFgiFiyex9yHCsx3SGwtwDi8A1gaZoPuC2wHseTmihTF1vZFVcLhh6DbXNLFULWLxG42vW1D823a",
  "key13": "5hgStVu6crGzNhXo7n3MLedmDYkRGkMSAh46mEurymrQoKPNTE8JiAzEK9VHwsiNhxrHpxDEZ17NKkuc1uAhbnGf",
  "key14": "4kkTeGfEieeZAv8GapiR52XnsFd3JkTELiECSQ1yQ8cZNTfF9tNv66zh2faHViZsYZqBWLU8rBeC8aqhzeCSNULm",
  "key15": "DLc6cWiCPNa2Fu2sXFK2bwwVz1pi67icaNFC7qoMPkMfjADunWQaaphnYHuZ2eztHwRRSEsUHyPDnwiMDKdQkqB",
  "key16": "4mR9thUppLBomNNXFj9HLjhZgzXfw33mawNw5fV38Gdo7o7gbEoUYuVKqczHh71r7bAmNcNsJM9MWsPAXkJWK2GM",
  "key17": "5dJzxgBiyDUfXakqhnxLDJMZs6rNDjqczBhaq2UTFHDMEiSwAkNgCFJNe3tMaUX9VMkGpjN2XhD6c4vAZmDvm5zf",
  "key18": "4kvjap7UWAfbyzFZD1f6d5sbf471e4mGahNCBRTH4GXdgY9WB7b14NFLLK7Ptqod9xZQ2yAoAKiyBQHSWoMPn8tq",
  "key19": "3ztLqwTR97hFBwSJFxUkWPe5B3oBSDrUfpJdP2JVouuDaouYniZHLTCZEq71MLM249LLyrhMzZRgj6zQFoEPUpGk",
  "key20": "4WZ7yMHMfbo6Bw1nNLHUJm8pr2Jjh1bxCFJLayKQ1M4Eyi7FK6d2Wc9SvCXLSMjrg6zHrwf9ZCJwpJompudw59oA",
  "key21": "64vGxY41d863Aije3G9m4D22M6bL6wWxbE5DwSKCkRJmo7z4UfVVBxbhvKehnxwWM538ogWa7Ee44ouTzyKXsmza",
  "key22": "3RGENvQXVcACgWbzQKE4oLBhxXKuFomvAYStUs32B989Sq85KqS6CwsuhhRVgs8qEs6cckxzKqbosTRfsVSbBKZQ",
  "key23": "3QrynTrgp1eSJajCFGJ6QACXac7XXb4MDM25gMopXEh3Ar7YwFdKapXvdxRt1whGEwaG4oQhS3i4nDLPbe8sfxQZ",
  "key24": "2os1VoXFS64C7KMrrMNeLSc39ZH3GYLru9ggLcJEsCEQ76fzMFSJ8a49iDERLqBRj7GLeRDcSrteynjrT1Rte4nJ",
  "key25": "BJ4vJFDdXskzeMJzDKFKBKC8oWGvheY7UWa7q3fjU9vzdzERUCuPZ99J5vUaPNbRtBow8AbqoqXAp765c3Rvgkh",
  "key26": "5siuzundC99WR26b2sMtY4L3DviCo5vA6B3rEm9DEwvzv435EwQUYTehUphFS52ie6PwSnEWArfjgG69wSvV4FBE",
  "key27": "47vSzNSL3aDnfvZPhqKqey9XrBZyiS8ghFghLTh87t7PJFxbpCQQ8EedtDCfKZKYJ54ezntdof4wbPDJ8faK5imo",
  "key28": "3T4twR6EkqoZHpLwP1R4jrznxPv1cRyQDysQFAkCW14ssQGc4dsxFXZwxe7yWJDbswUeBedgYC64htjfoSwbTC4U",
  "key29": "5TJkDVUoBmgZP1ewGPehsgoLZFfeMQwz19PP1GpBQ2Xt6cRKhBB2uid58pQ4Be25cttCNQwQwJvwnhQJpZhBbzCn",
  "key30": "gKTuV1wrMb21XbnQMJ6LyNieXessvwqKzh96ZJuvQZf3guC3BoHjrQoifAwQcYzzCZ8JiaL8MH7yEaMHeZR2fV2",
  "key31": "5VnbbRebg2aMYKXFdXfKhXKLN1pNAvKchr9GhqMudhpBLWwLiAn8wKzSjVHdEUDmWTcUy7nCDh8V2WS9Uy7nLpVU",
  "key32": "pq4wPuD5Tg6b9EW9w7LRcViAxeGngwc8qwKnxfyeXWHkPki2QsE8owXd7QgoNquvTTJGVhDkhsqKf3AMHNBcK8G",
  "key33": "STrQfkSi5Mbt5FPt5HF4Abb6o8hRxW15TYRZh4LqBNY89wPNs1Z6K3giVsVuY97pwFTU8QvuoDDUCPb3UKvduCV",
  "key34": "25rSqViopBPsfjKUaupoEvuZtQT6GWSZAMotjvkz6xgsgZ6tfgraZZTvsVXtadeUHAR8JUqYs6YzbHLYQeZbLZth",
  "key35": "2xYrsLJQMUyotFTZ9Hr1ksfz4N6pXzdkyQkpPKkymzDEUVQtyh2HcQzXNESxEGMXUpzjcXF5Jn9tsCFPvaeYdUPC",
  "key36": "3WLXMnh2EW5R1uh1kdTZnoDE1hSv4ATHGFLKFzHiLuCgMUfRi4YYs9yz4t79zSYPRtn4m4TWzNrnvPtf1vTo6GtA"
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
