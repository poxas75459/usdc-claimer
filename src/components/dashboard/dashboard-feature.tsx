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
    "3zjdAP2v3guBzUbPkZ7oxsBSbnEh7Pymd8ftoZ5bDSVeR9v7T3BcaN39JGVCcMG54wNzLUqdDPkftnVMfPnJQzXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QTx6aNmXde4dfGbC7hR6aungzNayZDcRNKFAG67wsGW7k1RmjMsRdVPhCZkEdMLD8762JXyUvPZfxjURWbYTJKZ",
  "key1": "4pv4R8isjcTN9ijozMNEQCCZ6SUYBYpEPhUbADvrJH9LjA9AkJtayUHtX5eh26tKZfjjR4ehoPvT9TUdYvaH4D8c",
  "key2": "3TqHjxUEarFYe13if45hoUtY9BMYp4zdxgGR5tv52xfpHqUovrdk2PU6iZDcERnY2apuxH9qNtg7fNktropz2sN1",
  "key3": "5htB2S3du9Ay9vbCS5z2D3XNDNSTrTrPWNRFuZyPFxRQi5ABupr1qrzPU15kAWYG9NpCLfmSDGL6JkpRUdNzxJCB",
  "key4": "3tRdhK21vUEbGAXnCZCnVbXEEoGXx3iHjw8pGwnEEBGAAKtQ1V6KNXWpvqa3VPN6ZPwcq1wqmw6hAUKSg2v6TjT7",
  "key5": "3yYiYuwJcG1LaaoUR3PcmNXCvM5yhawr4w7bEoHh5urBLCY4w7bnjE3NJtKbBrRwobkhKc9r1QoHh5VqmezPni8J",
  "key6": "2UBeFFCV4gdAcYkBTNvuBpJC5UAb3dm8hQ8EjMupxhdq2bi5ipTpXBAcdFfA8amgWsw7ZhB9BW8DsCwgmSGSfRZV",
  "key7": "3LrgYTbLp6TMkjFdiG7YU2HJJFLjzH6errGbpy2DC5rGZNHTQd4nfQsctXGbPaXW7LdR6VaDoPbVZGAUVnTxJFEE",
  "key8": "4LydsC2wDTtwzZmnwDnYrbZESva6BQKshdnagNEfkX3x8qRqyxawuYmiYXAD9476YVxJbqjfUzsXZ2brwFQgn3fo",
  "key9": "xDxcewbGakbtNNpxxEMgcmjTkV8tSJ7EbmiABxt6c7cisk5X3P3XA66Me96vDXGCZ8emBx4VsTQthXBy6zhVzcB",
  "key10": "5hXvCDR4PT15SRQLX7DBkYZdYKq3zcN39bNN9mFWuPBmv6LVATpSHT5oDJLgRr3n5XkfQnE16qk3Za2eJMfw2vNy",
  "key11": "4UDoCxqdwdnJ1sRJLp8CbZerQuYuntXiKD3usKuXGpTdc6wR4A5Ez569reDBACSitsDweQW6EZD3ukXwgixhTQan",
  "key12": "4pDBnH54RSAQ3h2pA986dP913TC9JRKYYvfTAJk1WDYKqsfk97razkcc3Yyo76sB3stCMpYx6FG1nh8HQ1TC22UP",
  "key13": "2cqTRbEx2UW3kwLtrc3nNcHaciBavZrGFpRkwKpawpJrU6Ly2Gkbq7whE6JQ3duqGfvHSjNQ18WanY8RtYDMcVZf",
  "key14": "23egsmhtSoUcmbuZBmUinAD6bZyCfF9stru7tySKq9wn5w5tcsiy3VB9ieLcxpwqHG4GcB8rtMWGPMyMSvDnNge8",
  "key15": "swVxnYbK1uYRbCjaiM8wYetaKZFSV49HwkW5oDeoieAvBNSFxsJDhpurQ2AdP9abqbvhgDieA3ZYskvo5zt1mEz",
  "key16": "3ewBR1oRRcSfdh1PLr8fazjTbvouEzjp89KWbeGA8inPZGWj2yXX3fMsjZoTQApQzPQhzvrwaVct1iyCvJThGQip",
  "key17": "3V6uXKH6didKnv5GxcSPWVuTmhvVcMhBGTUKxbasjc7Kb6vggFBiTbVssv6MKfGx41QXP9mMYWwtqxSJVA9m12Hb",
  "key18": "45ZYKU9ukW1VGjzH5uJTxMsWWxrnGJXA6NM5utH7o8f1hsw5sfzSzYtu8sxVuD4o6jMTsa8orwcEEPo8aKSAoV7N",
  "key19": "WvpAnsVvv5o8hZuT7NywqfhNQpe5BavcwjgTsCdDKgws41uQ3dkPgG6mbaDRkeSKPV5qUNR1XGomDZKqDLEFW1x",
  "key20": "wuaGjHsgRTjn4DnEnNuNkJrASXuVUewwnAkngjEg7vXZ7uJbHvC5KRLyfVbEgxjo9qXGNpQJVtRN1z9kqMU5ynd",
  "key21": "3jp89gHnKbRrbEss2M8cn5ySrUFS8wZFYdampK9VRgMKouSzu7uXZojeV1mgEDeWHQ82M3RLvznhRUdt4B67ku3Z",
  "key22": "an1YxrtRiqU4QVfC9UAykeX5dvcrqqXo1mXQQjS4mggq5KHA96yAq69R7tvXXCRruHgKJedKSNP84Qqv8uY3xps",
  "key23": "3arE3wh2XN2HP7reNeLjjbwxj2cedDLGfvNjZ27BbWFQ7HYWEFaavja5hTBfZekVXEbwdYo2qpvB3ShBQiraKtLz",
  "key24": "3ZAHAWwgnHiAZs37w5Yy9WShRMtovxCQ3YT4x5WM7bEcFU9RBxRe8qWRZP4J7SFuwsZBs6WczN7XFxgU2UksLctZ",
  "key25": "2WHTdEUBJgqfXgG4hwKkoJtsC2JqwvopL4gxSPy18teJo7iskzL9Q3HJ3Bw2jRpbNYxZa1S27MhLKhF1jHeoDc3Q",
  "key26": "2AS6DQSara73Xyaj1YuPsrjvfNVDgdrjZyZePU7ardVWR4yMbsBphabxezKnytewr76a8v24PYoQSd82nTBSbRzr",
  "key27": "2huavfYxUT6ZHmZKPFfEaRvGbzC95Ap4s51eYQjxwkSCZgHUgSgwNvsQfUL4HjqZCR2AQTtpLc7uj2u63bbUAx3V",
  "key28": "5xQtnw9o9xmjr2gz9539e21Xv4zTcTZLfSupT962ScP6vP3Curgry9y6jYHFnxSGqsVeuGpMMHgh8vwK7vJpqPeF",
  "key29": "5srZfMG3v184a7cYVAhKgdCfCyGgn9vfLkKvS4RyXztwd6M4uXYENaLuYXaGwgxfhUBEcY2QrAppLQtqoDxfg5FW",
  "key30": "dmPzXGdgnoCvSntQFqxyMoibFwzxWxRkgcZRzzaQfyecuG5WSW5Y9JKHVhAStMKfiBfhyFL7y3LbCVNsUUX1Uuq",
  "key31": "2xKZva4QRFd8dr7qrBkj6xZNUCFRNRHhqSqRQTCgxhPzFWC2Jw8iDqNURfy9tePzaAqocNXGoMVTT8MjrJaMgFGr",
  "key32": "KQQZ3wgci8aW2UU5GeAYJacTzE1dcAsz1c1nLnp7MmbGDgddcjBUDebMsQaqp7rCnJKfo6UFHkiSdAbhBaEqRDC",
  "key33": "4hSbysVtmiDDuR3tFY3vUkYF7yLpd8iwFqByEhTrS8N1WNkAuGqrVM4CCTNAmuNKx99gr78g2wxRQTZzFNfUTwCD",
  "key34": "2wnG5TXjZQoN2QoeeQVBpUtLLZeuMS2fJ6uEU37CEayrT6XhGVL5wuCMpYyfuENk1wJmPSKHaome62mhmqQK9UHR",
  "key35": "QT6MU1nDnPPjsqH11eXkqpMacepr973NuGvVWZp4wWhPgjqNaYzsRTaj34qsd3bTgKzqn3yaXPNmQYGUYHGQhjU",
  "key36": "2X9GapFStYG2q8XyjXQC3Zrz6d1j9wAdvPTMCkH1yXBZHNz5i8jcvA8e2rRkFDUHHMaX9DNTE5fB4DxapkVQZaCs",
  "key37": "4FzuwifiXQ4G2FzUkxJcW88Vkjx8zSKuHQE8Us66WsBwRrGeZ83w5gMY21PcpayjB2RduLGLDZ3qYaq4nPHCU7Hn",
  "key38": "wSFhVfMN1pwxPRq4teXDrsMpSFnzJpUNLiNT3uFs9zxdk2Rs28kb3F5UJeXKptro7DJ11jqxYJNQqsxrgZAMrVJ",
  "key39": "4nwunHaB2LPEtAo6JRkCKUQCLinvmiWJRTLNBiFrEsXYoFLYaoQiCxMFjF9vTb8uaHcsZjUBtfEyWDBn8LVUbNN7",
  "key40": "J6NuoCQVbjcGkr4LgB3b4rcYrCwq2ezdARuFxQMAoeQLVnqdz77zen2BsLdHYM1HDH3EG2SbiBuoSZM6zjopQDs",
  "key41": "2kC2XT2NwczkzB4TQkVEkswZXg9psUY3EP9DTzx8CR9iZsPEFuwAHkxCC4XiD6aNNuy4mKENvH2FUve1twrNtuG6",
  "key42": "5LB9yysZykCEVid6385cEH4isvUhgXgVxLoAM3dP4TZKGPofJbHisuDcsSBEyyubtK7C2oh25AabSbsYTuPFeKrq",
  "key43": "36mLv93u8thmb2dCD1za1VcpZq42gBHjbQmXKr2gyyKR3FN5bBtp3D491yymHtMioPeTqzefC4SFFj9TYHXwzbeH",
  "key44": "2AueYG7SecqcwVuFhNyeWJZ4scTfdPmAHm2WqSsoJq3yfoSNxi7TYgkmBfoYiTx9TvBU9T7kZbvk8eYSVSRW2Cu3",
  "key45": "4YTaRW4pzxbBhsW9mWi34L3K7BQgFTANLbpvMZnx9MsdAi3MnRwKEbi5L2pE8FQG58z3LnMVEveNvVsedvW1qg9L",
  "key46": "5B8qbe53jjKB1jsmqAQ98fheQ5AHRQYDRTurmctCqpc1EB2JGFipt2ydYrDk53dANXhLRPWEK7G7FgcpdMzKM8bj",
  "key47": "yGSpjBrvgyvcDphsUpzRuSFFcLsPgyWrZo7ztGfujnFJcL4fbb8h4MEfkXsx4t26Umxxm6vwhR7hUx1YGRK7UWY",
  "key48": "4R6FcG9oWFB5XDPFJRa1gmAjBLYNWyVrDem7h1q2UnY33zBgncYK43i8aH8pnQ5BgZqjE5rNnAfD5SNSNyrtdgCo",
  "key49": "tMjNujyg6QTvUGkwawkQgdi8enFj8SJhNjut4NhHSsPNUDshin2iG8eZo2BagjvJf6A1Z6Ja5XBz1T8TQZM5UWx"
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
