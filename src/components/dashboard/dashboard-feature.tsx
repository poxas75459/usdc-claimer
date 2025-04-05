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
    "2ST14AvhVyNf915G4xYqs8dRwSyxcyHAjD1FE9A6WK2MG49zwVBK9pdQqdHowQhcYd3QypnGsER5ygcbTEDLXam5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eu4Z9QyX8Kb2P6qtZ6Vyfq2GKkHVn5uw5vqjc7GyYYtDTjaHWiP5f6DNs8StqhrnDiNz5vCbkAud8DD5R3NiSXU",
  "key1": "PeZumFZeTkKfJzeeUb2hbfBkCkM7SwSyefzXkWppRtJVwPay2hyKUEJ37U9c51T6AamvytTPccC8A6TQdmH4fLh",
  "key2": "4qCto9LTK8yC1yAVDzKA7gALQNoo5mYW4k2bryw1FFwkehUR4viY32Lmg4ToMqmpyAXksr2CLtPUjEjonoU8TGcX",
  "key3": "5PqgzgRZ8EfQxGFaYcP87P6LFuLq4GUHtWz5FfAqSfVF5gHbbdBcxT6RJpQGmabq73RK4RMum7wDbbPU4EE5fe4U",
  "key4": "3HvWtvKHc2W2EKP8nCHqQv7ZHy1UUCNoTriyWqywbPT3kqMt6rCz1iAvY31mnsAFfJR1csNsK3YvrDVb1uTzwStB",
  "key5": "5Zt3s8NStAqxF3gagnTCTsjZFw12rdSFMU75vK4tpGiGd9R3q2VUSN8DTqaZitGwMbgbxVQPD2c5V8fwXUuVmkFE",
  "key6": "2oVXfQo6W5i2AJ1EuhR2q8EZpT3T4ZUEwREgNr6GPRs7qoxo7vZH2pFxq37zqj4kXdMoND5LnXbfgTTGs2sfNfmF",
  "key7": "39GadVsDCYjE1E795rBYfU9FkBhnBbRuUpE2H2cHeuJ6P2V2MiCG1tgYqThr9sP9yAMfPTGV5drksdyeEYSbALng",
  "key8": "4H2Qs6tS4Q3KjmJg3oWkEoTk55yLgAddW7YKmLyD1NMhP7WPiQpWFp9413MArgyXTA18XoMCoTir6MV6h12iA3JR",
  "key9": "5jxVSTxcKZV5JwugnidPCTiUDPdhjuo7C5rzmi8RczkrM79NYU7toDFuFn9zzKQT3YX2URPwkKnt9xjWJBR5kMHu",
  "key10": "5ZfC6Dxap8puVbEGkuQHLMMXUFdqVHw2cWHipemFAuVWNBG9Q3sLk6oyrx4NgmFXtg8ESLLLHtuV2FqvvgH3pbbr",
  "key11": "626qd4CSgJucLkD7uSavSr7s3t6Tgq3KjtFXFEYWjUsfXTKPwnk2UHH84bzbqzYSHHjsFR34Kuzy7cd3NKpqb4JG",
  "key12": "3xXGgB7ZoCjuWHxuQRPxiWj6d6poEb6JJZbTB8aHcuGhRk2dMVyF3hD4RH7WUXiDziXA7Pv98CLFeanbbn4gU8Q7",
  "key13": "3e7wZr3GiV56ity3nd7ZpMxAD8cdUxnjmdziC5XEz9uweVMM6WojT2ouBZF4dfG4AwGEKXzbPKWGzipSp7yAKN7s",
  "key14": "2cEnHnNPRMvhbs45yEX9bzoWQmWLAuXi7n1AYqNhry78eB2JVFhnmTHHJxq6pqJ7PcuBLv3rWD7q3RM4HETVAogP",
  "key15": "5RKS3DmojUGKesxjH4yKtEDwSD6vefsRf3sP5X1pzYLbyCGmq2WWd2ju3izLqyzK7mPUDcDKQ9XMYkyMngzVF2RR",
  "key16": "2o38SLv1bnpmt9W2udpxsSWGMY36oboMmjSjaQijGPnRYQ8kZwv5iWBu6gGtitSbXeKKYUUKxTy4CXmUosWR2Ldj",
  "key17": "4a14tWT6Nosur8jRzjUvLMfGhVM4EzDT4MHU8b4t94DKaXzUyP5ZXKVkyPDRfaNkR5RypBF5kiTDQZuJPau4x85Y",
  "key18": "4W2uLR5AzPXjYwFZj73SJp1QVNGwSUXGYEtCEBFLRTHgij9VWRKgaEC5amjdxYtDnFV2zxtwHumYfUYj741TDygX",
  "key19": "5VxPmXd3gBzhdio9WF7ZcqGWqsg4sH3GGaf2sWnYYWP8EdDptNRKPDbkMAUJF7szJgMevorPDscBYdzi3YjJsxxY",
  "key20": "5cxT92t545qCS9obnMNrGZm36rWHo8s5HhXaCQ2kpQtebveRGT8rWpojpBRDmVqdZe2DqVA8MNH7D541Ua6Hc9Vj",
  "key21": "3uTkcPB8MyoGRqwG3HEf5pSuvwnXQ7YDJMiL81zaSZP5tk58WRCUTXLJ3j2jgjYu5cs88qZ4Vua8euZEJ6NiueTp",
  "key22": "3wHmyJi6Cf7ZCucPnQLNGnpP6MBa4ffKfjLRmHqp4Kwn665rF5rRcZ6sEbnhRu4brtmXxxcAN9AD6mQ8HAjxpbS4",
  "key23": "4UcyGVYYYdX16tM8FnHABD5ifYrSLjabSqPVbvSswvH6GGFshLycr4CvKFFRmzrqJSE4TZ2vxYPLn4LEYcKBhJaP",
  "key24": "2jSDco9rFy4MMesDHvKknfMj4eVWCZ3ij8Xp4E3pmf5mBf6pFtfUjNnF1FD77nbJV8rawBR98xPTaMv7ewbWKJ5X",
  "key25": "3nxQwEPkhk2E1aa5VQoUD9ufwXyVbdmjiLvyoBjahsjfKyAQHcG9kjPw4FkNy1dhw1kyBYo8LNh7YrJbVBABL9GJ",
  "key26": "33WTJdDNynmCb8w4CBQBwPpqrRLjaTCXJFchD2QB7Exrw6P2KwMG4MTC3NLfQSxiKznMn5GD9bfQjazNvhhfkJyh",
  "key27": "4m1v2CzWSvVak9nLrDWpJaCtEDHKKGPtPmbcu139JshaD8RPFYpHFcDz33Dh6TwzAmPWJ1j7YxpgUQBEs8YMmpX1",
  "key28": "ShXLnT6nmuL7Ew11KZeULukajbmuBorNQQ5Xvro45aizfD4Qj3ZtJaX7pD1EFDmPxURp9ct4Y1i1Rpjh5mjBwKm",
  "key29": "2HaKsNYycG4XAUx94peaK71cmjjyhSUn2qBaKKJPXx3oKnVTWyPxT8WoGghS4PKLx6cZ6MYff7Ub49A7o7VZTPNd",
  "key30": "52FSuxEGK7sBm2eSK2bpt7Q734f815isMretja776UvZCDGdr3G69qppoaYMXVBwojtsVuTNCoAUyqqeRuaF2Vck"
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
