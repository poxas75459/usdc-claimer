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
    "4RhKGFSo5nEEG2F75WD8LWHGtiSrSCCL3abCeEf6L7JPqrtLpsc5LggVLdX3b5unr4Ld8tscJEfy7owMtigWw1HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPL7zbqcMamfSkLrC4zWEk8YNocohZVXrb2562GQ5o7L9WKcvfPUw7cJ67U79NeZNAD2fsitHdCFE5ko8PQUMvi",
  "key1": "4WZKe8v6ZQBV597AydcidV6H5M7jpxzSVCJF6UNQyZ8jjKVLHUJXsLp7W9yoo75nVrJwUVdf3ofyaSyRb9wui2iA",
  "key2": "3D98vXQzuw4oq3hQSojwDzV7eCWapw9p1mtW68iH3H8m2C75faxFMjNN7WvcVCwpD2bgqxDPR9xmsUxuom9CFQbk",
  "key3": "5xgtb4QTiUSzK3Sm839R9oy9YGhoj32EwAMoECqn9TFnYcU8FGqSZUGSLFfixYG86CvNMLZ9LtybdVifpiQ9uCgC",
  "key4": "34QAG8zxmFrNYh3n6p4vegnnw53boop3fj2qTDVByMRCUZ2m147zNZLnvpW32gGuDjezz5yKBxRKZ4W5bwfnQRF3",
  "key5": "3NrvNhXmj9mDgmgYdfmCnhGMEfN1mpqM6wCftqH9du7ohUdenR7XFUHCpMEnQJnQFc6faf2qy2YUpqmoAp7cRBe3",
  "key6": "5ofG4H5B1JMCsFYWg9BdXENawKjNgeTrT3N5LRDMRvN4zLSUvUCBdSS2YL5fPBLbayrpk3yA6QcRfY1DsYAv11Xy",
  "key7": "qWUrdP8wEbhjjssdqUbtufDwS117ty4Qmq6ymNh8SxsQoYFaYbUxDiGqtSWjtKFVTNfGVZrCM9rQHzQfnuGiNWy",
  "key8": "3NkDFvLtWv4HZVQUbNhWZtWskV9qi8rSLB29Su8g9ib7GpZja3Vxju4YSntQZR5hLhQtQnRVUdedcNTXUD4wzmrQ",
  "key9": "351xJwXWP2azixSkugAtGBkSm4H4CtB8fgqq6H8DJdXdCh1ACUnkFF4CMQbkNP8U5Ev2WyQqJLW6TEZQtGzTyYL7",
  "key10": "5j1a5R8uzbJyGk745QH2ePRjr6z8o5idF2ffnsGqrCZ2tZ8ExLy3HXzD7hHYvUGZ6WVLLPbU3HP9c2FLgdypKHtB",
  "key11": "wAvHqMPUxGm8kD8x4uG2xcUi9ABpbipeYk58JAcEd25hRqMdkg47UfnzPFeK7qF7Lg676JnhYGW3N8vajLz8Zfi",
  "key12": "3R6g6mwaUGz6YLNNr1CZ2enMEGLkZmEn28suPCMgSdMHGG8hHNSF9q5Ngg6oEnb1jiuQN8K6Xr3Q3YfKWwUXVT1J",
  "key13": "5zKzfKtWK4VE97YBJhLiFXA2UatDqpyBe3fUb9xkpG55EUas6TuURtdE1cWNaW7MTJ4nGCrzW9vrE2UdABXKxQQF",
  "key14": "517BPgXNmJeyzBaghVbPHrhe223UXD6m5SLxBn6nEMM2qdEiDiLZNqw8HcgDH1MbdNk39EYDuRyuqbybnnPCNTh9",
  "key15": "5AyyZ3kxLWTPfJYDmTYyHcqpko5fRGnCwn33JtonT9WkyaDVKkD1roaVt5GCvaJK94RCuuY9VfexbupZDLRBczjP",
  "key16": "2A7VgcvcqNAEGLEYX6CGAoXXH3NqJFYQE381Q729ecvXtrMZ3YBpyzYxuggaHjYoDEhB9iUKF4aG2nAcevQKnAVF",
  "key17": "2STRPRH7QAMKJaQWm1uD7tNTH5pHeUC5yGARCXUtiHvpUX9cTrpeVSR7ALfRoqfvaGJ965tbqtwfsMoyZUDbSbDx",
  "key18": "4Y928DU7ymNR1hVrDe3NwNT4ApctkSnwmmjYr3pBj6S8D8baUpQc5YouXAu279gjas7daUoa9mYw6ePthY1PjFtn",
  "key19": "5UG2H1PtEV1LmWbYt1nxRrecQ64E96KTCR7u4wH6tBFcNyemKYk5jiGgAyiC56frAufdrr1n8NkvXShh3LaW5BXT",
  "key20": "62SEbdq4ZRRbgC1BYZ31nyS7Rp7wsrcf7wcr3Joj8BojLv4q9EDfoHdPbbBZwUHvntDdhY4AhctbqaSkjZ6S9RtW",
  "key21": "5RxRnXp7YFxGrxppAczBwRvprxeYedGQJUs4EQCRw8Ux4yKj2pCZxxAmXTHkwodE7XLXaafEktThNiUNfXyonaZh",
  "key22": "4o8H4M9Kncog7NzMf6ZD9Pxcnd72zGKFEwZaLBNf4ZeG2xRRg1a2QcKyj6qxAEfraRn3jmJ4eHcN1Y7msBo2QX5",
  "key23": "3PXiMoNUyb8GiQteJyTtGHQyqNLcHPcNXrqGbzh5mfY9a6bGXPa9nRCVUDo4R2TzxS2UkHkJrC2eiDSWxaCt3179",
  "key24": "5nEMzvSCLRWGMZY6oiDg8pC9h5aA4T8oW4fMYvEmYtJxrUu31im9FVQ1HHEQtpNWfuZtdHoHbdYK1ZwMfKJqJSXr",
  "key25": "4jAZ4NHVG3zurhDJv6LwoUDts9dPyo3YTVNPa4LBSToSURHvfhH3dAuXhf3Ps5dhpyXozv6UTcbzZvkfFNzqz1Ki",
  "key26": "2gRiLgGeRLKVdyn6xCfAHoA9b9Uk7csjMPP3ordJAhL8a8FZACLgJW8LLYdJKwiT9M4AWoUszj6J14zHhTUf9H55",
  "key27": "3qr2gaBX9PWfGFkJ3bPJB43yQJCj9hFiqAmMusUeFYqh6SwoMmG1nTT37D7qkvMsHUin9qGV6oZHfhgoJtHVoCGi",
  "key28": "NC3gtovkWqKnTrpwtjazB1NJZsssLCa5UT5eE4rQxxF9gw63VePyFZx5kFqFWxkfoYmPWzanANyQDCFdNN9FC4E",
  "key29": "3XhQjEbyL2F7vTws2KsxnmcjgDpQqbdcptekMoG94U7pT1XRHMhenuLs5mEnKUdD4am7e1PRvk33ToQdyMpC9z3D",
  "key30": "2zaASrVfdy9iUikF3fTGTtAcx36o2BkZWYsdxAQF7mxmPCPEgEc8nrTAgKdVBH61VZKLaDqAUFxk98cozzHCQtZc",
  "key31": "5eLkvzgAmb6q3uB8k266NJJYvCXkMFx7g6gS3CvJznMxvS9Kks1Y2DwrZy97VPf7FNjcHuU8fJ9No8kWgXR3s9yL",
  "key32": "4BDShxZ58wMprgTUAhq3F9Wi7xbkueWmVk5UCxFyAVfNuUaHX1TqCEUVoWeJ77Eyj9dVL8daXXD3YGzq4C7Y4KKM",
  "key33": "3FNBwNsBCEmvZKpBcSK4FWKnN6u9Cz4MbTm589xHT6VLL4fbtA2EJnhorVZQepEBNif4LRXhZMxegQxCN5SK6ZgX",
  "key34": "cJoXW8Y35BAGm1xde5Go54CvSVzcDw6oPXWVfHQL37QAvcrvYnPFhpLw3z26yyC44EfTBSyY2v5CmAa3E9JXNUQ",
  "key35": "3WH9zmkKMYb11cvuzBoPyFgmpxhCHpHJkb2GQLi1zc9sw2vSBiZtYFdAAzNUHMuvRot3PUG1han4yJGwVesEnayD",
  "key36": "2qgWAcVRw4tmLceFrH3E6ACoBFtXySDvKQ8LJLwGPaPGXBrPbwMcLQxddn8obx99G4J7uKtNATmVFpRJk7f2wyfA",
  "key37": "5Xv5LaMYTDYCv681fMYYXjMJ448cKCEUtqpNmEuJTW6t8v75CXbSLeiiFa193Tnrxwz3xL7rGXc35e5A8Z6h9dht",
  "key38": "5ZdGmHr8jQi9vwL5W3ySe29humgbUWSpWRfmyxjgSeY2oBxhqQnmURgdZWw3UV8KZLRUoBjm6p1BDqGRKvRGX9ug",
  "key39": "AumPVpW7xEkESzEfPN3cQXMoDCLthkQkfwD6bVKYTyKWzg9UYDeNb6bQWif5Ey1yVp1BmgbtZ88qiccio596DJ4",
  "key40": "5j7W2QihGwYjgAiMAP8rp8QGZYhqMBZD3WMJuAhCyiPUoi2eNyadhgbu12JgF939G2KpWCe1pLYuX4x6jQQ7ry52",
  "key41": "56mRzqob9yjPyHxJrzwo8UzsYBMJYpecE4L5w46FL2wiFuWbFJNbDzy2GXPjg5zGcXZQNPHwfRSeEq69tUs7W6Fd",
  "key42": "43BirW3tggdb4FdcXcunMaGKS191asgLsSd6gNxfrS1Yf7NngQh6JRS17QKXsMq5Fei4Zh2QDUtukUmXvz4WNpxh",
  "key43": "4DzzYJp3kLNgNJAEYfEFQbcy5KtxFiSzoXBu8Qxk7qzNP85Sgf1LHR4vUNjVjnm1Smo8b46aqMdBYDxtryJNVYpR",
  "key44": "3NnWudohJvDP6AmUNyCbWJwG8qz1UpzNFK6sZzwC5tZrWbjvXRk7dynhiR2MMvT7YNL69tTQ77uzTWrMYyvMovhp",
  "key45": "4SG7gZCzBZNohiKi9YkoR39yRLGRxtkfeEUnwZGvVhKAESFzksrh1Vv8oPnb8GfpCarukZxyk23LWJorKtyySw6P",
  "key46": "2RTLtHBBL4RKQYiBk2aYQUK94euDSQnyLDNCcZn3EcrCRHurJ25CrhNierWAty3Lau9XMg8YAXCiYtcfw5Tu4B2P"
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
