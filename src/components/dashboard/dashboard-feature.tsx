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
    "4kD4oi2roKMKF9N7SyZ3HY3egSgXbTzJksjcP3mFUaJU3YcYX5nohjF68upGXRMiMxVY8yy3Vehuez5P8FokDv3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26hWpyCpPQtG9aXJ9uB99JHToAmetAW9dLzNo8sBApXZsWvfde3xPsY17teMYfgfjGSuAAvNsMnAbG7CkdfeQZoR",
  "key1": "4PJAArvHpYSnwdVWVCLCN4MRuj5JTchuDyvSHzyCwvTFhkNj4YsocPFMuRLm8LRbWCUzoF1aNtrpc7SUQCqTGiVG",
  "key2": "45gs1GrW6q7VQvsxyBDK2XB8M9R1o6PsBv7dQuRThy1VpxbEA4UaAJauCzccEFc1rQeX6rVYjWLcD9QE1ZVyAWzq",
  "key3": "4HdvX2xWQdXVd3et5CBnC1oRa5o7KcgZsYjKedzWTLVGWeaFnVSctK6wjc2n2QgxYqo2Tfp4rdewP3oDyZAMfZ5",
  "key4": "3xJCzyeN3tsUvMdsS5kufXTmYANgSVXaWAQukDVB2HkvSXL6UbSM3o9Lmh5c7rfP9FvbBHuDMmF1jGZeKFboFszz",
  "key5": "4JL9oSoezdeqYSnwa7KthYZs7vukKmGDwJtxyu1HdauT99rupWKMtRsZZtSWtj3yvgFK4waH7ttWEVwhD8ZxFn56",
  "key6": "23n9yjDs9wRXkUDh9XopWiLG2QNgoV4ezfBEeWETebQwAnQ7BmyAtVAiEERtLnhMK1HrPAcswEqZWWdpeRMnfmBV",
  "key7": "2JVSgbkvxjZZLJBKyH1zfdrxw3CTsam6hPmx27ky35HkGHonVY5xc8odVvnbwJdmPAXX6BjbtfByatsjx5WpX84n",
  "key8": "39BzUAerw1aukdMbuLdo65fKsCkNcftFGZb1eqc5TTDPRmuJyD83trracSYHrgvM9aSkSxL1yjaihXBdQVPXB3WQ",
  "key9": "4X5zSoy5fQWfeG8jkEUTVx6PJyT8YA5DbiPvtJvpGTkzrrstSaSZFxkuTrHq28qf7QUHQggDouQDaQF75Fwk3iUU",
  "key10": "4jAatsQvkh8V2V8Y1SQGdz9Gyed3sBuXKNXZXfoPRfxuVcKU81NJ872J1xpXEADesmZNJ8TrxEfNAYRnyB4sE5V7",
  "key11": "5SrVntDEfhQGTu3umC7HkTG1kwNZ27cidKSqgnSh8WRYBWndFDvqXaB3RJZDUuv1PEymXrtyQtUqFnX57thmQy4z",
  "key12": "2iLRZ98U2h7a4rfrXKZbJ2aRiXrPKEaxH22k1ijDjDqCgPmWDSUWSdULnKKmwAH3YnUEyf4H6FjEYMgi4bAhLo3C",
  "key13": "66QzTHM55u7N8S6fVjdPkT3UreRpRrCTMcx3ycejArz3opNYr1wE3mGHLK4AhyKeJZtAFkET7SKjme7ENBTSgGQU",
  "key14": "LZpkHNxiXCkXunKxJ4qdeerR8nwtpi1NVbk1K5QyWvkH9ifyPhyojQn4YVVw1NHKF9fuTaBKdxZMvB59u21gwn2",
  "key15": "5JeLEffpeyWhQhHPFBxSLs3QLAZJWdGyRBbn2RrdwDj8wJoYVvfuwLH3qMerTJZE8LFdR7RbVipkL4YNWWK791TP",
  "key16": "4nFo6BJPbEkRbvQFToTCqvKpLsJwgvdQsLe2iVJF3HvxZpq6YgpnQjjvY9KgxxVTRv7Yic9qg7ssTfyktBA5n4LE",
  "key17": "4CFeMJUBZzQTLsMWEUJwfUac4CgH69DTUKkMoA3z4QSuugUQ9bXPwpJBak8i3o3aPkQtc3hzptGW6kUkRomcq1md",
  "key18": "3SF9nJFCernLULf438rFZUL7jAQA84agYLE8VqRtApuiAMbvtiqZDgvjuJviJs2FUQvEuVy7Sqg8GFnJsYWqZHxm",
  "key19": "57UAtZwGGXd6ytidwJHtyQGHZeJQUxaKfjDA3oDASBe937ik867W3Zx3u1dDWPuQbyiMXnVaKvAV62vLHwVqCJMi",
  "key20": "3LoTWPny1bHTD4Kv3T3kToY5pNNGpKtcmJypb2wFSp3CqKcMTyJ8JG3VqorxCayfjr8pitXT4Hh6iH82gJTVFs1Y",
  "key21": "3MZDgHm1FyMXeFW94VM5yK98MhLKL11GnbLtiWf5acqxSKv66vhKSXncZ3wJLUJADQaJpHcPNqDQiH8LRgAkpAWq",
  "key22": "HTPAgfMUAcGpx3Uf99W1yvCWdYQhztAVASFvgVjg3GBwEw1jKj8pZPiv9tJapW8nxWxuMFSLiW5f7Hg6mHmJzYe",
  "key23": "3hCWZXsjzDQ1nbLpXQ2N7C6CTp9j5WNnRsZkaagyDmQBa5Hp35vYeZJvueG2DN5zHf2KUdDAJL93cKtbNBF2BevB",
  "key24": "54CSaPRtCNEW7vc9SJRPDFDYYLHZDwNrfrc2WeDkXMFXwWtYDaTA1fdLKHb6rgwxcX8gMkvJ9Qhf6SMsP4LH49M2",
  "key25": "2o5fc6jKEe76AdQ2Lfg7Kdqk2pTeUKun3mi5fBFd9XPcDzotePqcmLDG8kKpvTyhvVwgRSxsr3eHXCupiEerCdnu",
  "key26": "Y164wkGYnpxUq1gpKvrYmY9LkhwDHYQDL6LQFzAUzhb5pKQGMQ5ZEmSkQQqheP7uiQVXGf1rfVgHP8QPDgRF4cu",
  "key27": "4bbmemVzXE52MFag3uSAk7gAA8uSAURtUt5fwH1Wn4WpvuTEqB7v1ePnbxZKiLZcvkEaoKtnhWFepKVHh3YFtaWW",
  "key28": "2GQHJCo3ZSPPYWPMBJPpTGGoDoVi1dLd8SHJR98G7r7jaoBYpsXjR5s5PcpGmVU9UkiVCtWC71cprcYX64wm56Qw",
  "key29": "5DWRik1RLCgRt6RNqet3jHh8THK4NFXNUFsaoDA2vgs3pjjvJUf5fxch3bPF3zTLj8EQn6XzoV8Yie57rFf7XWUg",
  "key30": "sCBSX2Cvf8h45fR47jdBMz117eLxDVtAy6X5FcqJp5Z4EGPzg8pVEkdJC9hDXXWUiGcX5kGteTicb33QRNG8Y9p",
  "key31": "49i5YmZiTj6fWbayZvrUVawy25Fik1YWhxwrqEEFiRGUsx6pyeAg5xSfnRzpG85wNqQQW1DCi3YvtVWrKFqhTo8D",
  "key32": "3Wg4sj6s3FBuRQuMgF86asYFnXtxycvdTn1CtgpiUSFFzv3J9dbg7Cnx9KmAkZC7CFbgqbWNTwG9aoCHq2jE65RX",
  "key33": "2uQe2uW3zJ2SZt69qCSvwHkFQBVF7wndD2RC918hfGqWUQTBFSjMCMQcFL5GnmL2z3bLKwUxWnMEEXkwyCVe3kGk",
  "key34": "4eUQYLBeArcMt5cAU6QntepYHq9gmU9Cv2FaqNKcoC5DHxQFc2tD4uaxnAiaLLuEHoq1tHNtK8GU7tMESWbqrHzx",
  "key35": "2SZ8XEQxEzVcuXXb3c6Y8MKwnmrXWhmkrDeuS3pCqf2WaitEFH4Go38C7YZ5sRt2pTHjubRVazGtBEQEJRG6KF78",
  "key36": "4TwdNUmyxqAhGKdjpZDNMhzRmFNgWvWpxU5v2NmDcn2SrSzZx5gBKYGJ7FaxqmekQKynpyg7Qg823zTG3A3nAZsn",
  "key37": "2fME91nfBBZQz8fqNpSLUsF2NXWWNwwGYZKVoRaoLPGLw1avSYQPTGdB2xQdwsKGmuMG4jyDG7chWcbttHUeaqTz",
  "key38": "7maB9CAyN4zgrem4YAHrLnYPqQxaN575ZQBoc45RpwAtk29eZ4xHvbQ1n1DxHE2XSQWYUpLBMdskdzVEkM2xvs1",
  "key39": "5B36puiemKDGspf2rYDrcewEuWohup7GLDT5GRbF2QQfZXs7DGvhXY1uMFKVXqroYUMQxZtgwS6grGwJoHxAo8hE",
  "key40": "vHPiXoBh6iAXJFUUVnwxE6n2MzHnR5qthy272WrGa2xdFh4eQbQH17HKi6FdAFvp5Bb73ubbGaJs97A62bsPB7M",
  "key41": "CDadNqerdmrbXFhKUzktUSXbtzEYYCBdCto6iHqtoCRhY6v6GB5gAneW4d7r4eVmNtoWszTyJSi1KKKYgEJwoTP",
  "key42": "3FLeePGv6ssVnW7quQHoQbs2Bhd9LktL13bH9DHqPVeL87wtDGTVhhyzxxDPSg3ink1ubJgRFipkHf4C8k7XDRAU",
  "key43": "3oVQkVEpLh6GPUit3pCbWyb1G9hvc4Q8xir26VjmPL43oJMpAsK74FrkMmkuShZ2yZgaYvMnZTuWAgp2KHxSwvdm",
  "key44": "hxE64vn4tiGnquzmkEC8VktS9RWydb6ju5Dfhfu3hinZUTSetyUJXqxCtAA3KTVFbETavgYg52MGK5Qh6f9FCc2",
  "key45": "5qhFxu7XMB2ws45y7ZMf7VkViLauYL3VtkWoC3XRRsw5MKxzK7tFkcYLsZcXStjVDTkcVcrmHjMkiFzWd23GE32c",
  "key46": "28qKoxN8RzRP5BHK9GK3jYHTWmjA68nkM75AXhr6S8MRumsdLJqpFAR31ky8wtyBVbBHEbSFBZ2XsheRgfK7suVB",
  "key47": "z3MZgGXqh2662xjHRsnAcNH7Ctgk4N2yUPk2CKwnhCMPMAq85N7Djq3GonJhtUFKaPvfnZkbbLh8KNaGtPQoeCR",
  "key48": "yzgXSbzg6WnavpnL1XPr4GdtXCNdoPNVVXj5GXQiAHH6SsxtFu1aVbex4AkxtNabkKSQQpKaA9wjDYxiHVNGht6"
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
