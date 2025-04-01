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
    "46YpRbNVJNqVSNKHcV73xnmQHnkqqFvYXCV6TJjW9qKaWrEYZN4oScVWHNx4EFqeLCekBXEqqMFPsJn3wjNWbv1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzEs3yUaYTLJL2JMEp3RJbgGf5U6p3694yLGdCFhKDfJC87WFD38XLBEAkwKn3Rrei8DrFBHohU8DZaVJnQQHRq",
  "key1": "2rq4WzyeNUg943ijYY3bhXW1hH3bGgMexF9ScbLL3d2H3YT1YEc6u3nsUXmT9RyN52vqkPiF9k3MWmJwEqQj7qq3",
  "key2": "59KWEGaL9Dx1rezmTuk7BCmsWDbExjgffevxmJpVLB3qqC7uuNyiQQ3Guvmuv6MPwyEimy95w1RwZ3e5ZUC6gFNv",
  "key3": "hEwR4JxfT7ggzjnKVxPzoPjHjeDAbm2CoG7AqrcHNLGbc9i36wG3beTxQv5Gg6Nmeh2FM3UABryHybvHkron3DS",
  "key4": "3HghifypHEfJmq2K2F59K7G9AcjSFCPxPBjPxi2Rtqgxwo1JDL8QD4tbi9MEEBoj2j8yx3gP1DT4fvLkFamKp1ga",
  "key5": "2pjyVpCRrXVQNwD8uVkNWyFEk5dv9FgjwJikjNX69dwjKYvbVJMft8Eyc5GjEkKyLymLEZrJsmE5YUeuUJrqDMMs",
  "key6": "439tvA67YK8guZpU6pNtoTET4rbk9eWhTFAsbseVWzmxDaeFwB8E3FaBBvGCmhqCETLVPhusQGH923u9wU4qvjxv",
  "key7": "22Ec4Bg4Dba7SqVrWEKzCq2dxji13ZWrrgAKsuP8cFgCtSPR57GUHUWpzeZx43De5kXdkRDZiD1jb7byP5ULC2DJ",
  "key8": "rLCCP65mv26tnCjqh9k87s6ozhxRhk33M9jrsjUDqhLf6H6kYPbLmHBSf4fu1qYSFzvqDf66X6v1QA9J4CL47w8",
  "key9": "5xuBgcYSxTFBqmAXMMVyzKtuuo61sWS15NCrkWXCrDtZn8EAPMKh1CFtE2xArUbUQ2taPLmEaDaES1nY4zJNyzjR",
  "key10": "5i1Kr95PfnJXVWzrPznfZRZP2vEbVkgBPNYoZV3aC67XKJpEm3MevBcwi4iXt7tp6DfjkhREgpnj1x5HZLrWGXu8",
  "key11": "4KPY62tK9BRz2smsX7NwEgJH2PvVdKUY86NDmw92W1yat14UoJixbgTnr3CwHCbUq6W2JjSAAoabG424ZSBNmHmm",
  "key12": "3GWVSW9bBqUY1jcEU13XkdfQZ4kPEFsv7pUSh1jWSs9c9kHoWJwiCkFzowdHwyam6b7NqiAKUXNX6Km3uaFcCJQx",
  "key13": "3H9GaaWUCYzEhf4859jYK1fHUtzsrEVVx1ZQjvXvuwUDyXVd8GiptrtThgQWy647uTat42S9TLQkwz6c22rwmHWn",
  "key14": "2PQCobmUP5qStmNcEzfEN5fnJzAjbs7BHHXNov4u37sswzJPSjm2vnS4oji71YBD3c2EQLq24ttq1LULUcQhu7t2",
  "key15": "5a37zaqQAKxFPr7gcsU3mcBB8xhJ2DEqDpAyXd3ocqXtQheW4pB2vMZQi3KrUbLcQ391iL1T25qx2eTasRBBx4Kb",
  "key16": "2ExGbw7YsWJdHH19NodsuL27MUgvFmjw58EAQcpwxZpktdoy89wLatj3DWbnXkhAdNTP2veA896ekZ8ZNosVHXNz",
  "key17": "3jSEe6tcXnQuF8WCPJvqFerX8D6FMtiYmoFjhp8goer4xRrSkraGMcjA98769tU3A5jPNPY3FSyjxV3iYKhkEeSM",
  "key18": "23trxLG7dvzEEMHpc371ix8JSVjh57LQR5nvRt2b6CKoN3ztyHRS9dQVgyUkNZxLshyYzgmNdSVbMNDqtj6rSsNS",
  "key19": "3PsFbx1s2yUvNDCAefmHByWFykdeKx2ZmDjq9GD9oVGib1tZDM7z2TP8zYdnmQBJ1LuXehpxNsqgTG1t7WxCfBtg",
  "key20": "3TtUbGXWtLfjSWK3RHuj58LARWw1iQYsmJgTwsgQCCh8CjjySGqoSiVoeDKowVWExWS6bqu6R1PxeoistMqt1dZM",
  "key21": "4DrgoaStiZ5kq8iykPLVJsqKQdcnXZ1DRtbBQ228in7Y24QdUBfvDS9xN1Qp5jKzH7Jk8j4w7S9b7tg8KKnDmS3t",
  "key22": "5j54extSE9hft4qa4ak7zZQCiZdStetFaeoVvVKvmRa6fEU986WEnhTVA4z1FFMFjSsSmTSRc1av8xjkoH7Z3wMC",
  "key23": "3oEJnVM5FtncKxsAXLMbvqest28Xwe9PbguyLFVoY5Bu3TYGWeEzLkKoy7NDpQcNBDuS691HytKk7hf9fFygAEiH",
  "key24": "5i876xbzb8FTScLoc4RFxeZUvJWG1MhWiqqTjrKbJUghFfSyigjS17tGdmJ4KTmP94Y1TP2Lx8VJDXh4Ct8oxTfJ",
  "key25": "5ghKphBSMwjuwchTYDf1ixpuH9V5qXvuBmmpgp8xBDgNsHgxFnizpfA8PkXvBKKo6aSfasjVmXkK34o7VAFtsuZv",
  "key26": "38bcNUbvJUihZJzYxXgot39kQQJaYeqYM2xcLGfwT1oBBiTrzGYuqBhFbHrkHJfmuJNCBhSrp6PaBYyDKkPNxzUf",
  "key27": "4z6EFJnypCrhqSSCWdjw6ev2SKwGh85KzYhaQtioLMqpyePa6BKNnq9C6G3UZRhRzjp4v4rqGSC53tPmqf4qWTc5",
  "key28": "4gH3BFoNgGWqZ7LLXQrr3GQN6LfqQjxBSd2k1tT7eGnVEDgwvhJSxuJvEY1tMLUgWP3t7nvkrhtjQaq636xfyAwH",
  "key29": "5SMrpoM21op85ysui9KCSRWnkHbovtRLmg5KK9onTn9JbGPeUZuunC6Ppg1vgnwsqNpLBxGZbxfXe4PzFBggQBRM",
  "key30": "5RMMrGmucZjZKLsDoamfMkEg59VEAF6bBDQ2KytTExUw8i2qXauLbX8Y2um3p9S5HT5uUcm4cUQrKw34eEGsu8sX",
  "key31": "28aqZM73Hf88c6enYA58BM4mtmGaasGXXXfCQekQZ8HGsBcTfJLhjDkbQ2bF3LxPSMHJyXdrtLMZcbAxP6CgUJ9Q"
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
