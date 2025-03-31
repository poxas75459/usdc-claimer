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
    "4oEAJbiodS7duJfdU1QoY1BjwtCTZbk2TWoTmE6Db5urS9UHPdB4BZT3fuXqttSad4sCpb3m5UXQ7UhdNwS6GpBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5fCviHX7RyVp8aqnaVSWTHfD8tDDR9d67R4Sz1exo4CbQAFHcW69Gq6fpLNkUuzM5btyqDfBkJAMDCgYfSKstE",
  "key1": "2Tcg7v3HAwCHQgMwjn9s9H86rhHxUmExrxS4DFvvDvLm4TfwG87NBMKVuMY6KiUxGBhgfTxGBeFKGDDmzEVCD9fo",
  "key2": "4VKP5B7cYd8x6m3iP6RFa49Gt9cUeUZCyngCMcXUBBv5ckpUsY2qTafUUYd3WHBMepzaeaNmUvzPhEGu24P1Gewv",
  "key3": "2w5cxrKjghULn3tbkw3Jy4vjuWudkFvZ3EmeNjwEXiu7b2J5pmDrYep5YAjj6nZaHqXfCkZmuZ8hFsj1of3ate6N",
  "key4": "W4ERowNVtWP6coNRPLkpPk9vcq4oKziH25ENDUGEp7DnJkJ4ARJHN3bYhtzjQfQX1YfmyNsg6d2kwbM1bQxUr13",
  "key5": "3RTAMb8Tn1Yb3H8fYt3ehuzounVnGsePqhyKHrdsZvAihfjXyiCpJwGoDodkir1k9ySTGX9FqwioezYJvv81B5Ji",
  "key6": "5mHADQaXVhS83v7J3W7PcdYwbWTVoMRNXZ2iByAbrfmmjS3VvRZp31RVZoDcDNyR3z2FMnPjrsLsS5CjR2vEcK5g",
  "key7": "5sjjBLSE7x7Z2g1fWC91WfqzZ3NNGuCmT1tS5NvViBj828uk6nTbQkwaFS81qk6GvRDHKi1SxRTKdw25UuCkyFvc",
  "key8": "D9dwxidAXoagSiuomLVBJxvS4JCVKAQWdUgq7G9Wk9LCyKQWSyPmqdoC7bWgP5AKWKvoAQw8Jdtqyt9qkWx8iir",
  "key9": "4552tTccgkNxdgwUujpBSbDTWZnqVd9SFDDQt7HtiW4q9n8BAB75yKQPjiAwWNSFeREA5KdFgt5GuRyXBvbPJ34t",
  "key10": "67ZJQhCJ5JmYRtTkcG4nkHiveD4mXAFrJVJ5QMvfjtYe6oNsexmS41ZfxirMq55Ra35DKTh7XuMwpscg827ifKju",
  "key11": "BQpbifELwatwtBWmh6XhWuFUdtftDeBZZgnD5CTkPvPDAi8ie4nadzGWEgT2tDn33CR317gzf15JzBTcm7DQkbH",
  "key12": "598nXwiSHp39ZDPDayWUzSSiHynqbS7qutSxjRd1qD6492wVfMUA4ztwDkiSBMC6ZrxZMhbiaRHVAEndgVsSFNAQ",
  "key13": "375hsymXuUDXKmfzXBRRz5XwDS81uJuZEFpDSztE5z6gqRMThSZUr3HSzKH5JcP7bBLybQeR65NyGWoj9X2nbia1",
  "key14": "4emHeFdP8jiPEdKHeq63Z6yKjuADkk775LkpLLd3XFbCGCmMLNPF7hdAqKY8XreYEFyESSAFicDPcnotCPSQzEnb",
  "key15": "2ftrvmiHNKcVpdvf5bEnfLJC2QhNEeYrjP9tdwc9A25NEQtTqccbfidhtsCi8ePd8839p1vHfGpsEvCbCLfyuHMC",
  "key16": "71heVS3jUcpRnKjFPG9enYrFjZtvUCzgnPJTnKbB5ZU7GqtTyi6tieqdjfdtXNm5tLK9Kqk5xRBtRnjwL9jMrLL",
  "key17": "2UGCrW24fnsJHf4uum5Mp5dHvMr4vBimZswqP8ZrTeFs1TP6xniAeLgZA2HSsbLtq4kpZ5Vac4uc1VoJUg2Kou52",
  "key18": "2W5SmJ29AYjBRFEeRLhtTmXwfGFz6MdkzamD2YMhfmRA4xD9awDRJokBvarTZT5zA3VBvSNnzrbFLKVDkjvJoU9s",
  "key19": "ggnLN6SmhMFegdEtyV53cRF7bx61gC17cgF1AwJijfyRH3QjWdrmEC6r2sLwHNptAUC5KjuG3rcmhpc1wphYQ7C",
  "key20": "nfLgyz8VooWwb23KemnFLQYUs7bzU7r2jQU1BqaiobbaDWYC7WL1xNrdTVnUCK7q1MGphY8NrAz7hbk2oQs4Jqz",
  "key21": "3exdAQrgx8ah5igGnNdeZmVNXLRbG4imQzVrCfFJurwLY9wDjJHKA2pxkAqYgChVg5D1ZNAbG6HaYFREjM4izqQM",
  "key22": "5NtWa9UabAqn78bFGfKpSgfdFcXs6BMNaCviGx3aUQ7adiMDCreX5EefzaHKA91xqBW9xCiQYZwGGL2tjYJ9EsMM",
  "key23": "5PcufvLRvn6MUvqCnydgpcBKVrKyiq73WAc4APBxn4JzVxUgPuTWVhDE6qUZ2S82p9UcaVLnqXwHduBsdqxEhWq6",
  "key24": "3GT7RSKGhyHRvFrs6W3J2LWcmTk3nFurEKBtph5q3FuATim16duVfDsReTB8pHSQU26nJLPJ49jV1uTFAGSEqXuj",
  "key25": "33LM6UzcSRy8LxSfUJGcvhcVV1FA1xT2E2waeZZXH9kmeSDN23msoBejtXRpEoKTdk1RL34oifTqhNC9ANJsfEjS",
  "key26": "2MjG6RJ9hqKzZYxBrsjPmnL35BbVgpKhtFJDHvbUVTg4uCLKkNtMGwxRZASyUxwTveFioffQ6za1oJR1w7paLL2T",
  "key27": "5W8WZMZH4LYGUoUZTZGiqJXS7UkLhJsCziH5kYNW5noqM4ZoHBX6ZJcqyWJS4jWKmUi2saKaUGEkyUmZZoh8cGmf",
  "key28": "4k3pRzcx6ibLKYi42f4bgtxDqJV51MzkisuSSPyUHeeXtoM5dZCgsXJ8bxpJgUhGR8B8HyG27yaMgDBG2UEbkkbF",
  "key29": "48Vd6xZmMVSoBNnhygGH5LXKExzAZnHNfukF11TxCfQHRz8PmnKp1WPDSYCjfSxgPdNz7AEkWHhM56eecH3fha7b",
  "key30": "23AnJBALs31cDE551JfTZFbx3ancEaak5kkZGNfDmrB25Cb9pz6L6oCCuvEkhVfXk22bQFa6ruNd3tDZvzCMKCDF",
  "key31": "2Hfpd4xrhRizAALVQKgzWj2kLywPvJeJfWdKTeQCqgG3Qtz57BCHZV3fuwFKnrgzzD7fMEzoAJ39si1ddsLPBSLz",
  "key32": "XkDZcLGKpTHS7AvRDov6NUUgf96ZiEyvxVzChycPUPMioj1jMfMzJpyAh9pswVhBLsmApJ88uD79w9xK8R7SbwQ",
  "key33": "ohPuwqAa9KuhAVZNkShtXgZ4iC1RbR71wyQXCbpEAPGC58WPkei8UB7NqY8YP53YGcUHA5C4guSGqkxDTLtoH1h",
  "key34": "54RkX9nABbQ2MvJtJByeD8jVbsM597nANFAVDLwXsVDnsWkTB8391tZjF2G6BsxL4PSWc4xDqH3wVwncippyXJhb",
  "key35": "3GJCt4ekon1KNdZAsm7aUVWovfCGqj1egH3ob5337QetSP98rG8n4sM39U1L5hJKqJJjwcofu9h5hWKcd8ird47N",
  "key36": "3starccTYvEVimxDUNXeLvKFFp6R8pMWTikCMFs17XL3KJLCyaafztcxywiaS2M1sVmUm5HYywT3XLWDntdEwWQs",
  "key37": "2y2vMzMmoSnXtSb8PyLHtVL9Yb79uuRF8K1smemWtyPeCCjJtWDk4nmPLWCTsR5DREGMkuozxHPW3RZhX9yd8nst",
  "key38": "5avXMqWNxyrcvMz5gA3AqUM4vKCNJXsCUVyczo6zAvwEyoZJ8boHGoS5GqBSgATg5gQz5eHh69HpnSzPdwkokWRM"
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
