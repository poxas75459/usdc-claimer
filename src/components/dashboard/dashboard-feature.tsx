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
    "31CNqPWvriL49f7ZCK6DoBgnmnwBBg58fFvmHTczTt8jVrkX94RCUzaf6R1EWkmk53PaBU255HXPnC4nJ4KW2YBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KTzeN9WujSuqd6pkLDiGUKqEcxMsPS5TPFvfgoZqXLF139EWtWgf2iFn62bNfysnTWdTqParBP93pegNPm3zT9",
  "key1": "5XuEBuQS575BbBxrb8NtjeBZGr1MUoMJDhURhX26F53KCemMDagerEJyG4rToDu39J3ohzj6iMJBZxMRs6whPgEH",
  "key2": "2MJhWDNq49uWGARkqYYqvmFgH2MqGUxbiVRM7GK7xt9m7ERnbrRz5jmchFs4165ofFjLToKPhTVsveimhVeMzLdX",
  "key3": "3XpMKaQ8NbjPR47U2QALBw7CiLVFAeXLAr7PyA7PYHLCeY1HGfns1Qu1tAYRYd4WbY8CdhD9p51HMufFu1t9KjmT",
  "key4": "xa1g3wNqmBcj6eKGTvFHihwjJ9JMFXy8tBLGA4YHSEndG76GPtNC5wu5mTABoT459Zm3rmdDeBZ5hz1nrZxdb3J",
  "key5": "5NcvJAGY5qXwtGXChT2fyAuLzqtbzWY3VdRGgyPJex9BPAxxYzEie1a5ggzs5hvV9bxEztahw2VpjRVap67aaTRA",
  "key6": "2qKs564LB2UaDbPQ3rWwNWMNFPhXifEDsPAvskvXqRs9tVbpiN2NejHXmT6SMYNp1c5rSU3bdL5pGFjHdSDJuSnP",
  "key7": "2Drn5kEWdMTmfZDVp2GK4fFQbQPJngCRGjkdG6GGqEadGaiSGr1e84Wx7DBZMzxGXUE1fWQeqCFddNBU1gzYsvQ1",
  "key8": "eFTBTC7uafHdtyhxMZSWPF1XUJfNwH6itrtbCZkLE8iKDDZcpe3tpp3LG49g8fGZfo3aMjkQPttGLKDTLbgkT98",
  "key9": "67f4du56afSvxFHQJJ14vuhSCpwRHzQsimsKwGdRsEBeVyZFETrwmDKZCDVcsk8Fsm2Ae5GV1MzxyfepyXQWCyC2",
  "key10": "5ai3qRG1NASjfrivzJDYNd4Sjbqqaa21zMfrsfysVUJvPctkpG2CA8vmFd68ozQcyUrNwS5ftK9wpjDJtC99X4yL",
  "key11": "w7ob4GxqP1W9QT96P3i6Y93SJghpBa1AB36HPqpvZ6n7rQ4yUL7zq8cdY6tMqQcQn7uhjGnAXyFjbp8mBGSmyij",
  "key12": "2a33eDXjUvqqCNH9P64wFxaWPnWgCP65waH9vZN5teNDQKheTTwdMYUu6RPzaJJpuWAEL3Y4FSh8GamgGEgs9Jf5",
  "key13": "4LVtwyC93K61m95WGogSjyqWPhYpxgGdCHLd8QaMV5xYKy5vyUGjrV57cTAJmoFKh6TgidzivBercMHgzxnusf1f",
  "key14": "qhuxEY2kZj8yfwNQ4kirMCGvMyX53iYVfirycnX9Lk9Ao6rJ1WESf7YkHoV9gwBhvf7bty96m9KNhVz6LFnnSwu",
  "key15": "2iE4X8weJDyi2cMg1yPGfaQUfc9ZiJXVtQcdZhMpz6Gzoo2RXXUKZ2qs751D5zoBgQc6dQoeoYiBRHpMcGLRG9Wz",
  "key16": "sZENoET3m8qBGJr9oqe831mossfXpZBxx4K3YKhyb5pzdQwDkJic8EmLUGG2AKZd82DrgCKA3fRAmvnBS59BC6h",
  "key17": "4FF2G7G78YZMJUyftKAewE2hKqJ29xpNDQUVAjvzBxUibJfHXHyRuraEiKfzXYQQeWdQ5vqw7DCw7rKSw5jUj2Se",
  "key18": "41xJLfkhmGGQsyGUvHopZer49WzWc8Pq4fZwGGgsAzBFfMUeYG8EzaPBHhmkoNQFkNxKffnVFN1BkoVPMRtdWuW5",
  "key19": "4CQ67xzjDxRT4KxjeEnMcFEyH9tFxDyZ9CtQFbquvjgu5TFDLeC9xjBw8tK7N3bcxk52W2Cn4PwoiK4ttwJBnQ7P",
  "key20": "2VAiLkD1h6GXwtfHM7dbVrjYzMSXQMyxTKAD3AgBKKJ83Qny6RQDCBWQoNohVo5pRnXgkqXCYsj8TZms5to5y37x",
  "key21": "66XVQUBUJqaeWrJ8BDycSESbfny1skusiJNQwadpyVHoVy3ogRA4vytmaGx16MaEaWhHJBhv4zbvbn3Xn1JC6xHK",
  "key22": "3VchvMUGdnPYEhts5HuTUZxjLXKuWJVBp84jDkL3W8WkwaWQ7xbBYwe8sFCH47tXU2Jd76iBs5WcTo7PRF7c6yYi",
  "key23": "5ZNbXevYzjYUJXc8bJvzG4dAoWdAyvJR26CFe2oWsKHJgTFmS59yJZdtQ2bf3uG6viPqHfKwGLYWYoPDwtNS7d5Y",
  "key24": "4pSWHzSKNAF6GZmo58JNA6YM52pztd5xhHaqGJdv3z7DikSEaHLGwAJamQF6Xt6vaKdruU12w5FNVkNQExieX54M",
  "key25": "2wxvEJ8TZts5z5sUWtPZuENdWTMP4Bo8LSbsdWAAHX1wJ7NP4dGkZNSmptTbwcUM2Qj3iZr1kF6jzDMPnGgYpQp",
  "key26": "49XkBVRpyuRVP2bN9fdrdFC1kggJEn8NVidRvNnSVf8voJUT5BEhkkKq3XtNYYMgPqHjLhC3MavLAgiVft4fVC8h",
  "key27": "3ERhU1DwSY4hj8Pja8mUM2QN534WY1MByeECUw4q5eTYywWZHbJKHXbDpNpn4SsNkK7hnhrUJAU5K23YLnAMSHbh",
  "key28": "5NzFTkpf6CecSLNV9LEDW7aZGxNa5EfGHCznSa3n2VmpGBPFVbhFmNHiorAgdYhhdjmPMd9N3zvzMcKFAwtazkiQ",
  "key29": "2YBDtB6FxydFCYVnf1mbb513kZtC5ZpS1VXqks8E12enx6L3h3RBSHdGpA5ieDdGrTr83znGFj6hrwADsSwt6Z6q",
  "key30": "3UvaGnnZm2TuaXRjGXX22c6jjvzBYHvE4CTFK5Jgr79LYPBBMfLKTzLCXUZACSmSBG78CSaoZVXy7YgRc1hdE1sg",
  "key31": "8o75u7JCRUvhCMWsKW5NgBYubXkJXZsLdQYRTrUbQTkXF79YqP7mCuxakZx9ZxwLauEw1xyVctFFFDvKaV5YEzJ"
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
