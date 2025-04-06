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
    "64LmBweHA7EyvqUH6iZUrDH9bBHzhKxpRTxPHgCzkaiBG5KjCLyS5fApBq2L2p8jEASWeQVFQeNNb5rPDKtcqrxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKw5hcG3SAkZ3UobuzBZCVq8RX49gAJWjPADT9tFbxzgs6uqyNcb7CdnUNyeCL1ash9T5Bb5WRruKgKQCbbhrZd",
  "key1": "33sMVd6sL1JDmpY2VmT7ZfReizwUJ2rKWXX3NnoEefPQc798NmjWUaNTW6LqJNoCc75MgJ3kuyvGyn9U73ULSgko",
  "key2": "2Sdjf7ntE3Ug4s6kErtZNvobk2ZJZgjtxT96F7QHNqKy3cwT7uyjbfnGk1eujchRMypBXKhQT7meoe4w4Ng6LAub",
  "key3": "4MWfKbR28H4uvPXsEEgqhc98yUVNAjFG8MFhPyuFwBT8DL5bScMRdsHo6mBqvHx1zgiZwXX5twyjpm4xBj7SeSyS",
  "key4": "35DQ2w9rKAQ8Y6svpUhaWCEaGwD7YqChHJDuiUPmSgkbcAdToXosGjVucXrc9KMVmrg1qRneAkewa1pHXE3gnZde",
  "key5": "5LcW6s5kL3QVTDLVPfEh85skZuGYjsYMmHjkFv2bmKDQ38y6dC4UP861aKJaFyJQqELKY22KmmP8dquHRnq8UhNE",
  "key6": "3VmgDKEhZyyew5fafuzgczHKd5178NjweGCwr1QSpATezk2rPfTp4yER56pHMQhUnnaPnEZdkeCyeVvqfpTB41ET",
  "key7": "2o4MtT6VGh8zFPNjbNa5RCFJFtrtTzC1phEiVACShBaV72r9RpzMSc9dFat8bXu9SHQgztTFcZo7b1d2yxGhMdxG",
  "key8": "7Us24uey5MNNFPe8Mz9cT5Fy1edog7KHx9PBsEbdqoTjzc6jSFDMYNVbzY9S3VDw57V2HfLTq6qpZitWdkJv3mX",
  "key9": "5n2Ya5zBVqnbTv7H8nAF3kXp8cJ1JtjsrtxPugUsugsTNWUxysgjFP1TeA2tqdMHxsrGnZNJF3NjgArcsXuPFTXH",
  "key10": "2FfGn4oaanAEMKmj7PBkXDuW8wvBgNYM7GcLdvBUXreZ6jf3uf9uHb2Qt1sKy7626PRVyx4zgrZv51hrwtXvpAuB",
  "key11": "5xvTCohR8Ma7xYkycoNhpibx7gD73V7AszJUsmhAJovBdE2g4ykMK5jbYRaKbyDAMftRuqBGwqjwmkog2zYWZEnk",
  "key12": "5wUN9VCVGPqATheBVijuF11vZCkyxB1a4hUazFM7WxLem8H9DZF7QS58H8QgrTRNF7RfSqmCMPCQrP8grf7fBGbi",
  "key13": "4xtCz3M51pn336c42YWXfzM8LCwLvkqw9D7uGU5yZXju2dUJAYYPrg8N8tyt8JQJPzt7tSgagfs27JchYHZ4JppD",
  "key14": "5oPxxMjAQ6jgryMDZbAeLKk9VUgqZMmLbe7WGmmDqnvfgqaJYU36PTas1ch5YytkFQBHHTexbe5XmDZ2kcYt7DAR",
  "key15": "f4hN5N2rqhF8YkBwLDMUbJXrC2cVJbfxtGbdn3xtr9n9sp5ZBtVW5ZYcioqHmvKJ1L6Qz7Trj5LGYevSdjQLDJe",
  "key16": "mhMVLHMjFtFxb83qAuLXzzatmEWL5sMCZ1G8eFyR4xmiLGH7m7k3BmiLHLPegdcUTAXFbtvWicbw9KWekyLJmjK",
  "key17": "4KtH2o7onCQxzrSvQrXGZdyje3EPrDppHx5zXwEdRqdSJxfNmCf7umfFA9q4nbW974NV3rpsHb6xSpqHsC8huMdK",
  "key18": "3bP9SJLWMbEFcuo6b5vjtDj6utAVvhbZrHTCtXHtxu7yGhAzuRb5RLRwYAeZYJndaZV3ZdswuAD4FWwWmuXJVwMJ",
  "key19": "2LWneu1hKLedUYvMNz6LtbXqBanpxicFcLjJ7qQVdSbh34RsSts8femhScUaW9tVdH8V6TTHzEc9PCe2JwmGCkpn",
  "key20": "2Q1GeL3ifkQECrx4epCN6J1s3DjBfjmsrdFPuMGR18D4576WxuXNomszgQcmiFp2hK3jbKBZ28jbuzABvFLjKkdH",
  "key21": "LySkewxR4x92Xx1scgJ9MQR4wtme6xHL1APASWQWnAUiMKzih37FXD1AUqZHrxhg72wzbLinfyKyNKy7eGTQZRD",
  "key22": "Nv7TFUvdaKUoeZQopabYLBbCA4BexK16oD8XSVYB7vhth7Vz4cEEo1H6KnMdATVC8RWPsbf7cYwbDcLdvvgct8L",
  "key23": "56cgtGpx5BqhYRNdiizvAjXBp6xiatmp7iyBx2crcCCPD7HpoEPFwFqy54j9RB7vw9t4Ub8C1iBvVFnokxx3Ym6m",
  "key24": "3TnXSQAijrjCmuxrheFzecgvqsCLDuZdR6MZBsMweXRtnhFNHjVh6N7oVs3USXAddwxsGmYKyN6dmRqWET2FW7k8",
  "key25": "3V1Uaw4UqWBfuZ2MW7ANCPjEYWVUEYDhdgA7Yg1SzgfkycBRUMz277JNKgZL4mLC1sii6SxGkx9MrtAE2mnbKnva",
  "key26": "k1QDhLPCv7mTKo3yJyAaLJg4CHoBS4MUKJnTxP2iLzU3Umfs78rqX4N85iHnJVanL8mcuHD4V4dbBrmrmLSPzAZ",
  "key27": "2shaGzfNAPszMvAFViWuVnfzjzfujDxL84KEiDFR2P9RLdtsBKM71ioWAkf7stUvCAEYuLZHr9Vc5rJX4g7D5wZB",
  "key28": "3Ph97fFCtXK4Twhus8xFgWYjWCzRfUWZPAnmrS5uVLVAJgk3Duc8cvs3b57DSALixkn2unbNfhsDsC53jxxHMkUB",
  "key29": "azknj1hpKrag5U749Q9x9LffgrptWTd3T5t5bqWwXAQQbusrnNbUL9RmhBEEDK1xpQE5v3pdD5bHXNv946QrU4S",
  "key30": "2UhXsHy95XgpVyLv7GqsjbzNaotTCsS8rcY5p6iSLq8QaqYEfoppu6v8FztQUFz5eXKdWYpgWyK6WPsaW8ctaqFZ",
  "key31": "HgawxrY6P5XpjTQWpscg2T5VTVoc9zxbMVdQrg8rszppNktDdQjUnMn2j9HKHxmGvUoQLfGRXFh6gkuDPG9jRjo",
  "key32": "4DyKSmaoCybDEgmAepbi16KtPD3sxkg5NYP2gXB2wsJpP5Pi2LA23252EwKsJRiyMetRb9FkmE4xm3Wq6tcrJrzn",
  "key33": "2j9gPPuTzAozP7m6eQmAJvAkXWz1GAvhxXyirS4oiWe3AYXsJB9oZkrjg8E2awE3CMptQTVVc8boJM8JWaXhNGgp",
  "key34": "5zkZvYHsqGWQRXZ4WNKgqdoJqsD1pm1yNEE1mkPX6gq3kt4gH4Ru5qo2x8Zs9yMifK2WBFLhrvnfrnMr6qD145vR",
  "key35": "5qC7nfV2e9zZB5Tqf84N3TorhTrzZ4CkesJKP7Y6ikjCqSneNpxtguKQYGnFPuCjYdAypAoYGMMWV1hYbvcJnnLb",
  "key36": "4N4mVqboN4UtxqaG8f9Sge1UACTsju4J1psyJzE2VvaqMNF3EQvbJtwHvqEwhXzdWGtHQfL7wfwAWMLTnyN29AUn",
  "key37": "5RAX7ij1dKxTCmUwnbWLsbhtSdQZXZco6Ny3iS1imvUmXLopT6B55CwVX17PgLhWp5PavpvaVmQ7xCGHb4Bgb3Zy",
  "key38": "5rAC6pP7QK3vswunp6aSqraneXv5r9FtG5nSy55EKr5zr33BNUZYEyCzd1KhnhYF27PdKP6sSpnHqKNcZDByw239",
  "key39": "3s2U5cVScTYZg2xw5K3LQMQm8yAxQMmS9kLuw6TLQWLy29C7j8WytouADeaMDHM3FGxDN19PsrANxsDhKuzyhfbt",
  "key40": "39f8Dox5Ng6pDviio8TpH1B9LYwUsuVakY5AtvXHsu2ai8dZ7ypDJK5nDC2jSBQQXC1beJaiBvdnJEe2jnv2q1SJ",
  "key41": "27LGCASEmU9HVNt42WxJKxVoVvbHXNihJe1nwkw51h2iCK6ytcvoGrxK8WeRNpAK4N5kWGwpEpe1PYEZvhBpnVQK",
  "key42": "42tsuwojpHQZsMj4Zuo74X42EscpATFjipxVfb6XCpV9aVST9TP8VGKr6xiVy9Mn9zUEgoe1hAYHjTeNRyVp2HL3"
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
