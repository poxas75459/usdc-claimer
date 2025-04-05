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
    "4ThWvRRsVRYBTLCUz8kdaafX7AgMm9uFWGLSvLZrjV8FQodpTs7qdGK7Pim1GUficZEYxjKXCQ3WrHGZW47Lszwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vsnbg1T4w3gUBqCeR4YLU2xVV8GraVgi1g3g5nNX8Tse9wn1nkNZySXuTuK23rkN6EoP27ajXSPN6Gp7YtQsaSn",
  "key1": "ZRef3m2Hbin3jx7Sp9xM3a3tdhmHWpbGMA15Ye9TcgZd4yRWAqkUu27VYtNHsKEuziwcLMnyUgV3FRXKuhjmE5a",
  "key2": "33XRDuBFBq1T7asDgoB9Yt8kishdd8atV2apUWTD69ZCwdweqRaXdcKBkL1mH9d1DFFrN8g12ftv2NFtzutwhNpU",
  "key3": "S7v1ifkMUiAMTkVA7G1YMYk4PEqFjDMpo9xrCRebruBxgfXws1Dk9ovq3oqxGJKJzfMNbvaHKSctgCJbHhVtrVB",
  "key4": "PbiGAMdw3Dv7182R5Fxih3SHM3jJPjYNKwYTx2qErc4oDFDrCfMZpymhq7ZfGU9QzStZjzNCLTWBJTvURnCeSTW",
  "key5": "2m6GjNLaktoqh3nW62RojYt5Vk1iPLYaGfwTmWzgh1ZnXvJ6gaoGYnMTMUgDefGkoSYtLgYstaP4p9Gu9cs9BRE6",
  "key6": "3Vq5kP9pBZ2Zyp8yt9UAYdXzaCBVXx3Xet2qDjcGmr5pa7Cc1RWTDshfzWcdLSYe6CGd56iXVfXtzPLaJpZo4Wo7",
  "key7": "43xhYaFR1wjcoJcYLdAn3tivtkkVSBXU5n6HoRFp2Ucb2rfBvFbtX5jH8NYFUyKT4Dw4ZmPjJYLt5T473RkqBmNm",
  "key8": "2W7MhjafT7uRvawTEr3JLgBpBYqL9EZ3PkP69AVEb1EUrqvuSZxEArtTfvgc5F9saAAztq7kUF7hKhBnvSLrYVZL",
  "key9": "dEfChdKucRjSGoFNCB6tMRWKH17m7NEJzH6QzZWL7t1NLQSKjVAraLJ5M2ScGFKJqcr875JzmMnWuxQ4F4M2y4Y",
  "key10": "5vdNvr8J3SAPbtjAb9FRJ4Gg42D1gGd4wnezpwfXpBrzHjS4vypnXvRj2C2UgQhMfRwMHPpp1JR7Y9F7XingqmZv",
  "key11": "55KBNCYq9aeHMUACXV4uRmon4vP1hXER2mupULAz6TeuLhrRd5o9LYtA92JBLeLsU8sYpaSvuNpKsvBgD6eMJin7",
  "key12": "46VU43nZd5d9QnwzRaUjAWK8y7787Lb5GmxFdUzdwsTskntDNg11V3c3G3Eu3GmWWXVjYqhTs6mGJKChPcLSe6kU",
  "key13": "3ovkt87AwXLMXDJvWvWRvVS7LvkiwdWV4tmVaLJiwpnSFn6GYUM66TqTRbPw6EnLhS57rj5eWKjmLFHFjRLp4S5t",
  "key14": "2NwzukTsv5NJ3RTQGeRj6rnBAZBexgQpKgukDmBCnqcVzSMUJTC2bFarEodiWTRcrLAE3U4UXgS71R811s2SNhv9",
  "key15": "43CD9UkrbC4Z5kT6X32esBke5sbtUV7GPqmJTfRyTV2ykjQZQmHigX142PwwaiXZXm9VQuZG6dtshit8NAbDxgzA",
  "key16": "2vHvifqhWnh26qrYvXDyyXL7qVLnJtYh6CN4D7SvDspucZhjycYSTVJhAUm5sfUX4iKMRRwkPLyi1NsBgS6dB16F",
  "key17": "5qX8w4yy8nRWgTUXJgDu9PCG1x5yK84k9iwLPhpYfNLRcTEWusjMFPuQTracakU66BR8aY4tCr7qJgYvRgEkicH4",
  "key18": "2WuhAbstrmVkxZjcnedyUkpvkek7YtzPMdDZr9yPkkJ71RKZytgeeM1RsNJB7HvhUoPChh5HJs5TSV4MStXgsqow",
  "key19": "2nA8YkiDj7ZQgawCkfW4u6TGz3gBdsHjXNqSwi77vEnysuH4ji3NgBi68fg8b5MPTJgnNdYk3Mn385b3aR6BYXS2",
  "key20": "jid4sYSsDYtKddWwSDuMZNuNwK93cf1SrffLbFtAntvdF93dmajbMU8kLNruDH22w3sxAvWbVfMFfJjBgrfJdJN",
  "key21": "ypdX2idNHg6WHRaS2wo89VpAHtPghnwf1S1tqCScxhoiZFvp6mGxK2Y2VnugztN2Y25hBQw8WbracdiLP3ECuK1",
  "key22": "x65upy5uUStFErULGUkNcLPJh1zJ6tRZAfnUUtHTZEMJtRCXycx1WZjVGro5CQSKjRqkmZ6UotA7VkAxGXkxHjG",
  "key23": "4sn85BRamNmYaixGCDBW73JtWmP7rWs7MvocnDoZJZHK2PAi6ENPZLRATvU6yyKYBy5j5i8HgnjgvLycRTrMmWnq",
  "key24": "3CosCkXJMgxHovDCHPZXmw4DDpZhmWjHRaiadQdfRKgkBJkSeLrsbEcv3q1JqJ4Mh5xc8TEsnuYQr5DcPUUzEfmZ",
  "key25": "5ZwXDL5Hw9BncioX2Gnrjvyy1LHMWErpsaesbpMwwEi4ytJQZ55HU5V8Q2H3NazEUym1J7RDJnHWCZCKJGMfyM74",
  "key26": "2u5Vi4esdSujtUPsCn7s5yhiRCS9dUtjTD7dcR7NebDtDdoWNVQ6LqZKkNFfTAA4McSoH6zBAQ4Q1becByf5Dt1z",
  "key27": "h6B6dRo3fQX1vthCVYTNp1hW7pkzivn1Zy7GTrFPYseqrcyhDHpXUfbYgZdE7tzkGsSY1tvNmBnL6W1Af2ybBvL",
  "key28": "59MhYGbfdLbbyfUmTN7qGZW5nDFYNuKue11mGh6wh24w851K6U5UuUbpzMCMfZhWbRHDFHJtfbDarBYYbVQnqWcf",
  "key29": "21m369fAq1y85hTwZ1HEoH1PGAZWosWbU7dyBUMZNsUigSMdJknCwUNoTpvLKRhnJYSzmo9xoigNckqaxtFEBYuQ",
  "key30": "2BTGb8fkWYjnXPwudGLnRiYVw1ETEb7WCXcyJNLFbEkDtgwCynRcffkS9QKYSYZzogeWUXMgMPwV8pioxExg8qyB",
  "key31": "LKcL4iHkh3MDxLqkkxKqP7dUrUxsmUnAVS8NxA4YjWm6gg7yJkhzZrzLtUi2uPjAoqCz9MK3fHsr1G6rmp24nmW",
  "key32": "3NYsqt9u3GaWBVh2xoHmtgRCxbnTECn1excCZrS18jLA1dhVk4BaDCZLH2wVC8GaB7LcGf3enP9r3JQ5WJzVH5sA",
  "key33": "BjZWVhEFF1TM29tvVJDrBPxRQDJE6Qshix281emJphS826d3NUNyaou75bh2vQbtw9ncmCvk9TqnLhqVvisjgbr",
  "key34": "5XBCBSRd6Ljx1K2qfdCVLzLDSvbZzaz2os1A1NehmFoVBG7yCNPpD5xjyTvNuVgfA6mF1xq3RTMC6JLT81vAnKji",
  "key35": "5DNHqVvBD8uLXs2Eo24oJJMEKxQBw52nDKoyUnHq77XQ7btLpx9dGL9C2MZQAZZy1szpuSQNG2rLYnByA6HCEYfr",
  "key36": "66XTd6vmDqwdNCXEiLPZfsAVRraBHu4y1Pi5jv1Vts5ADsSoB9TvnHYEDCgZpPM2A6fkZMG6o39TvU6HUefwZzXN",
  "key37": "441L2RFVvNd5GhwqAYsoiou9qxaLWeMJk9EjT3cUaFzXQygmoztE7Uqg7TeeVpUNu27UoLvUM7iMkniGzLg3B3VZ",
  "key38": "7HZrXr54sN6uRqYXcCVUqf1EKvtLYdEyyXaHjdDTq5mopoLigL8LYryxNMVeidYLyqg91a6V8eeV5betKZbDXzp",
  "key39": "24Mx4bCwfRwxUmAoTwhEH6LKLUB6CBnsPokrGWTQq4WPk4QwSAsrYMStyVMHbZ7JMxuuqxTKVyjbgFeLHThm6i71",
  "key40": "3Gnir9WVQyqYWrumXuWBJjbr9cfDevJpSQdgLhLPrM6auw6tqRp7JwUcCQzgcDVE2cTY94t4UwPcD8Gkb9tfLJZH",
  "key41": "4hzXRVz19auEmADScthRBmVAbyBVgnbeRETLoYDVST6MvWSWFDHbPnw3rDzSk21jKDu4NsafSCovVM18uSqmZsAA",
  "key42": "3oTSLys15iKmMdapFjJpnspgvZhD3hTqKAu7qBNmBGkhyn2V65hqWozfm8ey8R9mAvVEdkDbvugdMWZnJt4izgXu",
  "key43": "pAwprmZe6xaitKYQKnkVY937rxzZr6NXgNRmXfmP3ruJcNjbYit9NLfCm6rkfpV29iN9BnahKFM27ZAi7ESh8y9"
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
