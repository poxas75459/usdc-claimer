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
    "25t2LiPi2gpGFie4iDJdpox8s6ETQo9gMTwxvNETQEfRhofswjj7PRscnJx4gPYDbxrn9zm2qhZVUpAor7fuec4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dS9FM7dRaSVGh7F3topcikvvp18tB5n6rsLP9P9wQYrGkfULFTZHtBkiqkEBsKCKUXSFpY2r3jCDwS39gcRjk7E",
  "key1": "2qKmaJJL5vWj4gu8gqYMPwZRudKjxhzHR1o8rmW3H4C2VPJryng1QisjuzM6bwS4FJLPXgBAHqUg5Kx8t2Z11GB5",
  "key2": "3t6p8mgSihWHSpt671tYKxC2k96KSaSf52bBq6RZoJAdiNaD9jmiC8sHt8KN8wq8PdeKUMaTUmNUPCJNfHU5MTbP",
  "key3": "2HGKjbhQ3F5iC4xL8KK2ZWKtqHdbpXwkpqa8paqVxbAHcy3s2BrbdkwixJa6JA3TgeEpbUR1BaS8DZTqHj1Ya5i9",
  "key4": "2rSbpz5fRr1mDNbSw2QrVB6sCLQaxs5kyDpNah9YW2QCg4bXrMV8JdBm7P1KnKivsWVzxxn8kosF6PJkdKPtGFrV",
  "key5": "2c9wyRsx5XiYyaqkBL4Hde6v965KgJe37G35mR15G7EvwrTp7i4QujtBNig73NpWSN1HYXkfsavDm9EUufWQXUhj",
  "key6": "3J8uguFJ1MfgJR3P1RUuNEYURpJhspW2CGZuB74iwPwLNEFDjgNb398CiE89nPpCfC6YaY7wvsYFctW2n1dMAXpi",
  "key7": "5CA41tFP2rYkkQDd3hEN25389UmJX2Ji6q9V22tVhCSvQkB6n5giDWMFzPqEB6uM239xeovPT3RxyAsC9aoxh9PK",
  "key8": "45713WHBpVWS4bQQfRjNzUaH8j7KnvseWhFb9N38fGsFvsvreizp92JcUxAVvsE7xVGWRvBzaXu8TzGoMoX6Uhn1",
  "key9": "4zLEwi5VdMcMRZxTmcaPwFMSByvS5gweGBitEzT6ocHVuERF15WcSwW6dZo5NfKrZJ8k7Lc1fqKTKedS5UZepVuT",
  "key10": "63NaZ2hCpYBHGJTNCd5AAjieZ8W9g3waRCky926i5jSWStDKZKCGLqQUGdji7wdSwF1Kd7zNTyHH53HCBmkMT4L9",
  "key11": "MzsgzPaA74A941HT6YBaLhCraG8xb9tj3eQCEFU7SsZ6bx8pfQz3fUoTd44kFPbsrvL6S3QXtFbBexSVK4bbLoT",
  "key12": "X4Vv64bog32CfugpGAPsVyWJRvsKzvPGp8RTYXWREAoHXaneo14kbmAg3hVrFzgwP9NAqh8dZsk3GvfawKf4SB3",
  "key13": "5VKhWFohbnb7BSsg6uvgFWpRLPZ8GMdD7WBuRxWkuJHMT2L3S1G82tUD9RADFAkRJrV6Qw6gZnJQ6fZU7sP6KV7w",
  "key14": "4y3Q73hTX4b2o7pAP3gKfCxacFk4mdd1qFpHYoTghiyczR9nuWk18dr29CMDB2GdjsUiHY1ZpctyTiqdeQhZWYgo",
  "key15": "49noPGzh72Wu8xBLQC4j6U1SeHebdMZ5GnK5aaKhLuUQ5pbrEeFAE4mA63e4s7KDQJqW6cTsjTcxuCAAABS4vK9u",
  "key16": "3mbidUGb9dut8TnV9u7gVxhuhToMzuVzD4SappoDrCj88PkjsrfcjyN4SdrEkGNCvYChMYtnApfSwhtssDL7Eubw",
  "key17": "36pfhZdDKUtoz7x6N2HwF8n8MjREByHFgMiETJ2QRMp8cUsEZsMX68f67B9rBTucjguoPv4xGPms9N9aC8uEPwgt",
  "key18": "ghv1trq34SxLmeTeYjhPFHxqTHbRjS2yRbkwmddfz4zemtKYZYyeUCbTRoPsS7mxwxEPdwVijeKKqN1BBQgbf8A",
  "key19": "4c7Va64oc5uWz5McfT2KSkZBGopJZHScGYbNi5rFLgsV3U6otx1Z4ykMHf14xQUdsHSKEpxAaLDgTN7htvr1aXTw",
  "key20": "2HmQpzRuqqofr3uo5BPArSVv92dbTiGf2ULj2P8ekEsY3DjmZX7N9nr6Du7uwtmAgWcWHVw3DNfPFicrW2TQgNxG",
  "key21": "5JcSV4TFi7WzDgDrNsEfwcuqhHcU3uuhkTsiixovbS1AXFs7wGs8oX9EZ16Sva4UuxHidpZYbTP61rGmKHwYrmWD",
  "key22": "5cUejyBWc7Rsry1sZvdbmJ5hqg6YCrQXg3vh58wu5YZD1BpFWXjZSn8hqaWWRH7mZ6AuVGujfG7WsKhJXhz2NaL8",
  "key23": "x3CXbRQRDBVb5kQuBEDD138jAumRTJWBkvFCBh3N5WHcyYtLsDN3CDznmb9gg9gQwwpAs9jBNvqCbiJ85Et3UeJ",
  "key24": "525W773hG271vztgLZbMXUWBkLrLcG6ez2osXTVAbyc8SW9hiYgE7C37hoTJwXYxXgVyot8DwKp6xDupdTBDQJcT",
  "key25": "5ZfXUwqWo7FTGaoMPPiRqvij5CL9UaACfy4TfW2ohjeec6e3Xwm9xN14FQeSUbTTjRUKsjJDgaZSxRYbzBU2v5vF",
  "key26": "5gLZehbiAczGaDCU5BqZcEzcvF12shyNVsRYKEBFWrGoZW3a7LhF4XQEWkZdyUvKYvfsTCF8WE3bXR1koXP8anmN",
  "key27": "42gzMHdB9GwwtGSwUy59uatyPHooZYGSWW2eeKJsuKqnqMQVyxx14vhSeqKfCBk92J9E8zL7P73CNZJL8nDqMVgw",
  "key28": "4Z2tsoMgysVQ9Duz6weNjw24q9fVVGXhyPwnBP6xyPCzVvfWzcWGrJbaJYxSQwRt8iER5Pd7shTTDcPD3eLxoNQ2",
  "key29": "232HhhoHQJLio2onxPJLZMM6uvBEa2K7VW5NEjjevUaUK3poEkisTNPQfMsJD7ExfzDoYaAxCMrPpiRWsxD5FsrR",
  "key30": "3q6xpPQayAkVTnr5kdSDBZ3mqY5XfF7JoX6VoqqTjEtLyduuddof66Xbm8sVjJceQx9xfy8TRQpdebPpR3Wz9UrC",
  "key31": "2uEBMLZMVvzvJgmqj82H28EjjVzBoa8L87PX1eB2akVheqLg6K7xSJX3w7dDJnXTBtgotEfpEkYai85fx5ywSXk6",
  "key32": "2k5T2TA9V6X4bC3FqbxzpJrnKLNVBpASXYXbk6XkX3Mi5jaA4ijgLkS8c3GsiM9NyDVEVyK3S9FardiDpquycjq",
  "key33": "25D5kws4fMbXqnH5x9CFQ42cKmengMSQ7z3s2q3FWh3U9tMzPhorVdxwNhqTCTHhtdFkgu2frjYzKJGAjbWrohDM",
  "key34": "dbK9yL3a58zm5WRFATFLRUDspuAQFsRDA49ojCA4jaWPTSwiavjP7o5qWpJtcmjkGVADzijc1jkrrF8ZQuAvVs4",
  "key35": "3g9RaW8Dn41Bt3ECHJ94YrxNNQjp2isfzrkrwdRf7RnXrxcYwWv4DMSFBKDkgwFYy37x4mgGB9MZrmH3PQ8WPHf9",
  "key36": "4ZFUis9LdghWnggmWpA18C8qeJ7gv8Ye5yUGX8d4VRwZifTQAzSJr12bvDP5Eib3YtqWfwjUJBntGkg2fv4ob6L3",
  "key37": "44jD3mM2jYdxfyuTbLb4Cd3sLe512Z7j3MiWiCtC8pEfk6gwMUgmaPhBj62A65t1D62gBT9sUhE7rgPNerBtHTRw",
  "key38": "5JE6kzRpNKCo2t7Be8b1SEVXTvgsmu7u7dzW3n8ZkFMBzZXv6o6tKajk8ehidtVjpdH8JiYJCiZrXXQwSMN62PeP",
  "key39": "3gbDAkCVpfJgoacBEN9mjpUXa4sHmdWZ6FJZ8DwCAJ9ZgCK2p7KkAqjNypvKnTPK8jQSyKCeSyQxjKPqkDbWNxhz",
  "key40": "3ipMFq5DtpX4W8jnBJgJsvF7kCUUyLqV9DHSNm3iqdiQnfJhsNfSPcTqJfkrmvLyZBkKT3PKo5nKdedXPgfarJDz",
  "key41": "3Qsmn2uJnar4tNDTMzRH2w5pgMg12vvdWK9rwEBuiKGd9KykDAKUn69xeHrTTv7MfjpBB7WPVzj5oxX4XR47paVS"
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
