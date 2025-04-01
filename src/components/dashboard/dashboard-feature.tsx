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
    "41efWRWEMbqxZodxRfpx3hCFTF4faMoopp9x4RRpPA4HZF7vJ8Ee6AxDZpY6oTVkLtMVAk8csXRxku2WCM5xNV7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHXavHEaFqWLAtNHqW4o4JcU8QN1ENsWbNPRGjbjkE5QGDcSjr9YaA38hyWzuMiCFPYVALF8jhMpq4WFw1tsdFR",
  "key1": "5BMUb7nasd7aFArqpvTPEoHUXGSsZJ5f3FjKDzW1vYnYXic3bAXEmsyA1kCirwnDaG68GCgNjgxkyp4gb4ywUe7e",
  "key2": "5DksYAL73ni4m5RhvmDUN8goMkBE88u1CqCQsaLHXaAagL3W6E3Jcd5wN8w3GyAHAaLGHCbEFjZAhZuJWTJJDwwd",
  "key3": "46igG9pKovr3Dsn4uo4woXqVJokVUrcZ2BARG7AMdEgJYddYky2DZRzgTciFHdcETGSHWazzjRMJrXLQAGMAQSZy",
  "key4": "2M6MKFMPyfTuedkT9G5KTmKM6MfdX5wwV24bTmyoaBE8xQdJXjfbVrerDPM1z1LoauQswFyitCa662Y4f6KbnWp2",
  "key5": "5MaLn8i6TFJJ6BvnBvv2SoEpRaEQywa4qxauSxn9ghkGeQPUdbdfvHii3ebz1FkzeUdvD8h95qSki38vmynqsbdw",
  "key6": "3LHesjTiFxcdWpnk4zYWwjtCz9vHD8mrtZB4BNZFHYqrfbMSh6rAkiiDudjinJfu157J11sNy7gFvbUkhKJoix54",
  "key7": "2wcn4QAuvef7R5mkETmH22jexyX3kg9cavTGksLwkCNH5oHtiMaSQmBJLDDdKxXudjRUDrKEFFd5A21oTCdB9e7w",
  "key8": "2oSr7o8UPDnTBMGWe1pReoM4c9nMhhU3tzSMswu1ThQFrQqVer7ETi3zSy73fMPntE6fhetF2UZsGZdKJ32HdJEX",
  "key9": "33tMNgfqFpt3ukWVRE1Yx6TtkUDqvRHuomJ3jFXABAnAsH9h74XxPxFabrp4QptJwuj47mNrqBjqqGTDLpm3HcAv",
  "key10": "4338qRH2i8tRFWHEWWCJ7D6N7toboLBMtMrFZsodn7q8PvJc5Dn4wYe6AKpc89Kr2MTUvky3Gu4aAEkoj4um5qKq",
  "key11": "4xJPQKiQrZrooe9scoi9cFdUbk2dxSg8a8FqzNAfJbcxBXZKT7xGc8NWihqa3GEtDgMxNxRVLymL4c85p8JQktbR",
  "key12": "4j6R7gvdpDJs5hCkv4xJgsvnTcjhj7gdPGrmp25TEXVbFtxzpwkpuSHR8jTjLke3TjdqiJzA2XJ1KqQbzFPi2JZS",
  "key13": "2zayxvUg8zFefdaF2EU1WQ8YHr8o1EevZhNCmB2Cc8ZG7V3k3EFzRDntQZYJAYu87vnFHrmxWJCK4XEF9Y3VW2sJ",
  "key14": "552gsMZvHrTHjrbX2TUrng4GBmoHVp6XfFHKtcs3E7NUJHrtu9JrbVrfJTDmgpZrZZjHAUdwCwi62a7vi9AyswhP",
  "key15": "pbXWMec17VNgsPgansdbqvvoen5RAodeK2fV7zSQbUBADZTs6UmmpD8GTXh3zECi8J6RGH77t4pEqWn3YEXat3k",
  "key16": "oHpyuJr8ZxqiBtZqwXRGBwMBHhPsBKaWjdYQhVeyMRUrHKqtiTtjWdRXGJsAxPtzAbzBQgTfXuHS19QL9T3tpAR",
  "key17": "83Bw7obGJsfofnGo3SeebXGGCE88moAgty6rw6meJfuNtWmuWu2EbpZZdtNx2M22baUWt2QA72ufj8139LcuWZY",
  "key18": "5JdsDvHexwYmCvjeSR6eARJbvPrF8cEi3FiYrZCRcAaF8NuXBfw9Ye4bxPSx1v9ufEAPnXBqBuGMSuj1iaC4ocHm",
  "key19": "3cS1mNzUur43UaD4QoJxjKmQYk15MM5Git5q1Lmxz7ziXysVWnTKPQQvsMgmT6MNKgv7f6vhewSzx4f3ezKVVvvz",
  "key20": "66D9bcAFDPsDu6LKHQQcrszbDQ5vfca4h2kHwNSV2DCN1NAF53qZxkwbJUwWV6SwQTsehPtU1CxfwVyzEptJ9ZpU",
  "key21": "2VeCUvPQycs9KTMsqHEkdXPpuFQ1cHdP2wcb3qDntFxQdiRqEXqKa2WsAPsfPogbzkTzyEnJN42dDEH4RuqCaj3q",
  "key22": "2cd6hmtN3UoyoLckNmpkieFwo2uqgLaEQFG3TPMv1SAosh8JkbAQS6cNpCfBjUWrSYmLxVp76fHNaDYWZ9jvttbn",
  "key23": "2EecLqLSWDVXRMUNASSiQQgSLBn2xGQe9NuWyzVnuSNNw9bZz3bnpiYQcLHJjK7n1oXmAQimDZ9GjENywC8CLKRx",
  "key24": "3RHedFHQu977Hb89UJQiKa8FLe1DPFNUtYBUavcKQrEWEmNmHjHMz4mrzViWmXAzwGRGsfeSxZYbsKJiZcurtckA",
  "key25": "5f8THzDQkWFZHjTXCRaQzP44t23nhD1uhRG1eXpe77gAFjz3AJQBZ3fs2wpa6qUMfMhh8bRFndHUBJC5ekRoQA3D",
  "key26": "2oEartnGTnhyn7qAZjBPUpY4sQPkounyhqbLJCHjdiLuQPZi1K5aoGTa8hBSH3b5XqWoTbGoApEeLgpAaqSKdELv",
  "key27": "5PCLkW9mTXHrhZRT88F1h5NQi3JvL7jpNhDcrUMqJx3abS1vXHLLbcGHNbMoBJ5jcjRSfR4t3ZUjkM7vo4UE9JnZ",
  "key28": "52PFKTSeJhjx3hvkvMH3GGQ7RqSpTCDkALSevq3iBhCuYkGNHJrKHuVZySHko3aLzCf7wVAN1eQgYRgrCLFd2HuD",
  "key29": "coyiJFiWWcxkqhyQvKnseeQhhZsTQ9quU13ePvWAFkwZXcXR4TC7Fo1igGPVJUqAi1WFejBHVvSSVH2STRCATSJ",
  "key30": "5rUfaNrfHki453wdevX3QYBq4eYM5xa465tjb54DkBCnFTaLyCPzjmXyjfMZKtQCHXuWkKJtnG5MnMhqob8116jS",
  "key31": "44ij2gU45qXYvDU7TrAiZv2byDAdSZzQ7X3rNDjgAzR4HLpKWQj4V3cf6789oP7JHWiFnuxN5a1sJSvVeczVXGHW",
  "key32": "3FZYgffTGRw78nNJAemDQ9bgfbgVFukZpRy48vjmvTmF6DtqUZ5vD66NNqgDgqE5eXj2qYHyqcbT1otMMQjyBpNq",
  "key33": "3jDLUEkcYxPE6Gd66EAJD6pWtvnu3mmrfFNxzEsKzX3JfE1zyyAbMESpD6RcHFucr8tgKqtS2DtWEToLW2D2ieVK",
  "key34": "uJq4z72dYWB5BMaW1Tq1DbQDxLRYqZ9Woh4Z97GfbkxWzgEaNwTsjQkedk5zFi5DNVAPaFvVgDnoMbMpF947ZKT",
  "key35": "4kMoRVKUgHveSPt9k2YeD2252swzAmvjqgWLBHWuqhmJe7c4atpew53gKQf4VzYfnUF5PDCWGaSkPBFzddw61mJ",
  "key36": "49wbEMNku7fqmWm99xxKdz6ivTv6NkPaUfm9XzdzsVSAuie6BmTUBWzsaxrdgSFFndS2phHtbY6jddSy236Pr9bb",
  "key37": "3s2C63QaZ8Q2dhLiNUUPgeMMVbBv9heNBH1pvb39vjrkyDyQm1XwRfCeCEsQh1QBAGzpvEK3hc51GcGBcay5bfYf",
  "key38": "73DV4N5nRxPt4rq8CVZbJjMqTMNXypBTk2TUFbSnser7dP3AadVRq19uWU484J5ouBRwPz7KiDt7VSZPorEySDS",
  "key39": "23j5mbeabRHgY5i461x1ULBFUBWUkc8WPDW4g7jb35FkZ2ud93k69Wg2toJEgBEi6PoL8PV1Ni2anfPeciGas7Te",
  "key40": "39hF9zuc6WyP9RufzGK4LDbSTAnE611x4nrkMa3GrCbQL9oHvyuXcb39R8b9UAhZ4cTjnDuhkQT7VbqUpCNv3jJS",
  "key41": "4LM5qvvnuDBsSqR9JGcvkDeE1sbn3AyR2WZ2phVpyZUjCLminQUtkjZvUGo24c85863gMkzwMM4hPb1Vf53Sznet",
  "key42": "2cANs1Cuj6bKPqR12ekZSgq4zWG186Xt1j7BUWMxnj3XSbFXNFiACXiZcBFcj2uo5vAYUyqyDVJjr8SZq91Tm8fA",
  "key43": "41Q7e2WJWDY2gK2zBzshp4MarPTjBW6UUMAiteCUfcJewmgVmPVRyEkv9GWkAX6vzxBdDkF3wQyfvvvrMDSUV3VZ",
  "key44": "2pHaJTzbgUtTU1BbKSJnMeLajoWaddMR6ZBiQATSBsdvcLyuhUTMUc21qei7e1hFiQ3txCVEJNZYqAnjcDtz6Jmg",
  "key45": "uH5E88KmvcyudLtqZNCACXwryWeyDAtiMXXUkoXB8u85G917TCUv6A9Bc9FdKwg6jSkZgCgv4QQaTxKSdKwpSuh",
  "key46": "5FyUP1iigwMfAUdHG581jkgJ5GnyihxbBswb1RsLLW4CQUwey5xfikpummVaj4zjACLJYQbXPCkZHLhzWpi6tjv7"
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
