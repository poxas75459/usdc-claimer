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
    "fyYtTjJQTsWM2aGKAySVcDJxr8Xqz9FRjSk23vERsxcUaSzdqnyz9pcKKcnZCnsH9YpUihHFoxTYjRZoBwjgyru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHfw5VPPuqCELLEsCQxeN1CJLVCEb567kckrunKjSZ5XjtXmhTgYZkwHPChdzFovVbQSXeLSJHeHpnSfBGiuU28",
  "key1": "3NedNHqzvBQR22XRnRjKxTj7QKrh9i1Pe9VWVumdQQTzhUwUPFMa7Jd6XCh8dR7A21UfkVJnss7j2Eh5C1P5TH1x",
  "key2": "38v9ZJPA2AonLVfTv1mJiiJqwKX7XAUpDpHYpQ2FDe7EpKQH3rtG9YU8QWEQentXcCVuERVQAzkZgDAmKdTnJfbr",
  "key3": "3pLfpNd2pMtieYpg5EZ3x6PpRUZgnJsV3w5vG2Cf23QpjBszFbZE8ZLusbWM1NQSzf2YVbFgfAQGeZKkUDt26RCZ",
  "key4": "7XajYHg5pSJUmCxwnViWp48egcaHwB43Lhw7Kq7D3j9jDAKrGmFz2vrx4jboEZDYXcUik1kuQYySPvkLYQ9hXy5",
  "key5": "4gCR5ENJrfkSVZeV2rr23kTCS4HXY4U6tL857cNVvFzZS7hJ4UmeoAgykqMJoMqc9B32nWHP3LmM3fKTDKZHFYFG",
  "key6": "5Tm7X5YJFNXVXeJLN6wKH8wqz4trdsSWBDcyur4y4qEqvwR37t4wpMAVkPxe5Kf3LqJWmd5LEB8pDG5VNkWUjeVg",
  "key7": "2Lbqx9fn7Wq7DuWpAC3W3Sashgktr56S18QymVoovwDokisXKf9J2RizSpb2483LfL6yNoboJzRk9NfGPFnKz3p8",
  "key8": "4P77bhq5R4Q9qjSdWH63XEJTfZkRGQtgzWy7uuGrZzDZNNQLoTfeJcD4ouTL7nj73ofpGjPjzUjLeeh6xxL1aeMU",
  "key9": "2BAdCRCrDt6HC1Ze2Mmxcys8wNTy3qCJwdKyFoox2bZFokjmtoAFwP7LfLnDJ64wxgmpub7phLx5xCmjfscA9FbW",
  "key10": "ERy2wktsTZFtKqLkLhWGvU6UZLdjwKGdnAJsR5ThQzwyUNHn6Q48BfJPqvUxLSqsvffgcs5wXHi2CxXg2zeoHMm",
  "key11": "4rwcdmLdUxjfNrRw1ggWTzNu2moHR3EkXcZu4KJW98hjEzUnUDkr7YimvAjqw6La6faC8H2qyGjRfrDbSRuRFQHy",
  "key12": "5rwGVLrVJouizdMb4Kmpg5uBbVkpTqM9ZqwVakBkLpQeEifoJ2ehUN6bHSxpwoyPqg5vWY1rCgQMbomSeGA1KGiT",
  "key13": "5kqbq63zTJStWC6fpafjbgo1dqJ6YXdZSdd1EHSK32wwGAB86P41utnkhrH7k2GDSQKmwjZSsAXE2hGTTTMVQhUF",
  "key14": "SFTTHLkHVngDsCHNHTi2NakLLRPRHFBUsFHKtaFCePjXs8Gz2tjxP3eUxtRoTaXpbkpbqLQNGqK1oFhKjfh8g1d",
  "key15": "3ewuHkiEXVGojV5B7zrGvYQpjJLd94ky6f7ohA9nwSiRC8vHarJJooJEieTFh34117TbEoYKUD6h4ih58Ko48jtk",
  "key16": "3uBkPdcAcAsjZ65KqohYM1nyLiHyKEq4do4Z5m9cf6wPXmaSHQLmVUdroYW31fErEdWekoZFhffvaD2nrCGvVDL5",
  "key17": "P2YkS5oUX7Pg7MnST3oKM9vgBkCgXexWGbjFqBxGX4XaWrPsbmmdUdpRgQmKfi3BZxorHskfwBBWgyCFWcKBSwP",
  "key18": "2qgnjzqJ23mAL453GWCM3Quip3PiAkQGNwzWWp5sn93gXHjPZZzLRLbKvh3TyYziBeJnHy1UwUzZrzaDjCscdAHm",
  "key19": "45x6K6zvBZuSvSZSahe7iXkeTGThsEaxaK4BKCY5tBpZQ21vQC4BLMvjHBAYqotYQuCJeVADq3PRf7dK9eP8G2Wr",
  "key20": "3gmQmd8vjNLHphmsQg1hizB9GieQch3cpcPpec8WFLzdcLTsoEYPwjozkPksr5uZJyMub3eFiheivNjkvX8iaAZd",
  "key21": "2JavRsFoTrMUhPmztwuWJkPa3HgACHJtK1ExmTYCn8AFdCuwtTrMZLqPRM7HPrNmnCw3k8UqyCoLTdwYy31BmPFp",
  "key22": "3He6YM1dRtNN3eke8pV5T3JAMdGAHpgfQkstGwWZce1mgiAKAnCmt1m3pXT6QfRFoWLCVzB8xFy2sf69dMgzCsUF",
  "key23": "5vFQXZV3oyfCDh7wASr6hP9fyU4dMQxH6Uxp2KYz1rvddXKxMFcx52uj8AW7tUpnwDRnhk944A1CbijzWcQtoufv",
  "key24": "4gmkyCewL4E1yp7H7R2ma5kraCELLbzH4Sj7ucvdKCpg6Ff7YT6HVujdPtdWjuAFSGLYWbhT1CPF8HpJ2vh3jiu",
  "key25": "EnsST9yJJE2FHAkS41Fz8b1MViPbwLoXi9TBmMY1ZKSw6xT3Yr8QfKMuqn4gwbA9sTcXFDyngyfBQVX81nNS9pW",
  "key26": "rgWjK3iF6yjAtoP1xLumt1wnGb6yJCWRNQN7vhxNqTYqCGN1p1yXpQaPAbvsR21GWEv2ZbyjYZBohzuVNGwnxqv",
  "key27": "KaFUmeWyQbVanoSEfm3vzGAAfgXVBgbqcnQrbp9uiy43UHUN4P4z8TfBcRpk3Y9YzNV5KnbW4XmPytNCbGHWPKi",
  "key28": "2bcYhyrd4h8hQV8Ci9gAknKNBsXvQRFofxtKVXBeQS7mSYxSHvtqxj78Z6rb3oXPhgm5fxCjgiwG15WJmG8NR8Zv",
  "key29": "3NwDzkrDR7c4CLhbkLiHXVqpLie4Bjg7r6MdpgQqgFZQekq2FonezeJjmmiW1U5nfsts5kA8FAi8eKWr19fd7QAa",
  "key30": "2XXyeoiXfizrtT3zveUhfU8M66x8WQYzb7w1UYHuyUj1GUKg3xaKCMPPBsN8TbwvQKotdsvHY76MFA7Lw9tNQAJy",
  "key31": "3VG3rMhhd3fcoN7HmdwADEs748pBuLqaGYA9SZNCkmEiB7dD2hwav1zGtiPb3dNEtsRhHmybaBDSSuJh6DtkJgw8"
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
