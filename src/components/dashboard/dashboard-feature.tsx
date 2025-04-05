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
    "4pt5m9Q4akWbVFry5JRZiVFQrqnpop3q6Qk5YGp3Kc9F1YT764gBC5KcAwDLvXUPcp9ndy5S9BisXYwU7bC6Qd9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8QjDeQ8u9g2UXJgLo6FouNN2X9TntbL6dfWgWeio2AZiGz4dwAwQURPLT95Fwi2xgscfsrhTBhULyt6Ht99MHD",
  "key1": "Rixrd5aJnqu6wJTpjzgghQyyxDsmdPvt6oGW5SKHxmUJBWoFagbrg8VT3L4oM7yiMCgzUZY47SroqtuV5ykiiu3",
  "key2": "4JxBYbrEGbwCrAvsJ4uBZAW9UkzLsvK5caTbWP3WuP2Svxu5PMJpRwcdvMH4pqBSLHG36RvEMczqmoTBZ7EhXiBp",
  "key3": "8NoAdThiiYCDZDYkxQzEjQ8ZdfY1Tb45onnStPeQUkCwJ1iBBAkS8rUQ6VcWJrpMKZ5dnvUsdyFXL7T2u7anHH4",
  "key4": "3ggroqiYURncj6n45Cscusf6g4L92B3q5xXKeSGKGype2T2VQ9UyuiW1436PG1GHwkg6vktMEAbgtTnx4SRMbFkm",
  "key5": "4mKF4zuppAbdsHc2h41Ebz4k3gD6uBSHWRqVKHw5GqsJZBxtLb4LeM478wUr1C2SFrBFmdgZtAWk799Dc2m7h4i3",
  "key6": "3kEjYbNCmG82R558bvC1VTmPSDfLUWshNj45EyY2bdaU89AZuGZr7hmGgfZmAYHp7x3MbY8Qzjn9izPbJ97TD1mc",
  "key7": "kaJG3PkbmGMCKTP2MnKwUh9UFk48Jau8U9L9z7UM8fxjvfi19cJBc2i2CvoULbNFCXjMnGDXFAVdyRZbayHFMaH",
  "key8": "4kwzXyThS58pHXt3jbB6rLNSFadQxAM1UEPTu78Ld7f2niGA2QWfMgCorutAGGzLXuuLkRHneKwu6LqPmzeSqa4X",
  "key9": "2TFQHB7uvpdZ1YP6YcUBHasx11mnyEhCcFYs5Q4RbUNy8jDHuBH5qwRxS9HZZZ2gB4z4D8BFEVEUuREiVpXZoaLW",
  "key10": "5o4omBYRL65V9DoLDJWFaCJw9QE5C1nnAYrqw3axdSXYD4n8QkwfB3AGHEzpfwihsQLqZtB1qouTUNJSnS2gK1cG",
  "key11": "FsDCunqJahuqM2xkZxYfW72H83egfb19TaWmS7YAeVbxZe4viAmQQpUfeSvzhZ7LkHXo8PDJJYe4ZazurDXMnFD",
  "key12": "VRyLdTX17RyUf7k2bQC7qdQyqmPGpzwHW3qQkFTodJm8eX1Q1fTpmAthLA2wdc3LkU9qwF8ByWE3rjzL7RFgWy3",
  "key13": "ihEYy7B9mhx4re8S9T7iYAmJMhdcaDouCCiFe872My2QzLaMMFZ8NMSvsrfKfuAUrsFnM9YmjJQwyib4YUV9M5k",
  "key14": "5x3es8kgpZ5vLSa1QiYcYMbhkQK4LxLjGvkxpQCiqXovedKvo7pkutxkzy6kAkd7R4sctFTcopgf9oc8sT9aYsPE",
  "key15": "PckLLiF2fAQN5Fq6qTqbqgpPUno7CrBSJK1vLzxPfDB5wyKjpr3iWEDKu6hbgx9onLqWh3MpFCnhsVFwG9c3PNi",
  "key16": "24XADL2WtXxvrN59bxdsm23T5vqRgHR2ExsagFzyWDuXj1cfh4yapjBNWj5g1kw6KK2rLePB1Tchgru7iGBXf2fP",
  "key17": "28dD6kbKY5pNgXKn7mBRuR1oNw91Kh6ESEQ4RPgUvLeT84pqMqWpFjTN2V7VYzjzDU1KP13a8E8dPgTRAkPrDxwE",
  "key18": "3d5UytjAtXsL81gsEySHRX2MDCmPSskwRtEBqkrnNh9p17nJJLZLjJJMFEx3t1ZyxHcCtZMHCXzU6tYNYrxL8tDh",
  "key19": "2ez5VZ3fKzrSvPWAzSrDUxgPzDWv5GeELRtByTeF6RbXEBvWMtcui9KmSQ6qPQpYtnWJRBQWuU6yifjsJCFdnUZF",
  "key20": "2FivXJ1wwB6uHcr9jiaxcEvCCEKtn9uSuGKP9kDY5E3KAvYmcrq8a29Li7gPztw1z7Cx5MVLKCTBGKias1XpgkY3",
  "key21": "4fa5zjjFE4iyZe9qaBMGpey1mVWyxiEiEYC4xtbe34igntUWbzYXsJynuvdJyyyhnmf9Bb23xDaWuNbkBXWHzyDZ",
  "key22": "2y7SWtrxgwgoPRmxqjHzZmk8W6fUUhubbw61Y4ocYCgmVkduRS8HD6uM8EhNEedJEuXwmSVTZB9YPLVv6JFUihZF",
  "key23": "39AhwbPwWMiozczbYjFRfEZFT2nBRM1SpfextETgzgGFTSu4UAE9FebaLroRkuXGhCgEyvRUrPb34nLfNNYj8eQF",
  "key24": "318vmjDWTSjNPHiAY8Ex2rRmwcnZukzjpi6Leya8aP5szrL5PFmqNmAEM4L7exAToZJLheqGyvMi5e1kBh5pYgjf",
  "key25": "2BbEUcJXJ3teaXmo5di6wbnnutqo8A1LwdKAANU3u95ngPRpYVzKmXfFGMqyha3BMMeirKqFfMmR9ZGcRe4Pjaoz",
  "key26": "5xxDJZX3RnzmvHBu81xWMXBGfXvXH5jGNiopFfigM847RVRttBXyH7kqaVVmZTGJKRqT2AHCUZbN3BP9dsgXHXNo",
  "key27": "5rX8GtMJSv6diJ5kTfW9HPG8X1GAeSsmisJy7g3Xg5zTqGGqyGaPYpK1KXT1eubNUqQGiFsYBCCf7wZsKVjVhXBy",
  "key28": "4GuoKDTZ8MH2UX2kcVvxVkAoMdw5xoXtC4unZiuSGS4Ef3CU4mwJ9rqXXTeLmrVsbDnZM41U6Ubsg5UVFvwrumV2",
  "key29": "2hkfVGEWv7Pck5ZDXJWNwQ5fscMHxq8i2JF4CRAgy3vjpawSLqj6561WZSrbcJAWwriyPo5wR6YvTucf29VkMCpD",
  "key30": "4hAwyvXLinsaXajn3sUXweQiZVYZXXt4A5rya2ZVWPSw9Z7yXLSy8yB67iyBmJAk5GrD2MBpHkJ7mVyr9ohfYUE6"
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
