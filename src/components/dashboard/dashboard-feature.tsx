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
    "3nCqJzUFUSsCxGC2CyrU89AM8EishrMHd9ktqxueZC5pHVbuqSjUoAKLNpmuQUfY4ei2GiiQzN9ntGu823fi9Jbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QhPVzowhBsf5neozo64aZyCZWjgtqGZ83cEuvdR6EwZy4chm9DMwKCS5gqwPBhh2W7yceLAMvv8sHEzkZ9Zxyz",
  "key1": "4g4m13acCFdQnxZJrskuuTmmn8PEu2n3MpuTQJs8PB4ENb4a2P3oJy9YPuyWHmmu2QhdQPebBN7wK41CGTEWbmMG",
  "key2": "3j43GMKm5KY6X3LkTDrbToqcYLU6rnVpMxeyiJRYnQv32ctnKgXcG4FjSFPCNjpf86i6snxdQvuM9gJQTr9rDhwF",
  "key3": "Boq9f7vushi8DPmvL5MHyBsDGJaP8bDCsMZEcrEuZ24SCxvbS4qkbb13D9ikqnDv4VJRPVAvBaMyyZvuaSKbfLd",
  "key4": "4bQ1cfffZojyLBKHDYeLqRpsjr6b8VaQXaW6YBQ4MDzrDYMh9f56bbJ24SuUTwcgtcPqix9iVJh6B42RswbPJgPJ",
  "key5": "2ixVLuGDRFRUCUCFEgF1qcbLwmsGBBX8Nokgd7512fauySP1ut6yKDBnb8u5mpHHNKUfdRrPuMGhaqBuBAP25dgr",
  "key6": "2svW2L19pa1BgLCf5wSU595fYvhtumgW7RirbdcBV9AcJPCJDzVN2o6TcsJ6WUniRXDuNBSzAaRLRVGzCqeMPTLF",
  "key7": "2mvPDNJFbYWUpJq59AHUNMwKMXgGaEXk5871oAEF3AZykE19b2aVoK9Y65bNeztnkEE85jSjDASo4qo6gwgJMLC2",
  "key8": "3NjEs9ZtsWtPnYmnPzaGayKw1pRV91YH74fGgAkhNZkpN1Kz8D7zpqAhq2pQu1VQLkXDm1oS45NmoysQguWu3FrQ",
  "key9": "4ZvA5RSQJa45D2nzcFYHGEFuMqQDpDxUFwB5yGV9oLVLy4pjaY7JQcAoXR8piqroFLnrmmb6oUvNZ2si3433gxT3",
  "key10": "3sKKsCbJiZ3a9o3grwwomCWa95gJUHdLSHaDbyhUq5nHuBAuy3LX5VHfhpVvLY8ByX3unSLkdZ6h2g3TMnVSzstW",
  "key11": "3Qe6GhbpcRfpZnWZzW1eaaeqb6VWtA9d4LaTgKajmQuH8VqMM59fNzWFu8TuRsNdPg3E9umKeDxsVqLd4e1LoZZh",
  "key12": "3ouGYVcwe73NNPCYYcGjK6CiCxBhF6wQGWZ7MbtysS4Ka7i8rEUnghzDF4Mkjw9mi59RzbT7ZYJeJkNTqLJAr9iP",
  "key13": "4WRcaY25VryB6AMfzXYFYrGfam6VXDcYwnSUjNBTGjh9TSKUPgpy32rubFfdTqpfurv3nsEGzYGVUe4vrM2yPyMs",
  "key14": "4oUwMgmfFLq8MRwi94xh36ywJQME7KXVMAeVoEzzKrXRph7gAtsP9Vo2juFqeGmQT4fXsvV8mgHwipWwg3XQG7kJ",
  "key15": "4TPGJZhPiHME9CVpw2G263cPsfjonocVahvgRLd3ZBpBPkVrVtzzrA3MU2fduswCSAesR9UCQX37AyWV1Wq4wbhM",
  "key16": "3o9uiYaG5KKeSpmHEqZGMSDv32oJoADFRCWmZyhNEi95nVUHFjBkeZpan67iiKrfNPbptdxhqWhskBrJB8PVwiwm",
  "key17": "2YtpJc1P4ajyvciDK2ax7gyT9NrdaTQ3nq439ztsLnFBji558uRGZuLXVuttyigFMb3FEy93d1yiJKNF5fa4tFfa",
  "key18": "2h34sv4wEy2oMJWZnxDCsT2TWten2EUq5ZEZZH6kmCaYGcDj8p3tnnSfPELgxRFC3QycckGUCCnVJEXBmp2Uj4n4",
  "key19": "4cZN7zYpnSJELVd9MSjEHht6KyDeBPWwiEHvAR3L8DtnJh9j8v8aT2kZ82YqknMzKkJdKpkmMSmhvRuUJc5eBikz",
  "key20": "4mZXTXqdSxFcwau5AysyU5CUTtBU3mJVYvVFvP56Gn7nTeBkTLnNKot7DmivV3Zjc9TXsgjS2KV7PDNVSi2QbVcP",
  "key21": "5Nq5jDxYFfhTWnZzDRG5ajVEyqjCZ89MBSQhrNoY3ragUHMYo9mba94NAYA2QcWMCvAEjAVT6XYZ5PC9omNewbua",
  "key22": "2hyaohF7NcfLY8ymsoX5oUANemczBdGRfJK6NGEMDGAmNTkQXzoZNhWdqKzqpabUhK5jEXHL7tqq7GEe75UEn9Xo",
  "key23": "2AxzTDeCDSK4cVwtdoPrDvieozJjavmcVUVt6dg9n9418fFLmwjgcRR5wLarewQxUDE5TnmAtCpTAZLSckBqFKwr",
  "key24": "4ALe9NYExuMZ3qMmbhyFAc2uMd4FWDnUNSEKB12dts4iTKR1BkcAypjWUQBNNHScbuzfeZmiSmtafG7RHhSwLcWk",
  "key25": "3pB9TmjZii9AKeC6a1s2ZVrGFbn3eCq8e7zKXaxHH2kfhXoVXhXMmV9Y1mLJsm6VzdVgbCGauSNnZgrTiwvZ6XU1",
  "key26": "6cGe39ZeX17B7QjkTPwf5xTvZYvy4M9mSKHYuukAWZzcvUFCe9RFsPsSTckrqyvEBwZUWi4czZVCJB5y6TfkbjS",
  "key27": "3zeEk8kUMRDFX8hYd3PS2i4Ah4xBXUfHCGePGCeLyu26aigAyJPnA7EczAUESvURBg86LwSBvH9SAHvZfKa9r8zo"
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
