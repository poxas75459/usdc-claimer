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
    "3LuVA51cRUaKBsGk2E28pqPEH875HHeqq23zis9CBy2gCkDUMktg3kEmZurrnPigcjdtnwfg5g1f1T8uUSmQdKZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qBE4sGoQivXTVXxhDzKk5RmxcRwnNZRjB6d7d2steGc5XiYoH3AtKNX25naNgPdsFG5yPdy3wwVgB3oRmWuWk8m",
  "key1": "BVEfJMVUZVs6k5wXKdutTKrugJsWrw1TVuq9QWMNacDNqg2fiadm3jP75peR8YVL3Za9tcLpnMQAkLiHN7Lmfdb",
  "key2": "38AsNqEDrU8kNFDhFnKCpYJc4WWgh4DWn3tHdW3gc3PjvJwwszfBByKoeZhLnn78ZpnSGbG9f5wjpLbNyHin5r7W",
  "key3": "2N21YGFZ3RS7JGCrCsxUrcRp6GfKnGnMNE14c1V6n4t5x6ERF1su7Q6ZENVP9GvxxQUkW89nD8Rn6HuBxMDKLrZy",
  "key4": "2raLHUP4gRGKLMXEwixBSoSsmfgn7iMEKuH3PeUsCZdFoK8csecS21xjHL3zcy9tKVQmk6zvRrYSvR5oJ9iF5YBo",
  "key5": "5yg962hrBrSyz6vd66gn9tLEq4ZgRQnN2P6qeyWSYpPETyEc8uPDUGdsbiJ7qX6wTUx7ZQ3VdaK8Gz5f4vQT75dV",
  "key6": "fQagcV2CWXA5n9V6zjX5VmD2FByHLyLqcxcN3EttR6nDuL52FrE5nWigsRJ958T8jbD4ADbDNiyyTN2bd4VNtcE",
  "key7": "5pSTigge3hDVKahpGmKjGyG6bjs8xQW4fhRZVpYqio3iwTMVd7B1SfJRiWT6BG8MTLSqAcxMn7w7mmJpvhsrGCFE",
  "key8": "3cgWd3UNrd1FC2hRCG9qVtQf2WK2Lizm4TzM169mFL1Tykkr93rZM1HHrDnV4RvhAzddcXLChxyK8458wqjT2UkZ",
  "key9": "3T2xCexH3R1Fpe9ABr9ohuSMLzS5qWun8t2gFAWr8n4fCg8Z6ay5zN7CDsz6tCQiRhwfNLs2BsM9DqcNXcqULrmG",
  "key10": "3MTSaZzWX6m5HFteXmVaWpxUcFJPrLHsHJG6ym9XUhkKx7E5sGwZhc9nQDPeWHCKjDyPc5PTjZ7VFNR6f5KJDhfV",
  "key11": "5eKqgsi2iu4DZi87ViZex2osw2zphKTFRr2DyEcRhNPMGhwwCuPzyzYPZq2mL7PG4w3Wzxbxcujagd4FEMSbgojh",
  "key12": "46JkJdaMQfWNCY4c3irHWyTjFN4MfPKmWjrADGxjBE8Z3qxWx717cqmqNt38TyBh4xpR2SzpK8mtc2HrkCPbKqaG",
  "key13": "2HW4mRXPPDyBPQ565ZaepGA5Fdp6SfE5UZeE6ZfJdoPra776czGnRzxBMZ2wykKcbReyVLKZu5oXfuac3Ctxap4t",
  "key14": "3hwb3dBz9BNJb3zisBxAyu4jS1tkkkCNLdWR2hsjyoZfKwM8cXtu7HBCUVgg6DxZJesddH5TLTnkz5ikczbv7hpt",
  "key15": "EpQZhfMnCR4zsh7X3a1JxdbngF64Zx8cqF1ntkx9kP7ri71R3JMubhBmdSjc8k5E7FbvrACQ2qq9LEgDnfkhXAT",
  "key16": "3WdK3iMPHar3edQzJXRqqggUjPSrR1gT1vomiU2x9crHbWsgS5hwfVCCFrjKmN1ux9UVWL2LEPY1hsLdnwfW7dqX",
  "key17": "58V9227eSV21sAWNCQMB8mk7fPLgZ5a3rxsQyY5WYCgtkg1C3J3A1JSxHgc9XfTTQzPJdTtKsXbEU6ConeVNDV7e",
  "key18": "4S43k8FkB2XJG3Fah9LHW5a9hwQ2vrmm3ctJKFWu2R5BaoY4s43oWCX5jwW4XFDiRcBn3QsaNdWhiU3HwvyCHsEs",
  "key19": "48wBf8japaym98xkDsPXGW7UDLTi4J3Eqq2qyBchPCGKueNDegZJmcQWpku7eAfQCnJMqUriRPr9UbPgbriYe6YD",
  "key20": "5nRjEBGXmszhrbecnxVaJmdPHcS1qbCNKjavDnuPbe11H9HjB2gePgvQmyrUq2n6Vh5LP1GoQTHUvLdiMJvCB8oK",
  "key21": "ia6t2WSZ7vzjQggDVCqyQLV5i78CbMJ6e83hfozUqrN3mXNwnnKMroMsHWcEB7YyBaVU3tfufyk41PLyz7Pq3Sg",
  "key22": "6Vfv6dLasf5AdnzY2Qobx3rBWCndbSSZ5iV6pubDJ9aCPdydun2JA7PZrvJSGvkaoLV8B6fiS1yXEWgm4tEy4RU",
  "key23": "2T6z43GWNetsvePhWQPKrCPrvnUneBPdKHbnTM2F4Z1rtjuA8gVyB93vDNsrVeJvxJ75zCZnqzYBFTp9baPatqB",
  "key24": "3CNgcVjWNVF8a3ZnGKAsjJucuiGjffnCoMeZJYMoGchSbnn9YfoBEW4S8dV5SnVqsjG11AWJRdCaa2an7WgzxmBw",
  "key25": "4th5vznY1L3tuCAJznN3Gx1s9nsKitFjXUQ8FqpYyXsNsABEZo8FdS2wZg9Nieo8iZuoqExEf54AxrKCAPZHXnkG",
  "key26": "2HVz75jR6hhqYcEZsroCv1dZ7vh8BvLjagvtVBx2ZrgawpR7S9QTMNmEzjpq4eYYHgd1HoQuFwy4pRZ6A9BM2wZB",
  "key27": "WcmNTSVYbkP51Utxqy3MbNLiSrZEp7bFGTdKVGTFTX1o9Lyf1uJBVBaQuKrJrmSZdyLmBg7bSRXyFMhiPYMZGFi",
  "key28": "YdLUZwEzN9qf8pShZ1noSrx9Ewn2Sf1xvyNovsZepSE3Sw81q6UvVpagxWqKukTehXmmEzD8CmFAWMM3AUjfHjs",
  "key29": "5kvnhCg3aQSstcXWx5XB1ZRYqb8XkGj39TvfZ7ZzcmPihESfa5Q1Bji59LDQgVa9nDdu4SQjH23L77BmcveoZYBr",
  "key30": "aqd51Cd1ufeFpfBU2hV3zwFMuH7CR6bbvVFMFpSGqUqEgUg4rBqmw28Ebk6PoCw7iV4vwyn6fPEwTjYuJpPD8Qd",
  "key31": "3S9RPxPMwojsDwwLGxti9232NG3pUYN37RAHEVb5aAgjwxnNQQ54k4a63ggyWWpz3xnuE43X4CT2pgEmCRgkrkpQ",
  "key32": "3pumAFBN53ZmZNiAofbWAKevDyaVdTwERV5fdH4m9byUuVPjxi3tzoSsbEdPARnEAUK8YbB8rdt8pyEiYEdbaUdN",
  "key33": "2LbnNdbttirmyKxRxabcQ1q1AgW9foQtV5gmiZmTde7zzaPznPjtVMp43PU1V1vcMn5T1HbLomwZbKv5sq1VisqR",
  "key34": "KhuFjTwD5SdyAQ5H4t5UH5UhvKqSPURDGpXpCRGCMrtuUXpJfPGZixBnmhq3bNkXpg1gNuBmRY9tuMWRVWkkboP",
  "key35": "3b2vDA2gKJHNUkkZFinNi7SRFsY5N5xWohnizK4jU5Ld32zdFN2HFBQPi4g4xqSkkG4hX9r3QAMgopT5MMTUmG3h",
  "key36": "5rvdbTgi2Xsaq65HZ5zUk38YkcSSfn4ELUBZ6NeTAihP1FCwX8BjnVnNCukiVbzKK7tuzgApv174j55Vhknfev5z",
  "key37": "4rheY4q8iMacrN9qWqf2rDnkvfbGLSdHS2rB37crQU8RfiG21GYbyeTtq64fXkkwFy74JM3ZkjdzneRzttA8xRyZ",
  "key38": "4AtGkthLapK9baeEeeyaXrr6mBzVZETisBB7VNCUUCu99UkRKiAFv9H43vXS51keXvW69oPeWpj7eQXG6VRYwTPK",
  "key39": "5bSkkcViz12qnWpscVNGmHniGc2EJ5Kn4RfxFrmuWKqZTkhjeMjPfEodCPQz617yYVSRqbDfTjx4cLyS3Nb6MpLU",
  "key40": "4VuRs6LmgCef1ssNbvAnxZR3zY7w3rBeF5MQr7wtZJeky6Ptw3fVYmo7TpkTrWXnkL77etjTscZYatGxJm9xD1jm"
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
