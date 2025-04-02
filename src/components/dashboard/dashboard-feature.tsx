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
    "5pXfjyzjrGdSnXNg76tvSaombYJt4hXZC4v1gvBc7XtmjjUM7xkBYqEcTYK6YaDT5BjFhf9fpQF91Uo55LYWX5QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMHfTBCiKbUc2JjiNHUESNFDMvnTitrHBiFyDr6LeF9f4zS5KU6PGCDRC8dnRsBrfkt6zpfMdSdKjSPhYb1fJYZ",
  "key1": "2XKay44pWdFz3Vr8bsQ3gh42d3swdnessYD8ZphU9Cqw4an1UBpYkupuqTMs1788Uio4t6JjvDK18Euw2Y8qY7n2",
  "key2": "5PxgwLPV3R6VkGeTyKGLjLpccMt1noaQG2bQjh5aJU5CfJTSBAasyzwNxSqNnU5LjsnjPKiSNV7Q4baVS3aHNizu",
  "key3": "5fj1pqyNFna16QC4vwn1P7PKCmXfuJK3FGdi2inehGQLy1A5heiQ6PF81SzA5Pe3nSQ7z7wdehxY8vfipKTwSqW2",
  "key4": "3BsqrSApdvSnMhF899uD1jcwREYN3zdJVkfyB4GdbsEwrvnDGvSyFshnjcjK4MnzXqZirArhqGpGsmBTvnNMgx9G",
  "key5": "3WPo4ZRnhMp4D8m8XN6XFFbV14uDV1UG5fG7YBJw41eqQAUiKDV2xyzrZ2fCHCMXTChqSN2LdfmfchtAk17NkYdR",
  "key6": "3XsBm9JcybwNRjNPG8yoZK8gCmUsh4wHez9Cs6nvZd4UZg6Xj4hHYWa6zs7znJxoRR6sz37wZYN6ZywzbBPkZct4",
  "key7": "55S3vWcTWRUWP8ohjQBpBcD4JMqLscbV9WsdB3Rg9KRF2erZDquitX9zffLVBigZnXdPCwFhoQUAkAqiikpDGucd",
  "key8": "EnWzhCtqj1BHcURjFaXHzLayxdijNWYGfbQa9pYMyNBNpVdR5JjCZp7ZZqXYqEfv6cu5EnSkgEuc37y5sHyEeVN",
  "key9": "2rJuhyhQMzRndYxJSNhdhi542xABKgWaqYqggKXqM4V39ifjLLHkGCdn2n66xXD2j2mccWWKoEuJ9kmp7YoNtakD",
  "key10": "2TG7YcWe24khiPu2ZzJPGRyWDUuPassrzrzkwgpabC7FewHuD1t4gVqV1L7wvqDLCgevfD5d7iYeMSzorDragTjT",
  "key11": "4wXsjyZ9WEgXPYLY1Ahbn7SYQwYAvvC4Te6WmvEkk1BPJWgghaw5TbGer3pgWcJ4Kq7jPxAEw6gt6Hn8mUkY75Kn",
  "key12": "2JXcRWiYSwqg74Tax4ZN5a1rMQwwDh2SMz9xLpwwFFVqXM8ZejhpspiHn4wTUwLg7FX3PqvCqv9sbRHsv8MHct6e",
  "key13": "22tSMSv4RUF4kstwrKRDGRvuUXdeqd1db4hh1Zzwo6z3sTYYaq9nj73FvLvrrAUMcA9nqH8FZ2AqFd9szJodVvdj",
  "key14": "4QvZJYgYqausaBbJNCgGtH8hJ2otYsxud1YbAQm1tKYQgALKqCgFKiuYzryyXi7RGbGYYcZejCVk3viUmsBkXhY1",
  "key15": "2M2ia38SxRYunUXgj5nXZqsoerDGP3CR1R2VWpT6ahTHmtY6SZwbWTVLNmdZsKukQsPfVWkvzLqmiWNQ2u7q8gkf",
  "key16": "dx7LRzuRpQvmHkr2ancVcHVaTdtFcJMg2Kw8sxHohYyNGBbKtU5r1jBVoWMrduDFbsqNMWbnN61hvtNg2haE5ZA",
  "key17": "RuUsrsvLnPGVouQScsq39gTBfBvpDwUocskaGFCuJJMdYa7veRR8iMVGeF95ypiVdVpzsWPZSgj5S5g6HKjCLKs",
  "key18": "5YDjoBNqLQ9pw5BiRHpyAPKQNH4F81RWXrTvP6ksy8KaaqDS6YBZD4F7yqQnB69VjNJVzRR77fGgjCsL3eEvdzMr",
  "key19": "3ukyDRGHcUHSfT5VbqDJD9GXTHMNmdZpMsFC2miUr5aC9UhWYQZUujQZqazSv6sm7xVGDSWyyvyfsrVJt5b5sAar",
  "key20": "4GZaEPGajb4NauF9dvyekDVes8qK4Dd6SZZzkxwVYGzj8sR8P8s1z1ZGY9RCH5FvJSZyXTWc7Vb4xzghthnGnppe",
  "key21": "3e6YcRbqFePQeCaDXCFkKzwa1a1k3takYkwsARSU2QvgnKB5nzEbwAT42zAkHZHHrsZeQFpxde1QLNrWden5WMN7",
  "key22": "3EgZVQ3QaAe3wPqhudJYiGmKASpnyTxU7mV9ifJ7KnRE15drmojuCPc43rk6tamcr7qZpoDmEmzqJomEFTaEKLF6",
  "key23": "5oZ2XaecFMLq2DfnZAcihzMNVjSqX4sYZmy2Yh9gggmTZmMkhkeEFARXAYesVZewzqVufjgfCzaRED2ny5f84ex8",
  "key24": "313cQcsGE4aV2WNaDp8W4iPpACRezxVnqPMUHSmaezB8h7X5bChbEZbhxdh4CA9LN3ZUL9visz7sDjiSn9HqyjGB",
  "key25": "5GvhPcFTzTKnqjDnWXDsvv98LVN8Sp6WBMopHbmD9RQ9UmUAsbmJSvxYGSvzTQ2YVsN87KhAHaa1bRtNvr9jYZzH",
  "key26": "3rZLzUGUp6dHVSngyT5xhTCmTHhH2x3NZxvHzG9JazAoBgyR6j6fiMBEAMzF9qbdechyYvxCcrKc8cRhPWiGdUFf",
  "key27": "5jiWhCDvXXmifUhtxXNyAYpjho7nGzrTrNUvdcW21YtVCwQiktV3QprnQVRSAKbD1Vp5vTcEVkVNwuyrPJ1gjCT2",
  "key28": "3q3rvMurN4cb2AbtZTPiffhQ732wJNFBWGTvnfBnLUifKJ2g3Ca8WZe3PRRQ24YN48CHgynvXKqnceusmvcm76aw",
  "key29": "2ic8x1Z1p6HwjJ9Wy4F5GWj5HFKxEivAFhVa6C5GXGaLnZddUTmZsxiE873UYV6A8rDAjq2PFB978Pp24ewfYzkD",
  "key30": "3WaMBsqNTxpqnhomfqHdHyqdfFSeYctKXmgMGzZQCWXpSZmRpPNLFDseLe6xuhUTvzPyy26mnxthkM6UBXvncCxn",
  "key31": "3diCUrpAVKXCQxEbysMQt5wEFt8QLLSWkqbi3eB358aRixjGeCWnSE6u5qtqnq3PNzaETWjz2im3KjKLhPLLKYWx"
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
