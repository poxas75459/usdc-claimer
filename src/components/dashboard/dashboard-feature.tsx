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
    "3cm4iWVAFp6tP7cA4kBgxxv7QZ37nCtfpzwwYy9Fr9MfLKsQnTDiWmSo6Lof2o7EA2o6QuEeVY931xFHH2t4FYky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aYAExnbwZfq7xy6mo4oBreGRxuRkywarVqqQavwk7f51XGHi51Yc8Qohw4MSoPUvUNmFLcCbtCgqH5NJaAUwYE",
  "key1": "5WFKw6RpmXL6Pd927ST7QCsEdugxqiYgnPttvhLL1PVFtu2a9z3hpiNP8xQNtoRaKqWRtA1dtWs5v4zWLh7p9Acu",
  "key2": "5DMZBryVoofxNVBkLTikHeEJ9vh9q9sFwSr3aRSzRrNpN16aijpqoBKNcqwJ4ZpMDYVoTnDtyUwK3JiENK8aqHrV",
  "key3": "5j64MPyHD6e1osXGCyvYeGKyBE6dZ7nyrXfKCZNyiCLQq7PiR58PG6QXWXJip6JHuz5pY9WYPScBut5CMHJUCeqj",
  "key4": "248B7gZ2uTADrAKimsRNYahseameDPQFr2ZjbhWgNKn3fk3xCMf2HnqKBPDJ4huDGV9K7PP5V2RmNcesttYPexj7",
  "key5": "58rRXpjM8SAENjrUd3DnPMKTLm9ZLaQQSYMrRW35KiPy2yAeMG4YwSZHVwEqeLTtZG4LuoNkweBLWmkgzdrH5ajL",
  "key6": "2gTD2XLnvNDHdPSj4kEkNsej7XMxWqW6DMqYyVTousg3f6WXBHPBg51izThH5P3jPY1j27BxbSeKoCAsFtDkfXA5",
  "key7": "3kEb5yKuF7nTSghTHZPoZ8RoKWMyBdmBenA8zrHVqjj7g32WahaVMStvgzyxVNeRVGh9EQAxiyyEqFUE4j7BjT1S",
  "key8": "4T6yVdV2asSrLf1sp16Ueid33wyMQtAMhDU2msJXTidupnpJGbB6edAbaZQs4n9oeE3WdoeNL2LPHqtCcS9UFEMz",
  "key9": "2cNcAJfLGLo9xeffUiNKQRMqATUnn1QcCX4YJdAdoDKzGRU5XfmJY78hVhtW3SZMwEk5mmaFftQd5GPsWZpJv53e",
  "key10": "3mhvWsiXjdeXNpiw7cETwY1w91UKwhxnMfiFjtSRenzaQ5rvDEnL9Z8aipMDwCoxvTMrbCujKHi5qmmmQ8PCwSXD",
  "key11": "5YN8Tz2ZwbBQ6AC8N8upJfhkJtW8VFv4rP1W2ggS3eYRqFjnxKyVpDQeVwBJqdpApNRe1tvs6uQCE7uAcNXC32Ju",
  "key12": "ikV2Hqy29694LDpk3zfmdJ6cZH62vpjt4hV4ooZC71Q5Q6dAYLtCJgnJN49MXSFLFH3xFUJ7pcUBbE1BjVvUC5k",
  "key13": "4hdgCWWCofeJ42BinXeqmRKTBaE4vetgP5AkLVfCFE1rUhfDBwUKum4rEx7NCi4Q5VxaZgHQQYUQWa4ov85Q71tS",
  "key14": "4c4k8YHtNvN565X2U8rXM8oXdw1n897gYtGddDXN1SDL7No98qGXwWL1Uy313HyNBJ83u3bGSQMJZGgWk9NeLzXF",
  "key15": "3aUJB2a1abxWfSeMGYEja8wj28xXQqDbnKN6AS23zGKZnd3E755pgCJwU45FPdQQRH4zFje66ZfUK9yGesEaURkb",
  "key16": "3ByeD99i82P8Xyez6FZNAw6uQR9YTrEKTr1sqgfNxRw6UKjiL4vJXYTk16AHBCKRjXbi2bK3hg3eLuTY1XvRy47V",
  "key17": "4oywXyUCFK3YmJeQvzCSbAhLY24mbnjbEw6z2LsAZERGztjMZE25dQSuMyv43VfFcoxW25WQnw2AjjYzFYDHZGuB",
  "key18": "4kJ4kaPNMox7VU9a7PbUASFWBYskgkecmkNjwPW2HHbB3BHLRYu9H9c2yd55aYphg5kHfUK8BwhPUUcdAtpCuVJx",
  "key19": "3xmi7qxVQeLym4FLt37uPmxUtfp2qU5LHYLmSgJ9BrBt3gUETsKBkbNmnCLW7FqZzCzbfbWwBpwQbP2DnwWPkg59",
  "key20": "42FYJKBVUoD3XNxisKFqVkBhFJSJ4uCb58NxoBfFh7BHx8KeWCPzwMKrp11qR9k6vPNiNWDP1WMbaZ9FnftQGARC",
  "key21": "iUbs8VB8eccd2Uru6AX5zgPrgkQxiaTk1WGQ4QQ2NuFN7tSZ48JiQbYaENCBnuS3LrEPstbWYpMTkAV9xqUbF7K",
  "key22": "2n4hFfVuUHUmf1GMnQca4m46tJwrUuTQwafLvvUXM1MqfsUnpXHkBu2eG5gWPBdFvF1vjNWZVZECReMjdv9ZmRwZ",
  "key23": "SMehqUFEz2asofHvWqQ8MmZvnfa4yDJQxbVScbdGj294JMH45MfRJciea8EAFT5owX52QSPV57td2tso7MvbeG6",
  "key24": "3N88JAiBnbgW5DhznxhBjj467mUSjvx6RFY3bpG9iA1AGKgQJHtmJawfRubcrduCToiNxbtbqwLjys5bCnMQgfzu",
  "key25": "zWNbmLgGSgjDTmhNHUk7ZYvmGFWuz717eEuCBCyjXqtVGT9kKzF2TuzPW7moS3jPjaEQfrg2E4hd96CNwsFeQXf",
  "key26": "4Hco2ws9UkNvfGzBjsEUT7WZwa68hajv32t249h7R3EB3ZMDtj5giNnmaBEz9VzAdmi9mPbCDBzyqXZQxrrLL37P",
  "key27": "37iGSrvLfC2dY6jHPVJrToCf8p4GFY2Z2X4T4vEWUdbbq5BkqpNWg4B7F6FbH1nyU9U5REoLucikr64MBqoWxoic",
  "key28": "PPLoBXkywHSfK7yfQgmR7PtEFQYeNECvnE2iZguu5EaWVFK5oA9byhxd58v1n6NbkQpCQdFn4H5K1DAffEmarjH",
  "key29": "WTaWhCHNXLiCBaQxRkXnfq4CGxEGvmDJF7SgXddX9Yx7GRjZ31jQsNz5oXXqxMK6NzJz1tuhFxMkA8xdgJmCR5q",
  "key30": "61T9J3iq9zg4NYCa2SUeNRQrFjRPC6PZJ9BEuXKfz5pgFaeVgmvnqwoCY1Cee6CZeE8ev1nWbuMFXerkPGP2vhVx",
  "key31": "4nwUC6zsUVctc9srjCjgkzAG1JMJjUbvWDSHPkcaEuzrv4mvKCdC1nMJaoERUtQdWwetv564QefRWLmifdkPqk3s",
  "key32": "2k5WE9pPgJBnbW8ERvNNnTffLDza1UUmg4qoEzYzRRaKVFr1f7VkNHwEvd3nFGyUCL9jXdKL5bFg6SunJKL2AxNy",
  "key33": "2w8gjCBvzvMmvTBYGfFt36ayVmezaYTCxM8WXcmobwHgxi4bKDEPJvJYmi1N9DsWUxqtM9FjmHNzXjZTxWPykSnk",
  "key34": "65VciU9xayF8iQDu4yGVa3HQQ3ALue4vUcr7eG8W1skx5Gp86kKxiETor37vxdp5wMfE5BxtrEEFa1QDU4s7PTPb",
  "key35": "22ATzUjFQkF6NsvyyW92j9Qec5RrRBjqi3eppbMeGCeGMBPASWtmUpHUSHVvKMCqEkJC8XmTS86d1TmUxq6KndC4",
  "key36": "23WhCYpjJQcv8CjqtQcaeL1JkG5YfGSGbJeC5AWFtVcDm8Pis1pHwfSwbE3CcXqg1Jwn5jTqeCcH5n7X9BJ4M3fJ",
  "key37": "5rrqdzAsoBrLV8R61kWd8x1R3JmVJWR6dRV4vbVc3cR3G5BWVdpL87iRSaR4YCDCjqUqzTUveto4YBJpWXbyqSKp",
  "key38": "4ELuYnwUr1WtY9nKtGgrryNYRoVnRyS6v12JUcU7skAxWvhF8mDduGTCGs5FHXMJxWpLJr62jUsVcDdCbJgYH984",
  "key39": "4jHUD4xXG9GWhcn3nDYkpd5XVxCkTspNeK7k1vR2bYo3HaJzMd6ptp2oCarmc55yMR8hkDwkXptNNzjgp1y3ob7c",
  "key40": "PeQUGuHnX1SupexQbXkSfhPR9kXf1CWWhwfv2PXrwNUgm2k7a1NPjihtwpqxfMPtGTxiBqw7tTo4UY5PBbBhud4",
  "key41": "5jyYY881uWs86rMTWgYhBLuvFgbkypbo5Wxh4seXThmL8p3D3LW1rydghe4Ck28gCXc4E5DbXzep9qTUafaV3TVx",
  "key42": "5gGqCjXVBFPxCnaSjB2cHhry4YBXcjtg49k72ioajpf4dawYzTZA9D8LVTts5kjbmsTNfaoDutoqWmTz4e87aNvo",
  "key43": "5yPZQTspwiBkAU3Wgf9PvtQ1ScAi4mL5zd2dVa9ukytDimhDJFyypfnQ8dWi5P5nfvgAumpmbKT6TgrJLzumti5r",
  "key44": "4M6Zx61TNLigbZLuJpHNtwo59rDZvYfnnZneb1nkHLKkQ8XmnvedUMtQVNMhXBHUV7QLDzq1Yh6iEdcfRkf9w61w"
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
