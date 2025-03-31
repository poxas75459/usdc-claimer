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
    "XTSQkXah3V3XMdJnwP13PMVubdPo8sai7dALhW9gFuPEn42Vs3Wvxmka9NsUDkYfEDmfh9PCmPvXwRhg8PoU7EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qb1Qtf9oxQ6qDiz6TSmE3K8mL4TrHdnNwzAjLUsQubu9vXvwkuy7hb6n1j4WpHwJa7zFh6fesGRZGd5ccPRPDTc",
  "key1": "4xxev5NiutHTyJR1uk4PkPPPiCbt7AEUGXTBe3UJy5faHHXZrhw1NMrZf85UV1BMM8cDdWAiRVxszMZCRU1b4Ncd",
  "key2": "3x74mUapeF52BoJqzYeHihEXXzxcN8XUJjjFF3MaDhPP8Dzo5fsTok2H6dFQ4rqRK44EnhccpLkQCxr2cZJ6bKWm",
  "key3": "5oT63Wu83cfxWzwGCPdak7BE3VwiGa8dqvCE9un22drrEDzvuNfQWGg4iefVFfJ9q32pnwEpZ6WXZSdXqiWgbbY8",
  "key4": "54nnS5gkYQhNHuunrrXyocML9HFpTAiYLr1iGYPcz6WaPBFK6gLdGXAbxHnWhfoToupWDaarjZQpVTaFp5u4pohY",
  "key5": "31pih1n6PH13TiwXEjB69ByLEK8zuMepwnFT4PbLAZxugsSmbsASKgrxHvZJojwjBcWJ4qVC8JsD18E6poenQ8fh",
  "key6": "zcXhnJW1VnfDidAZYJDMaKZuM7Czh3XhXmF9GFP8KHRXVm6hHckQTQF9bVCcPmJEa6YCSwW5XAd8khFzPPSaZva",
  "key7": "36GJRhrQ1EUjszpRw8Qvn1pToGNKhAYfCbmsiSLH5EHmxwcW9GquKA1MrVHzCUYkpoZZSropA3wgfbLv45W3LQge",
  "key8": "2LgGVzaasuWcfWocJTyjjgQFrMdxD9anQEnyL6SybGDJQXRrRexEnX7PUePVk9vMYmQ2ewwErxdrijvjB6mriEbE",
  "key9": "2XBjbxf1syLC4DMvjz2sS6oD3PUqcNDQr6yhqfJJfR7T6MSbqEugEbnXzaKsjonZ1NLF5HomJVsoL9Js97NQPF6",
  "key10": "2FLHFHqYPt1uS6ssMnpD5efutWsYcFY7GfexXAVzSv3P15a8hhzexNTKqK1dFE8jCpSUU1SfYFSx4QhNMDKMBctf",
  "key11": "3mamTSjQ9FVtxGzVuGVYZa7xUdHEx5u7cCGaQaBzesPizheAhZAGqFbtb7tCgNeHjRDDe3JRhhFPLwkMABRhdR5j",
  "key12": "3Dqgji1XqVv4Tr4juVhKTjcZ5sgrEAkgp2nYCND5dwQinsCfbDLELiDuh6urUwHzQpGLymWF2bcKq1VBBrTbMVNh",
  "key13": "57stj9kKwgPDnaxaPodJ2ffbHsa1katMRRxkqYTKigwFdHVhxVqcjzbRd5vWrVoMZghmHMW6EhXMZ7q3hZHhAZTB",
  "key14": "NAcyzYM8Z2Be7ouA1H5DFe9WNYjJutdV5o6RqNVqLK2Gfi8WkxQBrYyghadGpMwRVsWWrNYizEenoxwAQHgpyKC",
  "key15": "5xLnW5VnDndsogqwnfV2rDvzjuoebjnFXWDwXibuGvFgkVVYbGUNBqQeiCpHtZtn2GVv1Q7g6Mjma11qT5aQe97w",
  "key16": "4HrkVEE4gs5CBnq2Sg76jmAX7atjsTPwnL3eAFLcX64W8fBzLYZ7kHBZaCDm9kG2sXysjCKBzswFnDSH5uNb4bAc",
  "key17": "5X79SHh2fBwT6pP8134LVpDdq9J2jC7k7U9MULc9mSsJjUyJ8DHYrWt2oaSowtXSLtpnUcm8t6XfuRrWCExiA5Go",
  "key18": "644SyiEQfzxkXBJn83nP6Nb9LCQAVetcpeB2gCmcJM8bik7iKJxJ3o7ibPY5wqCGJbq6RrdcvgVG2EWbWZia4XxX",
  "key19": "4njAJrxXZdTxAJs3m4UMSSrTYt9a5R3HEvxyTLHh9QGcxu6TBDMQEcnFF5ZRHQzKSFWpvEsPts4PfZFptXwHmrB8",
  "key20": "PEA1fxZ6Z7p6jMZ8twedsS2B1n5tzK7bKE2mhufxxsCBKQWwu21Wt8uiuJg6SuDYvPAAs9ajJoywBGYgFMsyHKT",
  "key21": "53EpXvBTFY5Q8d7ZNQ1DJDUPijkSi5v6J2D5bV78fafaekUvhbpD6V4qN6RUS26qu3nppfRoNhKnNphjXKbADgVQ",
  "key22": "5SKB8x9ySVBVF5NH8YUmLbNz2shef5ttkm9TrBLxWcc2mJy1YHhm2ZzPWjyjBREm1eMxr4zqdougFK37XQhDpCnW",
  "key23": "47Ud2FY6fZN5NiQijUwAdGUCgAJ8UKkXeHPgJqEqzWFqCntbLMhiWdXcT6LdyWaqaJLswamNBmZRs9uzzuHyMixd",
  "key24": "43mp3PcXszGi3mWWhfd1dkTWSgEbJfrmdUL9J98c8jEgDEQUUuTt1aZjDsCdRrwWCBCDCEuhEN4r5mEpQ9GyXg3e",
  "key25": "5NCWnyAjQJr16KUhv2og7UV9xG5jY3Em3PsUdnHT9RiCqQrmwVQKca9aJxzUseTAvTHT7bax5khaDJLivLmFyQXE",
  "key26": "3xPZQZwaNv9KsKLMNHWj2GWjjPhZVUSaFYGD7c9M62win4VYi6782ikikhJzi4HmmYqbDFN8tuDhKF3zDcXiDgvm",
  "key27": "4TBHkV2bpA6D7FhD5P1h3H7TLmwCZTk4QH2fgSZ18cfsUCZ52fQZPNGuPa511FLxnrq72M1qP5gvRztewsRcqZfL",
  "key28": "3qA5FxXB9CNPVXmDcr29wD6XckeERjUCwEyM8dAnYp3sM7S35LxSyPoEs5oiC9Gz1KjqioXj5QtmQXrzRHYFB8sX",
  "key29": "4S3czosLsGYLmH4ZTMY6UzvCMetSkF2KMqa5M77q3UNoHAG6f5mwJz5UhcEctCweNFUDvW6486Z8bnXbjaYFgto6",
  "key30": "2XGWo9K9N9pLqeVLLfHe9NAXLdbunvj8vfTjBQvKUL7j77EKShUEmJ5pwWVaEdaczTceGGDeCyniiFty3TEgN8A1",
  "key31": "3B86Ai4JUsCQh6tAFHwhefBsRmzkRJassJbqAxkdxjvxrGwGowkSWxu48nD9xKbWwPRWWtra8U53W7YVdRicNLPZ",
  "key32": "3QahBCroKsFnB2RoroS6nsfX7oWFoZVmbK2JuhFrUfYGETuaHBo697UZMuzwpdraJY5bEY9hx6uEiEakM9jZugTs",
  "key33": "4HPdJK4JEwYA5FzRxfZd1SEgVhZkkVp5vHd6nZuTJqL8se3eCdGGLQZBEuvoNpkFmeCSrQZX9quLBPZw7srdhg6f",
  "key34": "3KQYbD4kfxmaX1qTVzg2PTDc9yMdGERpMeyYFKdzKoiBHA7CA21mRxYa4NT6P3gy2BGpGRqQ5TLoysoHGeHPECdN",
  "key35": "5aMavVmrkzj83sHhddk4Npbbv2ZirkZ9uRx3rRGcSS4tXDYU3GcYL1RypCC5XzUQpEa9DuURMeX5rudSbiEKQmRt",
  "key36": "3ycnB33a9AfKmEK5kDY68pRMR7u68GLw11tgrP72JafQRe5uzfRihVWqhtomVqkbhHe6p7su1BUaR4koDUd9KDzx",
  "key37": "5XidjxWKC31sYMRyLzW5kiqVLNEBKFAjb1sYoXk95oe3R4LVKiFPMquLLv8Gjxctiy4g6Q1QUBtupkXAQCxcqXYE",
  "key38": "QzMyGUixcCrAfXiwBd5JNdhjDknhyLcf7QGo4ZbsUKkop8pKBkLbZCpJTMMPRQLMC9Jdi3juVS9xA1vjLhe6Moi"
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
