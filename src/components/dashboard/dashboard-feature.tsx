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
    "5pKY92PZm3JdssLrspq28qeBMkwbrYLN3u2UJXjyK3B44ueJabodfQPc6QTHPoB9WPrcrgbVUarn4aqucWaSDZJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9g1qWYhvyTxaXFMX7B7FstgCUxhnTZdi7JcTMhNbptsE2bmgZg6zL7GH5JwvtCAfJdEcTQTbdMxzitjDPJyygbf",
  "key1": "3S6HmQFcarEYEHbd1X7epVsdgfU1cSAEkfCaZEShkU6stXfmanrZMUrzuLPECpGuoUiiev5WjSqumAazomv5Q5b1",
  "key2": "5S2KZTdbAAtmgYweATSc7peMbFJ8x6kuPF8WyQcn5zPq5AXjuSAheDqiHo7LXxAQPq7CDAmDV3TuQA8x1oBUDfKz",
  "key3": "2V4ST3frTybsXXfdBrj8EMx5HdUPLD5j4gUQJtAWCsAjEb59B4HZHpTSG5DfRLvBfAptU5Xm7RQyZgkrkMHs6RSG",
  "key4": "4BoToC6PrXBBjvEFiiWSfqQVHoj7X8izp4hWUx1HbGAJqn6fUUfGUk7jjZupsWgfrHdk9zdHP31nQApbwmSYZpjS",
  "key5": "5YL4bPT3gMyDHg4MKLt6C3Xf2Fz9ir2r3c6yc52u47FuArDc5wfBNKai4QTWkf5pbp7P7CEuFeK4fshPQykkuQEL",
  "key6": "2xASo3oM6AmRHY6aTsRifZhNCYDYZdh3vTywaPyH4wd4kxpwSn1V4i45cRYXvevdYvrPyfu8puGfhV3sThqnsmbn",
  "key7": "6EqY72bFVaneHFbWBY9J1ZjX9kAk2rx8fqcSnKLbwMRo5VB9qaom3wTZsWDfNJMqN7TTiZR8TLm4gdGTsHT98ne",
  "key8": "57XVw24woAtsAVpeTk4c4SspHqtqTYoHFhU1NTEPx6SrTqUNbgqVN6vy5XsUxn5v5VQx1z6n28Sitcz6EsstE8rX",
  "key9": "5GUhMVrBV7nkMvxyKjbboUx5VAsYrAuZt1r7YLcijFACrgkv1dSuhwne16uvTaxkFg3Vfkm7DTvZk53tuvQzgsB8",
  "key10": "t13ftS7dPfxK78sY6TnBiwk44CRnroJMdnV32vRJbP7Zp1jqXjnkmQM4zD3FBhiomUuQJDAxpzVM4z375LpVezY",
  "key11": "2uVciH149UAW2B8McV9Cbb5AeogZwRPAUhb7VPcsy5UoHpToNrqssbrJcgPWQRgnM3uePQyi2aqV44PeFZ4zdT8Q",
  "key12": "4bpQv17Z4HtCcsYFx5GS7Pk87aN7rUPfrF6FkBudXDSFfBS9bjDEYqCqQkydv1AY5EtiCmC5QXRFY4K6VSLz7mEf",
  "key13": "45pEtpZVGeKrHTq622iGj4Pnu2sbpTU3uXSuQxQ8EnaY4qaTUEdGTE4hfNMcZFaLGJnH7HPCK4LnfNMEgE19Rqpy",
  "key14": "5Yg4uFeP5EKJWzgr59oA8SMm39qq8vJuYY86Vkc5b1Z46oP7S8LRnwGp13rpjk4NpmpGwRH5HurYQksxo7JP4Jr4",
  "key15": "2qvzZHKgEZddXrsBNUK7358TEV5dRhLNPArRHeugxt2U3Eq6oeMHx8GGtWj49QZhxDriRmhboFMv7q2T2KgEKzpz",
  "key16": "3bUAJsFfJSoxJR4Zp6YH2mrGk9pFohhveVdMTWYoraTkjJShQatobLJxAAyeZPuFDZRUhXHC5HBqCY8rJveSyMnb",
  "key17": "sMbNGPNW5qPTDt3EWBVH7KdUK4w7HyofJ9fYgNyEv8L7NLG4MqHMPKiBfNupziZwA29TSQTnpLtaY6xnXR6zFYx",
  "key18": "3Xm1cRvE439PEFda79Gea81xdRQhcRCWLsw8JiA2HEA3fYqUFharNT5EavF9RqfLHMbGgNY1tUsRVbgxhrtJgUBe",
  "key19": "32W13WYJ5Hsm9HqQ5YUuzxwqwDqmjJNwoqabgRhxJUYTw4qqbjKHNyfFajcnNEzNTbuJFAtFoXMxNSyojZWW8xXS",
  "key20": "4j61BM7QQhEMSmRRYNaMS6Kmg3FSgxtjM93GAhXoA6SyKBG3YjhNNGcCJphh4grrodDwroaJBHyyU1dKFiHzcCuR",
  "key21": "2XHqwNq3NX9gT1MhQddECvsTtbmzR1TVoFytAjLP6rxx6eZqgFtVd5bpqrYy9kqz1bahcnWsYGVLxVf2UsH8zg5R",
  "key22": "qbrejqZ5wZPtv9My8ggxrXu2JKEH3VFtfV8CuG5BJHRvZhGX4ycJ5Nt9jmSh1KmNAd6Prs7Wr7R4nG2dmy7CmFz",
  "key23": "f6R5SeB5vNyJhTpnAbc4889TjeH6YUqoN61rGptKEYBFAJYeXBui1bbTmaLkhS2sXv2QyxRht1CBdERYrNJk61N",
  "key24": "4xd43hkPEmuAvtX5cEjo9JfBtxQAfMV95gdA33AMJeEQNNTXJd3vBczcvRprHsLqLCV2rT7DbwvA2bgJgyaLe3wu",
  "key25": "2zvdoaoS4gt2vj6deMHtxCnpbnKf2Q3GqciEjKWDd7Lj5tcoLxU88jQuWxFHgJ8tz8AvRfuGHrASeSTcr6B48AH9",
  "key26": "3cqTWcRGEzxAowm7g5xWj3UCnWYSCL7xdftr7G48bJgSrc6AZuVZNgGArqkVz5fTYeq8EmyswQBNAbNEUjbHUPyf",
  "key27": "3knpdsiwFT71UB7Y2FEaB3VU7mk3QfPaJyyRAq1AaLeuDEMcFCSUL68ShdnoB6j4k8ZtBbzvGhyEcmhfwFRNSmpW",
  "key28": "3Gj57rNY5rsD7sb7gaK74bf7YhrAtrAgXczoymNgDmWKMPR3LWiv8D75bTbkK7EfWTCM6hwL1ZFpZCgDfMK6pkeL",
  "key29": "4UhJdrs3mSZX5hqxDPTdK7pHEhA385tKVuTbSba48wKjXeZyNLfxkBwrcBERPpNMijJzQgbv5WT6BxWmskKAdf3X",
  "key30": "1ShqzXR3VkvwDyZnprrJukW8iMdKHZ29MBXLB87i6ivcv9wZBPm5Hpok3brZmPnpLS3HeJ8bTjGd5zL8nMfgGzk",
  "key31": "vBDogJ9C1bPkCf4uG4d4mpwhee3soqkUsgMNp59BPm3LXzYK9a2jBgyRCpPUDuYWNhCs5xtWWxZCCWSQiV7AcTF",
  "key32": "vKwYiwfU5z7gH78ra7SSo3WaQugpFs1AQ2XjxDNt3sAGcNyVxQdQoSt6KAPQ4wHUZmc1yy6vpcXKZHN1gFpmv8j"
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
