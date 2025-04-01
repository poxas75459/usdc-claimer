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
    "4k9ALVTp5Z3arwge3zyMVgeW2iKbU5Y4g3yCSpMJ9XnaB6Eq9y468wh3e4P1rV4YJLK37BaB2XAvBqnYtigzSjyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dnqqGX8AjyQggXN5n9a3eZ9NYCAm9uCcygwdCB9RCJ8K9rUYw94bLAkZFS3CWM5PRXJ4CAcCvZ9A5B9DQR9GBPD",
  "key1": "25i87Ymw2oNauw5ZSWZkWCmpnP3kxEEBTmV4cDFuJsfMpBjf3BKAT2G8xEYp5UQDUhGeVt2Agk7kTUCXGJHXrQtU",
  "key2": "5YLb5Y15MqLMqyYsZpXdmpHyNUsVg7jUbFXB9uHHwCQdVnu8UpCUKnQHK1yPpkRkRsFshRWpQNGCMsuRegN5SLEP",
  "key3": "2HHQaw8FUJd5SrsA6Fb5K5MM6VKLWfXh6QAQGAzGNCVffcdEoiSv8q5qctncfj5oGA7hU699N7U5QLAV4PiFXUCS",
  "key4": "9L1Sme14zjryg9P2UqsRkfBcsb2Ww2jeWJd2kE1RGchzz7WhhPQHsULpcuUeLhKeyNiNfpdBeeYLdpJtDhNMfHV",
  "key5": "4nPDaVU2DSGVfAa6bP8Tv9yVXczWbtzuQ4dBm61S2t6YxsctK3CP8u4bkqiacKiiR4XfDMPrUgGtjuWKdhbZ6tes",
  "key6": "VwuP3UMtUts8nyyq2wu83n2atjZBukpSZ27A9Y6WrqW4UGcgDPPaXVgFYq5Qzx6RyMbSnpGoPPAG3sWxiaprz7X",
  "key7": "3rQ5u7xuGqJbyfxVQkQgxDEUa5rUKpKXjGVnx5NqbJQGEDqG3kFKxp1svKWFoDSpxp5n49tUJpSMaSBP4WTqUJwW",
  "key8": "V5HPY8LjhxsqpfjWGBTNkkngy55cwmgVsn9r2KUNB2JFK1qZa5YkwFD8w52kPXdww7HdZN5yiMWbz7HenH488kc",
  "key9": "2tMqWK8bgxtixgpnMTEHVDitX1FDVPir9nfBN4N2GNPBsZKdUAETinGbiyBgZK4q6rjMxrJ8yU3SabtiuXiiuhJN",
  "key10": "2FFt4WhEaTe54c96KhBAcQLkjVfqiGm3k7MMoNnPHomuT6hCZWoZENd9pDWdk5DAm3P66oCoBcjC4X1iogpH99SR",
  "key11": "X3b5m8m7XjeUJty1vfZfAQ2c16zg5dXgVC7PMLuWcNhnh3bGFHMTzP2WUeMRuM62XZ7QJdyeVK2HafmThd5uKxo",
  "key12": "66FzroYVNXfwvKUbosYEeyKgHHdsjBvgpvTLmbBAwcnbCbAhE9LJsEtFgbyNrZAe71AyqxExWF5zbk47c5kkwixs",
  "key13": "3GZBQoojf7aG6gVd845ERre8KFvKzT28UWR24rDRBf1P3WHfrciPhqJ71shqX6LU4jUrTQLzJnfbvr3nMtC9RUHP",
  "key14": "65FjWFHmJpsp39E2TsSogt1KJ9qJ7BayymY5qxkzWBciYnJTasFGgbRHFLmCcVVa7LMiU3Vk7uS6Z4jP5ctgHrnT",
  "key15": "4P93d1v3JhuwhzhTL4XaaWCQGzBgEW6uMrWm4N8NBQcLYgCojPbayaxZHxqLZtHdc7iQiNZBkQXYwDTDKitRwLWS",
  "key16": "2FmnKQhU36Bn7ufsAauH5BnSvHqnPARV1MC15pRtVKUGGBJSrF5pUbWAHJ5w1ioA4JbdWeGANrB1FpAJZv1aFoQY",
  "key17": "5oDzaCAhGoZvDpYAB3BqYKqBBop8NRTfgmu28tdTCX7kqnfZ2PK1nGY7HxNav26nuyLsea9hrDXMTvEScADNkxY2",
  "key18": "5HPri9Z4Xe1Myv55MXjvr8RkPNz7yxK3gbtNwVvdKSRrs4XqLoc9HESZYECLbmzFQrSTJWjDefS92tE2HNV9TtKG",
  "key19": "3L8DvsBhyUczxCpJFavkpJ5NCX8yFMbXXVDL25CYi2S6mNQAiFasY74ibJprCiN8cZp4QXcddqQAgnzksKCWa81V",
  "key20": "3DcC99W4dr52GHxUe4vPMdf3XJf4NixZLpKeBLd8AqrgbyVisDaPpDu2Hk22p2QDNtLWN9dECyCLBMWCV1uQzr81",
  "key21": "5FRWxs5NSad3sSVbWLS4u3gpskFU3ty4sbypmNvVPPq4xtJqk9auHFquT7KYaWVzsZdCFaDUxfSsiiiim1np5o7a",
  "key22": "2aVw4j4tMiYxRp7g2QEZ7bFM2cesHUar9ddzZWc1PLyaxPF4FUJfArtcgqAWnqrDdePvNF6nK9GQg5VManizWc5n",
  "key23": "3dVSGrcwc5hSDwsoBy4VbbdbXDkwGujjARd5RQWUkBF1fwesQ7A9gv5cmtundz6VYLYgP9X1fqLwiSnkKHYr2pMX",
  "key24": "57geHAWbusn7VRbVfo7h13EcCw3h2ZnfbhQpU3rVSbMSMiehK6CrMLDeRMwidocCCUpzGBzzV6KWQMNSiGtWzmAp",
  "key25": "KJJM7iwsRMnyAbb1ukgSfNCbthfN6Q5k7D6vFZFwBjjG1aFrKuKo8HJm8aZfCbvaXMnYQeRnmFHRSBfhxUUtxWh",
  "key26": "6DFZN8YywxZqN7k3VAfBTuKQ8iC2vVZ3y2tUZHUCzbJsSJmdEVa9f4sLUuFMxnB5qwrEN3Bvx8GQnHnUg128YFX",
  "key27": "2DHX67wsRN2Taf4SKPNEgHHeN9phuyZYPxmiz4NvHan5twAUWRj9W2gLYx8Mjq9bDt42Lp9TBMRNM2xzmPHynKY4",
  "key28": "3AMS9btsRpdQUo7J31P2LZw9cQo5TmxV3fyAsX8XNTmH1LEmRz1ZhwSqBciss6yFi2WB6VjFTzgJPb2kuHSfcUCK",
  "key29": "2s8N6k9vsy93cENbu6uEGD4rpJh4cy4zoUiEVAfETEneWTsnZLu6bYDuYkSQYXX8zCVsFVFqAxJ8Xjg4gKPXo2V9",
  "key30": "wCryAUpxcxe2wxvRtbgB5u2zT5vU1AQFY2zJCq6aPhjCcegHGu7VkM3cKxgg8dLUnCaFUggbBxt4Dvi1aevagpz",
  "key31": "4R5D9KbrgGzxVyor7VXy5shFst6GyUVEF4q9VEnBu1PvStBMJqqz2p1zDu3tkc6fBHv4Dz8KfGgMJduyPChuDnoK",
  "key32": "2AYuYRQDuFBd1bGnaemn5T6Mme8kBt1ezjzDsVEn5iN5wCwDYEgyQR7GuzjFCmQgjRrKz3Kwa2mCYuEtznVJ974w",
  "key33": "5wKUhUpfD6UwqWNqD5WuHg4jhNdzRoKD2K6rwYMp2gXio31jbomJ88igRCKGzEepgRN1etx6QqhksuuR31ZrZ4ym",
  "key34": "5MACYQSeZi3SpJ4Q8gY2Xs7GV4bKeNwqMjSSLKCCd48UiHaz5xRxAuEAmLxWauxS7ugYFq4YfDPw2pReLxfAqAFS",
  "key35": "5gNhJhddqD7ZzFygA2RaEZ4R7Fcmkr3Y4Vr9SQNhgcX2LPL7LP1bF9LN5EJjwqH1iNMiVKAtVkqf9GFpibf8EBN1",
  "key36": "3CXfXT4Sea51J4ugFNApjLo15B2xErcdcrT6djN4TbdtUVhSrtWtEW4mdAP2Dvd21kUKRKcAa84vszZXkegRZQdW",
  "key37": "4u14q8BM6eSLUX3VWACETr6nKSuTbCWvv5Mn5jydAH8efSYwJxyJjUPkdhs4WrKGsEbhqRUzVHoqwnmNw2tvMDWe",
  "key38": "ZUb596Hk5m1x2232svc7j9vLZ8CbcYgVcdaca2S7ajs13zEKPUeTzF16wqWtrP4TAatnkS46uBj3Gq9FHoEfDNV",
  "key39": "3CEBbrAmxXJBzE48W4kU89oRL37K2SDrPbGZ9CzQZbmWKGZY4XqHXRQs1DcS53mMhoVnvH2ScE8QJztTqEBcn8n9",
  "key40": "4duEM3bYG8a4ig1K5W11atYFzUwknAv2td2ZvLKt6H8o4vt215DwnMCbJenwjW2LCDLLUEo9RGqWzburmuK6TTb4",
  "key41": "8WSrB6CwNB7oEcUkXw6K2cuqHajGjnGbvMwqhAQSBLfKdXFowniawNAMxVdDUy4S5KnFK8F21F5iUUgTbPC9LiT",
  "key42": "3E9i3FtfHiWZdzCnHrqTwFZV7jA6onWw2v4XdKFhzChkvSNpiJCaW8YxGkHW6PhyXB9Y3nwvg88kSnE3MXsnn8Xh",
  "key43": "3nH5RARvZAg59YtCgoLWj55szFadihNvMxsAVNxHKLcmNXvETDTsBArM15Q4NRAtF91Jp23spEE7KVafWZVgLLPS",
  "key44": "2iMHH5TpYHqS8T9jeidLu6EJ16eN9aDRYZY9AqkTnK7Z1NMLGJQnvvNdeG22Z7C35mqPNFZoYzxECs3ADRZ84tXW",
  "key45": "45VciERGvMC3brnc51V17cQA86k6xb1ZteVAL1H5iaa7zNwd3eVxcTTghUxbWFCPzkRV3kYrw8MLffX7qt9qiVmM",
  "key46": "31yJA5FG8ztJ1WTCv1skwVDgMqwZ1xX4J7jTuT8XUHroyS71MLWFc6PqWTihddywEbjJAZx8YyPiYJVfw9hMFGwz",
  "key47": "27SSYaubLJ8caspmpq5nbGP6crtdqfGb7qgJMv13TFhVDYedSsHe51rEBKRxc33tZgbbXvkTfBozZp9bRJdzR5BU",
  "key48": "5vxGfPN5VURgytfY6C8W3SMJKrFJ4681o8BwEf8bbTZ9rERgwy7bskJ7oZrsnJdy8DKrg3kEDhg2wiSZ6jaDRgjn"
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
