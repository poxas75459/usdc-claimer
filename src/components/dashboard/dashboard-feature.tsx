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
    "2fT2hj7C6DN8TApwR7kGbtyDm6CETJE1oSS84wCJQvUwRcjTMSoZ9wSPks1HveWSugS1S8hkVBAnqi1vANWCYsBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7XVRHdpU2KWARz4K6uVedvSrLTd3eT6vsovYjZyFHNBCYRXtuAmoLKLoABQAhtUcK5GzjTnrtum13Eu99NP641",
  "key1": "52sd5veTxXoaJaoGYcLNN9D1ojh8CELLa5G21fARVaiaR11rrCLe762KH17smHZ7m3Z5jF8cUrCBqAAbWSKSGepv",
  "key2": "2UVdhYj3uPVZTuBaPrrktGnbd3kD1kDpwBZXvd5Y7zAtaQfKM7HJfQZ3rhhy3QBKAunNcheos4DQkgaQr2DfDRVK",
  "key3": "AcCfa3NeEcuhry3EbaE5zNxHArzZtKw8ToxhiTGNLqCWaDivdody9vXwme8ineragtxu6iGLPoHeYGuEjZFUwhw",
  "key4": "4zk6BdayzDh5hVKDQjbmrQMHEFBDR3uWcSxWweSyeYmfJgHH4xTqTP3dm4vWXKRD6GVUCe72r3UQgQGBT8pARk6w",
  "key5": "5hUfje9Rhect3WYwrxdXWu1oFWavqPxnTRqDzpFmyXHhep2FTz4RoECCWcbPmExAY9FhdTihkBVrXPpVheSa3HGi",
  "key6": "4Vw7PnoNbifN794McKsM5cg7LwRAUQBWUun7Z8FekcYUAQ2RSAe8epRSDzutm6GUanwE4m8sJDyyzpM6QvFo6gdy",
  "key7": "2kRjfkXZG38B7RNHQhZsarjTjaC9HuboGehsmXcSEjxmkj5EaGSWM6HapmNjCMmw9fQyz8nNwApHhFDvt1HVgBev",
  "key8": "5dESvxpy6gKGYbWkSopNBfQC8Pzm8FYrnBL6hcSvLrB5Kh4h2r3HfvsT3eZrZvZEx3dw24i8gFFAUmE5sSbjJfyN",
  "key9": "KzuXdUKP8RD8T36PW8gDiefnTPDbSoxqnzhEr9nedACnGd9Hfm9q7DB63h1fYEnKKQpS5iur6ueRfXR7RJmZje6",
  "key10": "22xHTkAXo8MSVUu7hoVbyjRfEvgAnHVNyFCxMTm92uK2KxBj5yGdZWzNKmMniEWygbfNfa4yRYDGEgcd181eicMg",
  "key11": "4ksLR5AAap9pU7KxpgX5cSeBg1XiHTDTXfoYSDEMHohRKjV29jna6LyjRbnZPwV2TLhPmUnJD8PhQEh3JRf3sm37",
  "key12": "3itEUjvxBr7JsUDzoCExK3T5chA5B5aQE2bSwTzErEC55ukTjfH6AC8HCjie316TokR5aQLg2F7YmtMxuJVfsUdi",
  "key13": "4FhAyDc1HmQe9xcFJPLmnZA7oFoHVEDQWixufF2LHhMpTm2JbhKn69NMNDxuFhwhj1DHj8ZAi3o2BqFY1UAsNTWB",
  "key14": "3nTyUYt9szg7bd11TEHTnm7c9KkCo6vHHktUTkNgjQz74JhjAFFm6EnZGm79wQqw7hrhTDPP1sWdxsspjFbHsigB",
  "key15": "4dDpnNSaHt5Kdhyw7qeUubTrpdWu3VZdJ8xUVwo3JjLnLyoHe5Z5bwuAeHpYmpP7dyvt1uPSCGLZ663TeKpU2n3D",
  "key16": "5D375yA85DB431deRxNc86rVxtbffs3Rh5BjodFEWoZTgvGmbUV8ySAGcoRgSWiKdFxFpDobNQnzKQWeGrLLjmsC",
  "key17": "5veGRompDpzCsNwbJ3jVWt6HTqyeVii6RS9mV2swF83wo5snwi9SUM6iDcB8bWn8ov7GB5RKvHuxopQeZFeyEJs5",
  "key18": "4Vav3MYc1K1rbexQwv43Zhetb2deQAJYs3U3fWTPj9phujbZcKD16pxGnkW2jG6vED5QpB7vV2pNBAETN1kowRUd",
  "key19": "4ipDUKazgK5cTUGPSN5qeL7vsbmeQNyiGuSYy9XZCtL1jf2AakJzu8ScvSCRfcuNLD9K5m32J51yDrydnnxAkL3h",
  "key20": "3SYKenvnECRXbNnVXJBJMytadDM8dMsiEKcAbje8LQdZVqaNVfzQTzPSUHqpHNSvB33qeVrQR4B7WcPUBBZSfZCj",
  "key21": "57528jhL988JPDHm5aJp2wjSKs1DUSNNnjC7mYAhWaY1WrUtMJ59VQ4TZGhjp2zaSHjy6RqvjCXXwz38xEbJp1uT",
  "key22": "SgaWaE8WKtRLSihdHfFDiwJB8HDxxrfBCDuB23bE31t9rEnZRxPVVzrvMBnZozUgG689UDmRnvQs47WjpwqXCjN",
  "key23": "5HwFzU7eFkYCwUQAM7bRkk4DytGcG5DAUXm189UZTkQn9pNtkvcoj8YsdeCAxdiKFGRm6A62HEN7v3xsFhtVtHx7",
  "key24": "3T55sKv1CQhV9ydmfZzVXUsQK4CGzEggMVvm3WQWJubK8R8yYFteTWqS7KaJVfThxbRuMoevEikjnrf7sfehhzcb",
  "key25": "5YyUP1uq7ZQqu9ESa3e8pZwtzHbWgSyAjdyXsXiM8mkPPc2h8mZNtYaeZmxAhoD14HSbAHam3EVYmdSmhoyBQyMG",
  "key26": "2AydWXR8Fgh5Xcs1xSfKh3JbYBgpdPCCQ7JFv5bMBquJutPZncq7QJjPFMBtUyiYdGquXEE6wQd2uAFUqW5dJ66A",
  "key27": "53kimW3A75BvaZins3GmssSZwYjCKiPJERjkfX8fR96ujGotWPitnvcfcHP4TQFrJfnuPbMwTsqtcBpZBcjkbZer",
  "key28": "31s5WSsGkFUfmT8carF6r9PW3gpB93gP9ovdGu5CV4wEwYYkBgKd5s55oTyhGBGvWmuBwvBk1iCtT6x32iu9EB8Q",
  "key29": "Hqqk4UwEX2Qfg4LUymt2voC7Bpy1VbDzq3jr2HBdmsBtgxdUKz7TrJYqHRLx9Z9AP94xzwMaUEZWLVmhRKQKfJK",
  "key30": "3Eq9EWomAPb1vYnDfCcXALkXiDbVbdRB7viCZ55BYHwEqsBmEpd2BUfsSrLkdsRvj1rqc9DUfRcrBeXTAK4kHrG9",
  "key31": "5h4juvQLVc9wHL58QtQGPSgDHQqEn4Q3XfsiCxaF4ta43bWj9oRxd9NUwsZnAK7EbTeaDvBzdxWGwnJBQDaBrJnS",
  "key32": "bFwnvNn72GLHnqrkUuk9EGCbVrziqzJReJnMbGH322aJnFG5qjVWXrwbQuhoDQJEtdcr6FRSZ7HCKcqBH74eZgr",
  "key33": "B7RLN7HnSvhvraCFadC9seXAxGevPa3av2WEsf5R6Q3HzHmTHbDapS7CWzTDK66ouA4Tce8TTzBbpzdkmRGpKpj",
  "key34": "4j7ydbKh5PfHSnNbfnh7Q5XJYW2CD2CxTaU55nhEJynX7BHoDH5jda78ayBCuzUBYxgv24uHBis7oRnJhoFSp5iz",
  "key35": "537SqgJ3XAWET7WmTNzTJfT2Wpp1Ucu7DDfQCezCke8LWTW7bMA2HBt2zTqmrwnGN44uQydCKNzLh3iXufytjkB7",
  "key36": "66kbCZjrC8ibdPuK5h4b11yLM4GusduBCjsxCs6pVZBetM9eSTdurgPSNdMYAwYyZviWW9fsnvpWGjheyzwbbvhX",
  "key37": "5r1BT8qV1RtqmkyAeqH4RfXkcQGRbXrH5aDYH7wYdmTjCkvrL3joTLsVPpJ1faqymJm6dBhHJh7jSnQZnoBAcmzG",
  "key38": "4WdtxuhgR3SQyhUWtAwP1UUNu8hbBYrWP8fyjGysXAyScMKvFjKoUxTUE1rwC2zxpTvkVxeGiFf7e8YWupFK77Fz"
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
