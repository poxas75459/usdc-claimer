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
    "4BYdiDeMBgKbRK1VgpAiVq32DiFvZzWVZLjtXk2Q2JKpe3QWsbs981Tvz4SLPFrUaKzYzVmSCqxJTPtfNxRyTkZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SiBDz2esVgoboc7gY6zw7XQWmyCnaK3bJjSKm5N5xhhmmto8Yi4uT9nbWqgG1V6m4fu87ggS3KVrZmGvwd9TRwg",
  "key1": "mveQk41UQFFmzuF18pyhVoGrYWeY2xSCu8UfdRDp5998L5aT6KdZb45euRCv5M8Su1T5WQbCcM7kzwSbL857V1e",
  "key2": "CKbCAKoPpynpquKdrJ8qh3BCJea7qRzn3duA8nfxmUZrdoeQy1FtTn7LAoBKtduLgtrPxYYSS8coekgFKZQrXTL",
  "key3": "Xwo8rUBqrXLRJ6S9dqpF8dAuRe7Jo8fU4PcyMBcSLY7ZDUi2K24HjTgQufBjnYtfiZUxKUxtKHHiANCAr6b7dsP",
  "key4": "y4BeNGjhgcF17pB99RNdQ3NCu42BYrq6M5Mj8wrfSNL2fxtTGUxRFCqu6cf7h5vtG9zVMoFZikQRHEA9xBN3mPC",
  "key5": "5EDtokYshg64BJkQAWtH4rG7AHgvrdHDD5kqwPnptfAnQpa9gwGH6bTqJ3R15vqjYGMjiTJM4EgHEuwYUxx9W2iy",
  "key6": "4UqWRgL3A8XwToNjLQccx6ZSYdFLEK1uezUuqfm6BtDHYnhw13T5szrXobRYVSD7ca7mPCbf4pwqH3H5bzUedkGY",
  "key7": "395PxH4cU7MT1SGUmuXJA2cha7NcJ8TAAnzUisPLHLCXmmrjxUV7894AUS2QPKSPWjGz6EFFCsF65hgnD7ECLbd9",
  "key8": "2gVw1KaNLm5PB58Eba28MdG2iYKzNpWYuQrCxX912FbRmueLoPX9W4i2msQYjUJxYvWW8nwaX6XRU6Ct22qkrx5N",
  "key9": "3BxvamquDb7LDv487PjhiqhJmvrm5KcamvYML6ZL2USG4KQiEV1BKUWDijEy6Axpg5X9VvxVxPVBaWqWFuUTTcBM",
  "key10": "4iAw9XfG4tfv4UpX2phAJVw2qErEduToY9YkQdwPzVsDnzqTwyBrt5NsAytMWstpNTt9r2rWai1s7qsPfUUetuAs",
  "key11": "3p6JsjvViAJfim9VVAg7KWr7MVbMJZtJmeZxm2zDSDGtfz3vKjDdqvmVJBEzMPNpZmK22LSWrcaqRz1nSRouTt7d",
  "key12": "4mTkJrptaT9QrW95q6vJi8SJs3Qjzjesk1gRVMjJz8JT62dBnRFa967LWiMgjHwDowZMAN7eFnyKLvWCDDgNCZ7U",
  "key13": "UduQK4ysoLYAQ4bsGCTHWTuu32tz9jCjNvkhpQJqVgZ4rcKtT1SsuHtVnPMzbf6j4iF96zHprswCu1qieyzYmQ4",
  "key14": "2oTujZ9popWKZUzNJitMQvet7S5R6t6moxzZGkmBCeGoHW4uHtTmPuNhmMvNRDTQihqmJiepVw5h8eE9s2MAHbax",
  "key15": "2tV1HKMy2uSkHKCzpfcJKwJeDBBf3P3SDN2KaFLJ3RC9efrNjLWUjjnT9KwapC3JTLuhvDz25McyyibGyfXaYWuv",
  "key16": "3kZDRvkowaUCteTY25bH5hb34K9hLKLWfnqJiE189nx532qgEmGF2aV79pQquP8Sjo7gQsCBs45946K8VvWCNWFJ",
  "key17": "3xzcyfy8EkkvQt6YTi6iHVN55CW6h5USqHYZDHWJFmvBaYU87cX1xo7npY3AN5E6Vjc1WQfq2rWsJUiTZZMckVQ7",
  "key18": "2w8JxrShJZ72cDr9YWQ7c8Kc71yj7NGdv826iNQXiNnUPWNynQxKdeifo9WrNU8jXZur5j4BNByU3HRoyojMYnUN",
  "key19": "5h7yp7biqCiYCX3mHtRjgTPmZXrK7RjxT9djxuVMbk2R3X7PDSZjh5iXHS55wRUmutKthWnKpsUx2JYpN4y2JBTZ",
  "key20": "3WtEVcEDjTbprFqijo3vzP7fayXwsQWJjcUKcxhJAfZbWNyJTavF6BwEQhEhbqRndFsbN4Lcq3sh5EybV5hxKi1b",
  "key21": "5f2wMjDFGwjFJgToF2zLdZL4mLCaLH1ZRXWQaFiaFjvqgvjDB1Mq3nNVR2K9aNWDWLVczyKgrFVi8Z4x9siDJB6v",
  "key22": "4p8mf5mRh4e3oYPtHBAAgzyCMLmBJ7fScKgDBSz5MTYBRuuY9ycSautVC3UQ2dsmJGfaoonNgrdqbsSQje9aFEu6",
  "key23": "egrHv2ZNF1Tho8DmonWyWEkyVZSQcTKfTZFgtvJXuuCcCH29XPMkVY9L3N4pzFiNYKNn7BTaDuU5ahrArs3UGmX",
  "key24": "39PSfPLrX2JkE3nbaKvFJjJU5cYNkPfQZdqvcDvAk23BHH3VAWJz6nMn4EiTBApESy8iAmZASk8UbLLT2Fo8Uj7h",
  "key25": "2PMfiyntJZfLTyxPg6PPeKANBL5xveAsi94P1orJL4X96NHyKUydncMtTrZWLw63CCXuWbnmkcQSDMuYtvyij3pX",
  "key26": "5XKaZxpD9fsW4kMLKhNZPBqRAF67Nhp1pQGJJTJT6sWQ3ZeA1urVeoDD3sfL73auna1mexRZ7jAGjvpjSm76mosx",
  "key27": "3av5GehDtDpykqV2f47rw6QGL3gYUpMD1KQNmhWz71Quu26fSiqK17wWekdeeaRPRFxychznSCPu2a5hJAfZuy3T",
  "key28": "jqDcwsHFi8ctXpd7qM5cUxwBDZbV31S4jH9w2AM7uMCTM1yCZ9fyXA5eTnrmhAhFHK4L2Z2nz85ks5YQDeMjdGj",
  "key29": "32oUZr6EdLuKrRSXgeuZkYwtxhJHfqWUkraFBt2ppZwyvg4NAR1YrGK5jqoHKGoHSKvqJiHC8XoKizoGbzfnPMrU",
  "key30": "4iUxGNxiBpV6JDTM93d9kY2E8CZo192MtuWyKqv5N5N5vgN1xDVN8MdYwegxFPYsU4qUMrTJ3JntSdRpbJP8WhkX",
  "key31": "5bS82MjhvvfPFWfZJgUnX6KKx7jbiQFGVoeLfkdums9PyNi7NQDHH7PCQeQC4nM6hxf5R1Agg3qnWMNopM7nkgnZ",
  "key32": "639GKW1eo6nbFF6MP6Gifrysid3weCPxkqLpQEEA2BCwADoN1Ny8ys823JopsGQYMuQicAgdM1VB12YVMrHdTUpY",
  "key33": "4MebMa1rCK2Z3XfC8ahEn9aWJZMwS4RTWTedRg5uvQTPtQuYzcEQYsmZpjTCFEiZKMVu65DCNA7AifzyEroaL9Bs",
  "key34": "22a7nSpJoqZX6GvcHNggKQq3y7BGDfMcYo9PdXa5NeVPmSzkJ5mSzJnZxhdkAmmnE6wukYcP3qCqX3WjBRvFgVvw",
  "key35": "WwMoneYSnRD4yVfReFSpn8TFpp5sFDRQgmMcLFVaxQeMs2pecijroGasSgSUXNmun2nJLnTYsP11mY1XS2ySyii",
  "key36": "2nAys3dbK4vsqdDHigR3CbqPX1dfb1JHZfmNVvhyGivw7gGucNMd3x3PfqMdLH3DNr6o4rPpdVEgRKkkPd1UG84a",
  "key37": "ehGyMpsLcSx2m3g9eq18zD6EUQt6yq1Njbp265TwT6whWrvisBDp9CLHW1Tq9ZXGj857GD8CqgEWR3WC2rH7SGb",
  "key38": "4XwuucURUT4fSqvbrgLzedgHt4AqXxToXnH25jySLBW8qJ2hUKMyrqEfrFMbsghd6iKMckkx7UAWxUXZTeRrd8K5",
  "key39": "44L9JvJUZoYCaQQfoFUFES544EktfivG6ihBxFbqNSEdqavBBV3pdQtqx1XK151JPk7F6s7kDn4xEmSfHiE6cvn9"
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
