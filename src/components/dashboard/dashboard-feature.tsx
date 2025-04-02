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
    "3vyBqbzq6KQEgwqfUkyBqBLUmupx1jGRLMTaRcBCMyZu7wb8fQQ6Hxrr5uFn2f4PKSSxQi3TqK6MTzws4PPBeq1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRVJrKvttxDmuPzrnzzVB62WYxUcMsiSCwNQeWDv8fSK7tq9noqJVxr4JcL1UPLRv93Ufz3ShhFJveFb6izGTr8",
  "key1": "3WynxUcBfsqizpY28ARXaYu3Lu6w3nUcGVSWJnFffESCJEmsDxiw3rTdooLYpm27Lx9BNi297NUaM2Y9tm91wAwG",
  "key2": "3NFxsVUZZRPZGMTD5yYhzN6Wy8rUXB1uh5qAKEeGip57ofRBwU4k9zNLCAHUcqXHPBP21K8nSiPQW41iQEMYKWH4",
  "key3": "DVB3vVF4JZnU4LgDuYhw9bYDQ5gfsa8ycxXtyQK91S1ty36BWdDPzMuJzgLoLgqvkiquFSTvpo9ESMfgHS2EKB6",
  "key4": "66Zcf3mZdshr2UAACbencQkLZpwvD4q3apCSLATSFUxkPPysxQfD3QC2hQ3JeMstc3HDfpxwyxem8wQsA2W17YHm",
  "key5": "KrAeSkRZ49ai4PoLQzJjEjhdJRd63RKBcLo3kyUxgLFa25KgVnnHkxr4vdg8A5tHWhWs1B9dhKfkLThtpfV4Egz",
  "key6": "5dZJSGgABHpCHz5TZMbcww8trZcZCSWPVXVtZNHxfmzH6wsb19ZgTEizUGpADsUundcDR6drARALwMEhBRo4hZHj",
  "key7": "5Dt2ePZaxFFRkDzGPQWLAGLRqmMuL4swEbRyFA1xtaJ5rE7bQap3Xm3gBRjjPqbVV79dSaHya5fMQqsLvGYg3nhH",
  "key8": "5ia6Y8u88kFR9KxZF3Q9pQyhs7Z7AhGcevn9BkRenRqJAD1qHsuFFReXmNB2GpC1MesgPGGVqiXzFJ8QHDGz9fRB",
  "key9": "3KYru6PEupqnRa7n69Q7sTq24GtRP2VG6F9WdiLA9kSczMdPn3vVZ6m8ULNEEhsLrQyHXwyar6gWy9ZHRKvJn4kE",
  "key10": "3Jr4TLoB4cGuecE1jWAMqhdGgUbSYHYj9tVJtvNUsZ6cDa2kRHXzXU4NWeJLxtPsh6F1EjMVAWtH9foxkemLyzEq",
  "key11": "2dYZ6GbQxUCSNVYjm2z1QDbVpuTcEK77eZPoR8sbyjbwh51Jr1cJrTSrmhCNztfANfUrVRnUFSo5zuJzJNMQE6VL",
  "key12": "2wPfLBFpYBp3JovUZJe3isvVbnYuwV29tpJTrg5ikNuP8Wp4XRziGyR9vvZgnrBpjX8dq3XMTuwuw84aoyc44sAg",
  "key13": "4ouTpxuBU3ZZdjYaSS8P65uwSwbkshxSV6qDZorWwgV17PQpo5bQmZHGppEWcnnDvQFz1jq8FxC1JdfnfDGw7iM6",
  "key14": "3WC8amwnhe3DU74B2g1v1qwRBhMTW1T5dUBqEt61yecMyyv8kydAcxcDV7Tp7epp3SPHxUABz7Z2y1AHJG4on4mp",
  "key15": "4iSLEAjcEasNJ3cEvDUtbWWDCCwNUiHD4CQBnoycLEpxTpz8ng73fbdTe9ZGLgSveNg4XerQSjKemDXwQHBV7Tka",
  "key16": "2eiD8XkdL8TJXkaBBkuQohREPuYrHX6k9P116rWLbcmq38LdEXWK77scKBJEVYu1Trntv2sb5tPwmpgwja22Teng",
  "key17": "5qH87nhb5VtQLByrgeDMeYUbaksXLyfK99X2r1dBtx9cp1TR3qUbSG59DN9LndjmPSNNh6u4MgaRgprfXo5jGvEP",
  "key18": "Gx6TKpuvCv4pQD6NSNXk8cem1Vn6654Q3resz7XM4KBrZCW4rnmsrFTTKCrjtudE5X14XLnf7uMZHUvKAokxgfj",
  "key19": "csLS3tyFsFbGBPmdwNSvGixkSqq5CkCgD4WSUP83Vnezo6N6G4Aq7GVhQFDCp1MrCigPs2ixmRjR1AhrL3RLNKC",
  "key20": "BFcey5Wz1f6AkoVQDVCPZQAEnAPX5zALo9Wb9gbeTbY1PUry7ouF2kJgvihWyiHNRon8vmtXLtTqWZQfY5UEc7u",
  "key21": "5UQXryJL1i9gaJKzSdFxjiBe65LsbhfHhjYvm2vbe6jDWMhY7H96KzMeZsGi8a7fdodHAqk38twmSnUBzzj4iu1U",
  "key22": "L9ahNer4ervpJaBScTtcinx9Kxegmy8xZ8Gg3r1vpddbpGqVxhpqgnq8bKjf3k1ZHJpNXjctxLr1CrvbFs2NJBV",
  "key23": "2mS2NcrMrzNBNt1pqmC6vcK2zATAyqVbWTjrJVwrtxjd3Efxdpbq1RQSc9h5RzYwCMfeEqofKyQD7YXm4acMqtQ",
  "key24": "5aXz6WttPb6MdioEfFWt4rM7J7bAvLZcQcrdmV5v1w67ptC76zdFCYvhx8FpsDEuY5iB9HjN4gjfDW5qfnhR74W6",
  "key25": "2KydHT3EEqxgwyUas8WzCoFXAwTTTc3Ezsm8ZnqmBH2S1SBRmZtbNjf3mE7Mj56nsydLN3HCL8mu25rzoGgBwKKU",
  "key26": "4CmGwGiE2D3hn7k79qHV8Tfu57oyy4yiRJA415zA2RRBFFF9jYwGjr1msQ3DezhrJKkrx9Jm4ogxEybNStb1ERAd",
  "key27": "3rDvBtkrr4ZxM4wbZ3hf9xFfQipemNAn9K6rRrHmdcnjzZLqw5WFUUEpkRFMZ9APFVbHFi83UFTyS65yHumES3Vi",
  "key28": "53jcNtsmAQSuDK4R7rTjnfJxDn1oMhBjqkK8E2RzR216hD9aW1zxeVHc6aTH7T7f53JXHMgHSnKKQ5WeZFzCxiYm",
  "key29": "5Utu4DGVenpqXC9js2uaUo3g2MWZrfQjbd14s2E3P6bkudbVQ5bCpkXcFFUinQsBnVG6GTK7xcQqE3FVWin2tDTB",
  "key30": "kqPpCZ2F8fYXqYnVA6sESDSsEgo4zhMLzrtT2SAwGQYgjqKrcHxJb2NKA5ReJaDWP6ekpMMBYWymMpdgPt3ddC9",
  "key31": "2XbMUaYzqcdTxjCNKY4Ezrz8YQvGmks5SnGPkw9uGxmuhzzUTxp62Ac5xmKxJy4qGtacSz4fKkHyR6DSnVaq31ST",
  "key32": "2Hv29BZEk85xZWZ2YxtbJsVU5tXnaARjLrADuQEh976jDBMwVRGSkUN6vehek6f7pAVEcADoHMJNMMiAsfGm6Vtu",
  "key33": "2Zr1GTpk7iv7NF4wsbvUZHWFwt8hraMv6vhh3tobASpGBh2rVjqy46bwxSMb8agEG1Hbrb5BbR2BJCU2UFZx2j2j",
  "key34": "3pvanVkwS64kNnektxj4oFov7kDXnsgLMBsciK1VCFTgsPkThhVA74sTYZsC4jdU3H4tavh1ebZRXCLCoWtWJdm2",
  "key35": "8HDTFKEbMeLEQVi1pESMkvh2Us6pxXwMQD2yB3765E5tbxBBP3HZYwMfRPbU6imxgoe1qovEwUcMGjdvegU9Ffa",
  "key36": "4QwYfCpMg4p8oFJAEST5FKfCa5t1Nc5qZQxhc3Gz5JrgqmiySZdrDciQp5fzsWkP5UCcnXHkUqZ77SbMuUqRk9R9",
  "key37": "5Cgn7HyMq3mLwVXWPd9JvrbmibKAUyzbGsYVwhRSAZvcgvndv2gbk95Kanh9gR5eVc6h3Y4vvSQ9nVDNra3Em4S1",
  "key38": "4pQuYxbfXZW5wWE6kS4QRzuVyYBAZZggtzwXgbcguyiv7iNig4tPrqT1AHrJfJ8zvLWGFp7R9fPP5Vt1KUxrcogY",
  "key39": "4gXAzSSc64oaPgv6HuCHwQbMeAq3q9bvKh39TKHCrs7spntVYPH3cig9w81RCv4exAq8moB4wEAdrLcW8NSf9QgR"
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
