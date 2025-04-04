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
    "2M7rojK3MC7jTgMCNeqP8SBrdiLd4Cuhbi1nWnJ25q9ov49MNLh82AoPHBExEA7vH62MDcQNdr2vwNocu6HCjch3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bSUiqME5d2kJjaW4dgxdEA8PVicR8oUiNHqm32GFtZarY4ja2yczcismGjSdqBLNsz2Qud3BphnFJXY3hqC2C",
  "key1": "5HVQBWCBodc1K9eVJ47eNgvoHc2chwJEnVuDaTwCTydMVegLxVgkfEqAEid1rVEoVnnzdbWQGBXLtSH22PV9vBMB",
  "key2": "Nz1UKwKhE4SumzWXLBy2B5oYUK7z7ukdQPGZJJRaa6idAufTTbF3zBHETMbdjVE3ayhtrH2jyPHJuL6AKyFdfgk",
  "key3": "3McZmeiL7XQp2bXsNhNBXP2afNFDt1pCK3rkk6MNEw3chbmpckeP27aHwD3TtCGs69BgyAd7FkdzkvsKcLQcyp1W",
  "key4": "dkCNL7AABAjXVHw2zZGaonp1fvX5uDA2WsmMKTtHBzDMHLPji14gjNYHzJgAyjwv4Yp3tSvxqzw8yxTkG5zwujY",
  "key5": "66h78zk7AuTJkEQAPkvtrRME3f9RU8kNfPE2YskfoGwA4WHtCh4rQypSiW5nfCRyribfQPYpzXyb2ZDRck4NLAuK",
  "key6": "4FpSCt5Sstz24xB1zJRJ7wuMPR76FhV3cUGnJWNJ57qfeZe4Ki3bG9Z5EgvHtUjjJdHuQm7wPgs1bk7Rgnff7D33",
  "key7": "3eR2HeHC9bzfJ1CEGn8UV2J6LNMfk7FimkGFMWyjT4ykoJnfXEjGhHsaD1mKnZTQKNH4gneg1PUfizAy8Cq8nCWp",
  "key8": "3HtkAQnjnAVAWdBSKGNBCQSefDAH18yT7UW6zWmBN1Q4Bz9UATh72QLMxnAD3CDE9EpcdSUTvLV9UnMLztK8gefx",
  "key9": "Zb3mFJRzQMWkwFGMuu93D3stqWLMYPo7XXeKq42Y7M9CL43z1LjWZEmAaHrJabtJhaHdH53dPwyZNZZzuoDMh6h",
  "key10": "4DhA3WiJ8355oCkKkikRAcYVXvTvv6PwTVBSpsjbNcsJbKGf1GEAcijm6RE5niTmK5FNrfsCUKXpZuQQCKvqD3XU",
  "key11": "H84oeNnnNE8PWBh8o6ZUjxjfSxx8Z7GAp5LF1wp79YtH96PFj8PwFHNB2fNJXgWbXgReMHy6jBc1Am5cn8PHqf3",
  "key12": "3BxFU5cMLAAQsWFztPsi5CKFZMGnBAF58PjC8W1hDXgKBn6pNwdRJtXnoFEudZSU6ZCm1qAkj4fWVyMmDeUh9Lfe",
  "key13": "3js8NBVPgdJovkimLGVNU5qVUsnkgx78ko64KMwuq5j1xzDUWgQVY3L4mDggUXUMS5F4RY89WcboACaT2RRSBEFZ",
  "key14": "3NeKg5vMG1TysXbhQPPPzHHZ9YAd2wwPAvtcxmuQReGgpTiE5jCV2maBJ4948uNVNQi1zUJJZXkbadVBUaRbFksR",
  "key15": "4fqXGHbDoEtNQR3HEZAKC8Dwk4ft56kR9GpgHzdjfqiZ3qGuTz5ggxk3cBFUAqA3v2wn2ZSWtQWCz8jC9EwC7fya",
  "key16": "34rkFTokgpUU4TxFta49h78GZWw2uwBrK5bWYhMCZhv2nJZPSDoChQuzVLTesw79sMfqHtr6wR7vEsLzaaF7XPZn",
  "key17": "2rU77dwDWJAdFX8VMxLG6RAEgJZvPxQYjizR3xbRFupEDvAYrcJ4zdXsnraWQ1yr9gQQiCfS6Zm3ibHUW99ZvmA5",
  "key18": "4o5K89mA2GtffsicraVL6rJdY89bMMFjTriCDJ7h7rsn23SfTxX4Y5iyCBffu7DAaLB8XYR387eLdK34qZyBfDF2",
  "key19": "4V431jmY4va9FvWLRTHB3Fg7kv9WNEDndjVua5M8Vjdx8M976dGWncP68oRT5MMkryKJY5epD5eTFyNR6UtXGhb6",
  "key20": "3dDGQorkyjj6qZiRpmQMzc3VuovoAjBqUb6FANpG68EJGyyYKQR9t3RCy394VhDPvfUDqjRPJoP7ue98Poi9TPqB",
  "key21": "2RQb3cw7UxsS3PaaBy2whGUhtpvweCSSAnCgdRY6MGBUcTXF9K9LPzjw8XaVfejnVgVrai9Qxw4bhC5Z8skBqLH",
  "key22": "5qBsdYFgzTHkzE7qHLCk1RBXHnN7eyreVaeESqhTocUagwuBZQ9osFV5DC7xa3Ry8a7bt6GQaWuSqpnqLGoj3FPZ",
  "key23": "3MJTNd1gp3vhA4iUXNeoH1uhNTRaVs8QPgWujhRfrk6BGejGjRNwjSFAvFtfuD3wz2qhrey5RS1DNEZhF2E6chJw",
  "key24": "BKEZhSe66HmbAYaXKZvwqNnE3gYhWwCpk9rw1FJ2zXdyhDHp5JVnAwbXNkjj7Bva7p6V7Npz2U7krF3pKXwF3Qt",
  "key25": "5UVwGcNRvk2WoZVchSGmUig6rCtgaB8sXJu1fCaQyCQB53wFEL9oKM4LoFMawVJfSCQRdR4543hUssYrdstUzhU9",
  "key26": "QdazUFMdoBuugBg7fFciLmcKDvGHBYUWa6JcGKfEaKX4zhVZ29JRpiDnUWh4CXqiAP9inGN5DDzPi2QYmDNamFf",
  "key27": "3cnaFdMPhXSbEtk1J6NqMEcojTiV9hTKnmNDbRSCwPHi34jaJVCbbwAWhxa12yjF3kR7H2aPH9YCm85uNNeN3gjY"
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
