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
    "35w22jEAPzceN2HKENDrgxUakHfYPx95zqHRPAcgwqVdxxgghsoVbTxzEn6jdbZZBfSRNwrWTzaD245KYDHbKbyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikPieDx7EZoDtmvQUw4cmL5MJKwvAM7bb1C1AzbDvCwfvtTVmCT8j9zSzMENmJUppysiKcWaX5unWMN6y4WXF53",
  "key1": "24PhhdPQ9Y94HG7CVBjmSFQDzH9UAp4ZoEGvHzQ8nfgZuCqoWGMabVtUekBSo8ipKoK9woMko9JycAiqkK8aMbre",
  "key2": "3sFNxNnr4rfM82qDFEVwFh5WMhRw2HrDfcSQBujQjpkt5pfw6zrQ6yskqZ1tPSkP4SWwqGZ6DAwySztBC7w5dQgg",
  "key3": "4Y48Ls7GnBn15q75eZ5MvLkRS5Gge8QPvTSYE6wx2JcWotqQ2EZk8bFkRKJ2W2dKzXu2dVdJ4sYTgw9Exq42ihsq",
  "key4": "5n5h1HybrAHB2QNuGiwyrtAPFtVMbfhTiDdDtYyEVmaUumfQ7sd9nasBdXpkomDdXPGHjbB2MJwnTyHD4EyJjeDV",
  "key5": "5uc39kpFWpLvxdyR4RNycKdPtzefgPk8Tk3a5ipNR5yXUCUEKLTror9dQjW7gL6iv9RTUz7gW39ErDQagNSPzmMR",
  "key6": "3XZ425qp1Aoh9yQuXcFSUcMbonbQahid6NbNybz2THn4XnxPUxH8XDEFAKEBY2GPi6hZ4LUfo5LDHJWFiCBHjpbd",
  "key7": "5eb8TZeWEdNqfpZpfH6YRXZPKwaKpKU9YybAJMAP4122xwf1GX4RJsJKX3bEwLw6p9ZdJfTnLSSdCKp8WAh9sHWg",
  "key8": "5Nw6TUjYDkHK3nNXuUdMpVKuv8RYr1oVBNRzTTniMFmjfMkb21HBeYQDnJTaBjXJxXx4mzUWpRD6T5rt4xfFCiMi",
  "key9": "5EP2AUTz66KWw2fLtSw9qKiQDsGeHPS3LEempFQaGSfZrmTAw9UvYoLPq5Q7kipBDtgDC9W9MTp3AGorwidyZLUr",
  "key10": "4Wyh4EaQLEqXbpwudPhqRpGxaHRUYKaNx3ZytAFu1XQHS1Yfmx8XtL3hKBnpFw6zLtu2c6B2twiK6QAii4Nuud9R",
  "key11": "yQS3hMPCHTWtwHt2FngBHQp65htgtP8ZWFaaQUr1gPr2BxRcu1PU8wpKV9gtiG7ABKDcRkusBu1QWnskob32E9m",
  "key12": "5sWvPXSCsJwsH1UnqNFcqpADK15XvAUAdsUXUNzGNQLZncLvpz8HD4nYoaHEmcPVQuyhQQCxCiWHkgz48HHSkCg7",
  "key13": "4gwciwK4p38rxPQe5SkfVNZr75eLQxYgn4m9C8jC3WeGVxi8SF2bhKPnX61xyLY5eBQrHcHrWvfaCpVKYXxPo2Ch",
  "key14": "3WJHfjHAJcZdDKFFJ2YM9bUE9UivfGXrHJWeY6GDWEP7ikUAatojMDj5YACQ9MPUHtTsakn1oZ7USkyErdrxeGwP",
  "key15": "3QzZM3kPjx2MRm4fLDp4HAL7jpZS3x4Ds2zFVPEPBdMLNJoScAtSfXPqZWH38uwx6G9t9yMUzStP2vJoVATLBoBc",
  "key16": "NUtdjK8UrQqBbJMDLtiRePKWN9u3FhyqPhSEjbHELWBpXDFxnEMMsCXskGd8zrbmQ3GJXNvxtdksMTri7hZoU9h",
  "key17": "4TFFwDGKiQH7zJhZN2Y6ktHXraxgYxaZ7DXsZY2ehRfsQfME4ezzZpYUCxhS1dghdxTaCSTLfGQy7oAyBgjC4hrq",
  "key18": "5jia6yjhEMFSAFFsKcwCgA1qP6us7NeXfPFUrqbgkJ4iS11buHDdQ2SSzF4mWE5KLqLVmoHfFJDVxEMakirKyDdH",
  "key19": "fqyozzVZKCi4ptor8UAyWWLQ6GqQ8ytaKQdrbefUd9jopSh3y9vLWc3h69Znv9XQ9zCDa26uUTdp4GZ5WYUPv1c",
  "key20": "3D6tzt7rArEEtS5i8JdftRjMWCutGZGbtPpDXNPLg399QdgC9XmxfxNdfkPx4wc7L7B3gzRx8NcmnKDyfn4uCovB",
  "key21": "3RfMU98SmLLV5kuroJEJhZyibATWNJkL5XcJKf6wD1chXGsA4iQaazW2MACspEHygUiZNNn8NgDpHNfGxUshpixk",
  "key22": "2AXmUsXe5ACzDqGtDvZiXcZ2Wg95MFeQPdJ6tk6oRHhvoUHR5qCtKPfyWJ77p3rKLchXvx1g6YVWxcFM27RXV7iH",
  "key23": "3mwTpNgKzcGBHy2iXgHuMi3ksNF9yKZPzafAWhtkfsogJ1aRB6Twt72f37Uo8XnUpQzXDDgVwfvtVk1q4aiyNqMX",
  "key24": "4KgoU4ZqcggcqYLzTJjqa9dwZS9VbbDXFdfzWypbedwUyg6wHhdhpAoVaMA5ESFDs4BC5RohoPBSSwFeE3DY3AoM",
  "key25": "5NS97mTdA3BCvJqM5LTaWqfuiDBZGqk1NMEGLX828r5Rdkc2FR78LAKvRhYFEULb6HYhYRiQbEkQ866Hzi2CSnhZ",
  "key26": "3KNSWpGZH4NCcduuzfMRB5n8VAPFPM4JwxgN1P2znYTd1RzTyu1saziKJpGnZU2BgoUt6MvYsTZ88b3pqnFsaS9R",
  "key27": "2wGeqCD5eK1N6N8h117JctuKekELRJJGGpKDTpAoQ64MQhCB8pAB8fpqiZpVWN5k9MNPBPnvHPXnTRyg8yftyMdX",
  "key28": "27AV6cmzWBf8hNtRnwHJnqtmXR1wQwzBMFkZW6E77h6iCkdjuraaoB41gzpuKU1wJMWrpo2tV4Fmyfcv4oiDxirn",
  "key29": "66baaj2KP8KuUazbRyCLBi7uTajp94gmBR8SuCtpV2s6dgczCCo2xLBeyHy7iysH6D2fNbXS2ZruLefxTUt8Jyke",
  "key30": "3TgNeVL5pmuzS2KC3NSPt6DpvSicvPcxzaBPMmrpnkD3DuThddENLLCeY3qXLWbGfrNVKnHQAmNHDqPkm1qUfXHB",
  "key31": "4PEkfGbGmK6ENHk4FtiakG1RuBwiJcY1xB6bSFp4kBDR5CX4fRRzpXRFvQ9NhRGc2TAiYHk2hNuXfUiWieteBrXf",
  "key32": "2LcW3Rb5PHQ25h79XcCFHteph3hibydVuZhF45gLYPyG83NfrjS7TBrQSUkAgQbrWjdze9XQ25L3ju2zVW77UuiD",
  "key33": "5h9HZCidiPxHbDTJXNSbb7FoRTJfA9Tiq778z2ixAR8c85Uh2oigukaaiuMdixvsbW8zCgVrQpX4EBrzjjqjVwM9",
  "key34": "2LM11FA5bYuCheYBD1e7Hec5rMiEWeVvYvKUjRHc5oWcsBYCeSEJNLGw9CXRRDS81r1JmqrmjJ6iTbkfJdoxCwaX",
  "key35": "H9tBzhCQo1sPd5LMqZWb2dtHk7bv9L4L7Mo1G3LESm3yfymM7RWV18i1XUp7TEQKBjSbPFGyKpRkkftGVqwr2z1"
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
