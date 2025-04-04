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
    "46q7njrKCVUJNQ9uo8NUHEm7Rp7DvNi6U6X2BuE6A6scyzrchoX5U5oHiAbxy31u8U38csBZTwzXzC89CdUJDSGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLvDkBgLfTBKY1yfMMnVEgbPEKKrgvR6TLCk1hAitQ3GjXhzhhVJNFmsggwcRtTVptGjq9qoZHQE3wJey5gNjLm",
  "key1": "4QtssQhqmVVaaiD1es9QADR67Jj5S63s35BnDU9TADEGFjhcxdWgK3pyripcdk9Wnp8JPaA9XrXTTN6aQD8Eqk4M",
  "key2": "UURnyzszPV9jRdWCdbYvCL5GkRBpryNcX7SNuMxjqVMQbqQSoGagSMY3um8QWDVkvurKup3whtE1tna98HKaHHr",
  "key3": "5RH8catiTxak9c7EbpeTd2JY8nuXgDncbLxqkJEF8bFxkzbVTL7Dz86mXZrjrKVgD7dt8p2vkaNfkYCiyE1wmRfQ",
  "key4": "5zbiY76SXMn1VvyuL7g1VkV2nodW7weASJQXRtatqzu6Zt2gJjhWQ72i5S4a1Pbj2jG5Eivto3U1MCQ3PtHkXVSo",
  "key5": "5Qy9Si2wLJu1yziyqC3g9rteFGsSrvFnHAXCveoz35iYc5HgZtSFudDcYSZE6wV1wXKZeshes7YQNDpDSeRye8MF",
  "key6": "4GTDEQHVohR5gp4UVtUqZT4EpcLM9ZAoGSn9jPNTvpRNFG2Y4ounQApdbcH5vLYoPpDC3iXwFnTfbn6BNVKWhXFa",
  "key7": "2Wd4qfocMLBRXiDD86BrwntiCkYrgfV3fq1VM9MmifpdXYADdFxgN4fu19ukRK9XRCs8HmNdZmeqygLK7ezWHUAr",
  "key8": "52L7NiscaQJKH2KAsYHKdd6YKJ94L7c7yG2A6jC7NeedCpKro2FKs9r1hBreTTz46EdiuryGUB5uvbqadHQbHqUy",
  "key9": "35oAFbtPzwSFfZW5f2ivAXbSjhLV9PsFz2LDq3s2NztZNNgNfgusHbLbfB9B54sCUVBkQN6AZNVdruPvbGMUHi8L",
  "key10": "416jVxcL4Gw2dSLAAEeWX3WJDtQ6jGLhyzerZfjuH8M1ohzRyzQnVkoJy2j6122gviS1mJEC4M7iSPxHUHYbhExg",
  "key11": "4fabNuhWndWymPoJMSWvdgdDQG3wSk3XHZkSbX9yJyA8x8bRXHLDftn9uyqtkT2kqQdNd2zqL9mKQLDhmeMuLcSS",
  "key12": "3UiwnUfgus7PB1WwDp59kdXqoFH9JAN5Rv44xgqFs7DFqiVAsP9uFfsaiozP4A1APoGPf1EYWR98LgVVDMiVMc1X",
  "key13": "Pwz3FXatFw3Xtsv5vdHAmzWUh8bAUY5UYVtaosSm84QtvXyUys9JDXWuaQJxSUptN8ffLasQxxDhQNFRyNJDpW4",
  "key14": "eP3XrAwf3w7foahx3515Bw3NuRQWMV4wS96ar5RY1wBnNg6fY12EH7Ds73JuSEDetZDACSv4gV1Xv6qKNNdJt7v",
  "key15": "JQ1BRDBCSTyn68cwgnjmZP5ZQhimXUruUzHecqh1re95i8ECgHNaHzTAxdMyapg3ka6rofLJHjtKp6B6qq7SBxV",
  "key16": "4VX6S7bYDmscvmwTnh1Prn4371p1EKxUamZppvud53bS3r1CvqAAQFumF9azkEgKAt7yhcAJJgwVR8aeeR1CudFw",
  "key17": "Q9rXw5SpZNt96ZQ7f6Crgp8PMBLNv7ginoz69oYinXsutsRYkuo7fE8cgLKofDenD1kZU2eiHwH4kiZ38SU3JbK",
  "key18": "4gAt2QvDBDACgUuJ6gQRqdstiaJVDxrPRBEH5eW7JJi64Bfw46vrZznv7cfqpwswof5YpfH75mZ586v3qYgAMJx",
  "key19": "ridbVey9n2os69Ght4kqn7ZWbjekt8QGJEaGbusBNTabn2dCxgrFEUYfEjfGRa7U7KWFCPqo37xFMEEQfBxMrWX",
  "key20": "46cj3WKtKcMVbmfXpAQfHJLcvi56Weh6S6DkYqWnWCuBbNryQJgV21YMrS4BNhZyrpvQa72Mxj2L4wKZ4UAu6rGL",
  "key21": "4nEyKJ1qajDA2KMnovKrsb74Ptk5iFxdYEkV23EaWZaxAyDNb1jGjR6UUw5GS9BJc7d2ixCZprnzCxwusmEQRwek",
  "key22": "5R8fnUgAK4YrtLyvv2TVsuS8yWRoJpWrJZaf5DRC4RD79BAoVB95Eo4YijSV7cstDVt2pgxjDtAwEyaEfKUxuBBW",
  "key23": "2LL57FY9F2Vfy3tCf8hLxSBJgVqxVYH5N5eDYf8nrWsjGrH1qYrtkJ8wSo2i7J7McMQXsHirSKC5enjVEMjx4nPD",
  "key24": "34WgfbmPowBndeTTsaq5TLsibvP56JMorqFCTzHEoJvqTEvgXrSMBHStyZMGsqJPsuXXEE9sUALaLEjmNJ85juPS",
  "key25": "5iqt6FW4FAo49Fgt6B4E61eAAqTp7xkRK9rFn4mHy6qeZQbUz2bmGTyajeoNN1BKVMGnEW1rD2nBjmHE4Jd2Z52k",
  "key26": "2QATg7BccwaFR524nwotojxfLykGZzN1ovRQk86sMAYFMXVW43AVQr7HozdnpcRsSGii4ebMr9EjjKRKQaR2B9vW",
  "key27": "4AQn4yoGXKE6rtR7pZYtdzFD1UfCPspTnKyiMFkzXBXWrQdhDbkj1eduL9HhhQLGkNngxsYDKsARyAhwvqUp6cgk",
  "key28": "58pfMcvBUxpFvyknyvyqYBdMTaYKFPR7jr65knMmBPuNNkDgn6GAfZoNaSbQiB5GXVRksKNXUDrMDWpyUdaoJvuQ",
  "key29": "37QNCf1jpq6hKTJcPD4SNvD1RWL49NreKP844oSeUaNiqt6Po3sk7p4NeGAQizuQ8GkyfCUkUDfjdsgk4hk3FnHm",
  "key30": "aMYsmwc5gRNJSa8o4p76XFby3KwrupZ3boW7iJo1roxw8H4zdHEzTZegYHtCuX321kYtt2fxZ2292aQPxabe1WX"
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
