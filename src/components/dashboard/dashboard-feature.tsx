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
    "2SAX2YMLb7Na7ZQENKaEey7vg5VH8L3VYQFy2ryQthouLNVXzPTPEFY17py4X5x5VdKH21E3R9Gb5rXLVXG3AczK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXs4d3RX6xgVruqkSVYwAaf6QW5FhjMpy3hiQKAGGsTNtiu71xv2eE9qNCKoj8PNa2xw1q9ijTcdg5rtMnLKRr1",
  "key1": "2zXrSGqQWprfgWvGgjyjuTKM5RVMmqSoHgmFxezW6P26d2VPta8mh5apJNNBJGhB5AuAw4faS1vcZJwAUUvfWymN",
  "key2": "4a4UG3YX3NMTbGaXnr4BQkyunrvJWPVaq1WzgS8nGYdpABHgVk1MruSF2GfQqvur4wrerUaBTq1AFPynQFgXpP4H",
  "key3": "2iB3YtvfkvddLboNNt4jmUEdqQX9YsBjZUvkFj9yYkHy1Qbc9sdTnyYd2oFUEybFeFYmSgXvuqw85QQ6GSEVVrrz",
  "key4": "pbqmnyJwNsx785bfmx44sAFowqSaVenEopmVUxpebBfJL2iSdzin5MdAZTM3y75PuQzwXjBX7v9jdothM9DTeDX",
  "key5": "4S2Z6izfH4HjzQWThdGpC5zWSDPRJfYi42YBoXAzfmTCFcSTj6VAw83t6VJDsKEAizunrqe4VKYrfDqijpvK22wf",
  "key6": "6BwZueJ1DVawNAK1nw8hsiZTnuMyXUwu4mhS7EuofkzgBo1wSqLxtYY9XWxv3yf3xteZn6BVkk33J7gvouRroRg",
  "key7": "5eMojYzguWV7Tz8z7CqTzqzMjEF7uvfc6NvJp53izXNKiZHjmERampgJf5iEHvGNtCU4dkEyE7sHjWxQBkGkUDyb",
  "key8": "26veT7RhdoT9PfD2wA1mFTXspbMhSWvDCLX69Cwy6gLQeevj84koC4Fx7ssWJzuFk37jXfVa8CjzUDVMdNUJvyLc",
  "key9": "3DrDNFwwD7hFXngmNUdBLGSjt1iN71NgmGAT9UKRYZ7nRwpymrdd6hxmwZtXMzYAigfzWUJtexJNjQ3Ro21spp8f",
  "key10": "65wXwAm36J12zY71mw481kMnjWXfWuADSUnhCoLRWpnknUhcMezAVbfd6FXXusZUeHjoYNzWCTgP4zgELD2RiHiB",
  "key11": "GkiKGtyi5J79V8UHDBi3fSiA4j5jM8TTF6bnuHumTGtYWVYtbd5BmWSd5sV8TvEipBbkghojh3s3SbzV7FGrTUe",
  "key12": "3kfVm9DqgztAj1rb93b2PS86UoXzYPTNAhMsDJEWCcTbjzrjgCvJSmrUTsrbfnpCcG3WxTM3hCGLNYtB7g5gLihe",
  "key13": "3Ro1w9DEC39g8qXHZBRKPf4awzsU5NQPCfgc3V6EdrhKxBY1gaBZqiMHny1VRBK4WQgUhNeLxZ9J9uq1nYBTo4Tk",
  "key14": "4mEp1JHVUFV8xxaRH6EMK7bxvhQUf34x43eZcPXHBvbxSh7QFefMru1YExaULoDkVxxp5VFV5Qz63XscDxAfLq6w",
  "key15": "3dGop5yiExG7e14AsbKWpV5PLQjJdNoaZB1kzPudHe2WBf7jZzuvpWdMJccBgViMJU3q3dSUUb4YXm2fbtfT5ZY8",
  "key16": "rY1QEfXRGJ9KnorwxPxHXRWj4mdxAaP9f47mvdf9mraKPwaGVPWjyxEYLs9eTcpNQfhd6nL5rQ1wcgTZKNaKR3z",
  "key17": "4WhVwrtemgNKjzs6HWG2JSPRJrCjB47zt3siQuKGqWK2VNQquRKTkBvwd63jNU3xzmkTd4E1Dy456BnhrhPGSDap",
  "key18": "5rXbJtj41BjNm24qPcMofgD58LvCrhutaZUhxGE6wVVxrqAYLgk8YVnAy7me3xNRky6nRs71pCk21bbUGnoVmaE2",
  "key19": "33E8fK8eyqxebk18cW7zCXhMmGHZvGjWWo2BTFJ2zxw4BdYMfALBWBy6AqzGGiLpMrX1ZSLQm59kgMrh3A9aZNa",
  "key20": "2Ff9HBjquxWZE6H4vfp668VhaXZTYftknvyrgGEki7ygSEQhNu91XWY7ss5KGguNhBx1j63VzmenkfeQnADHwGGC",
  "key21": "39reCHvL8pXCQKEA9csYqHRzv8tyUS2q2PUPwhXqq1iKnqM6AUTKVvJZk3MdbXeGRvK4UWuKHQjPUSj7bYGkLTFA",
  "key22": "622M7tXC33D5FZR2tyxLDYgSMkuE2cyzT4aUXBN2NAZJBRLHD1kKHCriwGdzHAe6SwSH2Wt5wd28w1dY5hFG6bQp",
  "key23": "2N8CANw3t5nHyp9CQ9nkzcZ7bfAZGuvBmWwZtQw7daddcvQJyuQUsSwcWQNaY8LLTkiAU3BjqRRbmyvaKJTep4GB",
  "key24": "5wcHrbvfHu3X7VfUA55PAW31YS6opY4bSi8RFCFdt5TVmgu75KvtMxtTvfYvYowBV9quKeF9D5R5KVBGZ7jQeSze",
  "key25": "3bgQJFyivT3vnqjbaFkiaJ57ishddtZrEcMSkbc6Bz8DbUZUMbBBCEsnEKkfsrogLND2yqdFXEwVUX1RnaFnpJKw"
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
