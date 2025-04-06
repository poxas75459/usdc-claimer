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
    "2zsG66owgK2REAAtuRaGt77CsEvekMnHTDhxemc94gMd9msakSDvELTjFm65AJTTY5rwR7XpJSYkBPGMpVHhiVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFFUN9hc2oY5CkCH5R41sivE8FZUj6df3tWcY7nsLEjfaSKaVH5m9AXtDvyFqVVzFwReZhFQacqCd3wQjfPXGBk",
  "key1": "2geL9W8XDp9nkzTWmsNwjGQUetT7ZSyjcu7rEUqL6YJ6R3FERwcqnTwVdv5XGEAXV5RQWnRyz1JStmgVywySqQgW",
  "key2": "2bX2KkBF9gDVo9WaYkXm5ABe6G7YtuiUC7LjzabDNGcH8W7YFesprEKSRyWKfdBa7xKBrmZSkt3iFCtRJ4fF2aMJ",
  "key3": "5f8Zo3Qx77Ent3ss2JtNbKMg2H7z2dnY8EbfHsUV5DLLDKNgMw2nNb124Ke1wLpxnapKtSbJfavuHBjRCZUdnPtA",
  "key4": "4XsgSPdZsQJHmSdtSepFFJHcWfGY9uPJ4YHxB7TWHQMs4fQXRyQu3WonHX9g4tevA9jdPoXDRWqEu8mQCLgSBXZN",
  "key5": "2NKzpHKdsoRAuoXvPXTUaNNsMLtNcrb1njCrePWYmLKYNpz2k2YewS3LLxmMbNzdYXhYienM52H1tXtjvNUkZkS6",
  "key6": "4UXQEHkiubpskBgqEMkde4iNzbxJaEPysZGiANCbnfkvyr9AWnFieCksexycVR1VRpRJnQTAM5GM3R46bDzckJo1",
  "key7": "5zQZu8APBX8fdxPZMeHeMmncN7nUUL1MNndte7XYZNP1nLX6PRTvB1MoxKpDhtpcje5JYrmyUzoYkeoKiiu9oDYu",
  "key8": "4rHaZPBhx1mLEkfXSHU991DWgaXmrHRsSGMyJDrfHKADMuxjWGZhXUr3ypddVXs9sLvmwREKLeMjXhyHFGM34LAc",
  "key9": "5PWYPdyiuxAeSsfB1ciH887TvGjWDL4Zrp3zijkdFqsp1NQGbpzJrvLQDyPuKR5rcmUoWQuesyRYtdpoxw2W3Y3s",
  "key10": "3kR51Gp87w4SJ3wC9btaDpmXvriFVESeXQYfUsRRbAiN99e7Tbf9MTu23bLmSuPhMBEsXELvvxkEVecNpfVh7mMb",
  "key11": "3is6TLumNrYPKZdjWu8aPgo2RN3jB2scBETqQxJUnuWEPspdM358r7ADaYBmA4UiwknQerVCucd7Ejt71ywwHAJQ",
  "key12": "5dhCSmZdcRHRYJoD9XQUbWNZEaeJgfJGQmVpXimubGhgrKVmGSY7oZ4YqUCEFXErjptMzwT82Z14RVAu6BL8vUjp",
  "key13": "2CJ81k6erz8K9U5v2FcfnnN9UyxY9NP9C5gj2SH9ShaMye8tZsp853qQkC2RX9JKRNB41gMh3NxtdMj9jXegCEm2",
  "key14": "5VuqnMwrdrxhg31WeC6F3MfKkUQunsEHwR58uA6HXrVwCRug2WMZuyfxNAPRjwaQExZba8mrAYsoZz79zaqv71fR",
  "key15": "v6jhYuvPGp5Q9LEU466sv8vEKyBxMoEDJXFfsivSPf81riGuJtFCgskNmQG6AdB5Vc5YL3QfwZuFog4TT3B4c2X",
  "key16": "3aTqJAVzUmZMo2ckmoeVkaXiSvRwsni1W9cW5XqnThjktdxL7dxtQ33nGW6Qz1kHnEEBxGBpe9tG9u4qzeZwJEV7",
  "key17": "35pYovhR26BAS2AEhShQsyLZVEWRJYM3ZWbVqcbGqVETfeH8tiVfyWr9v4cNANxAUCDMSu4obSupj71Q68EB8TF2",
  "key18": "3QH6gZMVMo3ohCsaS8QKPAfnnFnut9WjrNyDSrTrb77jVcxmaiEtocJxgpNgvQ6fF4ARzphxHdqZTsdEHN1yf7Ej",
  "key19": "4ANxEbUQ8eLDQNKzN2S3JQaZQ4TB3ED4PTFBdd6iMJtHEUpuKayoyJ7wd8PUxupHJsh43DhEM4Q9sxXvigViMosn",
  "key20": "5TNbeW6JvdZS9gT5yM6kdCq5ALZbKsjDbNooTkHp4g2bFVjpJZwx1E8hHPoMnNJsVwddmmMNVQyqsMMPVXLzynt3",
  "key21": "2aGC9snjWPRVKyLcHMaxVJjYtc51JFBEBqAuRZfrxP649HKhgdDqBD7u1nfmgVe3emnA4z8QMArXLzPz3JCJFSF6",
  "key22": "2Nsuw4idEBzGvkDHYvZM7Fka3QFt9Day3gi1pVHmRX3C3tkBjZVJjLsnGMsowJjYusnCywHhdKq5LRJpJRqjUXfH",
  "key23": "4aT6eoXmnTswgSbM1oDt2u5nEKZuPjtV7vFZvHJbphXiV3dQYPXpJam8jGXbNYQYuHQG3S2ddEuNn3jbbGyfp9MA",
  "key24": "5epnTu31ppm8PmspdkXsVWpkBq5DLHGuNX4haX77RFeBm6ga8KjRDgmeWuDSNVy8L6rG816zbcqzosP3zeGyLuwQ",
  "key25": "1DQzpY3HAu943PY6uU5xhe4qZ3ogScAXe3LU1HX1TLaDCSSvUSdz69sDothxCGWoZsENaF9o82W5dSn3nQGSKcV",
  "key26": "3Nn9GQuqRXyBUExnwz4Tt6tCaVVssVdFghfJBE6vEN51PaLfc8TzojK7Zq8jCXS7N6QbYGpdiNR7NNtWp8NmTUV5",
  "key27": "3ehzdcGnd1pLmsWzVVFymVgArg6GdSVt41rrSBJUQ2v5o6cpAeAgBGvznrFKAhQishiKaFbu5AJr9N9LiLYo2ku7",
  "key28": "61Yp6Qha5F5GpiXKggvKcPxZRxRS7EKYw2sr3W67CGSxUeMcYDKJCKmyrFMqAJ3CyRzuAEriE9jE5oGNsrwr4FmZ",
  "key29": "4LfddWQR3GS46YrXFwhNWopsejEy5mYi7EQFzUW5DTcg8Z1apmN1Hi5yjAUissTd76XAzaZbdcPmKJX646Zf65r8",
  "key30": "2BcPYzZ12HAY7RdSfBcUrCnBm2UQiihz4ibsgcdiYwMQCYsp3hr7E51cmjmj9dNnHuQjkGiBFnqRrMz3gaWB6HRT",
  "key31": "5PeLRWeTnArfrGksoRS8pgb7TLjqp2W3nPp89wU15FCYexuCYdGTnWXy4rQKwxu1aVrQ1gHUUuJkpoTC3jV3WjgE",
  "key32": "3B1GS7B8tXgp8Gtwvvu6wWcDrWAjDCyLtv87bu76UvJQFpfqp1vpSWkwkeDs6PDEj36zcXerBU2KrDtXgrRU1Jow",
  "key33": "6614JnFuNtMz5ZCJiReSaoUPHguqLmuj5J97EXX2Go1QBs8qR8A4ryD3nofw4PgVi8ktu19jshGNZNEqmJLEt5mv",
  "key34": "4imyGM4cqQuvUmtj7txz6yznwKFFG77J33jH3KCQNderuNEnN59CMgg1VDXL6AUwdREEibBxUyNqGvrmuTU4gpcZ",
  "key35": "5iS7hJqd8G6qtGb21CtEjARbhY5BzBAKyVRSFP1oGfmScNRs1FvjZ4QCMXfYNfzm8v9Fhn4anixVFM2euguomrWe",
  "key36": "2jxEFswrt4i7ZYxvRPmpTzGR7tyyyHMgxgVC6URPEMvzP9fafozoLo1oujmDiWW6DAzNx9hyg6x1F5WBZxKWQAhY",
  "key37": "4sQvWuXjmHgC1n3yxSJvEK6Lx7o6uhWziFBnaMgAXGrorMSWGN6uGUjq677gt7JgAAwfuJ6g83MBBCe7bY59K4cA",
  "key38": "3SXUuALLkgpkBSRc2Qh8UjAEw77d1mP1TADEDK48nqTSbzmxY5zZAskUzDG5k9NRYg73eBDSEYT5S4oGy7pUo4Sx",
  "key39": "5KTVPXVJk2LSw2TKekszbHS7bQtSdXEWXPKSDHUxXMMW6gKggL7jDRn44L3eSNFMWzbP9tguAXZDbJzg5nALE2dq",
  "key40": "2Ht9wC4LvVJCPfSARSB1rZwwjFKrMo5TZzYYkSQQFWdFxxrzUrqwX1Vn1NFrSepXjkE6rzSJY4hkeUBDBJWjxCGj",
  "key41": "44Cb3L41FosdH3Yxhh8U45Le8HyNAJ3ySrH27JEKXdLwcroPMv382V6rk4APZLB8VU8NJpJERQ7cTpBMJTNpgSzV",
  "key42": "5v2WXdRMuN8iPHKhVBoGYUMzaDDnu42j65wew9xEY6njKmHP1wFVXUVCg8PjPyZKGGpoNccSe51se5FFCy4fz2gj",
  "key43": "2b2xBejjTyGwfQRJLWnfVmzuAkfLdDwswJSuzQHiTk18SZZwrTgHypbi9rbBBhZ5KwUGaYLL7RbHHoHccqbJ78FP",
  "key44": "2FfumW8Y21peCaDCRXeR26B2NCxgGy2MR9C9akhpPCHwsQQgiEs6TuSpDjEnMhyEBuafmHbZiLGVWJhwP4Va4UtS",
  "key45": "4NSmbXnhpm5KDLua929fXG47Xz2nGqkCcVjgAsq33ZexAJ5kj3vV6YC2MxvPGLoSVvvKMNAwJPnbZKhQJesmPZnD"
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
