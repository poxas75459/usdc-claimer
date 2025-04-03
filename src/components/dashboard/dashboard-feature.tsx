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
    "5j99HQ9gQU2znFhdpwcT245uT26tXrAEXKWEbvJrS6DYG74dAEg9zwhtGT5yWiev1tz1oa7RR3oKkDrJVsTaiccH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUSjNQFi2Tk1TwBWpqTTrqrKJaH6oiF5uBAMxUnWSQYxmD5DVocDgZiBYuRbXBmYiVnA3USvCGjDaUGCechzG9p",
  "key1": "2SPcBWJfvMiz6UdYZ4h657X9kecx4hre6RdjDZ9BEUF7iJy9RyJg6qLvQecuGbotK3urvFk5zuZczrbJsbpKrQEo",
  "key2": "2SPHDkDYJeZhP32F2F3vsMARQmwRMGhNop8cfCkHMKcPnd3w19s7duTtuW938WWE4TsyMq1YzrzewiQwiMUYmwmj",
  "key3": "4QBs86PYoG7iGob1KiNSBeFnXADoFeaeDn7Td8cC2g8XtgzHke7WdNXRJMiyTgxDdCb9aMMGmgj4BCRYf3rsBTJe",
  "key4": "43azjV4rk564hWbg9d1jB54YA6cwp7xuecpr9R1NasB6HkJtaAKtpP33kLLZ9tiCrHHFtuC1FEbZbzC6P9GYsSKa",
  "key5": "VCSQJ5w5gHJg3FHZi4Q7PZTwZXKH5N7xJfB91cJb5YkJiHxafdP44YPgZLprRyJtxfenusn7z4ZHrWfKVMcxWmJ",
  "key6": "4e6PVopG1WyUBthxGQF66QeeUjSe9QaG3zsgF9t97JUSBfTCbWMww3xszhXzKfFbUiYqVAssXiozxJa7wKGCMyVS",
  "key7": "4JsbQAqnSDNPyxZB4NQ7jA9QEJ5jgm9mtXwyHTHf2vkKUZ1hEwwU8yFQR1T8aFyvUxbdLHB6VVHPRWNdcwbyrHzG",
  "key8": "5jTETx5492D2KPckHSUKLhms4dF8GxQXDwm6ritTvKSy7rpVSp835kFG345FdYqxKLUfd9eELKiVPhg7TQdTyhTF",
  "key9": "63f3pkCfEVunscuMhzQD7nBG8nDGPvuv4MQMUcPBBBfGNNG4ZoGNfFZQ7zbZhyB7zYFMdWNc8Z8R236mM83cU7KK",
  "key10": "29877ZjcQ7v5qojowCaQbkbvyEhoe5Yab3hqZdEaZMaK52QuR3zmBHEtaWaaED8SJbq6EqJQyTjyvHRLkdFz3c3i",
  "key11": "49zW6LSFRWBEMGpzXM76Sfts94eGnedvF89TqmtUQ3RYvsZqhpG4r7h3SorJArwjk8aaskEnRRd8T59tRDbzTxx7",
  "key12": "5TMiogscTRX8KFLF9n1cGKJ5b9kmNRcarMzQjKn9vQ7uE4UiZUhjW8seDWJPALrkwbyw1q33E3LWjSecR49ifztP",
  "key13": "2VQifn4RQg81Q5GFzzuNFrdGCfrx5aYwrrnzaBFgHiwp7Zo9UJHcMJ8fmJ5B5qWvwda6ViN5Qf1wH9EEmJsqLCAt",
  "key14": "5yeR2sgL2AaaATKGTK9hgwGwGxPNdQFKBkKNFvnvw3C3wEPkncRkBPVmcrJHc2tUFUJEgf2LsD4C3qKzroc7TN6m",
  "key15": "5nvngLovFhfwzTkAfSsby9nG4heLiCQovtQijUNipipzn6khvY7ZBZ2vwPH3MzbR5nScVHFk458nfoGxhM5A62gA",
  "key16": "5LEiAU9cYxDSDM5zWTseF8SXdosV5grWLKDzeGHbKopQmN6MPbqJ7Pew2BwBhBirNPgafbxgMbt7GbwAS28yuB2X",
  "key17": "2EzSkPV131Qvp2fdNJ9CjYJaghF1yXjDFcyPvsfMQMVSVu3ThrXQpgjaUx5Qm9aCs6E1v3fsVhTFscD9G9DYz1Ws",
  "key18": "UcqiEzEu6BYbj3V5TzLg5mG7iBTCWDCyJgpJ8g4BtdfTM5GtFmetLTfJkV6nudEmGDR8QureDaoiBuhQ7gyza92",
  "key19": "2TtH9s4ZHJcHTK6YL1djbm8CMWdZCf4vYzEJxDny2rsHVpnUP26NwBC9cpcgZqpB1ksCwd8Wp43pn4tTnde1sWbG",
  "key20": "5vHPqyxUoUEKgzV384mD76QoLYHcbaqez96HWy5yweK7V1vRrsJiNV5DiGQhcTmrrLjZeuGfopvWUz9bQB4ww4nk",
  "key21": "uzta5i2m3oxJs5HCiEfKtGMEXHxtgDbaES5s6CmXM7R3Q6n5qfueeaeZh3Pz51a7zzYBNBeQ6qRR8u1BMDgc8Du",
  "key22": "55f3how53BUy7XLXWFTznKr4WUGT8YrAmHH7vzrtjkA9YqRLkcyiZy6U8VrtuyBaCwekvSVL84o9rN2VjWNsk7Dz",
  "key23": "5EFAAG4fxEkcVgGrzKHdcQVbCG6o4P8jaci767G7mNxK7hWenJw14i8cGr1zRhCKB88znKNQStuXiJp9ZjKVGE2K",
  "key24": "5u4NsM1mxyFXHQte6r8PRDzsp6hzW3nrLAuz8TYa7JFNAoswXQUa93X3dZygCJpemAgA14GonGUuV6k2srPiXc7s",
  "key25": "2Jy4EVDxPseFM1HJaVQG8tgLe93RRvB3bRBz5cVsYBNKXFrhhXkYZmcoZyakcV3Vo9x9bF8LynCzuC2FXjC3gp21",
  "key26": "5gpQ7wy543p6cAb6Hp61pYNXd5b377ztHWbB9TV3YyayJ76mxB7QguAvsd3YbTpCasGFM9uzmYfeDLNuDyZXNJ5L",
  "key27": "2VDuPUPVV3DGEkzUZGhnTK1GrXhckg3rXZnUvE2sXVpotgCnqWjuLWL1FKsP7UUkHckjAUWVkgKgf4j9HfNbLN55",
  "key28": "4zk1ZH9o5buNwAbYrTM5pr4kMapaDrB1tWXXN2wQiHULzyXGWAErHoC1hpuZdkM4kJpRdKrxzKVRH58CLfacEFWh",
  "key29": "4pd1tZhqY7fQpXXXf8QLKDn5nUmdhqPjACuQ4bKBdnqEfjTTQ3YC1PKac8MKbkodpq14fx9dwkAgepZeqZRwzUQM",
  "key30": "3ba7MPiXX3RBJj5GGQaKt399mzZLWiUvdtdRYeR2VAngvCzPgjovKZ5QA8BihGLFi7HbkdRTLZgVQ4X9RtNk9hvE",
  "key31": "2KKFW8oLFFD8L6oLoUeSNupHLhncQRLXtkanRxTBnZub7WcubsZfbf2sdtu5pcLAaWYeRomtSMTpm4sXFzYB7xMt",
  "key32": "5sHcaY1b9m51z1v8Jdpkn8DspFP2roHWZ4gYZWBpdz53b7KSi8j8d7H9uAKFJmNfSqdocTTv6MdyRCoAqUjmfYf",
  "key33": "2o66WAAx8HBiTD9f1pZYuwtKU9aWTVyjuMoehuFCtWBCkMZi8N9ZSHvDCp4cqAtxar7E8CETyufVw94dHgdCP34Z",
  "key34": "MhWt2Aho9UoPGtou8mVKKR8EyFvCbxy8RKPeZg9qjdsWXqMcAyyagfojpUsZeEgDyNXCmjQYz9h9QJiwjYdr3MQ",
  "key35": "4YmEcKKEN3pJmNXVDTwjDC2XC2THMgEZ49XuE5CJQ9DSJVH2ssziHjdLMjbWaUNZDyFZakL3usAxMBKHUduZxw5Z",
  "key36": "3D7VPiM49fZQoXgM9jAA7vYm8wUibRR1hbqgmP12P9fPTRHpP1TU5eLvFjnGHumpCcZcwcCAT35PH9CTt8YhUMAw",
  "key37": "3qfx5SmYTRP8Bb7ke6q8tMn8YnSU9UpYPe7fKwe74yqsW1wqy68YdUdAGW9yDmJwWsAVGxghCwjjmeQxGZjY7mD",
  "key38": "5r78RFNunKrVu9RqnNtveqYgL2RryyDwDjhb7Fc8jAQqfGdMxb1xSVUgJLkxhNzjrAZxjpMfjVz36VE1V4JFNVAj",
  "key39": "3pqjqeRm6HAh1fSh5V8FpV78iaj8ufjnGRx4ftUwfHPkHept5cW5YsFexQdYW5GCqKUugmB3tzZ6Mo8bbHbQFX5x",
  "key40": "2ToqHWgZA6bnP8PKdFGv1gKz1ExAYYn7eDoTnj1yWHrbw59oficcgc7QwZGVNMaX6hVHT93CFD8sbePd4npi8es4"
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
