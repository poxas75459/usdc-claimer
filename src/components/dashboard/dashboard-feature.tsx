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
    "dfLyrKY4TughDzNhZUpLFirkjb2nK6MzVf6bPiwbiJgEERppFzEHGg9TBYZNoBd7gAi916BYRX617ZBopM2XWFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWDk6DkskVpSdgk9jyrYZjhtSyehxiLWUYSEoARzcVxHAJJAjNfx8wM6rDTCf4wZgBafp6mvAx2mfwiEHy8BVfY",
  "key1": "5hRqzo8F8KJt8M8QMnzzXsJohn5cX4JEKmn4skfZ33HuKWuPCJifnYAUmS6ruxBK2UzNzLWMaxyxqfLmpBwnvz5v",
  "key2": "2JoJQUt1ADWhg4jmnKdu7SDSFEBBkroP1moq2oqbUR1nKH5e8mjyy9HbtVDrjpjFpgFJif7gZxiFDaqmmBhqySfb",
  "key3": "uwyv3yKEjfXLSwPViZH2JPtj4VZaMBGzumuYpq2wqGuHbkvHjQvCuGGEhavcWow5a4ogJbjCVSFLDPBMqmq9fJW",
  "key4": "3DSvjhx7GZjfww7ea2kVLYZAtsdSZyKMkFVda4VrJnwHswnZtbwU7a2a57ZeqKwn6FR5weTdQP7Xw1ghde7fAk7w",
  "key5": "2xX1KjnK2G65C17k2hXUqbnjYiETJfnHCPh2xaZjpPofGTQfWrS5zV3BwKEfkaJMyWjatkwhZdNuEDJTRBZu6qb1",
  "key6": "226gCQoL8EdcU8vQ95Jgv82F39vvcLdCq6qN4fAKDFsFgChbK5Q7jKTiE7eGqLPHEhwF4pK1JT9ySdL8RnrymPV2",
  "key7": "U1JQEjnRNtmBCs4ZyiJ7X8EEPJ4GhktRX5sPnj1yBvmdt6rUykrHkuQAoJe32ijf8LTWvPcuNtjN6uUVLfwPqN3",
  "key8": "4ZUNfzRoU65VyMyFPgxGJr3B1K5mxuacMSBjAzSkz9Y9E82EuLaKKbLmDnR27dUaoxwpgbi1GaDhHjpLaJeWs7nv",
  "key9": "2LzbjUiSDrFBvEHAJFs5PcgExuA991yxHGBRhs5piKCF1N8rTHaZWLwbjKGE8TptWCM5hjtDQeHPPyDnqUQ3aa9X",
  "key10": "2cKykLHMDVJC9qZYNEKk24EKrgc2V52MMzvY7JwuLoAkMe9XS7zifBDtL7q7cjPuVEbX1x87FbgXfbMBdbcgUL1o",
  "key11": "4WzrhZWgCfXhrkpLX2op8W45hejMM1qn61k5HxggQWaFqqeYGRwo49mHbqdFnb9391224E6vPukQhsu4XMqqQ5aQ",
  "key12": "vZ2f5ELtcifVfWqmy2KEDcafb5ZPtWZWZQsCdyQTwSBvU5QNsvWJvzfJk4DsSraJhjZ2aebNk4orB64HK1uiMy3",
  "key13": "3J8e5X6fdsy2kJjs2YriYKeXdJTL5wTB1ok2xpwfiXy5ATWaLRamApD4JujGKHv3tbgAqr8hGziRQT9n8dxuzKN1",
  "key14": "4m28TK86mcG6dBSvGNDua7FsUNinRSLANtN1S7LqyZsVYeSScJpHSZQUgDbx1BtRzdxSB5ah3Hw7ZajpCxLNqsCq",
  "key15": "5jY72GfGg6PHZGmXk17GAQyrNobtCqKV4DEWEso6qtT1TCGarc9EMmkLhMzqFMDiBXf5x65UHJk8sqdxdrNoHVR6",
  "key16": "Wxz79EyjMbnj9BJM67bXqzkzFYqBUZ5Q4N7fQWLjgVcLR8WFyvHZH4JRHQseBN3AuCuGQsPS2wc2CKEV7HBd4Rd",
  "key17": "4MKekZuh4GjCGqWk1DBgYEhBg6bJ2D1VR3DEYsM8AFgHzMXLuFiCdiyZ2KRwJx4nVtuiqqfKFo21RRPe3qoG9xRp",
  "key18": "nNVqCPxFnh823WvhrC5WCGwJSYkVmzWX4ArW3MyXXMXHLVkBQxKLpHv1YVkMfjdJuQZXv2xuxUNAFPCVx1KPfLM",
  "key19": "ndS9XTh7YytPzW4ygVzq524mTAy5wbpeuYW9myWeVKnre5xZm3yjjN1riNUwns5nxrgqCM9k72g4UXXUStLED6w",
  "key20": "33SXabWicQ7LV9dJDifKAybSvVCj4ra9Bazo3uL53caYAQeToTzq9rq4ztJ5StHUN9X2zmtyDxwHn566GBeAm9Ji",
  "key21": "4j6K9FX9KJUhhrud33tz16LSRkvKykjTpko1si1pQrUd9oceDdznY17FQeP4VEs29DcL6koayo1swrudLyJ9G8jh",
  "key22": "2akgR5AwBTjqjEJP2FzsES6m19Fa8HqT8sWPQJ8tS6jvvD9vDqVeWdPum6MV3tf4sUDmFHaXp9P7TTUSo4SstxhS",
  "key23": "3B4GLufEDT9DXMGxJzdMZBHAc6CpsC939JTPTjUBacHfwgJ5ZySSHRTyJUpsoNV78TF4kzr2NrPCmgLDLSFt6Gqv",
  "key24": "2CCQVKFg6PWnCbRm2NoWfyb8dMu6JYVptTFBtP1nreNcdfEEcQBxPjgpvyVg1An13fhixyQ1XtnkfKbiR4YTjGmQ",
  "key25": "29hgLDTmdmaeoMog79y7h7CBhzkGucKBgB9itpF1Dkti6KPoJ2iTvk7Qa1W9EGYmb6kb6Yzg1UryyPHjDkLoVSLQ",
  "key26": "ZaMqwEHxGFUKH21Wc12k642MVzEF1Ddai1Yi6yDbqhsrA8a3m56mzBHLjYRkCPPJqn7pyb6Z7VLNs7Wn5hYjeMf",
  "key27": "4foQhif4r1usSjRqnPnxZTAGuGb5wcwf9WVRmZjnp7p5cd2LS2VHFM4op51Zv1mezszSb8hw6NVVhFswK8VecfE",
  "key28": "44cLBPgVL3AS2NWKKppGr5K4xw5fVK5eaQLX9Bmeawfd76doWUr659Zgi9KQuxHmFTF8fUZw9c1bBUXQgPyjfGc5",
  "key29": "5YxF6dh1qmSCAxikzcq6HQwHTkCvRPpees1xFafaZRXfaVe92z5NkB7Fxi25i1LRincW1EtaayFCCDQjkLSTjvk2",
  "key30": "4NSBAwLofnNdrLjMHnhi3hSFj7vuwWdyzYjF1oYCHUn1JEUZnZV9EUCnQ1t5XkEgu3HEtQLcEJD24xGeHsMgNKpV",
  "key31": "5CErSg4PqtssJAvEtjNqfzq4QfYm9S9QfMP8Suv9S6AWckEC5cX8Ntznt88V5uouoGprY52RhXiB5eXvHdNhCuxh",
  "key32": "2D7DvyjthWkTXeyx8t7Upk3v1RtFGD3KHsSjk7yzHECkYt4NNni87EYjQwL9eGeJrF5jCMqco7tJkiE1H3UtdWsn",
  "key33": "2A1TARV9cxP7AcHDaVVJpjB2qUHMtZ6BkYmdk8UEQQ2DywXcesugSktdiFUiDvBdyFtBDjRFrJHdrWhoECgbsyEv",
  "key34": "4yonEin3qw8A7QLhHUCJge3L5154js7rNE35Q27UmoFh2Fesjx8R7SXnW5gUtHf8LqLL78pPi9qxUfxxAgmWQa8y",
  "key35": "NBM2yfJRie6bsTP7ACbQhjiWxpbKWwGpYHBWUzLHSxKLrXEeGSzTpRNkboJnxXTtFqxaeWk3SAZG9uaaoq16rTp",
  "key36": "3Nj6VVUWZ7kpwwRUroLvzVsWVxCBZSaJ25kb1XRm9eAb1R3CJh67zywuNi9HZaroF3EX87a2jWvHehDijBCx5yB5",
  "key37": "4VYxVU1Yc5816JxHVJTGF9X2NjjxE7yDpaKTMEypnhJTLAmTVMnPrjPGXbiTnSLrJRUGmJ7eDJudNVYUijVaCdYb",
  "key38": "Wf9he7HPf7eKYdrWZeCVCxU8j2zyLVSqqfqRJApvVCoA8iyKLz3KhbeFf2rj6K4G42zR796AWfodPhyNLL85akM"
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
