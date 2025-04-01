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
    "3UstwTuVKNr8ADoRkiKCVf4RTAih8BpLoFLZX98H7HTh9z2aesVmzMQTEKkALbBNFwVSqbQSLFv2wfGifwKNg7Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1uZm3htFfz8txjraBm1qcPbbi5A4R1gYGWWo6GidB1hnyN99kPjp9B9bCCFDTERQEzQY7DAF9oiVBNbfXuR13U",
  "key1": "5QMdN6Z16pkg3gmudfLPjDJMvSiymurjNVfp2y4MqdYdFWSti1Sp6qfHMjjnDEBXY5ZochPyjFjgkyLtt6XYrWQg",
  "key2": "2CG2sw8dmcoPsq1whS2mm37QScgycKdyNQ1aDzJJoQ8MHUUiGtAMDHaTn895urznZCMXonntiLxDQcKpLUMwvLkx",
  "key3": "485x5bDyRBvYQJap9t1RVfKGB45dbqhJGMv8BtEf1As4HbfctTAjN99WpDM3QaiCyYWBgVufXmUDE7PHkvc9XFbG",
  "key4": "2UFEkJVUx5NiNq4TcDjyJ6jNgMxysj6vjBh4bRKPRd7bz8JPmd1Vgxs87JDPYFr15LCm6QcWyRkNJ2J77bW1NkcV",
  "key5": "2RD4TEGSt1JkcZqK4QQANoPXK5pPoaecQqqjNS7V9gTR2AvreQ2hccmfFaXCFM8FxucqMihcerneEdMbYJTt9sis",
  "key6": "8TMEWkC1Y8kpmMN2axE449MemZdPtoXdWWABNjkJT2SVki6LikhbgwX4J5YNTpQKz1bGozLYeKHxf3eUQdGjJ8U",
  "key7": "5MQDVyHR1TtPdZbiuFaEzmwK2X6HQ8G8MtwQGNUVNfViNYrg2teDPDBPPkd4ja6N35qgervxieJYXdcwc9xsJfQE",
  "key8": "3iXU1LcCUrNjsRM4b71of6HLvjBDtGqUS3oGBbnUhZKCunDMKj4VqQKq7VspCbzW7QqH9pYV3n9BgDXoLFkZGmur",
  "key9": "5AMKC7a1WBPkkc3opZ12F7yRWzBbQ2t2WrM6dVdr8tCDrRD1jVZvKvFiAtPmbkXYyNijsHVKwYH4s6EndGPaJqZz",
  "key10": "2BbR5DGGs6ftDhH3hmVLgXL4bAXJvBkPoRpCurSYye1QVsTfBMHpdzoMwNFqkRUy37aSW3TBZHqjWpe1FnMdqoJe",
  "key11": "5SnCURcM1CsAKFUggQSUiCWeF3D8tMNAQcypMGZdf5ciuT9ZQY1WshBN2ZemypYMz6DL3V7cxKjgGRtSDqsNgYa9",
  "key12": "obsUhMcpgpYoGEDb1BC27Xong6R3vpFLYLdkvJggSCbnZNdmbh4PspfNsgbCBuWmTKuFKRiqceLRkHBuvTSP33i",
  "key13": "3hShnBHNbePt614HQduryW837um6dTr1qumi7bcywLPkc6ux37EzM72meHdGQUEfAyq25rQtvd6hr6qcQY7TAnhE",
  "key14": "XM52kaftWJqhGMsULWcRVQr81F2pMpU5Uxk98P1LVmfQkenSrzfqXXPhdZzbhV8AsLBoSpNZymJGeAjRJ2qtZ8z",
  "key15": "E51Y9SE7jnyvodmZ2jzWVmPUcFiXdwMAor63MnguoPEmsrPy1LgrFY1WF1SGCKr7JD59YXBLgGNowRd8dNQRT7V",
  "key16": "2oBi6RMXGZBBDRCAv1qnua4fZmTAbrFKv66ts6fHrX2tpJs64VDCETCjuUqwU797FRTBNGPui6R23BrhPUg2ooF9",
  "key17": "2gkDbUBTbPjv9mNKxdzDQ3zp36w7USuSg8PBuetGHbeWLUkoDjCb9AeBeBg9jYmTyrR3LBue54LGq1fRoz4NHGFD",
  "key18": "4Xi1qHaefWq2XHqfP1kPtmWs2KkyGoMg69xBqhMPSpk4Kmk3vQHF246EMGRsqU2oir5yZmtdJqmRUcm3qViPrbTo",
  "key19": "4eAmqztmamgb6566ViZTZzLSJjmXHJjq8Z3MPY4GXvPpxLUCDR5bxFhexBbKv4ewPtdv6Fyp1Max7gkP528B9VSD",
  "key20": "GFLZ5mQHeuffttBhwH48qKKDBCSY2e3cBNVe6ZWcCy6NTpn19HmbDj6oPfAStv47w7pyLNg3NuM3fNMYKw4ShD2",
  "key21": "25iMcZ4Fsog21zBcCaF9UxhWohrsecKNshAcMLajGYC3YU5MsdJ3mVEyZPSMbPNmGkKL2aCxyUPgJmbR8wsQDPC9",
  "key22": "44HjEuW6K1TUU4VFSLkLUzSasBdxWHxsN73NvS6CtfrtB59ddbro8Swf8sKmzu7uSAooBva8TD4ANcqHEkgFFfmR",
  "key23": "zwoGedJJrYeM6Z47EXM6QbQuzj3yHuozWPcGnCPDvYeatUjCjC2WYKJQFydUjb88MzfDzTMUZZ8B3HYvubFuqzx",
  "key24": "2GvsAnRdEwDs8MW5jkcTHmf7fkaauHbxJD2mbMkY9ay3uJJWyDKmeCrMGX53mcKH7rmYSMhVy3E7sr5LiiwQ3m4s",
  "key25": "5xJrDJPTAzUdzQYMqMkWTN7F1hU4kFurzrQxSdrvcDVnKrSu7rhvVEUqXNRMLCg1hdZ9YZZn4fMC1vPwhqrBupeo",
  "key26": "h7Dksnvt8YtSDJFQsJiryMFjnEspKJCVqEn7jg9xnRM8ws3XkxGuGnnAWvNN6nPkS3j1ZQXscE5Ppox7fo7RskH",
  "key27": "25sjpw4xDxNgz7TiByTrfqohqEvPz9uf8nHANX1B4BZTfqXtMJc25ZEQLrr14vP4KmZXJ9DqcsZZgf3qo84DUkgP",
  "key28": "KKKwgq6BkPAu8Up2GSqfU45BGymWwNeRYNYm6ULX8vf9XPJUuPDvYzH3xP377HcWdEFWTLvDXNjhmSsAPRdbotw",
  "key29": "2YrF8chD6gUtKGPyMyNmNf41Wrsh3YjxS3pJdCSW3LpM1xKyRc5PUG9x3goJkGfRXWQXZBJvSPb88CtGg6AmaKQa",
  "key30": "5sAnw4wxQePeHPoXGNfvxXYoPKe78BYymfQNGcBQUL6UiJgHJbzm5y9CZHnh6mgvaqyvazUeWBp5guXKneBy4zYp",
  "key31": "8ow2uKBL8g4BJjt49aXamC4A8kYRdeW1qzSyNZnR9NdcbW6sWUymXX1BhPrTvBPMVWmgaYFjYaeKfRpgdtbQJhL",
  "key32": "ijYVSVFQ7FkD1vSskAh2iJDznJjBoUbcVRYJN6UjN5YyYgr2WeowGqFknUrMzFdsQUooCtwFfCS2wE1Xi5GUJFi",
  "key33": "5746iyaMvdSH7UaTSb221dEkwZyep7pXDxwsQUSUrJbps9uUWTteVcmeJUq6j5mLtfJdNVsBFZ5Ec3Fayyq1nYBw",
  "key34": "hpZNP5EXtWQQ3dgqYi5PepLwpVZpRBmitQZvq2AR1mZBuSdSgkYe173bVUe1X3WyVgMLZ61qCcVLpBBqwXipZia",
  "key35": "3SpoLzY6i5FxwdbKJAJN6HLNaf4cAZFu1yVDSajMgHQxBB6SDBgq7ZERWCeLqhgpRcjLUiH2woxVG6J9aZBMd2XE",
  "key36": "4sKukLtkDwd34kHYbCWSe3n4apht1AqddKhwCz7qUnekdBLThWrftiGtzpw6dgjauWzEt1MotYmuUSPzAXq5YAF2",
  "key37": "4ZbQrRB9qzcEW87JmY3fo4CDZmwjZcnY9sZhaGda5kYEHwF6RJiqcHSGC5N4E2W8oUvde39FokXJWq9aaDea7y2",
  "key38": "kUVy16upNFFYa3eStbwveifNhsqwfcvCbkd8vXbNDTW7FP5ThX7PCPX7i7jDgB9vef25Xi5cZF6DqCaciWwn63F"
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
