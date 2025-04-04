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
    "2ggXDnh8JWzpYcqwDPdagoxTgb3yVSTZoG6MnCbqqPcBnFgRS4aNneKnrUaV3AF5kUv2eSXbJWNQbJG1x1NGsA25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W165uTFE1gQ5ddYHnJVPBa3EFcXeKZXAqiZnAG421gAMLvesg5YxtaUe7vCFW7hCJ5MiikSEuXYzk1eYQNWt9Uu",
  "key1": "2KPCcMNLiWoi7SR1KZNxxpQby6cHLE4Y5Qz3EqqhzAS8xNeNram5m9jtqf67BUoxLM6xj1gDgSk1qbhwZDhUXXxC",
  "key2": "25b1eZmfC8HePeMNg7YNuTHhiPtH4F9RNhDEABBm28fBHv3GH2o8W1ZW4SZx7XhB6G16ooMdzafQ8DhRd8KRrjiE",
  "key3": "269htaPHP841isYFwd4esYEisJ38RyvqJW3vHSGr78XnsKnqTWM7mxW1t2FmYHgKykrCcg88n3d9ByfmVEpittJf",
  "key4": "2y1qVwX4P7YeEUYnQMxoEECVkYb7FXgsxs2jXkYvdczmiTvmhuK369qUvr5JBeZpB8DvZivhnTHqcKicDz5RRpkv",
  "key5": "4iunM8wmWpsatjK24xSDxBcSDRjWpQoTM1KNPabkwHRTJFBfKKKdRSdYhNs4MQFgJhgWZfHVRLNPhbMWJHmqpm6J",
  "key6": "28MsQvgfgc4hbs35Hr7eTirwR3MzTtf45vb82YuZFfJkAxBQRTuBLMywi6RVzgAD2e6rfqNKAbLZycxC9N1j4Hnu",
  "key7": "3uRgWFPwtcw9SgGuoet9M8TdrBfhSGxinxQKt4WxvwA2EWQLSE1VDwf7WszSqoBtHSc7wR2hKzYJZmNJ69p4F1m1",
  "key8": "4ECgJSyT4eFCUB5NjxVGGYaQErVJYGuuWFsLvG7okZjCJQ9E8mmcqUzEqsuDGMNx9oFAV7deTdrj66PDbz2vsWeM",
  "key9": "8zeGCE3jPtgVDoRFDjpXKEoNtfTUjpPhPa6quA1G2ERmqTD31wDG7cw9rKjELNQ9XbiM5SbdSwg1cv3G1Sr54aT",
  "key10": "2y3aPoKacm5iQgk1wcNPTRZPbL8nW6NMaeL3wwBur2wo61JiN9zP5E3xHrkaYFCp2edd3kcxeJ8Xd7Q3d3W9eVmC",
  "key11": "NRTyyiuJdmva26EqXCEZwgTug7kfoUjoSgkU4jrANeqs8wpq284FpYXK2gNLKMSy1ez9bfDqRnjD5TpQ8CRC2os",
  "key12": "EAdz5ZRBESYn6XTZnZsjSs36RNVMcoRhi3oQkLqPy7bySBj84noKwQibTTKkUAkdJMXmqbrTTy1uWGUaNyhjyAG",
  "key13": "4qFzcCKx2NrHcJJzcRPqY8i3CNxa1MyxDjy2VvV7QSSjUriiAuB1n6EBE4Wm8Bc56S63AUf9e8NhyXb5ddN2FBez",
  "key14": "5TGDp33wyLa2tJsXsBYDtXSQ1G2UmqrgkJk4You5pcdKms54uDpx72jBMtNuqbVyjAYE9Jy385Vcd1nCF2TkouLU",
  "key15": "Nbw2MuwVjbhrycqrxWCLqREF5idtvFBmQreE92RpyR6couU3VuxWvY7ag2dPrzwgxQrKG5g6xkBAJZ7k9bAj1Am",
  "key16": "59N8FuhDFS43bcYDYBSrwn3FJizksevdFPCCv8zckEYQoVtMeoLnnaSVNh26omZ5ZKRrg8xnc9xhzoP8tH8qUSHZ",
  "key17": "wvmXsdnx13sy6SUdkjxzj278rCnNxMfTnK2ThXHPs9NgkL7GsDkF8cAb2Djqc5v9CKbQhQYmPBuihifY7NbixWc",
  "key18": "nmMY9TxSDp8NvA3JvNnBZuhxz9oUNq5Bq3gEmFdm7GHBeriVfnbfd9WMAxzEMUGtuZMiaUDUJ7SsodLpY73cpNg",
  "key19": "5mGqvufzfjppGUtcWTkrd5KrwJUWVYzKJfbk1Vu1sU9s6PQbAs4CpQjCyS1GEDpHC66R3e6hnnGSdjhyTXoERps6",
  "key20": "2pU7F281GRiggBkG15UsuVVbePPQpKjQdhW5UbfuScdFmHbK713MFFnGMTn8uMG6RU9kUaPw5kCq7Pf4MviDS1SN",
  "key21": "3qG2tUV2uGdnUThE4cVzDVE8iYxWoYokghBcQ4MTEzGyZwMi24Yz1nqm2NvzHmQjPAqCncKprpgzKV5cDGKF5g67",
  "key22": "5uEX4dg8MZE9vUq9f3VDnFcVNXPVLNJvz8QSca7Lx73V4NnsF2iShN3CDgYmVZbojxmPgfC6z35rbdGHjLdSoPYg",
  "key23": "4VeNwjh77pssvmywWHCpiSgCE3VZtBd2RNUyoVUGbpAQG891eH13YQJZ8k8DaJUitHEKGCKwjAVaebVsJShV5C4D",
  "key24": "5DL3pqG35x6x8bn6i4ppibqd2b4wgGK8VEP8NZpPeEnKU5pWn5d8s7huFCByQWaMP9fRS3dYqiQfspYqeVygNHNS",
  "key25": "3oseiF3CiJ5yFxBfrWfHZyExiHYwvXf2GZhUvEVz5HNX6MLqwnMvc4Vdw5ZujSjVweCFjzV7QiUb8yXr3nMTeUNF",
  "key26": "4kqu8VTWCKzTkoa2rLcJMT2Kbmb6kaiivKFaRqGnr3DDVvKdNJzPxLwG7rY35ZwuSDNVLxBeZxyDiDCQohsEhtw8",
  "key27": "3ckQgKnfMRYjyFfqsnF8uSLxSHy8PzWpPcVJMcpStQLoUKw6SMXcg2ud1TU7LSxhghaAZNbfUfJSVRC6Tbt97tPL",
  "key28": "5d2hEYyDHjQMJmpNXEjjYHFvq9ziFRSqAvYp4Hiuk5MiJwy2FbAMjgqknWvCUkhW5wGNW5X1ypXjveUaQm13VYMs",
  "key29": "3Wtt5EVGMFWRLQiztZ9HC9oxGLmhZAXDjBkWZeP83xJwoEow8nqGFmBwYAQ6sd5zD78BNWHEsF2KCn9vhPf4CCfA",
  "key30": "2MoLLRNoYkAHG8A5GKVeaNzqdrG5YWsrCVyGxBzTWCHF8SkLCALRsNSU2wozUu14xSbdGFcbpRpaGuXJLQT2qkdj",
  "key31": "4Yzz3jANZgsevctLkt9D7DbFM9fpMtGTSB3c1pYYDGDvB4YSDJnRU3r6mfefCje1L4VjippGdSToVFwwpz3bAQBp",
  "key32": "5BjZtm8mVfnBgrFgyHwyHEE7tTB6H8goveqVS2nb4CrbSHd6DD3WJDANQ9DWQq6xs1VUatE3Us6G5cnyCFC2PjpA",
  "key33": "2NTcmQXeyeUCsfkgMEoS3vgtrKSoTbYYzKfb5dDKapH7EwXbMj6A8fcfWgYLJwbQxeYL94mUja1NNRPTChE5LsfZ",
  "key34": "kUxiDVHmSjqRVkmSE1isAW9n4dn7NAC2JUqfCKSCkK9BQby9V16NtC9miR6LqSwLAxdoynHoso6n4wdSa63kT58",
  "key35": "SEoSV5fLpQG3LybXgGuwtMm841PVciyxS8eE4A8WeR68xjHFxf9y79BPfcRKtSxctVpsioai3Ru6rfptEv3M9ML",
  "key36": "CKdvR5c5cDMjW2c8KUmtagnTzcDJAp6kmVU1hhnw6LXh6WDTQTRJkCXnYvRjQaYyRLsQ6eSprbzpdRnQAnwzUvv",
  "key37": "5htyN3BFAgSACoiaiSgh3bMYDB5wjMka4asoF8V552SN1rc4HEBzopuw1B73hRkTStrCGrXYfdwr3i1p1DgAQR3R",
  "key38": "2V2qffp7JXDhC5UWY76Cp8Aymh9HGGTgcYD8whNXCGBrQQ38uAc5CkH2etPvY3VrAQR5zn1saDq3B68WDjd5YUy3",
  "key39": "b9yg7HRj9Be7FVaTHBKdN33DKGQCiWH6hXCLH3cuSzuykqDrfR2bAndCC1pgoiqPz6VScknVwXteWhSWAAMkaCz",
  "key40": "4xTAqiH73qBXD44NzvrtHmKPKKUPxdN8nwrvwa5mz4FVPxq3JYDb69UJLTVfb9LtFcBfNmC9iPAcAuWtheTsNtb5",
  "key41": "5fVf8gsNcXuByVdB79M4NCcnMU2uzvTpP1efiFrCrY7j1ASZyb5mY8VaQ2cMQSDCJwxvd4ywG3iLiz4M1nexBBaZ",
  "key42": "DXRQ52U138Le2YHREAVMhA46UsCTqq93QxVWFc99MFBgisTs3WW5hXj3YhZnMGaKGgS6ckgbd4GxPULnfL9eftC"
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
