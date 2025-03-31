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
    "4VPk4J94tFrz43ccrTMXFXzfqvPcu2VkDETeCkBrHamd5rRBSbtvGyqRspgUmf2XFDVKrudNxayGJMXv1TwuBVsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DT3aLHgS2GcRX1FARb4vzfzxa9tm9kj4CWdyHEuVSiGhcZsWeYCFn2wTdwLHNnfdcgUpQ3ztxZTe2sRTt1j1Ch",
  "key1": "4rsNNiCiZmH9KayL5RYHf8B4pMj8x8HfjtvSqiMjoE3QgXwwToY4gcrXd9Qz8tGbEj4JtitrwzLXpkAmqBnLye5q",
  "key2": "4sEz3NZBBj2ngKwBkpg8x31MC9CLkgUGMW9C9Sbs9QYKspi72Dd8uktGxkbqoWpKoyuAr9HXD8dMucu5wqPYFjqh",
  "key3": "5mtmaadioTiYQp1MqxrWEKp4UZV5m6kLMetnDCuk67PRF1kkWxoaJZz4eZZ2u67EWo7zm4Snj3q7uKU2TagHwnqC",
  "key4": "7xndL5pzDntztqnMWwVNXvuTkeXSW8jRQHj7a3GnFeQDd6aVpEhoSshTcD672EQ6DgGKak8Y4TfDaAgpSwcvEWk",
  "key5": "5PDxHFnipXUhVjKDqYF6JCy6J1XdWjJVxxMAvf8X6D2aaYGE7bokbFMmFqCKc7bUrpfMT4RTxyKag9Hx9oDHDTQq",
  "key6": "4UEuzZdHZ9Nge2XRh8JJMQbnp4rCGwVJAUWK7JwJJU2MZoqhDq1TqzLB8Fh4pzyjsjTpsK4jCJQW47k7sM6owdtC",
  "key7": "2XdRBqn6kFCTPHru12vqyJbgCSoZknhwiq2dZEVgcrTUG4asgDVJpuVUGBQoEDfVMgssgvEnQuZAukP1P5scYK7d",
  "key8": "4W7EMJMxyCYi5F8xJmX9KsmKeMbUmUJ4DFzx9CrJuAQYtEgp6hvPUCDftVBRHFNGRReEdPZqVp93q7pfoT4PWJYc",
  "key9": "3RiKGkHJ65sjg882BgRxD1Vg7QNsXUtuf8VJQ9kLgJzYzaz465TKn7buFBoNZc6N3z9YmkxbVXJQWQEVWAwZQe4a",
  "key10": "5gfV1Uo88P1fEXZAMWg1TSEPYGTaJf6UjXJMFELrbSL4g3HoSN6mMY23MVDhvcDhySSK2QH6Z1t4XmwbGRkVu1b3",
  "key11": "3wToqMdzivk6fuJTfemPt4QmaMQdq8MgK4FWvaZEDa5QMEo1de3zZabVE5ZPVP1Q2EU5NGTawoLNJnkzLRiXWTud",
  "key12": "2ozcPcaXcn8EJNw6mgvVMLzMWNitjV7fTJmPEoSfw7MEHoBVFMGjb2qBiWnrnY5W9ENZm9oAcvaJZYZjxajmugE6",
  "key13": "4phLAzcsyWtjRJLwf4xhC14HpLkwzWfgrfXRLhtAHuYS42TWPaKcnKHQNnWWveZkoWdJPiJ43Sw34Lt3dakayQdr",
  "key14": "42jpDiKjCKUnhM1Q93pp9fe52mo8hhTpvsD7jdSENYayqiNgLbrXLTH47QzqFHm7jSF5SWaERRSvyu65oJE7ea1J",
  "key15": "4UFcxkpv6A7AmCDM4rJSf2ZhrnmDr8qGGQrUzZoGNuEFejZ1zGbKpwaAjsjSvNkgqh22EhbU5NEdRMnKesuFELPo",
  "key16": "62MjZfvuS6RGb6mNh2D4jqa8AdiNREVhmVUrgELTUzpYi8EHgGt7PYwkQ4WNkQjhoseKg4sG5hVCSdjoT5bsNS2V",
  "key17": "4QbN4ery8QscrTEA58riK8dTu7FL7xDeF2rHJRLdMX9Ln8ZdeYbh36wYNvtyN4PrWN43YcX9BPDZDdG7BqdT8Lwp",
  "key18": "2tRnFpreFuXqB7Q97uqZLemuJhVkNdXxSdD5Mw7j6gNHdFqdEFDKRQbUmt9mHRm14ykxQVmaN9oyUQpuW8rHfyVi",
  "key19": "4fzcwfDqh9XWLTHv8whMQ7Kn6rLBW9gUVejmBJ7ZBLJcEmi7tgrn8Rjz8zPTsodcxPhhfuRcJ4UtQKQj1c8RiJZS",
  "key20": "3C6XHgpLTRzVNY9RBtEUwZGpTJYuWoncmc4ZGJ9EDU6BYfuSJTgZAWGr3ShnrwRJoTtP8orQohf9Kgs9JhyYn3KT",
  "key21": "3MVgy1rjCwkLZtJSSryYX7L8tXqAx7cyy8CC3N38i1udo8MYUdvE7oQmcZu6oxyD9dDHtZHe1jNffoomERtz9fn3",
  "key22": "3QZpPMe8YRUjdFnbhWc2chSRwfNrJiMpBhEseQxxvVbXWf3FiULm1hfuTp6LAjZmAwFb6g28aG86YW56fQ3HzYyT",
  "key23": "54GQxkYswMujx1s24tkD95pT89aNWFPEjQv1AfGmN5e1pwCgSvpf5pdFUdohs7Lp5BsNoxFfFxrLqiyYieaXWHYW",
  "key24": "VeT7KKQpn34c1qmRHXzHMpnLiaockZ2tBoFDzwrFT2C3XAK35vdsuBK36nKD3MH4LT4quP66NV9vGQHssdRr1yj",
  "key25": "338ZeDY7WdBFesuL6LYZgEubJ2VHBtJAn9RcwHvLJsDAuJeukV3UgHHqb8h91a1VAqpxueRaH4NJXLu2hjT2GdqT",
  "key26": "hiQJD9nqU8cLiuTXp3LD5yuxGJWtWLG929muyV7dF9AKBdTJu7LE9U6ScdP2KTUxNo5TNURfqt4APfGdLfWy5K6"
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
