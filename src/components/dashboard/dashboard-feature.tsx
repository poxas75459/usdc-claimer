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
    "4Egoxx8CKGCngm68ug8hSHFPyBijkwc91RMWqTj1cszWUPZXBmQcEs3Ccz1op6m24DfSPNYejonF8XKpzdZs51Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D5smkx4rBksYJzP4eoXsyNLgpoFQJH6K7141G91tbvG4urpGKpKzk7g1Pf9U3piCNwyJn6mQb8x5sqAZm9zetYK",
  "key1": "3GRP4G1NAf3H1Jf5f1Yxdfh3vojKwQmyJufLxzcDmVNoxprHfF5GdDv6Rj4uHMhZkygSjvAVaNFENMN9HTdU17AF",
  "key2": "31hQ5jQRkVUUdw66GyR9vyJxCK74bMyE7wAVKCZdXZio8xo6NcCXcdeA574RoYUgPsYQoRpvYS5xPwkwoCCRpbWV",
  "key3": "3r9SorD1dasC1541jTZnjpL43j4KzKM8FBmEKD3u2W4otBGwaV9fBb1xs13rNhmv6MdMaGhqJVKQhzdrpErMADYt",
  "key4": "iF4T133iVtHam6dV2w2Ew8QSmeSaTSEMdr7e9F8RrbhB5ohyggKuvFbM4LH6hjmHVBfzA4npxHtUFywepgYo3v6",
  "key5": "4uQHgoowXJ4iAVJLZUWdPFkmzuSZH1PMyxdtX1eLR6YRQ22GjiNDcvSUQxHJYfwLC7qcMzr4KfpF9Pr53zyAD4E7",
  "key6": "3waVLgQvKG2FhR3gjK5qfNJQgprkE5mzDE1PikDMLWNKnneBG5jTGVq4WBBxeR1RVTujfqK57dYgX65jXGA9h21j",
  "key7": "2AVm6NeNbfmpgmfeG2vVffJpwUTD6jzVBpNQeC8thXZAnhu8wokAnC6e6xkPyzoZQGXrfxSEdBuBgvRBwRuYHs9y",
  "key8": "eAZQvFS8MhTYNEB83sLxjygJZ94J4yRVL73ZQunTacdRYgSyShek6r4CNgUCJB9XwBU8AmadE6Ung4s4XjZF5pm",
  "key9": "qXKeKYZzVAtQwkofs1XU3qVUXktJP2rSX4k2hTgYubbf7YoF9JFCrGebJnTeh6756NZ4hAL6FeVnwiTFHETMsdg",
  "key10": "5jDka6U3JamfkKFfRRdi7anVd5dysKKDu8YQFLkKbvEcR9aS2whDvBvsJq7UVWBjCkJ1fKCynPuVt4Eo1prc2Qpo",
  "key11": "PpT8KttC27CeKzWdJXfWVw9teb6zQTKZA4fhCcBKE5t1Wa3RTEJ4piLsuLkJTYwZgAE18JVTkoVDPgpEaZ4xEsq",
  "key12": "53qe3LG5aaPPcMWK6SrGejEw2zJjtyiw5zH9Pvq4u4ehAqbipDnGejJLjWWgBM6BrrnteMLeLTjwjZ5mr4JTTeNi",
  "key13": "2tnnvEuwoUgDF2GApdYkPWdMUMzQLKFLcWCbLoHc7Hzrr9PXDESNenePDzoTyoZfuSTtvktCvK1C8PpaB8LPJwQD",
  "key14": "phqtdpNuowvDve8jLg8ubZAbejMZb95KaabpJdcrBnxCe35azRnP4bCDyf1BLXUtdmG5XqsUPySp2Hyo5iXYeo6",
  "key15": "5W4WpCYT1TcJK2bWhz5x6rj6trSXz1TJsRv38cULwdjADWsCu1VLzP1ioF5F8zZkwRMqWaQU64rkQ8fcFNqjv39P",
  "key16": "2PyAmpDWwTUS79Dkby7YnxJfi3B5kLmrzXY9phqFcTXQcAp6dnQfpPiPU9dNn9o3gjtCquZC81DHicDQxYDayFbD",
  "key17": "5RviEP4HqgXFAReYpx7msxk2J2GBcoMet2WLiJ7wAjPumBz7KKHLrnGACacuJNcY2FUVFtbg7LagiP8xjMzbiZPC",
  "key18": "71fxfBj2cz8wHEdHYzhTZDYnFh4iXiNWeVTZG1PLLacegUUK4MLtVYtSzfcLD9WcFw9vf1tUFTgdLvEhrQ2pNzs",
  "key19": "4ck3SXTFH4wSk6GHfmTVW6zJugXay4zWMiiLeC7YCU8iEMvdyZYx1nbaUmK3W1zhPN1XCdPp85nstRJiMNtN1681",
  "key20": "3Jw8GEMK348KeMoy6W76H8U9bqCAWWSTx7gLjw5TjJ9jw71KpZ9KK4QYNPqc58WdUnRxnfy7Jeb6jUUZWgLne3hP",
  "key21": "3AQqE4MtwVyzLBtwoxu91xX3cB7rFvqSuGuW3Pze2oNL8jg2FPZV2utzhnxKhp5hS7a139hJPaGkPHKG9HkNbh7h",
  "key22": "5nzUNSPwhNSR37GEzp7qBqfCgAifnh6ZvmKGDRmQaGAMsGJzKVgsYhk8qgmpKEGCq36bez1YeEQ191GBEfr7wtRq",
  "key23": "4EyYgBBq6x27TsUyjrkFVerXESyUExBHBnBALbu9mnGQEWBTSe94cAFmQjoY1gLNzdshvfNhQAYymuo8aVBSQJsy",
  "key24": "4f57Hxou9n5KyJJG9jrFyMcDUXssgy22rE5J5cyMAKbHUx3GpDm9LFgDVWiGZRtBYyPTTng1W6uJMbM5mk59oEuL",
  "key25": "5eWVs4oatMrYK7RRoFxdgCKp3JLwMokDvHWAm4xnX3tFXYXrPDWfBMK527wfYFojtsrqMoWsfFmrDv5dm8xpG3sB",
  "key26": "3bRGXMRGvWyGAoFkaUZdUBfi58kt4qHhHwG6NxjgPmv8t9UcUb86yS1sByWLaszCRxGPcuRfmzZjosyt4qRZ44A3",
  "key27": "8EXreq2MT98YTFNF39FSraXgz933mdApgkA9bxKzuAKmEPpfZBVQyP83vCg5QG6w8sCKXckfwNmmZwUTrRTi4Hg",
  "key28": "27teBgWCXwR7taF44F1gkvzZ9AedPKGNAcHd9dd5FibhcjDnSPzWFpr7vAn3ToC41FfiEpqPNdS7k1zUNE1uUoiL",
  "key29": "3X4GzsrHbbCX8N2ixCNmEskBEaX3t4CzKEDagiw8DLZS89pHmhU5iN3MWe2MKZfVdajsHNaFhzLFGEg7o8Rne5FK",
  "key30": "4mxr3TwZwRk6kKsQooH5ushcgUJmUExBaQDaVf9vx4v2NbQ6psjCVYNvipZmFiH4kK3rmoiRHVNKvuKtspKHpYDx",
  "key31": "3rFQtQxc6iy3Syfsm7DrSxuSkaq9DS3yNyKtuk1CQWBPbUFCWaWfAPJMmwVCmwNg5NLzDCw15qbHyKtZ3y2gd2Vv",
  "key32": "5EeyoikdHcRDPUaMjfrYNsJCKvEd8RLMmcqNmQosDvdX1LGar5VhgupRsL4ejYhkhBhnqe215kmNDEjyQ6gKHmQr",
  "key33": "rQaLEMdML3LjxMxehQB3YTSjYSgEAb84A7XJnWKVjqaxJTcyJ3C936PzvvX8niocPTx5KG9UBPS8obotbwvrcF3",
  "key34": "5fZ3pxCAcvUYAny47vPYFG7XFmK8k85kp6UFrAA5X5PKFDJiSbnNkJAwjd4ZiaWUgveJuBKEK9A7PpJCawnL7xbC",
  "key35": "46WAsAJsKe2HbWVrEtX7FU89qHE7F2UGkLqhu1LMg5Cq18Aq4mRS4NzoPPtqiqeuU9mDrDwTy9Rc98zvjgDhNdZG",
  "key36": "3a56mEynXkRc1a3Ge6jPhBRq2qCcY1orumdDRRgJTbniyuGBtutrq12YSyVH8JSefyKJAMky8Knn2ft3o5XSGULX",
  "key37": "3TBfMz8QEzAFBbZ6AZtwv2HJtLbXxGKfzEBMxN4Tt7Qp9uWbqrv1BxuG3HptHQRU1pnFuC84rkfYQC4yxWzAgxhM",
  "key38": "54xLQcnFMqSZoDyMMrRtyKuvDQ4Rhg2hYVaYyvMd8KwdDCnG1FTDxVVWFtmgLgzvpGUfWVSgqoN5qyPM18hXmB8n",
  "key39": "51zYd3q2qGTD5WLY84ziB3ZwJNvkfSHk1FvMe1YVGyFwci9qphbpfjbU4H5PQtWJg1PwFwwPP3s9eeoNmNuFMUsW",
  "key40": "2X9Qkxa1t3tj5fZ56YbdwKHFD7Kr8gHRMTKTNnuLAbqZp1vVmo9vqgtNF4jqdFDsRqLdwtuAkrhKzxd9SCc6ZzYx",
  "key41": "PkY4UEpyAtSrMECZXNXbdzZZ3Vr2HpiqmCosSfBeYdWxHk2sG3piBPtWHZxXPdkpohHK2qNQBYYqfmkMGhyUKGv",
  "key42": "2PGCDw8mwc3S1VdDYd6ARRWcscrJVvfLuvjtKCDCFQz5vATSHRLHCqgvwkGCqB27YXtDzJFpDAo2tf6MmR21fqP9",
  "key43": "2j1Ju8y4gsw5LVVrXNHi4rXmUEdW9659MAb6JpWYCoKmyghTiWvySTQba1BDjvduS2BPqCLbuk3TYRNPdwXdj4fA",
  "key44": "EMJFe7Ztv6vrtQHW9DNjdDHsWzg8eq6F6pCeHueZGEtuRy52zj6WhFu1YR9EaVWzazLpcHe4uMECyf7qr5dMfMX",
  "key45": "4x3xtH1ZMdvNzY1YD2SYwKo61brbZfCJnfgQesGbUD69M2tgeNZJAdHJ1TpZuv4xQXAye3rqbJ9PjX2jRCwLo9pD",
  "key46": "58dVatssZ5Uur6HkUBZh1Zr8nFQAc6tbqbkTuujP49p61b9jjEmghTJD96SSmaJUDB23cKbAaDYX4Q8C5H9eT7SL"
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
