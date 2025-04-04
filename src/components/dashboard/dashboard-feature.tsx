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
    "4ZLcUgdE7HL6aJnaudcdoUuhoiAe2t6dH4zZVLRdRUMZH9sftdpBL7SSD9S5rfpoFqPKC1RMA2wwMtVDQ2NEpUk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZmxzZ85KJTm9wNnbYNZpkrMTpMpPZWAtzS1AfgyBLsD9L7ehVL7LrvvsCsTz7ZvsPum8risn3NFDKQQH9XwYx4",
  "key1": "3kQzU7Hen5WU5j5heNSmbYfMDRKguFwunuqrxPGss79U6Qk9fyAasZKwhGtCSzP5SWyTcp31RwCAZ1ZhRicwhzE6",
  "key2": "udiuGKPwCZCGEffFywYEvXYcRcFznodbykFD3Qt9gGKn8dEH7tJK2yD1cx3fKGEZUcyiucAVuY7TRgWFXKXPKYp",
  "key3": "5dZPXzBH7yoSNeFi6MLU3FUTeTkCDMTajwxgqiR3nk4Mq7zadS7tFtVLX5GYRvyvug9iMdHqo7ieFsEyyERmz4tR",
  "key4": "5cA6jcWNzucW3qPGxQzuaPT8x31PNqwiR8nr52te5gJbJ5reHjeEFBhp2uF1MZS4i1UJduh1BnTnPmRXQrPQNW5k",
  "key5": "3u1t7nT7NCGJgvK1P74heV3e4fznsNfovhmmZXh63U12SKPqH2NxrhAAoiBiwxafcSmWUz1b7D3NkB8E9eTYoYrb",
  "key6": "2EtwiSoFzYfciFY4wuVM6xXTxC9Z4PzSMZxm9cPwUFZTVw712aPCata5o9Y8yQrWVKJSQc5RJFYL4YVVZ29kvGfA",
  "key7": "kjK58iUa9SyFBBBvM97GhvRCwPQoAfbFBhXKnJyhbfR6WSjBVuvB3LYQcXmm3AdMVwnPW3J5rhK6SoSTp6LSE2M",
  "key8": "4E8smyHrHngbWJJ69GVZdujFa8ZjfcJM9dBAcvsJUAkFcwaecqsUjQsWV5ezxya1NaJ3P7wFWgPSLFvggTwquVWB",
  "key9": "JM6FtbavUg88YLD3GUQrMggKEfUi6jyoXzGD53L96tufd4j4YjtfiE1PAciThPcH33Aoer53BNpatCQ9SHemzoC",
  "key10": "2nG8k6VxRRZfbWSikxmJCxRsT49cUvxvEJT1eUEQTkaKvX6Rq4wDmFoBoyHFXjuod86kUwx7DwisFFx9NF5yY6ec",
  "key11": "3yV35no2wJZgbPGQtuAqDnaiFiAiLExKg6nfXFbpGaYLVgYFW6w3EE4HzWYkUoFZHYmCnQtvdFGapJwDJfxHD6Vy",
  "key12": "fwZMYeFtdVDzY83bdXnEHodMjv3SnQTMrV444RiFgG3wau8UEwN3D1hMNU66a5Vcir2e9Z77zrQ4uZGJqbn9iib",
  "key13": "5YmCDgzDT8C7Ndanar3YSEVSFYDuo4CxYc3HUNZzhPcy6VEe6SzQ233xGFG5HCN9qHRw7uBCmp97wy7d6aFqgL2f",
  "key14": "3Nep1PPuVYbEnq1YTiNKLRXPo3QwPWjm1DeZQf7iswo3VtkgPpKBCKTWDDXfK3EYaSyzFFetuAt686vfQxayZ1dQ",
  "key15": "3ZcppPMz4KqCApekGTFvmhjr6yM3BbENeRMd5RK1PQHmmeU6fwagewjG8v5xTshRr2gu2TGX9ngu4Ls7W4BvWutR",
  "key16": "2GW1fzsjQSNcuKiWKLhHnzDZ9qWy6d2ttB7ykqNjzw31x5HNVodmBaZWJ4U43MePjnYvoWyAviWQxiqiE28WJs9R",
  "key17": "2c3aSRZjEpzhRqoSxoP5A7SXjJQsBGdJTvCjct4m57sF2qp5CVETqSEVn8MsGYt9pRrQVTE2jVJmEDYuMy1ptsYp",
  "key18": "2kYkWK3q1h8gYsMHL5ds8sb8WyuPEbosrCc9Xv6rrDDbRDbS9UbZbTU3A9uCkCMegJHKfPA7bQpM2KJfVDQRoWaE",
  "key19": "obw4HNxPmA7cAEa1QMA7N5JJdqtbUghSeNC7XrDRsSgVGSUjNkttrAybo3JigyQeWxrYc3AJUDeJqnTN5ypvc9o",
  "key20": "4uf2MwWJqPBaDhWjsoEaHkViPfqBtCE16M2zBJuWPnSfaY1dPAGErRuw1oxPeRJ8JmarM5hSm17mAbbb7VLdNsfL",
  "key21": "23d1QEU628zWZWUV8pbZbQZ59M18gBaWKvxYXLRmdrDaYPq4WRDJTwJJGBxbAmcQY4ovswFrymMV4HPFbQzkYBPi",
  "key22": "4Zr7Pngc7fhp2DRvFjKe3Wv4nwYDpkGmtBrhCsRStizffqb5h3xwAzBDU7kxQc2Kdn66URhD4tYafTKQFLEbshd",
  "key23": "Dmg2Cu8NYpTTTtCVruqzWBdLZm6sQ8NRuLsQnmMfTwrRG2Koy9mBevGLYsTNwXbwdd3PUzVb36A9Dd4TkhidbV9",
  "key24": "jhiH5twdhWReDC8MGb5ocHowouMzCzEnE3PBFatdez2skHheXskUsLi3ywqMxWwWy2vDamAe9vmC79cS1LLNpY4",
  "key25": "5oRh4QT5xpEGGK1k4cMPz9txMJRwCe6mbroWfTgH5VshgQ1DaEhabYiYaf2efanynEnYPTBYvyhqLNzDVwArZb7F",
  "key26": "4p1Ny2tcez5mNsg4PHk1iF2CFkGZhWZEpbURtxGe2YkSD79rZJmhuH23sTBHcVjDUUUnP3Sn6UHAcbJJnudMr9Dj",
  "key27": "4w98JBgnx6KQTxXDsCYfT8i99ksdqAdMi9dsQCsvSuAx3mu7MkWQDnBHCea7yQg8Rgkhdnxsfpsb17AHpDLRhDCf",
  "key28": "31S2Z2Z7nMbXwQjXC275JjkVGF3rTnzftzLcvAiG4g449UcLrAbaiZeWtnBxhyk7g227fAF1utzU7F4P5z4ZFVZU",
  "key29": "3PvhPrh8G5oDQtbo81WYMbyVXMZNk5VEJHPqf69wVfohotrDeuyE4EPeoTht34quARZVSxSxyJYviDUJVyRw9orj",
  "key30": "4PSCJkLyZY3Zses6SLdAe4xo6M4ijqixRuEhFgk11zLu3sKzV1uFtpAKPjGUc14RYaAyA2oqbvBTXkfUAJzNP7xW",
  "key31": "4RZ9txYe1fku95bkUKrFk19ktY9bMLxArTvQwME5BWeFAufLZtkxdvdnZB3ogX59eMiEQEYQXX4bgg6f8PBjh1RW",
  "key32": "3LEKEuP32UHtJsBFASxG8LF1CQJDvT735WaneQwTuejmYkZfMyUjQfrnuFnTAZA1Qdb63jgNNTmNS77dHwMo2nkV"
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
