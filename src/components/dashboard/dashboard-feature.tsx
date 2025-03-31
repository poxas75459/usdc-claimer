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
    "5ZSJHXAtGTW67cUkLWE7dder7QQdaD38vvf9N4axgr7CebpkHhcjkBfQZLPG98cHFzQejLTCekKj5keNg8ZaDKxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1UkQHXTKLHa79LouBtcF2sAQ9s2ec3nAVMx2UuUbY8bkhHSKtK4N8212Tfq7Dc6xQsPArjJx5225yDL6fRHBJQ",
  "key1": "wp41mGHM3w1bRS7uTe8qVpRHvQtkCkkaUxCQWR9FNSoWLwQP5dmKL8vbvTXKqwnKHwsnqQeWZr7RegYtK9ScHpU",
  "key2": "53LWXwcvGn2SmeSWQPJ4qmj6WqnDBpqHofLfsk7V5fQQ5GHDJ4xGQzMXYoRrwpgeMpWtgqZm3EnVHALwcgVR5P3k",
  "key3": "4CxLzvRRKE8HaGT3tkC6KQDje4vwvYEUuds15JgRvMqgtnrkkfC73BaB9GNkiF8MnDSt7KtdksVKDFoNu68db2Qr",
  "key4": "3SL83G65cmRAmMcPf463k7NgBATT7rHjEsbtr2u9aKFscHcbgDSreJcRRHCSMaUPYBdLLSDcMRiWswsERZHqGnmi",
  "key5": "3M7rYoD8EvusDiR14ER7FfTYazXbjKkQVnVVKpiyW5jduPwb96pophyygFT1TYJsyaSpkFFZdwnghPu1jQwTYsy3",
  "key6": "3PwsJcvZpjQnvxktzPL8gz7Exa9B1FGbyrYHpgjbCcNTsKGrAWjQid8oi69tHVQ2xktkzyR8UPmE4mViZ6BfwaE4",
  "key7": "5v2b3aWDyLr6mTY8LDuydxebHm7qdi1vfnckrHeGxpXBgGRVfim5ibcAwTR9sbEJLgsef6KVNQ7cijzzbfDhVqsU",
  "key8": "4XwsvWpVKvYGXbjssvjy39Yo6Ycuta1iVJLRhjVUgCg6wWa53LbkKivj2s1JHvosd9e3U6zYPJzEYsE37Gf8pm8d",
  "key9": "4tyMMTN9o28vtkYaTKRkVoeHep4CsEqG8Up4n89BkRg1AJ2GF4WhVY4hzRdEwAFGhtM7v6VkzEW2YEA63Ttqj4iB",
  "key10": "3zUTdE4a17rTCdZeSAA9r9rADe2xNqoY4eHGHefxUg1snGKPXDMvfWJ9bmeqhKiTYqFJT8oS3LZ7XWQWoYZMxeUw",
  "key11": "39eeWMGQcadRVAPjALD2o3rwRctJrfsFnjRGtU4J8HAj5wYvDwgzWs8krkAvWabJrRkpK9igkLSEX1HNA7RtWNmu",
  "key12": "4tyM5H5XsYuhMm85TPJ3sKf9ouafA1sXhgXMuybJpc7iETN4VD1VuzRkpdHYb18SzpXuecRNcWTpc6yipdCVScxA",
  "key13": "5UrmmJZ4ZdmiorAhUutCahhFKGcCpNwf9jcvxqftA3h9eAptTWXrd35mHD5cQEnuF3FZG2M8ctbypfWGT6CYamV4",
  "key14": "4DNfU3zPxpMWQCFikpZH5UArPCMtuikp4ZQ5hfJuFzFDx9mikTQYyT8adNHJQfLMsRgvt1irFeQTm3vWJ29M8goj",
  "key15": "5AJL6ScT7yuZQ46ZisHTF2bHzNv5AcWmj91yW3YjN1Vdgb4TYfvTdSsRwfyuBaPNtT2ri3JfDje2Pdj4B9zU3P9R",
  "key16": "4HvWwqdUgj7PeQgb2BjVVLgSMEjPTtKsW6YS1fRV6jzTvK1UnbihzQ9WXxN54oYsR4ocxYb5Qd8ZBF3q2e1FYJZg",
  "key17": "5kQqac43f5yuxxGtiEsDAZgicybr6KmQcavcHzCUParRbcMfPZDWRLQyUdJTTNc7Ep8yZE7hMNkv6NmhENVRa3Ak",
  "key18": "Z71hNSJfeBn8HPqsHUPNVeFWXYw7utu79uQLkCoKxQkfWNMBkXo35biwQQGoPx2viEgwtuKKxqefeVgbeEzcpFL",
  "key19": "5nrnTegMz91MAqxZuHYoSP9qNMBxfK9ZqSbp8BUGfsRPVaxe9fPf1cCVxkqNhyUZfRig7FqczrDfYSbUSuKZbXDe",
  "key20": "UkXxwQQ1FifQMHih3zsjcUA1jotZs188Ma4xAXx7phuFKThgKTubxXBD4bDHA6ydGGqRnsSNGQCk8Natbxd1ANi",
  "key21": "3E1XwsPcYAni6Ge6K7nDWrUPweagsmCDc3omYGKkweAAAY8HUeL15j9vzgzyjsE3PwpSyUKqsUocyDwGY85nRxLv",
  "key22": "5iHU17c95pBtqUhz67EmFyNyEqfwvfzDXF5yVFFdRCwdrhs1DF14bW4azVvAc8zRYv1twyTjxTDFnKYRBQtUignL",
  "key23": "188seCZdTN2zhvKFCLsmsVNzwyzyUq4WUPRyskYt6HoFQtAiKNicRQ67mYWmLMnMbGaESWbB3bdfze2k7Xch3T6",
  "key24": "5ZZiCVgMepWK9kFT6XFmukuynvvxAU6MBBq6LoLtjFLt7dd7uxZ2g41CN6zha7mZ7i9RR39CPC4FDnf49YjzuxhJ",
  "key25": "4YTjFWzma6p87iYPjUuHYhjZP2N168GiEETN9LxoLCoHXC1yAuRvWM1ncd4fTTMrKpBhEZhLNfZ6cV35n7sc59q4",
  "key26": "21vJkv2w4bf4TUfu7nRutAa7TwPLTptgQxfqST1KXnzxzi7KQn4ps9EkQBeydrV89iwRPCNED8uffC3szJGC1cxH",
  "key27": "65YiVpU9WsCmFPgksrgqcAEZNVwm2A15aAK16XstS83aTnHkpfNwJeoxofXyB9hiRPx3ZbquDCFzSQ8WZmkgaHaY",
  "key28": "44ZEhX4oxrFub2eiWhk7eCoxQzooqq6AKu8aRRrGy1yFU7vY3Bgyh9BgJepYB5drjoWdNiyWnTbwTBkanDCLqC5C",
  "key29": "1gfkV7BivUvxJFwB54jm2jB4KtT9X9sKCGXEBhx7Nx9Q8q4eG8FUkKeSHekJQmE6Lh8zYnzcksCcxJb86phMKUV",
  "key30": "4j1tqSKJqSPfbQSDRcNqBPgqYuicX5JQcaosTfoEib7Qj1EXB1uT7HRe8fZwguedYCdYtWErRVgK3uEStABSmFXL",
  "key31": "4sBrvCXoHJpWfb61MKZs1vWvjLVvq5EhejQJs6CuHqtXKA2JQL2UDAcKDZz5LKve4QzH2dHzoMYgtrdgu3dWkRAZ",
  "key32": "3Y2jZwkvz5KFZxJRiivbeGWbZgfukA3eUT4jgorx32d6iFeJ9CS7CYhm5XENcczWuaioPp92sRXd9hTjVKmP9jAE",
  "key33": "RWPbz5ukRsE15ffLyQKf5cgYFmHb8ukrhYmSN6eNMUYwcwWfRgzMf3FaiTQTDENH2hc6cNWCtCbAF4d8wdmipQi",
  "key34": "3LrBEBJco5iS7CpofkPjHTAxJcXPaVT1mtwzWwFzWNQV43EiEoFDqexXJuGeWEWAWcbUtciEZibQwF7CKtU1Qj9q",
  "key35": "5CiYYN2ktLAZtmkGbjcSZ1kfVaa6KoEZerdXsunBprnKiUQDDA2aEsM187YoXLjppKzCpXaoTtqdtk9hFJdLn7HC",
  "key36": "5RuSpFmnC1j7Jy3kCS5KewSuYMYMwcApJHxDhwyN6Nb4qF7mFAxMAmoSM6CJ5AXELT8KFuc4j58X9QneiMhZERS9",
  "key37": "5cqGLdx1GjGbrTJrDLF8ytKGSymg39jwjdAgomyq3a7saeghU8jXNMDSNNWjKCBZoYL9qSVwtQkcC2Pxmydi3Sgc",
  "key38": "5wA9ywAWWscQNsKszCKKfBh8tZ13ubu5Fp3zvnGA2Ro2zbXEYzp6FT5ZJsc8kCQ4XWAg3Zu9WZ6nWQyELs2cGZse",
  "key39": "4QngTXZca2arGG1UdT3mSHwGuFnrqEm9xFfJDLAYJUqwxeXJV4ekLHEwjddCsM4mBooi9BnQoWg3YeGgvnGTQ9Dq",
  "key40": "FqE93nnnoRrXG7BjZsMhDHm9nmJdPNSjYzjuU6TE1rvx2kTxcqUAYH5M6CRZfwM79SKnb2d7m3S6nfjmH8eez87",
  "key41": "5yqU435byUvvcff34r7YwKiXcNdECF4Nq1Mqs9FMNxHbYdapMMoahsR2u6NMvfmWpKoyWgCvFCjzjvvcgsJjB8a8",
  "key42": "LS6FupydTUWsaDERhbhBy4ymrh1XXkMKrnNbiJgMjhXpKxTKXp62vaZyjCwqcKvsZm3BW9U7zrVJGJxhKY6JMG5",
  "key43": "4GFL7Ryy8jeTiKWjd6znpVNWHUAmPSCbCqSYjsJbdWQpd41FP1mrkBRvPgH2EkBipBm788ZT5bdqa1TJ7DVVy4Ar",
  "key44": "4sXDwBKusqeEHwogpZVvTQQGaQagV7kLjkTVMS2GZCV5WRj22Fg6x9k2CgBqVbQrDnrChXG2aH1hAoeM4bZsKjmk"
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
