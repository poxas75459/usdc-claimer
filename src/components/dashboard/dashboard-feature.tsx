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
    "3QZ4tE7hxJh7KVRBvQBFK61dgM5teqHbf9WRTgVhHztUXUjHwhQjbUhRYPWsYkfETPtu7pWfivXJiuLPhPMR8bYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZcp1Y8rxZCt5uRPepMtDGAK2dE6a2WuFQpapjgifjL39QVzw8QNwLHu8rkSNdSDvVngKm4x3LhCYLqRWJKDFmP",
  "key1": "3HiGb1P1RKBbacUKAZux1dhEBC64fnjXJMGxUb9YbLXwM94oTLXgxHFS7yUSK3tcvhkgtK6LFQT8EouhaFTtPgYE",
  "key2": "5nGu8LQNpN1TcbnohxaEJSeHnAqGz9eAdEaBzokGyir7QZvkHmVHhSB43MKFhAHJyU1vSqMnveehv61LkKWWb6nb",
  "key3": "3ktYwvAnQUo2wvWTxtddVnb2RZ6vcjaAtimEjFdaKmautsd1jFtbZoh3j8VWt4vqGjFcQkbqrTy3c9m3guJ4mdKL",
  "key4": "KBe1ary38Z51k2ATiPJ75s44MBWAHAjh6GM3jk6iEXhX1QtoiUa5q1pAvVFqVoJsoEUDJJe5FNAL9rjY7kjHBNv",
  "key5": "4h9Y3uFG1sgMSCauF5W8DqRUHi9f1cx4xetjDnSws1YDjAgBi7PtgzKm9Au7qGmTBFtcsKEexVkfhXrUzULVYar8",
  "key6": "5jf9EYtK41joeJy3G9AR4CZ4vLegjpMhkrhJ4VSbTnAkBM78s6bfMf9bjqmiMM28JmnFH8CFk7Ku1VxRxfYM71ny",
  "key7": "67imxR3hzySQfnX9kubzqCvr4MTqEybgF1hLtaqeXDxdspquMakU4dLNupHmw8wJsnjih75NEQrFAF7fdVF4jnS",
  "key8": "2PURXwtCRoUMwq4k3myXaTzWsj4xZm5Njv17pW5mXAf3f3CdG7N3BDNcVXBhZGM7BLTKPoYAm8zfEHUcTUTjuLim",
  "key9": "5F8mPVLLVdFPsdCfkHjE6UvW5VKtL46CGDt8x9LFLMiupWtgkuoqbWj7V4uU6KMRikz9mxzP6TV94CBDGrcUwNXF",
  "key10": "5sosreDAX11QTWVFDBcdjPDhzNDCgctENEKQRr8itiU5F3iorsuhJqwWhnApAR4z6VVMH2XER3GDrNKwRfnPd6dB",
  "key11": "5tUQJfjzBx526L9Byd1TUEihNTajU5FXbDfTjYBAQNYhSTKPCfGTeM2YgGSC3QTHW6fgysZXeYCmGmwKMLtyTbsK",
  "key12": "5T77bzWcLhbiZEchxnPVAzGx5u7oRFGAtHoqzHp7CuRU783hM3FLYhdjUNHECvUfgQnVUqozvEKVBiWFvTx9knBx",
  "key13": "4rM6gTmwfZbLUqfosmPw42tQabshjeE25aJZYYoGN4E4aw55s9AjFUd7VCdUymcs7aCmLdUvUK6v5cJu6eVPt8S6",
  "key14": "3rm5AZRys9s3SMH2swyBSKW8qozgH38xhQm6mWFanYehPiqx5ocqJU4ZTN149Eb8xPUVZCT2cxn5eWbQPTWqkKVW",
  "key15": "5esCpkaA8Mx8pHzWFCVAW87jTSRmvKXJaYUBd6gopDH5R9Qs5v4qXfFguPJydGBmvHhnr8e8ZFQKDfMrxFhG7J4b",
  "key16": "43uzSV68PWXcPHrAopdt3asi9kh7WAdjXgazWepCWYoqe1Pqeq5jrzm8fTA2MrbTtpXrTcEuuhszagZVJBSn1CYp",
  "key17": "4rNipfwo7nYWMCo2riVKjNHaiWAchsqvtdmrpY5vh5JBFHETDM4xQmH5gtEJ3XTTHZskWNrDEr46Lm3NCJcDWgsU",
  "key18": "3UCT74W9KLWHSttyHtby8Pw164s2PHe6K8EKWxJFKa8j6diBY5S3mq2CMRj2RYye95bGbqD1HKtN2vYKZHf7eTQC",
  "key19": "5nozhMBwh4qqzUTAcByUb6Uh2NqGBm9s4VEcMyxtBS6xXqS4LM2CPNPhW7HgfapBAqiQjkrh8ePE1qjTA9oBNRWT",
  "key20": "51Fhw7jG6bpJsyZkejHVZPfL6viZk4hoEPP67SEp5P5ACehM3y1HPv15GhvC9UqBYxj66s1xZkfB326fvEMZdNjY",
  "key21": "4y1XFcHmYqmPYGe3JhDEncebS4vr8uypMmUwLP1hfL6hKTjauXrXknR5Y7kUYV9ZYdjTxmVH9DtLF8dufNeWZKac",
  "key22": "4wmVaP6HgZJPoWBQQZsFUE3wSxpUNCbpfDMMWMa23waXJ5JiF4kpD5zFNHXMw4M3gG7ypF6Sn77kjkTYar5iWSbk",
  "key23": "WVxUxsxLSGfFgC7GvQJN9Ddxb2ZtdxCP99QLtRGGr8hKp2gr52Ujh5bXna4C2bvvvLEsNSSnHk87L9tX8zhaUu9",
  "key24": "56e6o6bthEQAPLu1Nyjsm79ZBtSSoRQi4NphYLpbKNrZiKWDeHNhCWdYUR9mmp2PfQY8eoSYwpuw66z8Fj7eYqL2",
  "key25": "3QpAt3KJVgaaFVzLZT245QH6Tya1rY3MZD7zCrqe1XxQzmqYj7JFF8zNEaWrWRPshDST6qS6Begg7Eiw6MWHyRct",
  "key26": "4XqAv6shH88brGHCCzAL1ZqK6XEzZVNPsrR2FsQaNYUJ3G3hzY7w7gfREpFPtWsq33AKCeTsjiF3sX66Yb1snded",
  "key27": "3ecnB6rFqYvhgyyWUUHZTUxL8op79ppVigVMjWJ2e4A4KMotyrT7kQtqrmMbUqQeSFu8ofXQ95BkzUfvvJA6ZHn3",
  "key28": "55eCvB2tQ6K5jyDEeA4scNgRyJKqSj2sq3rb2qQwbGWU9hMJRTYCmRvxaJ5MZELzfH6wfYVuok2G9xtfmrYFU5jq"
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
