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
    "2Vu1RndztVEGSyKC7vEX8C6Dn1kH7nzk5z8QWsy5SXLcywUxdJRNfrxJGx2jBtA9qgU8m82peZ1z9tWpCabyvKC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4RtgQH6mCAoJC18zsUwEK4w1RGRQ6vDefYqTAryowdkKKG4yJkaYMyQskB6ZDcoFRWF2YvkxRKMzXGoJx4A9GE",
  "key1": "39nWT9j7Qaa8dAfNx2SBL5kHJbjRjjxb6FCjbL3pafwiya9JUd24RjFnkcYJNgAqV93QuNxqQsmnVpEwrR75dzxs",
  "key2": "2WRL2mfcBmhTMNJoW48eKWzsEAjMzS2VQVL2jyEt1Bt48UG5WfWZERjgvgmUteT4rBTPf84bZ2sUjkGv8kNGu1B9",
  "key3": "3gGbCznEbSJyE1UiSeBrQftuj9Bo4PxK2Zipnrc3XiYxPEsK2HKRyXGgsQBvwXsvhatZitmm94EXeM6jB22AsrUA",
  "key4": "2E77h6SKr2C6EEsTZVqAvz5MALxMdzpqRQGNEqsnWbmRoXkgduoWV4byCDbvjFJzSaSYaaubaDbNwBiFfTiuSkS3",
  "key5": "2TsgqGqJaNXRR9Smcdnp8hsgutkXmskJ5fJKS5qgqdbB2TimmgjfJwpCduvUc8AfMiiRS9DpVFPx3LVwAEBQzdw4",
  "key6": "4kGk1Yw66Lzi848ewuyVqgDtbAeZtnGH5Qpu6KxHY16dqtHP39VN4ECgVAQeRRkMK3jdmJqMWpNUE7Egrri7Y4rY",
  "key7": "kRdmBhrk9qAyiXbpZeTm4NutfUbd7dNzAhgGENnSrBrMprdZ9N3cXzMMtiaHCDCXdtHQimbnBtDKsRpX8H83FTB",
  "key8": "3DRKjAeEUfKfwuoX4wTdyBGGJSo2uokHBiRF2pEWzdPPXLLzchGyMMs7yaNTfsuzLVCBrfuyXouYeDGkQUxuG6eb",
  "key9": "tvjwU5bqXtQXhtu69np8UW6Ayn2rq4skSRB224raQLtZWFZMbPxPWZZdagxdfLHwY3Nv27L6QBf7GVqTqqmoURN",
  "key10": "D5Mu3LyvfsmwbZPLRvpNpZLdHpUq2jerLQ1vGdjvoRbVd4nzsDZkUMqaWWDJJc8VXEGgqeCGKJLXc9tAb6nmh3X",
  "key11": "3988XThSYfp16gRQpQxeDtGX5BdoyCY2fnwdNu4vsspSVKxCyykGRQYFNwMLeLjgXn5MDuEgZSgQ3DB4Ap2pskda",
  "key12": "hb8MK3frXKrXDryo15qRN8bHR8MqWh1UKoaY31Jh8xrpSVV1sbdPs9QBmGrcwKEsmjAz3XD5spELg1cdY5vptYT",
  "key13": "4Pz6qisqhfrf6BtdXAVz8PR6rDqjoetmy7fGsBVAYAMPo8RyRoDLsERfuUBJ8ShCyrGuLHj3xtkX4jeMcAHQbDWv",
  "key14": "kksUCqSJaZNJuqijhSyPMn7gJe59zceqrDSq56HrF3zbaoVFuvSa7Rm2CHkqbKjWZ4Hk5LN3dnaHeDAHA4E1XFY",
  "key15": "5HwYFXm2URUUJKJbFqfZocXZnTtpZjyHVw9LwV49aTRtMvbbehdN28fednrGkAL8q1UgJ3p7CLraJ9CyVdFYQE74",
  "key16": "4Q7Jm4y294vXi92dCtzrbbBkJUZWW8NUeNz9NRH77L5HjJNNfu2KRu86Cy2owtHYfWfpQQa5zSn3q5HEyjytsBo6",
  "key17": "2wfJiP59Qh6VnVo4hAv7CrU9oN6EuLgiVygHLnATsVm1WhLt7tZSp1fZLHeAsf3n2uvVkwgVq6ic5WLjfuVUcoSg",
  "key18": "3khKWFtZb9iZwJdkHMXfBS7gbHtaGTTa8A6GM858SDh6AFtAPxJPhuoLrCrDMcWpS3PwrbMsXcSSSGrz1gztwQt4",
  "key19": "4Cecc3D9zYuxWs5UVRu4vh7vh5o5y2QhtFz3R6HdFsnRkyQJgt6zUMrsEcRsgo8HgZide4W63SQPkz5AcUKBHKHb",
  "key20": "5Q6GwfDUPkRqGSu7jPFGtQNt58agwnMYQUZJFhwwqtJefMRsNqkvGLREj9UFmsTnQygHLk4S63YMzPVczRsC7kFS",
  "key21": "pg4cowMFFKTJzxq2zfdP7YJXmEtfcos8SK9r2wkiW4dDPYETT5qMUzJwht1mtANfBVnAc5txGccX6Kz46gUKa4w",
  "key22": "5nDZDf5KjUnXDwChJP2z1yuAndEjAZLRPLvdeu3US5JNj8HrE1qHkBMVoTo15UtW9bPkhvXbF5wKkvMVP4YjUQYb",
  "key23": "5P9bvVb8LATXBE7pR9coRZG1sZtgTKnXGUTxQQLphagatCjUpAoygiSkfwG5SbTHjS3vTFLoHWrPcBqBttq2sgLP",
  "key24": "txkKRvtKFtWwUPHdiS9WgyG2g8LijGZEdX3jig5vwvXDJSdtqhZejUQBS9nwwZFCXQ4EcCwhja6GYU41w5VZS87",
  "key25": "hrzzBvsD5JQrwoBYkWZuVucbcXE9dRBEMSfufaGpsG164QFq6vw8BVnmMg4uX7kDRSWb7Q6pZ6dLeXBoNV7TTpJ",
  "key26": "4hFNB9J1DzVKKDSgAdpaRSckZZM5EskTeLMxrx4BqCT9MVsBoVKcznfzwH5ZkDeQjHL3GZjaUHYFsqPuAWeXqXYv",
  "key27": "3te2CUNQQ9JG4h49hFnTKHZVZMhpRB2SLeqy8oy2Y91srznC7X9RGHRHGd3otbtsrqpnerSzctXACgZ6dJtyaL3c",
  "key28": "2BV8xZv3HuimYJrPtG9ynuUArWe2BPz4EdPKLaBk6zfKWYKGHEyN3jLZMcE8dBvz26dr4Q9m9hdvajRxZayxC6MX",
  "key29": "2eRkS9vZz6nVBCcAXMPbG6J9qp6enSBC1qBTeKvuQUjp595Aj9dCkmpLnuVYG5a2NDopbVXpUgCTQxZvprqxVGCr",
  "key30": "45xu3XL5cqNfP9edHUQNm3Ajws4mvwzKbzHaWBjbyBT76tS5N17FHr2UwZABUiUc2my1SdJJxQ6pVZGyXTtppAfT",
  "key31": "4HritFKs7kCSWkbvzeX6Q8CkyZKNSznZP26rubEXXJmKYNzLvKxV48ExvU4ieFFM9o8U4qn8TAg57RmxwNvJ2rJP",
  "key32": "KLQRUVQ8Kpphd9DdUoFY48eLfzJ9e73cmRnvqp2u3hMyy24hchPVifNW1DDW5ZnJgNgYyXk6tvfeUZWF1Foc8Sg"
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
