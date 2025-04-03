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
    "1nWwt8sgC5Sd9kizipBP4LDBoitU9iCcAEWWRxSsVWRnypR4mZYMvRRWWDogG5RznexXxgs4LRD8ZV6sN2t7hEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrRZcTFjF7czGC4xahbvMxzwTd6wodkzooFB8958moTLx5gc2Kv3S8iUKwZxuSw238LxYVXH273CvxCVjtPXWty",
  "key1": "3L5x26GpCfHNs8WCCrRLepdyfiEZHwugYvhmoSBA8dJi4rX7voii8FC3YTW27NLd75QYQWUxNjbPmkZkZesKTrZ3",
  "key2": "2ThcwZuPFoYeLdBzBAx5iRdAjZYEbhQPRGy16YAynaLbyw1g1XkMLpae9YSQ9xakHNpDKP6XxLYVSKrqG5uBhgm8",
  "key3": "ucnUPPrXs4cz4kmAcMtwb263TibXZbpxAibmeQP99hwT1okAjEpVgNDb1tSKoDjnMj57kLfSg85Eh2boJCvmWJ1",
  "key4": "5bVfcxnpBSZq73Jr98r2hFsXSRRf4QijaSZb64BpUhEbVmDsd1qr6kVpevHBxTxHxucrrQyJ2oQKpGqvB6GbaxMy",
  "key5": "3K986JEYMYh4je3RHZvkn3L4tPtwM5quHQrkjJbKGo52qm1RecX8bsMfjjKo32hhghLpjt8rbvYzrg9pcWzojnay",
  "key6": "67pqc7wveftXewTrPKsGJGBc73dev8H8EYn8BHLNGa6UDKh1VLcrCGKgJ5qpm9sZTSUpWW4SUdxZYLKwE4dWop7H",
  "key7": "2GCCicLabYHQ5FeQzqfwdm4en12Pj9UEMwHNY2dU3m8SvkGHSPwTZzr9ogw1dcgziinwTRpo2RjYM6zMbhReZ21v",
  "key8": "5Ue6E8GPQxeeXKT1SVosxu2dy68RpxNjNCvTgMxzKVKcDc5gksifgfykmZKPGisd4UWUGsUydaABaLndq34eWVbx",
  "key9": "2Z64WV3u5Ufw3KF93qm8CRbmzFFYKNsFksuKewZ3Au1mJDhhbXoKQW87TXLvvyQYCrJ3VknRN8kkXqJpRVLwLtnJ",
  "key10": "4Yvh3EcZr8Uy99YRZ6o5EPA9MevP1qa3JvBpzvGrhkK895giXof45Vkq8mJsGXfWtqkeiUbFQDDrLSLj2Y35Z9Qf",
  "key11": "4D8CGbF6xVR6HBQhFzyULqDhTCxEhBhvGExJXT1oWGPdCRFjUbJE8SrqnJCmzPizb29PCXwCWGMK5QZCnXZ7Kz62",
  "key12": "3f7CVW81BR2Ji28AaUwxK1kGYNLKxT3quQ581fbY7DdY1o5TaWVhbTXHF4nMQkbC3zs76JaAU14v3VDwStb6wFu3",
  "key13": "5q1zyVPjmYC4YbD4DU4wz7y17Vq54wqsxf9E2X76wQzexNgtQinWnE6V6wsXbSxgPsavpzxcqUsZHM9qZNr8efTf",
  "key14": "5BYxnmcmRhyNpjZTEwnEkdtmJeRCoirFCuXYXZVcRnSt2i2kNHMSyPRFFHGpM1rJatwuunThHQqPYSHh4hon7xK6",
  "key15": "47USdXrydqNzQ24NoJL9Mf8CqgohTUhu23r1ZrCTqwVdjXU5t4W6bk3SdxSJzVk4tZmJk4Mf8zQc15svptJ9nS1F",
  "key16": "5S2qE8ZSd2ezVBKkFHCnmNBwzeJrDaQC72ten7PvAdTEjyxKNS96p7GPBoCXJsGhfmo7VF2r62irHuJG99jMdGas",
  "key17": "qpiUw4Wro466zH38rXWqQCCBibq2hvnoKdabDN1StiVG87tPdgEJ559rASgrhhnc5peA6S9yMmnS8d2h9s1DiBj",
  "key18": "4SEW5sw1TCx2ghYKWnJN5crUn9fN5Q1FKQVfbPMDjKcHwfJsVJaDLo9M2Jw8b28zYKWS5ySCyr9FWgJAJwJJsg92",
  "key19": "5gFJUpzcu1F3qjXkMLgQzWGCfVsNkz5hj9erjmsUZ53dzaxqiwa8KZGKZcB27PRWCCfVaKTh2gw7etRUgedtDwBA",
  "key20": "xuqZhNMEWg28sMEor9TCRX51xEPAsHcsLbAh3QncwS1RCHvvJZ3RH7F5Gbb6AiCXmhNbAsKRQFmQWW927GyLF91",
  "key21": "3utsF8yvh4NLaaKadDDqZL6frpnWNdfGKigtsu4cn5xJFLsGtMKiqAgFb5aCV8UQgeXvgYmjkhCD6a6xb7op97ar",
  "key22": "5z5wLX5s1cy32Z6zG9wGUrRn1ofD4bN4KoTRVu5DJ9QvtUEEyDiwyX4u9RTZUWY19q4Auqp9qSJ8oSiwqK9RcGMz",
  "key23": "3zHxB4iLT3rw5UyHuVgEofqKs31TPEo7DpXmHFnYMZViDNENHmtr8hgHKDQAoy1AZ8q8haADt3WtxK13pFEmqY4v",
  "key24": "4szAi26hasP4eDMhGEprKiBxWBJa8URH3K3VH1HXLKCJJ97pDT75LRR2Mw1xM9LYwraJsXB63BKc5rd8UYDGzRwM",
  "key25": "42CeGhpZmAHccwrngitFsxdAXczqx9frZTmXTtSfquZdu8k9zf4HhtGDhctPy2nBGVtN1znMKW23E3NVRBLaPHo3",
  "key26": "3rYAH9sYtQmcMvoRhEjGqhci1AfzhSZ464UbCifesqoakbvxLDGYH6LEXLrTHPMJV4W5aHbDmvFL1CFKciMk5fGW",
  "key27": "hQNiBvddD66UMqotuqGgaguMpWEz1i8zZiVgFRLk2RAqo3YpyAtWrrKkqsgpc1pYucPmkGDiTg895wg9amkPGJW",
  "key28": "2fEs8RtmSQYdxuwN83Q3VgksbeR46jcJtuavmpcbPfS9QNuxVE9c4YwXqAU9vqYHBhDVrEHk9xE9HJoRgGXmAxN1",
  "key29": "2t6uiZhnZf1VS2Hciv1aeLq6YvEJcFsXPWigD4vNQM9Ep7moJad3xWcBa6YbU5ofPDwGduQxwdfxNbxkzCLmzZo",
  "key30": "3E76RropGkprHdYNHnbmPphPSgLba7vwem5tUiN5VQMwD9SzRL9PhtEHst85TrJSi4WFRgcGSRs3H4soCpGAmnBf",
  "key31": "5P9DfJaLErNZA7uTfcgYiKaF2i4JBjkYbTBD1xBU2RDFqjK2JjY2nya63nXutdXaB8DBT4S2dV12yccfkf5Nn6p4",
  "key32": "3TBtJn1NHmNzcdsPQrGCoQUgfYFENssXcm3zRrUuniRGjiTYPrzZg2VKFXVFDKEkuGLtBZTU7DhhnYyySVUCFTZM"
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
