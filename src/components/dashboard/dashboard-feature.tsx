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
    "xCj19A3PLEB6un3rZDhS7LSevkCcQF4awbbAmKew72szaHVfhcoYdBxKcD2TGU3PW88pP9z2MvGhP9Ei9LRYvzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbXjKjDpjSpAqMFBHLjU3YtyGeE53MXXfV4zHUW3swk3iUgbYuEfUxeKY9nmzJSD4n8kemp9aWcFTkPquAhXE6X",
  "key1": "3dXREiuomBSP76ce5wTmGtcVbiZX9qMPEe13vUFja2cLCXsifGcNiSmTPjhHkgFmqCVEgHGfQJ9iNxTCkAm8eWKo",
  "key2": "5RH4iTb6TxEJh978xNCEadgjTwuL91cLBro2BtyV97GgkSDh52kJVroJsevyHh9J3VteFN2KPzgGFsXfBZGFK13Z",
  "key3": "5cJnc9Rok6CwNpu9CDvz3yEz1i76T4RjZgJoFCVpuitPRXtfA6u55RMdRYEUqrvWYWNBHsGmcGLVE3XwKh1wAoVh",
  "key4": "54Fb9ksASfyNyy1jtiUtPEhDqxWTDFvMRDoQkSmx3F1VbjYEkmgD68vjLuMu7xt928eDMWvXzn3DtupxAnAh6CMw",
  "key5": "3V3A5YGdJoybqhAWexRi9BThF3MxmLRWgxVZMxeBVF7FYGDeTcwqFy4dXrrJbN7mim7btx5FWZKCoR6m44tnESkj",
  "key6": "617sum86ScG4TAYeGSwYNhTCwC8jXuGCZTMAUWx6L9bKHjVavc2v3Ya8fjTXzWRt7CzGizt1mnmGcoFF2PxyvhTe",
  "key7": "4xiySvoQmr4iYmY6hXWKX8GEfAw6Ex2xtz8JjUrL5Mm7uGmbH5Y8BiT1zsmMBsLwL8LWXc4FH8XSZiNKse7bfDjy",
  "key8": "2Y4N2CGZQP9j5eZbxJaqmmRV4zFw47ufjPiaZft8HGZRoxjhp5sbTBndXMbttNmJuPSNKjfAhmRkDqBmaVyyVHFC",
  "key9": "5pb9kUj26QymgLbKLmwgnN4U3fViB256uQmQVERBAyEtbwkLZopczzzAEKAsMooxjCVi9Zt3cTASKgs1Miw6eBhB",
  "key10": "wRZhY2VeCC2xiyuEV4QUv4QwfzPwTrmMe31n3YmvBm4x8qYzjTxqMaXrPiirBc1zP1vc7AvYekT88PNK3PKNSfZ",
  "key11": "4LJwqwUbVKCJRaqBB8BPCCedSGQ8orpc3UQUjm1mNjgbqtWBkkBCeJMh85CoTvfAHfYXtzeLPkqBBXFk5VmsQThn",
  "key12": "2yFmgynQnzE5EupAtLtnPooLnDSv8qYe1STrkeTqkAcBfpgmtLkMQZUZi6rayEQoUL4UKAhNPUw9o77rLNwFAUtg",
  "key13": "AZxmAsMH1rJKG1EW7PKNnNbaif9N1jSdidCnmj5MWVXhViwbadV65CYL9SonErg2pMkviuiAgPZPzRjxrBBjmAV",
  "key14": "APECyYJtMZF356mKf55G28vdMLdjrjynuVL5TFSRC7V8V1hs79phYXnAfzMBjgagzFdrZRMz5hkuhxpt8SMaAB8",
  "key15": "LqBBdmFaJEw9JXsPxjao9wRdNrdXzUdTFrFE7F69uDNvMsFqat82tp8Xgg1qT8SRPn6jmAtphXdw3FDYUC4pGNo",
  "key16": "2w1y424s4gSqePxU5LRGHP8Y4u9HVj8aXu8avR8KGyBUaKyYbbU4D9JpDk8pfGgfBKAefmCm8ew2JdiE1xSqr9af",
  "key17": "dgiPwz7J8c3pdJtdm2iffLN6YmPQ8BZ7a5ooKHJbfQ9pqCKJLavqkvhZLziQDFtDaX1fyX9ZkM6J8QoeYH8vA1t",
  "key18": "5Zm9JEEBVqk8tUYBxDu8QNUL6Xdu9KWGHDde8jSQMqKfP5DRGXV57xLVo3yPDXKHDboSr2pXh1r3y8mfXuYJUpKZ",
  "key19": "Q6MrAsG3GU4wtsDPQrrsjcfzYArcotQUbYbUvN6EUgHrfDTafJJeYANgcg1HxdpXcRk2iaFawiz8yaeav1wbhAt",
  "key20": "42n8hxSTiUVmucTeaoNoaGMtzLj4agsHXC7qmGqx4TRvFvcg4wGC5yJup5sZMq48cueAAU6VvgCpepKaNRojLbsL",
  "key21": "64t6jyjjSAorGGRV3DkMmBgEZNRH4poZdGkhFEzVam2D59MPKF4ZLo6wbHrnUNmqcoE56724DSzyu8YTPyj3R5Do",
  "key22": "3qyuinSU4c181KJdVodtEfSSqR4Y3d76wNu1g8g1y4KmWqnwMn3t3M5GQ8WgpRQ9wX2w1cUbp19qYWjMs7nnrwPp",
  "key23": "5bX1Zjt1cVtL6aRRisqtQtj2xRANgkHngnGRZ4SKkUwhCZiWDCEufDdjFEWJMBe5Y9wxjL99Y6Tz3xzpGcDAaKdw",
  "key24": "3oMTQPnQCfRDqXBTzp7JLudx9SjanMEEUL45NV37AS1JCYomWNc5wpmeHDqgPaRkQwVME1R1A1Z3bmM8ptnvRCQU",
  "key25": "2Wp5DUSLtkg59Pr1WXibVLvoniQCN3RkcMbLi4CWZZiGEEXLURzS7hBbLWEcaCeAJj8AgBxqTqHAHNctzaWxwXBw",
  "key26": "3DWg2Y4dFw4oJfKnuPCULTvjyxCtAvYkFmfS4k7pfcTD5u76GWKixREgUNfPqJ5nhTxC3gABYVwgxhsh82uUUqhz",
  "key27": "huX37UueFYeXoJYsMf4Kbd4BvuJpeVZJdGRXcR3J2oBY3QnDwBYWUwzvP4F1nobR8iXectn43fiNXz5Rdu1bwce",
  "key28": "cJSmB625TKeDYkRmwYEXXzvJURAnrKxBTaWL7Ley1QZVnuTX3r18GeqpDTjNBzC3NRWsQnAEh2DPrLkADLzfcVR",
  "key29": "551wyP5aYL3QjZDiZA94qtWm4obnfteGc1jD7aAXGLD6J6LLpQJ5hboRVNcQT91zAxnVo1D6AwrDCzFnfB9tNXLn",
  "key30": "21tgxNMsXke9Rqf5Zs2bND4AHRpSegz4Mm1VX5uP1PmnTqFnkTjMZV4pLBgZbGNNQtZcXmQzAEYCA9iXSo5nQVjH",
  "key31": "2YXGX4droafe2J8xXevYGpf3EpM36qzgw4FSANur26tNGt4cWXCHSCgWwAbJtuPRWzESHw3t9euxC7kpk4crzRaf",
  "key32": "52LZiFGDTWKu8Q7f4CU1FNEvCJVjstVj2juVfvHLKMJ2tLyhZJ9UtSzhBgkMd81nmVoF9GWsZP1DAKNaXPWh7MrM",
  "key33": "3ye2Kq9vJvMBmsco2AmWSh3wJW7ZkbjNHop4sRy4xjxv15wC1nAxWWt3sfbCg2a2kAAZraCDAvzp7aJCpGvaNNKa",
  "key34": "2xSRmsLvhsDavsegoLyK6wtEiQUdJtiUgA6FoSFcMS4J3WyyNFp7UHSfQPhHPfx9WUN9eC8SEjmdQoc8rpicuzXX",
  "key35": "4KZubGBdz8PF3oxuZQUUsabKa3gCtAnggqKeLT1MUK7UQSPGNCuCva38VfhErkQv2J9Li4qMg6q7grKBQxK2x2sr",
  "key36": "k5TUqvKCJj7p4oEqX1zquvUZYxVS6NUZPDoCJqqncc2qu4gzNaphwM5Uji5Xf6fYE8mJnKP5hFGs5KfGhJ9NBHo"
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
