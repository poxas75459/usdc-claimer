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
    "4cnNpugijVWKXed2vWxyfGPF7DagbggEghcewbeYfYF1UQVk1BgdGkGuFVPNmSGDugcDQ8oEGGHhHkDMrfKfz21R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKSvNqH3ediUG8Jw1HnWxjWxxB2Kz9YunyA2phc1sjLfWtNCMTwVZsnQoYx7AoPGBtHGCSv4MEGmTTJ3R1X4o4B",
  "key1": "5KbR5Ujgjxhib96pG7B82t1iDbXnX8Y5ZbvVeUPQhGGE9a6eGNvJL2n9T8ubwz3dN6sXmYWSkVuUnu6PsC3A7Nos",
  "key2": "5ZuasxqXPnKppWhQcpXK5YHpE4kFC1Nrwqe8foj2LYg7jy6ewMat5ASESkBzTQgoYNtvEdxzpfJN4N6buFhcV6kJ",
  "key3": "4GrcRgZVNVm95Pa4RboNMAKM2qpWCk5MoVt2PmdNY3Q4ESSwGBdbsxvxaCky4pQNESGPB9bb3QTjoS6WJ88wavVX",
  "key4": "2kfkkEjUxnxXQWFNQc5PdamQeP6QVxTQMd4spKXnMNjmb5vaeSCiQWzkjk5xRvZ5yTiVVZrYpbW8EaKMp4iMYWwB",
  "key5": "h35usxgqiuTc6enRC81sP9J7QP7Lzpth5P5RRLioh3CEYZUdW5zZKr4s91Jt2CUVy8BB7vVqW7YrW4bYigV5AJ2",
  "key6": "2QVP2WKoCchkrndb6kNJdAWDEm94cCibvPkQ882TCGdr1vYNuyB7wBhC6sYgpCvN9NA9b8mfTrA9PQ95qt1xBYpE",
  "key7": "U51ZcE8KWyQoxZDJy1iEXsCNoTNTxpXQqyr2hPdB2rbFQ6nM1SGuL6pShLWycgBpmoWNaMA9yipvxibSAmsXY1w",
  "key8": "4BkTtsx6EpVAnRgeWk9hH4D43aezmUNEjXQU2y2rxnk5qRkqt8Ud2dwtvtain5crmCEVq2c8WU2MkbMc4HhiuYrP",
  "key9": "3PJX3dAsjRSoFCvcZpmJgWBfrqXK1VGNNHKLuBzTXstqPTdMaBNosgA5rT1G9z3FneGzr5XBCjHJazAnztNUwLRG",
  "key10": "3Aqnot4CH6jkfLUnyU81d8n4GSVmvRRfWXwEEZsRRHsQwDtjGW6Dd76BxJVjAm5cqhxVYgHy2ZZbrujELh2rYuWx",
  "key11": "2cWRx9hRB8Dq4EtboxCDU9XA5T3QeJyrxhmLP85AZG2vZVLtCjjriTzoa7TDvDSFBKBXyGWEPVLXtJ2LFXR879nB",
  "key12": "2u4KmrXNQDXn3Ar8QL3BQ8fohHkwkHzeSq8XH5DAswRsQH6ycZSBousojSbT67vZXZeZtm5HyCTHvAT1HXsYCQEZ",
  "key13": "4CSh9VHHYHBQiUedBcy5EuyzYvsNfWmYupR7WrCWbRTrUPip3TD3zEj1Dctg9siwjoCdbTTwbdFHdZR79qQ1ozVb",
  "key14": "2sau1SX1UK5xsAxQg42BMd4vxpXnDAHBvs64baei2cc53aGTs2Ja8dZLoGEem4zXBtvfrMyDCPw2cKLtiYHoeBK8",
  "key15": "FxbdjmeNihcz8jrpinVMnjgyjdZqX9giRHHQFD9mSbKWK1NvT51LyM9xcnfUHFM9fLYnyurMjS5YRaCThsqEuBD",
  "key16": "44pet3nXKPd41q6w3AVZELksm6wab457mX99ag4re7bspSf6nNzQ57tYz7smkw85CaxpHC8iLggJ2sXge47TU4Ys",
  "key17": "5LwYH8w2XkmauqJDozZ3RyWKDdcD6ghLdXozoo4Ata7TNFoy8UEtma7hqEaVpAEPtjAmhmAzcGdLvJZjN34tqifc",
  "key18": "2Q65BSGGf1K2Nf2CfXr6kSNchDnherrY8YDDjRYaBvSc1o86ymNopF1onLuLjQoVWB1jzupMMmaKmRF61Hn8D1vH",
  "key19": "4HUi2XrfHKbFL6Y43eGBvKhfAFH4UguKE8eQ2KJihu5AojHkPybjb4Siq4hM8dDdqC9aheMXCoumUR5yoPCzzoHV",
  "key20": "5ffzXcs21YZ4WLNxvZN9bEz98FWJNWq7ViTsZDzvUmHq2nYAqvPzvZ9JbGzB9BJf5qSd2wLsPJ8YtysCiQG3Jmrd",
  "key21": "4s62Riy1UH6cxyDfTjEomj8boAY13oUXnrqKJYGyVhis31A4zbvcP7tAXywQKaAcmSX6HBZJ54trHBANBEPQWDER",
  "key22": "5QLGqX7mhhhtFsPPutVxkQ6vadmjCne6m56XkXh2MBqK9nrdBN1vSLKtsuYNrENnaMrtBGE3g1SqshYSZpvpSyde",
  "key23": "4Npk5WevrnNsVfRP7vrEWXjzXWDQuRUWVwbbn39LARYvfRJPGXyxFVPnpGKd12zPnZZC9QYtrqPj9BTM2cBo6fQu",
  "key24": "4gTfKxRF56ejJbSnzvXnpj5Dag7MYwwC73SNknvUwNvTbG7j44tCi3gFDXLqRGkWYgUkNsxfrBD4Z5DGmuJZgAt8",
  "key25": "361hUgvKsLzeAeENu4a5EDLQKyM4HMEHnbRfZqPb1mjeVkrziHUcUD1ntDktycpnaRHHg6zGju5sFQeEbkNZATDP",
  "key26": "WqzLzp5ZfDj3mxV9x732VPceoqDHayvsA9bmbTF7zenU9TQuWKUnK72d2TcC3cAUX6oLnPqvrpbGV46ixn7nYTa",
  "key27": "67KRiTvNUK3WAkT8ACstULRYzU5YakbfsqgywEZ3XJ7brvrdjN7YowCfDvokbyCydvf6kjT84zwVNepXCMmepK8E",
  "key28": "3K2oQWUURUgoA5GVw8WMM2Enm3qBT4siCoRJdXn9212Wqhua5VtDDfEegPgC7xjAP9pw7yviWweW2yLznfxrsuPG",
  "key29": "3iskaWF8PF9QQfxc13UmZ4XyYEYK7VuuhkGAB9L34cz3kgKMRgNPthJ1di49VAc72NzAXkRPBPqCf1YRgY89WzLE",
  "key30": "65yjm7pajE3CjEWPRdAJGFs3jcZDpPoRdNnhfbKvbVpWtqKgLoX7JVR2EBLFFyhwY78AJ3oK6bubdQyk2TqGNNQs",
  "key31": "JeKeyp92dVJM286g7o9j7dREeBsJheuTdDXtqxAf2kim3mzHCozKAPtq3rpCCgMq1ZbnjW6mYDMWdg6D5a6ZRRZ"
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
