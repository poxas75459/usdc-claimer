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
    "3paMNReMMkiJJJ6AAgb2McSQqHvnnd3ebcbdhqUdnob1gfKkVWkAAwcDodrj2uHqaEEB9QBGrUL9bBPHnoCpwwSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCnKc2Fq3o8vM3hyS7154T9FUBbgVEAvcLVMtuNtdPeVpJYX1nmhFyJqHFbtPtp17dwZ2GsX7wy9uKUb6jSvfJ3",
  "key1": "5ZANg8ztWwZGiRPrCuB2fbED2jBQ5F72MSfvuJDZApHf8Cf13K1eBQVCDLet5L8GKSAHKSCqKuCsF3gqDHmQuEWX",
  "key2": "48SJn22Ww9WvHHw13pBR7P3q9t9XL4a7wxpurCsYR7bYGHyW1TdrDuG6dJqwmvNzmMKc82uQLvZszgqzbSrW82zg",
  "key3": "4bGNsoV1AEpTpupvmp6iqeRL16mD5N6SRHsauJrydvpZ46VFAxyNU45CchujjLn6tFxj9r5HgVfsu59p5Wkcbx7v",
  "key4": "pi33WmWr8H9kkGMixd9csYQ9F8DREagtuGh9jjyYKudKcKZ8psYUrgbyk98LUPAaoV3bJNvFYftyPEDFwkPHBtR",
  "key5": "44enrohQkhjPDm82nWjfQj8c8nvPWQH6TbK4XovckrcjWNkNTrLtE7asmoU141FTQWP2eMNgLjKYDLzEhzN9T4ZP",
  "key6": "5VQECnXBR1cMAnHTQ1w9DTnbVbFFAPyoiv9kyPWJeSdb5vdm8g7QGhbQNJcWUUoqKAsgTYp9vLXh2FK8rDkgXpUs",
  "key7": "4fsqMEXQhMdbngfbUcYjUdqbNtbJVYDJRVd2s4pfbE6ywYTSDwQ6aLibVEM9ESTv3ogrBVmeJebh4BDg94MruoRc",
  "key8": "kXJKc5FLxQA6mFwMYceZvjTViZeDJC3o3HZ2TAyJ4C9ENffoGKGHuWCnPFq3UxsgT4nWYceq5SUyWCZAwuEVNPD",
  "key9": "2smn3czDHuynfvsrabiNuNQ2vqj6NW5fZe6ExTCsFD65p48umnscGW1YVrrZPARMxnUdNWW4eU3bA2muKiPvKbQN",
  "key10": "5CcEzmGL9pcYfDB58AtTwzRih7Kp67gptEiTfo2ZLWTDB9iFKdCtT1XUgLUh2rwMQt7HWszGGP6wKeWxqWPdzpEX",
  "key11": "5e8Rg4ri9dPbG26Fv2HsSvuCTWQLKLVfNEdyxMY33yq9M3Xv1GRMcfqJFBRrKHnoatgczU2weNC93f7pfo7qeycZ",
  "key12": "3QssPUZJd7VBPcxHHvZyNQET9n8K3p48gtihkTZHUadK3YTdhZyTezu53mH1p5VJrtA2GKpEwhxRHf7etN68sCMZ",
  "key13": "5GZ8gw428taH9FZMEdfFHaGwBzm9QKwU8gKu9bH2HgNqcPhU8GQAB59HBtJivyhaFaYxTGSACgE5PnbtLKPaCHEj",
  "key14": "4UDEJ7uC5FyZzLmMVxQhAJTChEvPCCJKgxtDEVhPDofJzEnadVwShi9ou9moX8Aw7Q2ffoQTahrmLTQVNWpZuLB2",
  "key15": "24CtqFCYp6WLoJd3W5aH8zrq1xyBuqiW2vcsKtPhCEZJyZ1exLtZUYwudcQ6Q6qH8T19mvfB5GcbCBwinNHaK7AJ",
  "key16": "2guU9iwUhy6dzhoZDfiuJvRySdGbDr7Bp8wMzpSagTNvc3gVmjsUqnTczyAEu6o4p4HNbEhnHqvMYNrDrbmAcNeQ",
  "key17": "5eh9c2Vt6mi1awh2e4h89hKZQLaG2GRirPqPtvnE3GnTyzbAAQLieDAJv6ayT2cvNr6Yf16ffDFpnhJECUAHMFox",
  "key18": "D26uxhwjbwBT6v5tV6yxgRkA4w6o5Ve7jzftz8FjCYoUZGHfTu6RMy1Bh3Dm1awgFN7uUZYEGcf2Vkb1cQVGs41",
  "key19": "k5gg7FuGmQvKWbnSRB5qHpyjV9kdM1tVuySztZ19UHNgdj4NUqJpraVjyJFbqKqG9qgXWYSypS3EySY1ts7pXUW",
  "key20": "4pXz3NUieBs9P76aWufFa6WBRbzXVPCZbkh2CjahkmFAwHpFBLHT6whCWm9jC1AZcq1y2XU2iydDowwNntXYQTXz",
  "key21": "4JbqtViphjVziWUgmFWr5NLPBW4TrE6GmesfVqT7YbsGp16thuui7gsyPbrPRXXwa9UiUqQWs4sQcj8sUXEbp4DT",
  "key22": "1Re3QRTNhvLTxKSHdQbNrEcD5NgZhVD6AyqMQnRDZbdmEcMtmp6d1Zn6wDNkt5wvU32PdsVodJeZBbHyesMG19E",
  "key23": "5gyAtkh1qEAposuHcoaSZEjs4vDUkzemnYHhSUFJpWCxQiFGp8XSEuUra2uX2UnJCk3y36GX1dmmgvtiQ2pzbAxo",
  "key24": "469YzbXdG8HGmaVss41rkUS2x8eYT2ZtEfYrMDU7zxgtn1EBnePnwjNK8g6tviN6rMLWQNSSKtAVzk9hJVTxqpVx",
  "key25": "5MBWT2HpNaLmqr5eGXX3vQm4ehtCQsLzRvBUXMnYeZe2XaPpnuLHA9QnyrgVzKPjMJW7kV85r7E3LANAkGtNj3U8",
  "key26": "5N28sWNfjJZymaQgMUCZvE6iKdMbXntGiyEvSDHnSLwSrkQ7JJS97MWMxaat45Jzz1RR8HLnReQ3sv9LDTJysBcR",
  "key27": "233b2Q7gR6YkVtqHLGhX4aZuzZSeHki3typ7Jmwym6g2jdBNJ2nFYRFHuFBoXcmSGK5vHWehXJEwwvQMS98Gsntb",
  "key28": "3jSQBaua6827PFqr1YK8wMMn1ukykUSrsrCmJsjyDrVEuxFhAGDEM9QyNusRaAyuahDfDS4eBwrTiPJkAxJtPUHD",
  "key29": "eFchjCajqS7zhzjLZtkafVrDYZBpbSz2JvoMJFbiT1U7f2Kw8CXCXTcMZNNwT33cPsigPEoTzVwy9UHGq6qjPQY",
  "key30": "u59wbhkwL77vsFgiY4jn8PBAqKE3H8VnhyocTATEaCu4mK5riAQYEWkgZ9ZxQU67fR81YkJR14dz6v2iE6XDgQh",
  "key31": "4WwWzpzspi5aJ5cMF7itn4knq5FA5nGetDf8LP6JSbuqkjccJwBcXAKVjHBH6oN7U6dbVoKxe6YPWxxLcJN9r5gy",
  "key32": "vhxXVXXxHcSgCWeceJh8mqHWeuz6tD1g4p5tEQqtnaM4aTCByCwDj4pp57PnvfUddxReAkvMCt7gVAAL2Qqafm7"
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
