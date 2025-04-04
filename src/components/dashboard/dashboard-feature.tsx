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
    "4VCACa3Cqa2nKP3UnofqgamuQ5bYwrrmu7DRc8wF2CYxvhPLktsL1qqR85B5ju4TuLhJSU3uQ6UY9hYuXErbjwxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajDWazC2csMaq39e3BckWFrGRfZG9QfiFxcxMZ1fb46KbMioLoVhxuZPj9g3a6PNNpBy1BM14hAgc7x2FPR7nsS",
  "key1": "35EcdnHqZLULvh2tfKgdDL4pwJVZ6XaQygg2NsLf2bjBUAhCYpWj1KUh7erpy8Ve2B7cdHkjPvSU6XBCMBPRPV64",
  "key2": "29oXpxLDSR19tbkqXF7cRgiGyykN1CbuJ5P6vQYuM7sdqKji4ciQm2cGG5wnpfienX3HL19Huuu91CGPko5U9qej",
  "key3": "2L8exAwPSsAfCjMQQmZkyfTxJ1K2zbF3MBC8PJhdmmGyHqE1wURKos67b9bCFS1sQzd7XZHkDWaTinXokairkrr2",
  "key4": "2uEwb8ppRSe6KYZVeeFa4wbMSqiPYtDDVDru67X2nYYBsM3kYhiPqP7M7zXvBJA85QZbvgSFPsQausBv2jjbZv6N",
  "key5": "4L8uYdFxTUzkzZpcu48UWfNp4Y7yxdqajYVDshLfAsCXWxKLbNCiu8aWxaTFbMZ2znTEAwemouRWrZiSjHP3jQvV",
  "key6": "5xnbVfsnQdpQq6z5ibuUpYBvrqten9ybRvXsyicSYGsTkbz537BYaBrrLYcqtYyg5gdGeK527hkTT9Mieff6bVnM",
  "key7": "dC3zQrNpR7QJcuVTPnDLLfUWfoTUxtqGotb4iyFFBmgLJ6piVufyWnrGWb5m3xUEEpuKBPgmH5fi7QRY9mo4rjV",
  "key8": "5hyg5UCewpcx3Xk9AtzR6ML3qVYyTRMf41V5hHTTCg3qCXw4tCjSbQQGnog2e1rSgi1ELaf5oX1ec2Ap35GA91Lp",
  "key9": "4EuKdLmkQaPMc4swcRCv96GwpDCJoAZzc52idfcEd9ZkyvbVbMJEDXpDv8FMfZRn1vsoTcWa39frCT3mEJk9Lzx7",
  "key10": "4vwDN7HHeyxyagnU1CCeESGQuxqTwU6ShQgep72deBt72eFKdWRQjzBa557k6SgmnamJFum9wQT7FSkFcPtdZ83r",
  "key11": "2PE3s2AsXS3bhZnPRBCyNUioictiyyW58nccHoMG4E8xYuLGMS6LAvVzGC1Dmh5F1BqZQeB8DRyrw8ekFpKURwv4",
  "key12": "3ZAhgfdxU8d3bzPJQwz5dk91XjDQXzzjwcgC4szWmdhMkXqFsBCqEvN5kCVA1ai53BSgzdTtqkBxqksBLc9WMCgf",
  "key13": "6JhtVvBLWducjg5Z3QUKRtiu76fSKznmeYUm4kG4Ntb1aEtjivqrUwgZ1uh7Abxgjjk2waoxNWPvJZXC8UcEmdk",
  "key14": "5U8z61yAZ3gRxkwfc6Xt3yfhBw7hEoqjzhZaKp7VhXv5YPZtGcu96Qb5AGHCNfkSyBHtJsJH9spuxK7YWfdDTXaT",
  "key15": "4NGzddZvsKFgmVvG16qfcuXhgnftiActWNL2Js1mu2neJTX9YnLVDg2GQwKdsZrQfojCS7fhjSF5T7T1wA1QGNhH",
  "key16": "5kBB8MYn8tTjLHi1VmizqBscqvmCynA1zT56X8uFaAmS2n4mCoQuneKv7Y6mP528dQQYsQubc6BR13S2R6KZ2yGz",
  "key17": "5EzQKa9TkGc3rNxNh3ZdofAW6N9CaGrRoWkYvK4SJEYBRhNmmeusTzAWykuZg1jmX5wxpRzwo8JwnvzEsW6rzxwg",
  "key18": "5Ybn3KXoed7LUgizSxBAhW1xsxqVfQRmrAZ9jHYBR1URxLfXeCBJxReSeJWj164KhUB99dmCL8FCMAZhMCahHdvh",
  "key19": "3oXUdWaqvpL9oGJRAuo4L4KNXrBgbQ8tHXHH1aEbx6ss9PruHJCZvLBpMtY4E28291zZcy9LSvPxm3drcrznC2pF",
  "key20": "2dCC8EvoRVVaLR1Ju6puonnXza98PoGWdpeUrPXFSegaVWa75vofBB5k8ARioDXS2QogY1wch85BPXygNThtELDc",
  "key21": "3rZYApvHtP6v48xviDknywQ7kXpS4gG2ThqDoike9etSky2HBcNRXUEA5xJ88nJdwxP1zF2gzWhKTjYuWnuQRJ25",
  "key22": "2zZipFDnj6gKF5xMJuKQ84X7JyQWbvorNsBJTX3bTw8XHPmW5dUPTGHr5YjEPuCJa7yN1ntrkTE6fB9WB24KiCqY",
  "key23": "5HkQB56B988aXLR8ykrHLmZo19HBXjmBcQpeVPEGWGbtLVBq2hZawxuc1mabxYZcMVgpvKmZBdkB53389csXLtvS",
  "key24": "m62Q4wVW4mRSHrs4vGVWXijsxpUMNodtaTA7V7Vybk6jKFqYZr7f63SiecTpKs82kAYadfyLrcqHh2qzUvrPHbz",
  "key25": "2ww5cevCLK96vRShG6Z3ZZVxpwKTmqcxR13RZm1km9s8PJUBRbMi88dC2SPV4NtP5CKD26YNV64pM124VGvmkkF7",
  "key26": "4AoXa3h8gQs4SZ95VX3A1jNr1oHFFBXef6zQHzw3BiMUwrdZ8644umdnWo9TmUB652Tm9Ri7Ak8J4F9tP3cLWxDr",
  "key27": "4SW5H7CtbsPc3vUFYuNPJwG2QPxZbN8gV9VV8Wa4Cmsn8sBvp8Ckouy2RQxB7CBPv5CNV2FRBJotFsM7DoCQsAy4",
  "key28": "KWju3vuV3yUaNAMLGvbfXtVEAZyPTgyk6BRM3AqBFjQWM7NL637FPyHpVdoCJjaUiQzWHoebwdWf4amF2gzu6ot",
  "key29": "HWpo5MehP35NHwGy6ZMQ9K5aNYDyrjvPQvgdU2N45Kwmmu1AptcPRrFjAjqg3bhxvWVtR3nPuGwuqyAUDEpMWZw",
  "key30": "NTjVdW8YoPGCe4QtGujnTFq7qMsNCmaU7QTtv6DvB9ZVQ2R4SvPLz6RAB9LA9aStmjjjaUfskHmoqjNVFjNWHHx",
  "key31": "2qsHntZ4fK3c9EFX2YDY4MmB6o8q9J9Zq1em58YRGNXzQER6aH378v2rv3dvsGacWwvzpU2SNh9GNiwKkH3n56ov",
  "key32": "3hGocQDFxtfefsheAzS65isAVCwGYuxWD2mZNhbxYWDVzFREzLELSQ8WPCSxUYeVwiWhU9vCTLtR2thDDEk7rigL",
  "key33": "2RwGAqDErPLmKqeQDXRC8opZUMjoSTgbh9NzQfw1zSUpwckdvcCmW3YpRNB1FWXRHE2FMcbLmSXLzPqhFhFsNtYT",
  "key34": "26XS1ZmScKnBtf5WAsUGpwzMYXDvAz2ZwNLxDLcTwjYK2tkE8aUydTndfXa4HooYWzUhempjaBwdDUJiSBiFdZpV",
  "key35": "4vft249PLGy3WEfZMeA1WpkkCcs1BqSWA9UjXNbJQAhDoB5mKCiy3bfbotzFqixGjJ9hoVGsyeDw27SA1Azfqmnm",
  "key36": "2BsUkDrd8VXKKQZuN6GWzPLXRAuiFn7TMWHrCjVFGzeR1eGZXh2735DcKwvzYHotGhG2VuyfAtnZFC4HRgifVqEP",
  "key37": "2ZL7ZGkSKRiqoXkpY6EKTwLx5i7bbTi7j6HiCrgJSQVbV6oRJubJk8WEZgSec4Z2jUuDExPmurTNhetzgwxwhPjd",
  "key38": "q7P7CAnM5LibGrtJGZ8bx8zPmxxNM8QYQPM611ZDwYir8sB98coUV86zJkvgnRDjKohhu8DQeDhgY3MKT74gtqq",
  "key39": "3TEv8MgEmiAySdYmLaEh5v5rP1QbUVDWSQcf3SwGGS2TQQazxmwvL8dQonKoqWwoByUBATmdqLWtj6QAs53vRyMH",
  "key40": "4Y8X5u4CcrPDqFwxrq8tf76HwMrGJzCxBmoMWqw65EDoH9T63TDSDUwJDsYSGguQ8cFm2aQ77dGkjeWDfXTuFfaL",
  "key41": "5Nkq6ufd6WAqx2xXambpUXkM5h9DX9T6xnYm5vfuaynE5NayeK4KxRHwDm6TtGkWCmiYYgEyE2jdgKdz7iEFFn7t",
  "key42": "Zuepg8EsMoT1ZGC12vynDn5SVVJbXavHKb7WQcCzdS2gd47GYM8gYGogvWdjo3L2bv77b5ZuwZH7jKGtHtCpxD4",
  "key43": "4et3SZmnNMGmkNtFGq2YYKjgBDUm7NkhNgk4tXVJ6DCtGBy451Zj8zPepjNiX42c6QazMG8RP617w99FC2qzhLuP",
  "key44": "48jnaCpuR3uUtCAwGuWeW775JKB8Va3sezo34RPCWhBjveDrvpGPndCxgTMkv11fVaLTdzDu4jfNyhvgDHY6RJKi",
  "key45": "58LJRGt1wCGRS6HowxjJ54sxEzqZUan1VnfUgbNkRzDXqADNaRPVtFVpTBsFT7yRWExCqqHNrMgNTQMgBF4yyd4j"
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
