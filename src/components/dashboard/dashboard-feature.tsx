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
    "29JtpMojPtgkVqwFVfmRbtNa75kZLetaoGtVLfQ6rL3qgKAn1qVP7gYjjygyKQ7gzmcxd5ReY8yKTcZDwRLqdVvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRNEGB75K1tyF8j3BaxkVzHrnpFmn7Lh74mnQHGghhiJEdoiz8Qv5VAMzW78iDv69gAyH5dVrRJMBbaboom1dh5",
  "key1": "zDg6XDgawqEFbeZ8h8gDDbH9H6vBZfSiBDpew4z3ZLzru3AeyupkdthDxYCaqLHuzjsofFEqdnn9nEztQTAoe3e",
  "key2": "VMZqxirM14Ebu8rQN8ZtNrr8Tdnh7Rug3uSJy8TzS685o2pWcxmRBiPJUVbrMByYBmh78B2tt8LP1FmxNzFeUr2",
  "key3": "GBudk5PHzCGtYgj6sXoQqgiLjNrdQHfFLun745bPAZFMUx98ui6yujfr35TyoZpBRPqPHjcrRiRcq36UZKCd4zy",
  "key4": "4tRFTyFDK7mvqPpBk6XJSodytZJpqGk3A3bjJXaXBNt2eEmjnAob57djmipCqSxScoUxMmrT2HPcqvf1s5apiuDU",
  "key5": "3uUJSAQfVchfdSK6BZxiR5QEuqyKuquSGb4AMfQ1b1w4A9eGct2Yt2L5TLYVAw51Twmgfyy24MnYit7H76YWxNU3",
  "key6": "4AzzwrFH31ZWMcMBsDHNmWgrPwJSYdfn3kybaL86hbHQPk4GSWNoJYgE2mPtrDkbUFEouYMg2NqrWbgPA7hUSRYa",
  "key7": "2t2LKJRD1XgLpJQ2VLZBhgoZWFdsjGLpQW1XBbTiWmBY6URVL3MQiE1xjwmyV3jKYqznYdwV6hTuS8oNB8pXKPXm",
  "key8": "2zUwmxuvG2SfYWNw8z3zFyrux5ySxXu2dw5c7Vu5DDSud12MNnJRtVMCvm8aF6UFnoVkmmTysZMt3sfAoiAFpBZ5",
  "key9": "3Yp1EZD7nEshtXGN7jYtFjxVK1uSUpmZ488PtF2cysXEnwTbV1iLiCoZfNtud1eCGmWfksUW1wyvJ8nqQ9zemz7Y",
  "key10": "5xczTq73tD7Qk1ErwoQU9aFsRkJ7aNB1x41YGUNUs2KSVEJX9oe82e8e2nvMNtAjcbfJg5aqpk2nbEqcPAqohSTm",
  "key11": "9kvVbdJrJVNxaLg6EaT196BicusNDpQo2MHNmFmyGMLvwWdMnTmZtwBWLxim5SUDNeSu432aEbsDmk94gZi6ZrC",
  "key12": "4rUPyFjoprW3sv4VFWSSniBXuyLpDwQZgK5J6Mmp81NQpniwFaL8yHutKBU9AHyucriXwp8mvk3vsvwnXdaHUYJr",
  "key13": "3NLo8MhZgx8xGHDNyxUUvbANVstBokMq111admw6UjidEHazs5tcNXhEoz619r3EoLoV99iBMXDyLXfpFYoPeWkm",
  "key14": "2opb4xN9pCJPubTQAh1buxfHT6Wz6CVQntkCGXQZjyQ5RUTPT3EavKTiKV2RdAR9Cut8522hMxDGcMnUzxqe7qUR",
  "key15": "2PYjCwqCpsvh7z6DF34snhNYL4NyifhdQoMDeN1k37iU1ozgsTWR3eAWUkFmdueVErq3CKDPY4CghqKJSETeTSvo",
  "key16": "2atv5XAZmKoKtsrWnPpupAy8vtuux4SDYSfh6uzqUQKjbeJWoJkm11zkacDaZgd5mMuvRFDUMa6z5fgUfy4cfHg4",
  "key17": "53iycBj8tjP37NZNxvHUVzPatjPjrZmk6PuuxF1LaBuWE6EbyEcVCqniBaCUFCB4nbYPNB6ynbzHCwBsZejAR8yc",
  "key18": "2ytEL2aTzw1csWYgHLiD3V66s2HChTMWkdXTiUEByWX9Dzz2gorK5WqgHDK2rs7XMUYwasDvJSsPAfiQHwvb3kyM",
  "key19": "3y8VQwMNA3njrPA6tXFtHQWmJT5bEXHShQRVkPPd24QyvCYbxjkTdiAMNp39JUfGNkF6SWoZ7fp9aXW4THcVNXik",
  "key20": "5UrcVtp74rA5QBjfC5f16YANDizUw2k38eCqfXZSjg6soaQUn7syshktXtJTMtJkg9pqJYD3DLz2qZi1SfrEd5US",
  "key21": "2x1BYanzDVvtiFRmzM6XmjbdFWZ5LxehpUgi9BCqAMap13GrrRqgfgxCk3Mqgi1CM48de4VbYeBN9smkmSuQ8uZC",
  "key22": "55QU4gneuTVG9zHQL16ZeQKHRvJAzqRbBTJPNfvRxgoxWXmYgWAegdWDgFDjxy5tBZznC7kWWJUP4h72Bphv9Gg5",
  "key23": "58d4Wia11nFYkktRniyEphh8Co8GtjpbmCYSZj2qDPVxRFQYkQaLmyTtH7DQZm3h9ePYTSh246wm9sG7MjcDXqkG",
  "key24": "TCKCah4rAYnbcQKKS41PbieLMcmfVtKwUNaZKcsNorAqswHW3yFwn76D6gJiq7qQQ7WgFqcx23UwM16P2GDDf9J",
  "key25": "4Z1V5x7cK9P9f9pGrmGGwXfTUrrcgbFw5Jiu4Wa8eFUaEhFgd9MMYAhmKC17S1JGmsca9Lb9Gg5Cf8BREt1jEhMq",
  "key26": "2pZVBstKNP9xx6uw28fNudGsT99ZkVHwH6k1zUW2tKNa4edJVrMpkrJgEgE9ZTf3kKej8uaXN7TfdfhpoqduuHx9",
  "key27": "4QteKAvcmpC7ijpbFoiXU6J9pPtLQxAFM9VujGdEDxZrNgxNdcsCwfkzL8W3JaP471rSod7bYqVMg4Cj28wc9MuA",
  "key28": "2GBaqyycaKud3h8wdKQMZbUsVCrKeodE9oHYxuyq1o9j6YYSDSmCyfdn5dRYs2zEKtHMxEBZfCMJSAyEXSaHBPQD",
  "key29": "48ZuM8FWaBT1sC9LNTJssvpJPz2o3tabKsVhN9Cjo2QrW8WchMxMbzdQWfiwuL1AQZ8FLHb5gJQcwyodZ5FHL5S8",
  "key30": "63VpuGasbA11RSXpHD4qqFmo8BfMuR5BG8MkWgK8SZmP7Dq1bP9XRAychDqRt7BzA2E4wCsGyY31Mogakat6uaTh",
  "key31": "3ipXMjiLCiyqnvBW6aYdL5LfWa9RnPnBrXsTsXPTf52BDhxTo76XHouuaQ4rsQ2sSzopgseg4RTpbfDb5X5DgLyk",
  "key32": "5fR3cDBeU4byywUKNTwcFVf4fv9mfiHZFk6AcJpVWEduzEuYozmeE7s2wCZkB7XMie4j7VVhT5kGwfEXdiomD6VK",
  "key33": "p8pzTCqFkQvnBytZYQYSGvS5cHUERu8j64cQHz36PAQ9vKsSSb7rtc4gtaJZERxThoTtvCxyUdJRNjpMTYdg4JV",
  "key34": "4e3ksJ4co99wJjEQCHSZ8zsBJko7q5sBuZLXee4jUHQcx5eJ5a6DfhkWnq9kpd1c3EfuKu8HsamJnQz2pE38KiGf"
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
