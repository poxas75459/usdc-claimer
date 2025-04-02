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
    "qoVHzzqViYuQkYoFdQkPia39qqKQqUR58TueABwUVVPtxQaWndREaigVhTVodwAXnpmbQtJanXCKMLgLvwqz5Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYkAeBoe58JwA4oAvCQWuVDy3ZfVnZhB4WqVyLZFvhpfd1ok7jWiCv93euLvgjCsngHCr3YEH9rA2ah6BexfmkU",
  "key1": "j2oAvNhbT9fQtqNKJ1Ai27cN5KrXTBQ6aGvqEL5pkCj7J5o1AGCThqqT5E6E94MWxqq9JWwPPi9a9jgpUeJRXTA",
  "key2": "2PUdGKNYaNy15fhmJCNXZdG5zQnQ72Gp2zpNmSsyJMevGNUnMHdkjvHjrMHqn6LF2r7KgP8o9toBtv5xBqBNu9z4",
  "key3": "3AVnaUzB7sDj9P8dUuNvF54JFvoZdba3pL8tPRUk1MjkQSDtyD6D3zF3MYZnZiZ7ZnWpbhk7XNW6TFJj9nQjoLQu",
  "key4": "3bf4JfNUFzjmCPaR8WWgLcGUHuSGQnUtShVgkbtpitRVSBdpwm7TR9B8AGuahSTrBKS5KdK8WknaGN1dkrtZkfXn",
  "key5": "2aWtZiswvKEX4EaBUHGjfGkgUUwSiLtzBREDMLArtZsk2tXc5FvXcs7oAeGcm7iXSbcU1PyScb2mxGAy3y1KDSrj",
  "key6": "CnBafhVWRz1PTb4esWQLmWgHwkhc3S2N7A3VuyXvzVMe31K8CA7oNQ7eC5ksQTotZGPXK7Si1LqDvjrRGPY57nD",
  "key7": "5TkARCpJj9ec9KMWxWDahgiN41wNhRmNw5wMoB7QH1tHaHtmpBZSEDiXTp3fYH4T93WBJB9qERJ5pHjSEy8MDq83",
  "key8": "N1LWcdicHJSUyyWqJdAbRQKmH2vKJw7rvEmY3wAzEGAZPJVMKkRaBWBZSLH3F6fZSJSY5Ur72vRDo23SehB9TM3",
  "key9": "2FDZUpEBmVjZkH8wzK3MAw5TqhkPgfSwrhDFjGmK5w2WvtZMpfw77yg8ShRXZ7VbeoQxTUcNFgfVaGYs37CZhUTd",
  "key10": "4raJ283U74vFoW37pGcXYvYa7itpddg9KR3Ym1eYvU8Nw3mLQEZfHVgqTkbugmfVLeUR3LBVx9AKaqDCnDPwRytk",
  "key11": "4sUvFaVuT4GnjrPgbEFxCaWf119SY3nq8ujgrRisrxRTVc2Ziy5GJRKfQtJfAth3SoGZmTSdfgctgvtgki2cKqB6",
  "key12": "43WUcaH3T78DpLx89UM6cp3pZGhPxWjckW73QLx8cm7Fnb8ogptXp2XeTNTP2LzL5fnBGY1Pn6Rb6zgCwiF6fTPu",
  "key13": "2NUzwpSyvXg3Fgftpt8PvHCUwu21gwaXASWKg49PpoFEkzWWAQnQcPCLDGQiwW2CePGH6zQD3Pvy2YAd2LQdsp6U",
  "key14": "5kKhyaCFtpZ36Z8FqKBdNYxiPSKpMzKxEUedqCab1MtRk1dh1v1D9x2xGKthkvRmgQWYc8YpAp3jGZr9hJtYuQfx",
  "key15": "59oURfsimXsDwfHNf6jVfiZoh4CTpzR2ko6DzGbiM9Bo4Eu344C4U1edN2iKuVwznwMhjs2N13NfH7BKht8THbPv",
  "key16": "3LJTAg2dgU46G1E5N6y6hJnvkJZXRsGQD5t8d57zgyN2V7onsGgR6GRxvZTJc7wiPkBbAu1JuyXzrcDscHuoPdcX",
  "key17": "wH59SjjZArq3wyKD3cqfQbTi6FZVwyNd1AkUydbpRRXuEm3JMR16KCHF2q8BRWDVY6UvX3gHdwYrHEFem98mZpk",
  "key18": "5qYuTQngMXkhzaKsw3wDeWQbz4YdKzosPCazu4ku6VrmFMmMzBHRCTy7X9E4xcZvooGfX4MJThZezqRFANMfVQz9",
  "key19": "31JgLVuXNzTqj1949NFUtNQuqv198ssB181m1MHeCQ1rG4o1eUYg1Ug86pktxw4ABgMTsZrmLyaC19BWvN9K4NxK",
  "key20": "2gp7qqvh1uLY8mErgngyUiYTqZVWPXUuXsMG89SPLyAkrGEzX3msvawYENbCopQ7vSi7R5jSAK2QQgKFvcJBWS12",
  "key21": "EPin2HbvztFQtDHsbVQAbEAHSqk49uEMkYngANidvsWAnKBPTfBaE7r8H3wsdsYYdLLY6dzdVmGBmWehZEY3RvP",
  "key22": "3eeRyhKdsbgjSCVuhCjcpFPkFsqsA8edyc5mkQ5rSURGGaSvCYuNZKHjnLVixtrXXG6ERPA3v2UBUfCd8eyVxMKW",
  "key23": "68CihoVf3b3NPwjUn1rL4t7GwM99CdTgExY36tBoX6mxpPTyXncFH8FAsC7gUTzFs3KhT5QGB5je7Sbe1oKwyXY",
  "key24": "JhpddJCAXQLyax84cxwKgYBNnneh6fHw2xzfmnpvviUD2gsM3AG9q245muC2DnrjrmCVPBXiPLasZA75QujXAm6",
  "key25": "2aHoDaoP9khMRR5a2pBqDPNN62NWc5reUkcAW7PnmzjEwBzUHVSeTY8EKRHGiiYrdPdhtBQataVDBFboqBQA3YFm",
  "key26": "4w1ui9wqACG9DR6omMDMZ5hQv4Mvzxdy1ch3Th2T3tZEQ8g3dtKmHk11ba8nzZQoQhxRrvnwgMk1K4HHD63thzZZ",
  "key27": "4MN7cCFLNyJyoFjKtKBqxXySJY4mU2NRTDFRb3guCUo42ww6zTWYVjUCVXjwR2ohXfveFEY8APnMKCBnWzYsEcxg",
  "key28": "5Zud4GMrnWjfsRN7kkNh9kYyeFxVVdTMM1r6sLNj7U7nZnS7oDGyRJvkNxZM8ez9hWFEERdqK1tb76xWHqhvLEN8",
  "key29": "4YhV5zeKHML6NGqYSga6woHXC6otaK3d6f94PG7L7tHWGpgqKmVnAvLLhZ2BgwN3Nkfi4QUJx4qDtQGqiyvncwWT",
  "key30": "aYmc16jos5xyHbRVkFJBk1LXq3ckzeaRiYUY1i88XasiBxcocb12oGVCxGyeJrhk524S1UHw4Drz8kSwW7mYPu2",
  "key31": "341FBf7vEzpovZ8WLiKHk7QZTq1LbU7s6RCVE5afNN3fvWEJGP5DTndrAGtznDo3UGy69YR7b1v2RxXoWKEMPjhk",
  "key32": "459zw2FbkUHYenQBhBNm34VGWpnT57p4jhVC7JqqZM4MaQWVWeJuUvjpYGBZ2XZ7u8Ah1pU57ZTXRDBgW8mCQa8W",
  "key33": "poh3WpTAGCuzXZhMXtRcHJnEzHgsqJK1mFJ5GDFVFJrmnaq1PeRviUo3xfLytSUX4AbXQnCLCRi6xkvLcm8f7oW",
  "key34": "5x1ipoQnXfbmUrTSS21dLZro6bKfM65yupCwvRsy4hptMB33qH6opnixsGNw45jnmziyk8MmZiTrFa9szcSF6C9f",
  "key35": "EWY6sUW6GWenCYuxxLzDvP5umF8websZtTHNobGvSdSLn4iPKhKXbtgjhRSBLTEb72qKNKYt3JuF2kK65N4UfC9",
  "key36": "5xXauL9HwLmmFYmSgmrBVHY6iaLMQt3RMfGZR4dr78fGTtUVrA1fJTudwBfc5yxXwsdkxDxEGvvr8CfQgpLzpL6u",
  "key37": "jRGmZ4jjCRTaksaJcWKd6v1um6fNcw9Rcr6i1q22kKBgTNPp8CXVtadPyH3YPzxmhykTLGjwh7EQ3mBxGL9dw37",
  "key38": "4wWmc3B3z8QSaqt9fscUjNFjhWrsu38hHpnJwCjYNP6cDgfm7EzMH5hUW62fBKQ4CcS8iTWB6cEjGQUobGBK1bE1",
  "key39": "5heKxwiC8XTbWHadttk8GLFfXo4nNMBBN6zorG2hZGehcv2727p44nwZVvb7tPHqBkbYo7QWxsq5W5NAXjrjn9w7",
  "key40": "63w9sdExvuzkv6AuXFEjwwkmEpMiGUDdAFTyB4f3WSV18du41HxZxvxwEmu3eazqHcj3oJfFngwL2hiKEW6wjyBb",
  "key41": "5sTZsEswY2Z4eXg4SnpytQT7RU9WNcKx9BZBAbQucn7VkYac3HCAkrYa6FWVXEojcnsxFBd4YDni4ypciJvSaAMd",
  "key42": "3nYAE39WLfeBhMR5XbHvvpQDuFNmeVa7DoTd99Zih6fqrUqehv4fDNJZiJTwBNKCpKd7aF64dK1pmJysuX68cSwW"
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
