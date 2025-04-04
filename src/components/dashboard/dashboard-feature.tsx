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
    "isqX9L95MGToxz96xS7MpZakw1FvKPuFSR8rF9q4fUTZvBDWVUtFRdNpxiCkXdCzh9Trbsy1HieySGM1mqrJmq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6JL3RSrHNeN2MPqLm6qWRjyHCKa3WR8H7SLBtxAAU4Cxd5ATHQcW4Zzd5TStqRLCQAvcMzJ3QwxTRKiqTVTaRY",
  "key1": "4xaLfPdmQdJiWM7rKZPxc9uzuvoHTgQsU1JFKQ8hQ37qKFh4sWPEHqMqFSTyZqASsnPcPVg7vvsD4FKCAL7vYkz",
  "key2": "348JcyWzNuVaSnjceiUXdBqeiUp8eNftXb9r2vhz8tHqysijtQuXLyJxwJKa5GtahsXBqQn2QvhHAMifEciZGLYb",
  "key3": "3xoLF32CwHEFZnaDC6UqYaMt7NSM37zsy3MVWYAxJesL5uvx9NfGEJ7K3yzLRcEy66NgVmdJotKfAoAz1pjJujQ2",
  "key4": "37niL47ngRGAYGJKtWYZ9QS74dPDyhB9mYsA26BUBNopRQmYK8DtsAC3DT3vr7W4hSUjoDRhgaU2igYp9XSr14bd",
  "key5": "64B7bf2KWN4A6rDnPNy8NKmWjeo9VPqqxv6AvKLVtKZiKASWuBqP3YpMDmL2PgEFcot3qMwLppoG8ZEwKcsRLrCZ",
  "key6": "3ZbAonZ5of1bcnDJXtuqwt2AGiFVkDavWaB9XAoyj4mXAJufbiiZkLK8V9ZADQiWeSywL2bBdYkwZfi2LMu6tocw",
  "key7": "5XARpXTjLuSyZMBbgUTWPRzfpt2zgkAnMcpqBynQNF2R4dCiUkKfGjEpapQWRjF8MMFXRpw7n3XeduUN6DznaUDB",
  "key8": "5jFvQbMS6C7R3HvEqddtmjPorJoy1DgF2MCi7YCwr4UaFnKiCcxYsh6m2H6FnWDxVvZpdexi9NJL74ebsAHPoCGo",
  "key9": "3eASKfozBDFLxjh86Y9vFa9oGsxcRkw5Vpg2bRMxKHD6o5Azk6cTW12QZKn92ZjUs6yDPium49Da5zYthJAizTaY",
  "key10": "2qSMDHPCPFrSbopNLkRurCkw6t5zCjZ7vkC9v8xX5r6qxxj4CAdTntv6AauBfs3qvCiPewoJ75NpeGXUoB2BTdro",
  "key11": "3QChog9pSFa5BHiC36c7voJCc3ZwVHWjNErrSiawsQRHqhjCmkPUscR77WYm9gGoRmirNGBptBxAQfn2eGGggDzF",
  "key12": "3rmYVyfpWMgjUajFMRgKLq4K7PWTqZK6GttyAks8jXuwKvfLgXqcPr3akbxPs4EChkwiNchWZicuTaMVGaXweWph",
  "key13": "5E7h4AvjdDyUXZCaJA4UMgn5tTBEqXh1UtcoiwuMaLqxFm7zi2ixwvcqKasZQtNRAxNdZPDgFKkVPgtodnBg3Rhp",
  "key14": "3QeRjcDpczUUMWnHjSjiuKgZPDAnkPzFkax9MycRfafn8Mve5vd8JX1vtGdgtov3qmQxWHRcnnZfpqCDAzMYwHdm",
  "key15": "jJ7hGieEiXyrkfvyhSmkJzbqnPHA1awMLpvfx5aKELHABbMxm3yYj21bQkGQWV4mx4eVmao1Fqadg5KU6YQqUE7",
  "key16": "Rg3TR4HR9oW97ocapirKBP7chqqTndVAqf9WrHAPKtBauFq2Z6wbvjfdRH7vdLaoLqEArVKdviAScVu1LzH16pq",
  "key17": "5HedRj825uDS5dcoYFkHdjKaitWpUpoieqhfzZngcASyy8SN8PatQ7p7qcxWJEcqGELPCs7X4DdfVTFCUakGMV7w",
  "key18": "4vtKycz2nP9yrqqR8gHw2t7EdLvAC5UmBuVWxQtV7Y3sYMwxAuFAkt9KcDra7gC4fZE4YnbPxujeJ7wGteXYo7hj",
  "key19": "573CA7YVmNxiAtiCN6bTA1Zyjg2vTPmc5jCzvQsxddrweWCvqvj1EjxAXSy9T9i4iFtsrHp73vJSYaCCgzAQJe6R",
  "key20": "92TtnXgRqeC48YL1WQFgscjMqLZCHCST4Ss3izbRquaDgDQwqQFGDJKUzmDyEKiXhT6gKeQiE1m6cV2LXrGiGcY",
  "key21": "5RMoez2BMLF1Rstg4ubsTTvwqq4CbKR1o4CvwYJxfZakBhcCvjfNbefPYkaANq4NeerMSk5VoDvucGE1WJkGX6HR",
  "key22": "4LQS9YQoZZDScDWQcYHowFFyv9W9qvrNS9Eqp2LeCtDuij9AthNDaq2s3fr6Y1jxPvBrDvwzAZkwKiG2EffpmZFp",
  "key23": "kSn2kTBFnEXgkUQMPhoywRPyTDWu8NAFtahS7e5dLaQG7V9bzGvXAvzYomEvuSk1y1aLtBLn8uZcGvAsB44G1Cp",
  "key24": "5qBGN4qZvri3aYBTmLiVoDsBYScwBDnR1Z4uucxU3g1sJefRX1Lk6sucJ54NarPi39HPRUg3SfguMSWrdaparyiW",
  "key25": "5CMyp4Y6pPrDRABurKqC1dftVdoQ2rm2ybSUJJxeHyshyBheg588m6Ct1tK3fMonHv3mA9WLNoMsbSHp2v3G7Z4U",
  "key26": "4xgNG941KSwfnP86uPq9vwEjx4i6UgDLEyaVYnCP2UYnGhDv97nT7jAVKWYRpbZR2v2mCN5RBJfqsWbawy3A3P5e",
  "key27": "5U8BDD3czsXSZT9D2d5WbfcHAwd9rL655bGyvVtWZbpDUA5pyQHoawUzVYqvCm5bdFtroX5zLJ5QJsKCvSzfUmbm",
  "key28": "5qL3zUP8oUJcjqg14yAE1SZes9AXeXe9sPFeqrxQmbp2L8nfwaFbawRE1kSroUhAkD7vacN5pf37Qs4UuWx2xXzj",
  "key29": "5XMtxfxZKokRGLVaApAEbbZ5BW4f9jpoEMSrKqrUcZkcEvwguykZHHmD3qSzWr3NfwzauZUQey4dnCLh8MvcjATA",
  "key30": "51hwAb6dGM3kocMzPHNPPBRBE4wR74Je3Pye2ZBcSzTKhLqsqK2ZM8WiAa1XYM7ePKArZLtJkEiXTh899sXmbZWi",
  "key31": "5f2Tb941rbTpBj3baVd7ugrr5PJPtsRqi2mvK5MRub1m7HbaP5htyDTGCmEQEwBxN8KMTNQuAzoJEHu3GyXnXJoq",
  "key32": "3Q3wYfmLeZgPU2PDDJZCdWQhJRyvgsnsfnTxJLyTQkN2Ta74q8jwEeKAtcV5scrQQHnw2KuXma8xy8YvvUExXtnV",
  "key33": "2ArXRaFUYK8NDcvD2VmdGX1yL6xTFogwH4mA7XWPdoQU8Egcf8SXrauLmgta7oXjeuiCLXRJTBjcAYo8FcXD5vLn",
  "key34": "27rn6HftiY5uvHhinhDfgfXEghLuRzhVz5gF1YJC2vy9iiayEvw7oaADhWXgU8hSsBmVwVuzEgpqTuqbkDxmYuBg",
  "key35": "2ArMu3zkH66jkZEUvSH8g7osPFPwYCms9DcvhxV8aea8e8d1sgvzvbhDv9UYA3eLzGaVppc94VCQT6jKH6iEtLyB",
  "key36": "4jti5mVejugeXNKTrZJrKzZP8fWuAoZxiLZjH4rZ3nQzgYJJ3911YAYvoGsr9QLvku1KQ8XUi8tT7SfaR3c8Dm2A",
  "key37": "Ma8gxzq9eC44c9Asiu5K7e5JGPUJHDPCnmKa3B1TxJjt8R6YAe5YxzcabT6oaR4kThah41wjxVV9TdKQVhqM54m",
  "key38": "41pPfSDK9P7Jb2x2Qd2qychRjaBV4SQ9EiVyu6WMpHk53BELZef9Wk4GtjKK3j8gwrGhxkEEbfE1JufhmPmfVXAv",
  "key39": "5gUrsRkaztSTYq1azQwG3nAGc6mUnphd1HvF25Sgh5jhSBJnULLoBYPNWn2FibpADKHHTjrenZhymwuzL8xE5DL5",
  "key40": "2ochkYEWjaY5Y2XXEQEGL5Dn5z1dB5xX5ZjdrsmsQNzsMQGkVPwpezVi3ZDpz8dj8oWFcNpsJHn8bM5DWnG92iwj",
  "key41": "2G3Da17zHmrPHyJsTzrpdshpFGwXC6ctf6BZurf76surTrSfNf83LEkyCJhP7x1GVKYJbkgHvvqbnvgUZ2ASDrew",
  "key42": "bCj3qUsiZx4fxFEarbTbsJt8JNsFyeJF3QuTxtkFi6xKPRse7zGdXzAL12pRhMApndEymm8CPxFwHwTTUS3wLLm",
  "key43": "266x5A7woZCb2dBXraLTn8AbBsz2xFyEdzerRZwZbE1KNPs6aVDP62epSX2ZgHBc3KYzPYUWVQDCKh8W9xg5HWxk",
  "key44": "4ERswtcc2gLkSQxSgQhcB6Ai7W5RJWwctPK3mxq58k1n5W2yoF3bG3cu8yr9e6CYAtcjkAKHxTJp8ys65VNWj7zq",
  "key45": "BsS1z9WoKnJu2CukdEPohsFru5jyi1m6tKajS59J317LTWEtor7gujYLqEkVVAFyXh5Ek6hkcic1XgkiU3BfMcb",
  "key46": "2szQYv8QAXNFR6Xbmtu43KAKtR5pY58XC6Ana8ZLu2rHyxMsfLcnTnGBtkcgbHmBeXX5cTurAveLBi9gRhA7xgvT",
  "key47": "5YCmYxeuNwtXe37WS1VJZodL1jReYBThwC7PtPV97uSjUbMptietsTPGPeRtDbFGtZYFfqwWMHzdivpTTWJXiuHv",
  "key48": "61xWfvBijowiuoCnBWeraLz8Do7d6fPHzg8DeGQxapAkVAppwnw6GDjrXqK3ZRdSr8V9GYBYzN2CUFrZar57uQdp",
  "key49": "28aBxYCYDHwXxnWpQuAznbzbyKyqu3qtcKSmkEq6vXPVN3kvtoUNE9gxJ4UWpV7rydt6eTsUZmFB34gKtjTrQkoh"
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
