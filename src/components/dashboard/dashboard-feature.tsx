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
    "3GZHLizVmNMMuMZkpZsXVjNLgiJ3byVZzAN3YmeSLwBTw1wBVkgbVzsa62Mu7V2RNcVa4pnGYxhdeUmZZvKiKqR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UU2AM58ag8tY5ksXyZ9HWJGUbFNbBBQM8pYjVdwQ2h2ztCim5PZvkUcAKdzMuyu9FucSMGSuHxBzfjyEzATwBU9",
  "key1": "zGDEg9VoWdZnG58yxePuoGQhYqwveVdAJ1Sx8teu4aXmtH717WG4HpoxcyMgehKtunBGE4Pg3rUKtxtpNdiLqqg",
  "key2": "54b3d74meaRfBxdbwkEQfKmCFjPy9Dko6MA5vo5MBBsjo1fCqgpC7gvML2bVaQYbMmiCTmNqVw7jVaJHfmSyM7HG",
  "key3": "2RUzjes5vRn5ZFoG9CSvYY4DdXuRDkxMEnXtvq3CaSusPb4gm3CA3isdn2r3gKk4ceYc74x9CWjaGUZL5j22wWwi",
  "key4": "8fd4sBRWKaZ5NTXQLXvkMUb81uTzkZ3Q96YUvkTN4rfYgC2YXoQ1xKwDTb1DGHawYJL4C5zJuuC1LR4D9g8L4p5",
  "key5": "2CfNj86sBANjkXwyYVrVdRsxsYVLdRaDPMk3jMK1PKUjJKuSZp1u5BqnH8oc2SPfVnJSWDh67aAH2NiXkJhGAHNQ",
  "key6": "3LDW5LXTdxm2HZgbAz8ijJYJh29qjmJkzbaRTiTG5w6nS3CaKDcg2Gq82uzmrPptpvKWs44do8TRa1NncZWrFRUv",
  "key7": "3KvPihUQyzQcSce5Bgev6LkoEGjtAqt1nMWESVxxHzbdMVKJsenJe9fERxjpT7aN9sJVncG2br7EDdE3tZvvFGqi",
  "key8": "Xe6CDCFH3FC4SuPWQQZppHNDDi8GCnu2K1xjsB9GBhCA2u8uuZAefNJHwuST2y7iVTPduURi8mgh3z83eTvABCf",
  "key9": "e4622zC5wMXwtumnGvev7HbpxHSTXasak6KLuDBjHoRFL2cJxXttpmdWqWw9xLChoUKshTdQpy8oaE1MQsTnJEh",
  "key10": "5YdKG4bxuj15Ebo4apA3fydAwEb56GLQCSkZ7gu9bHAF9KzREhGYj2KgAvqcDgUhRHVYJ8SHCjTKHByseUWJFzVL",
  "key11": "3ib4yozJqgHeqPUghYjpcUKA3GHrzADKq5siYtMj1yKmmAfF6RUe1ZHsCgqZ56CYpbxtx8FhZuNXHxDXMW9rEgcE",
  "key12": "4ncwrGe1cNMRzPEnHN8HyutFD4qWoBuRKL1t5YRxzMuf5rwfY7tsnFBR7zN9yHxiiVsGe2skJkd74qkMZvNuZCQh",
  "key13": "2xFimyVy7km2QM1GUg8n11uLcWGDK3SKJBVoX5NZ2oJZ3vYrGeWGowbawpj7CpQ66F3urinp5pfUbKdyxMLv8oa4",
  "key14": "4VAfLwCj21tLs74HMLTVf3R3TC3LdETyXzxQWR7LS4ApmuZ6rWd7k884Z7oboLRSjW9TcSbGnbkg2ouVtKDYbLdP",
  "key15": "4swvfLRkdrdqLFEnVBUY9z1nARxieZwirQ3DWB8Ae7SLunYpJ1m3XPvQPrST6YKu8hiwfRuPUwEUH8cg62q9TxQi",
  "key16": "4PtQMxuHmeKsQwN1mzkTW9Thd2iksSL3GhwNP6zFhXURoNdZ4HEz7DL9aNkGhrz9eUWce2hXo1khrtwjbF1hzaXz",
  "key17": "3rvhiTzJ5FZ7jc7dQG4niRMhbma2BqUXzrdBiEiXAGnJ9iNQ74FvTagVZVvYra7r5sZa32t1Wq2nwtdnzfmiRPWa",
  "key18": "2JoB5oJud8hanzdQ5XHqhVvAx3SNXZtzY1WWbdoMQXJHWtpgwnXDu8sWtfpecDG7qzpwzkJk13eEiJZtNwUx2gbH",
  "key19": "462EU1jRwDQSaiXH8PZWmzTX9mdkRALEGiKMayVpfD4mpvLapqumJ8sLYVA6FkH7mhH6F1kLvU7mdnncF3NBTw5v",
  "key20": "3xexH9opCzm6e1mzfnVbjk1CNtQoz7zvjkxKGZF5jhCgojD7oj4vHc3yH5XEbRBqTroQDNf973wTXC8t2PeMJqjT",
  "key21": "3aJuk79BhsuuqLe4hnQPLtKTNiHqpG78R6zMi7ettALh7iWJ2n6VA5hThBC3rvSLSvEXke55NQ18DAMqVAZor4yz",
  "key22": "36Yw3q6TNoyLvdSKER37zuFWsXGwQ5xD7N6ZgikZ4eVUtVmDRAqbhBH4uXfhcYfcQMom75Ja5Vm1sghifnDMatdW",
  "key23": "4zDHPScuNrbwGpp2ceECx5h1rF8WXgD7AFewBMwLNjK5tNFeAbWt9jR2JzcmraJsQAfp42j1efRtxJpUC2kdDMQe",
  "key24": "4n6eASYi4vMPKfSt2cXpKWPKvcqfAhZwJkFVnxxtoRY7FZwkFH9nMJRW3cCV4yfKQhRWQ2R26nSYmq1yMSLkanX3",
  "key25": "4F4kPmMcrtaDhVfz6sMZsKwKLAq9WakWenkY2M4npASCLcDQ3K3k5X8USrgxEvZfpWALYycuJs4PneNMxiP5exeq",
  "key26": "2mK4YhSdZLC2LvLwepb1dn9dsYPabFPg6B11ch173MhvWojhUWjiqfyW6Wb5ZqjRJtKoSgpUDibbkDaTeDWra8Xg",
  "key27": "bB3RsCLPCiy755QAycvQM7qVb1tmZoZoXjD2PQaAf93yGpkVRcVoQdKH7VR57vgZTZFhYhaivdEScGf7PUhrYp5",
  "key28": "5nNdBmwZPJW1ugiDwxFxH7NWEhrXo3wF66vyxHfd2zASTay3wGDj1rPJUSU4LuKQazMDQeaDXLCZiqFyk2fjBWAM",
  "key29": "3Q73ixddzNUtyr4cVgZHYmbSUP8NUbiQ6HbMhBtjBovx6Y5CoQuQoP71Wu848Sd3z5ZnZxsimpsS4UYzfBvDyr9p",
  "key30": "3gSM1We2CaxpYg7vXg7QbUEgcaKtk2su8Rjdo9cDiEQErQ2riEPowKyozWyaHWSikUL3VRrhoLXu1i9sUV2T5kgC",
  "key31": "4BdfdNnGGwqjFLSHfVacZ7RU1GzFrucLTkiy1bT5J2JDft6tHL4hNz3gQ4ECfW41ce2siMtG5sTZogBf8dnbrGS4",
  "key32": "2VYcWhDmH423KJNaRMWxFQFPQbHiZS6RkX9XWTHmRgPp8FpkehCUKXv4qgCdKNm6wY5uHUMhCvY13QksDxwJfpyq",
  "key33": "4SQbdmeDsZszY51PLLUNsSKGsFheu4ahXxfq1WirYeuvTxJ8sH49Qp9u5tXa16FG2MxrY3snm1Lvs798YPw6SN2c",
  "key34": "3J9MabKmTKtXJYohsK3aynfU2kdxZcYiKYB9ZzBDnT2jrzSPM26c1LenGHVGhPaSd2w8L627RmmxxUM4PPMQr6jQ",
  "key35": "JSnWVGZs8etevfo2MXKwhmt27Gc3B3CyjNjGUvPbt73hL1FxLK3G8vqnhe7ZkPRe3nWhHBY1WRa1ngV1Z8whZDD",
  "key36": "4kkSzncX2yJ3wKhNTg1Rqu7NZLQuSiECEajNpKY77dyoNcQvCL8gTCYnpcSLPNAxzXorgFxbQPPnVWHbFQiKvuw9",
  "key37": "2n3AGHmGoAeuRevP57LomenrraEi1JRhSoBgHjnw84wiYr7QHTqYRnjcAURzu7ns2ZaTUf5YrzXpeMPe493rZSaJ",
  "key38": "aUqhoHTVYbx4XN8ReiUFeBjhLuqNWRdb7UhttFvLwP8R4ycr5tqQ1eqm8c3PTHSv7nHhzS96gRWbVLiQ1GKSati",
  "key39": "RFNTsssW5ACuTKYM6o9uSz56kNaU8zYEYX3p7YGC1tjGg8QWktQBLUTKKVYs3Yk9jyayeSHJYW87281XrxSooS1",
  "key40": "3aJqSqo9cxMtFWjx77ubSTRNpP3jNohAptZHdzyJ8BY4eBZtA1mMXYnkSH5C9pYF6fFy7sgnPhhLCRJQMARLqsP2",
  "key41": "49yJ7ArPnWwNAa7j34WeM22yCK3gh4d6jFhtpb3E5nNLB4rrYU87grXuCEVUBwinYU15YHcbHa6GpCw3D9uDmx5",
  "key42": "8ZqsU4xxbMC9dBdTF1Ukss61YkXbyARMstn2uJqnfhNpVMQrZbf5JnWH59tsJSSfMPg1EeVkxdrrrQu6NPFQurr",
  "key43": "3fbHvpNwYxuvsCEAMZoYeUNEqMX3HHeXH8t63Dzm94H4jGXxLEjQpYQZoiSnsdQKwKLnux9xGZ3WDyZ8fkQiQBq6",
  "key44": "VSNcwfrnGdQYP1hcjRSd3PjzxunwAFyMJ25UVTyyxgsNE34nvVobseaPXHTdDZmXBiEkmRV5Ptrf4a9YCcb3wx7",
  "key45": "jaL2jadKjL9SxHxDqBJmuBrYCgPJJngkFVVtc6st4jHhXmzpLM3nfA1tRmLM7jGnEGN9wS764heTTUGPA2A81pp",
  "key46": "5s8LSeby2mhcdPjb5zi5KGTVhnw8fKQASqx3awMgSw6rnw6SFHE2v6mwjU7h65XsXwEndeUqSRFPHX486x41X9tF",
  "key47": "2T1uSHgfVHM6ABu9McbNNwo2qyR5utWw964QTxECzyUCVuPBMzANbRgjb4HSWkc5JVfoKd1esj9tE5rBYCSfEvQo"
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
