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
    "2LkpjLodkuWdUpAbcCjSTYap3oj8c1Zobubr8ioVS6VNbLPdoNvMoT1RvCQaSm8p37Q9ZiNSP5rAJAXwZxZeFotx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJdtsQryjTyJPS7cqf7JEtnK7p11vzzHbmQnCfUmbdfgeuTh9Kjx2FvP8mBQAYzUyM9Gxbw8GrLbYaZsDm8MjgY",
  "key1": "5jGmgf26DAQWbX2ZWWRQrRU3mrA5anrgtzUWZEVjXngwHuwQNxx9jA7mK92BX4MpwUCfYwjKaHCeKQdHQxKwXEP1",
  "key2": "5XY4SRJev6i28H8Awgoh8n3yNGarAb6FNFGs1GtoxDyawef5X7aNJQP28hXKHLmJHHXWcZnQx1US5xUEWKxffbFc",
  "key3": "4jhRthwtT8Y7so5eyWdym8t6LSrtuEEYkvq7XuqNQALySPuFQvT2gQg3ozEpywTL9wRTYzz4pBYEtLHcq2maeRFr",
  "key4": "4iMi3BsbjZKYVBTfbxcx3j6cEVG1Md2kk4qYq8KLwqvGbuuvGRiwBRan7dEZHJm5t1fcqJ5XZtercofaft66WPbF",
  "key5": "mSdyWG7kyqwNo5eTotrTpuSrMaUz6qhKURjrju2rRELaewKRkf413cAbhqFh1Nrfvs4i1N83uWXpdYAWX1c8xMf",
  "key6": "RBy2H3bkubZtg6Fys9MmUZkKuPfE1wSk3tsYX5EHEMFPaSYTEveFxWcteSoH3AQ3oCGBqQGPzKBq3sB9JHPd4G5",
  "key7": "4EC1Jnq52Ej4VDepDnSDNo5fs7eo2PRdn9YZqJQ8EjDmu7NvmXHS63FRJEpXxxPMvHDGhzLjUMeU5aXp3cLQitep",
  "key8": "34ihPzaLnsW5KT9s3Su7nDCbznTZLoJoDwELsikwqiBUJj5fSh4ViEoB3xyAQi47piRCSWwABPGAeWGjYPau85Wp",
  "key9": "3W9cN6tYiag4medL7oAPFBhNc1PQV8ESRjqhisAWd1gcfzxZ2u3j6GvtZWr9VjNKF33Vq5ny4NnJjVciEWnZL6M1",
  "key10": "3BswPzWFmUC6YYf7k7Trj6FXpZr5MDJGbCPX2SY1L1efZXTaAWUg32hStNAWx5cDVoYgnVZVgrHZztLrV1r5ibDX",
  "key11": "4dbmG1HQuqhs8xdZGhSQqi7BngcXwUZcjMdi37Rs3KvwWgHYxYjE5GM7fJGsfoc8MLGs5U9VPQ8zDUtYaFZZpFSm",
  "key12": "3WcH77ZKhwXM7PEJX2BL9tmttVQvUBkxRRYAuLVyCPFZNCbdecQnCXS72qY9G5yyHYYV9PrnAoxmGn1pPC6QSWh9",
  "key13": "39iRChZzGSsbpQxCanyWCFkdPxKLxhbWJYsvS9XyvzGTgKjNg9RjJP4utfHVsJ4Yk1x61dStng6ycaiG1pkQ2iB8",
  "key14": "24358FQzEmjxKToJZ1nEj27ysqjop74wK6j4wXataT8Q2a5mH5qirkkXZU2wbREMvGmfzioGxZfvfmiB9SZ4mpQc",
  "key15": "3Dv1QuWQm6MRQXL7xYobQ6KiKyhJe3DaLhFfhVRgiBGCahUqH8CVgbovo9PYTvDkEeL5t888LLGebumEJo28w224",
  "key16": "3tZoqA4EYEFX96MPZTdudUaDXjy7LGumA2iVq92fWE3WEGJmC4FNKiMuZUg4SfkcJH4mAjnQkTKQjUwPKrot2jET",
  "key17": "2cAuLfrEeMJ3o8LEk2MmN1rJAJDLhzQai6NRRFjWLW6LTERwCFw6AEUDZfKZ5NqQVR8NwFcQLCiETusJjJWcAQ79",
  "key18": "65Yaha1DwMGWQ5ThhTus6xyYRDfXEjCuDy3RXCv7v3m3jQK7KK7zSqT7Cw6DCw5qKBmx14ivymy9PSLnvchpxUfo",
  "key19": "hJrgbC3X2iXBvfSrp7VUobMs9eib6Fn9bLNJrB89L2hxXCrpw2unKkC4RsQ7MP9TW5zi3Dkwyag4LCs54RURJP6",
  "key20": "xvjtj1mT4zqTGMKCosB5VDkGkuL1xy7rGtoSjmWpJBKJLAMXnHHFnswbHPQXbUJv62GwSVD7FgzpvoTTHgWgf8m",
  "key21": "65NmWSEWJWoPRTeiJpqvfHoLQKAG3eJUmSQk7tYswKJuZfhp8Fu8vs1oCchFn6cj2K7NEHh1woy8QD2x56J3pi6X",
  "key22": "21BrJqkNRaPVEf1hg8fBCNaJX3z98CEiUsv7NmY3h5uykzcs8vVfFbP6ZdYirPER4y6fZzLEpynMa3CBa8chzjWr",
  "key23": "4jeeiK9mLkMznKe2zgKM1CUbbioiCprRCu2SJHMCQ4orceaQQCiF4BUs8nRW8QYJVRYE5XH2oNaV5U87P95DvshC",
  "key24": "2yWbLGNArsDNzaHeYGAb7QpV85i7sV3RFwGUC7itDJCHffGmFxbEmPQmaFJeANC5avx8dkv9QvMhXATnA9utSBrm"
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
