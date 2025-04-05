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
    "5k3er8y3qd8C6FGAHV1pqNTnCn8JVPfQ27YDgiRtY3k3HbKydufXDJ55TeESy6zAuw6nWt7vSHkF9NgteCmjQQiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnynL8C3317EKgum9pq2jrwXtSagpwWxs6nC9btNQ8YexTEUzm1YMyCJfP4uNpZSkG5QB6pxCN1q5WCCtVYrSW7",
  "key1": "2QeN7xgeACqe3FZRZV6QRkCqnpBPhPBUMnkGxzbXHkg4dBceZKywGf9rE2VkGc1ocHijwcg1wzcJVjeys4YGc6s5",
  "key2": "5rwvyYogn48BqgnQafrRy7sLJDrMD5Bv2KAGGdZu3cGhueNA6hNT8vqMqkb7EHYcSFkctmyufc1V7r2e6BjtfzVd",
  "key3": "3KdEUPwAoXzi1bnK57kqZJAKxx9XJnbWh6ZG1RiaoynJ2wowvpw55U9BJurD3ZgBjfGjuQiuggRdV4rRqT1ZPzYK",
  "key4": "f5SqRQPepPbbHuX88YBUNw7i6roaSEBzyb26xRKv1LzUm9LGCrpmo9uG4MZM7vhFRswAYT7SjoR5mNLC4wAdg1Y",
  "key5": "2veXXt2egEjju15pTD4F5Xy94ekxRa2RMHYVfjMN7gPUBWGU7vBzNdetXQ6PDkHbGoegVZaQDJJN3U5s3uQXxzkk",
  "key6": "8DysyBRXEudU1KvkKkKXoR5RpFg1o7WCJYQPpcizFAbhMXudkS5vka5gbbwNEqKjTMdMt6FjJxYFsMGQfxhqWfJ",
  "key7": "WAT2tx89v2K1MBuuLKN89N8WGUJGG2HYYZu2vuozkr5ukUJCV41Le6MqbYzjAfyz19vy8WRy5XSk6tP6g4xES8J",
  "key8": "5xqBvnZcSqskYRguFcrWQjwk9cZCdw5ddit1qbesbjCyjN37qj81R7CtVQGsJYiqDVaSzFhXBSnNonXDYcxE6FEk",
  "key9": "4qq9k8LjeovGuWpC64ruGg38oggQmkRjvRPu6pLiGmcDCg3sjuEM75x9NYaJh6Y9kBYMsTS1oMFay2CTcEBsQw5G",
  "key10": "2FXMx3JuBuphGe7wSfffrf6vfQnEnR5R223yEaBEvDdrf9mC5KE79eXt8Dh9ZNiDB28wNJzeMai1vbxWSMR7NgxF",
  "key11": "2AUAXh7W2q4SQYioH2oUngcQinyfF5rY73NqKYwJaxWEUUSa8vhsfypSwTrvZ34EpcQ7DY7F2t1fuoP2sTmxNKHU",
  "key12": "64fS1tHECKr1JVu4mCTJFbVTsbycGP79q7CNnEqMgmE7wwN1siJeJSvV9JHEYoFsbCFt8KXY4Yb2JdMXeuMWQeB3",
  "key13": "5X2AwryDLJfxfbErR4B3V29FEw247FdkuQscahm4kAe7rku7TiempgxU3YCDqWfUzn95Q6JXe2XEUumgsqffFX5T",
  "key14": "2SNLKnR8TMq73cMLWgaTWTMGrgX8keGqr6uVRFB4swtMYrPWKKd6yRnSTdXAfr4hxBsr3RPpEJ4FJtiThEh2jhz2",
  "key15": "2wpEcyeFXQ8snUiCY3S6rhEKQRTYexDjisTdceXHDQyq3PFbMw5fScP7enJu2sTbNxvEDSqScZ1mdjEuifBdnZqM",
  "key16": "53iRtrxMZbLU9QuTxjveoqhNCSdL8BYUtT5BvhTXJLWbRLuiDDn4Aa5A4NK88z2gJfubkxrgZKS2GJ7NZufSYnjs",
  "key17": "2XHnQXBJF64LFdpA6qz2TeZQEY9en9NKSHH88fTRoES1PsT8BMsMhb6aX1xXmGF39zefuwDA1ndxyARsYzDfWf2D",
  "key18": "3NoPW2f4ycZV7SHMsUehiGi73YzvT2DDGWUL6yNcS1ppcmj6Jo3v5f6zdpv7hGxCHazqEUkVgn3fzbBvpbY2KP29",
  "key19": "rL6LafhyNMDokpLfukNmfvpjKqBtnYWA3n1uMRvUvpywd1rbw7pQXukZhsYPo7EgjSr7xvx19834ASpSbZ3nxeb",
  "key20": "5zHZM7a6gFpPNGUuci7xrLT9UMDcX28HLUZtbEYGtMFLVgzKm7mWfey1rxyUrZiBuKij4tMpc2eUwzRDDbXNUXYo",
  "key21": "5jvNYet31xdJDTP7ncEx2QB7DGUX73ZnmkKm4EsKp1jgXtBTNtRjf7XZ5JDwgAXv3FW549pBiTcgiZnGUdLQP9Tm",
  "key22": "hNDNXgYKUETyKEQnrPB6RDs4zTBhVr3tNn5kPF5YbRY1Rvb64JQ3D32bsCvF11wodt8FcwFbTRtLMwDELY4R4iQ",
  "key23": "3DzruUANJN6eUSFEFnf4Y4vUY9Gv8jDz26u6bD1UTemwPcUufS2ugpV3FrmytSUCuH9uZVB9SjB1CNZtaUTKoBn6",
  "key24": "KLFUD7GNASXsv67KFcQrA6TMMuUjdpibSsTy5a3TS7n3byv46PSt8y8MdvXK9UVWDPRGytABeUUqTi92aXoWMQH",
  "key25": "4jYYWrco8vyxSn1BNCYCNagpxeJyrFHm2BiSRxizc8SBKkD8ZzhXUECUz5d6fTMEdAYGtvxADcG62GRWKk66UzrQ",
  "key26": "gKMybhJmsNAWKpp5MS8QG6H5u4d7EGzVMA76MPycRJWai9uaDfUJKnP1C3SkJMXcgzbQz32jy2pbh1GScuUPMep",
  "key27": "2Evqmb5ewGnUXAMchkWh3FRZES6UnwrQHRsSe1h8umacVWj6Apkv855yXrXm3h2A7s1o3Z5St5YSgUyaqoyyCkXy",
  "key28": "3zWJ5TjYbKq1Q5D4Ysyah2ZjLDkF7pJm9oRDVB9mhokQYHX88vktqgdCjSt2ohwgApa3iQmYZXg743MjTgVjaC6D",
  "key29": "33qsRBUkQUPbiy9BZRznU99XAVniqMP37vH8JYYMJNfKe9C8NnvzLU97hd7HEaWsCpF2dQTTGfRn5BkBfS9m6hVo",
  "key30": "5b3upb1uGik9UzyXymL4QyRBFt4ZyazhhQm3JkquniWpsNc2WqzGbyuvYgBPDn8DUzgn5WWPSoa9VHrRKhwFE4H4",
  "key31": "3RyqpSd9j5PpyVrYuQcszmPVnTAtQZcddNxZ6YH6zjs9aaya45SrHa8H1Ds48K3bA7cMRNHvawxiuAQgUxo5YUqC",
  "key32": "5Y8oi8G13ExJyUUJ95T58641vHAkXjm3srMroor6vM3aq8qJyZCzYvrXRvc3PRYc8WbfPJ2JdGForpPFRz5xzKMy",
  "key33": "3ETMJkVzQLHd6512oD4jddyQbmy6Tdcunqt7c7pQz46d4LZhNyGohHNAkgVkNzFDFcDpuH8FUdjaF7cP8CFkKF2s",
  "key34": "fBZrDXtk7QBYGDZp9Tvfzkw1oZ343eh5Y77QKZyimCASjSPrbFXSz1Pry5DRBeFJt4rvWWVZs5sMAdCkPsXYDR7",
  "key35": "3H8pFTGx7wSNnLyRXPctCqoEXRofLh12UTXXcHG4PSGUns9yPTxe75MJBGRGSe9iMF6x5aejeP2MZv1CSbJpdGca",
  "key36": "5sMBwoXDAovXq31gfr1isaKJPEDE4f6moZtWE6ByVeV1TJGQNGNL6RmXkxQnxSQbsTws1U1toVE3Xnhqt6LNQj6R"
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
