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
    "61mxBFRTnpkUxqj4dCGMcaigrRq31i8X3UnDgfjGdrMFH1WzYw3ms7XvqLDAQbow5h3Z6RVuNnZe95vAxHNnicxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVopvnfe1vzLNsaCh8HSSX8HMBfMPFKfyXrVtUEboedTQHBkr8ZSutHVLWGDsUmi4xQLT1atEivXtKWUHrmasiU",
  "key1": "ZA6uqTnkhn5Q78Rd4eWqpWi1A5D9kRySBS435B5dkY3ntSEugcgTpg2DoXW8Qy3PowgzhXywjiPHzjhq35yPP68",
  "key2": "4TKznqM4coqH5r5KWfeiJoaQHoPpBvb3RNFMAQ1iuaT8evcmGx54gN5fpEDRHPJ6FgDDJYx6FQqaeLUrYg4oJj1H",
  "key3": "WpX6td2sDdpQA6yh3u6FiTwuzQWjgAhS5SxT1pFYimuSLURAjwnZTVfiZvyhTffTG8rydhZQcN4j5DYsdekX7oh",
  "key4": "5aQLxDw8JQPrAx5jKpELD19PxHuZHf9JGiNCnFxVkvspa9W7oJW2jwX3DoPjHiouGAYdPLmF1FSc93sAFBW4KuxM",
  "key5": "2UXkYY7Ny1KrWPZPRgHJyR83En7raD6DL4P7oGFhRXAPXqDRmgM94BHTVPfAGU2AittDUnqiv6jU4Fu3HTTDGTPD",
  "key6": "3Fzof3TibKwvLuPEgpmxBDKcRJvcwP3Uz954LUHcZMxPDD7XHayrVgDGBsTXhpAnrhm4NuZCmJeAVGKvwSwfqAbL",
  "key7": "36zpZpA6e8RqZEzbmmNDYb8HZVELpv7cCqAMFXKyQdFhohhoVU5fWXnPnvusWgzEAF9Gsg9FmCmB7RRRUJHNcLft",
  "key8": "2JdqtaKcdJTxDkJFNPNMkAQjk98Humeux9MEFmYTwpn6Beee1Fr4VkXu6tZd5E8yRGqKdhjBSwBuXauX14CaECba",
  "key9": "4h18nURX18R6qP1yGmFB76pJB2NTVcJHUsfi8qf7FaUfWsTh8g8tyWhF4bdPsDd3FyhEgivKP7nvCBnLqJqpYQ7A",
  "key10": "3ZnhzNFF5Uj9WjLxX1CpR1WWAtwKdVZLib2pcPR4Y43FppsrwFygbi6QCEArjBA6AjrGbRQoziyxgUoEPjqnWVn7",
  "key11": "22MyYF5RPguR7QFcPmP6Mzd8QwuLKFr14nHicKGWUPQYsSCrDG5AwGy4SiTo42BiNXh9wjSoJtuE48FQti5p5ctJ",
  "key12": "56QdFK89r8YbXMsUU9SrwhzP7r6f2d98J6pBEMu3sjtfK1f3wX3vsF2Bco5uu8DPuBGqB697EE7btWKN7ph8xKbA",
  "key13": "33PktjyfbZVp1AV7Cac5LED6C1tg2X4qnFZY7a3yYAF5vscpYKnN75VPesMuHCcRaM3dP54Ca2m6TwEy9yoEtEmp",
  "key14": "55rhKAm1kTnB3Ftv13T5yGmpam7m36Yvj9uKDiGcdpswkHYZzdXe1EmC1oKSgjs77EWJUbXM58AVnrrGvMbrK3fp",
  "key15": "xe3eqUNmtoogCbxRnBHuWzXsLAWegVysDiKey9WoZvCAdA1CV5kRw5e7zrTcdum64bVvQ25mBahGJqQkr6N7y8E",
  "key16": "2xJoCiPnWdaBLA7jaxmWGz8fN8qS7185SE4TEZYv4Pmr6bkMgxyTrq5XgjLoRaZet69mxJjim6khtaLPoMoy1bcV",
  "key17": "2bGdEXt1qsH2uejSXH84DWoSNABbqsdw8ry7EVatfqNfYCeSsih5LxypfqVkjCK74DJaJrNRvGmVuSJuUcWE3PTa",
  "key18": "3RCmqGb99bTzFpNR7n3Bh1qVpytSDFKvgJ6bWZ8stxQgX47P3bj1RadA6DyNcyS4xP3z2uGV4FFXKFGojFGu9Vus",
  "key19": "2kfoSKuaRS9DPrtxwbJQ9jL92YAUgNo8z5AWRw5GL2eY96GhQeFaGH9c1RFVKFh3Wb9aAiqbgKYS18hN7MGBgXAo",
  "key20": "4i4w9oJ5V83M2AqwVHvYiEEj7hWimb3z91mXyJtKH5rz3ZtQfaWRSqem7dJ6yG2Xdq9cN6AUZSfcALH5RDt6rY4y",
  "key21": "599iwcST42g3HvxhrrWwxGWRqYM69XN6EMj96sU8FnVQp2jsnvRRLF1JAtvu2r5tCebbreywR3kt7kaKrz6jZeFQ",
  "key22": "4t2vQU7RrtaYvBCWBc64WVcT4RG4JmipPd7Ty4fEphv1aHRNPL3k5vJM8d4ZeDyjkvmvLmCxS2r3FfcZ2Bqdq51G",
  "key23": "5gPAMqxBoZMRTQDAawSk3dvQuhFBg4YKfRo7saNgtpFS3SZkosC7srWZJ3TNcXSqWgLEbxvm4nP8McAWsJTRCU4n",
  "key24": "A7C8yohVKzEt43fYbYWJfsfvwA7TtD1xv6CHCRP4JfnWgBHm2EtfYL4UZrA5hqA83iUuk9osWpjkDxv4MQhJixE"
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
