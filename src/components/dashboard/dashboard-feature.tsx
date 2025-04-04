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
    "4UuPacKwQ48wU6uQaA9tUVtNidAsVF5XdJe2G19NZ121mVHjtgSMqfwmWBkpLEwP3Baiv7seHWG1BsHQ22aTN25k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4wy4xc7Dg4sYvuQquwTPYbJbX6fvKDzzbN1CMTNwWmBuNgyJ5EbFQPLo9tNHefechtaXxLPcP9ZorprJLuuqbG",
  "key1": "2aiRSqSneeRiYgjEoiAPZ51PLN5kW4eQ3gpMtbxZ8hzZCpqHTb4oLxaaThGVG47Zu1YsSxjmBb3LxevH9k1N7SdU",
  "key2": "4AGRqEDUZpescqFiSYA6o7VxJp5TCfLnGd7GPYpKyexxEqcAXXyUZu9cfbS7BFdZiqUEZGiqVFw4m3FBntgm53tT",
  "key3": "5ALeSajseG9suumP1phhPNCLiBa9rD5EPWuW6MkTWY1ksoZmZ7pwupNg4JF55g6pmnNsRpLwJY8F9uSojnUykw2x",
  "key4": "cXnHa5VZkkFXGPoaAeJUeDJuDF7GbFWTB7CU8oqWxCKc6rYJxHmjQhm9SFAWibD6n2MtxDCaX6SKDUhiA5JroaH",
  "key5": "5SQ1onbaRYUDyAU1USFTyp8Qj3SuqTdgV2y43ctriG6wo81qetug2E3ysVjdraBGbQbPBGpKxw6BL79ivPLZe8Yw",
  "key6": "4coVns7Vi95cfKaWfJqRbH7f4rHcJiznEnCXUSkXMRMjZ3gAriSxJ4LNEbyz4pKmn4PET3dqLVvtBYq2y95Pi2Wr",
  "key7": "2Ps7KujqLAQCJwHEwjkkf8WWFk3MrBWdwv7hEjXhg2oqbFfySULDxJXdwU4j3ZsLHQprFmr3xXNuYqNPwNbx9rkY",
  "key8": "eMYpCyzS4WBhPzB4fcnG9UAhZWcerh8UQjZk1nv1vMzSPfJcMtErTiYT7wVVxFqRyQ1GQAJHEWgrhtM2pcULjUL",
  "key9": "4ekRgCRiGeBMmETDsV6THoX8dN6g7EvVqRq2fskzZxgVZoNb6whQ7YFF9mASoWS9524k2njoPdSj6ccujzgn7UcF",
  "key10": "26spaswLTAeZNjr5n5mye4basVWxmdonhUEr79e2iaCiLxyf9ZNyQaa2FbPuYLyv2dwMDAxtgnwYatXQZYguqHMy",
  "key11": "3xEs8xT1ZEcY7wVWxGY5iQqRrz3vXDV1ymCtqQrxcLJt5WjTuSJdU6FcVFpTxDL3Vufx6YPcXSmGH9q3nFEBjP35",
  "key12": "2wWC9o2WdRundBbYVUMcZLf1X3Kyd4Fp1pkcdkG2gL725owqNvrFdQCqP7kbr31R7kRTbDXahq6ddpLGCQ28JVN1",
  "key13": "4mQPndhHEshv5YJEtnJ4aXvoKtvZPh4dT3sCMn4u8HjXshSxdSr2kjE3qVwbd52CJQPiL73NpSBy5p3j55ks2L9W",
  "key14": "2ijATmrnjmUPMhtTP7Qw11BZ44S3kRKF33ukZLV2mMtwxdeQ5K9KKPMLoKDeG2zdooPgMmswKjSWZyTJgEFiXPBM",
  "key15": "64r9Jywzz6ZR19EFszDWvj1jZS7Ym5yp88DwWDMGhQCsqaaUa5r65tXfY1qQfFsAx83XXj5q6E7NyvJRH4JDRXVb",
  "key16": "2jUuEzCb3HfuYgW1aQFjJfyhaT85G3MLx3XaNC2U6zLhmejKELLheEmKmDbUsdM9kZ3FiWRScgHTtj1J8GhHxaX1",
  "key17": "2PKPQoE5TFbgZquK5og6U2LCPoV9d8UXqbWXoQFWFqu4GkmM3i8wvLdN1NcsfqAdbAsqCQvTziMTGdCiSYVENFhM",
  "key18": "2WbmKoQ8vCG6d9xzpmnNUhv5TdHZZgAMo4kfwBj9NP7b3TPqsJYb9aQ5KEm3bAAD7JrVhzum8uDdGfKX4h4LbhPv",
  "key19": "4ZtR6vmeDbkvzbihCKG2cTC5X8T9FQjAHjNbjWNorUmvnRoqWhT6F3GoWdFqj9YV7pwQYhKjTsGeCMv3VRq5C5Tk",
  "key20": "fEQVuGhTsXmhmS3Xgfq7w8rcvNcS2BXTaNpptM11jaJMSABDuxGKkAjNRczeLPJKFpTtCUw9gYE8uMNGmmUVdVx",
  "key21": "4vnyd6HpNiimjb4BUwvtASQnqdHeJr4h8278zykyH3fQ2PaeyQjTRCuT7kkyBmyv9GKeaeukCdxoRE1Z3nSB6AJ6",
  "key22": "4DVfWyLb8SHgrpeZSoMLAYuoSXU6vyiTZoAGSu5tgaBU2gaUh2qHkKoyA6LHeHhvjzGbPNnaw5CFMLS1RDgpcyCj",
  "key23": "PstEi53bAcZQVCWV3grWJTwQaDm8VLRjzYHbGtW7uDfW44F4LfNoeUtXYQeHSPb5ohmHcazyUsCbRt4Y2pwg8Qy",
  "key24": "3eFgS3gwF7Ezjdk9koNJuyAfeTvaEaqts47DMgGAzwiTq5bVJnzjDLrztJSKHDGnoAG19avavbsk97PDGKPiWHNf",
  "key25": "374NNfM1ivCXfGV8HZSBDxdRV3Y8TwwGtrSGzGG15AKBDFYqxqrjvYhVw8qhxt8JDp4SJAYkvfc6JHMZtmTvyk1t",
  "key26": "4FvA54qQcx7JkmieKFFE4k7LgCqxywGA4vXNdYip5dnCKU3ZxZLhPU7MwMY2C5uJRgagShN7yGA8rWDU7rT7UMKH",
  "key27": "VCh9YpCWQduRK6vz7d7GPB3bNBeNXrT1yiN9EPBR12cANr1nwipamEaVsCj6UatWLPgo7qjSHP5zXztAp3JABnd",
  "key28": "3sFkTjnfp7BbPR8UriaUq6supoK1Dpv3GcpKBignKkhC8HeVQXREqofz27m6QWXPyvdbhoAouLdmh18pA26Eo1sQ",
  "key29": "45T5rDuhYEutDW2Vp15Ak7Q3DUXGoPXVDGMwHeVkDY56GnFiU2TseoTTCY2E8zN2MMGSF2B6LyhzCwTGLB7YaL6y",
  "key30": "3FxqZcv3kEGZPJN4yL8cepNbo8EPzavC5ddN6whXXYDqe8W7Agzg2Y8Sy3ynBNzQk3DkKZbViF1Ho362mLBXuctp",
  "key31": "42uZ5QNDBc1WLfteVjnLhwZbmkF2PsxD9r2TvX3QaQPvY4Y6jXUXMtA2gk3tRYes2wmbduAQCBYPp1zkHhLYU6RZ",
  "key32": "6mVgZa23GJtbJpgYU1hG39A2n1TNkxajtcHCTkygogzzKntgS5u6f1bNhzTNoNgZghJU62dsJ2U22vYjnVRQdou",
  "key33": "2R1T3oJvaod4oyCkP9NLVpFATeJufJFXNnUWWWzbzXPGmh2DCCPPDFvUNJGzSsykDFmkujX2qPETMmAsA3rWgWGm",
  "key34": "bULJjdnAwEeq8fb1cT2dsP5Cz5y94LokByxXji2S3swh3JDsV2AJFh44X7LMp1gDXMWoLHJoDHFTnE38wqUvr8L",
  "key35": "5UsdoferoBExdLgocVwz79jRAVFC2RzSmXMJY2Q4duMSfaB3jJ1R4dkvrKvrigNfKCiX5oddiqa2BJJgXmqd8ioM",
  "key36": "4UFA7xuKZc2eg5meq6gB2VL35K2gUNKF8aFz8yedyrQpKnMFofpYoXPdxBUzhcHZV6VhmjPLzb1GPP31WKm9FN1e",
  "key37": "3P8WsHcAjSCLGoxYvsdF2BSiLgAffbRfuZXfySp8cPM5bToZEFZNdJ9Whb4UeDzpvVMYJ7m7wPWaJf5R6UX4gADw",
  "key38": "5q86vEkNgZkUXWKHxr6WMqNQUTWYEFZUrBnH8dzZuG4VbhsNQs1rSmdV2fUNmf7VuNoiJPPWdMXL7c4J4aR2Qum3",
  "key39": "4Rywx7KcJq6LXycgXk9QBooxRBc4uCx2W5hgsJnSP2eGuaGsGP2FTii1N1nJx1fRcBFmJMtXjNsR8ZUBn6CaT9oM",
  "key40": "kJfhELGKLQqCZmGj3ctNJY7QcTW9WyZbMaGwg3ZGPqURrsKSMQLZLrr4Vzjs5TdRdcTUfMGNWp9zCtynhJsZpCh",
  "key41": "3emzwRnsuKmav2wgpiZFyAj4BCXNEWyVoRKrDfmskkMQR28UCnFy151EHyTkxjRAFfvAESZU7WVEoEK6E5USAGMU",
  "key42": "eCWtBrwnvrHtWcPFR6v7BF2CnwhFCxgtFTE2qFVjsjAoXpNxkejeTcbS19m6JNBYHqYCGJcxoWAFxiBQK9YqXKY",
  "key43": "44M89F4UH53n98sGH9NhJmZsVuT6a4XTbkYweFmXyWscDZNFEGc3NQhKCg4sfhvJVeKZ5fswGJowGyq6KXMiucU7",
  "key44": "DkJmpfK8WU4gdmyPDeDx31TTZMX3DCjjFrEZED2BpECJvsG7Np8Ee11Bcb5hgXeayKH7wPCZWwbaS6kkHmii7gq",
  "key45": "4SCFKUXCbFWUWsGSZiwaisJnkutYpWCJgeoZXo2ap8vjNvGi1fMTP5cGKjzxkf45ccW5w6yAmHGaRkB3NRJ8hW79",
  "key46": "5kw2Bpc1Z9pgZCPRFQSGMbpnhkmq4Fc4ScFzvd6EFBgeWdmQmviDraYvVFyrjQJanNFXRrqzVJ6gzjgxbDAhz9Lb",
  "key47": "5KE2bgVm9SVXy8u5Pn4Cv1JgcmiNcE82v7d6TirbM9GQPVqPBiGtZmS4ksudkEUtBt9awSyJqPwvF7wNoYNXSfXc",
  "key48": "3wy7NuXttUxA6gdhk22KsMKczPudutWmQxd5TSsPHggSGwJigTsd1RTRDdBWoEcWJGhcoessLzFL8AZy3NmiZna5"
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
